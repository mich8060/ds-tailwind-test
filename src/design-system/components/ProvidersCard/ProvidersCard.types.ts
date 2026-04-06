import type { HTMLAttributes, ReactNode } from "react";
import type { DotStatusVariant } from "../DotStatus/DotStatus.types";

export interface ProvidersCardTag {
  label: string;
  color?: string;
}

export interface ProvidersCardProps extends HTMLAttributes<HTMLDivElement> {
  name: ReactNode;
  specialty?: ReactNode;
  location?: ReactNode;
  availability?: ReactNode;
  startDate?: ReactNode;
  statusLabel?: ReactNode;
  statusVariant?: DotStatusVariant;
  avatarSrc?: string;
  avatarInitials?: string;
  tags?: ProvidersCardTag[];
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
}
