# Statistics

Displays a metric/KPI value with optional helper copy, trend indicator, and icon.

## Props

- `label?: ReactNode`
- `value?: ReactNode`
- `helperText?: ReactNode`
- `changeText?: ReactNode`
- `trend?: "up" | "down" | "neutral"` (default: `"neutral"`)
- `icon?: string`
- `iconAccent?: "amber" | "aqua" | "blue" | "cyan" | "emerald" | "fuchsia" | "green" | "indigo" | "lime" | "magenta" | "orange" | "purple" | "red" | "rose" | "sky" | "violet" | "yellow"` (uses accent `50` background and `600` icon color)
- `labelBoxColor?: string` (optional CSS color value for the label icon tile background)
- `progressValue?: number`
- `progressLabel?: ReactNode`

## Usage

```tsx
<Statistics
  label="Total Placements"
  value="1,284"
  helperText="Compared to last quarter"
  changeText="+12.8%"
  trend="up"
  icon="ChartLineUp"
  iconAccent="green"
  progressValue={72}
  progressLabel="On track"
/>
```
