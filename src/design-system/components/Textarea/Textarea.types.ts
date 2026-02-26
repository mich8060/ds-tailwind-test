import type { TextareaHTMLAttributes } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: unknown;
  onChange?: (...args: unknown[]) => void;
  placeholder?: unknown;
  size?: string;
  state?: string;
  resize?: boolean;
  disabled?: boolean;
  id?: unknown;
  className?: string;
}
