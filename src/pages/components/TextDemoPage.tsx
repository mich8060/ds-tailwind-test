import { Flex, Text } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";

export function TextDemoPage() {
  return (
    <DocPageLayout
      title="Text"
      description="Text defines hierarchy and readability. Choose variants by semantic role first, then adjust weight and leading."
    >
      <Flex direction="column" gap="8">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Heading Styles
        </Text>
        <Text as="p" variant="heading-32" weight="medium" leading="regular">
          Heading 32
        </Text>
        <Text as="p" variant="heading-24" weight="medium" leading="regular">
          Heading 24
        </Text>
      </Flex>

      <Flex direction="column" gap="8">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Body Styles
        </Text>
        <Text as="p" variant="body-16" weight="regular" leading="regular">
          Body 16: Use for primary descriptive copy and supporting documentation text.
        </Text>
        <Text as="p" variant="body-14" weight="regular" leading="regular">
          Body 14: Use for denser content areas like lists, compact forms, and metadata.
        </Text>
      </Flex>
    </DocPageLayout>
  );
}
