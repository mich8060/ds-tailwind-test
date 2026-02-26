import type { ButtonHTMLAttributes } from "react";

export interface PaginationProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (...args: unknown[]) => void;
  variant?: string;
  showFirstLast?: boolean;
  className?: string;
}
