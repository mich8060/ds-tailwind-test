export const ChipSpec = {
  allowedVariants: {
  "appearance": [
    "outline",
    "primary"
  ],
  "shape": [
    "pill",
    "rounded"
  ],
  "iconplacement": [
    "both",
    "left",
    "right",
    "none"
  ]
},
  defaults: {
  "appearance": "outline",
  "shape": "pill",
  "iconPlacement": "none",
  "badgeVariant": "red"
}
} as const;
