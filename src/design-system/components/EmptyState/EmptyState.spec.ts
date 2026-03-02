import type { ComponentSpec } from "../../specs/spec.types";

export const EmptyStateSpec: ComponentSpec = {
  name: "EmptyState",
  tier: 2,
  purpose: "Provide a clear, branded fallback when a section has no content, data, or search results.",
  variants: {
    align: {
      type: "enum",
      values: ["left", "center"],
      default: "center",
    },
  },
  states: ["default"],
  tokensUsed: [
    "--uds-surface-secondary",
    "--uds-border-primary",
    "--uds-radius-8",
    "--uds-text-primary",
    "--uds-text-secondary",
    "--uds-spacing-24",
  ],
  accessibility: { role: "region", keyboard: [] },
  antiPatterns: [
    "Do not use EmptyState when content is loading; use a loading indicator instead.",
    "Do not place multiple primary actions inside a single EmptyState.",
  ],
};
