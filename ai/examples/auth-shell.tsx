import "uds-tailwind-test/styles.css"

import {
  AppShell,
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
  Status,
  TooltipProvider,
} from "uds-tailwind-test"

const navItems = ["Dashboard", "Assignments", "Messages", "Reports"]

export function AuthShellExample() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppShell
          className="min-h-dvh w-full min-w-0"
          mainClassName="bg-[var(--uds-color-neutrals-50)]"
          sidebarWidth={280}
          showListview={false}
          sidebar={
            <Sidebar collapsible="none">
              <SidebarHeader className="border-b px-4 py-4">
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-foreground">Talent Console</p>
                  <Status variant="info">Live staffing</Status>
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
            <Card className="rounded-[4px] border-[var(--uds-color-accent-blue-200)] p-6">
              <h1 className="text-2xl font-semibold text-foreground">Today&apos;s review queue</h1>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                Start authenticated product screens from AppShell so navigation, listview, and footer behavior remain consistent.
              </p>
            </Card>
          </div>
        </AppShell>
      </SidebarProvider>
    </TooltipProvider>
  )
}
