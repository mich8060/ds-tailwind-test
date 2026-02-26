# Datepicker

Calendar-based date selection input.

## When to Use
- Date fields in forms (birthdate, deadline, event date)
- Date range selection for filters or reports
- Any input that requires a date value

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Date\|string` | — | Selected date |
| `onChange` | `function` | — | Callback `(date: Date) => void` |
| `placeholder` | `string` | `"Select date"` | Placeholder text |
| `minDate` | `Date\|string` | — | Earliest selectable date |
| `maxDate` | `Date\|string` | — | Latest selectable date |
| `disabled` | `boolean` | `false` | Disabled state |
| `state` | `string` | `"default"` | `"default"`, `"error"`, `"disabled"` |
| `format` | `string` | `"MM/DD/YYYY"` | Display format |
| `className` | `string` | `""` | Additional CSS classes |

## Examples

```jsx
<Datepicker value={date} onChange={setDate} placeholder="Choose a date" />
```

### With min/max constraints
```jsx
<Datepicker
  value={startDate}
  onChange={setStartDate}
  minDate={new Date()}
  maxDate={new Date(2025, 11, 31)}
/>
```

### In a form
```jsx
<Field label="Start Date" required>
  <Datepicker value={startDate} onChange={setStartDate} />
</Field>
```
