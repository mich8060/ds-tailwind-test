import * as React from "react"
import { CheckIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"

export type StepState = "upcoming" | "current" | "complete"

function Steps({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="steps"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
}

function Step({
  className,
  state = "upcoming",
  ...props
}: React.ComponentProps<"li"> & {
  state?: StepState
}) {
  return (
    <li
      data-slot="step"
      data-state={state}
      className={cn("flex items-start gap-3", className)}
      {...props}
    />
  )
}

function StepMarker({
  className,
  state = "upcoming",
  index,
  ...props
}: React.ComponentProps<"div"> & {
  state?: StepState
  index?: number
}) {
  return (
    <div
      data-slot="step-marker"
      data-state={state}
      className={cn(
        "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border text-xs font-uds-medium",
        state === "complete" &&
          "border-[var(--uds-color-accent-green-600)] bg-[var(--uds-color-accent-green-600)] text-white",
        state === "current" &&
          "border-[var(--uds-color-accent-blue-500)] bg-[var(--uds-color-accent-blue-100)] text-[var(--uds-color-accent-blue-700)]",
        state === "upcoming" &&
          "border-[var(--uds-border-primary)] bg-[var(--uds-surface-secondary)] text-[var(--uds-text-secondary)]",
        className
      )}
      {...props}
    >
      {state === "complete" ? <CheckIcon aria-hidden className="size-3.5" /> : index}
    </div>
  )
}

function StepContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="step-content"
      className={cn("min-w-0 flex-1", className)}
      {...props}
    />
  )
}

function StepTitle({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="step-title"
      className={cn("font-sans text-uds-16 font-uds-medium leading-uds-16 text-[var(--uds-text-primary)]", className)}
      {...props}
    />
  )
}

function StepDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="step-description"
      className={cn("mt-1 font-sans text-uds-14 font-uds-regular leading-uds-14 text-[var(--uds-text-secondary)]", className)}
      {...props}
    />
  )
}

export {
  Steps,
  Step,
  StepContent,
  StepDescription,
  StepMarker,
  StepTitle,
}
