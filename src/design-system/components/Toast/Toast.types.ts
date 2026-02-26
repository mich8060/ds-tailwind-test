import type { ButtonHTMLAttributes } from "react";

export interface ToastProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  message?: unknown;
  variant?: string;
  title?: unknown;
  showIcon?: boolean;
  showClose?: boolean;
  onClose?: (...args: unknown[]) => void;
  className?: string;
}
