export const TagSpec = {
  allowedVariants: {
  "appearance": [
    "label-only",
    "icon-left"
  ],
  "size": [
    "compact",
    "default"
  ],
  "color": [
    "transparent",
    "neutral",
    "red",
    "orange",
    "yellow",
    "emerald",
    "green",
    "sky",
    "cyan",
    "blue",
    "indigo",
    "purple",
    "fuchsia",
    "magenta",
    "inverse"
  ]
},
  defaults: {
  "label": "Label",
  "appearance": "label-only",
  "size": "compact",
  "color": "transparent"
}
} as const;
