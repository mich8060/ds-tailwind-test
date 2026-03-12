import React from "react";
import Icon from "../Icon/Icon";
import Tag from "../Tag/Tag";

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
  appearance = "underline",
  active = false,
  icon,
  tag,
  tagVariant = "neutral",
  className = "",
  onClick,
  ...props
}: TabItemProps) {
  const classNames = [
    BASE_CLASS,
    `${BASE_CLASS}--${appearance}`,
    active && "active",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Element = onClick ? "button" : "div";

  const hasIcon = !!icon && typeof icon === "string";
  const hasTag =
    tag === true || (tag !== false && (typeof tag === "number" || typeof tag === "string"));

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
      {hasIcon && (
        <Icon
          name={icon as string}
          size={16}
          appearance="bold"
          className={`${BASE_CLASS}__icon`}
        />
      )}
      {labelText && <span className={`${BASE_CLASS}__label`}>{labelText}</span>}
      {hasTag && (
        <Tag
          label={typeof tag === "number" || typeof tag === "string" ? String(tag) : "Label"}
          size="default"
          appearance="label-only"
          rounded
          solid
          color={tagVariant === "sky" ? "sky" : "neutral"}
          className={`${BASE_CLASS}__tag`}
        />
      )}
    </Element>
  );
}

export default React.memo(TabItem);
