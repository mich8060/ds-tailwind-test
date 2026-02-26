import type { HTMLAttributes, ReactNode } from "react";

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  label?: unknown;
  appearance?: string;
  shape?: string;
  iconPlacement?: string;
  icon?: string | ReactNode;
  badge?: unknown;
  badgeVariant?: string;
  className?: string;
  onClick?: (...args: unknown[]) => void;
  disabled?: boolean;
}
