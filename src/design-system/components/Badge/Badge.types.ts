import type { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  count?: unknown;
  variant?: string;
  maxCount?: number;
  className?: string;
}
