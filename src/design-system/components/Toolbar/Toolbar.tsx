import "./_toolbar.scss";
import type { ToolbarProps } from "./Toolbar.types";

export function Toolbar({
  left,
  center,
  right,
  className = "",
  ...rest
}: ToolbarProps) {
  const classNames = ["uds-toolbar", className].filter(Boolean).join(" ");

  return (
    <div className={classNames} role="toolbar" {...rest}>
      <div className="uds-toolbar__left">{left}</div>
      <div className="uds-toolbar__center">{center}</div>
      <div className="uds-toolbar__right">{right}</div>
    </div>
  );
}
