import { memo, type CSSProperties } from "react";
import {
  Chart,
  Coordinate,
  Interval,
  Legend,
  Line,
  Point,
  Polygon,
  Tooltip,
} from "bizcharts";

type ChartDatum = Record<string, string | number>;

interface BaseChartProps {
  data: ChartDatum[];
  height?: number;
  autoFit?: boolean;
  className?: string;
  style?: CSSProperties;
}

interface CartesianChartProps extends BaseChartProps {
  xField?: string;
  yField?: string;
  seriesField?: string;
}

interface PieChartProps extends BaseChartProps {
  angleField?: string;
  colorField?: string;
}

interface ScatterChartProps extends BaseChartProps {
  xField?: string;
  yField?: string;
  colorField?: string;
  sizeField?: string;
}

const defaultChartStyle: CSSProperties = { width: "100%" };

function UDSLineChartComponent({
  data,
  xField = "x",
  yField = "y",
  seriesField,
  height = 320,
  autoFit = true,
  className,
  style,
}: CartesianChartProps) {
  return (
    <Chart
      data={data}
      autoFit={autoFit}
      height={height}
      className={className}
      style={{ ...defaultChartStyle, ...style }}
    >
      <Tooltip shared />
      <Legend />
      <Line position={`${xField}*${yField}`} color={seriesField} />
      <Point position={`${xField}*${yField}`} color={seriesField} />
    </Chart>
  );
}
export const UDSLineChart = memo(UDSLineChartComponent);

function UDSBarChartComponent({
  data,
  xField = "x",
  yField = "y",
  seriesField,
  height = 320,
  autoFit = true,
  className,
  style,
}: CartesianChartProps) {
  return (
    <Chart
      data={data}
      autoFit={autoFit}
      height={height}
      className={className}
      style={{ ...defaultChartStyle, ...style }}
    >
      <Tooltip shared />
      <Legend />
      <Interval position={`${xField}*${yField}`} color={seriesField} />
    </Chart>
  );
}
export const UDSBarChart = memo(UDSBarChartComponent);

function UDSPieChartComponent({
  data,
  angleField = "value",
  colorField = "type",
  height = 320,
  autoFit = true,
  className,
  style,
}: PieChartProps) {
  return (
    <Chart
      data={data}
      autoFit={autoFit}
      height={height}
      className={className}
      style={{ ...defaultChartStyle, ...style }}
    >
      <Coordinate type="theta" radius={0.85} />
      <Tooltip showTitle={false} />
      <Legend />
      <Interval position={angleField} color={colorField} adjust="stack" />
    </Chart>
  );
}
export const UDSPieChart = memo(UDSPieChartComponent);

function UDSDoughnutChartComponent({
  data,
  angleField = "value",
  colorField = "type",
  height = 320,
  autoFit = true,
  className,
  style,
}: PieChartProps) {
  return (
    <Chart
      data={data}
      autoFit={autoFit}
      height={height}
      className={className}
      style={{ ...defaultChartStyle, ...style }}
    >
      <Coordinate type="theta" radius={0.85} innerRadius={0.62} />
      <Tooltip showTitle={false} />
      <Legend />
      <Interval position={angleField} color={colorField} adjust="stack" />
    </Chart>
  );
}
export const UDSDoughnutChart = memo(UDSDoughnutChartComponent);

function UDSScatterChartComponent({
  data,
  xField = "x",
  yField = "y",
  colorField,
  sizeField,
  height = 320,
  autoFit = true,
  className,
  style,
}: ScatterChartProps) {
  const position = `${xField}*${yField}`;
  return (
    <Chart
      data={data}
      autoFit={autoFit}
      height={height}
      className={className}
      style={{ ...defaultChartStyle, ...style }}
    >
      <Tooltip shared />
      <Legend />
      <Point
        position={position}
        color={colorField}
        size={sizeField}
        shape="circle"
      />
    </Chart>
  );
}
export const UDSScatterChart = memo(UDSScatterChartComponent);

export function UDSBubbleChart(props: ScatterChartProps) {
  return <UDSScatterChart {...props} />;
}

function UDSRadarChartComponent({
  data,
  xField = "x",
  yField = "y",
  seriesField,
  height = 320,
  autoFit = true,
  className,
  style,
}: CartesianChartProps) {
  return (
    <Chart
      data={data}
      autoFit={autoFit}
      height={height}
      className={className}
      style={{ ...defaultChartStyle, ...style }}
    >
      <Coordinate type="polar" radius={0.8} />
      <Tooltip shared />
      <Legend />
      <Line position={`${xField}*${yField}`} color={seriesField} />
      <Point position={`${xField}*${yField}`} color={seriesField} />
    </Chart>
  );
}
export const UDSRadarChart = memo(UDSRadarChartComponent);

function UDSPolarAreaChartComponent({
  data,
  xField = "x",
  yField = "y",
  seriesField,
  height = 320,
  autoFit = true,
  className,
  style,
}: CartesianChartProps) {
  return (
    <Chart
      data={data}
      autoFit={autoFit}
      height={height}
      className={className}
      style={{ ...defaultChartStyle, ...style }}
    >
      <Coordinate type="polar" radius={0.8} />
      <Tooltip shared />
      <Legend />
      <Polygon position={`${xField}*${yField}`} color={seriesField} />
    </Chart>
  );
}
export const UDSPolarAreaChart = memo(UDSPolarAreaChartComponent);
