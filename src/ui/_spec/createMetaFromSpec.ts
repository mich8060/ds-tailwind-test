import type { SpecMetaInput } from "./types";

export function createMetaFromSpec<TArgs extends Record<string, unknown>>({
  title,
  component,
  defaults,
  options,
  argTypes = {},
  parameters = {},
  tags = ["autodocs"],
}: SpecMetaInput<TArgs>) {
  const mergedArgTypes: Record<string, Record<string, unknown>> = {
    ...argTypes,
  };

  if (options) {
    Object.entries(options).forEach(([key, value]) => {
      const existing = mergedArgTypes[key] || {};
      mergedArgTypes[key] = {
        ...existing,
        control: existing.control || "select",
        options: Array.isArray(value) ? [...value] : value,
      };
    });
  }

  return {
    title,
    component,
    tags,
    args: defaults,
    argTypes: mergedArgTypes,
    parameters,
  };
}
