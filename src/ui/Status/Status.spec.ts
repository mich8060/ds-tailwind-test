export const STATUS_DEFAULTS = {
  className: "",
} as const;

export const STATUS_STORY_SPEC = {
  defaults: {
    className: STATUS_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
