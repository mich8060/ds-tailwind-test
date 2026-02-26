import type React from "react";

export type FlexDirection = "row" | "column";
export type FlexJustifyContent =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type FlexAlignItems = "stretch" | "flex-start" | "center" | "flex-end" | "baseline";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type FlexGapToken = "0" | "2" | "4" | "8" | "12" | "16" | "24" | "32";

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  direction?: FlexDirection;
  justifyContent?: FlexJustifyContent;
  alignItems?: FlexAlignItems;
  wrap?: boolean | FlexWrap;
  gap?: FlexGapToken | string;
  fullWidth?: boolean;
  inline?: boolean;
}
