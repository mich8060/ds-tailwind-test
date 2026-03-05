import type { HTMLAttributes, ReactNode } from "react";

export interface CheckboxGroupOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  options: CheckboxGroupOption[];
  values?: string[];
  defaultValues?: string[];
  onChange?: (values: string[]) => void;
  label?: ReactNode;
  orientation?: "vertical" | "horizontal";
  disabled?: boolean;
}
