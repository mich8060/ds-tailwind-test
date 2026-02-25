export const PILL_TOGGLE_DEFAULTS = {
  className: "",
} as const;

export const PILL_TOGGLE_STORY_SPEC = {
  defaults: {
    className: PILL_TOGGLE_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
