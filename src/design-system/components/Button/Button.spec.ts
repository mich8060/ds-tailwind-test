export const ButtonSpec = {
  allowedVariants: {
  "layout": [
    "label-only",
    "icon-left",
    "icon-right",
    "icon-only",
    "only"
  ],
  "appearance": [
    "primary",
    "soft",
    "outline",
    "text",
    "ghost",
    "disabled",
    "destructive"
  ],
  "size": [
    "large",
    "default",
    "small",
    "xsmall"
  ]
},
  defaults: {
  "appearance": "primary",
  "layout": "label-only",
  "size": "default"
}
} as const;
