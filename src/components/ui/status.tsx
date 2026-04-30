import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const statusVariants = cva(
  "inline-flex items-center gap-2 rounded-[4px] border px-2 py-1 text-uds-14 font-uds-medium leading-uds-14 [font-family:var(--font-inter)]",
  {
    variants: {
      variant: {
        neutral:
          "border-[var(--uds-border-primary)] bg-[var(--uds-surface-secondary)] text-[var(--uds-text-primary)]",
        success:
          "border-[var(--uds-color-accent-green-300)] bg-[var(--uds-color-accent-green-100)] text-[var(--uds-color-accent-green-700)]",
        warning:
          "border-[var(--uds-color-accent-amber-300)] bg-[var(--uds-color-accent-amber-100)] text-[var(--uds-color-accent-amber-1000)]",
        error:
          "border-[var(--uds-color-accent-red-300)] bg-[var(--uds-color-accent-red-100)] text-[var(--uds-color-accent-red-700)]",
        info: "border-[var(--uds-color-accent-blue-300)] bg-[var(--uds-color-accent-blue-100)] text-[var(--uds-color-accent-blue-700)]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

function Status({
  className,
  variant,
  dot = true,
  children,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof statusVariants> & {
    dot?: boolean
  }) {
  return (
    <span
      data-slot="status"
      data-variant={variant}
      className={cn(statusVariants({ variant }), className)}
      {...props}
    >
      {dot ? <span className="size-2 rounded-full bg-current opacity-80" aria-hidden /> : null}
      {children}
    </span>
  )
}

export { Status, statusVariants }
