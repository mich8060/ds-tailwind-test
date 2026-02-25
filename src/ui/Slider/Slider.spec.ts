export const SLIDER_DEFAULTS = {
  className: "",
} as const;

export const SLIDER_STORY_SPEC = {
  defaults: {
    className: SLIDER_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
