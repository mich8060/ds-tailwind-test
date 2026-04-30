"use client"

import * as React from "react"
import {
  ArrowClockwiseIcon,
  DownloadSimpleIcon,
  EyeIcon,
  FileIcon,
  ImageIcon,
  XIcon,
} from "@phosphor-icons/react"

import { Badge } from "@/components/ui/badge"
import { FileUpload, type FileUploadProps, type FileUploadSize } from "@/components/ui/file-upload"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

export type FileUploadCardStatus =
  | "idle"
  | "uploading"
  | "success"
  | "error"
  | "disabled"

export type FileUploadCardItem = {
  id: string
  name: string
  size?: number
  type?: string
  uploadedAt?: string
  previewUrl?: string
  status?: FileUploadCardStatus
  progress?: number
  errorMessage?: string
  file?: File
}

export type FileUploadCardsDensity = "default" | "compact"

export type FileUploadCardsProps = Omit<FileUploadProps, "onFileSelect"> & {
  files?: File[]
  defaultFiles?: File[]
  items?: FileUploadCardItem[]
  defaultItems?: FileUploadCardItem[]
  onFilesChange?: (files: File[]) => void
  onItemsChange?: (items: FileUploadCardItem[]) => void
  onRetry?: (item: FileUploadCardItem) => void
  onView?: (item: FileUploadCardItem) => void
  onDownload?: (item: FileUploadCardItem) => void
  /** Tighter card rows (smaller thumb, type scale, actions) and a compact dropzone when `size` is not set. */
  density?: FileUploadCardsDensity
}

function toCardItem(file: File): FileUploadCardItem {
  return {
    id: `${file.name}-${file.size}-${file.lastModified}`,
    name: file.name,
    size: file.size,
    type: file.type,
    status: "idle",
    file,
  }
}

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  const kb = bytes / 1024
  if (kb < 1024) return `${kb.toFixed(1)} KB`
  return `${(kb / 1024).toFixed(1)} MB`
}

function getStatusConfig(status: FileUploadCardStatus) {
  switch (status) {
    case "uploading":
      return { label: "Uploading", accent: "sky" as const }
    case "success":
      return { label: "Uploaded", accent: "green" as const }
    case "error":
      return { label: "Error", accent: "red" as const }
    case "disabled":
      return { label: "Disabled", accent: "neutral" as const }
    case "idle":
    default:
      return { label: "Ready", accent: "neutral" as const }
  }
}

