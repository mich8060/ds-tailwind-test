import type { HTMLAttributes } from "react";

export interface CodeProps extends HTMLAttributes<HTMLElement> {
  /** Source to highlight. Omit or pass empty string for an empty block (safe for Prism). */
  code?: string;
  language?: string;
  inline?: boolean;
}
