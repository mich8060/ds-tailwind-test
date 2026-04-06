import type { HTMLAttributes } from "react";

export type DotStatusVariant =
  | "red"
  | "blue"
  | "inverse"
  | "orange"
  | "sky"
  | "indigo"
  | "rose"
  | "neutral"
  | "celery"
  | "lime"
  | "yellow"
  | "green"
  | "cyan"
  | "purple"
  | "fuchsia";

export type DotStatusSize = "small" | "medium" | "large";

export interface DotStatusProps extends HTMLAttributes<HTMLDivElement> {
  variant?: DotStatusVariant;
  size?: DotStatusSize;
  outline?: boolean;
  className?: string;
}
