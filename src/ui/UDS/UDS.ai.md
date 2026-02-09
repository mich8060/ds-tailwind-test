# UDS (Application Wrapper)

Full application shell providing sidebar navigation, content areas, slide-in panels, modals, and responsive mobile support. This is the top-level wrapper when building complete applications.

**Figma Reference**: https://height-blanch-43641663.figma.site

## When to Use
- Building a complete application layout with navigation, content, and panels
- Any app that needs a collapsible sidebar, list/detail views, or modal dialogs
- Wrap your entire application or major section with `<UDS>`

## Subcomponents

| Subcomponent | Purpose |
|-------------|---------|
| `UDS.Sidebar` | Collapsible navigation sidebar (uses the Menu component internally) |
| `UDS.ContentArea` | Main content container next to sidebar |
| `UDS.PageHeader` | Page header with breadcrumbs, title, badge, back button, actions |
| `UDS.Main` | Main content area within ContentArea |
| `UDS.ContentLayout` | Content layout switcher (full, focus-left, focus-right) |
| `UDS.ListView` | Left-side sliding list panel |
| `UDS.SidePanel` | Right-side sliding detail panel |
| `UDS.Modal` | Centered dialog overlay |
| `UDS.FullscreenModal` | Full-page overlay |
| `UDS.DemoControls` | Floating toolbar to toggle all panels (for demos) |
| `UDS.MobileMenuButton` | Mobile hamburger menu toggle |
| `UDS.Footer` | Bottom footer area |

## Top-Level Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `sidebarExpanded` | `boolean` | `true` | Initial sidebar expanded state |
| `navPosition` | `string` | `"left"` | `"left"` or `"right"` — sidebar position |
| `contentLayout` | `string` | `"full"` | `"full"`, `"focus-left"`, `"focus-right"` |
| `sidebarWidth` | `number` | `280` | Sidebar expanded width in px |
| `sidebarCollapsedWidth` | `number` | `80` | Sidebar collapsed width in px |
| `className` | `string` | `""` | Additional CSS classes |

## UDS.Sidebar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `brand` | `ReactNode` | — | Custom brand element |
| `brandTitle` | `string` | — | Brand title text |
| `brandIcon` | `ReactNode` | — | Brand icon element |
| `navItems` | `array` | `[]` | Array of `{ icon, label, active, badge, id }` |
| `searchable` | `boolean` | `false` | Show search field |
| `searchPlaceholder` | `string` | `"Search"` | Search input placeholder |
| `onSearch` | `function` | — | Search callback `(query) => void` |
| `onNavItemClick` | `function` | — | Nav item click `(item, index) => void` |
| `userAvatar` | `string` | — | User initials for account section |
| `userName` | `string` | — | User display name |
| `userEmail` | `string` | — | User email |
| `footer` | `ReactNode` | — | Footer slot content |

## UDS.PageHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `breadcrumbs` | `string[]` | `[]` | Breadcrumb trail items |
| `title` | `string` | — | Page title (renders as h1) |
| `subtitle` | `string` | — | Page subtitle text |
| `badge` | `string` | — | Status badge next to title |
| `backButton` | `boolean` | `false` | Show back arrow button |
| `onBack` | `function` | — | Back button click handler |
| `actions` | `ReactNode` | — | Action buttons (right side) |

## UDS.ListView Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Panel title |
| `subtitle` | `string` | — | Panel subtitle |
| `count` | `number` | — | Item count badge |
| `searchable` | `boolean` | `false` | Show search button |
| `width` | `number` | `375` | Panel width in px |
| `header` | `ReactNode` | — | Custom header content |
| `footer` | `ReactNode` | — | Footer slot |
| `backButton` | `boolean` | `false` | Show back button |

## UDS.SidePanel Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Panel title |
| `subtitle` | `string` | — | Panel subtitle |
| `badge` | `string` | — | Badge next to title |
| `width` | `number` | `480` | Panel width in px |
| `header` | `ReactNode` | — | Custom header content |
| `footer` | `ReactNode` | — | Footer slot |

## UDS.Modal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | — | Modal title |
| `subtitle` | `string` | — | Modal subtitle |
| `badge` | `string` | — | Badge next to title |
| `maxWidth` | `number` | `800` | Max modal width in px |
| `closeOnBackdrop` | `boolean` | `true` | Close when clicking backdrop |
| `header` | `ReactNode` | — | Custom header content |
| `footer` | `ReactNode` | — | Footer with action buttons |

## useUDS() Hook

Access and control all UDS state programmatically:

