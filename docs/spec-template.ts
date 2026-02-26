/**
 * Spec Template (copy and fill)
 * Keep this colocated with the component folder as <ComponentName>.spec.ts.
 */

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

  accessibility: {
    role: string;
    keyboard: string[];
    requiresAriaLabelWhenIconOnly?: boolean;
    focusVisible?: boolean;
  };

  disallowedProps?: string[];
  antiPatterns?: string[];
}
