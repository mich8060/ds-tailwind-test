export const TABS_DEFAULTS = {
  className: "",
} as const;

export const TABS_STORY_SPEC = {
  defaults: {
    className: TABS_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
