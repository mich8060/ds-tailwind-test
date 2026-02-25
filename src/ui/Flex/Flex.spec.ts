export const FLEX_DEFAULTS = {
  className: "",
} as const;

export const FLEX_STORY_SPEC = {
  defaults: {
    className: FLEX_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
