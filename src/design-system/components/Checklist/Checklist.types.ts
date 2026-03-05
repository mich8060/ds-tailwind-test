import type { HTMLAttributes, ReactNode } from "react";

export interface ChecklistItem {
  id: string;
  label: ReactNode;
  completed?: boolean;
  disabled?: boolean;
}

export interface ChecklistProps extends HTMLAttributes<HTMLElement> {
  title: ReactNode;
  items: ChecklistItem[];
  activeItemId?: string;
  onItemSelect?: (item: ChecklistItem, index: number) => void;
}
