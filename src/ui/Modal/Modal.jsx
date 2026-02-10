import React, { useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Icon from "../Icon/Icon";
import "./Modal.scss";

const BASE_CLASS = "uds-modal";

const sizeClassMap = {
  small: "small",
  default: "default",
  large: "large",
  fullscreen: "fullscreen",
};

/**
 * Modal component — Accessible dialog overlay
 *
 * A standalone, controlled modal that renders via a portal.
 * Supports title/subtitle/badge header, scrollable content, footer actions,
 * size variants, backdrop click dismissal, and Escape key dismissal.
 *
 * @param {boolean}       open             - Whether the modal is visible
 * @param {function}      onClose          - Called when the user requests close (Escape, backdrop, X button)
 * @param {string}        title            - Header title text
 * @param {string}        subtitle         - Header subtitle text
 * @param {React.ReactNode} badge          - Optional badge element next to the title
 * @param {React.ReactNode} header         - Custom header override (replaces title/subtitle/badge)
 * @param {React.ReactNode} footer         - Footer content (typically action buttons)
 * @param {string}        size             - "small" (480px) | "default" (640px) | "large" (800px) | "fullscreen"
 * @param {boolean}       closeOnBackdrop  - Close when clicking the overlay backdrop (default true)
 * @param {boolean}       closeOnEscape    - Close on Escape key press (default true)
 * @param {HTMLElement}   container        - Portal target element (default document.body)
 * @param {string}        className        - Additional CSS classes for the dialog panel
 * @param {React.ReactNode} children       - Modal body content
 * @param {object}        props            - Additional props spread onto the dialog element
 */
export default function Modal({
  open = false,
  onClose,
  title,
  subtitle,
  badge,
  header,
  footer,
  size = "default",
  closeOnBackdrop = true,
  closeOnEscape = true,
  container,
  className = "",
  children,
  ...props
}) {
  const dialogRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Lock body scroll and trap focus when open
  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = "hidden";

      // Focus the dialog panel for keyboard accessibility
      requestAnimationFrame(() => {
        dialogRef.current?.focus();
      });

      return () => {
        document.body.style.overflow = "";
        // Restore focus to previously active element
        previousActiveElement.current?.focus?.();
      };
    }
  }, [open]);

  // Escape key handler
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape" && closeOnEscape && onClose) {
        e.stopPropagation();
        onClose();
      }
    },
    [closeOnEscape, onClose],
  );

  // Backdrop click handler
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget && closeOnBackdrop && onClose) {
        onClose();
      }
    },
    [closeOnBackdrop, onClose],
  );

  if (!open) return null;

  const sizeClass = sizeClassMap[size] || sizeClassMap.default;

  const dialogClasses = [
    BASE_CLASS,
    `${BASE_CLASS}--${sizeClass}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const overlayClasses = [
    `${BASE_CLASS}__overlay`,
    size === "fullscreen" && `${BASE_CLASS}__overlay--fullscreen`,
  ]
    .filter(Boolean)
    .join(" ");

  const modal = (
    <div
      className={overlayClasses}
      onClick={handleBackdropClick}
      aria-hidden="true"
    >
      <div
        ref={dialogRef}
        className={dialogClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${BASE_CLASS}-title` : undefined}
        aria-describedby={subtitle ? `${BASE_CLASS}-subtitle` : undefined}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {/* Header */}
        <div className={`${BASE_CLASS}__header`}>
          {header || (
            <div className={`${BASE_CLASS}__header-content`}>
              <div className={`${BASE_CLASS}__header-info`}>
                <div className={`${BASE_CLASS}__header-title-row`}>
                  {title && (
                    <h2 id={`${BASE_CLASS}-title`} className={`${BASE_CLASS}__title`}>
                      {title}
                    </h2>
                  )}
                  {badge && <span className={`${BASE_CLASS}__badge`}>{badge}</span>}
                </div>
                {subtitle && (
                  <p id={`${BASE_CLASS}-subtitle`} className={`${BASE_CLASS}__subtitle`}>
                    {subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                className={`${BASE_CLASS}__close`}
                onClick={onClose}
                aria-label="Close modal"
              >
                <Icon name="X" size={16} appearance="regular" />
              </button>
            </div>
          )}
        </div>

        {/* Body */}
        <div className={`${BASE_CLASS}__body`}>{children}</div>

        {/* Footer */}
        {footer && <div className={`${BASE_CLASS}__footer`}>{footer}</div>}
      </div>
    </div>
  );

  return createPortal(modal, container || document.body);
}
