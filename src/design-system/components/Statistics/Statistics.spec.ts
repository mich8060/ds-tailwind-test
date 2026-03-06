import type { ComponentSpec } from "../../specs/spec.types";

export const StatisticsSpec: ComponentSpec = {
  name: "Statistics",
  tier: 2,
  purpose: "Displays a KPI value with optional context, trend, and icon.",
  variants: {
    trend: {
      type: "enum",
      values: ["up", "down", "neutral"],
      default: "neutral",
    },
    iconAccent: {
      type: "enum",
      values: [
        "amber",
        "aqua",
        "blue",
        "cyan",
        "emerald",
        "fuchsia",
        "green",
        "indigo",
        "lime",
        "magenta",
        "orange",
        "purple",
        "red",
        "rose",
        "sky",
        "violet",
        "yellow",
      ],
      default: "blue",
    },
  },
  states: ["default"],
  tokensUsed: [
    "--uds-surface-secondary",
    "--uds-surface-primary",
    "--uds-border-primary",
    "--uds-radius-8",
    "--uds-text-secondary",
    "--uds-system-success-primary",
    "--uds-system-destructive-primary",
  ],
  accessibility: { role: "status", keyboard: [] },
  antiPatterns: [
    "Do not use Statistics for interactive controls.",
    "Do not place long paragraph content inside helper text.",
  ],
};
