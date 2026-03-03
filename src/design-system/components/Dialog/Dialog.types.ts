import type { HTMLAttributes, ReactNode } from "react";

export type DialogIntent = "info" | "success" | "warning" | "destructive";

export interface DialogProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: () => void;
  intent?: DialogIntent;
  icon?: string;
  title?: ReactNode;
  description?: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  showCancel?: boolean;
  loading?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  container?: HTMLElement;
  className?: string;
  children?: ReactNode;
}
