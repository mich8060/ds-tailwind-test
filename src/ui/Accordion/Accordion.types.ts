import type { HTMLAttributes, ReactNode } from "react";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export interface AccordionItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onToggle"> {
  label: string;
  defaultExpanded?: boolean;
  children?: ReactNode;
  className?: string;
  onToggle?: (expanded: boolean) => void;
}
