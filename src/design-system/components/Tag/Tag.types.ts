import type { HTMLAttributes, ReactNode } from "react";

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  appearance?: string;
  size?: string;
  color?: string;
  rounded?: boolean;
  solid?: boolean;
  icon?: string | ReactNode;
  className?: string;
  onClick?: (...args: unknown[]) => void;
}
