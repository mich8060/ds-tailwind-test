import type { HTMLAttributes } from "react";
import type { DotStatusVariant } from "../DotStatus/DotStatus.types";

export type StatusAppearance = "light-gray" | "white" | "transparent";
export type StatusShape = "pill" | "rounded";

export interface StatusProps extends HTMLAttributes<HTMLDivElement> {
  label?: unknown;
  variant?: DotStatusVariant;
  appearance?: StatusAppearance;
  shape?: StatusShape;
  className?: string;
  onClick?: (...args: unknown[]) => void;
  disabled?: boolean;
}
