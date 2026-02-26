# Modal

A standalone, accessible dialog overlay component. Renders via a portal so it always sits above the page. Fully controlled via `open` / `onClose` props.

## When to Use
- Confirmation dialogs ("Are you sure?")
- Forms that need focused attention (create, edit)
- Detail views that overlay current content
- Any content that should block interaction with the page behind it

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `open` | `boolean` | `false` | — | Whether the modal is visible |
| `onClose` | `function` | — | `() => void` | Called when close is requested (X button, Escape, backdrop) |
| `title` | `string` | — | — | Header title text |
| `subtitle` | `string` | — | — | Header subtitle text |
| `badge` | `ReactNode` | — | — | Badge element rendered next to the title |
| `header` | `ReactNode` | — | — | Fully custom header (replaces title/subtitle/badge) |
| `footer` | `ReactNode` | — | — | Footer content, typically action buttons |
| `size` | `string` | `"default"` | `"small"` (480px), `"default"` (640px), `"large"` (800px), `"fullscreen"` | Dialog width |
| `closeOnBackdrop` | `boolean` | `true` | — | Whether clicking the backdrop calls `onClose` |
| `closeOnEscape` | `boolean` | `true` | — | Whether pressing Escape calls `onClose` |
| `container` | `HTMLElement` | `document.body` | — | Portal target element. Pass a ref's `.current` to contain the modal within a specific element. |
| `className` | `string` | `""` | — | Additional CSS classes on the dialog panel |
| `children` | `ReactNode` | — | — | Modal body content |

## Examples

### Basic confirmation
```jsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Delete Item</Button>

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Deletion"
  subtitle="This action cannot be undone."
  size="small"
  footer={
    <>
      <Button appearance="outline" onClick={() => setOpen(false)}>Cancel</Button>
      <Button appearance="danger" onClick={handleDelete}>Delete</Button>
    </>
  }
>
  <p>Are you sure you want to delete this item?</p>
</Modal>
```

### Form modal
```jsx
<Modal
  open={formOpen}
  onClose={() => setFormOpen(false)}
  title="Create Project"
  size="default"
  footer={
    <>
      <Button appearance="outline" onClick={() => setFormOpen(false)}>Cancel</Button>
      <Button appearance="primary" onClick={handleSubmit}>Create</Button>
    </>
  }
>
  <Field label="Project Name" required>
    <Input placeholder="Enter project name" />
  </Field>
  <Field label="Description">
    <Textarea placeholder="Describe the project..." />
  </Field>
</Modal>
```

### Large / information modal
```jsx
<Modal
  open={infoOpen}
  onClose={() => setInfoOpen(false)}
  title="Release Notes"
  badge="v2.0"
  size="large"
>
  <h3>What's New</h3>
  <ul>
    <li>New Modal component</li>
    <li>Updated Dropdown</li>
  </ul>
</Modal>
```

### Fullscreen modal
```jsx
<Modal
  open={fullOpen}
  onClose={() => setFullOpen(false)}
  title="Document Editor"
  size="fullscreen"
>
  <Editor document={doc} />
</Modal>
```

### Persistent modal (no backdrop/escape close)
```jsx
<Modal
  open={wizardOpen}
  onClose={() => setWizardOpen(false)}
  title="Setup Wizard"
  closeOnBackdrop={false}
  closeOnEscape={false}
  footer={
    <Button appearance="primary" onClick={nextStep}>Next</Button>
  }
>
  <Steps current={step} items={wizardSteps} />
</Modal>
```

## Keyboard Navigation

- **Escape**: Closes the modal (when `closeOnEscape` is `true`)
- **Tab / Shift+Tab**: Cycles through focusable elements inside the modal
- Focus is moved into the modal on open and restored on close

## Accessibility

- Uses `role="dialog"` and `aria-modal="true"`
- `aria-labelledby` points to the title, `aria-describedby` points to the subtitle
- Body scroll is locked while the modal is open
- Focus is trapped within the modal panel
- Rendered via `createPortal` to avoid z-index stacking issues

## Composition

- Use `<Flex>` or button groups in the `footer` for action layouts
- Wrap form fields with `<Field>` inside the body
- Combine with `<Steps>` for wizard / multi-step flows
- Use `<Divider>` to separate content sections within the body

## Do's and Don'ts

- **Do** always provide an `onClose` handler so users can dismiss the modal
- **Do** use `size="small"` for simple confirmations and `size="large"` for complex content
- **Do** place primary actions in the `footer`
- **Don't** nest modals inside modals
- **Don't** use a modal for content that can be inline (prefer SidePanel or expandable sections)
- **Don't** set both `closeOnBackdrop={false}` and `closeOnEscape={false}` unless there is a clear "Cancel" button in the footer
