import type { HTMLAttributes, ReactNode } from "react";

export type StatisticsTrend = "up" | "down" | "neutral";
export type StatisticsIconAccent =
  | "amber"
  | "aqua"
  | "blue"
  | "cyan"
  | "emerald"
  | "fuchsia"
  | "green"
  | "indigo"
  | "lime"
  | "magenta"
  | "orange"
  | "purple"
  | "red"
  | "rose"
  | "sky"
  | "violet"
  | "yellow";

export interface StatisticsProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  value?: ReactNode;
  helperText?: ReactNode;
  changeText?: ReactNode;
  trend?: StatisticsTrend;
  icon?: string;
  /** Accent palette for icon tile (50 background / 600 icon). */
  iconAccent?: StatisticsIconAccent;
  /** Inline CSS color value for the label icon tile background. */
  labelBoxColor?: string;
  progressValue?: number;
  progressLabel?: ReactNode;
}
