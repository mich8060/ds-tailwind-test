/**
 * Curated doctor portrait assets (from UDS `doctors.zip`). Only these URLs are valid
 * for product avatars — use `DoctorAvatar` / `DoctorAvatarImage` with `doctor="firstName"`.
 */
export const DOCTOR_AVATAR_IDS = [
  'Amanda-Lee',
  'Andrew-Jackson',
  'Brian-White',
  'Christopher-Davis',
  'Daniel-Garcia',
  'David-Kim',
  'Emily-Thompson',
  'James-Wilson',
  'Jennifer-Moore',
  'Jessica-Martinez',
  'Katherine-Hall',
  'Kevin-Anderson',
  'Laura-Harris',
  'Michael-Roberts',
  'Michelle-Brown',
  'Nicole-Lewis',
  'Rachel-Taylor',
  'Robert-Johnson',
  'Sarah-Chen',
  'Stephanie-Miller',
  'Thomas-Clark',
  'William-Young',
] as const

export type DoctorAvatarId = (typeof DOCTOR_AVATAR_IDS)[number]

/**
 * Lowercase first name → portrait file stem (unique first names in this set).
 * Public API: `doctor="emily"` etc.
 */
export const DOCTOR_AVATAR_BY_FIRST_NAME = {
  amanda: 'Amanda-Lee',
  andrew: 'Andrew-Jackson',
  brian: 'Brian-White',
  christopher: 'Christopher-Davis',
  daniel: 'Daniel-Garcia',
  david: 'David-Kim',
  emily: 'Emily-Thompson',
  james: 'James-Wilson',
  jennifer: 'Jennifer-Moore',
  jessica: 'Jessica-Martinez',
  katherine: 'Katherine-Hall',
  kevin: 'Kevin-Anderson',
  laura: 'Laura-Harris',
  michael: 'Michael-Roberts',
  michelle: 'Michelle-Brown',
  nicole: 'Nicole-Lewis',
  rachel: 'Rachel-Taylor',
  robert: 'Robert-Johnson',
  sarah: 'Sarah-Chen',
  stephanie: 'Stephanie-Miller',
  thomas: 'Thomas-Clark',
  william: 'William-Young',
} as const satisfies Record<string, DoctorAvatarId>

export type DoctorFirstName = keyof typeof DOCTOR_AVATAR_BY_FIRST_NAME

export function doctorAvatarIdFromFirstName(
  doctor: DoctorFirstName,
): DoctorAvatarId {
  return DOCTOR_AVATAR_BY_FIRST_NAME[doctor]
}

/** Vite / static: served from `public/avatars/doctors/`. */
export function doctorAvatarSrc(id: DoctorAvatarId): string {
  const base = import.meta.env.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  return `${normalizedBase}avatars/doctors/${id}.png`
}

export function doctorAvatarSrcForDoctor(doctor: DoctorFirstName): string {
  return doctorAvatarSrc(doctorAvatarIdFromFirstName(doctor))
}

function splitStem(stem: string): string[] {
  return stem.split('-').filter(Boolean)
}

/** e.g. `Emily-Thompson` → "Emily Thompson" */
export function doctorAvatarDisplayName(id: DoctorAvatarId): string {
  return splitStem(id)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ')
}

/** Up to two initials from the display name. */
export function doctorAvatarInitials(id: DoctorAvatarId): string {
  const parts = doctorAvatarDisplayName(id).split(/\s+/).filter(Boolean)
  return parts
    .slice(0, 2)
    .map((p) => p.charAt(0).toUpperCase())
    .join('')
}

export function isDoctorAvatarId(value: string): value is DoctorAvatarId {
  return (DOCTOR_AVATAR_IDS as readonly string[]).includes(value)
}

export function isDoctorFirstName(value: string): value is DoctorFirstName {
  return Object.prototype.hasOwnProperty.call(DOCTOR_AVATAR_BY_FIRST_NAME, value)
}
