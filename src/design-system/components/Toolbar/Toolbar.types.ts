import type { HTMLAttributes, ReactNode } from "react";

export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}
