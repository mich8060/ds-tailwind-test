export const BUTTON_LAYOUTS = [
  "label-only",
  "icon-left",
  "icon-right",
  "icon-only",
  "only",
] as const;

export const BUTTON_APPEARANCES = [
  "primary",
  "soft",
  "outline",
  "text",
  "ghost",
  "disabled",
  "destructive",
] as const;

export const BUTTON_SIZES = ["large", "default", "small", "xsmall"] as const;

export const BUTTON_DEFAULTS = {
  appearance: "primary",
  layout: "label-only",
  size: "default",
} as const;

export const BUTTON_CLASS_MAP = {
  layout: {
    "label-only": "label-only",
    "icon-left": "icon-left",
    "icon-right": "icon-right",
    "icon-only": "icon-only",
    only: "only",
  } as const,
  appearance: {
    primary: "primary",
    soft: "soft",
    outline: "outline",
    text: "text",
    ghost: "ghost",
    disabled: "disabled",
    destructive: "destructive",
  } as const,
  size: {
    large: "large",
    default: "default",
    small: "small",
    xsmall: "xsmall",
  } as const,
} as const;

export const BUTTON_BASE_CLASS = "uds-button";
