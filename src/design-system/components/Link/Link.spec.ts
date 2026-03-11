import type { ComponentSpec } from "../../specs/spec.types";

export const LinkSpec: ComponentSpec = {
  name: "Link",
  tier: 1,
  purpose: "Provides inline navigation and action links using semantic text-link tokens.",
  variants: {
    appearance: {
      type: "enum",
      values: ["primary", "secondary"],
      default: "primary",
    },
    underline: {
      type: "enum",
      values: ["always", "hover", "none"],
      default: "always",
    },
    disabled: {
      type: "boolean",
      default: false,
    },
  },
  states: ["default", "hover", "active", "visited", "focus", "disabled"],
  tokensUsed: [
    "--uds-text-link-primary-default",
    "--uds-text-link-primary-hover",
    "--uds-text-link-primary-active",
    "--uds-text-link-primary-visited",
    "--uds-text-link-secondary-default",
    "--uds-text-link-secondary-hover",
    "--uds-text-link-secondary-active",
    "--uds-text-link-secondary-visited",
    "--uds-focus-ring-width",
    "--uds-focus-ring-border",
    "--uds-focus-ring-offset",
  ],
  accessibility: {
    role: "link",
    keyboard: ["Enter activates link", "Tab/Shift+Tab moves focus"],
  },
  antiPatterns: [
    "Using Link for button-like actions that do not navigate.",
    "Relying on color only without visible text for meaning.",
  ],
};
