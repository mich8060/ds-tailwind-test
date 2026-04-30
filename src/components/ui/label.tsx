import * as React from "react"
import { Label as LabelPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 font-sans text-uds-14 font-uds-medium leading-uds-14 select-none [font-family:var(--font-inter)] group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function CheckboxLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <Label
      data-slot="checkbox-label"
      className={cn("text-uds-16 font-uds-regular leading-uds-16", className)}
      {...props}
    />
  )
}

function RadioGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <Label
      data-slot="radio-group-label"
      className={cn("text-uds-16 font-uds-regular leading-uds-16", className)}
      {...props}
    />
  )
}

export { CheckboxLabel, Label, RadioGroupLabel }
