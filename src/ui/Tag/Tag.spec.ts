export const TAG_DEFAULTS = {
  className: "",
} as const;

export const TAG_STORY_SPEC = {
  defaults: {
    className: TAG_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
