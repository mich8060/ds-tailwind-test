export const KEY_DEFAULTS = {
  className: "",
} as const;

export const KEY_STORY_SPEC = {
  defaults: {
    className: KEY_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
