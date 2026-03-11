import type { MouseEvent } from "react";
import "./_link.scss";
import type { LinkProps } from "./Link.types";

const BASE_CLASS = "uds-link";

export function Link({
  appearance = "primary",
  underline = "always",
  disabled = false,
  className = "",
  target,
  rel,
  href,
  onClick,
  tabIndex,
  children,
  ...rest
}: LinkProps) {
  const classNames = [
    BASE_CLASS,
    `${BASE_CLASS}--${appearance}`,
    `${BASE_CLASS}--underline-${underline}`,
    disabled && `${BASE_CLASS}--disabled`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const computedRel =
    target === "_blank"
      ? [rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
      : rel;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event);
  };

  return (
    <a
      className={classNames}
      href={disabled ? undefined : href}
      target={target}
      rel={computedRel || undefined}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : tabIndex}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
}

export default Link;
