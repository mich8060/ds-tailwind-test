import * as React from "react"

import { Input } from "@/components/ui/input"
import { PaginationItem } from "@/components/ui/pagination-base"
import { paginationJumpSuffixClass } from "@/components/ui/pagination-theme"
import { cn } from "@/lib/utils"

type PaginationJumpProps = {
  totalPages: number
  value?: number
  defaultValue?: number
  onChange?: (page: number) => void
  className?: string
  inputClassName?: string
}

function PaginationJump({
  totalPages,
  value: valueProp,
  defaultValue = 1,
  onChange,
  className,
  inputClassName,
}: PaginationJumpProps) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue)
  const value = valueProp ?? uncontrolled

  const setPage = (page: number) => {
    const next = Math.min(Math.max(1, Math.floor(page)), Math.max(1, totalPages))
    if (valueProp === undefined) {
      setUncontrolled(next)
    }
    onChange?.(next)
  }

  return (
    <PaginationItem
      className={cn(
        "items-center gap-2 px-2 [font-family:var(--font-inter)]",
        className
      )}
    >
      <Input
        type="number"
        inputSize="sm"
        min={1}
        max={Math.max(1, totalPages)}
        value={String(value)}
        aria-label="Jump to page"
        className={cn(
          "w-10 shrink-0 tabular-nums text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
          inputClassName
        )}
        onChange={(event) => {
          const raw = event.target.value
          if (raw === "") {
            return
          }
          const next = Number.parseInt(raw, 10)
          if (!Number.isNaN(next)) {
            setPage(next)
          }
        }}
        onBlur={() => setPage(value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault()
            setPage(
              Number.parseInt((event.target as HTMLInputElement).value, 10) || value
            )
          }
        }}
      />
      <span className={cn(paginationJumpSuffixClass, "whitespace-nowrap")}>
        of {totalPages}
      </span>
    </PaginationItem>
  )
}

function getPaginationPages(
  currentPage: number,
  totalPages: number,
  delta = 2
): (number | "ellipsis")[] {
  const total = Math.max(0, Math.floor(totalPages))
  if (total <= 0) {
    return []
  }
  if (total <= delta * 2 + 3) {
    return Array.from({ length: total }, (_, index) => index + 1)
  }

  const range: number[] = []
  for (let page = 1; page <= total; page += 1) {
    if (
      page === 1 ||
      page === total ||
      (page >= currentPage - delta && page <= currentPage + delta)
    ) {
      range.push(page)
    }
  }

  const output: (number | "ellipsis")[] = []
  let previous: number | undefined
  for (const page of range) {
    if (previous !== undefined && page - previous > 1) {
      output.push("ellipsis")
    }
    output.push(page)
    previous = page
  }

  return output
}

export { PaginationJump, getPaginationPages }
export type { PaginationJumpProps }
