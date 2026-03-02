import type { HTMLAttributes } from "react";

export type BadgeVariant =
  | "blue"
  | "cyan"
  | "green"
  | "magenta"
  | "indigo"
  | "rose"
  | "neutral"
  | "orange"
  | "purple"
  | "red"
  | "sky"
  | "yellow"
  | "inverse"
  | "lime";

export type BadgeAppearance = "solid" | "outlined";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  count?: unknown;
  variant?: BadgeVariant;
  appearance?: BadgeAppearance;
  rounded?: boolean;
  maxCount?: number;
  className?: string;
}
