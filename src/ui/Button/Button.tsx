import type { MouseEvent, ReactNode } from "react";
import "./Button.scss";
import Icon from "../Icon/Icon";
import {
  BUTTON_BASE_CLASS,
  BUTTON_CLASS_MAP,
  BUTTON_DEFAULTS,
} from "./Button.spec";
import type { ButtonProps, ButtonTracking } from "./Button.types";

const IconComponent = Icon as any;

const isTrackingObject = (
  value: ButtonTracking,
): value is Exclude<ButtonTracking, string> =>
  typeof value === "object" && value !== null;

const toIconNode = (
  icon: ButtonProps["icon"],
  iconSize: ButtonProps["iconSize"],
): ReactNode | null => {
  if (!icon) return null;
  if (typeof icon === "string") {
    return <IconComponent name={icon} size={iconSize} appearance="regular" />;
  }
  return icon;
};

export default function Button({
  label,
  appearance = BUTTON_DEFAULTS.appearance,
  layout = BUTTON_DEFAULTS.layout,
  size = BUTTON_DEFAULTS.size,
  icon,
  iconSize,
  icons,
  children,
  tracking,
  "aria-label": ariaLabel,
  className,
  onClick,
  ...rest
}: ButtonProps) {
  const classNames = [
    BUTTON_BASE_CLASS,
    appearance !== BUTTON_DEFAULTS.appearance &&
      BUTTON_CLASS_MAP.appearance[appearance],
    layout !== BUTTON_DEFAULTS.layout && BUTTON_CLASS_MAP.layout[layout],
    size !== BUTTON_DEFAULTS.size && BUTTON_CLASS_MAP.size[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isIconOnly = layout === "icon-only" || layout === "only";
  const hasVisibleLabel = Boolean(label) && !isIconOnly;

  const iconComponent = toIconNode(icon, iconSize);
  const iconContent = iconComponent || icons || children;

  const iconNode = iconContent ? (
    <span
      className={`${BUTTON_BASE_CLASS}__icon`}
      aria-hidden={hasVisibleLabel ? "true" : undefined}
    >
      {iconContent}
    </span>
  ) : null;

  const labelNode = label ? (
    <span className={`${BUTTON_BASE_CLASS}__label`}>{label}</span>
  ) : null;

  const renderContent = (): ReactNode => {
    switch (layout) {
      case "icon-left":
        return (
          <>
            {iconNode}
            {labelNode}
          </>
        );
      case "icon-right":
        return (
          <>
            {labelNode}
            {iconNode}
          </>
        );
      case "icon-only":
      case "only":
        return iconNode || labelNode;
      case "label-only":
      default:
        return labelNode || iconNode;
    }
  };

  const isDisabled = appearance === "disabled" || rest.disabled;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (tracking) {
      const payload = {
        component: "Button",
        action: "click",
        label,
        ...(isTrackingObject(tracking) ? tracking : { event: tracking }),
      };
      window.dispatchEvent(new CustomEvent("uds:track", { detail: payload }));
    }
    onClick?.(e);
  };

  const buttonAriaLabel =
    ariaLabel ||
    (isIconOnly && label ? label : undefined) ||
    (isIconOnly && typeof icon === "string" ? `${icon} icon` : undefined);

  return (
    <button
      type="button"
      className={classNames}
      disabled={isDisabled}
      aria-label={buttonAriaLabel || undefined}
      onClick={handleClick}
      {...rest}
    >
      {renderContent()}
    </button>
  );
}
