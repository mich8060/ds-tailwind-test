import React from "react";
import "./_container.scss";
import type { ContainerProps } from "./Container.types";

export function Container({
  appearance = "default",
  padding = "default",
  className = "",
  children,
  ...rest
}: ContainerProps) {
  const classNames = [
    "ds-container",
    `ds-container--appearance-${appearance}`,
    `ds-container--padding-${padding}`,
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
