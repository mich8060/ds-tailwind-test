import { Branding, Flex, Text } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";

const BRANDS = [
  "design-system",
  "connect",
  "comphealth",
  "weatherby",
  "modio",
  "locumsmart",
  "wireframe",
] as const;

export function BrandingDemoPage() {
  return (
    <DocPageLayout
      title="Branding"
      description="Branding renders full logos and symbols for each supported brand identity."
    >
      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Full Logos
        </Text>
        <Flex direction="column" gap="12">
          {BRANDS.map((brand) => (
            <Flex key={`logo-${brand}`} alignItems="center" gap="12">
              <Text as="span" variant="body-14" weight="medium" leading="regular">
                {brand}
              </Text>
              <Branding brand={brand} />
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Symbols
        </Text>
        <Flex alignItems="center" gap="16" wrap>
          {BRANDS.map((brand) => (
            <Branding key={`symbol-${brand}`} brand={brand} symbol />
          ))}
        </Flex>
      </Flex>
    </DocPageLayout>
  );
}
