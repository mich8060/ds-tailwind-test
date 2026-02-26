export const ImageAspectSpec = {
  allowedVariants: {
  "aspectratio": [
    "square",
    "video",
    "4-3",
    "3-2",
    "21-9",
    "portrait",
    "auto"
  ]
},
  defaults: {
  "ratio": "square"
}
} as const;
