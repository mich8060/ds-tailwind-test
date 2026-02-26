import type { InputHTMLAttributes } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: (...args: unknown[]) => void;
  name?: unknown;
  id?: unknown;
  value?: unknown;
  label?: unknown;
  disabled?: boolean;
  className?: string;
}
