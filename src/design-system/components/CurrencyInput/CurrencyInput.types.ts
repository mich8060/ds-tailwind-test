import type { TextInputProps } from "../TextInput";

export interface CurrencyInputProps
  extends Omit<TextInputProps, "type" | "inputMode" | "icon" | "iconPosition"> {}
