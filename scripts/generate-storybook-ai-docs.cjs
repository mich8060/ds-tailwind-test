const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const UI_DIR = path.join(ROOT, "src/ui");
const OUT_DIR = path.join(ROOT, "src/stories/generated");

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function escapeTemplateLiteral(content) {
  return content.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function readComponentDirs() {
  return fs
    .readdirSync(UI_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function buildDocFile(componentName) {
  const aiPath = path.join(UI_DIR, componentName, `${componentName}.ai.md`);
  if (!fs.existsSync(aiPath)) return null;

  const componentPath = path.join(UI_DIR, componentName, componentName);
  const hasTsx = fs.existsSync(`${componentPath}.tsx`);
  const importPath = hasTsx
    ? `../../ui/${componentName}/${componentName}`
    : `../../ui/${componentName}/${componentName}.jsx`;

  const aiMarkdown = fs.readFileSync(aiPath, "utf8").trim();
  const escaped = escapeTemplateLiteral(aiMarkdown);

  return [
    'import { Meta, Markdown } from "@storybook/addon-docs/blocks";',
    `import ${componentName} from "${importPath}";`,
    "",
    `<Meta title="Components/${componentName}/AI Docs" component={${componentName}} />`,
    "",
    `<Markdown>{\`${escaped}\`}</Markdown>`,
    "",
  ].join("\n");
}

function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const generatedFiles = [];
  const componentDirs = readComponentDirs();

  componentDirs.forEach((componentName) => {
    const output = buildDocFile(componentName);
    if (!output) return;

    const outPath = path.join(OUT_DIR, `${componentName}.docs.mdx`);
    fs.writeFileSync(outPath, output, "utf8");
    generatedFiles.push(toPosix(path.relative(ROOT, outPath)));
  });

  console.log(`Generated ${generatedFiles.length} Storybook AI docs pages.`);
  generatedFiles.forEach((file) => console.log(`- ${file}`));
}

run();
