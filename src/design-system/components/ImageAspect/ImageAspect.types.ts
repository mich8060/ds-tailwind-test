import type { ImgHTMLAttributes } from "react";

export interface ImageAspectProps extends ImgHTMLAttributes<HTMLImageElement> {
  ratio?: string;
  src?: unknown;
  alt?: string;
  className?: string;
}
