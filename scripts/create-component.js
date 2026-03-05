import fs from "node:fs";
import path from "node:path";

function pascalToKebab(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

const [, , rawName] = process.argv;
if (!rawName) {
  console.error("Usage: npm run generate:component -- <ComponentName>");
  process.exit(1);
}

const componentName = rawName.replace(/[^a-zA-Z0-9]/g, "");
const kebab = pascalToKebab(componentName);
const dir = path.join(process.cwd(), "src/design-system/components", componentName);

if (fs.existsSync(dir)) {
  console.error(`Component folder already exists: ${dir}`);
  process.exit(1);
}

fs.mkdirSync(dir, { recursive: true });

const files = [
  {
    name: `${componentName}.tsx`,
    content: `import React from "react";\nimport "./_${kebab}.scss";\n\nexport function ${componentName}({ children }: { children?: React.ReactNode }) {\n  return <div className="uds-${kebab}">{children ?? "${componentName}"}</div>;\n}\n`
  },
  {
    name: `${componentName}.types.ts`,
    content: `export interface ${componentName}Props {}\n`
  },
  {
    name: `${componentName}.spec.ts`,
    content: `import type { ComponentSpec } from "../../specs/spec.types";\n\nexport const ${componentName}Spec: ComponentSpec = {\n  name: "${componentName}",\n  tier: 2,\n  purpose: "Describe purpose.",\n  variants: {},\n  states: ["default"],\n  tokensUsed: [],\n  accessibility: { role: "generic", keyboard: [] }\n};\n`
  },
  {
    name: `${componentName}.figma.tsx`,
    content: `import React from "react";\nimport { ${componentName} } from "./${componentName}";\n\nexport const figmaNodeUrl = "https://www.figma.com/file/FILE_ID/Library?node-id=NODE_ID";\n\nexport default {\n  figmaNodeUrl,\n  component: ${componentName},\n  props: {\n    children: ["${componentName}"]\n  }\n};\n`
  },
  {
    name: `_${kebab}.tokens.scss`,
    content: `// Map semantic tokens to component-local vars\n@use "../../tokens/index" as *;\n\n$${kebab}-example: var(--spacing-2);\n`
  },
  {
    name: `_${kebab}.scss`,
    content: `@use "./${kebab}.tokens" as *;\n\n.uds-${kebab} {\n  padding: $${kebab}-example;\n  background: var(--color-surface-1);\n  border: 1px solid var(--color-border-subtle);\n  border-radius: var(--radius-sm);\n}\n`
  },
  {
    name: `${componentName}.stories.tsx`,
    content: `import React from "react";\nimport { ${componentName} } from "./${componentName}";\n\nexport default { title: "Components/${componentName}", component: ${componentName} };\n\nexport const Default = {\n  args: {\n    children: "${componentName}"\n  }\n};\n`
  },
  {
    name: `${kebab}.test.tsx`,
    content: `// Add tests in your preferred runner (Vitest/Jest).\nexport {};\n`
  },
  {
    name: "index.ts",
    content: `export { ${componentName} } from "./${componentName}";\nexport type { ${componentName}Props } from "./${componentName}.types";\n`
  },
  {
    name: "README.md",
    content: `# ${componentName}\n\nTier: 2\n\nPurpose:\n- TODO\n`
  }
];

for (const f of files) {
  fs.writeFileSync(path.join(dir, f.name), f.content, "utf-8");
}

console.log(`Created component at: ${dir}`);
