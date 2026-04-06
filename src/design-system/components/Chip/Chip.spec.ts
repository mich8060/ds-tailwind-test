export const ChipSpec = {
  allowedVariants: {
  "selected": [
    "false",
    "true"
  ],
  "rounded": [
    "false",
    "true"
  ],
  "size": [
    "default",
    "compact",
    "mini"
  ],
  "iconPosition": [
    "both",
    "left",
    "right",
    "none"
  ]
},
  defaults: {
  "selected": "false",
  "rounded": "true",
  "size": "default",
  "iconPosition": "none",
  "badgeVariant": "sky"
}
} as const;
