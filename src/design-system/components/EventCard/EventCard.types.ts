import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface EventCardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  type?: string;
  status?: string;
  badge?: unknown;
  icon?: string | ReactNode;
  startCap?: boolean;
  endCap?: boolean;
  onClick?: (...args: unknown[]) => void;
  className?: string;
}
