import type { ButtonHTMLAttributes } from "react";

export type DropdownOption = string | { value: unknown; label: string };
export type DropdownSize = "compact" | "default";
export type DropdownState = "default" | "focused" | "error" | "disabled";
export type DropdownPlacement =
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end"
  | "left-start"
  | "left"
  | "left-end";

export interface DropdownProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  options?: DropdownOption[];
  value?: unknown;
  onChange?: (value: unknown) => void;
  placeholder?: string;
  size?: DropdownSize;
  state?: DropdownState;
  placement?: DropdownPlacement;
  id?: string;
  className?: string;
  disabled?: boolean;
  searchable?: boolean;
  menuFullWidth?: boolean;
}
