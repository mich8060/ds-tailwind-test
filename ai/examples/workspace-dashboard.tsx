import "uds-tailwind-test/styles.css"

import {
  AppShell,
  Badge,
  Button,
  Card,
  Medallion,
  SectionHeader,
  SectionHeaderActions,
  SectionHeaderContent,
  SectionHeaderDescription,
  SectionHeaderTitle,
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

export function WorkspaceDashboardExample() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppShell
          className="min-h-dvh w-full min-w-0"
          mainClassName="bg-[var(--uds-color-neutrals-50)]"
          sidebar={
            <Sidebar collapsible="none">
              <SidebarHeader className="border-b px-4 py-4">Operations</SidebarHeader>
              <SidebarContent className="px-2 py-3">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>Overview</SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>Clinicians</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
              <SidebarFooter className="border-t px-3 py-3">
                <Button className="w-full rounded-[4px]">Export snapshot</Button>
              </SidebarFooter>
            </Sidebar>
          }
        >
          <div className="flex h-full flex-col gap-6 p-6">
            <SectionHeader>
              <SectionHeaderContent>
                <SectionHeaderTitle>Coverage dashboard</SectionHeaderTitle>
                <SectionHeaderDescription>
                  Brand the overview with UDS emphasis components instead of neutral placeholder cards.
                </SectionHeaderDescription>
              </SectionHeaderContent>
              <SectionHeaderActions>
                <Badge accent="blue" appearance="pastel" shape="rect">
                  Priority staffing
                </Badge>
              </SectionHeaderActions>
            </SectionHeader>

            <div className="grid gap-4 xl:grid-cols-3">
              {[
                ["Open submissions", "24", "blue"],
                ["Credentialing risk", "3", "amber"],
                ["Confirmed starts", "8", "green"],
              ].map(([label, value, color]) => (
                <Card key={label} className="rounded-[4px] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="mt-2 text-3xl font-semibold text-foreground">{value}</p>
                    </div>
                    <Medallion color={color as "blue" | "amber" | "green"} shape="rounded" icon={<span>{value}</span>} />
                  </div>
                </Card>
              ))}
            </div>

            <Card className="rounded-[4px] p-5">
              <div className="flex items-center gap-3">
                <Status variant="warning">Action needed</Status>
                <p className="text-sm text-muted-foreground">Three assignments are waiting on licensure validation.</p>
              </div>
            </Card>
          </div>
        </AppShell>
      </SidebarProvider>
    </TooltipProvider>
  )
}
