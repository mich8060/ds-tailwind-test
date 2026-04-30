import { useEffect, useState } from 'react'
import type { BundledLanguage, Highlighter } from 'shiki/bundle/web'

type Props = {
  code: string
  label?: string
  /** Shiki grammar; defaults to tsx for JSX / Tailwind examples */
  language?: BundledLanguage
}

const HIGHLIGHTER_LANGS: BundledLanguage[] = [
  'tsx',
  'typescript',
  'jsx',
  'javascript',
  'css',
  'scss',
  'html',
  'json',
  'bash',
  'shell',
  'markdown',
  'md',
]

let highlighterPromise: Promise<Highlighter> | null = null

async function loadHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    const { getSingletonHighlighter } = await import('shiki/bundle/web')
    highlighterPromise = getSingletonHighlighter({
      themes: ['github-dark'],
      langs: HIGHLIGHTER_LANGS,
    })
  }
  return highlighterPromise
}

function highlightOrder(preferred: BundledLanguage): BundledLanguage[] {
  return [...new Set<BundledLanguage>([preferred, ...HIGHLIGHTER_LANGS])]
}

export function CodePanel({ code, label = 'Code', language = 'tsx' }: Props) {
  const [copied, setCopied] = useState(false)
  const [html, setHtml] = useState<string | null>(null)
  const trimmed = code.trim()

  useEffect(() => {
    let cancelled = false

    void (async () => {
      try {
        const highlighter = await loadHighlighter()
        let out: string | null = null
        for (const lang of highlightOrder(language)) {
          try {
            out = highlighter.codeToHtml(trimmed, {
              lang,
              theme: 'github-dark',
            })
            break
          } catch {
            /* try next grammar */
          }
        }
        if (!cancelled) {
          setHtml(out && out.length > 0 ? out : '')
        }
      } catch {
        if (!cancelled) {
          setHtml('')
        }
      }
    })()

    return () => {
      cancelled = true
    }
  }, [trimmed, language])

  async function copy() {
    await navigator.clipboard.writeText(trimmed)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const showHighlighted = html !== null && html !== ''

  return (
    <div className="group relative overflow-hidden rounded-[8px] border border-neutral-200 bg-neutral-950 dark:border-neutral-800">
      <div className="flex items-center justify-between border-b border-neutral-800 px-3 py-2">
        <span className="text-xs font-medium text-neutral-400">{label}</span>
        <button
          type="button"
          onClick={copy}
          className="rounded-[4px] px-2 py-1 text-xs font-medium text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      {showHighlighted ? (
        <div
          className="code-panel-shiki max-h-[24rem] overflow-auto p-4 text-xs leading-relaxed md:text-sm [&_code]:font-mono [&_pre]:m-0 [&_pre]:font-mono [&_pre]:leading-relaxed"
          // Trusted local docs snippets only
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className="max-h-[24rem] overflow-auto p-4 text-xs leading-relaxed text-neutral-300 md:text-sm">
          <code className="font-mono">{trimmed}</code>
        </pre>
      )}
    </div>
  )
}
