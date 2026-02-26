import type { HTMLAttributes, ReactNode } from "react";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: string;
  label?: unknown;
  icon?: string | ReactNode;
  alignment?: string;
  labelWithIcon?: boolean;
  className?: string;
}
