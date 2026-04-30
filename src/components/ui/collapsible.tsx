"use client"

import * as React from "react"
import { Collapsible as CollapsiblePrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

export type CollapsibleVariant = "boxed" | "divided"

const CollapsibleVariantContext = React.createContext<CollapsibleVariant>("divided")

function Collapsible({
  className,
  variant = "divided",
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root> & {
  variant?: CollapsibleVariant
}) {
  return (
    <CollapsibleVariantContext.Provider value={variant}>
      <CollapsiblePrimitive.Root
        data-slot="collapsible"
        data-variant={variant}
        className={cn(
          "flex w-full max-w-full min-w-0 flex-col gap-0 self-stretch font-inter",
          variant === "boxed" &&
            "overflow-hidden rounded-[4px] border border-border bg-background",
          variant === "divided" && "border-b border-border last:border-b-0",
          className,
        )}
        {...props}
      />
    </CollapsibleVariantContext.Provider>
  )
}

function CollapsibleTrigger({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  const variant = React.useContext(CollapsibleVariantContext)
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      className={cn(
        "group/collapsible-trigger relative flex w-full min-w-0 flex-1 cursor-pointer items-center rounded-none px-4 py-3 text-left text-[16px] leading-normal font-medium transition-all outline-none focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        variant === "boxed"
          ? "border-0 bg-background hover:bg-muted/50 data-[state=open]:border-b data-[state=open]:border-border"
          : "border-0",
        className,
      )}
      {...props}
    />
  )
}

function CollapsibleContent({
  className,
  contentClassName,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent> & {
  /** Applied to the inner wrapper (horizontal padding matches trigger `px-4`; `pt-0` keeps the panel flush under the trigger). */
  contentClassName?: string
}) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      className={cn(
        "overflow-hidden text-[16px] leading-normal data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "min-h-0 px-4 pt-0 pb-3 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          contentClassName,
        )}
      >
        {children}
      </div>
    </CollapsiblePrimitive.CollapsibleContent>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
