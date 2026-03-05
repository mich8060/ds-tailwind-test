import { Text } from "../Text";
import "./_toolbar.scss";
import type { ToolbarProps } from "./Toolbar.types";

export function Toolbar({
  left,
  right,
  title,
  branding,
  center,
  className = "",
  ...rest
}: ToolbarProps) {
  const classNames = ["uds-toolbar", className].filter(Boolean).join(" ");

  const centerContent =
    center ??
    branding ??
    (title != null ? (
      <Text as="span" variant="body-16" weight="semibold" leading="regular">
        {title}
      </Text>
    ) : null);

  return (
    <div className={classNames} role="toolbar" {...rest}>
      <div className="uds-toolbar__left">{left}</div>
      <div className="uds-toolbar__center">{centerContent}</div>
      <div className="uds-toolbar__right">{right}</div>
    </div>
  );
}
