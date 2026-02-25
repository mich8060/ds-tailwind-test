export const PAGINATION_DEFAULTS = {
  className: "",
} as const;

export const PAGINATION_STORY_SPEC = {
  defaults: {
    className: PAGINATION_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
