export const TextareaSpec = {
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
  "size": "default",
  "state": "default"
}
} as const;
