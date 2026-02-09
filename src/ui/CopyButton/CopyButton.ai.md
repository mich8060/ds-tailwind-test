# CopyButton

Button that copies text to clipboard with visual confirmation.

## When to Use
- Copy-to-clipboard for code snippets, URLs, IDs, or API keys
- Any value that users need to copy

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | — | Text to copy to clipboard |
| `label` | `string` | `"Copy"` | Button label |
| `successLabel` | `string` | `"Copied!"` | Label shown after copying |
| `size` | `string` | `"default"` | Button size |
| `appearance` | `string` | `"ghost"` | Button appearance |
| `className` | `string` | `""` | Additional CSS classes |

## Examples

```jsx
<CopyButton text="npm install @mich8060/chg-design-system" />
<CopyButton text={apiKey} label="Copy API Key" />
```

### With code block
```jsx
<Flex alignItems="center" justifyContent="space-between">
  <code>{installCommand}</code>
  <CopyButton text={installCommand} />
</Flex>
```
