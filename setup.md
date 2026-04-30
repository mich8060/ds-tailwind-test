# AppShell starter setup

Use this document when you want an AI assistant or teammate to bootstrap a React app that uses the published `uds-tailwind-test` package correctly.

The detailed rules live in:

- [`ai/uds-contract.json`](./ai/uds-contract.json)
- [`AI_USAGE.md`](./AI_USAGE.md)

This file is the shorter starter-oriented projection of that contract.

## Starter rules

- Install `uds-tailwind-test`, `react`, and `react-dom`.
- Import styles once with `import "uds-tailwind-test/styles.css"`.
- For authenticated product screens, default to `AppShell`.
- Compose the `AppShell` `sidebar` slot only with exported `Sidebar*` primitives.
- Use `listview` for master-detail or queue flows instead of building a parallel split-pane layout.
- Keep imports on `uds-tailwind-test` and `uds-tailwind-test/styles.css` only.
- Prefer existing UDS emphasis components such as `Badge`, `Status`, `Medallion`, and `Card` before inventing custom presentation wrappers.
- Current shipped components define the radius policy:
  - prefer 4px or square corners for routine rectangular chrome
  - preserve existing 8px and 12px radii where already shipped
  - allow circle and pill shapes where intrinsic to the component

## Copy-paste prompt

```text
Set up a minimal React + Vite + TypeScript application that uses `uds-tailwind-test`.

Requirements:
- install `uds-tailwind-test`, `react`, and `react-dom`
- import `uds-tailwind-test/styles.css` once near the app root
- render `AppShell` on first load
- compose the `sidebar` slot only with exported `Sidebar*` primitives
- keep imports on `uds-tailwind-test` only
- make the app fill the viewport
- prefer UDS emphasis components such as `Badge`, `Status`, `Medallion`, and `Card`
- use square or 4px corners for custom rectangular wrappers, while preserving any component-native semantic radii already shipped by the package

Before composing the screen, consult:
- `ai/uds-contract.json`
- `ai/recipes/auth-shell.md`
- `ai/examples/auth-shell.tsx`
```

## Reference starter files

### `src/main.tsx`

```tsx
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "uds-tailwind-test/styles.css"
import "./index.css"
import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### `src/index.css`

```css
html,
body,
#root {
  width: 100%;
  min-height: 100dvh;
}

body {
  margin: 0;
}
```

### `src/App.tsx`

```tsx
import {
  AppShell,
  Badge,
  Button,
  Card,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  TooltipProvider,
} from "uds-tailwind-test"

const navItems = ["Dashboard", "Open roles", "Clinicians", "Reports"]

export default function App() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppShell
          className="min-h-dvh w-full min-w-0"
          sidebarWidth={280}
          showListview={false}
          mainClassName="bg-[var(--uds-color-neutrals-50)]"
          sidebar={
            <Sidebar collapsible="none">
              <SidebarHeader className="border-b px-4 py-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">Talent Console</p>
                  <p className="text-xs text-muted-foreground">UDS AppShell starter</p>
                </div>
              </SidebarHeader>

              <SidebarContent className="px-2 py-3">
                <SidebarMenu>
                  {navItems.map((item, index) => (
                    <SidebarMenuItem key={item}>
                      <SidebarMenuButton isActive={index === 0}>{item}</SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>

              <SidebarFooter className="border-t px-3 py-3">
                <Button className="w-full rounded-[4px]">Create shortlist</Button>
              </SidebarFooter>
            </Sidebar>
          }
        >
          <div className="p-6">
            <Card className="rounded-[4px] p-6">
              <Badge accent="blue" appearance="pastel" shape="rect">
                Starter
              </Badge>
              <p className="mt-4 text-sm text-muted-foreground">
                This mounts AppShell immediately so the app boots into the package layout contract.
              </p>
            </Card>
          </div>
        </AppShell>
      </SidebarProvider>
    </TooltipProvider>
  )
}
```

## Related files

- [`examples/consumer-react/src/App.tsx`](./examples/consumer-react/src/App.tsx)
- [`ai/examples/auth-shell.tsx`](./ai/examples/auth-shell.tsx)
- [`ai/examples/workspace-dashboard.tsx`](./ai/examples/workspace-dashboard.tsx)
- [`ai/evals/checklist.md`](./ai/evals/checklist.md)
