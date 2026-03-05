import type { HTMLAttributes, ReactNode } from "react";

export interface RadioGroupOption {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  options: RadioGroupOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  name?: string;
  label?: ReactNode;
  orientation?: "vertical" | "horizontal";
  disabled?: boolean;
}
