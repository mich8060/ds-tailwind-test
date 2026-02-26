import type { InputHTMLAttributes } from "react";

export interface FileUploadProps extends InputHTMLAttributes<HTMLInputElement> {
  onFileSelect?: (...args: unknown[]) => void;
  accept?: unknown[];
  maxSize?: number;
  acceptText?: unknown;
  instructionText?: string;
  multiple?: boolean;
  disabled?: boolean;
  className?: string;
}
