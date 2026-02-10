import React from "react";
import "./Flex.scss";

/**
 * Flex layout component
 * @param {string} direction - Flex direction: 'row', 'column', 'row-reverse', 'column-reverse'
 * @param {string} gap - Gap between items (uses UDS gap tokens)
 * @param {string} alignItems - Align items: 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'
 * @param {string} justifyContent - Justify content: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'
 * @param {boolean} wrap - Whether to wrap items
 * @param {string|boolean} container - Container size constraint. true or "responsive" for responsive container,
 *   or a named size: "xs" (480px), "sm" (640px), "md" (768px), "lg" (1024px), "xl" (1280px),
 *   "2xl" (1536px), "narrow" (640px), "prose" (65ch), "wide" (1440px), "full" (100%)
 * @param {boolean} padded - When true with container, adds responsive horizontal padding
 * @param {string} className - Additional CSS classes
 * @param {React.ReactNode} children - Child elements
 * @param {object} props - Additional props to pass to the flex container
 */
export default function Flex({
  direction = "row",
  gap,
  alignItems,
  justifyContent,
  wrap = false,
  container,
  padded = false,
  className = "",
  children,
  ...props
}) {
  const flexClasses = [
    "uds-flex",
    direction && `uds-flex--${direction}`,
    wrap && "uds-flex--wrap",
    gap && `uds-flex--gap-${gap}`,
    alignItems && `uds-flex--align-${alignItems.replace("-", "_")}`,
    justifyContent && `uds-flex--justify-${justifyContent.replace(/-/g, "_")}`,
    container && "container",
    container === true || container === "responsive"
      ? "container-responsive"
      : container && `container-${container}`,
    padded && "container-padded",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={flexClasses} {...props}>
      {children}
    </div>
  );
}
