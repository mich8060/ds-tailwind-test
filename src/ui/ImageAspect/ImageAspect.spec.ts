export const IMAGE_ASPECT_DEFAULTS = {
  className: "",
} as const;

export const IMAGE_ASPECT_STORY_SPEC = {
  defaults: {
    className: IMAGE_ASPECT_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
