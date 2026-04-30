import { Input, type InputProps } from "@/components/ui/input"

export type TimeInputProps = Omit<InputProps, "type">

function TimeInput({ autoComplete = "off", ...props }: TimeInputProps) {
  return <Input type="time" autoComplete={autoComplete} {...props} />
}

export { TimeInput }
