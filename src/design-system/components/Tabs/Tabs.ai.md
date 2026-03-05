# Tabs

Use `Tabs` to switch between related views. Supports horizontal and vertical tab lists.

## Props

| Prop | Type | Default |
|---|---|---|
| `tabs` | `Array<{ id?: string \| number; label: string; icon?: string; tag?: string \| number; tagVariant?: string }>` | `[]` |
| `appearance` | `"underline" \| "block" \| "block-inverted"` | `"underline"` |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` |
| `activeTab` | `number` | `0` |
| `fill` | `boolean` | `false` |
| `scrollable` | `boolean` | `false` |
| `onTabChange` | `(index, tab) => void` | `undefined` |

## Examples

```tsx
<Tabs
  tabs={[
    { id: "overview", label: "Overview" },
    { id: "details", label: "Details" },
    { id: "activity", label: "Activity" },
  ]}
  appearance="underline"
  orientation="vertical"
  activeTab={0}
/>
```

```tsx
<Tabs
  tabs={[
    { id: "inbox", label: "Inbox", icon: "Tray", tag: 12, tagVariant: "red" },
    { id: "assigned", label: "Assigned", icon: "UserCircle", tag: 4, tagVariant: "blue" },
  ]}
  appearance="underline"
  scrollable
/>
```
