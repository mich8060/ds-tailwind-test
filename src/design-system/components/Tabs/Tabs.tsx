import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import TabItem from "./TabItem";
import Button from "../Button/Button";
import "./_tabs.scss";
import type { TabsProps } from "./Tabs.types";

const BASE_CLASS = "uds-tabs";

const appearanceClassMap = {
  underline: "underline",
  block: "block",
  "block-inverted": "block-inverted",
};

const orientationClassMap = {
  horizontal: "horizontal",
  vertical: "vertical",
};

/**
 * Tabs component - A simple complete tab group
 *
 * @param {Array} tabs - Array of tab objects: [{ label, icon?, tag?, onClick? }, ...]
 * @param {string} appearance - Visual style variant: 'underline', 'block', or 'block-inverted'
 * @param {number} activeTab - Index of the currently active tab (0-based)
 * @param {boolean} fill - Whether tabs should fill available width (default: false)
 * @param {boolean} scrollable - Whether tabs should scroll when overflowing (default: false)
 * @param {function} onTabChange - Callback when tab changes: (index) => void
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional props to pass to the tabs container
 */
function Tabs({
  tabs = [],
  appearance = "underline",
  orientation = "horizontal",
  activeTab,
  fill = false,
  scrollable = false,
  onTabChange,
  className = "",
  ...props
}: TabsProps) {
  const tabsContainerRef = useRef<HTMLDivElement | null>(null);
  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const tabsGroupId = useId().replace(/[:]/g, "");
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isScrollable = scrollable && orientation === "horizontal";

  // Default to first tab (index 0) if activeTab is not provided or invalid
  const currentActiveTab = activeTab !== undefined && activeTab !== null && activeTab >= 0 && activeTab < tabs.length
    ? activeTab
    : 0;

  const classNames = [
    BASE_CLASS,
    appearanceClassMap[appearance] &&
      `${BASE_CLASS}--${appearanceClassMap[appearance]}`,
    orientationClassMap[orientation] &&
      `${BASE_CLASS}--${orientationClassMap[orientation]}`,
    fill && `${BASE_CLASS}--fill`,
    isScrollable && `${BASE_CLASS}--scrollable`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleTabClick = useCallback((index, tab) => {
    if (tab.onClick) {
      tab.onClick(index, tab);
    }
    if (onTabChange) {
      onTabChange(index, tab);
    }
  }, [onTabChange]);

  const focusTabAtIndex = useCallback((index: number) => {
    if (!tabsListRef.current) return;
    const tabElements = tabsListRef.current.querySelectorAll<HTMLElement>('[role="tab"]');
    const target = tabElements[index];
    if (target) {
      target.focus();
    }
  }, []);

  const getSafeTabObject = useCallback((tab: unknown): Record<string, unknown> | null => {
    if (!tab || typeof tab !== "object") return null;
    return tab as Record<string, unknown>;
  }, []);

  const handleTabKeyDown = useCallback(
    (event: React.KeyboardEvent, index: number, tab: Record<string, unknown>) => {
      if (!tabs.length) return;

      let nextIndex = index;
      const horizontal = orientation === "horizontal";

      switch (event.key) {
        case "ArrowRight":
          if (!horizontal) return;
          event.preventDefault();
          nextIndex = (index + 1) % tabs.length;
          break;
        case "ArrowLeft":
          if (!horizontal) return;
          event.preventDefault();
          nextIndex = (index - 1 + tabs.length) % tabs.length;
          break;
        case "ArrowDown":
          if (horizontal) return;
          event.preventDefault();
          nextIndex = (index + 1) % tabs.length;
          break;
        case "ArrowUp":
          if (horizontal) return;
          event.preventDefault();
          nextIndex = (index - 1 + tabs.length) % tabs.length;
          break;
        case "Home":
          event.preventDefault();
          nextIndex = 0;
          break;
        case "End":
          event.preventDefault();
          nextIndex = tabs.length - 1;
          break;
        case "Enter":
        case " ":
          event.preventDefault();
          handleTabClick(index, tab);
          return;
        default:
          return;
      }

      const nextTab = getSafeTabObject(tabs[nextIndex]);
      if (!nextTab) return;
      handleTabClick(nextIndex, nextTab);
      requestAnimationFrame(() => focusTabAtIndex(nextIndex));
    },
    [focusTabAtIndex, getSafeTabObject, handleTabClick, orientation, tabs]
  );

  // Check if scrolling is needed and update scroll button visibility
  const checkScrollButtons = useCallback(() => {
    if (!isScrollable || !tabsContainerRef.current || !tabsListRef.current) {
      return;
    }

    const container = tabsContainerRef.current;
    const list = tabsListRef.current;
    const containerWidth = container.offsetWidth;
    const listWidth = list.scrollWidth;
    const scrollLeft = list.scrollLeft;

    setShowLeftScroll(scrollLeft > 0);
    setShowRightScroll(scrollLeft < listWidth - containerWidth - 1);
  }, [isScrollable]);

  // Scroll to active tab if it's not visible
  const scrollToActiveTab = useCallback(() => {
    if (!isScrollable || !tabsListRef.current || currentActiveTab === undefined) {
      return;
    }

    const list = tabsListRef.current;
    const container = tabsContainerRef.current;
    const activeTabElement = list.children[currentActiveTab];

    if (!activeTabElement || !container) {
      return;
    }

    const _containerLeft = container.offsetLeft; // eslint-disable-line no-unused-vars
    const containerWidth = container.offsetWidth;
    const tabLeft = activeTabElement.offsetLeft;
    const tabWidth = activeTabElement.offsetWidth;
    const scrollLeft = list.scrollLeft;

    // Check if tab is outside visible area
    const tabRight = tabLeft + tabWidth;
    const visibleLeft = scrollLeft;
    const visibleRight = scrollLeft + containerWidth;

    if (tabLeft < visibleLeft) {
      // Tab is to the left of visible area
      list.scrollTo({
        left: tabLeft - 16, // Add some padding
        behavior: "smooth",
      });
    } else if (tabRight > visibleRight) {
      // Tab is to the right of visible area
      list.scrollTo({
        left: tabRight - containerWidth + 16, // Add some padding
        behavior: "smooth",
      });
    }
  }, [currentActiveTab, isScrollable]);

  // Handle scroll button clicks
  const handleScrollLeft = useCallback(() => {
    if (!tabsListRef.current) return;
    const scrollAmount = tabsListRef.current.offsetWidth * 0.75;
    tabsListRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  }, []);

  const handleScrollRight = useCallback(() => {
    if (!tabsListRef.current) return;
    const scrollAmount = tabsListRef.current.offsetWidth * 0.75;
    tabsListRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const target = tabsContainerRef.current ?? tabsListRef.current;
    if (!target || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(Boolean(entry?.isIntersecting));
      },
      { root: null, threshold: 0.01 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  // Check scroll buttons on mount, resize, and scroll
  useEffect(() => {
    if (!isScrollable || !isVisible) return;

    checkScrollButtons();
    scrollToActiveTab();

    const container = tabsContainerRef.current;
    const list = tabsListRef.current;

    if (!container || !list) return;

    const resizeObserver = new ResizeObserver(() => {
      checkScrollButtons();
      scrollToActiveTab();
    });

    resizeObserver.observe(container);
    resizeObserver.observe(list);

    list.addEventListener("scroll", checkScrollButtons);

    return () => {
      resizeObserver.disconnect();
      list.removeEventListener("scroll", checkScrollButtons);
    };
  }, [checkScrollButtons, scrollToActiveTab, isScrollable, isVisible, tabs.length]);

  // Auto-select first tab on mount if no activeTab is provided
  useEffect(() => {
    if (activeTab === undefined || activeTab === null) {
      if (onTabChange && tabs.length > 0) {
        onTabChange(0, tabs[0]);
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Scroll to active tab when it changes
  useEffect(() => {
    if (isScrollable && isVisible) {
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        scrollToActiveTab();
        checkScrollButtons();
      }, 100);
    }
  }, [checkScrollButtons, currentActiveTab, scrollToActiveTab, isScrollable, isVisible]);

  // Early return after all hooks
  if (!tabs || tabs.length === 0) {
    return null;
  }

  const tabsContent = (
    <div
      ref={tabsListRef}
      className={`${BASE_CLASS}__list`}
      role="tablist"
      aria-orientation={orientation}
      {...props}
    >
      {tabs.map((tab, index) => {
        const safeTab = getSafeTabObject(tab);
        if (!safeTab) return null;
        
        // Safely extract label - ensure it's a string, not an object
        const label = (safeTab.label != null && typeof safeTab.label === "string")
          ? safeTab.label
          : (safeTab.label != null && typeof safeTab.label !== "object")
          ? String(safeTab.label)
          : "";
        
        // Safely extract icon - only use if it's a string
        const icon = typeof safeTab.icon === "string" ? safeTab.icon : undefined;
        
        // Safely extract tag - only use if it's a number or string
        const tag = (typeof safeTab.tag === "number" || typeof safeTab.tag === "string") 
          ? safeTab.tag 
          : undefined;
        
        // Safely extract tagVariant - only use if it's a string
        const tagVariant = typeof safeTab.tagVariant === "string" ? safeTab.tagVariant : undefined;
        
        // Safely get key - ensure it's a string or number
        const tabKey = (safeTab.id != null && typeof safeTab.id !== "object")
          ? (typeof safeTab.id === "string" || typeof safeTab.id === "number" ? safeTab.id : String(safeTab.id))
          : index;
        
        return (
          <TabItem
            key={tabKey}
            label={label}
            appearance={appearance}
            active={index === currentActiveTab}
            icon={icon}
            tag={tag}
            tagVariant={tagVariant}
            id={`${BASE_CLASS}-tab-${tabsGroupId}-${index}`}
            tabIndex={index === currentActiveTab ? 0 : -1}
            onKeyDown={(event) => handleTabKeyDown(event, index, safeTab)}
            onClick={() => handleTabClick(index, safeTab)}
          />
        );
      })}
    </div>
  );

  if (isScrollable) {
    return (
      <div ref={tabsContainerRef} className={classNames}>
        {showLeftScroll && (
          <Button
            appearance="ghost"
            layout="icon-only"
            icon="CaretLeft"
            onClick={handleScrollLeft}
            className={`${BASE_CLASS}__scroll-button ${BASE_CLASS}__scroll-button--left`}
            aria-label="Scroll tabs left"
          />
        )}
        {tabsContent}
        {showRightScroll && (
          <Button
            appearance="ghost"
            layout="icon-only"
            icon="CaretRight"
            onClick={handleScrollRight}
            className={`${BASE_CLASS}__scroll-button ${BASE_CLASS}__scroll-button--right`}
            aria-label="Scroll tabs right"
          />
        )}
      </div>
    );
  }

  return (
    <div className={classNames} {...props}>
      <div ref={tabsListRef} className={`${BASE_CLASS}__list`} role="tablist" aria-orientation={orientation}>
      {tabs.map((tab, index) => {
        const safeTab = getSafeTabObject(tab);
        if (!safeTab) return null;
        
        // Safely extract label - ensure it's a string, not an object
        const label = (safeTab.label != null && typeof safeTab.label === "string")
          ? safeTab.label
          : (safeTab.label != null && typeof safeTab.label !== "object")
          ? String(safeTab.label)
          : "";
        
        // Safely extract icon - only use if it's a string
        const icon = typeof safeTab.icon === "string" ? safeTab.icon : undefined;
        
        // Safely extract tag - only use if it's a number or string
        const tag = (typeof safeTab.tag === "number" || typeof safeTab.tag === "string") 
          ? safeTab.tag 
          : undefined;
        
        // Safely extract tagVariant - only use if it's a string
        const tagVariant = typeof safeTab.tagVariant === "string" ? safeTab.tagVariant : undefined;
        
        // Safely get key - ensure it's a string or number
        const tabKey = (safeTab.id != null && typeof safeTab.id !== "object")
          ? (typeof safeTab.id === "string" || typeof safeTab.id === "number" ? safeTab.id : String(safeTab.id))
          : index;
        
        return (
          <TabItem
            key={tabKey}
            label={label}
            appearance={appearance}
            active={index === currentActiveTab}
            icon={icon}
            tag={tag}
            tagVariant={tagVariant}
            id={`${BASE_CLASS}-tab-${tabsGroupId}-${index}`}
            tabIndex={index === currentActiveTab ? 0 : -1}
            onKeyDown={(event) => handleTabKeyDown(event, index, safeTab)}
            onClick={() => handleTabClick(index, safeTab)}
          />
        );
      })}
      </div>
    </div>
  );
}

export default React.memo(Tabs);
