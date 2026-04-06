export const MenuSpec = {
  allowedVariants: {
    activeMode: ["light", "dark"],
    showBrand: ["true", "false"],
    showSearch: ["true", "false"],
    showBrandSwitcher: ["true", "false"],
    showNav: ["true", "false"],
    showModeToggle: ["true", "false"],
    showUser: ["true", "false"],
    defaultExpanded: ["true", "false"]
  },
  defaults: {
    "identity": "design-system",
    "showSearch": false,
    "showBrand": true,
    "showBrandSwitcher": true,
    "showNav": true,
    "showModeToggle": true,
    "showUser": true,
    "defaultExpanded": true
  }
} as const;
