export const PLAYGROUND_DEFAULTS = {
  className: "",
} as const;

export const PLAYGROUND_STORY_SPEC = {
  defaults: {
    className: PLAYGROUND_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
