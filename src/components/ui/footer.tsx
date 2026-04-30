import * as React from "react"

import { cn } from "@/lib/utils"

export type FooterLink = {
  label: string
  href: string
}

export type FooterProps = React.ComponentProps<"footer"> & {
  /** Copyright text displayed on the left. */
  copyright?: string
  /** Navigation links displayed on the right. */
  links?: FooterLink[]
}

function Footer({
  className,
  children,
  copyright = `\u00A9 ${new Date().getFullYear()} CHG Management, Inc. All rights reserved.`,
  links,
  ...props
}: FooterProps) {
  return (
    <footer
      data-slot="uds-footer"
      className={cn(
        "flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[var(--uds-border-primary)] bg-[var(--uds-surface-primary)] px-4 py-2 text-xs text-[var(--uds-text-tertiary)]",
        className,
      )}
      {...props}
    >
      {children ?? (
        <>
          <span>{copyright}</span>
          {links != null && links.length > 0 && (
            <nav aria-label="Footer links" className="flex flex-wrap items-center gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-[var(--uds-text-primary)] hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </>
      )}
    </footer>
  )
}

export { Footer }
