export const BadgeSpec = {
  allowedVariants: {
  "variant": [
    "blue",
    "cyan",
    "green",
    "magenta",
    "indigo",
    "rose",
    "neutral",
    "orange",
    "purple",
    "red",
    "sky",
    "yellow",
    "inverse",
    "lime"
  ],
  "appearance": [
    "solid",
    "outlined"
  ],
  "rounded": [
    "true",
    "false"
  ]
},
  defaults: {
  "variant": "red",
  "appearance": "solid",
  "rounded": "true"
}
} as const;
