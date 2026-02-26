export const ProgressIndicatorSpec = {
  allowedVariants: {
  "variant": [
    "default",
    "blue",
    "green",
    "success",
    "orange",
    "warning",
    "red",
    "error",
    "purple"
  ],
  "size": [
    "small",
    "medium",
    "large"
  ]
},
  defaults: {
  "variant": "default",
  "size": "medium"
}
} as const;
