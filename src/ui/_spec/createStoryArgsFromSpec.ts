export function createStoryArgsFromSpec<TDefaults extends Record<string, unknown>>(
  defaults: TDefaults,
) {
  return <TExample extends Partial<TDefaults>>(example: TExample) => ({
    ...defaults,
    ...example,
  });
}
