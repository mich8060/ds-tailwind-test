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
  showAccentRail?: boolean;
  accent?: StatisticsAccent;
  progressValue?: number;
  progressLabel?: ReactNode;
  progressDelta?: ReactNode;
}
