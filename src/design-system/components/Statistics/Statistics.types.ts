import type { HTMLAttributes, ReactNode } from "react";

export type StatisticsTrend = "up" | "down" | "neutral";
export type StatisticsAccent = "brand" | "success" | "warning" | "danger" | "neutral";

export interface StatisticsProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  value?: ReactNode;
  helperText?: ReactNode;
  statusLabel?: ReactNode;
  changeText?: ReactNode;
  trend?: StatisticsTrend;
  icon?: string;
  actionIcon?: string;
  /** Inline CSS color value for the label icon tile background. */
  labelBoxColor?: string;
  /** Legacy flag for accent rail visibility. */
  showAccentRail?: boolean;
  /** When true, hides the left accent rail entirely. */
  hideAccentRail?: boolean;
  accent?: StatisticsAccent;
  progressValue?: number;
  progressLabel?: ReactNode;
  progressDelta?: ReactNode;
}
