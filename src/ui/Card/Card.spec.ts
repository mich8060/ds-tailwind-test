export const CARD_DEFAULTS = {
  className: "",
} as const;

export const CARD_STORY_SPEC = {
  defaults: {
    className: CARD_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
