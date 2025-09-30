import fs from 'node:fs/promises';

const { FIGMA_TOKEN, FIGMA_FILE_ID } = process.env;
if (!FIGMA_TOKEN || !FIGMA_FILE_ID) {
  console.error('Missing FIGMA_TOKEN or FIGMA_FILE_ID');
  process.exit(1);
}

async function get(url) {
  const res = await fetch(url, { headers: { 'X-FIGMA-TOKEN': FIGMA_TOKEN } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} – ${url}`);
  return res.json();
}

const base = 'https://api.figma.com/v1';
const local = await get(`${base}/files/${FIGMA_FILE_ID}/variables/local`);

const vars = local.meta.variables;
const colls = local.meta.variableCollections;

const to255 = x => Math.round(x * 255);
const h2 = n => n.toString(16).padStart(2, '0').toUpperCase();
const colorToCss = c => (c?.a != null && c.a < 1)
  ? `rgba(${to255(c.r)},${to255(c.g)},${to255(c.b)},${+c.a.toFixed(3)})`
  : `#${h2(to255(c.r))}${h2(to255(c.g))}${h2(to255(c.b))}`;

function valueForDefaultMode(v) {
  const coll = colls[v.variableCollectionId];
  const mode = coll?.defaultModeId;
  return v.valuesByMode?.[mode];
}

let scss = `// Auto-generated from Figma Variables. Do not edit.\n`;
let css  = `/* Auto-generated from Figma Variables. Do not edit. */\n:root{\n`;

for (const v of Object.values(vars)) {
  const name = v.name.trim().replace(/\s+/g, '-').toLowerCase();
  const val = valueForDefaultMode(v);

  if (val && typeof val === 'object' && 'type' in val && val.type === 'VARIABLE_ALIAS') {
    const target = vars[val.id];
    const targetName = target?.name?.trim().replace(/\s+/g, '-').toLowerCase();
    scss += `$${name}: $${targetName};\n`;
  } else {
    let out = val;
    if (v.resolvedType === 'COLOR' && val) out = colorToCss(val);
    scss += `$${name}: ${out};\n`;
    if (out != null) css += `  --${name}: ${out};\n`;
  }
}
css += `}\n`;

await fs.writeFile('src/scss/_variables.scss', scss, 'utf8');
await fs.writeFile('src/scss/css-vars.scss', `@use "./variables" as vars;\n` + css, 'utf8');

console.log('Wrote src/scss/_variables.scss and src/scss/css-vars.scss');