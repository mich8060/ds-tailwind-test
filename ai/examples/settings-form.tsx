import "uds-tailwind-test/styles.css"

import {
  AppShell,
  Button,
  Card,
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  Input,
  SectionHeader,
  SectionHeaderContent,
  SectionHeaderDescription,
  SectionHeaderTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  Status,
  Switch,
  TooltipProvider,
} from "uds-tailwind-test"

export function SettingsFormExample() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppShell
          className="min-h-dvh w-full min-w-0"
          mainClassName="bg-[var(--uds-color-neutrals-50)]"
          showListview={false}
          sidebar={
            <Sidebar collapsible="none">
              <SidebarHeader className="border-b px-4 py-4">Admin settings</SidebarHeader>
              <SidebarContent className="px-2 py-3">
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton isActive>Notifications</SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarContent>
            </Sidebar>
          }
        >
          <div className="flex h-full flex-col gap-6 p-6">
            <SectionHeader>
              <SectionHeaderContent>
                <SectionHeaderTitle>Notification routing</SectionHeaderTitle>
                <SectionHeaderDescription>
                  Keep configuration screens inside AppShell and use exported field surfaces for form chrome.
                </SectionHeaderDescription>
              </SectionHeaderContent>
              <Status variant="success">Production</Status>
            </SectionHeader>

            <Card className="rounded-[4px] p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <Field>
                  <FieldLabel>Email sender</FieldLabel>
                  <FieldContent>
                    <Input placeholder="staffing@unified.example" />
                  </FieldContent>
                </Field>

                <Field>
                  <FieldLabel>Escalation policy</FieldLabel>
                  <FieldContent>
                    <Select defaultValue="high-touch">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-touch">High touch</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                      </SelectContent>
                    </Select>
                  </FieldContent>
                </Field>

                <Field className="md:col-span-2">
                  <FieldLabel>Send daily digests</FieldLabel>
                  <FieldDescription>Use Switch and Status for stateful configuration instead of ad hoc badges.</FieldDescription>
                  <FieldContent className="flex justify-start">
                    <Switch defaultChecked />
                  </FieldContent>
                </Field>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="rounded-[4px]">Save changes</Button>
              </div>
            </Card>
          </div>
        </AppShell>
      </SidebarProvider>
    </TooltipProvider>
  )
}
