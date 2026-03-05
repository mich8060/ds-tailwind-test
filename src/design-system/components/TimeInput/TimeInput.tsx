import { TextInput } from "../TextInput";
import type { TimeInputProps } from "./TimeInput.types";

export function TimeInput(props: TimeInputProps) {
  return <TextInput type="time" {...props} />;
}
