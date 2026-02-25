export const STEPS_DEFAULTS = {
  className: "",
} as const;

export const STEPS_STORY_SPEC = {
  defaults: {
    className: STEPS_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
