import { useState } from "react";
import { DateRangeInput } from "../../design-system/components/DateRangeInput";
import { Divider } from "../../design-system/components/Divider";
import { Flex } from "../../design-system/components/Flex";
import { Text } from "../../design-system/components/Text";
import { DocPageLayout } from "../docs/DocPageLayout";
import { ComponentPropsTable, type ComponentPropRow } from "../docs/ComponentPropsTable";

const DATE_RANGE_INPUT_PROPS: ComponentPropRow[] = [
  { prop: "startValue", type: "string", defaultValue: "-", description: "Start date value in YYYY-MM-DD format." },
  { prop: "endValue", type: "string", defaultValue: "-", description: "End date value in YYYY-MM-DD format." },
  { prop: "onStartChange", type: "ChangeEventHandler<HTMLInputElement>", defaultValue: "-", description: "Called when the start date changes." },
  { prop: "onEndChange", type: "ChangeEventHandler<HTMLInputElement>", defaultValue: "-", description: "Called when the end date changes." },
  { prop: "size", type: '"default" | "compact"', defaultValue: '"default"', description: "Visual size variant." },
  { prop: "state", type: '"default" | "focused" | "error" | "disabled"', defaultValue: '"default"', description: "Visual state token." },
  { prop: "disabled", type: "boolean", defaultValue: "false", description: "Disables both date inputs." },
];

export function DateRangeInputDemoPage() {
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");

  return (
    <DocPageLayout
      title="DateRangeInput"
      description="DateRangeInput composes two date fields for start and end date selection."
    >
      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Basic Usage
        </Text>
        <DateRangeInput
          startValue={startValue}
          endValue={endValue}
          onStartChange={(event) => setStartValue(event.target.value)}
          onEndChange={(event) => setEndValue(event.target.value)}
        />
      </Flex>

      <Divider variant="solid" />

      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Size Variants
        </Text>
        <DateRangeInput startValue="2026-03-01" endValue="2026-03-07" size="default" />
        <DateRangeInput startValue="2026-03-01" endValue="2026-03-07" size="compact" />
      </Flex>

      <Divider variant="solid" />

      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          State Variants
        </Text>
        <DateRangeInput startValue="2026-03-01" endValue="2026-03-07" state="default" />
        <DateRangeInput startValue="2026-03-01" endValue="2026-03-07" state="focused" />
        <DateRangeInput startValue="2026-03-01" endValue="2026-03-07" state="error" />
        <DateRangeInput startValue="2026-03-01" endValue="2026-03-07" disabled />
      </Flex>

      <Divider variant="solid" />
      <ComponentPropsTable rows={DATE_RANGE_INPUT_PROPS} />
    </DocPageLayout>
  );
}
