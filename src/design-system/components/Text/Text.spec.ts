import type { ComponentSpec } from "../../specs/spec.types";

export const TextSpec: ComponentSpec = {
  name: "Text",
  tier: 2,
  purpose: "Applies UDS typography variants with governed weight and leading options while preserving semantic tags via `as`.",
  variants: {
    variant: {
      type: "enum",
      values: [
        "display-128","display-96","display-72","display-60","display-48","display-36",
        "heading-32","heading-28","heading-24",
        "body-20","body-16","body-14","body-12"
      ],
      default: "body-16"
    },
    weight: { type: "enum", values: ["regular","medium","semibold","bold"], default: "regular" },
    leading: { type: "enum", values: ["tight","regular","loose"], default: "regular" }
  },
  states: ["default"],
  tokensUsed: [
    "--uds-font-family",
    "--uds-font-size-*",
    "--uds-line-*",
    "--uds-font-weight*",
    "--uds-type-*"
  ],
  accessibility: { role: "text", keyboard: [] },
  antiPatterns: [
    "Do not set font-size/line-height directly on consumer elements; use Text variant + leading.",
    "Do not reintroduce tailwind-like typography utilities that bypass semantic tokens."
  ]
};
