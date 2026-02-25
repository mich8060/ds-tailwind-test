export const FILE_UPLOAD_DEFAULTS = {
  className: "",
} as const;

export const FILE_UPLOAD_STORY_SPEC = {
  defaults: {
    className: FILE_UPLOAD_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
