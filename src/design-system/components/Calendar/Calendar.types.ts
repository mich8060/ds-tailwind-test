import type { HTMLAttributes } from "react";

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
  view?: string;
  defaultDate?: unknown;
  value?: unknown;
  events?: unknown[];
  onDateSelect?: (...args: unknown[]) => void;
  onEventClick?: (...args: unknown[]) => void;
  maxEventsPerDay?: number;
  showWeekNumbers?: boolean;
  size?: string;
  className?: string;
}
