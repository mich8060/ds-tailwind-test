import type { InputHTMLAttributes, ReactNode } from "react";
import type { TextInputSize, TextInputState } from "../TextInput/TextInput.types";

export interface TokenInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | "value" | "defaultValue" | "onChange"
  > {
  tokens?: string[];
  defaultTokens?: string[];
  onTokensChange?: (tokens: string[]) => void;
  inputValue?: string;
  defaultInputValue?: string;
  onInputValueChange?: (value: string) => void;
  allowDuplicates?: boolean;
  maxTokens?: number;
  size?: TextInputSize;
  state?: TextInputState;
  label?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
}
