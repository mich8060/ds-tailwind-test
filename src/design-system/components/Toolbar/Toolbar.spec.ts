import type { ComponentSpec } from "../../specs/spec.types";

export const ToolbarSpec: ComponentSpec = {
  name: "Toolbar",
  tier: 2,
  purpose: "Top action bar with left and right action regions and centered title/branding.",
  variants: {},
  states: ["default"],
  tokensUsed: ["--uds-surface-primary", "--uds-border-primary", "--uds-spacing-8", "--uds-spacing-12", "--uds-spacing-16"],
  accessibility: { role: "toolbar", keyboard: [] },
};
