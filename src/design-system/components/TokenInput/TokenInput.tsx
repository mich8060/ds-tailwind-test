import React from "react";
import Chip from "../Chip/Chip";
import "./_token-input.scss";
import type { TokenInputProps } from "./TokenInput.types";

const BASE_CLASS = "uds-token-input";

const sizeClassMap = {
  compact: "compact",
  default: "default",
};

const stateClassMap = {
  default: "default",
  focused: "focused",
  error: "error",
  disabled: "disabled",
};

export function TokenInput({
  tokens,
  defaultTokens = [],
  onTokensChange,
  inputValue,
  defaultInputValue = "",
  onInputValueChange,
  allowDuplicates = false,
  maxTokens,
  size = "default",
  state = "default",
  disabled = false,
  placeholder = "Type and press comma, tab, or enter",
  label,
  helperText,
  errorText,
  className = "",
  id,
  "aria-describedby": ariaDescribedBy,
  ...props
}: TokenInputProps) {
  const [internalTokens, setInternalTokens] = React.useState<string[]>(defaultTokens);
  const [internalInputValue, setInternalInputValue] =
    React.useState<string>(defaultInputValue);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const isTokensControlled = Array.isArray(tokens);
  const isInputControlled = typeof inputValue === "string";
  const resolvedTokens = isTokensControlled ? tokens : internalTokens;
  const resolvedInputValue = isInputControlled ? inputValue : internalInputValue;
  const effectiveState = disabled ? "disabled" : state;
  const generatedId = React.useId().replace(/:/g, "");
  const needsGeneratedId = Boolean(label) || Boolean(helperText) || Boolean(errorText);
  const inputId = id ?? (needsGeneratedId ? `${BASE_CLASS}-${generatedId}` : undefined);
  const helperTextId = helperText ? `${inputId}-helper-text` : undefined;
  const errorTextId = errorText ? `${inputId}-error-text` : undefined;
  const supportingTextId = effectiveState === "error" ? errorTextId : helperTextId;
  const describedByIds =
    [ariaDescribedBy, supportingTextId].filter(Boolean).join(" ") || undefined;

  const updateInputValue = (nextValue: string) => {
    if (!isInputControlled) {
      setInternalInputValue(nextValue);
    }
    onInputValueChange?.(nextValue);
  };

  const updateTokens = (nextTokens: string[]) => {
    if (!isTokensControlled) {
      setInternalTokens(nextTokens);
    }
    onTokensChange?.(nextTokens);
  };

  const normalizeToken = (rawValue: string): string =>
    rawValue.replace(/,+$/g, "").trim();

  const addToken = (rawValue: string) => {
    const normalized = normalizeToken(rawValue);
    if (!normalized) {
      updateInputValue("");
      return;
    }

    if (typeof maxTokens === "number" && resolvedTokens.length >= maxTokens) {
      updateInputValue("");
      return;
    }

    if (
      !allowDuplicates &&
      resolvedTokens.some(
        (token) => token.toLocaleLowerCase() === normalized.toLocaleLowerCase(),
      )
    ) {
      updateInputValue("");
      return;
    }

    updateTokens([...resolvedTokens, normalized]);
    updateInputValue("");
  };

  const removeToken = (index: number) => {
    const nextTokens = resolvedTokens.filter((_, tokenIndex) => tokenIndex !== index);
    updateTokens(nextTokens);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;

    if (nextValue.includes(",")) {
      const segments = nextValue.split(",");
      const currentInput = segments.pop() ?? "";
      segments.forEach((segment) => addToken(segment));
      updateInputValue(currentInput);
      return;
    }

    updateInputValue(nextValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" || event.key === "Tab" || event.key === ",") {
      if (resolvedInputValue.trim()) {
        event.preventDefault();
        addToken(resolvedInputValue);
      }
      return;
    }

    if (
      event.key === "Backspace" &&
      !resolvedInputValue &&
      resolvedTokens.length > 0 &&
      !disabled
    ) {
      removeToken(resolvedTokens.length - 1);
    }
  };

  const rootClassNames = [
    `${BASE_CLASS}-field`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputWrapperClassNames = [
    BASE_CLASS,
    sizeClassMap[size] && `${BASE_CLASS}--${sizeClassMap[size]}`,
    stateClassMap[effectiveState] && `${BASE_CLASS}--${stateClassMap[effectiveState]}`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassNames}>
      {label ? (
        <label className={`${BASE_CLASS}__label`} htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <div
        className={inputWrapperClassNames}
        onClick={() => inputRef.current?.focus()}
        aria-disabled={disabled || undefined}
      >
        {resolvedTokens.map((token, index) => (
          <Chip
            key={`${token}-${index}`}
            label={token}
            size={size === "compact" ? "mini" : "compact"}
            rounded={false}
            icon="X"
            iconPlacement="right"
            onClick={() => removeToken(index)}
            disabled={disabled}
            aria-label={`Remove token ${token}`}
          />
        ))}

        <input
          {...props}
          ref={inputRef}
          id={inputId}
          className={`${BASE_CLASS}__input`}
          value={resolvedInputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || effectiveState === "disabled"}
          aria-invalid={effectiveState === "error" ? true : undefined}
          aria-describedby={describedByIds}
        />
      </div>

      {effectiveState === "error" && errorText ? (
        <p
          id={errorTextId}
          className={`${BASE_CLASS}__supporting-text ${BASE_CLASS}__supporting-text--error`}
        >
          {errorText}
        </p>
      ) : null}

      {effectiveState !== "error" && helperText ? (
        <p id={helperTextId} className={`${BASE_CLASS}__supporting-text`}>
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export default TokenInput;
