export type ComponentTier = 1 | 2 | 3 | 4;

export interface ComponentSpec {
  name: string;
  tier: ComponentTier;
  purpose: string;

  variants: Record<
    string,
    {
      type: "enum" | "boolean";
      values?: string[];
      default: string | boolean;
    }
  >;

  states: string[];
  tokensUsed: string[];
  accessibility: { role: string; keyboard: string[] };
  antiPatterns?: string[];
}
