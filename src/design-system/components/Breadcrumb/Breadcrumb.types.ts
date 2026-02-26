import type { AnchorHTMLAttributes } from "react";

export interface BreadcrumbProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  items?: unknown;
}
