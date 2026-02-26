import React from "react";
import "./_flex.scss";
import type { FlexProps } from "./Flex.types";

const GAP_TOKEN_VALUES = new Set(["0", "2", "4", "8", "12", "16", "24", "32"]);

function normalizeWrap(wrap: FlexProps["wrap"]): "nowrap" | "wrap" | "wrap-reverse" {
  if (wrap === true) return "wrap";
  if (wrap === false || wrap == null) return "nowrap";
  return wrap;
}

function toKebab(value: string): string {
  return value.replace(/\s+/g, "-");
}

export const Flex = React.forwardRef<HTMLElement, FlexProps>(function Flex(
  {
    as: Component = "div",
    direction = "row",
    justifyContent,
    alignItems,
    wrap = false,
    gap,
    fullWidth = false,
    inline = false,
    className,
    style,
    children,
    ...rest
  },
  ref
) {
  const wrapValue = normalizeWrap(wrap);

  const classes = [
    "ds-flex",
    `ds-flex--direction-${direction}`,
    justifyContent && `ds-flex--justify-${toKebab(justifyContent)}`,
    alignItems && `ds-flex--align-${toKebab(alignItems)}`,
    `ds-flex--wrap-${toKebab(wrapValue)}`,
    inline && "ds-flex--inline",
    fullWidth && "ds-flex--full-width",
    className
  ]
    .filter(Boolean)
    .join(" ");

  const computedStyle: React.CSSProperties = {};
  if (gap != null && style?.gap == null) {
    const gapString = String(gap);
    computedStyle.gap = GAP_TOKEN_VALUES.has(gapString) ? `var(--uds-spacing-${gapString})` : gap;
  }
  if (fullWidth && style?.width == null) {
    computedStyle.width = "100%";
  }

  return (
    <Component ref={ref} className={classes} style={{ ...computedStyle, ...style }} {...rest}>
      {children}
    </Component>
  );
});
