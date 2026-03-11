import type { AnchorHTMLAttributes } from "react";

export type LinkAppearance = "primary" | "secondary";
export type LinkUnderline = "always" | "hover" | "none";

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "color"> {
  appearance?: LinkAppearance;
  underline?: LinkUnderline;
  disabled?: boolean;
}
