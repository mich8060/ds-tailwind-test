/**
 * Installs and builds `.consumer-perf` against the workspace package (`file:..`).
 * Requires `npm run build:lib` first so the parent package can be linked/packed correctly.
 */
import { spawnSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const perf = path.join(root, ".consumer-perf")

if (!fs.existsSync(path.join(root, "dist", "index.js"))) {
  console.error("test:consumer-fixture: dist/index.js missing — run `npm run build:lib` first.")
  process.exit(1)
}

const shell = process.platform === "win32"
const run = (command, args) => {
  const r = spawnSync(command, args, { cwd: perf, stdio: "inherit", shell })
  if (r.status !== 0) process.exit(r.status ?? 1)
}

run("npm", ["ci"])
run("npm", ["run", "build"])
console.log("test:consumer-fixture ok")
