import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Dropdown from "../Dropdown/Dropdown";
import Branding from "../Branding/Branding";
import Avatar from "../Avatar/Avatar";
import ActionMenu from "../ActionMenu/ActionMenu";
import Toggle from "../Toggle/Toggle";
import Input from "@mich8060/chg-design-system/Input";
import "./Menu.scss";

// Brand options with display labels
const BRAND_OPTIONS = [
  { value: "design-system", label: "Design System" },
  { value: "locumsmart", label: "LocumSmart" },
  { value: "wireframe", label: "Wireframe" },
  { value: "connect", label: "Connect" },
  { value: "comphealth", label: "CompHealth" },
  { value: "modio", label: "Modio" },
  { value: "weatherby", label: "Weatherby" },
];

/**
 * Menu component with data-driven navigation.
 *
 * @param {Array} navigation - Array of section objects that define the sidebar nav.
 *   Each section: { label: string, icon: string, items: Array<{ path, label, exact? }> }
 * @param {string} activeBrand - Currently selected brand key
 * @param {string} activeMode - "light" or "dark"
 * @param {function} onBrandChange - Callback when brand changes
 * @param {function} onModeChange - Callback when mode changes
 * @param {boolean} showSearch - Whether to show the search section (default: true)
 * @param {boolean} showBrandSwitcher - Whether to show the brand switcher dropdown (default: false)
 * @param {boolean} showAccount - Whether to show the account section (default: true)
 * @param {boolean} showModeToggle - Whether to show the dark/light mode toggle in the account menu (default: false)
 * @param {boolean} showModeSwitch - Whether to show a standalone dark/light mode switch in the menu footer (default: false)
 * @param {object} user - User object for account section: { name, initials, avatar }
 * @param {function} onSignOut - Callback when sign out is clicked
 * @param {Array} accountMenuItems - Additional items for the account action menu
 * @param {boolean} expanded - Controlled expanded state
 * @param {function} onExpandedChange - Callback when expanded state changes
 * @param {string} className - Additional CSS classes
 */
