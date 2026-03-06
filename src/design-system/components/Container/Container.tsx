import React from "react";
import "./_container.scss";
import type { ContainerProps } from "./Container.types";

export function Container({
  appearance = "transparent",
  padding = "large",
  className = "",
  children,
  ...rest
}: ContainerProps) {
  const classNames = [
    "uds-container",
    `uds-container--appearance-${appearance}`,
    `uds-container--padding-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}
