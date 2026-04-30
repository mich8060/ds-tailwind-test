import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { CheckIcon } from "@phosphor-icons/react"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer group/checkbox relative flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-input bg-background transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-[var(--uds-color-primary-700)] dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-[state=checked]:border-[var(--uds-color-primary-700)] data-[state=checked]:bg-[var(--uds-color-primary-700)] data-[state=checked]:text-white dark:data-[state=checked]:border-[var(--uds-color-primary-700)] dark:data-[state=checked]:bg-[var(--uds-color-primary-700)] data-[state=indeterminate]:border-[var(--uds-color-primary-700)] data-[state=indeterminate]:bg-[var(--uds-color-primary-700)] data-[state=indeterminate]:text-white dark:data-[state=indeterminate]:border-[var(--uds-color-primary-700)] dark:data-[state=indeterminate]:bg-[var(--uds-color-primary-700)]",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none [&>svg]:size-3 [&>svg]:shrink-0"
      >
        <CheckIcon className="hidden group-data-[state=checked]/checkbox:block group-data-[state=indeterminate]/checkbox:hidden" />
        <svg
          aria-hidden
          className="hidden group-data-[state=indeterminate]/checkbox:block group-data-[state=checked]/checkbox:hidden"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <rect height="2" shapeRendering="crispEdges" width="10" x="1" y="5" />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { CheckboxLabel } from "@/components/ui/label"
export { Checkbox }
