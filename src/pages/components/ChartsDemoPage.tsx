import { useEffect, useMemo, useState } from "react";
import { Divider } from "../../design-system/components/Divider";
import { Flex } from "../../design-system/components/Flex";
import { Text } from "../../design-system/components/Text";
import { DocPageLayout } from "../docs/DocPageLayout";
import { ComponentPropsTable, type ComponentPropRow } from "../docs/ComponentPropsTable";

const CHARTS_PROPS: ComponentPropRow[] = [
  {
    prop: "data",
    type: "Record<string, string | number>[]",
    defaultValue: "-",
    description: "Chart rows consumed by BizCharts geometry components.",
  },
  {
    prop: "xField",
    type: "string",
    defaultValue: '"x"',
    description: "Key used for horizontal/category values.",
  },
  {
    prop: "yField",
    type: "string",
    defaultValue: '"y"',
    description: "Key used for numeric/vertical values.",
  },
  {
    prop: "seriesField / colorField",
    type: "string",
    defaultValue: "-",
    description: "Optional key used to split series and color categories.",
  },
  {
    prop: "height",
    type: "number",
    defaultValue: "320",
    description: "Chart canvas height.",
  },
  {
    prop: "autoFit",
    type: "boolean",
    defaultValue: "true",
    description: "Automatically fits chart width to its container.",
  },
];

const lineData = [
  { month: "Jan", value: 32, series: "Applications" },
  { month: "Feb", value: 45, series: "Applications" },
  { month: "Mar", value: 38, series: "Applications" },
  { month: "Apr", value: 54, series: "Applications" },
  { month: "May", value: 61, series: "Applications" },
  { month: "Jun", value: 73, series: "Applications" },
];

const barData = [
  { month: "Jan", value: 12, series: "Placements" },
  { month: "Feb", value: 19, series: "Placements" },
  { month: "Mar", value: 15, series: "Placements" },
  { month: "Apr", value: 22, series: "Placements" },
  { month: "May", value: 28, series: "Placements" },
  { month: "Jun", value: 31, series: "Placements" },
];

const doughnutData = [
  { type: "Completed", value: 62 },
  { type: "In Progress", value: 28 },
  { type: "Blocked", value: 10 },
];

const CHART_CONTAINER_STYLE = { width: "100%", height: "320px" } as const;
const DOUGHNUT_CONTAINER_STYLE = { width: "100%", height: "320px", maxWidth: "560px" } as const;

export function ChartsDemoPage() {
  const [chartsModule, setChartsModule] = useState<null | typeof import("../../design-system/charts")>(null);

  useEffect(() => {
    let mounted = true;
    import("../../design-system/charts").then((mod) => {
      if (mounted) setChartsModule(mod);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const ChartContent = useMemo(() => {
    if (!chartsModule) {
      return (
        <Text as="p" variant="body-14" leading="regular">
          Loading charts...
        </Text>
      );
    }

    const { UDSLineChart, UDSBarChart, UDSDoughnutChart } = chartsModule;
    return (
      <>
        <Flex direction="column" gap="10">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Line Chart
          </Text>
          <Text as="p" variant="body-14" leading="regular">
            Useful for visualizing trends over time.
          </Text>
          <div style={CHART_CONTAINER_STYLE}>
            <UDSLineChart data={lineData} xField="month" yField="value" seriesField="series" />
          </div>
        </Flex>

        <Divider variant="solid" />

        <Flex direction="column" gap="10">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Bar Chart
          </Text>
          <Text as="p" variant="body-14" leading="regular">
            Compare totals across categories.
          </Text>
          <div style={CHART_CONTAINER_STYLE}>
            <UDSBarChart data={barData} xField="month" yField="value" seriesField="series" />
          </div>
        </Flex>

        <Divider variant="solid" />

        <Flex direction="column" gap="10">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Doughnut Chart
          </Text>
          <Text as="p" variant="body-14" leading="regular">
            Show part-to-whole distribution for a single set.
          </Text>
          <div style={DOUGHNUT_CONTAINER_STYLE}>
            <UDSDoughnutChart data={doughnutData} angleField="value" colorField="type" />
          </div>
        </Flex>
      </>
    );
  }, [chartsModule]);

  return (
    <DocPageLayout
      title="Charts"
      description="Charts are documented with BizCharts using UDS layout and typography for consistent presentation."
    >
      <Flex direction="column" gap="40">
        {ChartContent}
      </Flex>

      <Divider variant="solid" />
      <ComponentPropsTable rows={CHARTS_PROPS} title="BizCharts Adapter Props" />
    </DocPageLayout>
  );
}
