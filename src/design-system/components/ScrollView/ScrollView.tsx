import "./_scroll-view.scss";
import type { ScrollViewProps } from "./ScrollView.types";

export function ScrollView({
  direction = "vertical",
  className = "",
  children,
  ...rest
}: ScrollViewProps) {
  const classNames = [
    "uds-scroll-view",
    `uds-scroll-view--${direction}`,
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
