import type { ButtonHTMLAttributes, ReactNode } from "react";
import type {
  BUTTON_APPEARANCES,
  BUTTON_LAYOUTS,
  BUTTON_SIZES,
} from "./Button.spec";

export type ButtonLayout = (typeof BUTTON_LAYOUTS)[number];
export type ButtonAppearance = (typeof BUTTON_APPEARANCES)[number];
export type ButtonSize = (typeof BUTTON_SIZES)[number];

export type ButtonTracking =
  | string
  | {
      event?: string;
      category?: string;
      [key: string]: unknown;
    };

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label?: string;
  appearance?: ButtonAppearance;
  layout?: ButtonLayout;
  size?: ButtonSize;
  icon?: string | ReactNode;
  iconSize?: number;
  icons?: ReactNode;
  children?: ReactNode;
  tracking?: ButtonTracking;
  "aria-label"?: string;
}
