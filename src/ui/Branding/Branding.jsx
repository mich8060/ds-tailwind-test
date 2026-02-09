import React, { useEffect, useState } from "react";
import "./Branding.scss";

import { ReactComponent as DesignSystemLogo } from "../../assets/svg/design-system.svg";
import { ReactComponent as ConnectLogo } from "../../assets/svg/connect.svg";
import { ReactComponent as CompHealthLogo } from "../../assets/svg/comphealth.svg";
import { ReactComponent as WeatherbyLogo } from "../../assets/svg/weatherby.svg";
import { ReactComponent as ModioLogo } from "../../assets/svg/modio.svg";
import { ReactComponent as LocumsmartLogo } from "../../assets/svg/locumsmart.svg";
import { ReactComponent as WireframeLogo } from "../../assets/svg/wireframe.svg";

const BASE_CLASS = "uds-branding";

/** Built-in brand key → inline SVG component mapping */
const BRAND_LOGOS = {
  "design-system": { Component: DesignSystemLogo, alt: "Unified Design System" },
  connect: { Component: ConnectLogo, alt: "CHG Connect" },
  comphealth: { Component: CompHealthLogo, alt: "CompHealth" },
  weatherby: { Component: WeatherbyLogo, alt: "Weatherby Healthcare" },
  modio: { Component: ModioLogo, alt: "modio" },
  locumsmart: { Component: LocumsmartLogo, alt: "Locumsmart" },
  wireframe: { Component: WireframeLogo, alt: "Wireframe" },
};

/**
 * Branding component — displays a single brand logo as inline SVG.
 * Colors are driven by CSS custom properties (--uds-brands-*) so they
 * can be themed for light / dark mode.
 *
 * Works like <Icon name="House" /> but for brand logos:
 *   <Branding brand="connect" />
 *
 * @param {string}  brand   - Brand key: "design-system" | "connect" | "comphealth" |
 *                            "weatherby" | "modio" | "locumsmart" | "wireframe"
 * @param {boolean} inherit - When true, ignores `brand` prop and automatically uses
 *                            the active brand from the `data-brand` attribute on <html>.
 * @param {string}  size    - Size variant: "small" | "default" | "large"
 * @param {string}  className - Additional CSS classes
 */
export default function Branding({
  brand,
  inherit = false,
  size = "default",
  className = "",
  ...props
}) {
  const [activeBrand, setActiveBrand] = useState(null);

  useEffect(() => {
    if (!inherit) return;

    const root = document.documentElement;
    setActiveBrand(root.getAttribute("data-brand"));

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-brand"
        ) {
          setActiveBrand(root.getAttribute("data-brand"));
        }
      }
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-brand"],
    });
    return () => observer.disconnect();
  }, [inherit]);

  const resolvedBrand = inherit ? activeBrand : brand;
  const brandData = resolvedBrand && BRAND_LOGOS[resolvedBrand];

  if (!brandData) {
    if (resolvedBrand) {
      console.warn(`Branding: "${resolvedBrand}" is not a recognized brand key.`);
    }
    return null;
  }

  const { Component: LogoComponent, alt } = brandData;

  const classNames = [BASE_CLASS, `${BASE_CLASS}--${size}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      <LogoComponent
        className={`${BASE_CLASS}__logo`}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
