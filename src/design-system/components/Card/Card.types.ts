import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  to?: unknown;
  title?: unknown;
  description?: unknown;
  icon?: string | ReactNode;
  className?: string;
}
