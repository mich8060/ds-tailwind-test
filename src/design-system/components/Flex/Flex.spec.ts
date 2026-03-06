import type { ComponentSpec } from "../../specs/spec.types";

export const FlexSpec: ComponentSpec = {
  name: "Flex",
  tier: 2,
  purpose: "Creates token-driven flexbox layouts with controlled direction, alignment, wrapping, and width behavior.",
  variants: {
    fullWidth: {
      type: "boolean",
      default: false
    },
    span: {
      type: "boolean",
      default: false
    }
  },
  states: ["default"],
  tokensUsed: [],
  accessibility: { role: "generic", keyboard: [] }
};
