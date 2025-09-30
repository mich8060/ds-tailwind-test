// scripts/build-scss.js
import 'dotenv/config';
import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const MODE_NAME = (process.env.FIGMA_MODE_NAME || '').toLowerCase();

const TOK_DIR   = path.join(__dirname, '../tokens');
const OUT_SCSS_DIR = path.join(__dirname, '../src/scss');
const OUT_CSS_DIR  = path.join(__dirname, '../dist/css');

const SRC_LOCAL = path.join(TOK_DIR, 'figma-primary-local.json');
const SRC_PUB   = path.join(TOK_DIR, 'figma-primary-published.json');

function mustRead(p) {
  if (!fs.existsSync(p)) {
    console.error(`❌ Missing ${p}. Run: npm run pull:figma`);
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

const local     = mustRead(SRC_LOCAL);
const published = mustRead(SRC_PUB);

const VARS_LOCAL = local.meta?.variables ?? {};
const VARS_PUB   = published.meta?.variables ?? {};
const COLLS      = { ...(published.meta?.variableCollections ?? {}), ...(local.meta?.variableCollections ?? {}) };

const to255 = x => Math.round(x * 255);
const h2    = n => n.toString(16).padStart(2,'0').toUpperCase();
const colorToCss = c => (c?.a != null && c.a < 1)
  ? `rgba(${to255(c.r)},${to255(c.g)},${to255(c.b)},${+c.a.toFixed(3)})`
  : `#${h2(to255(c.r))}${h2(to255(c.g))}${h2(to255(c.b))}`;

const isUds = name => /^uds/i.test(name) || /^uds\//i.test(name);

/** kebab + replace slashes with dashes */
function sanitizeName(original) {
  // turn spaces into slashes first, then slash->dash at end
  const slashy = String(original).replace(/[ \t]+/g, '/');
  const parts  = slashy.split(/[\/]+/);
  const kebab  = parts.map(p => p.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()).join('-');
  let s = kebab.replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  if (!s.startsWith('uds-') && /^uds/i.test(original)) s = 'uds-' + s.replace(/^uds-?/, '');
  if (/^[0-9]/.test(s)) s = `tkn-${s}`;
  return s;
}

function needsPx(sanitized) {
  return /(^|-)spacing(-|$)/.test(sanitized)
      || /(^|-)sizing(-|$)/.test(sanitized)
      || /(^|-)radius(-|$)/.test(sanitized)
      || /(^|-)border(-)width(-|$)/.test(sanitized)
      || /(screen|breakpoint).*(min|max)/.test(sanitized);
}

function quoteIfNeeded(val) {
  if (typeof val !== 'string') return val;
  const t = val.trim();
  if (/^#|^rgba?\(|px$|rem$|%$/.test(t)) return t;
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) return t;
  return `"${t.replace(/"/g, '\\"')}"`;
}

function pickModeId(coll) {
  if (!coll) return null;
  if (MODE_NAME) {
    const m = coll.modes?.find(x => (x.name || '').toLowerCase() === MODE_NAME);
    if (m) return m.modeId;
  }
  return coll?.defaultModeId || coll?.modes?.[0]?.modeId || null;
}

function getRawFor(v, coll) {
  const modeId = pickModeId(coll);
  const byMode = v.valuesByMode || {};
  if (modeId && byMode[modeId] != null) return byMode[modeId];
  // fallback: first non-null
  for (const k of Object.keys(byMode)) {
    if (byMode[k] != null) return byMode[k];
  }
  return null;
}

/** resolve a var id following aliases; prefer LOCAL -> fallback PUBLISHED */
function resolve(varId, seen = new Set()) {
  if (!varId || seen.has(varId)) return null;
  seen.add(varId);

  const v = VARS_LOCAL[varId] || VARS_PUB[varId];
  if (!v) return null;
  const coll = COLLS[v.variableCollectionId];
  let raw = getRawFor(v, coll);
  if (raw == null) return null;

  if (typeof raw === 'object' && raw.type === 'VARIABLE_ALIAS') {
    return resolve(raw.id, seen);
  }
  if (v.resolvedType === 'COLOR') {
    if (raw && typeof raw === 'object' && 'r' in raw) return colorToCss(raw);
    if (typeof raw === 'string') return raw;
  }
  if (typeof raw === 'number') {
    const nameSan = sanitizeName(v.name);
    return needsPx(nameSan) ? `${raw}px` : raw;
  }
  if (typeof raw === 'string' || typeof raw === 'boolean') return raw;
  return null;
}

// Choose tokens (UDS only), dedupe by sanitized name, prefer collections with “semantic”
const collRank = collId => ((COLLS[collId]?.name || '').toLowerCase().includes('semantic') ? 0 : 1);
const chosen = new Map(); // nameSan -> { value, group, rank }

function considerMap(map) {
  for (const [id, v] of Object.entries(map)) {
    if (!isUds(v.name)) continue;
    let value = resolve(id);
    if (value == null) continue;

    const nameSan = sanitizeName(v.name);
    const group   = nameSan.split('-')[1] || 'misc';

    // special-case font family: force quotes
    if (nameSan === 'uds-font-family-primary') value = quoteIfNeeded(String(value));

    const valOut = quoteIfNeeded(value);
    const rank   = collRank(v.variableCollectionId);
    const prev   = chosen.get(nameSan);
    if (!prev || rank < prev.rank) {
      chosen.set(nameSan, { value: valOut, group, rank });
    }
  }
}
considerMap(VARS_LOCAL);
considerMap(VARS_PUB);

// group & order
const groups = {};
[...chosen.entries()]
  .sort((a,b)=>a[0].localeCompare(b[0]))
  .forEach(([name, info]) => {
    (groups[info.group] ||= []).push({ name, value: info.value });
  });

// write SCSS vars and CSS custom props
let scss = `// Auto-generated from Figma (UDS only). Do not edit.\n`;
let css  = `/* Auto-generated from Figma (UDS only). Do not edit. */\n:root{\n`;

for (const g of Object.keys(groups).sort()) {
  scss += `\n// === uds/${g} ===\n`;
  for (const { name, value } of groups[g]) {
    scss += `$${name}: ${value};\n`;
    // only emit CSS vars for serializable values (string/number/rgba/hex/px/rem/%/bool)
    if (typeof value === 'string' || /px$|rem$|%$|^#|^rgba?\(|^(true|false)$/.test(String(value))) {
      css += `  --${name}: ${value};\n`;
    }
  }
  css += `\n`;
}
css += `}\n`;

await fsp.mkdir(OUT_SCSS_DIR, { recursive: true });
await fsp.mkdir(OUT_CSS_DIR, { recursive: true });

await fsp.writeFile(path.join(OUT_SCSS_DIR, '_variables.scss'), scss, 'utf8');
await fsp.writeFile(path.join(OUT_SCSS_DIR, 'css-vars.scss'), css, 'utf8');
// also ship a pure CSS artifact so apps can import without SCSS
await fsp.writeFile(path.join(OUT_CSS_DIR, 'tokens.css'), css, 'utf8');

console.log('✓ Wrote:');
console.log('  - src/scss/_variables.scss');
console.log('  - src/scss/css-vars.scss');
console.log('  - dist/css/tokens.css');
