export const DotStatusSpec = {
  allowedVariants: {
  "variant": [
    "red",
    "blue",
    "inverse",
    "orange",
    "sky",
    "indigo",
    "rose",
    "neutral",
    "celery",
    "lime",
    "yellow",
    "green",
    "cyan",
    "purple",
    "fuchsia"
  ],
  "size": [
    "small",
    "medium",
    "large"
  ],
  "outline": [
    "false",
    "true"
  ]
},
  defaults: {
  "variant": "blue",
  "size": "medium",
  "outline": "false"
}
} as const;
