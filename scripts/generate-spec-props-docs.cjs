const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ts = require("typescript");

const ROOT = path.resolve(__dirname, "..");
const OUT_PATH = path.join(
  ROOT,
  "src/ui/_spec/generated/spec-props-reference.md",
);

function loadTsModule(relativePath) {
  const absPath = path.join(ROOT, relativePath);
  const source = fs.readFileSync(absPath, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: absPath,
  });

  const sandbox = {
    module: { exports: {} },
    require,
    __dirname: path.dirname(absPath),
    __filename: absPath,
    console,
  };
  sandbox.exports = sandbox.module.exports;

  vm.runInNewContext(outputText, sandbox, { filename: absPath });
  return sandbox.module.exports;
}

function formatValue(value) {
  if (Array.isArray(value)) {
    if (value.every((item) => typeof item === "string" || typeof item === "number")) {
      return `\`${value.join(" | ")}\``;
    }
    return `\`${JSON.stringify(value)}\``;
  }
  if (value && typeof value === "object") return `\`${JSON.stringify(value)}\``;
  if (value === "") return "`\"\"`";
  return `\`${String(value)}\``;
}

function toRows(defaults, options = {}) {
  return Object.keys(defaults).map((key) => ({
    prop: key,
    defaultValue: formatValue(defaults[key]),
    optionsValue: key in options ? formatValue(options[key]) : "-",
  }));
}

const buttonSpec = loadTsModule("src/ui/Button/Button.spec.ts");
const accordionSpec = loadTsModule("src/ui/Accordion/Accordion.spec.ts");
const inputSpec = loadTsModule("src/ui/Input/Input.spec.ts");
const dropdownSpec = loadTsModule("src/ui/Dropdown/Dropdown.spec.ts");

const componentSpecs = [
  {
    component: "Button",
    source: "src/ui/Button/Button.spec.ts",
    defaults: {
      label: "Button",
      icon: "Plus",
      appearance: buttonSpec.BUTTON_DEFAULTS.appearance,
      layout: buttonSpec.BUTTON_DEFAULTS.layout,
      size: buttonSpec.BUTTON_DEFAULTS.size,
    },
    options: {
      appearance: buttonSpec.BUTTON_APPEARANCES,
      layout: buttonSpec.BUTTON_LAYOUTS,
      size: buttonSpec.BUTTON_SIZES,
    },
  },
  {
    component: "Accordion",
    source: "src/ui/Accordion/Accordion.spec.ts",
    defaults: accordionSpec.ACCORDION_STORY_SPEC.defaults,
    options: {
      expandedFirst: [false, true],
    },
  },
  {
    component: "Input",
    source: "src/ui/Input/Input.spec.ts",
    defaults: inputSpec.INPUT_STORY_SPEC.defaults,
    options: inputSpec.INPUT_STORY_SPEC.options,
  },
  {
    component: "Dropdown",
    source: "src/ui/Dropdown/Dropdown.spec.ts",
    defaults: dropdownSpec.DROPDOWN_STORY_SPEC.defaults,
    options: dropdownSpec.DROPDOWN_STORY_SPEC.options,
  },
];

const lines = [
  "# Spec Props Reference",
  "",
  "> Auto-generated from component specs. Do not edit manually.",
  "",
];

componentSpecs.forEach(({ component, source, defaults, options }) => {
  lines.push(`## ${component}`);
  lines.push("");
  lines.push(`Source: \`${source}\``);
  lines.push("");
  lines.push("| Prop | Default | Options |");
  lines.push("|------|---------|---------|");
  toRows(defaults, options).forEach((row) => {
    lines.push(`| ${row.prop} | ${row.defaultValue} | ${row.optionsValue} |`);
  });
  lines.push("");
});

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, `${lines.join("\n")}\n`, "utf8");

console.log(`Generated ${path.relative(ROOT, OUT_PATH)}`);
