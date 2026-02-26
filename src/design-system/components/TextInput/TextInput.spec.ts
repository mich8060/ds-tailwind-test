export const TextInputSpec = {
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
  "type": "text",
  "size": "default",
  "state": "default",
  "iconPosition": "right"
}
} as const;