export default function Menu({
  navigation = [],
  activeBrand,
  activeMode,
  onBrandChange,
  onModeChange,
  showSearch = true,
  showBrandSwitcher = false,
  showAccount = true,
  showModeToggle = false,
  showModeSwitch = false,
  user,
  onSignOut,
  accountMenuItems = [],
  expanded: controlledExpanded,
  onExpandedChange,
  className = "",
  ...rest
}) {
  const [internalExpanded, setInternalExpanded] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const location = useLocation();

  // Controlled vs uncontrolled expanded state
  const expanded =
    controlledExpanded !== undefined ? controlledExpanded : internalExpanded;
  const setExpanded = (nextVal) => {
    const next = typeof nextVal === "function" ? nextVal(expanded) : nextVal;
    if (onExpandedChange) onExpandedChange(next);
    if (controlledExpanded === undefined) setInternalExpanded(next);
  };

  const isActive = (path, exact) => {
    if (exact || path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const isAnyChildActive = (items) => {
    return items.some((item) => isActive(item.path, item.exact));
  };

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Auto-expand sections when a child route is active
  useEffect(() => {
    const updates = {};
    navigation.forEach((section, index) => {
      const hasActiveChild = section.items.some((item) =>
        item.exact || item.path === "/"
          ? location.pathname === item.path
          : location.pathname.startsWith(item.path),
      );
      if (hasActiveChild) {
        updates[index] = true;
      }
    });
    if (Object.keys(updates).length > 0) {
      setExpandedSections((prev) => ({ ...prev, ...updates }));
    }
  }, [location.pathname, navigation]);

  return (
    <aside
      className={`menu ${expanded ? "menu--expanded" : "menu--collapsed"} ${className}`.trim()}
      {...rest}
    >
      {/* Branding Section */}
      <div className="menu__branding">
        <Button
          appearance="text"
          layout="icon-only"
          size="default"
          icon="List"
          iconSize={20}
          aria-label="Toggle menu"
          onClick={() => setExpanded(!expanded)}
          className="menu__toggle"
        />
        {expanded && (
          <div className="menu__brand">
            <Branding brand={activeBrand || "design-system"} />
          </div>
        )}
      </div>

      {/* Brand Switcher Section */}
      {showBrandSwitcher && expanded && (
        <div className="menu__brand-switcher">
          <Dropdown
            options={BRAND_OPTIONS}
            value={activeBrand}
            onChange={onBrandChange}
            id="brand-select"
            size="compact"
            className="menu__brand-dropdown"
          />
        </div>
      )}

      {/* Search Section */}
      {showSearch && (
        <div className="menu__search">
          {expanded ? (
            <div className="menu__search-input">
              <Input
                placeholder="Search..."
                icon="MagnifyingGlass"
                size="compact"
              />
            </div>
          ) : (
            <div className="menu__search-icon">
              <Icon name="MagnifyingGlass" size={16} appearance="regular" />
            </div>
          )}
        </div>
      )}

      {/* Navigation Section */}
      <nav className="menu__nav">
        {expanded &&
          navigation.map((section, index) => {
            const isSectionExpanded = !!expandedSections[index];
            const hasActiveChild = isAnyChildActive(section.items);

            return (
              <div key={section.label} className="menu__accordion">
                <button
                  className={`menu__accordion-header ${hasActiveChild ? "menu__accordion-header--active" : ""}`}
                  onClick={() => toggleSection(index)}
                  aria-expanded={isSectionExpanded}
                >
                  <Icon
                    name={section.icon || "SquaresFour"}
                    size={24}
                    appearance="duotone"
                  />
                  <span className="menu__item-label">{section.label}</span>
                  <Icon
                    name="CaretDown"
                    size={16}
                    appearance="bold"
                    className={`menu__accordion-icon ${isSectionExpanded ? "menu__accordion-icon--expanded" : ""}`}
                  />
                </button>
                <div
                  className={`menu__accordion-body ${isSectionExpanded ? "menu__accordion-body--expanded" : ""}`}
                >
                  {section.items.map((item) => {
                    const active = isActive(item.path, item.exact);
                    return (
                      <NavLink
                        key={item.path}
                        className={`menu__item menu__item--sub ${active ? "menu__item--sub--active" : ""}`}
                        to={item.path}
                        end={item.exact || undefined}
                      >
                        <span className="menu__item-label">{item.label}</span>
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </nav>

      {/* Mode Switch (standalone footer) */}
      {showModeSwitch && (
        <div className="menu__footer">
          <Icon
            name={activeMode === "light" ? "Sun" : "Moon"}
            size={20}
            appearance="duotone"
          />
          {expanded && (
            <span className="menu__mode-label">
              {activeMode === "light" ? "Light Mode" : "Dark Mode"}
            </span>
          )}
          <Toggle
            checked={activeMode === "dark"}
            size="small"
            onChange={(checked) => onModeChange(checked ? "dark" : "light")}
            className="menu__mode-toggle"
          />
        </div>
      )}

      {/* Account Section */}
      {showAccount && (
        <div className="menu__account">
          <Avatar
            initials={user?.initials}
            src={user?.avatar}
            name={user?.name}
            size="default"
          />
          {expanded && (
            <>
              <span className="menu__account-name">{user?.name || "User"}</span>
              <ActionMenu
                placement="top-end"
                trigger={
                  <Button
                    appearance="text"
                    layout="icon-only"
                    size="default"
                    icon={<Icon name="DotsThreeVertical" size={24} appearance="bold" />}
                    aria-label="Account menu"
                  />
                }
                items={[
                  ...accountMenuItems,
                  ...(accountMenuItems.length > 0 && showModeToggle
                    ? [{ divider: true }]
                    : []),
                  ...(showModeToggle
                    ? [
                        {
                          type: "toggle",
                          label: "Dark Mode",
                          icon: activeMode === "light" ? "Moon" : "Sun",
                          checked: activeMode === "dark",
                          onChange: (checked) =>
                            onModeChange(checked ? "dark" : "light"),
                        },
                      ]
                    : []),
                  { divider: true },
                  {
                    label: "Sign Out",
                    icon: "SignOut",
                    destructive: true,
                    onClick: onSignOut,
                  },
                ]}
                className="menu__account-menu"
              />
            </>
          )}
        </div>
      )}
    </aside>
  );
}
