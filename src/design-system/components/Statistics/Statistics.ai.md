# Statistics

Displays a metric/KPI value with optional helper copy, trend indicator, and icon.

## Props

- `label?: ReactNode`
- `value?: ReactNode`
- `statusLabel?: ReactNode`
- `helperText?: ReactNode`
- `changeText?: ReactNode`
- `trend?: "up" | "down" | "neutral"` (default: `"neutral"`)
- `icon?: string`
- `actionIcon?: string`
- `showAccentRail?: boolean` (default: `true`)
- `accent?: "brand" | "success" | "warning" | "danger" | "neutral"` (default: `"neutral"`)
- `progressValue?: number`
- `progressLabel?: ReactNode`
- `progressDelta?: ReactNode`

## Usage

```tsx
<Statistics
  label="Total Placements"
  statusLabel="Pipeline"
  value="1,284"
  helperText="Compared to last quarter"
  changeText="+12.8%"
  trend="up"
  icon="ChartLineUp"
  accent="success"
  progressValue={72}
  progressLabel="On track"
  progressDelta="+8%"
/>
```
