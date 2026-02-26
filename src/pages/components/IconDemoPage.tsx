import { Flex, Icon, Text } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";

const sampleIcons = ["House", "User", "Bell", "Gear", "Calendar", "CheckCircle"];

export function IconDemoPage() {
  return (
    <DocPageLayout
      title="Icon"
      description="Icon wraps Phosphor iconography and supports consistent sizing and appearance options."
    >
      <Flex direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Appearances
        </Text>
        <Flex alignItems="center" gap="16" wrap>
          <Icon name="WarningCircle" appearance="regular" />
          <Icon name="WarningCircle" appearance="bold" />
          <Icon name="WarningCircle" appearance="duotone" />
          <Icon name="WarningCircle" appearance="fill" />
        </Flex>
      </Flex>

      <Flex direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Icon Set Sample
        </Text>
        <Flex alignItems="center" gap="16" wrap>
          {sampleIcons.map((name) => (
            <Flex key={name} direction="column" alignItems="center" gap="4">
              <Icon name={name} size={24} />
              <Text as="span" variant="body-12" leading="regular">
                {name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </DocPageLayout>
  );
}
