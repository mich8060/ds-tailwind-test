import type { ComponentSpec } from "../../specs/spec.types";

export const LayoutSpec: ComponentSpec = {
  name: "Layout",
  tier: 2,
  purpose: "Creates token-driven flexbox layouts with controlled direction, alignment, wrapping, and width behavior.",
  variants: {
    direction: {
      type: "enum",
      values: ["row", "column"],
      default: "row"
    },
    justifyContent: {
      type: "enum",
      values: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
      default: "flex-start"
    },
    alignItems: {
      type: "enum",
      values: ["stretch", "flex-start", "center", "flex-end", "baseline"],
      default: "stretch"
    },
    wrap: {
      type: "enum",
      values: ["nowrap", "wrap", "wrap-reverse"],
      default: "nowrap"
    },
    gap: {
      type: "enum",
      values: [
        "0", "2", "4", "6", "8", "10", "12", "14", "16", "18", "24", "32", "48", "64", "80",
        "spacing-0", "spacing-2", "spacing-4", "spacing-6", "spacing-8", "spacing-10", "spacing-12",
        "spacing-14", "spacing-16", "spacing-18", "spacing-24", "spacing-32", "spacing-48", "spacing-64",
        "spacing-80", "auto"
      ],
      default: "0"
    },
    fullWidth: {
      type: "boolean",
      default: false
    },
    fullHeight: {
      type: "boolean",
      default: false
    },
    inline: {
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
  tokensUsed: [
    "--uds-spacing-0",
    "--uds-spacing-2",
    "--uds-spacing-4",
    "--uds-spacing-6",
    "--uds-spacing-8",
    "--uds-spacing-10",
    "--uds-spacing-12",
    "--uds-spacing-14",
    "--uds-spacing-16",
    "--uds-spacing-18",
    "--uds-spacing-24",
    "--uds-spacing-32",
    "--uds-spacing-48",
    "--uds-spacing-64",
    "--uds-spacing-80"
  ],
  accessibility: { role: "generic", keyboard: [] },
  antiPatterns: [
    "Do not use custom row or column wrappers when Layout can express the structure directly.",
    "Do not use legacy prop aliases like vertical, justify, or align.",
    "Do not omit direction, gap, or alignment when they are important to the structure."
  ]
};
