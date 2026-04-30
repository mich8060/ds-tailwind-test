import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "@/components/ui/input-group"
import { type InputProps } from "@/components/ui/input"

export type UrlInputProps = Omit<InputProps, "type"> & {
  protocol?: string
  inputClassName?: string
}

function UrlInput({
  className,
  inputClassName,
  inputSize,
  protocol = "https://",
  placeholder = "example.com",
  inputMode = "url",
  autoComplete = "url",
  ...props
}: UrlInputProps) {
  return (
    <InputGroup className={className} inputSize={inputSize}>
      <InputGroupAddon>
        <InputGroupText>{protocol}</InputGroupText>
      </InputGroupAddon>
      <InputGroupInput
        type="text"
        inputSize={inputSize}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={inputClassName}
        {...props}
      />
    </InputGroup>
  )
}

export { UrlInput }
