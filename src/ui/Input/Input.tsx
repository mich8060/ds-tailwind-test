import type { ChangeEvent } from "react";
import Icon from "../Icon/Icon";
import "./Input.scss";
import {
  INPUT_BASE_CLASS,
  INPUT_CLASS_MAP,
  INPUT_DEFAULTS,
} from "./Input.spec";
import type { InputProps } from "./Input.types";

const IconComponent = Icon as any;

export default function Input({
  value,
  onChange,
  placeholder,
  type = INPUT_DEFAULTS.type,
  size = INPUT_DEFAULTS.size,
  state = INPUT_DEFAULTS.state,
  disabled = INPUT_DEFAULTS.disabled,
  icon,
  iconPosition = INPUT_DEFAULTS.iconPosition,
  onIconClick,
  id,
  className = INPUT_DEFAULTS.className,
  ...rest
}: InputProps) {
  const effectiveState = disabled ? "disabled" : state;

  const inputClassNames = [
    INPUT_BASE_CLASS,
    INPUT_CLASS_MAP.size[size] && `${INPUT_BASE_CLASS}--${INPUT_CLASS_MAP.size[size]}`,
    INPUT_CLASS_MAP.state[effectiveState] &&
      `${INPUT_BASE_CLASS}--${INPUT_CLASS_MAP.state[effectiveState]}`,
    icon && `${INPUT_BASE_CLASS}--has-icon-${iconPosition}`,
  ]
    .filter(Boolean)
    .join(" ");

  const wrapperClassNames = [
    `${INPUT_BASE_CLASS}-wrapper`,
    icon && `${INPUT_BASE_CLASS}-wrapper--icon-${iconPosition}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inputElement = (
    <input
      id={id}
      type={type}
      className={inputClassNames}
      value={value}
      onChange={onChange as ((event: ChangeEvent<HTMLInputElement>) => void) | undefined}
      placeholder={placeholder}
      disabled={disabled || effectiveState === "disabled"}
      {...rest}
    />
  );

  if (!icon) {
    return <div className={wrapperClassNames}>{inputElement}</div>;
  }

  const iconSize = size === "compact" ? 16 : 20;
  const iconClass = `${INPUT_BASE_CLASS}__icon ${INPUT_BASE_CLASS}__icon--${iconPosition}`;

  const iconElement = onIconClick ? (
    <button
      type="button"
      className={`${iconClass} ${INPUT_BASE_CLASS}__icon--clickable`}
      onClick={onIconClick}
      disabled={disabled || effectiveState === "disabled"}
      tabIndex={-1}
      aria-label="Input action"
    >
      <IconComponent name={icon} size={iconSize} />
    </button>
  ) : (
    <span className={iconClass}>
      <IconComponent name={icon} size={iconSize} />
    </span>
  );

  return (
    <div className={wrapperClassNames}>
      {inputElement}
      {iconElement}
    </div>
  );
}
