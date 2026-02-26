import type { HTMLAttributes } from "react";

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name?: unknown;
  size?: number;
  appearance?: string;
}
