export const BREADCRUMB_DEFAULTS = {
  className: "",
} as const;

export const BREADCRUMB_STORY_SPEC = {
  defaults: {
    className: BREADCRUMB_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
