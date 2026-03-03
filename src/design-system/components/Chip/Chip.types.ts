import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import type { BadgeVariant } from "../Badge/Badge.types";

export type ChipSize = "default" | "compact";
export type ChipIconPlacement = "both" | "left" | "right" | "none";

export interface ChipProps extends HTMLAttributes<HTMLElement> {
  label?: ReactNode;
  selected?: boolean;
  rounded?: boolean;
  size?: ChipSize;
  iconPlacement?: ChipIconPlacement;
  icon?: string | ReactNode;
  badge?: number | string;
  badgeVariant?: BadgeVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}
