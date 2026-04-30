import "uds-tailwind-test/styles.css"

import {
  AppShell,
  Badge,
  Card,
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  Status,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TooltipProvider,
} from "uds-tailwind-test"

const clinicians = ["Avery Stone", "Miles Carter", "Nina Patel", "Olivia Chen"]

export function DetailWithListviewExample() {
  const sidebar = (
    <Sidebar collapsible="none">
      <SidebarHeader className="border-b px-4 py-4">Candidate review</SidebarHeader>
      <SidebarContent className="px-2 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive>Pipeline</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )

  const listview = (
    <div className="h-full border-r bg-background p-3">
      <ItemGroup>
        {clinicians.map((name, index) => (
          <Item key={name} variant={index === 0 ? "muted" : "outline"}>
            <ItemContent>
              <ItemTitle>{name}</ItemTitle>
              <ItemDescription>Follow-up requested for credentialing packet.</ItemDescription>
            </ItemContent>
            <Badge accent="blue" appearance="pastel" shape="rect">
              0{index + 1}
            </Badge>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )

  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppShell
          className="min-h-dvh w-full min-w-0"
          sidebar={sidebar}
          listview={listview}
          showListview
          listviewWidth={320}
          mainClassName="bg-[var(--uds-color-neutrals-50)]"
        >
          <div className="p-6">
            <Card className="rounded-[4px] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-semibold text-foreground">Olivia Chen</h1>
                  <p className="mt-2 text-sm text-muted-foreground">Use AppShell listview instead of building a custom split-pane.</p>
                </div>
                <Status variant="info">Reviewing</Status>
              </div>
              <Tabs defaultValue="overview" className="mt-6">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="pt-4 text-sm text-muted-foreground">
                  Candidate detail content stays in the main region while list scanning stays in the listview slot.
                </TabsContent>
                <TabsContent value="documents" className="pt-4 text-sm text-muted-foreground">
                  Supporting documents and related workflow content go here.
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </AppShell>
      </SidebarProvider>
    </TooltipProvider>
  )
}
