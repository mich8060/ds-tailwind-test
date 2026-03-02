import type { HTMLAttributes, ReactNode } from "react";

export type EmptyStateAlign = "left" | "center";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: ReactNode;
  description?: ReactNode;
  icon?: string;
  iconSize?: number;
  action?: ReactNode;
  secondaryAction?: ReactNode;
  align?: EmptyStateAlign;
}
