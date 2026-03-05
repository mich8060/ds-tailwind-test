import type { TextInputProps } from "../TextInput";

export interface PhoneInputProps extends Omit<TextInputProps, "type" | "inputMode"> {
  maxDigits?: number;
  onValidityChange?: (isValid: boolean) => void;
}
