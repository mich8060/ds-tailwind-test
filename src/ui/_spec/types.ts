export type SpecOptions<TArgs extends Record<string, unknown>> = Partial<
  Record<keyof TArgs, readonly unknown[]>
>;

export type StoryExample<TArgs extends Record<string, unknown>> = Partial<TArgs>;

export interface StorySpec<TArgs extends Record<string, unknown>> {
  defaults: TArgs;
  options?: SpecOptions<TArgs>;
  stories: Record<string, StoryExample<TArgs>>;
}

export interface SpecMetaInput<TArgs extends Record<string, unknown>> {
  title: string;
  component: unknown;
  defaults: TArgs;
  options?: SpecOptions<TArgs>;
  argTypes?: Record<string, Record<string, unknown>>;
  parameters?: Record<string, unknown>;
  tags?: string[];
}
