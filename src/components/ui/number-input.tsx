import { Input, type InputProps } from "@/components/ui/input"

export type NumberInputProps = Omit<InputProps, "type">

function NumberInput({ inputMode = "decimal", step = "any", ...props }: NumberInputProps) {
  return <Input type="number" inputMode={inputMode} step={step} {...props} />
}

export { NumberInput }
