/**
 * UDS-styled alert dialog. Prefer these exports for product UI; keep `./alert-dialog`
 * close to shadcn defaults so registry upgrades are easier to merge.
 */
import * as React from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Medallion, type MedallionColor, type MedallionProps } from "@/components/ui/medallion"
import { cn } from "@/lib/utils"

type AlertDialogMediaProps = React.ComponentProps<"div"> & {
  color?: MedallionColor
  icon?: React.ReactNode
  shape?: MedallionProps["shape"]
}

function UdsAlertDialogMedia({
  className,
  children,
  color,
  icon,
  shape = "rounded",
  ...props
}: AlertDialogMediaProps) {
  if (color && icon) {
    return (
      <Medallion
        data-slot="alert-dialog-media"
        size="xl"
        color={color}
        icon={icon}
        shape={shape}
        className={cn(
          "mb-2 sm:group-data-[size=default]/alert-dialog-content:row-span-2",
          className,
        )}
      />
    )
  }

  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-2 sm:group-data-[size=default]/alert-dialog-content:row-span-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function UdsAlertDialogContent({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof AlertDialogContent> & {
  size?: "default" | "sm"
}) {
  return (
    <AlertDialogContent
      data-size={size}
      className={cn(
        "group/alert-dialog-content rounded-[length:var(--uds-radius-8)] bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm",
        className
      )}
      {...props}
    />
  )
}

function UdsAlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogHeader>) {
  return (
    <AlertDialogHeader
      className={cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className,
      )}
      {...props}
    />
  )
}

function UdsAlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogFooter>) {
  return (
    <AlertDialogFooter
      className={cn(
        "-mx-4 -mb-4 rounded-b-[length:var(--uds-radius-8)] border-t bg-muted/50 p-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2",
        className,
      )}
      {...props}
    />
  )
}

function UdsAlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogTitle>) {
  return (
    <AlertDialogTitle
      className={cn(
        "font-sans text-uds-16 font-uds-semibold leading-uds-16 [font-family:var(--font-inter)]",
        className
      )}
      {...props}
    />
  )
}

function UdsAlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogDescription>) {
  return (
    <AlertDialogDescription
      className={cn(
        "font-sans text-uds-14 font-uds-regular leading-uds-14 text-uds-text-secondary [font-family:var(--font-inter)]",
        className
      )}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTrigger,
  UdsAlertDialogMedia as AlertDialogMedia,
  UdsAlertDialogContent as AlertDialogContent,
  UdsAlertDialogDescription as AlertDialogDescription,
  UdsAlertDialogFooter as AlertDialogFooter,
  UdsAlertDialogHeader as AlertDialogHeader,
  UdsAlertDialogTitle as AlertDialogTitle,
}
