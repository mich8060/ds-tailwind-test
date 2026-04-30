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
import { getShadcnComponentMeta } from '../shadcn-component-meta'
import { getShadcnComponentProps } from '../shadcn-component-props'
import { getShadcnExamples } from '../shadcn-examples'
import {
  formatShadcnComponentName,
  getShadcnDocsUrl,
  isShadcnUiSlug,
} from '../shadcn-ui-registry'

export function ShadcnComponentDocPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !isShadcnUiSlug(slug)) {
    return (
      <div className="p-10">
        <p className="text-neutral-600 dark:text-neutral-400">Component not found.</p>
        <Link to="/docs/components/accordion" className="docs-link mt-2 inline-block text-sm font-medium">
          Browse components
        </Link>
      </div>
    )
  }

  const name = formatShadcnComponentName(slug)
  const importExample =
    slug === 'branding'
      ? `import { Branding } from "@chg-ds/unified-design-system"\nimport "@chg-ds/unified-design-system/styles.css"`
      : `import { /* … */ } from "@chg-ds/unified-design-system"\nimport "@chg-ds/unified-design-system/styles.css"`
  const docsUrl = getShadcnDocsUrl(slug)
  const examples = getShadcnExamples(slug)
  const meta = getShadcnComponentMeta(slug)
  const isBranding = slug === 'branding'
  const isMedallion = slug === 'medallion'
  const isDotStatus = slug === 'dot-status'
  const isText = slug === 'text'

  function getSectionDescription(title: string, explicitDescription: string | undefined, index: number) {
    if (explicitDescription) return explicitDescription
    if (examples.length === 1) {
      return `This live demo shows the core ${name} composition and the minimum structure you need to wire it into an application flow.`
    }

    return `Execution ${index + 1} focuses on ${title.toLowerCase()} so you can compare its structure and behavior against the other ${name} patterns on this page.`
  }

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
                  <Link to="/docs/components/accordion">Components</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <header className="mt-8">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              {name}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {meta.summary}
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              {isBranding ? (
                <>
                  Design-system branding (wordmarks and marks from Figma). Source:{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                    src/components/ui/{slug}.tsx
                  </code>{' '}
                  — vector assets live under{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                    public/branding/svg/
                  </code>
                  .
                </>
              ) : isMedallion ? (
                <>
                  Custom UDS component: choose <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">tone=&quot;pastel&quot;</code> (default) or{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">tone=&quot;solid&quot;</code>. Palettes are{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">MEDALLION_PASTEL_PALETTE</code> and{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">MEDALLION_SOLID_PALETTE</code>; the root sets{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">data-tone</code>. Source:{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                    src/components/ui/{slug}.tsx
                  </code>{' '}
                  and{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                    medallion-palette.ts
                  </code>
                  .
                </>
              ) : isDotStatus ? (
                <>
                  Small circular status indicator using UDS accent tokens, with optional outline ring. Use beside labels,
                  list rows, or tabs for availability and severity cues. Source:{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                    src/components/ui/{slug}.tsx
                  </code>
                  .
                </>
              ) : (
                <>
                  This package implementation wraps the underlying primitive with UDS tokens and exports. Source:{' '}
                  <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm dark:bg-neutral-800">
                    src/components/ui/{slug}.tsx
                  </code>
                  .
                </>
              )}
            </p>
          </header>
        </div>
      </section>

      <div className="space-y-16 px-8 py-12">
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Import</h2>
          {isBranding ? (
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Import from <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">@chg-ds/unified-design-system</code>
              ; bundled SVG wordmarks and marks live under{' '}
              <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">public/branding/svg/</code> in the package.
            </p>
          ) : null}
          <CodePanel code={importExample} label="Module path" language="typescript" />
        </section>

        {examples.map((section, index) => (
          <section key={section.id} className="space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 dark:text-neutral-400">
                Example {index + 1}
              </p>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{section.title}</h2>
              <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                {getSectionDescription(section.title, section.description, index)}
              </p>
            </div>
            {section.preview}
            <CodePanel code={section.code} label="Example (JSX)" />
          </section>
        ))}
      </div>

      <section className="border-t border-neutral-200 px-8 pt-12 dark:border-neutral-800">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">Props</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          {isBranding || isMedallion || isDotStatus ? (
            <>
              Primary API surface for this module. The last row notes forwarding to the root{' '}
              <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">
                {isDotStatus ? 'span' : 'div'}
              </code>{' '}
              — open{' '}
              <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">
                src/components/ui/{slug}.tsx
              </code>{' '}
              for exact typings.
            </>
          ) : isText ? (
            <>
              Primary API surface for this module—open{' '}
              <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">
                src/components/ui/{slug}.tsx
              </code>{' '}
              for exact typings. See{' '}
              <Link to="/docs/foundations/typography" className="docs-link font-medium underline-offset-2">
                Typography foundations
              </Link>{' '}
              for the UDS scale and utilities these variants map to.
            </>
          ) : (
            <>
              Primary API surface for this module. The last row notes forwarding to the underlying DOM, Radix, or
              third-party types—open{' '}
              <code className="rounded bg-neutral-100 px-1 dark:bg-neutral-800">
                src/components/ui/{slug}.tsx
              </code>{' '}
              for exact typings. Cross-check the{' '}
              <a
                href={docsUrl}
                className="docs-link font-medium underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                official shadcn docs
              </a>{' '}
              for edge cases.
            </>
          )}
        </p>
        <div className="mt-6">
          <PropsTable props={getShadcnComponentProps(slug)} variant="component" />
        </div>
      </section>
    </article>
  )
}
