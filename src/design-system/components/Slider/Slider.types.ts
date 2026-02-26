import type { InputHTMLAttributes } from "react";

export interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (...args: unknown[]) => void;
  min?: number;
  max?: number;
  step?: number;
  range?: boolean;
  showLabels?: boolean;
  label?: unknown;
  disabled?: boolean;
  className?: string;
}
