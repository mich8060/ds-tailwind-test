export const StatusSpec = {
  allowedVariants: {
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
