export const TOGGLE_DEFAULTS = {
  className: "",
} as const;

export const TOGGLE_STORY_SPEC = {
  defaults: {
    className: TOGGLE_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
