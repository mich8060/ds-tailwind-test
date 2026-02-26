import type { HTMLAttributes, ReactNode } from "react";

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  content?: unknown;
  placement?: string;
  disabled?: boolean;
  className?: string;
}
