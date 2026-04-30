import type { PropDefinition } from '../types'

type Props = {
  props: PropDefinition[]
  /** Tailwind utility reference vs React component / API props */
  variant?: 'foundations' | 'component'
}

const HEADERS = {
  foundations: ['Utility', 'Effect', 'Theme default', 'Description'] as const,
  component: ['Prop', 'Type', 'Default', 'Description'] as const,
}

export function PropsTable({ props: rows, variant = 'foundations' }: Props) {
  if (rows.length === 0) {
    return (
      <p className="text-sm text-neutral-500">No rows for this reference.</p>
    )
  }

  const [h1, h2, h3, h4] = HEADERS[variant]

  return (
    <div className="overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-700">
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
            <th className="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100">{h1}</th>
            <th className="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100">{h2}</th>
            <th className="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100">{h3}</th>
            <th className="px-4 py-3 font-semibold text-neutral-900 dark:text-neutral-100">{h4}</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-neutral-950">
          {rows.map((row) => (
            <tr
              key={`${row.name}-${row.type}`}
              className="border-b border-neutral-100 last:border-0 dark:border-neutral-800"
            >
              <td className="px-4 py-3 font-mono text-xs text-violet-700 dark:text-violet-400">
                {row.name}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-neutral-700 dark:text-neutral-300">
                {row.type}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                {row.default ?? '—'}
              </td>
              <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
