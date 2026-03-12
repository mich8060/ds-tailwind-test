import React, { useEffect, useState } from "react";
import "./_branding.scss";

import DesignSystemLogo from "../../assets/svg/design-system.svg?raw";
import ConnectLogo from "../../assets/svg/connect.svg?raw";
import CompHealthLogo from "../../assets/svg/comphealth.svg?raw";
import WeatherbyLogo from "../../assets/svg/weatherby.svg?raw";
import ModioLogo from "../../assets/svg/modio.svg?raw";
import LocumsmartLogo from "../../assets/svg/locumsmart.svg?raw";
import WireframeLogo from "../../assets/svg/wireframe.svg?raw";

import DesignSystemSymbol from "../../assets/svg/design-system-symbol.svg?raw";
import ConnectSymbol from "../../assets/svg/connect-symbol.svg?raw";
import CompHealthSymbol from "../../assets/svg/comphealth-symbol.svg?raw";
import WeatherbySymbol from "../../assets/svg/weatherby-symbol.svg?raw";
import ModioSymbol from "../../assets/svg/modio-symbol.svg?raw";
import LocumsmartSymbol from "../../assets/svg/locumsmart-symbol.svg?raw";
import WireframeSymbol from "../../assets/svg/wireframe-symbol.svg?raw";
import type { BrandingProps } from "./Branding.types";

const BASE_CLASS = "uds-branding";
type BrandAsset = { svg: string; alt: string };

/** Built-in brand key → inline SVG component mapping */
const BRAND_LOGOS: Record<string, BrandAsset> = {
    "design-system": { svg: DesignSystemLogo, alt: "Unified Design System" },
    connect: { svg: ConnectLogo, alt: "CHG Connect" },
    comphealth: { svg: CompHealthLogo, alt: "CompHealth" },
    weatherby: { svg: WeatherbyLogo, alt: "Weatherby Healthcare" },
    modio: { svg: ModioLogo, alt: "modio" },
    locumsmart: { svg: LocumsmartLogo, alt: "Locumsmart" },
    chg: { svg: WireframeLogo, alt: "CHG" },
    wireframe: { svg: WireframeLogo, alt: "Wireframe" },
};

/** Built-in brand key → symbol/icon SVG component mapping */
const BRAND_SYMBOLS: Record<string, BrandAsset> = {
    "design-system": { svg: DesignSystemSymbol, alt: "Unified Design System" },
    connect: { svg: ConnectSymbol, alt: "CHG Connect" },
    comphealth: { svg: CompHealthSymbol, alt: "CompHealth" },
    weatherby: { svg: WeatherbySymbol, alt: "Weatherby Healthcare" },
    modio: { svg: ModioSymbol, alt: "modio" },
    locumsmart: { svg: LocumsmartSymbol, alt: "Locumsmart" },
    chg: { svg: WireframeSymbol, alt: "CHG" },
    wireframe: { svg: WireframeSymbol, alt: "Wireframe" },
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
 *                            "weatherby" | "modio" | "locumsmart" | "chg" | "wireframe"
 * @param {boolean} symbol  - When true, renders only the brand symbol/icon instead
 *                            of the full logo. Defaults to false (full logo).
 * @param {boolean} inherit - When true, ignores `brand` prop and automatically uses
 *                            the active brand from the `data-brand` attribute on <html>.
 * @param {string}  size    - Size variant: "small" | "default" | "large"
 * @param {string}  className - Additional CSS classes
 */
export default function Branding({
    brand,
    symbol = false,
    inherit = false,
    size = "default",
    className = "",
    ...props
}: BrandingProps) {
    const [activeBrand, setActiveBrand] = useState<string | null>(null);

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

    const resolvedBrand = inherit ? activeBrand : (typeof brand === "string" ? brand : null);
    const isSymbol = symbol;
    const brandMap = isSymbol ? BRAND_SYMBOLS : BRAND_LOGOS;
    const brandData = resolvedBrand ? brandMap[resolvedBrand] : null;

    if (!brandData) {
        if (resolvedBrand) {
            console.warn(`Branding: "${resolvedBrand}" is not a recognized brand key.`);
        }
        return null;
    }

    const { svg, alt } = brandData;

    const classNames = [
        BASE_CLASS,
        `${BASE_CLASS}--${size}`,
        isSymbol ? `${BASE_CLASS}--symbol` : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classNames} {...props}>
            <span
                className={`${BASE_CLASS}__logo`}
                role="img"
                aria-label={alt}
                dangerouslySetInnerHTML={{ __html: svg }}
            />
        </div>
    );
}
