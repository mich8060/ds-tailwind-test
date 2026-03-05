# ButtonGroup

Groups related actions using the `Button` component with shared spacing and orientation.

## Props

- `options?: ButtonGroupOption[]`
  - `appearance` is intentionally not supported on options; all grouped buttons render as `outline`
- `orientation?: "horizontal" | "vertical"` (default: `"horizontal"`)
- `size?: "xsmall" | "small" | "default" | "large"` (default: `"default"`)
- `disabled?: boolean` (default: `false`)
- `className?: string`

## Usage

```tsx
<ButtonGroup
  options={[
    { id: "cancel", label: "Cancel" },
    { id: "save", label: "Save" },
  ]}
/>
```
