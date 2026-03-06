import type { HTMLAttributes } from "react";

export type ScrollViewDirection = "vertical" | "horizontal";

export interface ScrollViewProps extends HTMLAttributes<HTMLDivElement> {
  direction?: ScrollViewDirection;
}
