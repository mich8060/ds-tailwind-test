export const NumberInputSpec = {
  allowedVariants: {
    size: ["compact", "default"],
    state: ["default", "focused", "error", "disabled"],
  },
  defaults: {
    type: "number",
    size: "default",
    state: "default",
  },
} as const;
