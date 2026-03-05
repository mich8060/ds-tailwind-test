import { useState } from "react";
import type { ChangeEventHandler, FocusEventHandler } from "react";
import { TextInput } from "../TextInput";
import type { PhoneInputProps } from "./PhoneInput.types";

const DEFAULT_MAX_DIGITS = 10;
const DISALLOWED_CHARACTERS = /[^0-9()\-\s]/g;
const DEFAULT_ERROR_TEXT = "Enter a valid 10-digit phone number.";

function sanitizeAllowedCharacters(value: string): string {
  return value.replace(DISALLOWED_CHARACTERS, "");
}

function toDigits(value: string, maxDigits: number): string {
  return value.replace(/\D/g, "").slice(0, maxDigits);
}

function formatPhone(digits: string): string {
  const area = digits.slice(0, 3);
  const prefix = digits.slice(3, 6);
  const line = digits.slice(6, 10);

  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${area}`;
  if (digits.length <= 6) return `(${area}) ${prefix}`;
  return `(${area}) ${prefix}-${line}`;
}

export function PhoneInput({
  onBlur,
  onChange,
  onValidityChange,
  maxDigits = DEFAULT_MAX_DIGITS,
  errorText,
  state = "default",
  placeholder = "(555) 123-4567",
  ...props
}: PhoneInputProps) {
  const [showValidationError, setShowValidationError] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const sanitized = sanitizeAllowedCharacters(event.target.value);
    const nextDigits = toDigits(sanitized, maxDigits);
    const nextValue = formatPhone(nextDigits);

    if (event.target.value !== nextValue) {
      event.target.value = nextValue;
    }

    if (showValidationError) {
      setShowValidationError(false);
    }

    onValidityChange?.(nextDigits.length === maxDigits);
    onChange?.(event);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    const sanitized = sanitizeAllowedCharacters(event.target.value);
    const nextDigits = toDigits(sanitized, maxDigits);
    const nextValue = formatPhone(nextDigits);
    const isValid = nextDigits.length === 0 || nextDigits.length === maxDigits;

    if (event.target.value !== nextValue) {
      event.target.value = nextValue;
    }

    setShowValidationError(!isValid);
    onValidityChange?.(isValid);
    onBlur?.(event);
  };

  const resolvedState = showValidationError ? "error" : state;
  const resolvedErrorText = showValidationError
    ? (errorText ?? DEFAULT_ERROR_TEXT)
    : errorText;

  return (
    <TextInput
      type="tel"
      inputMode="tel"
      autoComplete="tel"
      pattern="^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$"
      maxLength={14}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={handleBlur}
      state={resolvedState}
      errorText={resolvedErrorText}
      {...props}
    />
  );
}
