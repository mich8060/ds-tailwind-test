import type { ComponentSpec } from "../../specs/spec.types";

export const ScrollViewSpec: ComponentSpec = {
  name: "ScrollView",
  tier: 2,
  purpose: "Provides a container with controlled scroll direction.",
  variants: {
    direction: {
      type: "enum",
      values: ["vertical", "horizontal"],
      default: "vertical",
    },
  },
  states: ["default"],
  tokensUsed: [],
  accessibility: { role: "generic", keyboard: [] },
};
