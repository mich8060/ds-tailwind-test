export const StatusSpec = {
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
  "appearance": [
    "light-gray",
    "white",
    "transparent"
  ],
  "shape": [
    "pill",
    "rounded"
  ]
},
  defaults: {
  "variant": "blue",
  "appearance": "light-gray",
  "shape": "pill"
}
} as const;
