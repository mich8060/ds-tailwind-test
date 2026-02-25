export const TEXTAREA_DEFAULTS = {
  className: "",
} as const;

export const TEXTAREA_STORY_SPEC = {
  defaults: {
    className: TEXTAREA_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
