import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface FieldProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: unknown;
  required?: boolean;
  helperMessage?: unknown;
  infoIcon?: unknown;
  onInfoClick?: (...args: unknown[]) => void;
  maxLength?: unknown;
  value?: unknown;
  id?: unknown;
  className?: string;
  children?: ReactNode;
}
