# Icon

Universal icon component wrapping the Phosphor Icons library.

## When to Use
- Any place you need an icon — buttons, navigation, status indicators, decorative elements
- Use this instead of importing Phosphor icons directly for consistency

## Props

| Prop | Type | Default | Values | Description |
|------|------|---------|--------|-------------|
| `name` | `string` | — | Any Phosphor icon name (PascalCase) | Icon name |
| `size` | `number` | `20` | Any number | Icon size in pixels |
| `weight` | `string` | `"regular"` | `"thin"`, `"light"`, `"regular"`, `"bold"`, `"fill"`, `"duotone"` | Icon weight/style |
| `color` | `string` | `"currentColor"` | CSS color | Icon color |
| `className` | `string` | `""` | — | Additional CSS classes |

## Common Icon Names

### Navigation
`House`, `MagnifyingGlass`, `Bell`, `Gear`, `User`, `SignOut`, `List`, `X`

### Actions
`Plus`, `PencilSimple`, `Trash`, `Copy`, `Download`, `Upload`, `Share`, `Check`

### Status
`CheckCircle`, `Warning`, `XCircle`, `Info`, `Clock`, `Eye`, `EyeSlash`

### Content
`File`, `Folder`, `Image`, `Camera`, `ChatCircle`, `Envelope`, `Phone`

### Layout
`SquaresFour`, `GridFour`, `Columns`, `Rows`, `ArrowLeft`, `ArrowRight`, `CaretDown`

## Examples

```jsx
<Icon name="House" size={20} />
<Icon name="Bell" size={24} weight="fill" />
<Icon name="Warning" size={16} color="var(--uds-color-red-500)" />
```

## Note
- Uses `@phosphor-icons/react` under the hood
- All Phosphor icon names work: https://phosphoricons.com/
