import type { ButtonHTMLAttributes } from "react";

export interface DatepickerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value?: unknown;
  startDate?: unknown;
  endDate?: unknown;
  month?: unknown;
  onDateSelect?: (...args: unknown[]) => void;
  unavailableDates?: unknown[];
  dateData?: Record<string, unknown>;
  size?: string;
  showWeekdays?: boolean;
  className?: string;
}
