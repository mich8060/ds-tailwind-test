export const FIELD_DEFAULTS = {
  className: "",
} as const;

export const FIELD_STORY_SPEC = {
  defaults: {
    className: FIELD_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
