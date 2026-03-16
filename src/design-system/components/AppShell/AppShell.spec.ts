import type { ComponentSpec } from "../../specs/spec.types";

export const AppShellSpec: ComponentSpec = {
  name: "AppShell",
  tier: 1,
  purpose:
    "Top-level application shell that composes menu, listview, main, side panel, and footer regions for consistent page architecture.",
  variants: {
    brand: {
      type: "enum",
      values: ["default", "comphealth", "weatherby", "connect", "locumsmart", "modio", "gms", "chg", "wireframe"],
      default: "default",
    },
    theme: {
      type: "enum",
      values: ["light", "dark"],
      default: "light",
    },
  },
  states: ["default"],
  tokensUsed: [
    "--uds-surface-primary",
    "--uds-text-primary",
    "--uds-border-primary",
    "--uds-spacing-24",
  ],
  accessibility: { role: "application", keyboard: ["Tab"] },
};
