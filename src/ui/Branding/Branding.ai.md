# Branding

Displays a single brand logo. Works like `<Icon name="House" />` — pass a `brand` prop and get the logo back.

## When to Use
- Application header/sidebar branding
- Login pages, splash screens
- Multi-brand applications where the logo switches

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `brand` | `string` | — | `"design-system"`, `"connect"`, `"comphealth"`, `"weatherby"`, `"modio"`, `"locumsmart"`, `"wireframe"` | Brand key |
| `inherit` | `boolean` | `false` | — | When true, ignores `brand` and auto-reads from `data-brand` on `<html>` |
| `size` | `string` | `"default"` | `"small"` (32px), `"default"` (40px), `"large"` (48px) | Logo height |
| `className` | `string` | `""` | — | Additional CSS classes |

## Examples

### Basic usage
```jsx
<Branding brand="connect" />
<Branding brand="comphealth" size="large" />
```

### Inherit active brand
```jsx
<Branding inherit />
<Branding inherit size="small" />
```

### In app header
```jsx
<UDS.Sidebar>
  <Branding inherit />
  {/* navigation items */}
</UDS.Sidebar>
```

## Theming / Dark Mode

Brand logo colors are driven by CSS custom properties (`--uds-brands-*`) defined in `tokens.css`. The SVGs are rendered inline so the token values resolve at runtime. To support light/dark mode, override the brand tokens under a dark-mode selector:

```css
/* Example: override brand colors for dark mode */
[data-mode="dark"] {
  --uds-brands-ds-black: #ffffff;
  --uds-brands-ds-purple: #a0aec0;
  --uds-brands-connect-dark-blue: #4da6ff;
  --uds-brands-connect-light-blue: #7cc4f0;
  /* …override other brand tokens as needed */
}
```

### Token → Brand mapping

| Brand | Tokens |
|-------|--------|
| `design-system` | `--uds-brands-unified-black`, `--uds-brands-unified-gray` |
| `connect` | `--uds-brands-connect-dark-blue`, `--uds-brands-connect-light-blue` |
| `comphealth` | `--uds-brands-comphealth-orange`, `--uds-brands-comphealth-purple` |
| `locumsmart` | `--uds-brands-locumsmart-blue`, `--uds-brands-locumsmart-orange`, `--uds-brands-locumsmart-black` |
| `modio` | `--uds-brands-modio-blue`, `--uds-brands-modio-black` |
| `weatherby` | `--uds-brands-weatherby-red`, `--uds-brands-weatherby-teal` |
| `wireframe` | `--uds-brands-wireframe-black`, `--uds-brands-wireframe-blue`, `--uds-brands-wireframe-green`, `--uds-brands-wireframe-orange` |

## Do's and Don'ts
- **Do** use `inherit` in app shells so the logo updates with the active brand
- **Do** use a specific `brand` prop when you need a fixed logo regardless of context
- **Don't** use both `brand` and `inherit` — `inherit` takes priority
- **Do** override `--uds-brands-*` tokens for dark mode — the logos will update automatically