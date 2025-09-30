// scripts/fetch-figma.js
import 'dotenv/config';
import fs from 'fs';
import fsp from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const FIGMA_TOKEN   = process.env.FIGMA_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;
const OUT_DIR = path.join(__dirname, '../tokens');

if (!FIGMA_TOKEN || !FIGMA_FILE_ID) {
  console.error('❌ Missing FIGMA_TOKEN and/or FIGMA_FILE_ID in .env');
  process.exit(1);
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// tunables via env (fallback defaults)
const TIMEOUT_MS = Number(process.env.HTTP_TIMEOUT_MS || 45000);
const RETRIES    = Number(process.env.HTTP_RETRIES || 3);

async function fetchJson(url) {
  let err;
  for (let attempt = 1; attempt <= RETRIES; attempt++) {
    const ac = new AbortController();
    const to = setTimeout(() => ac.abort(), TIMEOUT_MS);
    const started = Date.now();
    try {
      const res = await fetch(url, {
        headers: { 'X-Figma-Token': FIGMA_TOKEN },
        // Node’s fetch uses undici; this header sometimes avoids proxy/cdn oddities
        // and reduces chance of HTTP/2 weirdness on some networks.
        // You can remove if undesired.
        // @ts-ignore
        duplex: 'half',
        signal: ac.signal
      });
      const elapsed = Date.now() - started;
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const json = await res.json();
      clearTimeout(to);
      console.log(`↳ ${url} (${elapsed}ms, attempt ${attempt}/${RETRIES})`);
      return json;
    } catch (e) {
      clearTimeout(to);
      err = e;
      const backoff = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
      console.warn(`⚠️  ${url} failed on attempt ${attempt}/${RETRIES}: ${e.message}. Retrying in ${backoff}ms…`);
      await new Promise(r => setTimeout(r, backoff));
    }
  }
  throw err;
}

async function pull(kind) {
  const url = `https://api.figma.com/v1/files/${FIGMA_FILE_ID}/variables/${kind}`;
  const data = await fetchJson(url);
  const outPath = path.join(OUT_DIR, `figma-primary-${kind}.json`);
  await fsp.writeFile(outPath, JSON.stringify(data, null, 2));
  console.log(`✓ Wrote ${path.relative(process.cwd(), outPath)}`);
}

(async () => {
  try {
    // quick ping to validate file id (also uses retries)
    await fetchJson(`https://api.figma.com/v1/files/${FIGMA_FILE_ID}`);
    console.log('📄 File key OK. Pulling variables…');

    await pull('local');
    await pull('published');

    console.log('🚀 Done pulling Figma variables.');
  } catch (e) {
    console.error('❌ Pull failed:', e.message);
    process.exit(1);
  }
})();
