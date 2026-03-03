import React from "react";
import "./_dot-status.scss";
import type { DotStatusProps } from "./DotStatus.types";

const BASE_CLASS = "uds-dot-status";

const variantClassMap = {
  red: "red",
  blue: "blue",
  inverse: "inverse",
  orange: "orange",
  sky: "sky",
  indigo: "indigo",
  rose: "rose",
  neutral: "neutral",
  celery: "celery",
  lime: "lime",
  yellow: "yellow",
  green: "green",
  cyan: "cyan",
  purple: "purple",
  fuchsia: "fuchsia",
};

const sizeClassMap = {
  small: "small",
  medium: "medium",
  large: "large",
};

/**
 * Dot Status component for displaying status indicators
 * @param {string} variant - Color variant
 * @param {string} size - Size variant: 'small', 'medium', or 'large'
 * @param {boolean} outline - Whether to show an outline/border around the dot
 * @param {string} className - Additional CSS classes
 * @param {string} 'aria-label' - Accessible label for screen readers
 * @param {object} props - Additional props to pass to the dot element
 */
export default function DotStatus({
  variant = "blue",
  size = "medium",
  outline = false,
  className = "",
  "aria-label": ariaLabel,
  ...props
}: DotStatusProps) {
  const isOutlineEnabled = outline === true || outline === "true";

  const classNames = [
    BASE_CLASS,
    variantClassMap[variant] && `${BASE_CLASS}--${variantClassMap[variant]}`,
    sizeClassMap[size] && `${BASE_CLASS}--${sizeClassMap[size]}`,
    isOutlineEnabled && `${BASE_CLASS}--outline`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classNames}
      role="status"
      aria-label={ariaLabel || `${variant} status`}
      {...props}
    />
  );
}
