import React from "react";
import "./styles.scss";

function Button({
    children,
    icon,
    iconPlacement = "leading",
    iconOnly = false,
    size,
    ariaLabel,
    className = "",
    ...rest
}) {
    const hasIcon = Boolean(icon);
    const placement = iconPlacement === "tailing" ? "trailing" : iconPlacement;
    const isIconOnly = iconOnly && hasIcon;
    const ariaLabelFromUser = rest["aria-label"];
    const titleFromUser = rest.title;

    if (isIconOnly && !rest["aria-label"] && !rest.title) {
        console.warn("Button (iconOnly) requires aria-label or title for accessibility.");
    }

    const ariaDisabled = rest["aria-disabled"] === true || rest["aria-disabled"] === "true";
    const onClick = ariaDisabled ? undefined : rest.onClick;
    const tabIndex = ariaDisabled ? -1 : rest.tabIndex;

    const validSizes = ["xs", "sm", "lg"];
    const sizeClass = size && validSizes.includes(size) ? `uds-btn-${size}` : null;
    if (size && !sizeClass) {
        console.warn(`Button: invalid size "${size}". Allowed: ${validSizes.join(", ")}`);
    }

    const { ["aria-label"]: _omitAriaLabel, ...restSansAriaLabel } = rest;

    // Only add aria-label when icon-only; otherwise omit it
    const a11yNameProps = isIconOnly
        ? { "aria-label": ariaLabelFromUser || titleFromUser }
        : {};

    const classes = ["uds-btn", sizeClass, className];
    if (isIconOnly) classes.push("uds-btn--icon-only");
    else if (hasIcon) classes.push(placement === "trailing" ? "uds-btn--icon-trailing" : "uds-btn--icon-leading");

    function handleKeyDown(e) {
        if (ariaDisabled && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        onKeyDown?.(e);
    }

    return (
        <button
            type={rest.type || "button"}
            disabled={rest.disabled}
            aria-disabled={ariaDisabled || undefined}
            onClick={onClick}
            tabIndex={tabIndex}
            className={classes.filter(Boolean).join(" ")}
            onKeyDown={handleKeyDown}
            {...restSansAriaLabel}
            {...a11yNameProps}
            {...rest}
        >
            {isIconOnly ? (
                <>
                    <span className="uds-btn__icon" aria-hidden="true">{icon}</span>
                    <span className="uds-btn__label">{children}</span>
                </>
            ) : hasIcon ? (
                placement === "trailing" ? (
                    <>
                        <span className="uds-btn__label">{children}</span>
                        <span className="uds-btn__icon" aria-hidden="true">{icon}</span>
                    </>
                ) : (
                    <>
                        <span className="uds-btn__icon" aria-hidden="true">{icon}</span>
                        <span className="uds-btn__label">{children}</span>
                    </>
                )
            ) : (
                <span className="uds-btn__label">{children}</span>
            )}
        </button>
    );
}

export default Button;
