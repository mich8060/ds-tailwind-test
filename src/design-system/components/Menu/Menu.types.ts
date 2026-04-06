import type { HTMLAttributes } from "react";
import type React from "react";

/** Menu visual mode. */
export type MenuMode = "light" | "dark";

/** Child link item used inside accordion-style menu sections. */
export interface MenuChildItem {
  label: string;
  path: string;
}

/** Top-level menu item. */
export interface MenuNavItem {
  label: string;
  icon: string;
  path?: string;
  children?: MenuChildItem[];
}

export interface MenuNavigateDetail {
  path: string;
  label: string;
  parentLabel?: string;
}

/**
 * Public props for the UDS Menu component.
 *
 * @example
 * ```tsx
 * <Menu
 *   navItems={[{ label: "Dashboard", icon: "House", path: "/" }]}
 *   brands={["default", "comphealth"]}
 *   activeBrand="default"
 *   onBrandChange={(brand) => setBrand(brand)}
 * />
 * ```
 */
export interface MenuProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  title?: string;
  navItems?: MenuNavItem[];
  brands?: string[];
  activeBrand?: string;
  onBrandChange?: (brand: string) => void;
  activeMode?: MenuMode;
  onModeChange?: (mode: MenuMode) => void;
  /** Controlled current path for active-state resolution without relying on router context. */
  currentPath?: string;
  /** Optional navigation callback. When provided, Menu will call this instead of relying on router links. */
  onNavigate?: (detail: MenuNavigateDetail, event: React.MouseEvent<HTMLElement>) => void;
  showBrand?: boolean;
  showSearch?: boolean;
  showBrandSwitcher?: boolean;
  showNav?: boolean;
  showModeToggle?: boolean;
  showUser?: boolean;
  userName?: string;
  userInitials?: string;
  userAvatarSrc?: string;
  accountMenuItems?: unknown[];
  identity?: string;
  /** Initial expanded/collapsed state of the sidebar rail. */
  defaultExpanded?: boolean;
}
