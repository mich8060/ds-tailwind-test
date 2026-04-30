"use client"

import * as React from "react"
import { XIcon } from "@phosphor-icons/react"

import { cn } from "@/lib/utils"
import { type InputProps } from "@/components/ui/input"

export type TokenInputProps = Omit<InputProps, "type" | "value" | "defaultValue"> & {
  value?: string
  defaultValue?: string
  tokens?: string[]
  defaultTokens?: string[]
  maxTokens?: number
  allowDuplicates?: boolean
  separators?: string[]
  onTokensChange?: (tokens: string[]) => void
}

function TokenInput({
  className,
  inputSize = "default",
  value,
  defaultValue,
  tokens,
  defaultTokens = [],
  maxTokens,
  allowDuplicates = false,
  separators = [",", "Enter"],
  onChange,
  onKeyDown,
  onBlur,
  onTokensChange,
  placeholder = "Add token",
  disabled,
  readOnly,
  autoComplete = "off",
  autoCapitalize = "none",
  autoCorrect = "off",
  spellCheck = false,
  ...props
}: TokenInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [internalTokens, setInternalTokens] = React.useState(defaultTokens)
  const [internalValue, setInternalValue] = React.useState(
    defaultValue == null ? "" : String(defaultValue)
  )

  const selectedTokens = tokens ?? internalTokens
  const draftValue = value == null ? internalValue : String(value)
  const canEdit = !disabled && !readOnly
  const normalizedSeparators = React.useMemo(
    () => separators.map((key) => key.toLowerCase()),
    [separators]
  )

  const updateTokens = (nextTokens: string[]) => {
    if (tokens === undefined) {
      setInternalTokens(nextTokens)
    }
    onTokensChange?.(nextTokens)
  }

  const addToken = (rawValue: string) => {
    const nextToken = rawValue.trim()
    if (!nextToken) return false
    if (maxTokens != null && selectedTokens.length >= maxTokens) return false
    if (!allowDuplicates && selectedTokens.includes(nextToken)) return false
    updateTokens([...selectedTokens, nextToken])
    return true
  }

  const removeTokenAt = (index: number) => {
    updateTokens(selectedTokens.filter((_, tokenIndex) => tokenIndex !== index))
    inputRef.current?.focus()
  }

  const clearDraftValue = () => {
    if (value === undefined) {
      setInternalValue("")
    }
  }

  const commitDraftValue = () => {
    if (!canEdit) return
    const added = addToken(draftValue)
    if (added) clearDraftValue()
  }

  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-wrap items-center gap-1 rounded-[length:var(--uds-radius-4)] border border-input bg-[var(--uds-surface-secondary)] [font-family:var(--font-inter)] transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 has-[input:disabled]:pointer-events-none has-[input:disabled]:cursor-not-allowed has-[input:disabled]:opacity-50 has-[input:disabled]:bg-[var(--uds-surface-disabled)]",
        inputSize === "sm"
          ? "min-h-9 px-2 py-1 text-uds-14 leading-uds-14"
          : "min-h-11 px-2 py-1.5 text-uds-16 leading-uds-16",
        className
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {selectedTokens.map((token, index) => (
        <span
          key={`${token}-${index}`}
          className="inline-flex h-8 items-center gap-1 rounded-[4px] border border-[var(--uds-border-primary)] bg-[var(--uds-color-white)] px-2 text-uds-14 font-uds-regular leading-uds-14 text-[var(--uds-text-primary)]"
        >
          <span className="truncate max-w-[180px]">{token}</span>
          {canEdit ? (
            <button
              type="button"
              aria-label={`Remove ${token}`}
              onClick={(event) => {
                event.stopPropagation()
                removeTokenAt(index)
              }}
              className="inline-flex size-4 cursor-pointer items-center justify-center rounded text-[var(--uds-text-secondary)] transition-colors hover:text-[var(--uds-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <XIcon aria-hidden className="size-3" />
            </button>
          ) : null}
        </span>
      ))}
      <input
        ref={inputRef}
        type="text"
        value={draftValue}
        placeholder={selectedTokens.length === 0 ? placeholder : undefined}
        disabled={disabled}
        readOnly={readOnly}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        spellCheck={spellCheck}
        className={cn(
          "min-w-[120px] flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground",
          inputSize === "sm" ? "h-7" : "h-8"
        )}
        onChange={(event) => {
          if (value === undefined) {
            setInternalValue(event.currentTarget.value)
          }
          onChange?.(event)
        }}
        onKeyDown={(event) => {
          const key = event.key.toLowerCase()
          const shouldCommit = normalizedSeparators.includes(key)
          if (shouldCommit) {
            event.preventDefault()
            commitDraftValue()
          } else if (
            key === "backspace" &&
            draftValue.length === 0 &&
            selectedTokens.length > 0 &&
            canEdit
          ) {
            event.preventDefault()
            removeTokenAt(selectedTokens.length - 1)
          }
          onKeyDown?.(event)
        }}
        onBlur={(event) => {
          commitDraftValue()
          onBlur?.(event)
        }}
        {...props}
      />
    </div>
  )
}

export { TokenInput }
