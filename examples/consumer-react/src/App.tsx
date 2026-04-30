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
} from '@chg-ds/unified-design-system'

const navItems = ['Dashboard', 'Open roles', 'Clinicians', 'Reports']
const queueItems = ['Avery Stone', 'Miles Carter', 'Nina Patel', 'Olivia Chen']

export function App() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppShell
          className="min-h-dvh w-full min-w-0"
          sidebarWidth={280}
          listviewWidth={320}
          showListview={false}
          mainClassName="bg-[var(--uds-color-neutrals-50)]"
          sidebar={
            <Sidebar collapsible="none" className="h-full border-r [&_[data-sidebar=sidebar]]:bg-background">
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
                      <SidebarMenuButton isActive={index === 0}>
                        <span>{item}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarContent>

              <SidebarFooter className="border-t px-3 py-3">
                <Button className="w-full rounded-[4px]">Create shortlist</Button>
              </SidebarFooter>
            </Sidebar>
          }
          listview={
            <div className="flex h-full flex-col bg-background">
              <div className="border-b px-4 py-3">
                <p className="text-sm font-semibold text-foreground">Candidate queue</p>
                <p className="text-xs text-muted-foreground">4 profiles ready for review</p>
              </div>
              <div className="flex flex-1 flex-col gap-2 overflow-auto p-3">
                {queueItems.map((name, index) => (
                  <button
                    key={name}
                    type="button"
                    className="rounded-[4px] border bg-card px-3 py-3 text-left transition hover:border-foreground/20"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-card-foreground">{name}</p>
                        <p className="text-xs text-muted-foreground">Follow-up requested</p>
                      </div>
                      <span className="text-xs text-muted-foreground">0{index + 1}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          }
          footer={
            <div className="flex h-full items-center justify-between px-4 text-sm text-muted-foreground">
              <span>4 candidates selected</span>
              <span>Synced 2 minutes ago</span>
            </div>
          }
        >
          <div className="flex h-full flex-col gap-6 p-6">
            <SectionHeader>
              <SectionHeaderContent>
                <SectionHeaderTitle>Candidate review board</SectionHeaderTitle>
                <SectionHeaderDescription>
                  This starter mounts AppShell at runtime and keeps navigation on the exported UDS sidebar primitives.
                </SectionHeaderDescription>
              </SectionHeaderContent>
              <SectionHeaderActions>
                <Badge accent="blue" appearance="pastel" shape="rect">
                  Priority queue
                </Badge>
              </SectionHeaderActions>
            </SectionHeader>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)]">
              <Card className="rounded-[4px] p-5">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-card-foreground">Open requisition</p>
                      <p className="text-sm text-muted-foreground">Hospitalist coverage, Phoenix metro</p>
                    </div>
                    <Medallion color="blue" shape="rounded" icon={<span>18</span>} />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[4px] bg-muted p-3">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Submissions</p>
                      <p className="mt-2 text-2xl font-semibold text-foreground">18</p>
                    </div>
                    <div className="rounded-[4px] bg-muted p-3">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Interviews</p>
                      <p className="mt-2 text-2xl font-semibold text-foreground">6</p>
                    </div>
                    <div className="rounded-[4px] bg-muted p-3">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Offers</p>
                      <p className="mt-2 text-2xl font-semibold text-foreground">2</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="rounded-[4px] p-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <p className="text-sm font-semibold text-card-foreground">Next steps</p>
                    <Status variant="warning">Action needed</Status>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Confirm license timeline for Olivia Chen.</li>
                    <li>Send travel estimate to Nina Patel.</li>
                    <li>Review reference packet for Avery Stone.</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </AppShell>
      </SidebarProvider>
    </TooltipProvider>
  )
}

export default App
