import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface AccordionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}