function FileUploadCards({
  files: _controlledFiles,
  defaultFiles = [],
  items,
  defaultItems = [],
  onFilesChange,
  onItemsChange,
  onRetry,
  onView,
  onDownload,
  helperText = "PDF, DOCX, PNG up to 10MB each",
  multiple = true,
  density = "default",
  size,
  ...props
}: FileUploadCardsProps) {
  void _controlledFiles
  const compact = density === "compact"
  const dropzoneSize: FileUploadSize = size ?? (compact ? "xs" : "default")

  const [internalItems, setInternalItems] = React.useState<FileUploadCardItem[]>(
    defaultItems.length > 0 ? defaultItems : defaultFiles.map(toCardItem)
  )
  const selectedItems = items ?? internalItems

  const setItems = (nextItems: FileUploadCardItem[]) => {
    if (items === undefined) {
      setInternalItems(nextItems)
    }
    onItemsChange?.(nextItems)

    const nextFiles = nextItems
      .map((item) => item.file)
      .filter((file): file is File => file instanceof File)
    onFilesChange?.(nextFiles)
  }

  return (
    <div className={cn(compact ? "space-y-2" : "space-y-4")}>
      <FileUpload
        multiple={multiple}
        helperText={helperText}
        size={dropzoneSize}
        onFileSelect={(nextFiles) => {
          setItems([...selectedItems, ...nextFiles.map(toCardItem)])
        }}
        {...props}
      />
      {selectedItems.length > 0 ? (
        <div className={cn("grid grid-cols-1", compact ? "gap-2" : "gap-3")}>
          {selectedItems.map((item, index) => {
            const status = item.status ?? "idle"
            const statusConfig = getStatusConfig(status)
            const isDisabled = status === "disabled"
            const canRemove = !isDisabled
            const metadata = [
              typeof item.size === "number" ? formatFileSize(item.size) : null,
              item.type || null,
              item.uploadedAt || null,
            ].filter(Boolean)

            return (
            <div
              key={item.id || `${item.name}-${index}`}
              className={cn(
                "rounded-[8px] border border-[var(--uds-border-primary)] bg-[var(--uds-surface-secondary)]",
                compact ? "p-2" : "p-3",
                isDisabled && "opacity-60"
              )}
            >
              <div className={cn("flex", compact ? "items-center gap-2" : "items-start gap-3")}>
                <div
                  className={cn(
                    "flex shrink-0 items-center justify-center overflow-hidden rounded-[8px] bg-[var(--uds-surface-tertiary)] text-[var(--uds-text-secondary)]",
                    compact ? "size-8" : "size-10",
                  )}
                >
                  {item.previewUrl ? (
                    <img
                      src={item.previewUrl}
                      alt=""
                      className="size-full object-cover"
                    />
                  ) : item.type?.startsWith("image/") ? (
                    <ImageIcon aria-hidden className={compact ? "size-4" : "size-5"} />
                  ) : (
                    <FileIcon aria-hidden className={compact ? "size-4" : "size-5"} />
                  )}
                </div>
                <div className={cn("min-w-0 flex-1", compact ? "flex flex-col gap-1" : "")}>
                  <div className="flex flex-wrap items-center gap-2">
                    <p
                      className={cn(
                        "truncate font-sans font-uds-semibold text-[var(--uds-text-primary)]",
                        compact ? "text-uds-14 leading-uds-14" : "text-uds-16 leading-uds-16",
                      )}
                    >
                      {item.name}
                    </p>
                    <Badge
                      size={compact ? "sm" : "default"}
                      accent={statusConfig.accent}
                      appearance="pastel"
                      shape="rect"
                    >
                      {statusConfig.label}
                    </Badge>
                  </div>
                  {metadata.length > 0 ? (
                    <p
                      className={cn(
                        "font-sans font-uds-regular text-[var(--uds-text-secondary)]",
                        compact
                          ? "text-uds-12 leading-uds-12"
                          : "mt-1 text-uds-14 leading-uds-14",
                      )}
                    >
                      {metadata.join(" · ")}
                    </p>
                  ) : null}
                  {status === "uploading" ? (
                    <div className={cn("space-y-1", compact ? "mt-1" : "mt-2")}>
                      <Progress value={item.progress ?? 0} />
                      <p className="font-sans text-uds-12 font-uds-regular leading-uds-12 text-[var(--uds-text-secondary)]">
                        {Math.max(0, Math.min(100, item.progress ?? 0))}% uploaded
                      </p>
                    </div>
                  ) : null}
                  {status === "error" && item.errorMessage ? (
                    <p
                      className={cn(
                        "font-sans text-uds-12 font-uds-regular leading-uds-12 text-destructive",
                        compact ? "mt-1" : "mt-2",
                      )}
                    >
                      {item.errorMessage}
                    </p>
                  ) : null}
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {onView ? (
                    <button
                      type="button"
                      aria-label={`View ${item.name}`}
                      onClick={() => onView(item)}
                      disabled={isDisabled}
                      className={cn(
                        "inline-flex cursor-pointer items-center justify-center rounded-[8px] text-[var(--uds-text-secondary)] transition-colors hover:bg-[var(--uds-surface-tertiary)] hover:text-[var(--uds-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
                        compact ? "size-7" : "size-8",
                      )}
                    >
                      <EyeIcon aria-hidden className={compact ? "size-3.5" : "size-4"} />
                    </button>
                  ) : null}
                  {onDownload ? (
                    <button
                      type="button"
                      aria-label={`Download ${item.name}`}
                      onClick={() => onDownload(item)}
                      disabled={isDisabled}
                      className={cn(
                        "inline-flex cursor-pointer items-center justify-center rounded-[8px] text-[var(--uds-text-secondary)] transition-colors hover:bg-[var(--uds-surface-tertiary)] hover:text-[var(--uds-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
                        compact ? "size-7" : "size-8",
                      )}
                    >
                      <DownloadSimpleIcon aria-hidden className={compact ? "size-3.5" : "size-4"} />
                    </button>
                  ) : null}
                  {status === "error" && onRetry ? (
                    <button
                      type="button"
                      aria-label={`Retry ${item.name}`}
                      onClick={() => onRetry(item)}
                      disabled={isDisabled}
                      className={cn(
                        "inline-flex cursor-pointer items-center justify-center rounded-[8px] text-[var(--uds-text-secondary)] transition-colors hover:bg-[var(--uds-surface-tertiary)] hover:text-[var(--uds-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
                        compact ? "size-7" : "size-8",
                      )}
                    >
                      <ArrowClockwiseIcon aria-hidden className={compact ? "size-3.5" : "size-4"} />
                    </button>
                  ) : null}
                  {canRemove ? (
                    <button
                      type="button"
                      aria-label={`Remove ${item.name}`}
                      onClick={() => {
                        setItems(
                          selectedItems.filter((_, fileIndex) => fileIndex !== index)
                        )
                      }}
                      className={cn(
                        "inline-flex cursor-pointer items-center justify-center rounded-[8px] text-[var(--uds-text-secondary)] transition-colors",
                        "hover:bg-[var(--uds-surface-tertiary)] hover:text-[var(--uds-text-primary)]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
                        compact ? "size-7" : "size-8",
                      )}
                    >
                      <XIcon aria-hidden className={compact ? "size-3.5" : "size-4"} />
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          )})}
        </div>
      ) : null}
    </div>
  )
}

export { FileUploadCards }
