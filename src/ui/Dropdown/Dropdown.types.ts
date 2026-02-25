import type { HTMLAttributes } from "react";
import type { DROPDOWN_SIZES, DROPDOWN_STATES } from "./Dropdown.spec";

export type DropdownSize = (typeof DROPDOWN_SIZES)[number];
export type DropdownState = (typeof DROPDOWN_STATES)[number];

export interface DropdownOption {
  value: string | number;
  label: string;
}

export interface DropdownProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "onChange"> {
  options?: Array<DropdownOption | string>;
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  size?: DropdownSize;
  state?: DropdownState;
  placement?: string;
  id?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
}
