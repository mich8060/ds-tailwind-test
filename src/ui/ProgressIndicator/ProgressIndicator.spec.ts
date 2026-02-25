export const PROGRESS_INDICATOR_DEFAULTS = {
  className: "",
} as const;

export const PROGRESS_INDICATOR_STORY_SPEC = {
  defaults: {
    className: PROGRESS_INDICATOR_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
