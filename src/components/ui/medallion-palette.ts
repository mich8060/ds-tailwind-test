/**
 * Pastel set: light tinted surfaces (`*-25`) + stronger icon colors.
 * Dark theme inverts surface/icon (see `Medallion` when `tone="pastel"`).
 */
export const MEDALLION_PASTEL_PALETTE = {
  neutrals: {
    bg: 'var(--uds-color-neutrals-25)',
    fg: 'var(--uds-color-neutrals-700)',
  },
  red: {
    bg: 'var(--uds-color-accent-red-25)',
    fg: 'var(--uds-color-accent-red-700)',
  },
  orange: {
    bg: 'var(--uds-color-accent-orange-25)',
    fg: 'var(--uds-color-accent-orange-700)',
  },
  yellow: {
    bg: 'var(--uds-color-accent-yellow-25)',
    fg: 'var(--uds-color-accent-yellow-1000)',
  },
  green: {
    bg: 'var(--uds-color-accent-green-25)',
    fg: 'var(--uds-color-accent-green-700)',
  },
  emerald: {
    bg: 'var(--uds-color-accent-emerald-25)',
    fg: 'var(--uds-color-accent-emerald-700)',
  },
  lime: {
    bg: 'var(--uds-color-accent-lime-25)',
    fg: 'var(--uds-color-accent-lime-1000)',
  },
  cyan: {
    bg: 'var(--uds-color-accent-cyan-25)',
    fg: 'var(--uds-color-accent-cyan-700)',
  },
  aqua: {
    bg: 'var(--uds-color-accent-aqua-25)',
    fg: 'var(--uds-color-accent-aqua-700)',
  },
  sky: {
    bg: 'var(--uds-color-accent-sky-25)',
    fg: 'var(--uds-color-accent-sky-700)',
  },
  blue: {
    bg: 'var(--uds-color-accent-blue-25)',
    fg: 'var(--uds-color-accent-blue-700)',
  },
  indigo: {
    bg: 'var(--uds-color-accent-indigo-25)',
    fg: 'var(--uds-color-accent-indigo-700)',
  },
  purple: {
    bg: 'var(--uds-color-accent-purple-25)',
    fg: 'var(--uds-color-accent-purple-700)',
  },
  magenta: {
    bg: 'var(--uds-color-accent-magenta-25)',
    fg: 'var(--uds-color-accent-magenta-700)',
  },
  fuchsia: {
    bg: 'var(--uds-color-accent-fuchsia-25)',
    fg: 'var(--uds-color-accent-fuchsia-700)',
  },
  rose: {
    bg: 'var(--uds-color-accent-rose-25)',
    fg: 'var(--uds-color-accent-rose-700)',
  },
  violet: {
    bg: 'var(--uds-color-accent-violet-25)',
    fg: 'var(--uds-color-accent-violet-700)',
  },
  amber: {
    bg: 'var(--uds-color-accent-amber-25)',
    fg: 'var(--uds-color-accent-amber-1000)',
  },
} as const

/** Same map as `MEDALLION_PASTEL_PALETTE` (legacy export name). */
export const MEDALLION_PALETTE = MEDALLION_PASTEL_PALETTE

export type MedallionColor = keyof typeof MEDALLION_PASTEL_PALETTE

const MEDALLION_SOLID_ICON = 'var(--uds-color-white)' as const

/**
 * Solid set: `500` ramp fill + white icons (same keys as pastel).
 * Dark mode keeps this pairing (no pastel-style inversion).
 */
export const MEDALLION_SOLID_PALETTE = {
  neutrals: {
    bg: 'var(--uds-color-neutrals-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  red: {
    bg: 'var(--uds-color-accent-red-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  orange: {
    bg: 'var(--uds-color-accent-orange-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  yellow: {
    bg: 'var(--uds-color-accent-yellow-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  green: {
    bg: 'var(--uds-color-accent-green-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  emerald: {
    bg: 'var(--uds-color-accent-emerald-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  lime: {
    bg: 'var(--uds-color-accent-lime-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  cyan: {
    bg: 'var(--uds-color-accent-cyan-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  aqua: {
    bg: 'var(--uds-color-accent-aqua-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  sky: {
    bg: 'var(--uds-color-accent-sky-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  blue: {
    bg: 'var(--uds-color-accent-blue-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  indigo: {
    bg: 'var(--uds-color-accent-indigo-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  purple: {
    bg: 'var(--uds-color-accent-purple-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  magenta: {
    bg: 'var(--uds-color-accent-magenta-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  fuchsia: {
    bg: 'var(--uds-color-accent-fuchsia-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  rose: {
    bg: 'var(--uds-color-accent-rose-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  violet: {
    bg: 'var(--uds-color-accent-violet-500)',
    fg: MEDALLION_SOLID_ICON,
  },
  amber: {
    bg: 'var(--uds-color-accent-amber-500)',
    fg: MEDALLION_SOLID_ICON,
  },
} as const satisfies Record<MedallionColor, { bg: string; fg: string }>

export type MedallionTone = 'pastel' | 'solid'

export const MEDALLION_TONES: MedallionTone[] = ['pastel', 'solid']

export const MEDALLION_COLORS: MedallionColor[] = [
  'neutrals',
  'red',
  'orange',
  'yellow',
  'amber',
  'green',
  'emerald',
  'lime',
  'cyan',
  'aqua',
  'sky',
  'blue',
  'indigo',
  'purple',
  'magenta',
  'fuchsia',
  'rose',
  'violet',
]
