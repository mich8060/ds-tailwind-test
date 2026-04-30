import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@chg-ds/unified-design-system'

type Props = {
  title: string
  kicker?: string
  children: ReactNode
  /** Merged onto the article; use to widen the content column (e.g. large iframe previews). */
  className?: string
  /**
   * Footer link under the article. Default: foundations index. Pass `null` to omit, or `{ to, label }` for a custom link.
   */
  footerLink?: { to: string; label: string } | null
}

export function MarkdownishPage({ title, kicker, children, className, footerLink }: Props) {
  const link =
    footerLink === null
      ? null
      : footerLink ?? { to: '/docs/foundations/display', label: 'Browse foundations →' }

  return (
    <article
      className={cn('mx-auto min-w-0 max-w-4xl px-8 py-10 lg:max-w-5xl', className)}
    >
      {kicker ? <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{kicker}</p> : null}
      <h1 className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">{title}</h1>
      <div className="mt-8 space-y-4 text-neutral-600 dark:text-neutral-300">{children}</div>
      {link ? (
        <p className="mt-10 text-sm">
          <Link to={link.to} className="docs-link font-medium">
            {link.label}
          </Link>
        </p>
      ) : null}
    </article>
  )
}
