import { Code, Divider, Flex, Statistics, Text } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";
import { ComponentPropsTable, type ComponentPropRow } from "../docs/ComponentPropsTable";

const STATISTICS_PROPS: ComponentPropRow[] = [
  { prop: "label", type: "ReactNode", defaultValue: "-", description: "Metric label/title text." },
  { prop: "value", type: "ReactNode", defaultValue: "-", description: "Primary KPI value." },
  { prop: "statusLabel", type: "ReactNode", defaultValue: "-", description: "Optional context row shown above the value." },
  { prop: "helperText", type: "ReactNode", defaultValue: "-", description: "Optional supporting context under the value." },
  { prop: "changeText", type: "ReactNode", defaultValue: "-", description: "Optional change indicator text." },
  { prop: "trend", type: '"up" | "down" | "neutral"', defaultValue: '"neutral"', description: "Color and icon direction for change row." },
  { prop: "icon", type: "string", defaultValue: "-", description: "Optional icon name shown in the leading icon tile." },
  { prop: "actionIcon", type: "string", defaultValue: "-", description: "Optional top-right action icon." },
  { prop: "labelBoxColor", type: "string", defaultValue: "-", description: "Optional CSS color value for the label icon tile background." },
  { prop: "showAccentRail", type: "boolean", defaultValue: "true", description: "Shows or hides the left accent rail." },
  { prop: "hideAccentRail", type: "boolean", defaultValue: "false", description: "Hides the left accent rail entirely (overrides showAccentRail)." },
  { prop: "accent", type: '"brand" | "success" | "warning" | "danger" | "neutral"', defaultValue: '"neutral"', description: "Left accent rail color." },
  { prop: "progressValue", type: "number", defaultValue: "-", description: "Optional progress bar percentage (0-100)." },
  { prop: "progressLabel", type: "ReactNode", defaultValue: "-", description: "Label shown next to the progress bar." },
  { prop: "progressDelta", type: "ReactNode", defaultValue: "-", description: "Optional change value shown at row end." },
];

const FULL_CARD_SNIPPET = `<Statistics
  label="Total Revenue"
  statusLabel="CDN Cache"
  value="$45,290"
  helperText="12% increase from previous period"
  icon="CornersOut"
  actionIcon="CornersOut"
  accent="danger"
  progressValue={30}
  progressLabel="Improving"
  progressDelta="+8%"
/>`;

const MINIMAL_SNIPPET = `<Statistics
  label="Open Requisitions"
  value="42"
  helperText="Current month"
  hideAccentRail
/>`;

const TREND_ONLY_SNIPPET = `<Statistics
  label="Avg Time to Fill"
  statusLabel="Operational"
  value="17d"
  helperText="Rolling 30-day average"
  changeText="No change"
  trend="neutral"
  icon="Clock"
  actionIcon="ArrowsOut"
  accent="success"
/>`;

const LABEL_BOX_COLOR_SNIPPET = `<Statistics
  label="Pipeline Velocity"
  value="84%"
  icon="Gauge"
  labelBoxColor="var(--uds-system-success-subtle)"
/>`;

const HIDE_RAIL_SNIPPET = `<Statistics
  label="Open Requisitions"
  value="42"
  hideAccentRail
/>`;

export function StatisticsDemoPage() {
  return (
    <DocPageLayout title="Statistics" description="Statistics presents KPI values with optional trend and helper context.">
      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">Dashboard Card</Text>
        <Statistics
          label="Total Revenue"
          statusLabel="CDN Cache"
          value="$45,290"
          helperText="12% increase from previous period"
          icon="CornersOut"
          actionIcon="CornersOut"
          accent="danger"
          progressValue={30}
          progressLabel="Improving"
          progressDelta="+8%"
        />
        <Code language="tsx" code={FULL_CARD_SNIPPET} />
      </Flex>

      <Divider variant="solid" />

      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">Minimal (Conditional Sections Hidden)</Text>
        <Statistics
          label="Open Requisitions"
          value="42"
          helperText="Current month"
          hideAccentRail
        />
        <Code language="tsx" code={MINIMAL_SNIPPET} />
      </Flex>

      <Divider variant="solid" />

      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">Trend</Text>
        <Statistics
          label="Avg Time to Fill"
          statusLabel="Operational"
          value="17d"
          helperText="Rolling 30-day average"
          changeText="No change"
          trend="neutral"
          icon="Clock"
          actionIcon="ArrowsOut"
          accent="success"
        />
        <Code language="tsx" code={TREND_ONLY_SNIPPET} />
      </Flex>

      <Divider variant="solid" />

      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">Custom Label Box Color</Text>
        <Statistics
          label="Pipeline Velocity"
          value="84%"
          icon="Gauge"
          labelBoxColor="var(--uds-system-success-subtle)"
        />
        <Code language="tsx" code={LABEL_BOX_COLOR_SNIPPET} />
      </Flex>

      <Divider variant="solid" />

      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">Hide Accent Rail</Text>
        <Statistics
          label="Open Requisitions"
          value="42"
          hideAccentRail
        />
        <Code language="tsx" code={HIDE_RAIL_SNIPPET} />
      </Flex>

      <Divider variant="solid" />
      <ComponentPropsTable rows={STATISTICS_PROPS} title="Statistics Props" />
    </DocPageLayout>
  );
}
