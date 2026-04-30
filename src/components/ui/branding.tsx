import * as React from "react"

import { cn } from "@/lib/utils"

const svgRoot = "/branding/svg"

export type BrandingAppearance =
  | "Connect"
  | "Locumsmart"
  | "Wireframe"
  | "MyWeatherby"
  | "MyCompHealth"
  | "Modio"
  | "Design System"

const SVG_ASSETS: Record<BrandingAppearance, { mark: string; wordmark: string }> =
  {
  Wireframe: {
    mark: "wireframe-brand-mark.svg",
    wordmark: "wireframe-wordmark.svg",
  },
  Connect: {
    mark: "connect-brand-mark.svg",
    wordmark: "connect-wordmark.svg",
  },
  Locumsmart: {
    mark: "locumsmart-brand-mark.svg",
    wordmark: "locumsmart-wordmark.svg",
  },
  Modio: {
    mark: "modio-brand-mark.svg",
    wordmark: "modio-wordmark.svg",
  },
  MyWeatherby: {
    mark: "weatherby-brand-mark.svg",
    wordmark: "weatherby-wordmark.svg",
  },
  MyCompHealth: {
    mark: "comphealth-brand-mark.svg",
    wordmark: "comphealth-wordmark.svg",
  },
  "Design System": {
    mark: "unified-design-system-brand-mark.svg",
    wordmark: "unified-design-system-wordmark.svg",
  },
}

export type BrandingProps = React.ComponentProps<"div"> & {
  /** Product / brand row from the design system. */
  appearance?: BrandingAppearance
  /** When true, render the square mark only (64×64). Otherwise full wordmark (200×80). */
  symbol?: boolean
  /** Wordmark only: how artwork sits in the frame (`start` matches typical left-aligned lockups). */
  wordmarkAlign?: "start" | "center"
}

function Branding({
  className,
  appearance = "Wireframe",
  symbol = false,
  wordmarkAlign = "start",
  ...props
}: BrandingProps) {
  const label =
    appearance === "Design System"
      ? symbol
        ? "UNIFIED DS mark"
        : "UNIFIED DS logo"
      : `${appearance}${symbol ? " mark" : " logo"}`

  const file = symbol ? SVG_ASSETS[appearance].mark : SVG_ASSETS[appearance].wordmark
  const src = `${svgRoot}/${file}`

  return (
    <div
      data-slot="branding"
      data-appearance={appearance}
      data-symbol={symbol ? "true" : "false"}
      role="img"
      aria-label={label}
      className={cn(
        "relative flex overflow-hidden",
        symbol
          ? "size-16 shrink-0 items-center justify-center"
          : wordmarkAlign === "center"
            ? "h-20 w-[200px] shrink-0 items-center justify-center"
            : "h-20 w-[200px] shrink-0 items-center justify-start",
        className
      )}
      {...props}
    >
      <img
        alt=""
        src={src}
        draggable={false}
        className={cn(
          "h-full w-full object-contain",
          symbol || wordmarkAlign === "center" ? "object-center" : "object-left",
          "dark:brightness-0 dark:invert"
        )}
      />
    </div>
  )
}

export { Branding }
