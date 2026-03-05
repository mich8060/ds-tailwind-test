import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import "./_checkbox-group.scss";
import type { CheckboxGroupProps } from "./CheckboxGroup.types";

export function CheckboxGroup({
  options,
  values,
  defaultValues = [],
  onChange,
  label,
  orientation = "vertical",
  disabled = false,
  className = "",
  ...rest
}: CheckboxGroupProps) {
  const [internalValues, setInternalValues] = useState<string[]>(defaultValues);
  const selectedValues = values ?? internalValues;

  const classNames = [
    "uds-checkbox-group",
    `uds-checkbox-group--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleToggle = (optionValue: string, checked: boolean) => {
    const nextValues = checked
      ? [...selectedValues, optionValue]
      : selectedValues.filter((existingValue) => existingValue !== optionValue);

    if (values === undefined) {
      setInternalValues(nextValues);
    }
    onChange?.(nextValues);
  };

  return (
    <div className={classNames} role="group" {...rest}>
      {label ? <span className="uds-checkbox-group__label">{label}</span> : null}
      <div className="uds-checkbox-group__options">
        {options.map((option) => (
          <Checkbox
            key={option.value}
            checked={selectedValues.includes(option.value)}
            label={option.label}
            disabled={disabled || option.disabled}
            onChange={(checked) => handleToggle(option.value, Boolean(checked))}
          />
        ))}
      </div>
    </div>
  );
}
