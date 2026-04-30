import fs from 'node:fs/promises'
import path from 'node:path'

const distDir = new URL('../dist/', import.meta.url)
const files = []

async function walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(entryPath)
      continue
    }
    if (entry.name.endsWith('.d.ts') || entry.name.endsWith('.d.ts.map')) {
      files.push(entryPath)
    }
  }
}

function normalizeRelative(fromFile, targetFile) {
  let relativePath = path.relative(path.dirname(fromFile), targetFile)
  if (!relativePath.startsWith('.')) relativePath = `./${relativePath}`
  return relativePath.replace(/\\/g, '/')
}

await walk(distDir.pathname)

for (const file of files) {
  const raw = await fs.readFile(file, 'utf8')
  const rewritten = raw.replace(
    /from\s+['"]@\/([^'"]+)['"]/g,
    (_, target) => `from '${normalizeRelative(file, path.join(distDir.pathname, target))}'`,
  )
  await fs.writeFile(file, rewritten)
}
