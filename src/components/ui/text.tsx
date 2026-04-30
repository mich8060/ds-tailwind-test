"use client"

import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

/** Semantic text colors from `--uds-text-*` / `text-uds-text-*` theme tokens. */
export const TEXT_APPEARANCES = [
  "primary",
  "secondary",
  "tertiary",
  "quaternary",
  "disabled",
  "placeholder",
  "inverse",
  "brand-primary",
  "brand-secondary",
  "brand-tertiary",
  "brand-quaternary",
  "link-primary-default",
  "link-primary-hover",
  "link-primary-active",
  "link-primary-visited",
  "link-secondary-default",
  "link-secondary-hover",
  "link-secondary-active",
  "link-secondary-visited",
] as const

export type TextAppearance = (typeof TEXT_APPEARANCES)[number]

const textVariants = cva("min-w-0 font-sans text-foreground [font-family:var(--font-inter)]", {
  variants: {
    variant: {
      "body-10": "text-uds-10 leading-uds-10",
      "body-12": "text-uds-12 leading-uds-12",
      "body-14": "text-uds-14 leading-uds-14",
      "body-15": "text-uds-15 leading-uds-15",
      "body-16": "text-uds-16 leading-uds-16",
      "body-20": "text-uds-20 leading-uds-20",
      "title-24": "text-uds-24 leading-uds-24",
      "title-28": "text-uds-28 leading-uds-28",
      "title-32": "text-uds-32 leading-uds-32",
      "display-36": "text-uds-36 leading-uds-36",
      "display-48": "text-uds-48 leading-uds-48",
    },
    weight: {
      regular: "font-uds-regular",
      medium: "font-uds-medium",
      semibold: "font-uds-semibold",
      bold: "font-uds-bold",
    },
    appearance: {
      primary: "text-uds-text-primary",
      secondary: "text-uds-text-secondary",
      tertiary: "text-uds-text-tertiary",
      quaternary: "text-uds-text-quaternary",
      disabled: "text-uds-text-disabled",
      placeholder: "text-uds-text-placeholder",
      inverse: "text-uds-text-inverse",
      "brand-primary": "text-uds-text-brand-primary",
      "brand-secondary": "text-uds-text-brand-secondary",
      "brand-tertiary": "text-uds-text-brand-tertiary",
      "brand-quaternary": "text-uds-text-brand-quaternary",
      "link-primary-default": "text-uds-text-link-primary-default",
      "link-primary-hover": "text-uds-text-link-primary-hover",
      "link-primary-active": "text-uds-text-link-primary-active",
      "link-primary-visited": "text-uds-text-link-primary-visited",
      "link-secondary-default": "text-uds-text-link-secondary-default",
      "link-secondary-hover": "text-uds-text-link-secondary-hover",
      "link-secondary-active": "text-uds-text-link-secondary-active",
      "link-secondary-visited": "text-uds-text-link-secondary-visited",
    },
  },
  defaultVariants: {
    variant: "body-14",
    weight: "regular",
  },
})

type TextAs = "p" | "span" | "div" | "strong" | "em" | "label"

export type TextProps = Omit<React.HTMLAttributes<HTMLElement>, "color"> &
  VariantProps<typeof textVariants> & {
    /** Root element; defaults to `p`. */
    as?: TextAs
  }

function Text({ className, variant, weight, appearance, as: Comp = "p", ...rest }: TextProps) {
  return React.createElement(Comp, {
    ...rest,
    className: cn(textVariants({ variant, weight, appearance }), className),
  } as never)
}

export { Text, textVariants }
