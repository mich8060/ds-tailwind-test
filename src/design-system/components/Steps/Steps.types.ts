import type { HTMLAttributes } from "react";

export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
  steps?: unknown[];
  orientation?: string;
  size?: string;
  displayLabel?: boolean;
  className?: string;
}
