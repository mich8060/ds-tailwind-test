import React from "react";
import Icon from "../Icon/Icon";
import "./_empty-state.scss";
import type { EmptyStateProps } from "./EmptyState.types";

export function EmptyState({
  title,
  description,
  icon = "Inbox",
  iconSize = 32,
  action,
  secondaryAction,
  align = "center",
  className = "",
  ...props
}: EmptyStateProps) {
  const classNames = [
    "uds-empty-state",
    `uds-empty-state--${align}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      <div className="uds-empty-state__icon" aria-hidden="true">
        <Icon name={icon} size={iconSize} />
      </div>
      <div className="uds-empty-state__content">
        <div className="uds-empty-state__title">{title}</div>
        {description ? <div className="uds-empty-state__description">{description}</div> : null}
      </div>
      {(action || secondaryAction) ? (
        <div className="uds-empty-state__actions">
          {action}
          {secondaryAction}
        </div>
      ) : null}
    </div>
  );
}
