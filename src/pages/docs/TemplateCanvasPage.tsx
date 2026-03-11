import { Button } from "../../design-system/components/Button";
import { Container } from "../../design-system/components/Container";
import { Flex } from "../../design-system/components/Flex";
import { Text } from "../../design-system/components/Text";
import { Toolbar } from "../../design-system/components/Toolbar";

const CANVAS_STYLE: React.CSSProperties = {
  width: "100%",
  minHeight: "calc(100vh - 180px)",
  border: "1px dashed var(--uds-border-primary)",
  borderRadius: "var(--uds-radius-8)",
  background: "var(--uds-surface-secondary)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "var(--uds-spacing-24)",
};

export function TemplateCanvasPage() {
  return (
    <Container appearance="transparent" padding="large">
      <Flex direction="column" gap="16">
        <Toolbar
          title="Template Canvas"
          right={<Button appearance="primary" label="Generate Layout" />}
        />
        <Text as="p" variant="body-16">
          Canvas workspace for template-first layout composition.
        </Text>
        <div style={CANVAS_STYLE}>
          <Flex direction="column" gap="8" alignItems="center">
            <Text as="h2" variant="heading-24" weight="medium">
              Canvas Ready
            </Text>
            <Text as="p" variant="body-14">
              Select a template and render your page structure here.
            </Text>
          </Flex>
        </div>
      </Flex>
    </Container>
  );
}
