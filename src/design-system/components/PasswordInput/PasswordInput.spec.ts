import type { ComponentSpec } from "../../specs/spec.types";

export const PasswordInputSpec: ComponentSpec = {
  name: "PasswordInput",
  tier: 2,
  purpose: "Describe purpose.",
  variants: {},
  states: ["default"],
  tokensUsed: [],
  accessibility: { role: "generic", keyboard: [] }
};
