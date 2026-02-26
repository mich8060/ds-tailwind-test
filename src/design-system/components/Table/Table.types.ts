import type { HTMLAttributes } from "react";

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  columns?: unknown[];
  data?: unknown[];
  className?: string;
}
