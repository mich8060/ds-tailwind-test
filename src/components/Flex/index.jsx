import React from "react";
import "./styles.scss";

/**
 * Flex layout primitive
 * Props:
 *  - as: element/component to render (default "div")
 *  - direction: "row" | "column" (default "row")
 *  - justify: "start" | "center" | "end" | "between" | "around" | "evenly"
 *  - align: "start" | "center" | "end" | "stretch" | "baseline"
 *  - wrap: "nowrap" | "wrap" | "wrap-reverse" | boolean
 *  - gap: token number (e.g., 4, 8, 16) or any CSS value string (e.g., "12px", "1rem")
 *  - gapX: token number or CSS value for column-gap
 *  - gapY: token number or CSS value for row-gap
 *  - inline: boolean → display: inline-flex
 *  - fullWidth: boolean → width: 100%
 *  - className, style, children, ...rest
 */

function Flex({
    as: Tag = "div",
    direction = "row",
    justify,
    align,
    wrap = "nowrap",
    gap,
    gapX,
    gapY,
    inline = false,
    fullWidth = false,
    className = "",
    style,
    children,
    ...rest
}) {
    const isToken = (val) => typeof val === "number" || (/^\d+$/.test(String(val)));

    const attrs = {
        "data-dir": direction === "column" ? "column" : "row",
        "data-inline": inline ? "true" : undefined,
        "data-justify": justify || undefined,
        "data-align": align || undefined,
        "data-wrap": typeof wrap === "boolean" ? (wrap ? "wrap" : "nowrap") : wrap,
        "data-gap": isToken(gap) ? String(gap) : undefined,
        "data-gap-x": isToken(gapX) ? String(gapX) : undefined,
        "data-gap-y": isToken(gapY) ? String(gapY) : undefined
    };

    const styleFix = {
        ...(fullWidth ? { width: "100%" } : {}),
        ...(style || {}),
        ...(gap && !isToken(gap) ? { gap } : {}),
        ...(gapX && !isToken(gapX) ? { columnGap: gapX } : {}),
        ...(gapY && !isToken(gapY) ? { rowGap: gapY } : {})
    };

    const classes = ["uds-flex", className].filter(Boolean).join(" ");

    return (
        <Tag className={classes} style={styleFix} {...attrs} {...rest}>
            {children}
        </Tag>
    );
}

export default Flex;
