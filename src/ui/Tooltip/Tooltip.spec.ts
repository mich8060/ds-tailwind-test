export const TOOLTIP_DEFAULTS = {
  className: "",
} as const;

export const TOOLTIP_STORY_SPEC = {
  defaults: {
    className: TOOLTIP_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
