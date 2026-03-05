# RadioGroup

Wraps multiple `Radio` options for a single-select choice.

## Props

- `options: { value: string; label: ReactNode; disabled?: boolean }[]`
- `value?: string`
- `defaultValue?: string`
- `onChange?: (value: string) => void`
- `name?: string`
- `label?: ReactNode`
- `orientation?: "vertical" | "horizontal"` (default: `"vertical"`)
- `disabled?: boolean` (default: `false`)

## Usage

```tsx
<RadioGroup
  label="Contact Method"
  defaultValue="email"
  options={[
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone" },
  ]}
/>
```
