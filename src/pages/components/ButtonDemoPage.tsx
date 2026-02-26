import { Button, Flex, Text } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";

export function ButtonDemoPage() {
  return (
    <DocPageLayout
      title="Button"
      description="Buttons trigger primary and secondary actions. Use appearance to communicate emphasis and intent."
    >
      <Flex direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Variants
        </Text>
        <Flex alignItems="center" gap="12" wrap>
          <Button appearance="primary" label="Primary" />
          <Button appearance="soft" label="Soft" />
          <Button appearance="outline" label="Outline" />
          <Button appearance="text" label="Text" />
          <Button appearance="ghost" label="Ghost" />
          <Button appearance="destructive" label="Destructive" />
        </Flex>
      </Flex>

      <Flex direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Common Patterns
        </Text>
        <Flex alignItems="center" gap="12" wrap>
          <Button icon="Plus" layout="icon-left" label="Add User" />
          <Button icon="ArrowRight" layout="icon-right" label="Continue" />
          <Button icon="Trash" layout="icon-only" label="Delete" aria-label="Delete item" />
        </Flex>
      </Flex>
    </DocPageLayout>
  );
}
