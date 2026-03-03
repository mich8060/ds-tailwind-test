import React, { useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import "./_dialog.scss";
import type { DialogIntent, DialogProps } from "./Dialog.types";

const BASE_CLASS = "uds-dialog";
const APP_SHELL_SELECTOR = ".app-shell";

const INTENT_ICONS: Record<DialogIntent, string> = {
  info: "Info",
  success: "CheckCircle",
  warning: "Warning",
  destructive: "WarningOctagon",
};

const INTENT_COLORS: Record<DialogIntent, string> = {
  info: "var(--uds-system-action-primary)",
  success: "var(--uds-system-constructive-primary)",
  warning: "var(--uds-system-warning-primary)",
  destructive: "var(--uds-system-destructive-primary)",
};

/**
 * Dialog component — Purpose-built confirmation / alert overlay
 *
 * A focused, intent-driven dialog for confirmations, warnings, alerts,
 * and simple prompts. Smaller and more opinionated than Modal.
 *
 * @param {boolean}        open              Whether the dialog is visible
 * @param {function}       onClose           Called when the user dismisses the dialog
 * @param {string}         intent            "info" | "success" | "warning" | "destructive"
 * @param {string}         icon              Override the default intent icon (Phosphor icon name)
 * @param {string}         title             Dialog heading
 * @param {string}         description       Supporting text below the title
 * @param {string}         confirmLabel      Primary action button label (default "Confirm")
 * @param {string}         cancelLabel       Secondary action button label (default "Cancel")
 * @param {function}       onConfirm         Called when the primary action is clicked
 * @param {function}       onCancel          Called when the secondary action is clicked (defaults to onClose)
 * @param {boolean}        showCancel        Whether to show the cancel button (default true)
 * @param {boolean}        loading           Show loading state on the confirm button
 * @param {boolean}        closeOnBackdrop   Close when clicking the overlay (default true)
 * @param {boolean}        closeOnEscape     Close on Escape key (default true)
 * @param {HTMLElement}    container         Portal target (default document.body)
 * @param {string}         className         Additional CSS classes
 * @param {React.ReactNode} children         Optional custom body content below description
 * @param {object}         props             Additional props spread onto the dialog element
 */
export default function Dialog({
  open = false,
  onClose,
  intent = "info",
  icon,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  showCancel = true,
  loading = false,
  closeOnBackdrop = true,
  closeOnEscape = true,
  container,
  className = "",
  children,
  ...props
}: DialogProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      previousActiveElement.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        dialogRef.current?.focus();
      });
      return () => {
        document.body.style.overflow = "";
        previousActiveElement.current?.focus?.();
      };
    }
  }, [open]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Escape" && closeOnEscape && onClose) {
        e.stopPropagation();
        onClose();
      }
    },
    [closeOnEscape, onClose],
  );

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget && closeOnBackdrop && onClose) {
        onClose();
      }
    },
    [closeOnBackdrop, onClose],
  );

  const handleCancel = useCallback(() => {
    if (onCancel) {
      onCancel();
    } else if (onClose) {
      onClose();
    }
  }, [onCancel, onClose]);

  if (!open) return null;

  const resolvePortalTarget = (): HTMLElement => {
    if (container instanceof HTMLElement) {
      return container;
    }

    const activeElement = document.activeElement;
    if (activeElement instanceof Element) {
      const nearestShell = activeElement.closest(APP_SHELL_SELECTOR);
      if (nearestShell instanceof HTMLElement) {
        return nearestShell;
      }
    }

    const shellRoot = document.querySelector(APP_SHELL_SELECTOR);
    if (shellRoot instanceof HTMLElement) {
      return shellRoot;
    }

    return document.body;
  };

  const resolvedIcon = icon || INTENT_ICONS[intent];
  const iconColor = INTENT_COLORS[intent];

  const dialogClasses = [
    BASE_CLASS,
    `${BASE_CLASS}--${intent}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const confirmAppearance = intent === "destructive" ? "destructive" : "primary";

  const dialog = (
    <div
      className={`${BASE_CLASS}__overlay`}
      onClick={handleBackdropClick}
      aria-hidden="true"
    >
      <div
        ref={dialogRef}
        className={dialogClasses}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby={title ? `${BASE_CLASS}-title` : undefined}
        aria-describedby={description ? `${BASE_CLASS}-desc` : undefined}
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <div className={`${BASE_CLASS}__icon`} style={{ color: iconColor }}>
          <Icon name={resolvedIcon} size={32} appearance="duotone" />
        </div>

        <div className={`${BASE_CLASS}__content`}>
          {title && (
            <h2 id={`${BASE_CLASS}-title`} className={`${BASE_CLASS}__title`}>
              {title}
            </h2>
          )}
          {description && (
            <p id={`${BASE_CLASS}-desc`} className={`${BASE_CLASS}__description`}>
              {description}
            </p>
          )}
          {children && <div className={`${BASE_CLASS}__body`}>{children}</div>}
        </div>

        <div className={`${BASE_CLASS}__actions`}>
          {showCancel && (
            <Button
              label={cancelLabel}
              appearance="outline"
              onClick={handleCancel}
              size="default"
            />
          )}
          {onConfirm && (
            <Button
              label={confirmLabel}
              appearance={confirmAppearance}
              onClick={onConfirm}
              loading={loading}
              size="default"
            />
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(dialog, resolvePortalTarget());
}
