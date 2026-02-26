import type { ButtonHTMLAttributes } from "react";

export interface MenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: unknown;
  className?: string;
  navItems?: unknown[];
  brands?: unknown[];
  activeBrand?: unknown;
  onBrandChange?: (...args: unknown[]) => void;
  activeMode?: unknown;
  onModeChange?: (...args: unknown[]) => void;
  showBrand?: boolean;
  showSearch?: boolean;
  showBrandSwitcher?: boolean;
  showNav?: boolean;
  showModeToggle?: boolean;
  showUser?: boolean;
  identity?: string;
}
