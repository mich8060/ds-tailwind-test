import type { TextInputProps } from "../TextInput";

export interface SearchInputProps
  extends Omit<TextInputProps, "type" | "icon" | "iconPosition"> {}
