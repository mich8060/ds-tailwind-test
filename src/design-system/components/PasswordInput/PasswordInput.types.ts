import type { TextInputProps } from "../TextInput";

export interface PasswordInputProps
  extends Omit<TextInputProps, "type" | "icon" | "onIconClick"> {
  showToggle?: boolean;
  initiallyVisible?: boolean;
}
