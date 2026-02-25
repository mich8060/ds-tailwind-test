export const MODAL_DEFAULTS = {
  className: "",
} as const;

export const MODAL_STORY_SPEC = {
  defaults: {
    className: MODAL_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
