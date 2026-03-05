import type { HTMLAttributes, ReactNode } from "react";

export interface ToolbarProps extends HTMLAttributes<HTMLDivElement> {
  left?: ReactNode;
  right?: ReactNode;
  title?: ReactNode;
  branding?: ReactNode;
  center?: ReactNode;
}
