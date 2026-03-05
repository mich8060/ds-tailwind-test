import { useId, useState } from "react";
import Radio from "../Radio/Radio";
import "./_radio-group.scss";
import type { RadioGroupProps } from "./RadioGroup.types";

export function RadioGroup({
  options,
  value,
  defaultValue,
  onChange,
  name,
  label,
  orientation = "vertical",
  disabled = false,
  className = "",
  ...rest
}: RadioGroupProps) {
  const generatedName = useId().replace(/:/g, "");
  const groupName = name ?? `uds-radio-group-${generatedName}`;
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const selectedValue = value ?? internalValue;

  const classNames = [
    "uds-radio-group",
    `uds-radio-group--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleChange = (nextValue: string) => {
    if (value === undefined) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  };

  return (
    <div className={classNames} role="radiogroup" aria-label={typeof label === "string" ? label : undefined} {...rest}>
      {label ? <span className="uds-radio-group__label">{label}</span> : null}
      <div className="uds-radio-group__options">
        {options.map((option) => (
          <Radio
            key={option.value}
            name={groupName}
            value={option.value}
            checked={selectedValue === option.value}
            label={option.label}
            disabled={disabled || option.disabled}
            onChange={() => handleChange(option.value)}
          />
        ))}
      </div>
    </div>
  );
}
