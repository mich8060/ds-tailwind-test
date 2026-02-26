# ProgressIndicator

Linear progress bar for showing completion or loading state.

## When to Use
- File upload progress, form completion
- Loading indicators
- Any linear progress visualization

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Progress percentage (0–100) |
| `variant` | `string` | `"determinate"` | `"determinate"` or `"indeterminate"` |
| `color` | `string` | `"blue"` | Bar color |
| `size` | `string` | `"default"` | `"small"`, `"default"`, `"large"` |
| `showLabel` | `boolean` | `false` | Show percentage text |
| `className` | `string` | `""` | Additional CSS classes |

## Examples

```jsx
<ProgressIndicator value={60} showLabel />
<ProgressIndicator variant="indeterminate" /> {/* Animated loading bar */}
<ProgressIndicator value={100} color="green" />
```
