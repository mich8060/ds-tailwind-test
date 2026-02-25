export const CALENDAR_DEFAULTS = {
  className: "",
} as const;

export const CALENDAR_STORY_SPEC = {
  defaults: {
    className: CALENDAR_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
