import React from "react";
import "./_badge.scss";
import type { BadgeProps } from "./Badge.types";

const BASE_CLASS = "uds-badge";

const variantClassMap = {
  blue: "blue",
  cyan: "cyan",
  green: "green",
  magenta: "magenta",
  indigo: "indigo",
  rose: "rose",
  neutral: "neutral",
  orange: "orange",
  purple: "purple",
  red: "red",
  sky: "sky",
  yellow: "yellow",
  inverse: "inverse",
  lime: "lime",
};

/**
 * Badge component for displaying badges
 * @param {number|string} count - The count to display (will be formatted with + if over maxCount)
 * @param {string} variant - Color variant: 'blue', 'cyan', 'green', 'magenta', 'indigo', 'rose', 'neutral', 'orange', 'purple', 'red', 'sky', 'yellow', 'inverse', 'lime'
 * @param {string} appearance - Visual style variant: 'solid' or 'outlined'
 * @param {boolean} rounded - Whether badge corners are fully rounded
 * @param {number} maxCount - Maximum count to display before showing "+" (default: 99)
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the badge element
 */
export default function Badge({
  count,
  variant = "red",
  appearance = "solid",
  rounded = true,
  maxCount = 99,
  className = "",
  ...props
}: BadgeProps) {
  // Format the count: if over maxCount, show maxCount+
  const formatCount = (num) => {
    const numCount = typeof num === "number" ? num : parseInt(num, 10);
    if (isNaN(numCount)) return "0";
    if (numCount > maxCount) {
      return `${maxCount}+`;
    }
    return numCount.toString();
  };

  const formattedCount = formatCount(count);

  const classNames = [
    BASE_CLASS,
    variantClassMap[variant] && `${BASE_CLASS}--${variantClassMap[variant]}`,
    `${BASE_CLASS}--${appearance}`,
    `${BASE_CLASS}--${rounded ? "rounded" : "square"}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (!count || count === 0) {
    return null;
  }

  return (
    <span className={classNames} {...props}>
      {formattedCount}
    </span>
  );
}
