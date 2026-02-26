export const DotStatusSpec = {
  allowedVariants: {
  "variant": [
    "light-gray",
    "red",
    "orange",
    "yellow",
    "light-green",
    "green",
    "blue",
    "dark-blue",
    "teal",
    "purple",
    "pink",
    "magenta",
    "dark-red",
    "dark-gray"
  ],
  "size": [
    "small",
    "medium",
    "large"
  ]
},
  defaults: {
  "variant": "blue",
  "size": "medium"
}
} as const;
