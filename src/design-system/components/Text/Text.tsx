import React from "react";
import type { TextLeading, TextProps, TextWeight } from "./Text.types";
import "./_text.scss";

const weightClass: Record<TextWeight, string> = {
  regular: "uds-text--weight-regular",
  medium: "uds-text--weight-medium",
  semibold: "uds-text--weight-semibold",
  bold: "uds-text--weight-bold"
};

const leadingClass: Record<TextLeading, string> = {
  tight: "uds-text--leading-tight",
  regular: "uds-text--leading-regular",
  loose: "uds-text--leading-loose"
};

export function Text<T extends React.ElementType = "p">({
  as,
  variant,
  weight = "regular" as TextWeight,
  leading = "regular" as TextLeading,
  className = "",
  children,
  ...rest
}: TextProps<T>) {
  const Component = (as ?? "p") as React.ElementType;

  return (
    <Component
      className={[
        "uds-text",
        `uds-text--${variant}`,
        weightClass[weight],
        leadingClass[leading],
        className
      ].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </Component>
  );
}
