"use client"

import * as React from "react"

import { Input, type InputProps } from "@/components/ui/input"

export type PhoneInputProps = Omit<InputProps, "type" | "value" | "defaultValue"> & {
  value?: string | number
  defaultValue?: string | number
  maxDigits?: number
  onValueChange?: (digits: string, formattedValue: string) => void
}

const ALLOWED_CONTROL_KEYS = new Set([
  "Backspace",
  "Delete",
  "Tab",
  "Enter",
  "Escape",
  "Home",
  "End",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
])

function toDigits(value: string | number | undefined): string {
  if (value === undefined) return ""
  return String(value).replace(/\D/g, "")
}

function formatPhone(digits: string): string {
  if (digits.length === 0) return ""
  if (digits.length <= 3) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`
}

function PhoneInput({
  inputMode = "tel",
  autoComplete = "tel",
  value,
  defaultValue,
  maxDigits = 10,
  onValueChange,
  onChange,
  onKeyDown,
  ...props
}: PhoneInputProps) {
  const [internalDigits, setInternalDigits] = React.useState(() =>
    toDigits(defaultValue).slice(0, maxDigits)
  )

  const digits =
    value === undefined
      ? internalDigits
      : toDigits(value).slice(0, maxDigits)
  const formattedValue = formatPhone(digits)

  return (
    <Input
      type="tel"
      inputMode={inputMode}
      autoComplete={autoComplete}
      value={formattedValue}
      onKeyDown={(event) => {
        if (event.metaKey || event.ctrlKey || event.altKey) {
          onKeyDown?.(event)
          return
        }

        if (!/^\d$/.test(event.key) && !ALLOWED_CONTROL_KEYS.has(event.key)) {
          event.preventDefault()
        }

        onKeyDown?.(event)
      }}
      onChange={(event) => {
        const nextDigits = toDigits(event.currentTarget.value).slice(0, maxDigits)
        const nextFormattedValue = formatPhone(nextDigits)

        if (value === undefined) {
          setInternalDigits(nextDigits)
        }

        onValueChange?.(nextDigits, nextFormattedValue)
        event.currentTarget.value = nextFormattedValue
        onChange?.(event)
      }}
      {...props}
    />
  )
}

export { PhoneInput }
