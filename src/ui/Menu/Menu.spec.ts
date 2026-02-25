export const MENU_DEFAULTS = {
  className: "",
} as const;

export const MENU_STORY_SPEC = {
  defaults: {
    className: MENU_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
