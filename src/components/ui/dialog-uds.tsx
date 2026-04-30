/**
 * UDS dialog shell (dark scrim, 8px corners on the panel). Use `./dialog` for stock shadcn + easier merges.
 */
import * as React from "react"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { XIcon } from "@phosphor-icons/react"

function DialogCloseButton({
  className,
  ...props
}: React.ComponentProps<typeof DialogClose>) {
  return (
    <DialogClose asChild {...props}>
      <Button
        variant="ghost"
        className={cn("absolute top-2 right-2", className)}
        size="icon-sm"
      >
        <XIcon />
        <span className="sr-only">Close</span>
      </Button>
    </DialogClose>
  )
}

function UdsDialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogContent> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogContent
      className={cn(
        "rounded-[length:var(--uds-radius-8)] bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 sm:max-w-sm",
        className
      )}
      {...props}
    >
      {children}
      {showCloseButton ? <DialogCloseButton /> : null}
    </DialogContent>
  )
}

function UdsDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogTitle>) {
  return (
    <DialogTitle
      className={cn(
        "font-sans text-uds-16 font-uds-semibold leading-uds-16 [font-family:var(--font-inter)]",
        className
      )}
      {...props}
    />
  )
}

function UdsDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogDescription>) {
  return (
    <DialogDescription
      className={cn(
        "font-sans text-uds-14 font-uds-regular leading-uds-14 text-uds-text-secondary [font-family:var(--font-inter)]",
        className
      )}
      {...props}
    />
  )
}

function UdsDialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<typeof DialogFooter> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogFooter
      className={cn(
        "-mx-4 -mb-4 rounded-b-[length:var(--uds-radius-8)] border-t bg-muted/50 p-4",
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton ? (
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      ) : null}
    </DialogFooter>
  )
}

export {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogPortal,
  DialogHeader,
  DialogTrigger,
  DialogCloseButton,
  UdsDialogContent as DialogContent,
  UdsDialogDescription as DialogDescription,
  UdsDialogFooter as DialogFooter,
  UdsDialogTitle as DialogTitle,
}
