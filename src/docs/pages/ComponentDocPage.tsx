import { Link, useParams } from 'react-router-dom'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@chg-ds/unified-design-system'
import { CodePanel } from '../components/CodePanel'
import { PropsTable } from '../components/PropsTable'
import { getCatalogEntry, resolveSections } from '../registry'

export function ComponentDocPage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? getCatalogEntry(slug) : undefined

  if (!entry) {
    return (
      <div className="p-10">
        <p className="text-neutral-600">Foundations page not found.</p>
        <Link to="/" className="docs-link mt-2 inline-block text-sm font-medium">
          Home
        </Link>
      </div>
    )
  }

  const sections = resolveSections(entry)

  return (
    <article className="mx-auto min-w-0 max-w-4xl lg:max-w-5xl">
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border-b border-neutral-200 bg-neutral-50/80 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-4xl px-8 py-10 lg:max-w-5xl">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Tailwind CSS</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/docs/foundations/display">Foundations</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{entry.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mt-8">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              {entry.name}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {entry.description}
            </p>
          </header>
        </div>
      </section>

      <div className="space-y-16 px-8 py-12">
        {sections.map((section, index) => (
          <section key={section.id} className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
                Example {index + 1}
              </p>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{section.title}</h2>
              <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                {section.description ??
                  `This reference example shows how the ${entry.name.toLowerCase()} utilities compose in a realistic layout block.`}
              </p>
            </div>
            <div className="relative z-10 rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 dark:border-neutral-800 dark:bg-neutral-900/30">
              {section.preview}
            </div>
            <CodePanel code={section.code} label="Example (JSX + Tailwind utilities)" />
          </section>
        ))}
      </div>

      <section className="border-t border-neutral-200 px-8 pt-12 dark:border-neutral-800">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Props</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Tailwind class tokens for this topic (class families, effects, and theme defaults). See the{' '}
          <a
            href="https://tailwindcss.com/docs"
            className="docs-link font-medium underline-offset-2"
            target="_blank"
            rel="noreferrer"
          >
            Tailwind CSS docs
          </a>{' '}
          for the full matrix.
        </p>
        <div className="mt-6">
          <PropsTable props={entry.props} variant="foundations" />
        </div>
      </section>
    </article>
  )
}
