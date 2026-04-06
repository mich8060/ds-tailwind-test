import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import type { BadgeVariant } from "../Badge/Badge.types";

export type ChipSize = "default" | "compact" | "mini";
export type ChipIconPosition = "both" | "left" | "right" | "none";
export type ChipShape = "pill" | "rounded";

export interface ChipProps extends HTMLAttributes<HTMLElement> {
  label?: ReactNode;
  selected?: boolean;
  rounded?: boolean;
  shape?: ChipShape;
  size?: ChipSize;
  iconPosition?: ChipIconPosition;
  /** @deprecated Use iconPosition. */
  iconPlacement?: ChipIconPosition;
  icon?: string | ReactNode;
  badge?: number | string;
  badgeVariant?: BadgeVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}
