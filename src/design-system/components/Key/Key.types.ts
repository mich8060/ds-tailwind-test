import type { HTMLAttributes } from "react";

export interface KeyProps extends HTMLAttributes<HTMLDivElement> {
  label?: unknown;
  appearance?: string;
  className?: string;
}
