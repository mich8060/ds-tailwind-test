import type { HTMLAttributes } from "react";

export interface ProgressIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  variant?: string;
  size?: string;
  label?: unknown;
  showValue?: boolean;
  showLabel?: boolean;
  className?: string;
}
