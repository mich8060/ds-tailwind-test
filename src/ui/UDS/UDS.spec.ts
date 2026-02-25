export const UDS_DEFAULTS = {
  className: "",
} as const;

export const UDS_STORY_SPEC = {
  defaults: {
    className: UDS_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
