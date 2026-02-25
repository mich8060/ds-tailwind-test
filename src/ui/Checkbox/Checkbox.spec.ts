export const CHECKBOX_DEFAULTS = {
  className: "",
} as const;

export const CHECKBOX_STORY_SPEC = {
  defaults: {
    className: CHECKBOX_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
