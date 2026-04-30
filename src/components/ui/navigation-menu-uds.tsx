import * as React from "react"

import {
  NavigationMenu as NavigationMenuBase,
  NavigationMenuContent as NavigationMenuContentBase,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  navigationMenuPopoverContentClass,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu-theme"
import { cn } from "@/lib/utils"

type NavigationMenuLayout = "viewport" | "popover"

function NavigationMenu({
  className,
  children,
  layout,
  viewport,
  ...props
}: React.ComponentProps<typeof NavigationMenuBase> & {
  layout?: NavigationMenuLayout
  viewport?: boolean
}) {
  const resolvedLayout =
    layout ?? (viewport === false ? "popover" : "viewport")

  return (
    <NavigationMenuBase
      data-layout={resolvedLayout}
      className={cn(className)}
      {...props}
    >
      {children}
      {resolvedLayout === "viewport" ? <NavigationMenuViewport /> : null}
    </NavigationMenuBase>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuContentBase>) {
  return (
    <NavigationMenuContentBase
      className={cn(navigationMenuPopoverContentClass, className)}
      {...props}
    />
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
