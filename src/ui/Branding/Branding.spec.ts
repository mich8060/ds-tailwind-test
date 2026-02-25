export const BRANDING_DEFAULTS = {
  className: "",
} as const;

export const BRANDING_STORY_SPEC = {
  defaults: {
    className: BRANDING_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
