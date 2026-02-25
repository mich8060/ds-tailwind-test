import type { ChangeEventHandler, InputHTMLAttributes, MouseEventHandler } from "react";
import type {
  INPUT_ICON_POSITIONS,
  INPUT_SIZES,
  INPUT_STATES,
} from "./Input.spec";

export type InputSize = (typeof INPUT_SIZES)[number];
export type InputState = (typeof INPUT_STATES)[number];
export type InputIconPosition = (typeof INPUT_ICON_POSITIONS)[number];

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: InputSize;
  state?: InputState;
  icon?: string;
  iconPosition?: InputIconPosition;
  onIconClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
