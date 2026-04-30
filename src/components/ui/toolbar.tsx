import * as React from "react"

import { cn } from "@/lib/utils"

function Toolbar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="toolbar"
      data-slot="toolbar"
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-[8px] border border-[var(--uds-border-primary)] bg-[var(--uds-surface-primary)] p-2",
        className
      )}
      {...props}
    />
  )
}

function ToolbarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toolbar-group"
      className={cn("flex items-center gap-2", className)}
      {...props}
    />
  )
}

function ToolbarDivider({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toolbar-divider"
      className={cn("mx-1 h-6 w-px bg-[var(--uds-border-primary)]", className)}
      {...props}
    />
  )
}

export { Toolbar, ToolbarDivider, ToolbarGroup }
