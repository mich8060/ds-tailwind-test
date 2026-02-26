import type { ImgHTMLAttributes } from "react";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: unknown;
  initials?: unknown;
  status?: boolean;
  size?: string;
  className?: string;
  alt?: string;
}
