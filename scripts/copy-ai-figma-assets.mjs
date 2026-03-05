import { cp, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));

const copies = [
  {
    source: `${rootDir}/src/ai/figma-make.contract.json`,
    destination: `${rootDir}/dist/ai/figma-make.contract.json`,
  },
  {
    source: `${rootDir}/src/ai/figma-make.md`,
    destination: `${rootDir}/dist/ai/figma-make.md`,
  },
  {
    source: `${rootDir}/src/ai/prompts/figma-make.prompt.md`,
    destination: `${rootDir}/dist/ai/prompts/figma-make.prompt.md`,
  },
];

for (const item of copies) {
  await mkdir(dirname(item.destination), { recursive: true });
  await cp(item.source, item.destination);
}

console.log("Copied Figma Make AI assets to dist/ai.");
