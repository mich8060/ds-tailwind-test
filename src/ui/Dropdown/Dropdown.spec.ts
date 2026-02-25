export const DROPDOWN_BASE_CLASS = "uds-dropdown";

export const DROPDOWN_SIZES = ["compact", "default"] as const;
export const DROPDOWN_STATES = ["default", "focused", "error", "disabled"] as const;

export const DROPDOWN_DEFAULTS = {
  options: [],
  placeholder: "Select an option",
  size: "default",
  state: "default",
  placement: "bottom-start",
  className: "",
  disabled: false,
} as const;

export const DROPDOWN_CLASS_MAP = {
  size: {
    compact: "compact",
    default: null,
  } as const,
  state: {
    default: null,
    focused: "focused",
    error: "error",
    disabled: "disabled",
  } as const,
} as const;

export const DROPDOWN_STORY_SPEC = {
  defaults: {
    options: [
      { value: "apple", label: "Apple" },
      { value: "orange", label: "Orange" },
      { value: "banana", label: "Banana" },
    ],
    value: "apple",
    placeholder: DROPDOWN_DEFAULTS.placeholder,
    size: DROPDOWN_DEFAULTS.size,
    state: DROPDOWN_DEFAULTS.state,
    placement: DROPDOWN_DEFAULTS.placement,
    disabled: DROPDOWN_DEFAULTS.disabled,
    label: "Fruit",
  },
  options: {
    size: DROPDOWN_SIZES,
    state: DROPDOWN_STATES,
  },
  stories: {
    default: {},
    compact: { size: "compact" },
    error: { state: "error" },
    disabled: { disabled: true, state: "disabled" },
  },
} as const;
