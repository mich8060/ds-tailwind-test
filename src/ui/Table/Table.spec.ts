export const TABLE_DEFAULTS = {
  className: "",
} as const;

export const TABLE_STORY_SPEC = {
  defaults: {
    className: TABLE_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
