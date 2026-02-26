import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface TextInputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value?: unknown;
  onChange?: (...args: unknown[]) => void;
  placeholder?: unknown;
  type?: string;
  size?: string;
  state?: string;
  disabled?: boolean;
  icon?: string | ReactNode;
  iconPosition?: string;
  onIconClick?: (...args: unknown[]) => void;
  id?: unknown;
  className?: string;
}
