import type { HTMLAttributes } from "react";

export interface StatusProps extends HTMLAttributes<HTMLDivElement> {
  label?: unknown;
  variant?: string;
  appearance?: string;
  shape?: string;
  className?: string;
  onClick?: (...args: unknown[]) => void;
  disabled?: boolean;
}
