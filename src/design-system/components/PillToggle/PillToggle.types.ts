import type { InputHTMLAttributes } from "react";

export interface PillToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  selected?: boolean;
  onChange?: (...args: unknown[]) => void;
  id?: unknown;
  disabled?: boolean;
  className?: string;
}
