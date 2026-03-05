export const ChipSpec = {
  allowedVariants: {
  "selected": [
    "false",
    "true"
  ],
  "shape": [
    "pill",
    "rounded"
  ],
  "size": [
    "default",
    "compact",
    "mini"
  ],
  "iconPlacement": [
    "both",
    "left",
    "right",
    "none"
  ]
},
  defaults: {
  "selected": "false",
  "shape": "pill",
  "size": "default",
  "iconPlacement": "none",
  "badgeVariant": "sky"
}
} as const;
