import type { HTMLAttributes } from "react";

export type ContainerAppearance = "default" | "secondary" | "transparent";
export type ContainerPadding = "none" | "xsmall" | "small" | "default" | "large" | "xlarge";
export type ContainerBorder = "default" | "subtle" | "none";
export type ContainerRadius = "none" | "sm" | "md" | "lg";
export type ContainerOverflow = "visible" | "hidden" | "auto" | "clip";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  appearance?: ContainerAppearance;
  rounded?: boolean;
  border?: ContainerBorder;
  radius?: ContainerRadius;
  overflow?: ContainerOverflow;
  padding?: ContainerPadding;
  paddingX?: ContainerPadding;
  paddingY?: ContainerPadding;
}
