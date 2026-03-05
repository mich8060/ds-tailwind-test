# CheckboxGroup

Wraps multiple `Checkbox` options for multi-select choice sets.

## Props

- `options: { value: string; label: ReactNode; disabled?: boolean }[]`
- `values?: string[]`
- `defaultValues?: string[]`
- `onChange?: (values: string[]) => void`
- `label?: ReactNode`
- `orientation?: "vertical" | "horizontal"` (default: `"vertical"`)
- `disabled?: boolean` (default: `false`)

## Usage

```tsx
<CheckboxGroup
  label="Specialties"
  defaultValues={["anesthesiology"]}
  options={[
    { value: "anesthesiology", label: "Anesthesiology" },
    { value: "cardiology", label: "Cardiology" },
  ]}
/>
```
