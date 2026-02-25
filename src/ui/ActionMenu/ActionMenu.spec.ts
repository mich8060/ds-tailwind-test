export const ACTION_MENU_DEFAULTS = {
  className: "",
} as const;

export const ACTION_MENU_STORY_SPEC = {
  defaults: {
    className: ACTION_MENU_DEFAULTS.className,
  },
  stories: {
    default: {},
  },
} as const;
