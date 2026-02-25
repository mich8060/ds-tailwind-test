export const INPUT_BASE_CLASS = "uds-input";

export const INPUT_SIZES = ["compact", "default"] as const;
export const INPUT_STATES = ["default", "focused", "error", "disabled"] as const;
export const INPUT_ICON_POSITIONS = ["left", "right"] as const;

export const INPUT_DEFAULTS = {
  type: "text",
  size: "default",
  state: "default",
  disabled: false,
  iconPosition: "right",
  className: "",
} as const;

export const INPUT_CLASS_MAP = {
  size: {
    compact: "compact",
    default: "default",
  } as const,
  state: {
    default: "default",
    focused: "focused",
    error: "error",
    disabled: "disabled",
  } as const,
} as const;

export const INPUT_STORY_SPEC = {
  defaults: {
    value: "",
    placeholder: "Type here...",
    type: INPUT_DEFAULTS.type,
    size: INPUT_DEFAULTS.size,
    state: INPUT_DEFAULTS.state,
    disabled: INPUT_DEFAULTS.disabled,
    iconPosition: INPUT_DEFAULTS.iconPosition,
    icon: "MagnifyingGlass",
    label: "Search",
  },
  options: {
    size: INPUT_SIZES,
    state: INPUT_STATES,
    iconPosition: INPUT_ICON_POSITIONS,
  },
  stories: {
    default: {},
    compact: { size: "compact" },
    error: { state: "error", placeholder: "This field has an error" },
    disabled: { disabled: true, state: "disabled", placeholder: "Disabled input" },
    iconLeft: { iconPosition: "left", icon: "MagnifyingGlass" },
    iconRight: { iconPosition: "right", icon: "MagnifyingGlass" },
  },
} as const;
