import * as React from "react"

import { cn } from "@/lib/utils"

function Statistics({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="statistics"
      className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4", className)}
      {...props}
    />
  )
}

function StatisticCard({ className, ...props }: React.ComponentProps<"article">) {
  return (
    <article
      data-slot="statistic-card"
      className={cn("rounded-[8px] border border-[var(--uds-border-primary)] bg-[var(--uds-surface-primary)] p-4", className)}
      {...props}
    />
  )
}

function StatisticLabel({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="statistic-label"
      className={cn("font-sans text-uds-14 font-uds-regular leading-uds-14 text-[var(--uds-text-secondary)]", className)}
      {...props}
    />
  )
}

function StatisticValue({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="statistic-value"
      className={cn("mt-2 font-sans text-uds-32 font-uds-semibold leading-uds-32 text-[var(--uds-text-primary)]", className)}
      {...props}
    />
  )
}

function StatisticHint({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="statistic-hint"
      className={cn("mt-2 font-sans text-uds-12 font-uds-regular leading-uds-12 text-[var(--uds-text-secondary)]", className)}
      {...props}
    />
  )
}

export {
  Statistics,
  StatisticCard,
  StatisticHint,
  StatisticLabel,
  StatisticValue,
}
