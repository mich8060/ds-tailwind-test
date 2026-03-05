import type { ComponentSpec } from "../../specs/spec.types";

export const RadioGroupSpec: ComponentSpec = {
  name: "RadioGroup",
  tier: 2,
  purpose: "Provides grouped single-select choices using Radio controls.",
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
  accessibility: { role: "radiogroup", keyboard: ["Tab", "ArrowUp", "ArrowDown", "Space"] },
  antiPatterns: [
    "Do not use RadioGroup when users can select more than one option.",
    "Do not omit visible labels when context is unclear.",
  ],
};
