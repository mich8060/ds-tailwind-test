'use client'

import * as React from 'react'

import {
  Avatar,
  AvatarCameraAction,
  AvatarFallback,
  AvatarImage,
  AvatarStatus,
  type AvatarCameraActionProps,
} from '@/components/ui/avatar-uds'
import type { DotStatusVariant } from '@/components/ui/dot-status'
import {
  doctorAvatarDisplayName,
  doctorAvatarIdFromFirstName,
  doctorAvatarInitials,
  doctorAvatarSrc,
  type DoctorFirstName,
} from '@/lib/doctor-avatars'
import { cn } from '@/lib/utils'

export type DoctorAvatarImageProps = Omit<
  React.ComponentProps<typeof AvatarImage>,
  'src'
> & {
  /** Lowercase first name, e.g. `"emily"` → Emily Thompson portrait. */
  doctor: DoctorFirstName
}

/**
 * Avatar image restricted to curated `/public/avatars/doctors/*.png` assets.
 */
export function DoctorAvatarImage({
  doctor,
  className,
  alt,
  ...props
}: DoctorAvatarImageProps) {
  const id = doctorAvatarIdFromFirstName(doctor)
  const resolvedAlt =
    alt ?? `Portrait of ${doctorAvatarDisplayName(id)}`
  return (
    <AvatarImage
      src={doctorAvatarSrc(id)}
      alt={resolvedAlt}
      className={cn(className)}
      {...props}
    />
  )
}

export type DoctorAvatarProps = React.ComponentProps<typeof Avatar> & {
  /** Lowercase first name, e.g. `"emily"`. */
  doctor: DoctorFirstName
  /** If omitted, initials are derived from the doctor’s full name (e.g. Emily Thompson → ET). */
  fallback?: React.ReactNode
  /** When set, shows `AvatarStatus` (`DotStatus`) at the bottom-right. */
  status?: DotStatusVariant
  /** Passed to `AvatarStatus` when `status` is set. */
  statusOutline?: boolean
  /** Renders `AvatarCameraAction` (round camera button); pass `onClick` and other `<button>` props. */
  cameraAction?: AvatarCameraActionProps
}

/**
 * Full avatar using a curated doctor photo and matching fallback initials.
 */
export function DoctorAvatar({
  doctor,
  fallback,
  status,
  statusOutline = false,
  cameraAction,
  className,
  ...avatarProps
}: DoctorAvatarProps) {
  const id = doctorAvatarIdFromFirstName(doctor)
  return (
    <Avatar className={cn(className)} {...avatarProps}>
      <DoctorAvatarImage doctor={doctor} />
      <AvatarFallback>
        {fallback ?? doctorAvatarInitials(id)}
      </AvatarFallback>
      {status ? (
        <AvatarStatus variant={status} outline={statusOutline} />
      ) : null}
      {cameraAction != null ? (
        <AvatarCameraAction {...cameraAction} />
      ) : null}
    </Avatar>
  )
}

export type { DoctorAvatarId, DoctorFirstName } from '@/lib/doctor-avatars'
