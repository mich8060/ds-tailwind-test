import * as React from "react"
import { ArrowUpRightIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"

function Link({
  className,
  external = false,
  showExternalIcon = true,
  children,
  ...props
}: React.ComponentProps<"a"> & {
  external?: boolean
  showExternalIcon?: boolean
}) {
  return (
    <a
      data-slot="link"
      className={cn(
        "inline-flex items-center gap-1 font-sans text-uds-16 font-uds-medium leading-uds-16 text-uds-text-link-primary-default underline-offset-4 hover:text-uds-text-link-primary-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        className
      )}
      target={external ? "_blank" : props.target}
      rel={external ? "noreferrer noopener" : props.rel}
      {...props}
    >
      {children}
      {external && showExternalIcon ? (
        <ArrowUpRightIcon aria-hidden className="size-4 shrink-0" />
      ) : null}
    </a>
  )
}

export { Link }
