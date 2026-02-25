export const CHIP_DEFAULTS = {
  className: "",
} as const;

export const CHIP_STORY_SPEC = {
  defaults: {
    className: CHIP_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
