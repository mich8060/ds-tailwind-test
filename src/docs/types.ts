import type { ReactNode } from 'react'

export type PropDefinition = {
  name: string
  type: string
  default?: string
  description: string
}

export type DocSection = {
  id: string
  title: string
  description?: string
  code: string
  preview: ReactNode
}

export type CatalogEntry = {
  slug: string
  name: string
  description: string
  props: PropDefinition[]
  sections?: DocSection[]
}
