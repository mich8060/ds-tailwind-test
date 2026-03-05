import type { ComponentSpec } from "../../specs/spec.types";

export const ButtonGroupSpec: ComponentSpec = {
  name: "ButtonGroup",
  tier: 2,
  purpose: "Groups related button actions with consistent spacing and orientation.",
  variants: {
    orientation: {
      type: "enum",
      values: ["horizontal", "vertical"],
      default: "horizontal",
    },
    size: {
      type: "enum",
      values: ["xsmall", "small", "default", "large"],
      default: "default",
    },
  },
  states: ["default"],
  tokensUsed: ["--uds-spacing-8", "--uds-spacing-16"],
  accessibility: { role: "group", keyboard: ["Tab", "Enter", "Space"] },
  antiPatterns: [
    "Do not set button appearances in ButtonGroup options; grouped buttons are outline only.",
    "Do not mix unrelated actions in one ButtonGroup.",
  ],
};
