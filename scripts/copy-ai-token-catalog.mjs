import { cp, mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const source = `${rootDir}/src/ai/tokens/catalog.json`;
const destination = `${rootDir}/dist/ai/tokens/catalog.json`;

await mkdir(dirname(destination), { recursive: true });
await cp(source, destination);

console.log("Copied AI token catalog to dist/ai/tokens/catalog.json");
