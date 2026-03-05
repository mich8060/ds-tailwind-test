import { Branding, Button, Code, Divider, Flex, Text, Toolbar } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";
import { ComponentPropsTable, type ComponentPropRow } from "../docs/ComponentPropsTable";

const TOOLBAR_PROPS: ComponentPropRow[] = [
  { prop: "left", type: "ReactNode", defaultValue: "-", description: "Content rendered in the left slot." },
  { prop: "right", type: "ReactNode", defaultValue: "-", description: "Content rendered in the right slot." },
  { prop: "title", type: "ReactNode", defaultValue: "-", description: "Centered title content when `center` and `branding` are not provided." },
  { prop: "branding", type: "ReactNode", defaultValue: "-", description: "Centered branding content when `center` is not provided." },
  { prop: "center", type: "ReactNode", defaultValue: "-", description: "Explicit centered content. Takes priority over `branding` and `title`." },
  { prop: "className", type: "string", defaultValue: '""', description: "Optional additional classes for the root element." },
];

const TITLE_SNIPPET = `<Toolbar
  left={<Button appearance="outline" label="Back" icon="ArrowLeft" layout="icon-left" />}
  title="Candidates"
  right={<Button label="Add Candidate" />}
/>\n`;

const BRANDING_SNIPPET = `<Toolbar
  left={<Button appearance="outline" label="Menu" icon="List" layout="icon-left" />}
  branding={<Branding brand="connect" symbol />}
  right={<Button appearance="soft" label="Export" icon="DownloadSimple" layout="icon-left" />}
/>\n`;

export function ToolbarDemoPage() {
  return (
    <DocPageLayout
      title="Toolbar"
      description="Toolbar creates a top bar with left and right actions and centered title or branding."
    >
      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Centered Title
        </Text>
        <Toolbar
          left={<Button appearance="outline" label="Back" icon="ArrowLeft" layout="icon-left" />}
          title="Candidates"
          right={<Button label="Add Candidate" />}
        />
        <Code language="tsx" code={TITLE_SNIPPET} />
      </Flex>

      <Divider variant="solid" />

      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Centered Branding
        </Text>
        <Toolbar
          left={<Button appearance="outline" label="Menu" icon="List" layout="icon-left" />}
          branding={<Branding brand="connect" symbol />}
          right={<Button appearance="soft" label="Export" icon="DownloadSimple" layout="icon-left" />}
        />
        <Code language="tsx" code={BRANDING_SNIPPET} />
      </Flex>

      <Divider variant="solid" />
      <ComponentPropsTable rows={TOOLBAR_PROPS} title="Toolbar Props" />
    </DocPageLayout>
  );
}
