import type { HTMLAttributes, ReactNode } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onClose?: (...args: unknown[]) => void;
  header?: unknown;
  body?: unknown;
  footer?: unknown;
  size?: string;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  dismissible?: boolean;
  headerActions?: ReactNode;
  container?: unknown;
  className?: string;
  children?: ReactNode;
}
