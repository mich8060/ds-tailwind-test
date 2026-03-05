import type { ComponentSpec } from "../../specs/spec.types";

export const ChecklistSpec: ComponentSpec = {
  name: "Checklist",
  tier: 2,
  purpose: "Sidebar checklist for multi-step flows with completion status.",
  variants: {},
  states: ["default", "active", "completed", "disabled"],
  tokensUsed: [
    "--uds-surface-primary",
    "--uds-border-primary",
    "--uds-text-primary",
    "--uds-text-secondary",
    "--uds-surface-brand-primary",
    "--uds-spacing-8",
    "--uds-spacing-12",
    "--uds-spacing-20",
    "--uds-spacing-24",
  ],
  accessibility: { role: "navigation", keyboard: ["Tab", "Enter", "Space"] },
};
