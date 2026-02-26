import type { HTMLAttributes } from "react";

export interface BrandingProps extends HTMLAttributes<HTMLDivElement> {
  brand?: unknown;
  symbol?: boolean;
  inherit?: boolean;
  size?: string;
  className?: string;
}
