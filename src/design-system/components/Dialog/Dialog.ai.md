# Dialog

A focused, intent-driven overlay for confirmations, alerts, warnings, and simple prompts. Lighter and more opinionated than Modal.

## When to Use
- Confirm a destructive action (delete, remove, discard)
- Acknowledge a success or warning
- Ask a simple yes/no or single-input question
- Use **Modal** instead for complex forms, multi-step flows, or detailed content

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `open` | `boolean` | `false` | — | Whether the dialog is visible |
| `onClose` | `function` | — | — | Called when the user dismisses the dialog |
| `intent` | `string` | `"info"` | `"info"`, `"success"`, `"warning"`, `"destructive"` | Sets icon, color, and confirm button style |
| `icon` | `string` | — | Phosphor icon name | Override the default intent icon |
| `title` | `string` | — | — | Dialog heading text |
| `description` | `string` | — | — | Supporting text below the title |
| `confirmLabel` | `string` | `"Confirm"` | — | Primary action button label |
| `cancelLabel` | `string` | `"Cancel"` | — | Secondary action button label |
| `onConfirm` | `function` | — | — | Called when the primary action is clicked |
| `onCancel` | `function` | — | — | Called when cancel is clicked (falls back to onClose) |
| `showCancel` | `boolean` | `true` | — | Whether to show the cancel button |
| `loading` | `boolean` | `false` | — | Show loading spinner on confirm button |
| `closeOnBackdrop` | `boolean` | `true` | — | Close when clicking the overlay |
| `closeOnEscape` | `boolean` | `true` | — | Close on Escape key press |
| `container` | `HTMLElement` | `document.body` | — | Portal target element |
| `className` | `string` | `""` | — | Additional CSS classes |
| `children` | `ReactNode` | — | — | Custom body content below description |

## Intent Defaults

| Intent | Icon | Icon Background | Confirm Button |
|--------|------|-----------------|----------------|
| `info` | Info | action-quaternary | primary |
| `success` | CheckCircle | constructive-quaternary | primary |
| `warning` | Warning | warning-quaternary | primary |
| `destructive` | WarningOctagon | destructive-quaternary | destructive |

## Examples

### Basic confirmation
```jsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  intent="info"
  title="Save changes?"
  description="Your unsaved changes will be lost."
  confirmLabel="Save"
  cancelLabel="Discard"
  onConfirm={handleSave}
/>
```

### Destructive confirmation
```jsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  intent="destructive"
  title="Delete project?"
  description="This action cannot be undone."
  confirmLabel="Delete"
  onConfirm={handleDelete}
/>
```

### Success acknowledgment (no cancel)
```jsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  intent="success"
  title="Payment received"
  description="A receipt has been sent to your email."
  confirmLabel="Done"
  showCancel={false}
  onConfirm={() => setOpen(false)}
/>
```

### With custom body content
```jsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  intent="info"
  title="Rename project"
  description="Enter a new name."
  confirmLabel="Rename"
  onConfirm={handleRename}
>
  <Field label="Project name">
    <Input value={name} onChange={setName} />
  </Field>
</Dialog>
```

### Loading state
```jsx
<Dialog
  open={open}
  onClose={() => setOpen(false)}
  intent="warning"
  title="Publishing changes"
  description="This will push to production."
  confirmLabel="Publish"
  onConfirm={handlePublish}
  loading={isPublishing}
  closeOnBackdrop={!isPublishing}
  closeOnEscape={!isPublishing}
/>
```

## Do's and Don'ts

- **Do** use `intent` to communicate the nature of the action
- **Do** keep titles and descriptions concise
- **Do** use `loading` for async confirm actions
- **Don't** use Dialog for complex multi-field forms — use Modal instead
- **Don't** nest Dialogs inside other Dialogs
- **Don't** use destructive intent for non-destructive actions

## Accessibility

- Uses `role="alertdialog"` and `aria-modal="true"`
- Focus is trapped within the dialog when open
- Escape key dismissal (configurable)
- Focus returns to the triggering element on close
- `aria-labelledby` and `aria-describedby` are set automatically from title/description
