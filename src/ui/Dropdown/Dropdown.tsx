import { useMemo, useState } from "react";
import Icon from "../Icon/Icon";
import ActionMenu from "../ActionMenu/ActionMenu";
import "./Dropdown.scss";
import {
  DROPDOWN_BASE_CLASS,
  DROPDOWN_CLASS_MAP,
  DROPDOWN_DEFAULTS,
} from "./Dropdown.spec";
import type { DropdownOption, DropdownProps } from "./Dropdown.types";

const IconComponent = Icon as any;
const ActionMenuComponent = ActionMenu as any;

export default function Dropdown({
  options = [],
  value,
  onChange,
  placeholder = DROPDOWN_DEFAULTS.placeholder,
  size = DROPDOWN_DEFAULTS.size,
  state = DROPDOWN_DEFAULTS.state,
  placement = DROPDOWN_DEFAULTS.placement,
  id,
  label,
  className = DROPDOWN_DEFAULTS.className,
  disabled = DROPDOWN_DEFAULTS.disabled,
  ...props
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownId = id || `dropdown-${Math.random().toString(36).substr(2, 9)}`;

  const normalizedOptions = useMemo<DropdownOption[]>(
    () =>
      options.map((option) =>
        typeof option === "string" ? { value: option, label: option } : option,
      ),
    [options],
  );

  const currentState =
    disabled ? "disabled" : state === "default" && isOpen ? "focused" : state;

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  const menuItems = useMemo(
    () =>
      normalizedOptions.map((opt) => ({
        id: opt.value,
        label: opt.label,
        active: opt.value === value,
        onClick: () => {
          if (onChange && !disabled) {
            onChange(opt.value);
          }
        },
      })),
    [normalizedOptions, value, onChange, disabled],
  );

  const wrapperClassNames = [
    DROPDOWN_BASE_CLASS,
    DROPDOWN_CLASS_MAP.size[size] && `${DROPDOWN_BASE_CLASS}--${DROPDOWN_CLASS_MAP.size[size]}`,
    DROPDOWN_CLASS_MAP.state[currentState] &&
      `${DROPDOWN_BASE_CLASS}--${DROPDOWN_CLASS_MAP.state[currentState]}`,
    isOpen && `${DROPDOWN_BASE_CLASS}--open`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const triggerButton = (
    <button
      type="button"
      id={dropdownId}
      className={`${DROPDOWN_BASE_CLASS}__trigger`}
      disabled={disabled}
      aria-label={label || placeholder}
      {...props}
    >
      <span
        className={`${DROPDOWN_BASE_CLASS}__value ${
          !selectedOption ? `${DROPDOWN_BASE_CLASS}__value--placeholder` : ""
        }`}
      >
        {displayValue}
      </span>
      <IconComponent
        name="CaretDown"
        size={16}
        appearance="regular"
        className={`${DROPDOWN_BASE_CLASS}__icon ${
          isOpen ? `${DROPDOWN_BASE_CLASS}__icon--open` : ""
        }`}
      />
    </button>
  );

  return (
    <div className={`${DROPDOWN_BASE_CLASS}-outer`}>
      {label && (
        <label htmlFor={dropdownId} className={`${DROPDOWN_BASE_CLASS}__label`}>
          {label}
        </label>
      )}
      <ActionMenuComponent
        trigger={triggerButton}
        items={menuItems}
        placement={placement}
        fullWidth
        disabled={disabled}
        onOpenChange={setIsOpen}
        className={wrapperClassNames}
        menuClassName={`${DROPDOWN_BASE_CLASS}__menu`}
      />
    </div>
  );
}
