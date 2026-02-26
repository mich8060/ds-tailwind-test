export const DropdownSpec = {
  allowedVariants: {
  "size": [
    "compact",
    "default"
  ],
  "state": [
    "default",
    "focused",
    "error",
    "disabled"
  ]
},
  defaults: {
  "placeholder": "Select an option",
  "size": "default",
  "state": "default",
  "placement": "bottom-start"
}
} as const;
