import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "group/alert relative grid w-full gap-x-0 gap-y-0 rounded-[8px] border px-4 py-4 text-left text-base shadow-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-[length:var(--uds-spacing-10)] has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 has-[>[data-slot=medallion]]:grid-cols-[auto_1fr] has-[>[data-slot=medallion]]:gap-x-3 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4 *:[data-slot=medallion]:row-span-2 *:[data-slot=medallion]:self-start has-[>[data-slot=alert-content]]:*:[svg]:row-span-1 has-[>[data-slot=alert-content]]:*:[svg]:translate-y-0 has-[>[data-slot=alert-content]]:*:[data-slot=medallion]:row-span-1",
  {
    variants: {
      variant: {
        default:
          "bg-card text-card-foreground [&_[data-slot=alert-title]_a:hover]:text-foreground [&_[data-slot=alert-description]_a:hover]:text-foreground",
        destructive:
          "bg-card text-destructive [&_[data-slot=alert-title]]:text-destructive [&_[data-slot=alert-description]]:text-destructive [&_a]:text-destructive [&_a:hover]:text-destructive/90 *:[svg]:text-current",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-content"
      className={cn("flex min-w-0 flex-col gap-0", className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "font-heading font-medium group-has-[>svg]/alert:col-start-2 group-has-[>[data-slot=medallion]]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-base text-balance text-muted-foreground md:text-pretty group-has-[>svg]/alert:col-start-2 group-has-[>[data-slot=medallion]]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4",
        className
      )}
      {...props}
    />
  )
}

function AlertAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-action"
      className={cn("absolute top-4 right-5", className)}
      {...props}
    />
  )
}

export { Alert, AlertContent, AlertTitle, AlertDescription, AlertAction }
