import React from "react";
import Icon from "../Icon/Icon";
import "./_number-input.scss";
import type { NumberInputProps } from "./NumberInput.types";

const BASE_CLASS = "uds-number-input";

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

export function NumberInput({
  value,
  onChange,
  placeholder,
  size = "default",
  state = "default",
  disabled = false,
  id,
  label,
  helperText,
  errorText,
  className = "",
  "aria-describedby": ariaDescribedBy,
  ...props
}: NumberInputProps) {
  const effectiveState = disabled ? "disabled" : state;
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const generatedId = React.useId().replace(/:/g, "");
  const needsGeneratedId = Boolean(label) || Boolean(helperText) || Boolean(errorText);
  const inputId = id ?? (needsGeneratedId ? `${BASE_CLASS}-${generatedId}` : undefined);
  const helperTextId = helperText ? `${inputId}-helper-text` : undefined;
  const errorTextId = errorText ? `${inputId}-error-text` : undefined;
  const supportingTextId = effectiveState === "error" ? errorTextId : helperTextId;
  const describedByIds = [ariaDescribedBy, supportingTextId].filter(Boolean).join(" ") || undefined;

  const rootClassNames = [
    `${BASE_CLASS}-field`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const controlClassNames = [
    BASE_CLASS,
    sizeClassMap[size] && `${BASE_CLASS}--${sizeClassMap[size]}`,
    stateClassMap[effectiveState] && `${BASE_CLASS}--${stateClassMap[effectiveState]}`,
  ]
    .filter(Boolean)
    .join(" ");

  const stepValue = (delta: 1 | -1) => {
    const input = inputRef.current;
    if (!input || disabled || effectiveState === "disabled") {
      return;
    }

    if (delta === 1) {
      input.stepUp();
    } else {
      input.stepDown();
    }

    const inputEvent = new Event("input", { bubbles: true });
    input.dispatchEvent(inputEvent);
  };

  const iconSize = size === "compact" ? 14 : 16;

  return (
    <div className={rootClassNames}>
      {label ? (
        <label className={`${BASE_CLASS}__label`} htmlFor={inputId}>
          {label}
        </label>
      ) : null}

      <div className={controlClassNames}>
        <button
          type="button"
          className={`${BASE_CLASS}__step ${BASE_CLASS}__step--decrement`}
          aria-label="Decrease value"
          disabled={disabled || effectiveState === "disabled"}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => stepValue(-1)}
        >
          <Icon name="Minus" size={iconSize} />
        </button>

        <input
          {...props}
          ref={inputRef}
          id={inputId}
          type="number"
          className={`${BASE_CLASS}__input`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || effectiveState === "disabled"}
          aria-invalid={effectiveState === "error" ? true : undefined}
          aria-describedby={describedByIds}
        />

        <button
          type="button"
          className={`${BASE_CLASS}__step ${BASE_CLASS}__step--increment`}
          aria-label="Increase value"
          disabled={disabled || effectiveState === "disabled"}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => stepValue(1)}
        >
          <Icon name="Plus" size={iconSize} />
        </button>
      </div>

      {effectiveState === "error" && errorText ? (
        <p id={errorTextId} className={`${BASE_CLASS}__supporting-text ${BASE_CLASS}__supporting-text--error`}>
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
