export const EVENT_CARD_DEFAULTS = {
  className: "",
} as const;

export const EVENT_CARD_STORY_SPEC = {
  defaults: {
    className: EVENT_CARD_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
