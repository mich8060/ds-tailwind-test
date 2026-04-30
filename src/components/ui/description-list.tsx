import * as React from "react"

import { cn } from "@/lib/utils"

function DescriptionList({ className, ...props }: React.ComponentProps<"dl">) {
  return (
    <dl
      data-slot="description-list"
      className={cn("grid grid-cols-1 gap-3 sm:grid-cols-[180px_1fr]", className)}
      {...props}
    />
  )
}

function DescriptionTerm({ className, ...props }: React.ComponentProps<"dt">) {
  return (
    <dt
      data-slot="description-term"
      className={cn("font-sans text-uds-14 font-uds-medium leading-uds-14 text-[var(--uds-text-secondary)]", className)}
      {...props}
    />
  )
}

function DescriptionDetail({ className, ...props }: React.ComponentProps<"dd">) {
  return (
    <dd
      data-slot="description-detail"
      className={cn("font-sans text-uds-16 font-uds-regular leading-uds-16 text-[var(--uds-text-primary)] sm:col-start-2", className)}
      {...props}
    />
  )
}

function DescriptionRow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="description-row"
      className={cn("contents", className)}
      {...props}
    />
  )
}

export { DescriptionList, DescriptionRow, DescriptionTerm, DescriptionDetail }
