import type { HTMLAttributes } from "react";

export type TabsAppearance = "underline" | "block" | "block-inverted";
export type TabsOrientation = "horizontal" | "vertical";

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs?: unknown[];
  appearance?: TabsAppearance;
  orientation?: TabsOrientation;
  activeTab?: unknown;
  fill?: boolean;
  scrollable?: boolean;
  onTabChange?: (...args: unknown[]) => void;
  className?: string;
}
