import type { HTMLAttributes } from "react";

export interface ProgressCircleProps extends HTMLAttributes<HTMLDivElement> {
  value?: number;
  max?: number;
  size?: string;
  shape?: string;
  label?: unknown;
  showLabel?: boolean;
  className?: string;
}
