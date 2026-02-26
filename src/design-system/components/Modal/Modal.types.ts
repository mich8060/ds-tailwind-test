import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ModalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  open?: boolean;
  onClose?: (...args: unknown[]) => void;
  title?: unknown;
  subtitle?: unknown;
  badge?: unknown;
  header?: unknown;
  footer?: unknown;
  size?: string;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  container?: unknown;
  className?: string;
  children?: ReactNode;
}
