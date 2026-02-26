import type { HTMLAttributes } from "react";

export interface DotStatusProps extends HTMLAttributes<HTMLDivElement> {
  variant?: string;
  size?: string;
  outline?: boolean;
  className?: string;
}
