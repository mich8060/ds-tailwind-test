import { TextInput } from "../TextInput";
import type { DateInputProps } from "./DateInput.types";

export function DateInput(props: DateInputProps) {
  return <TextInput type="date" {...props} />;
}
