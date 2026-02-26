import type { HTMLAttributes, ReactNode } from "react";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: (...args: unknown[]) => void;
  intent?: string;
  icon?: string | ReactNode;
  title?: unknown;
  description?: unknown;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: (...args: unknown[]) => void;
  onCancel?: (...args: unknown[]) => void;
  showCancel?: boolean;
  loading?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  container?: unknown;
  className?: string;
  children?: ReactNode;
}
