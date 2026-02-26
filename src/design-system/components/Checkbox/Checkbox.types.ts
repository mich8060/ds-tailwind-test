import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (...args: unknown[]) => void;
  id?: unknown;
  label?: unknown;
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
}
