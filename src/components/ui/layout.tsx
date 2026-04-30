"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/** Shorthand flex directions; `col` maps to CSS `column`. */
export type LayoutDirection =
  | "row"
  | "col"
  | "row-reverse"
  | "col-reverse"
  | React.CSSProperties["flexDirection"]

export type LayoutGap = number | string

/** `true` → `wrap`, `false` → `nowrap`; otherwise a CSS `flex-wrap` value. */
export type LayoutWrap = boolean | NonNullable<React.CSSProperties["flexWrap"]>

/** Any intrinsic HTML element name for the flex root (e.g. `div`, `ul`, `section`). */
export type LayoutAs = Extract<keyof React.JSX.IntrinsicElements, string>

export type LayoutProps = Omit<React.HTMLAttributes<HTMLElement>, "as"> & {
  /** Flex axis; defaults to `row`. Use `col` for `column`. */
  direction?: LayoutDirection
  /** Maps to CSS `align-items`. */
  alignItems?: React.CSSProperties["alignItems"]
  /** Maps to CSS `justify-content`. */
  justifyContent?: React.CSSProperties["justifyContent"]
  /**
   * Gap between flex items. Numbers use the theme spacing scale (`n × 0.25rem`, same as Tailwind `gap-*`).
   * Strings are passed through as CSS `gap` (e.g. `"12px"`, `"1rem"`, `"clamp(8px, 2vw, 16px)"`).
   */
  gap?: LayoutGap
  /**
   * Flex line wrapping. Boolean shorthand: `true` → `wrap`, `false` → `nowrap`.
   * You can also pass `"wrap"`, `"nowrap"`, or `"wrap-reverse"`.
   */
  wrap?: LayoutWrap
  /** Root element tag; defaults to `div`. */
  as?: LayoutAs
}

function resolveFlexDirection(direction: LayoutDirection | undefined): React.CSSProperties["flexDirection"] {
  if (direction === undefined) return "row"
  if (direction === "col") return "column"
  if (direction === "col-reverse") return "column-reverse"
  return direction as React.CSSProperties["flexDirection"]
}

function resolveGap(gap: LayoutGap | undefined): React.CSSProperties["gap"] | undefined {
  if (gap === undefined) return undefined
  if (typeof gap === "string") return gap
  if (typeof gap === "number" && Number.isFinite(gap)) {
    return `${gap * 0.25}rem`
  }
  return undefined
}

function resolveWrap(wrap: LayoutWrap | undefined): React.CSSProperties["flexWrap"] | undefined {
  if (wrap === undefined) return undefined
  if (wrap === true) return "wrap"
  if (wrap === false) return "nowrap"
  return wrap
}

/**
 * Flex layout primitive: `display: flex` with optional axis, alignment, justification, gap, and wrap.
 * Prefer theme spacing integers for `gap` so layouts stay on the 4px-aligned scale.
 */
function Layout({
  className,
  direction = "row",
  alignItems,
  justifyContent,
  gap,
  wrap,
  as: Comp = "div",
  style,
  ...rest
}: LayoutProps) {
  const flexStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: resolveFlexDirection(direction),
    flexWrap: resolveWrap(wrap),
    alignItems,
    justifyContent,
    gap: resolveGap(gap),
    ...style,
  }

  return React.createElement(Comp as React.ElementType, {
    ...rest,
    "data-slot": "layout",
    className: cn("min-w-0", className),
    style: flexStyle,
  } as never)
}

export { Layout }
