import type { HTMLAttributes } from "react";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs?: unknown[];
  appearance?: string;
  activeTab?: unknown;
  fill?: boolean;
  scrollable?: boolean;
  onTabChange?: (...args: unknown[]) => void;
  className?: string;
}
