import { DateInput } from "../DateInput";
import type { DateRangeInputProps } from "./DateRangeInput.types";
import "./_date-range-input.scss";

const BASE_CLASS = "uds-date-range-input";

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

export function DateRangeInput({
  startValue,
  endValue,
  onStartChange,
  onEndChange,
  startPlaceholder = "Start date",
  endPlaceholder = "End date",
  startLabel,
  endLabel,
  size = "default",
  state = "default",
  disabled = false,
  className = "",
  ...rest
}: DateRangeInputProps) {
  const effectiveState = disabled ? "disabled" : state;
  const resolvedSize = size as keyof typeof sizeClassMap;
  const resolvedState = effectiveState as keyof typeof stateClassMap;
  const classNames = [
    BASE_CLASS,
    sizeClassMap[resolvedSize] && `${BASE_CLASS}--${sizeClassMap[resolvedSize]}`,
    stateClassMap[resolvedState] && `${BASE_CLASS}--${stateClassMap[resolvedState]}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...rest}>
      <DateInput
        className={`${BASE_CLASS}__input ${BASE_CLASS}__input--start`}
        value={startValue}
        onChange={onStartChange}
        placeholder={startPlaceholder}
        label={startLabel}
        size={size}
        state={state}
        disabled={disabled}
      />
      <span className={`${BASE_CLASS}__separator`} aria-hidden="true">
        &mdash;
      </span>
      <DateInput
        className={`${BASE_CLASS}__input ${BASE_CLASS}__input--end`}
        value={endValue}
        onChange={onEndChange}
        placeholder={endPlaceholder}
        label={endLabel}
        size={size}
        state={state}
        disabled={disabled}
      />
    </div>
  );
}
