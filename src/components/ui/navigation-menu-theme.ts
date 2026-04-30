import { cva } from "class-variance-authority"

export const navigationMenuRootClass =
  "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center"

export const navigationMenuListClass =
  "group flex flex-1 list-none items-center justify-center gap-0"

export const navigationMenuItemClass = "relative"

export const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
)

/** Base motion shell; padding/typography match SelectContent via popover/viewport classes. */
export const navigationMenuContentClass =
  "top-0 left-0 w-full px-0 py-1 ease-[cubic-bezier(0.22,1,0.36,1)] data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto"

/** Popover layout: surface matches SelectContent (radius-8, shadow-md, UDS 14 body, ring). */
export const navigationMenuPopoverContentClass =
  "group-data-[layout=popover]/navigation-menu:z-50 group-data-[layout=popover]/navigation-menu:top-full group-data-[layout=popover]/navigation-menu:mt-1.5 group-data-[layout=popover]/navigation-menu:min-w-36 group-data-[layout=popover]/navigation-menu:overflow-x-hidden group-data-[layout=popover]/navigation-menu:overflow-y-auto group-data-[layout=popover]/navigation-menu:rounded-[length:var(--uds-radius-8)] group-data-[layout=popover]/navigation-menu:bg-popover group-data-[layout=popover]/navigation-menu:px-0 group-data-[layout=popover]/navigation-menu:py-1 group-data-[layout=popover]/navigation-menu:text-uds-14 group-data-[layout=popover]/navigation-menu:font-uds-regular group-data-[layout=popover]/navigation-menu:leading-uds-14 group-data-[layout=popover]/navigation-menu:[font-family:var(--font-inter)] group-data-[layout=popover]/navigation-menu:[color:var(--popover-foreground)] group-data-[layout=popover]/navigation-menu:shadow-md group-data-[layout=popover]/navigation-menu:ring-1 group-data-[layout=popover]/navigation-menu:ring-foreground/10 group-data-[layout=popover]/navigation-menu:duration-100 group-data-[layout=popover]/navigation-menu:data-open:animate-in group-data-[layout=popover]/navigation-menu:data-open:fade-in-0 group-data-[layout=popover]/navigation-menu:data-open:zoom-in-95 group-data-[layout=popover]/navigation-menu:data-closed:animate-out group-data-[layout=popover]/navigation-menu:data-closed:fade-out-0 group-data-[layout=popover]/navigation-menu:data-closed:zoom-out-95"

export const navigationMenuViewportWrapperClass =
  "absolute top-full left-0 isolate z-50 flex justify-center"

/** Viewport layout: same surface tokens as SelectContent. */
export const navigationMenuViewportClass =
  "origin-top-center relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-[length:var(--uds-radius-8)] bg-popover px-0 py-1 text-uds-14 font-uds-regular leading-uds-14 [font-family:var(--font-inter)] [color:var(--popover-foreground)] shadow-md ring-1 ring-foreground/10 duration-100 md:w-(--radix-navigation-menu-viewport-width) data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"

/** Row treatment aligned with SelectItem (quaternary highlight, blue active/checked). */
export const navigationMenuLinkClass =
  "flex w-full cursor-pointer items-center gap-1.5 rounded-none px-3 py-1.5 text-uds-14 font-uds-regular leading-uds-14 outline-hidden transition-none [font-family:var(--font-inter)] hover:bg-[var(--uds-system-action-quaternary)] hover:text-[var(--uds-text-primary)] focus:bg-[var(--uds-system-action-quaternary)] focus:text-[var(--uds-text-primary)] focus-visible:ring-0 focus-visible:outline-none data-active:bg-[var(--uds-color-accent-blue-700)] data-active:text-[var(--uds-text-inverse)] data-active:hover:bg-[var(--uds-color-accent-blue-700)] data-active:hover:text-[var(--uds-text-inverse)] [&_svg:not([class*='size-'])]:size-4 data-active:[&_svg]:text-[var(--uds-text-inverse)]"

export const navigationMenuIndicatorClass =
  "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in"
