import React from "react";
import Badge from "../Badge/Badge";
import Icon from "../Icon/Icon";

interface TabItemProps {
  label?: string | number;
  appearance?: "underline" | "block" | "block-inverted";
  active?: boolean;
  icon?: string | boolean;
  tag?: string | number | boolean;
  tagVariant?: string;
  className?: string;
  onClick?: (...args: unknown[]) => void;
  [key: string]: unknown;
}

const BASE_CLASS = "uds-tabs-item";

function TabItem({
  label,
  active = false,
  icon,
  tag,
  tagVariant = "red",
  className = "",
  onClick,
  ...props
}: TabItemProps) {
  const classNames = [BASE_CLASS, active && "active", className]
    .filter(Boolean)
    .join(" ");

  const Element = onClick ? "button" : "div";

  const hasIcon = !!icon && typeof icon === "string";
  const hasTag = !!tag && (typeof tag === "number" || typeof tag === "string");

  let labelText = "";
  if (label != null) {
    if (typeof label === "string") {
      labelText = label;
    } else {
      labelText = String(label);
    }
  }

  const safeProps: Record<string, unknown> = {};
  Object.keys(props).forEach((key) => {
    const value = props[key];
    if (value == null || typeof value !== "object" || React.isValidElement(value)) {
      safeProps[key] = value;
    }
  });

  return (
    <Element
      className={classNames}
      onClick={onClick}
      role={onClick ? "tab" : undefined}
      aria-selected={onClick ? active : undefined}
      {...safeProps}
    >
      {hasIcon && <Icon name={icon as string} size={16} appearance="bold" />}
      {labelText && <span>{labelText}</span>}
      {hasTag && <Badge count={tag as number | string} variant={tagVariant} />}
    </Element>
  );
}

export default React.memo(TabItem);
