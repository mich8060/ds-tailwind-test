export const AVATAR_DEFAULTS = {
  className: "",
} as const;

export const AVATAR_STORY_SPEC = {
  defaults: {
    className: AVATAR_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
