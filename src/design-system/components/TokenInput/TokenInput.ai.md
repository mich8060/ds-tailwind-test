# TokenInput

Multi-token text entry control for tags, skills, keywords, or recipients.

## When to Use
- Capturing multiple short values in a single field
- Free-form tag entry with optional deduplication
- Inputs that need token chips with remove actions

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tokens` | `string[]` | — | Controlled token array |
| `defaultTokens` | `string[]` | `[]` | Initial tokens for uncontrolled mode |
| `onTokensChange` | `(tokens: string[]) => void` | — | Callback when token list changes |
| `inputValue` | `string` | — | Controlled input value |
| `defaultInputValue` | `string` | `""` | Initial input value for uncontrolled mode |
| `onInputValueChange` | `(value: string) => void` | — | Callback when text input changes |
| `allowDuplicates` | `boolean` | `false` | Allow duplicate token values |
| `maxTokens` | `number` | — | Maximum number of tokens allowed |
| `size` | `"default" \| "compact"` | `"default"` | Visual size |
| `state` | `"default" \| "focused" \| "error" \| "disabled"` | `"default"` | Visual state |
| `disabled` | `boolean` | `false` | Disables token editing and input |
| `placeholder` | `string` | `"Type and press comma, tab, or enter"` | Input placeholder |
| `label` | `ReactNode` | — | Visible field label |
| `helperText` | `ReactNode` | — | Supporting text when not in error state |
| `errorText` | `ReactNode` | — | Error text when `state="error"` |

## Behavior Rules

- Token delimiters: comma (`,`), Enter, and Tab.
- Backspace removes the last token when input text is empty.
- Duplicate tokens are blocked unless `allowDuplicates={true}`.
- Tokens are trimmed and trailing commas are removed before insertion.
- Token removal is rendered as a compact `Chip` with right-side `X` icon.

## Examples

### Uncontrolled
```tsx
<TokenInput
  label="Skills"
  placeholder="Add a skill"
  defaultTokens={["React", "TypeScript"]}
/>
```

### Controlled
```tsx
const [tokens, setTokens] = useState<string[]>([]);
const [value, setValue] = useState("");

<TokenInput
  label="Keywords"
  tokens={tokens}
  inputValue={value}
  onTokensChange={setTokens}
  onInputValueChange={setValue}
  maxTokens={10}
/>
```

### Error state
```tsx
<TokenInput
  label="Recipients"
  state="error"
  errorText="At least one recipient is required."
/>
```

## Do and Don't

✅ Do use controlled mode when tokens need validation, persistence, or async submission logic.  
✅ Do set `maxTokens` for bounded fields.  
✅ Do provide `label` and helper/error text for accessibility clarity.

❌ Don't combine `tokens` and `defaultTokens` in the same usage path.  
❌ Don't rely on visual-only error states without `errorText`.  
❌ Don't use TokenInput for long-form free text; use `Textarea` instead.
