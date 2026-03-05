import type { ComponentSpec } from "../../specs/spec.types";

export const CheckboxGroupSpec: ComponentSpec = {
  name: "CheckboxGroup",
  tier: 2,
  purpose: "Provides grouped multi-select choices using Checkbox controls.",
  variants: {
    orientation: {
      type: "enum",
      values: ["vertical", "horizontal"],
      default: "vertical",
    },
    disabled: {
      type: "boolean",
      default: false,
    },
  },
  states: ["default"],
  tokensUsed: ["--uds-spacing-8", "--uds-spacing-16", "--uds-text-primary"],
  accessibility: { role: "group", keyboard: ["Tab", "Space"] },
  antiPatterns: [
    "Do not use CheckboxGroup when only one value may be selected.",
    "Do not hide option labels.",
  ],
};
