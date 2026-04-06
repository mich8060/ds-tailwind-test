export const CodeSpec = {
  allowedVariants: {
    language: ["markup", "css", "clike", "javascript", "typescript", "tsx", "jsx", "json", "bash", "sql"],
    inline: [true, false],
  },
  defaults: {
    code: "const example = true;",
    language: "javascript",
    inline: false,
  },
} as const;
