export const DOT_STATUS_DEFAULTS = {
  className: "",
} as const;

export const DOT_STATUS_STORY_SPEC = {
  defaults: {
    className: DOT_STATUS_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
