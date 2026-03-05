import type { HTMLAttributes, ReactNode } from "react";
import type { TextInputProps, TextInputSize, TextInputState } from "../TextInput";

export interface DateRangeInputProps extends HTMLAttributes<HTMLDivElement> {
  startValue?: TextInputProps["value"];
  endValue?: TextInputProps["value"];
  onStartChange?: TextInputProps["onChange"];
  onEndChange?: TextInputProps["onChange"];
  startPlaceholder?: string;
  endPlaceholder?: string;
  startLabel?: ReactNode;
  endLabel?: ReactNode;
  size?: TextInputSize;
  state?: TextInputState;
  disabled?: boolean;
}
