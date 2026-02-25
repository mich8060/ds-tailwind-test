export const TOAST_DEFAULTS = {
  className: "",
} as const;

export const TOAST_STORY_SPEC = {
  defaults: {
    className: TOAST_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
