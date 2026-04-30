import type { CSSProperties } from 'react'
import type { DocSection } from '../types'

const BRAND_STEPS = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const

const ACCENT_HUES = [
  'amber',
  'aqua',
  'blue',
  'cyan',
  'emerald',
  'fuchsia',
  'green',
  'indigo',
  'lime',
  'magenta',
  'orange',
  'purple',
  'red',
  'rose',
  'sky',
  'violet',
  'yellow',
] as const

const ACCENT_STEPS = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] as const

/** UDS neutral ramp (`--uds-color-neutrals-*`): 25, 50, 100–900, 1000. */
const NEUTRAL_STEPS = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000] as const

type BrandRole = 'primary' | 'secondary' | 'tertiary' | 'quaternary'

const CHECKERBOARD_BG: CSSProperties = {
  backgroundColor: '#e4e4e7',
  backgroundImage: `linear-gradient(45deg, #d4d4d8 25%, transparent 25%),
    linear-gradient(-45deg, #d4d4d8 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #d4d4d8 75%),
    linear-gradient(-45deg, transparent 75%, #d4d4d8 75%)`,
  backgroundSize: '8px 8px',
  backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0',
}

function BaseColorsPreview() {
  const chips: Array<{ label: string; token: string; checkerboard: boolean }> = [
    { label: 'Black', token: '--uds-color-black', checkerboard: false },
    { label: 'White', token: '--uds-color-white', checkerboard: false },
    { label: 'Transparent', token: '--uds-color-transparent', checkerboard: true },
  ]
  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Canonical fills from the system palette. Prefer these tokens over hard-coded hex so defaults stay aligned with{' '}
        <span className="font-mono text-xs">uds-tokens.css</span>.
      </p>
      <div className="grid grid-cols-3 gap-6 sm:max-w-lg">
        {chips.map(({ label, token, checkerboard }) => (
          <div key={token} className="min-w-0 space-y-2 text-center">
            <div className="mx-auto aspect-square w-full max-w-[72px]">
              {checkerboard ? (
                <div className="relative size-full overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-700">
                  <div className="absolute inset-0 dark:opacity-80" style={CHECKERBOARD_BG} aria-hidden />
                  <div
                    className="absolute inset-0 rounded-[inherit]"
                    style={{ backgroundColor: `var(${token})` }}
                    title={token}
                  />
                </div>
              ) : (
                <div
                  className="size-full rounded-md border border-neutral-200 shadow-sm dark:border-neutral-700"
                  style={{ backgroundColor: `var(${token})` }}
                  title={token}
                />
              )}
            </div>
            <p className="text-xs font-medium text-neutral-900 dark:text-neutral-100">{label}</p>
            <p className="break-all font-mono text-[10px] leading-snug text-neutral-500 dark:text-neutral-400">
              var({token})
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function BrandScale({ role }: { role: BrandRole }) {
  const label = role.charAt(0).toUpperCase() + role.slice(1)
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Brand {label}</h3>
      <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
        {BRAND_STEPS.map((step) => {
          const cssVar = `--brand-${role}-${step}`
          return (
            <div key={step} className="min-w-0 space-y-2 text-center">
              <div
                className="aspect-square w-full max-w-[56px] mx-auto rounded-md border border-neutral-200/90 shadow-sm dark:border-neutral-700/90"
                style={{ backgroundColor: `var(${cssVar})` }}
                title={cssVar}
              />
              <p className="font-mono text-[10px] leading-none text-neutral-500 dark:text-neutral-400">{step}</p>
            </div>
          )
        })}
      </div>
      <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">var(--brand-{role}-…)</p>
    </div>
  )
}

function AccentHueRow({ hue }: { hue: (typeof ACCENT_HUES)[number] }) {
  return (
    <div className="min-w-0 space-y-2">
      <p className="text-xs font-medium capitalize text-neutral-700 dark:text-neutral-300">{hue}</p>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {ACCENT_STEPS.map((step) => {
          const token = `--uds-color-accent-${hue}-${step}`
          return (
            <div key={step} className="flex min-w-0 flex-col items-center gap-1">
              <div
                className="size-8 shrink-0 rounded-md border border-neutral-200/80 sm:size-9 dark:border-neutral-700/80"
                style={{ backgroundColor: `var(${token})` }}
                title={token}
              />
              <span className="font-mono text-[9px] text-neutral-500 dark:text-neutral-500">{step}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function NeutralColorsPreview() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Shared gray scale for chrome, text, borders, and surfaces. Tokens use{' '}
        <span className="font-mono text-xs">--uds-color-neutrals-25 … 1000</span>;{' '}
        <span className="font-mono text-xs">--uds-color-neutrals</span> aliases{' '}
        <span className="font-mono text-xs">--uds-color-neutrals-500</span>. Prefer these over ad-hoc hex when
        building on UDS.
      </p>
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">Neutrals</h3>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-12">
          {NEUTRAL_STEPS.map((step) => {
            const cssVar = `--uds-color-neutrals-${step}`
            return (
              <div key={step} className="min-w-0 space-y-2 text-center">
                <div
                  className="aspect-square w-full max-w-[56px] mx-auto rounded-md border border-neutral-200/90 shadow-sm dark:border-neutral-700/90"
                  style={{ backgroundColor: `var(${cssVar})` }}
                  title={cssVar}
                />
                <p className="font-mono text-[10px] leading-none text-neutral-500 dark:text-neutral-400">{step}</p>
              </div>
            )
          })}
        </div>
        <p className="font-mono text-xs text-neutral-500 dark:text-neutral-400">var(--uds-color-neutrals-…)</p>
      </div>
    </div>
  )
}

function BrandColorsPreview() {
  return (
    <div className="space-y-10">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        Per-brand ramps from <span className="font-mono text-xs">uds-tokens.css</span>. Values follow the active{' '}
        <span className="font-mono text-xs">[data-brand]</span> / <span className="font-mono text-xs">.brand-*</span>{' '}
        theme on an ancestor (default sample uses the root palette).
      </p>
      <div className="grid gap-10 lg:grid-cols-2">
        {(['primary', 'secondary', 'tertiary', 'quaternary'] as const).map((role) => (
          <BrandScale key={role} role={role} />
        ))}
      </div>
    </div>
  )
}

function AccentColorsPreview() {
  return (
    <div className="space-y-8">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        System accent scales are exposed as{' '}
        <span className="font-mono text-xs">{'--uds-color-accent-{hue}-{step}'}</span>.
        Use Tailwind arbitrary values, for example{' '}
        <span className="font-mono text-xs">bg-[var(--uds-color-accent-blue-500)]</span>.
      </p>
      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {ACCENT_HUES.map((hue) => (
          <AccentHueRow key={hue} hue={hue} />
        ))}
      </div>
    </div>
  )
}

const baseExampleCode = `{/* Canonical system fills */}
<div className="flex flex-wrap gap-2">
  <div className="h-10 w-10 rounded-md bg-[var(--uds-color-black)]" />
  <div className="h-10 w-10 rounded-md border border-neutral-200 bg-[var(--uds-color-white)] dark:border-neutral-700" />
  <div className="h-10 w-10 rounded-md border border-neutral-300 bg-[var(--uds-color-transparent)] dark:border-neutral-600" />
</div>`

const brandExampleCode = `/* Brand ramps — swap palette via data-brand on a root or section */
<div className="flex flex-wrap gap-2">
  <div className="h-10 w-10 rounded-md bg-[var(--brand-primary-500)] shadow-sm" />
  <div className="h-10 w-10 rounded-md bg-[var(--brand-secondary-500)] shadow-sm" />
  <div className="h-10 w-10 rounded-md bg-[var(--brand-tertiary-500)] shadow-sm" />
  <div className="h-10 w-10 rounded-md bg-[var(--brand-quaternary-500)] shadow-sm" />
</div>`

const neutralExampleCode = `{/* UDS neutrals — same scale surfaces and text tie to */}
<div className="flex flex-wrap gap-2">
  <div className="h-10 w-10 rounded-md bg-[var(--uds-color-neutrals-25)] ring-1 ring-[var(--uds-color-neutrals-200)]" />
  <div className="h-10 w-10 rounded-md bg-[var(--uds-color-neutrals-100)] ring-1 ring-[var(--uds-color-neutrals-300)]" />
  <div className="h-10 w-10 rounded-md bg-[var(--uds-color-neutrals-500)]" />
  <div className="h-10 w-10 rounded-md bg-[var(--uds-color-neutrals-1000)]" />
</div>`

const accentExampleCode = `{/* Full accent scale example — pick any hue + step */}
<div className="flex flex-wrap gap-2">
  <div className="h-10 w-10 rounded-md bg-[var(--uds-color-accent-emerald-500)]" />
  <div className="h-10 w-10 rounded-md bg-[var(--uds-color-accent-violet-400)]" />
  <div className="h-10 w-10 rounded-md bg-[var(--uds-color-accent-amber-600)]" />
</div>`

function sec(
  id: string,
  title: string,
  code: string,
  preview: DocSection['preview'],
  description?: string,
): DocSection {
  return { id, title, code, preview, description }
}

export function getColorsFoundationSections(): DocSection[] {
  return [
    sec(
      'base-colors',
      'Base colors',
      baseExampleCode,
      <BaseColorsPreview />,
      'System black, white, and transparent mapped to `--uds-color-*` (not theme-specific).',
    ),
    sec(
      'brand-colors',
      'Brand colors',
      brandExampleCode,
      <BrandColorsPreview />,
      'Four semantic brand ramps (25–900) wired to white-label themes.',
    ),
    sec(
      'neutral-colors',
      'Neutral colors',
      neutralExampleCode,
      <NeutralColorsPreview />,
      'Single shared neutral ramp (25–1000) for UI structure; alias token at 500.',
    ),
    sec(
      'accent-colors',
      'Accent colors',
      accentExampleCode,
      <AccentColorsPreview />,
      'Shared accent families for charts, badges, and decorative emphasis.',
    ),
  ]
}
