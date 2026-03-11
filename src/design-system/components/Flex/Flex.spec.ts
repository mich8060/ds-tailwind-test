import type { ComponentSpec } from "../../specs/spec.types";

export const FlexSpec: ComponentSpec = {
  name: "Flex",
  tier: 1,
  purpose: "Creates token-driven flexbox layouts with controlled direction, alignment, wrapping, and spacing.",
  variants: {
    direction: {
      type: "enum",
      values: ["row", "column"],
      default: "row",
    },
    justifyContent: {
      type: "enum",
      values: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
      default: "flex-start",
    },
    alignItems: {
      type: "enum",
      values: ["stretch", "flex-start", "center", "flex-end", "baseline"],
      default: "stretch",
    },
    wrap: {
      type: "enum",
      values: ["nowrap", "wrap", "wrap-reverse"],
      default: "nowrap",
    },
  },
  states: ["default"],
  tokensUsed: ["--uds-gap-*", "--uds-spacing-*"],
  accessibility: { role: "generic", keyboard: ["Tab"] },
};
