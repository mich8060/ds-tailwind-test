export const BADGE_DEFAULTS = {
  className: "",
} as const;

export const BADGE_STORY_SPEC = {
  defaults: {
    className: BADGE_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
