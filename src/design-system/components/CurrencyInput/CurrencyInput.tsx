import { TextInput } from "../TextInput";
import type { CurrencyInputProps } from "./CurrencyInput.types";

export function CurrencyInput(props: CurrencyInputProps) {
  return (
    <TextInput
      type="text"
      inputMode="decimal"
      icon="CurrencyDollar"
      iconPosition="left"
      placeholder={props.placeholder ?? "0.00"}
      {...props}
    />
  );
}
