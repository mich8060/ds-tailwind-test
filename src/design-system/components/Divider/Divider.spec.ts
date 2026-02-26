export const DividerSpec = {
  allowedVariants: {
  "alignment": [
    "left",
    "center",
    "right"
  ],
  "variant": [
    "line",
    "solid"
  ]
},
  defaults: {
  "variant": "line",
  "alignment": "center"
}
} as const;
