import type { ButtonHTMLAttributes } from "react";

export interface ActionMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  trigger?: unknown;
  items?: unknown[];
  placement?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onOpenChange?: (...args: unknown[]) => void;
  className?: string;
  menuClassName?: string;
}
