import type { ReactNode } from 'react'

export type ShadcnExampleSection = {
  id: string
  title: string
  description?: string
  /** Doc page preview (includes ExampleCanvas). */
  preview: ReactNode
  /** Raw first-frame demo node (no ExampleCanvas); used by welcome cards. */
  previewInner: ReactNode
  /** When set, welcome page card preview uses this instead of `previewInner` (e.g. inline shell vs. portal dialog). */
  welcomePreviewInner?: ReactNode
  code: string
}
