import React, { useState } from "react";
import Icon from "../Icon/Icon";
import Badge from "../Badge/Badge";
import "./_chip.scss";
import type { ChipProps } from "./Chip.types";

const BASE_CLASS = "uds-chip";

const sizeClassMap: Record<string, string> = {
  default: "default",
  compact: "compact",
  mini: "mini",
};

const iconPlacementClassMap: Record<string, string> = {
  both: "icon-both",
  left: "icon-left",
  right: "icon-right",
  none: "icon-none",
};

/**
 * Chip component for displaying labels, tags, or filters
 * @param {string} label - The text content of the chip
 * @param {boolean} selected - Selected state (unselected by default)
 * @param {boolean} rounded - Shape toggle: true (fully rounded), false (less rounded)
 * @param {string} size - Size variant: 'default', 'compact', or 'mini'
 * @param {string} iconPlacement - Icon placement: 'both', 'left', 'right', or 'none'
 * @param {string} icon - Icon name to display (when iconPlacement is not 'none')
 * @param {number|string} badge - Badge count to display
 * @param {string} badgeVariant - Badge color variant (default: 'red')
 * @param {string} className - Additional CSS classes
 * @param {function} onClick - Click handler function
 * @param {boolean} disabled - Whether the chip is disabled
 * @param {object} props - Additional props to pass to the chip element
 */
export default function Chip({
  label,
  selected,
  rounded = true,
  size = "default",
  iconPlacement = "none",
  icon,
  badge,
  badgeVariant = "sky",
  className = "",
  onClick,
  disabled = false,
  ...props
}: ChipProps) {
  const isControlled = typeof selected === "boolean";
  const [internalSelected, setInternalSelected] = useState<boolean>(selected ?? false);
  const isOn = isControlled ? selected : internalSelected;
  const isRounded = rounded;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (disabled) {
      return;
    }

    if (!isControlled) {
      setInternalSelected((previous) => !previous);
    }

    onClick?.(event);
  };

  const classNames = [
    BASE_CLASS,
    isOn && `${BASE_CLASS}--selected`,
    `${BASE_CLASS}--rounded-${isRounded ? "true" : "false"}`,
    sizeClassMap[size] && `${BASE_CLASS}--${sizeClassMap[size]}`,
    iconPlacementClassMap[iconPlacement] &&
      `${BASE_CLASS}--${iconPlacementClassMap[iconPlacement]}`,
    disabled && `${BASE_CLASS}--disabled`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const hasLeftIcon = iconPlacement === "both" || iconPlacement === "left";
  const hasRightIcon = iconPlacement === "both" || iconPlacement === "right";
  const iconSize = size === "mini" ? 12 : size === "compact" ? 14 : 16;
  const isIconName = typeof icon === "string";

  const leftIcon = hasLeftIcon && icon ? (
    isIconName ? (
      <Icon
        name={icon}
        size={iconSize}
        appearance="regular"
        className={`${BASE_CLASS}__icon ${BASE_CLASS}__icon--left`}
      />
    ) : (
      <span className={`${BASE_CLASS}__icon ${BASE_CLASS}__icon--left`}>{icon}</span>
    )
  ) : null;

  const rightIcon = hasRightIcon && icon ? (
    isIconName ? (
      <Icon
        name={icon}
        size={iconSize}
        appearance="regular"
        className={`${BASE_CLASS}__icon ${BASE_CLASS}__icon--right`}
      />
    ) : (
      <span className={`${BASE_CLASS}__icon ${BASE_CLASS}__icon--right`}>{icon}</span>
    )
  ) : null;

  return (
    <button
      type="button"
      className={classNames}
      onClick={handleClick}
      aria-pressed={isOn}
      disabled={disabled}
      {...props}
    >
      {leftIcon}
      {label ? <span className={`${BASE_CLASS}__label`}>{label}</span> : null}
      {rightIcon}
      {badge ? <Badge count={badge} variant={badgeVariant} className={`${BASE_CLASS}__badge`} /> : null}
    </button>
  );
}
