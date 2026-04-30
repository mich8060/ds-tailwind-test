import * as React from "react"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

import { cn } from "@/lib/utils"
import "./app-shell.scss"

function AppShellFallback() {
  return (
    <div
      className="mx-auto max-w-4xl space-y-4 px-8 py-10 lg:max-w-5xl"
      aria-busy
      aria-label="Loading page"
    >
      <div className="h-8 w-48 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800" />
      <div className="h-4 max-w-xl animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="h-4 max-w-lg animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
    </div>
  )
}

export type AppShellProps = React.ComponentProps<"div"> & {
  /** Content rendered in the fixed sidebar slot (typically a configured `<Menu>`). */
  menu?: React.ReactNode
  /** Fixed top bar rendered above the listview and main content, beside the menu. */
  header?: React.ReactNode
  /** Optional secondary pane (e.g. record list, search results). Animates open/closed. */
  listview?: React.ReactNode
  /** Fixed bottom bar rendered below the content area. */
  footer?: React.ReactNode
}

function AppShell({ className, children, menu, header, listview, footer, ...props }: AppShellProps) {
  const showListview = listview != null

  return (
    <div
      data-slot="appshell"
      className={cn("appshell", className)}
      {...props}
    >
      {menu && <div className="appshell--menu">{menu}</div>}
      <div className="appshell--body">
        {header && <div className="appshell--header">{header}</div>}
        <div className="appshell--content">
          <div
            className={cn("appshell--listview", showListview && "appshell--listview-open")}
            aria-hidden={!showListview}
          >
            {listview}
          </div>
          <div className="appshell--main">
            <Suspense fallback={<AppShellFallback />}>
              <Outlet />
            </Suspense>
            {children}
          </div>
        </div>
        {footer && <div className="appshell--footer">{footer}</div>}
      </div>
    </div>
  )
}

export { AppShell }
