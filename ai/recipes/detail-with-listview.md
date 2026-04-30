# Detail With Listview

## When to use it

Use for master-detail, search results, inboxes, queues, or review workflows where a persistent secondary pane improves scanning.

## Required imports

Import runtime components from `uds-tailwind-test` and styles from `uds-tailwind-test/styles.css`.

## Required layout primitives

Use `AppShell` with `showListview={true}` and supply the `listview` slot instead of building a custom split-pane wrapper.

## Forbidden substitutions

Do not replace the `listview` slot with an ad hoc flex-based split layout outside `AppShell`.

## JSX skeleton

```tsx
<AppShell sidebar={sidebar} listview={listView} showListview>
  <Tabs>{/* detail content */}</Tabs>
</AppShell>
```

## Brand application

Use `Item` rows in the listview, `Status` for state cues, `Badge` for labels, and token-backed borders or muted surfaces for selection and hierarchy.