```jsx
const {
  // Sidebar
  sidebarExpanded,     // boolean
  toggleSidebar,       // () => void
  setSidebarExpanded,  // (boolean) => void

  // ListView
  listViewOpen,        // boolean
  openListView,        // () => void
  closeListView,       // () => void
  toggleListView,      // () => void

  // SidePanel
  sidePanelOpen,       // boolean
  openSidePanel,       // () => void
  closeSidePanel,      // () => void
  toggleSidePanel,     // () => void

  // Modal
  modalOpen,           // boolean
  openModal,           // () => void
  closeModal,          // () => void
  toggleModal,         // () => void

  // Fullscreen Modal
  fullscreenModalOpen, // boolean
  openFullscreenModal, // () => void
  closeFullscreenModal,// () => void

  // Content Layout
  contentLayout,       // "full" | "focus-left" | "focus-right"
  setContentLayout,    // (string) => void

  // Mobile
  mobileMenuOpen,      // boolean
  setMobileMenuOpen,   // (boolean) => void
  toggleMobileMenu,    // () => void
} = useUDS();
```

## Examples

### Basic application shell
```jsx
<UDS>
  <UDS.Sidebar
    brandTitle="My App"
    navItems={[
      { icon: "House", label: "Dashboard", active: true },
      { icon: "Users", label: "Users" },
      { icon: "Gear", label: "Settings" },
    ]}
    userAvatar="JD"
    userName="John Doe"
    searchable
  />
  <UDS.ContentArea>
    <UDS.PageHeader
      breadcrumbs={["Dashboard"]}
      title="Welcome Back"
      actions={<Button label="New Project" icon="Plus" layout="icon-left" />}
    />
    <UDS.Main>
      <p>Your content here</p>
    </UDS.Main>
  </UDS.ContentArea>
</UDS>
```

### With list/detail pattern
```jsx
function ContactsPage() {
  const { openSidePanel } = useUDS();

  return (
    <UDS>
      <UDS.Sidebar brandTitle="CRM" navItems={navItems} />
      <UDS.ContentArea>
        <UDS.PageHeader title="Contacts" />
        <UDS.Main>
          <Table columns={columns} data={contacts} />
        </UDS.Main>
      </UDS.ContentArea>

      <UDS.ListView title="All Contacts" count={contacts.length} searchable>
        {contacts.map(c => (
          <div key={c.id} onClick={() => openSidePanel()}>
            <Avatar initials={c.initials} /> {c.name}
          </div>
        ))}
      </UDS.ListView>

      <UDS.SidePanel title="Contact Details" badge="Active">
        <p>Selected contact details here</p>
      </UDS.SidePanel>
    </UDS>
  );
}
```

### With modal confirmation
```jsx
function SettingsPage() {
  const { openModal, closeModal } = useUDS();

  return (
    <UDS>
      <UDS.Sidebar brandTitle="Admin" navItems={navItems} />
      <UDS.ContentArea>
        <UDS.Main>
          <Button label="Delete Account" appearance="destructive" onClick={openModal} />
        </UDS.Main>
      </UDS.ContentArea>

      <UDS.Modal
        title="Confirm Deletion"
        subtitle="This action cannot be undone"
        footer={
          <Flex gap="8" justifyContent="flex-end">
            <Button label="Cancel" appearance="outline" onClick={closeModal} />
            <Button label="Delete" appearance="destructive" onClick={handleDelete} />
          </Flex>
        }
      >
        <p>Are you sure you want to delete your account?</p>
      </UDS.Modal>
    </UDS>
  );
}
```

## Layout Patterns

### Full-width content (default)
```jsx
<UDS contentLayout="full">...</UDS>
```

### Focus left (content + sidebar)
```jsx
<UDS contentLayout="focus-left">
  <UDS.ContentArea>
    <UDS.ContentLayout>
      <div>Primary content (wider)</div>
      <div>Secondary content (narrower)</div>
    </UDS.ContentLayout>
  </UDS.ContentArea>
</UDS>
```

## Do's and Don'ts

✅ **Do**: Place `<UDS>` as the outermost layout wrapper
✅ **Do**: Use `useUDS()` hook to programmatically control panels and modals
✅ **Do**: Provide `navItems` to Sidebar for consistent navigation
✅ **Do**: Use `UDS.PageHeader` with breadcrumbs for page context
✅ **Do**: Put action buttons in `UDS.Modal` footer, not in content

❌ **Don't**: Nest `<UDS>` inside another `<UDS>`
❌ **Don't**: Use multiple `<UDS.Sidebar>` components
❌ **Don't**: Forget to import `useUDS` when you need programmatic control
❌ **Don't**: Put navigation logic outside the sidebar — use `onNavItemClick`

## Accessibility
- Sidebar collapse button has `aria-label`
- Modals have `role="dialog"` and `aria-modal="true"`
- Escape key closes modals and fullscreen modals
- Mobile sidebar has backdrop click to close
- Nav items get `aria-label` and `title` when sidebar is collapsed
