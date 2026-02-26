import type { ButtonHTMLAttributes } from "react";

export interface MicroCalendarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value?: unknown;
  month?: unknown;
  onDateSelect?: (...args: unknown[]) => void;
  unavailableDates?: unknown[];
  dateData?: Record<string, unknown>;
  defaultExpanded?: boolean;
  showLegend?: boolean;
  showExpandCollapse?: boolean;
  className?: string;
}
