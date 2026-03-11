import type { ComponentSpec } from "../../specs/spec.types";

export const LayoutSpec: ComponentSpec = {
  name: "Layout",
  tier: 2,
  purpose: "Creates token-driven flexbox layouts with controlled direction, alignment, wrapping, and width behavior.",
  variants: {
    fullWidth: {
      type: "boolean",
      default: false
    },
    appearance: {
      type: "enum",
      values: ["full", "equal", "right", "left"],
      default: "full"
    }
  },
  states: ["default"],
  tokensUsed: [],
  accessibility: { role: "generic", keyboard: [] }
};
