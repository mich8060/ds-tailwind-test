import type { ReactNode } from 'react'

/** Schematic wireframes for the DocShell layout doc (not to scale). */

function FigCaption({ children }: { children: ReactNode }) {
  return (
    <p className="mt-2 text-center text-xs font-medium text-neutral-500 dark:text-neutral-400">{children}</p>
  )
}

function DimChip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-[10px] text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
      {children}
    </span>
  )
}

export function DocShellLayoutVisuals() {
  return (
    <div className="space-y-8 pt-2">
      <figure className="mx-auto max-w-full">
        <figcaption className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">Viewport regions</figcaption>
        <div className="flex h-36 overflow-hidden rounded-[4px] border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900/40">
          <div className="flex w-[28%] min-w-[72px] flex-col border-r border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
            <div className="flex flex-1 flex-col justify-center gap-2 p-2">
              <div className="mx-auto h-8 w-12 rounded-sm bg-neutral-200 dark:bg-neutral-700" title="Sidebar schematic" />
              <div className="space-y-1">
                <div className="h-2 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
                <div className="h-2 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
                <div className="h-2 w-4/5 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
              </div>
            </div>
            <div className="border-t border-neutral-200 p-2 text-center dark:border-neutral-700">
              <DimChip>fixed · left · full height</DimChip>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center bg-neutral-100/80 p-4 dark:bg-neutral-800/30">
            <div className="mb-2 h-16 w-3/4 max-w-xs rounded-sm border-2 border-dashed border-neutral-300 dark:border-neutral-600" />
            <DimChip>main · Outlet · pl = sidebar width</DimChip>
          </div>
        </div>
        <FigCaption>Left: sidebar rail. Right: page body stays inset so it never sits under the fixed rail.</FigCaption>
      </figure>

      <figure className="mx-auto max-w-full">
        <figcaption className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Expanded sidebar (~280px)
        </figcaption>
        <div className="mx-auto flex max-w-xs flex-col overflow-hidden rounded-[4px] border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
          <div className="flex h-14 items-center justify-center gap-2 border-b border-neutral-200 px-2 dark:border-neutral-700">
            <div className="size-6 shrink-0 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-6 flex-1 rounded-sm bg-violet-200/80 dark:bg-violet-900/40" />
          </div>
          <div className="space-y-2 border-b border-neutral-200 p-3 dark:border-neutral-700">
            <div className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400">Brand</div>
            <div className="h-8 w-full rounded-[4px] border border-neutral-200 bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-900" />
          </div>
          <div className="space-y-2 p-3">
            <div className="flex items-center gap-2 rounded-sm bg-neutral-900 py-2 pr-2 pl-3 dark:bg-neutral-100">
              <div className="size-4 rounded-sm bg-white/30 dark:bg-neutral-900/40" />
              <div className="h-2 flex-1 rounded-sm bg-white/80 dark:bg-neutral-900" />
            </div>
            <div className="space-y-1 border-l-2 border-neutral-200 pl-3 dark:border-neutral-700">
              <div className="h-2 w-3/4 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
              <div className="h-2 w-2/3 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
            </div>
            <div className="flex items-center gap-2 py-2 pr-2 pl-3 opacity-70">
              <div className="size-4 rounded-sm bg-neutral-300 dark:bg-neutral-600" />
              <div className="h-2 flex-1 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
            </div>
          </div>
          <div className="mt-auto flex items-center justify-between gap-2 border-t border-neutral-200 p-3 dark:border-neutral-700">
            <div className="h-6 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            <div className="size-8 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          </div>
        </div>
        <FigCaption>
          Header (list + centered wordmark), brand control, disclosure sections with nested links, footer (theme +
          account).
        </FigCaption>
      </figure>

      <figure className="mx-auto max-w-full">
        <figcaption className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Collapsed rail (~72px) + flyout
        </figcaption>
        <div className="flex items-start justify-center gap-2 sm:gap-4">
          <div className="flex w-16 shrink-0 flex-col overflow-hidden rounded-[4px] border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
            <div className="flex h-16 items-center justify-center border-b border-neutral-200 dark:border-neutral-700">
              <div className="size-9 rounded-sm bg-gradient-to-br from-violet-200 to-neutral-200 dark:from-violet-900/50 dark:to-neutral-700" />
            </div>
            <div className="flex flex-col items-center gap-1 py-3">
              <div className="size-12 rounded-[4px] bg-neutral-200 dark:bg-neutral-700" />
              <div className="size-12 rounded-[4px] bg-neutral-900 dark:bg-neutral-100" />
              <div className="size-12 rounded-[4px] bg-neutral-200 dark:bg-neutral-700" />
            </div>
            <div className="mt-auto flex justify-center border-t border-neutral-200 p-2 dark:border-neutral-700">
              <div className="h-5 w-9 rounded-full bg-neutral-200 dark:bg-neutral-700" />
            </div>
          </div>
          <div className="min-w-0 flex-1 max-w-[200px] overflow-hidden rounded-[4px] border border-neutral-200 bg-white shadow-md dark:border-neutral-700 dark:bg-neutral-950 dark:shadow-none">
            <div className="border-b border-neutral-100 px-3 py-2 text-[10px] font-semibold text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
              Section panel
            </div>
            <div className="space-y-2 p-2">
              <div className="h-2 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
              <div className="h-2 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
              <div className="h-2 w-5/6 rounded-sm bg-neutral-900/80 dark:bg-neutral-100/80" />
              <div className="h-2 rounded-sm bg-neutral-200 dark:bg-neutral-700" />
            </div>
          </div>
        </div>
        <FigCaption>
          Narrow rail: header mark, three 48×48 section triggers, compact footer. Flyout lists links beside the
          rail (positioned from the trigger).
        </FigCaption>
      </figure>

      <figure className="mx-auto max-w-full">
        <figcaption className="mb-3 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
          Collapsed header: default vs rail hover
        </figcaption>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <div className="flex flex-col items-center">
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[4px] border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-950">
              <div className="size-9 rounded-sm bg-gradient-to-br from-violet-200 to-neutral-200 dark:from-violet-900/50 dark:to-neutral-700" />
            </div>
            <FigCaption>Brand mark visible; expand control hidden</FigCaption>
          </div>
          <div className="hidden text-neutral-400 sm:flex sm:items-center sm:pt-4" aria-hidden>
            →
          </div>
          <div className="flex flex-col items-center">
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[4px] border border-violet-200 bg-violet-50/50 dark:border-violet-900/50 dark:bg-violet-950/20">
              <div className="size-10 rounded-md border border-neutral-300 bg-white dark:border-neutral-600 dark:bg-neutral-800" />
            </div>
            <FigCaption>Rail hovered: mark fades, expand button centered</FigCaption>
          </div>
        </div>
      </figure>
    </div>
  )
}
