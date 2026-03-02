import { useState, type CSSProperties } from "react";
import { Avatar, Button, Code, Divider, Dropdown, Flex, Menu, Text, Toggle } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";
import { ComponentPropsTable, type ComponentPropRow } from "../docs/ComponentPropsTable";
import { doctorList } from "../../design-system/assets/images/doctors";

const APP_SHELL_PROPS: ComponentPropRow[] = [
  { prop: "brand", type: "string", defaultValue: '"default"', description: "Brand namespace class applied to shell root (`brand-*`)." },
  { prop: "theme", type: '"light" | "dark"', defaultValue: '"light"', description: "Theme namespace class applied to shell root (`theme-*`)." },
  { prop: "layout", type: "ShellLayoutConfig", defaultValue: "defaultLayout", description: "Layout and density configuration object." },
  { prop: "slots", type: "AppShellSlots", defaultValue: "{}", description: "Optional overrides for Header, Sidebar, Breadcrumb, Footer, SubNav." },
  { prop: "children", type: "ReactNode", defaultValue: "-", description: "Compound regions using `AppShell.Menu`, `AppShell.Content`, `AppShell.Listview`, `AppShell.Main`." },
  { prop: "className", type: "string", defaultValue: '""', description: "Additional CSS classes on shell root." },
];

const LAYOUT_CONFIG_PROPS: ComponentPropRow[] = [
  { prop: "sidebar", type: "boolean", defaultValue: "true", description: "Shows/hides the left navigation rail." },
  { prop: "footer", type: "boolean", defaultValue: "true", description: "Shows/hides shell footer region." },
  { prop: "container", type: '"max" | "fluid" | "none"', defaultValue: '"max"', description: "Main content container behavior." },
  { prop: "padding", type: '"standard" | "none"', defaultValue: '"standard"', description: "Main content padding mode." },
  { prop: "density", type: '"comfortable" | "compact"', defaultValue: '"comfortable"', description: "Global spacing density mode." },
];

const COMPOSITION_RULES = [
  "Use `AppShell` as the top-level wrapper for full app screens.",
  "Put primary navigation in `AppShell.Menu` and route content in `AppShell.Main`.",
  "Use `AppShell.Listview` for optional left-side contextual lists.",
  "Switch brand/theme at the shell root instead of hardcoding styles in components.",
];

const BASIC_APP_SHELL_EXAMPLE = `<AppShell brand="default" theme="light">
  <AppShell.Menu>
    <Menu navItems={NAV_ITEMS} />
  </AppShell.Menu>

  <AppShell.Content>
    <AppShell.Main>
      <DashboardPage />
    </AppShell.Main>
  </AppShell.Content>
</AppShell>`;

const LISTVIEW_APP_SHELL_EXAMPLE = `<AppShell brand="comphealth" theme="dark">
  <AppShell.Menu>
    <Menu navItems={NAV_ITEMS} />
  </AppShell.Menu>

  <AppShell.Content>
    <AppShell.Listview>
      <CandidateList />
    </AppShell.Listview>

    <AppShell.Main>
      <CandidateDetail />
    </AppShell.Main>
  </AppShell.Content>
</AppShell>`;

const COMPACT_LAYOUT_EXAMPLE = `<AppShell
  brand="weatherby"
  theme="light"
  layout={{ density: "compact", container: "fluid", padding: "standard" }}
>
  <AppShell.Menu>
    <Menu navItems={NAV_ITEMS} />
  </AppShell.Menu>

  <AppShell.Content>
    <AppShell.Main>
      <ReportsPage />
    </AppShell.Main>
  </AppShell.Content>
</AppShell>`;

const LIVE_PREVIEW_MENU_ITEMS = [
  { label: "Search", icon: "MagnifyingGlass", path: "/components/app-shell/search" },
  { label: "Calendar", icon: "CalendarBlank", path: "/components/app-shell/calendar" },
  { label: "Assignments", icon: "ClipboardText", path: "/components/app-shell" },
  { label: "Edit", icon: "PencilSimple", path: "/components/app-shell/edit" },
  { label: "Archive", icon: "ArchiveBox", path: "/components/app-shell/archive" },
];

type DoctorRecord = {
  name: string;
  image: string;
  initials: string;
};

const ALL_DOCTORS = doctorList as DoctorRecord[];
const PREVIEW_DOCTORS = ALL_DOCTORS.slice(0, 8);
const DOCTOR_OPTIONS = ALL_DOCTORS.map((doctor) => ({
  value: doctor.name,
  label: doctor.name,
}));

const PREVIEW_FRAME: CSSProperties = {
  border: "var(--uds-border-width-1) solid var(--uds-border-primary)",
  borderRadius: "var(--uds-radius-8)",
  overflow: "hidden",
  backgroundColor: "var(--uds-surface-primary)",
};

const PREVIEW_HEADER: CSSProperties = {
  padding: "var(--uds-spacing-8) var(--uds-spacing-12)",
  borderBottom: "var(--uds-border-width-1) solid var(--uds-border-primary)",
  backgroundColor: "var(--uds-surface-secondary)",
};

const PREVIEW_REGION: CSSProperties = {
  border: "var(--uds-border-width-1) dashed var(--uds-border-primary)",
  borderRadius: "var(--uds-radius-4)",
  padding: "var(--uds-spacing-10)",
};

export function AppShellDemoPage() {
  const [showListview, setShowListview] = useState(true);
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [selectedDoctorName, setSelectedDoctorName] = useState(
    PREVIEW_DOCTORS[0]?.name ?? "",
  );
  const selectedDoctor =
    ALL_DOCTORS.find((doctor) => doctor.name === selectedDoctorName) ??
    PREVIEW_DOCTORS[0];

  return (
    <DocPageLayout
      title="AppShell"
      description="AppShell provides the application-level layout contract for menu, content regions, theme, brand, and density."
    >
      <Flex direction="column" gap="48">
        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Compound Regions
          </Text>
          <Flex direction="column" gap="8">
            <Text as="p" variant="body-16" leading="regular">
              `AppShell.Menu` renders the sidebar area.
            </Text>
            <Text as="p" variant="body-16" leading="regular">
              `AppShell.Content` wraps content sections and can include `AppShell.Listview` and `AppShell.Main`.
            </Text>
            <Text as="p" variant="body-16" leading="regular">
              `AppShell.Main` is the primary route content surface.
            </Text>
          </Flex>
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Composition Rules
          </Text>
          <Flex as="ul" direction="column" gap="8">
            {COMPOSITION_RULES.map((rule) => (
              <Text as="li" key={rule} variant="body-16" leading="regular">
                {rule}
              </Text>
            ))}
          </Flex>
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Live Preview
          </Text>
          <Text as="p" variant="body-16" leading="regular">
            Toggle regions to preview `Listview + Main` side-by-side, then slide a right-side panel in and out.
          </Text>
          <Flex style={{ width: "100%", overflowX: "auto", paddingBottom: "var(--uds-spacing-4)" }}>
            <Flex
              style={{
                border: "var(--uds-border-width-1) solid var(--uds-border-primary)",
                borderRadius: "var(--uds-radius-8)",
                backgroundColor: "var(--uds-surface-primary)",
                overflow: "hidden",
                width: "1280px",
                minWidth: "1280px",
                height: "800px",
              }}
              direction="column"
              gap="0"
            >
            <Flex
              alignItems="center"
              justifyContent="space-between"
              wrap
              gap="12"
              style={{
                padding: "var(--uds-spacing-10) var(--uds-spacing-12)",
                borderBottom: "var(--uds-border-width-1) solid var(--uds-border-primary)",
                backgroundColor: "var(--uds-surface-secondary)",
              }}
            >
              <Flex alignItems="center" gap="12" wrap>
                <Flex alignItems="center" gap="8">
                  <Toggle checked={showListview} onChange={setShowListview} size="small" />
                  <Text as="span" variant="body-14" leading="regular">
                    Listview
                  </Text>
                </Flex>
                <Flex alignItems="center" gap="8">
                  <Toggle checked={showSidePanel} onChange={setShowSidePanel} size="small" />
                  <Text as="span" variant="body-14" leading="regular">
                    Side Panel
                  </Text>
                </Flex>
                <Flex alignItems="center" gap="8" style={{ minWidth: 260 }}>
                  <Text as="span" variant="body-14" leading="regular">
                    Doctor
                  </Text>
                  <Dropdown
                    options={DOCTOR_OPTIONS}
                    value={selectedDoctorName}
                    onChange={(value) => {
                      if (typeof value === "string") setSelectedDoctorName(value);
                    }}
                    size="compact"
                    placement="bottom-start"
                  />
                </Flex>
              </Flex>
              <Button
                appearance="outline"
                size="xsmall"
                label={showSidePanel ? "Close Side Panel" : "Open Side Panel"}
                onClick={() => setShowSidePanel((prev) => !prev)}
              />
            </Flex>

            <Flex
              className="app-shell__body"
              style={{ flex: 1, minHeight: 0, backgroundColor: "var(--uds-surface-primary)" }}
            >
              <aside className="app-shell__sidebar" style={{ position: "relative" }}>
                <Menu
                  className="example"
                  defaultExpanded={false}
                  navItems={LIVE_PREVIEW_MENU_ITEMS}
                  showSearch={false}
                  showBrandSwitcher={false}
                  showModeToggle={false}
                  showUser={false}
                />
              </aside>

              <Flex style={{ flex: 1, minWidth: 0, position: "relative", overflow: "hidden" }}>
                <Flex
                  direction="column"
                  style={{
                    width: showListview ? 240 : 0,
                    transition: "width 220ms ease",
                    overflow: "hidden",
                    borderRight: showListview
                      ? "var(--uds-border-width-1) solid var(--uds-border-primary)"
                      : "none",
                    backgroundColor: "var(--uds-surface-primary)",
                    flexShrink: 0,
                  }}
                >
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    style={{
                      padding: "var(--uds-spacing-10) var(--uds-spacing-12)",
                      borderBottom: "var(--uds-border-width-1) solid var(--uds-border-primary)",
                      minWidth: 240,
                    }}
                  >
                    <Text as="span" variant="body-14" weight="semibold" leading="regular">
                      Assignments
                    </Text>
                    <Text as="span" variant="body-12" leading="regular">
                      8
                    </Text>
                  </Flex>
                  <Flex direction="column" style={{ minWidth: 240 }}>
                    {PREVIEW_DOCTORS.map((doctor) => (
                      <Flex
                        key={doctor.name}
                        alignItems="center"
                        gap="8"
                        onClick={() => setSelectedDoctorName(doctor.name)}
                        style={{
                          padding: "var(--uds-spacing-10) var(--uds-spacing-12)",
                          borderBottom: "var(--uds-border-width-1) solid var(--uds-border-primary)",
                          backgroundColor:
                            doctor.name === selectedDoctorName
                              ? "var(--uds-surface-tertiary)"
                              : "transparent",
                          cursor: "pointer",
                        }}
                      >
                        <Avatar
                          src={doctor.image}
                          name={doctor.name}
                          initials={doctor.initials}
                          size="small"
                          alt={`${doctor.name} avatar`}
                        />
                        <Text as="span" variant="body-14" leading="regular">
                          {doctor.name}
                        </Text>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>

                <Flex direction="column" style={{ flex: 1, minWidth: 0 }}>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    style={{
                      padding: "var(--uds-spacing-12)",
                      borderBottom: "var(--uds-border-width-1) solid var(--uds-border-primary)",
                    }}
                  >
                    <Text as="span" variant="body-16" weight="semibold" leading="regular">
                      Assignment Details
                    </Text>
                    <Button appearance="outline" size="xsmall" label="Message" />
                  </Flex>
                  <Flex
                    direction="column"
                    gap="12"
                    style={{ padding: "var(--uds-spacing-12)", maxWidth: 720 }}
                  >
                    <Text as="h4" variant="heading-24" weight="medium" leading="regular">
                      {selectedDoctor?.name ?? "Doctor"}
                    </Text>
                    <Text as="p" variant="body-14" leading="regular">
                      Cardiology · Denver, CO
                    </Text>
                    <Divider variant="solid" style={{ width: "100%" }} />
                    <Text as="p" variant="body-16" leading="regular">
                      Main section stays side-by-side with Listview. Turn on Side Panel to see it overlay from the right.
                    </Text>
                  </Flex>
                </Flex>

                <Flex
                  direction="column"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: 280,
                    transform: showSidePanel ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 220ms ease",
                    borderLeft: "var(--uds-border-width-1) solid var(--uds-border-primary)",
                    backgroundColor: "var(--uds-surface-secondary)",
                    boxShadow: "var(--uds-shadow-lg)",
                    zIndex: "var(--uds-elevation-overlay)",
                  }}
                >
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    style={{
                      padding: "var(--uds-spacing-10) var(--uds-spacing-12)",
                      borderBottom: "var(--uds-border-width-1) solid var(--uds-border-primary)",
                      minWidth: 280,
                    }}
                  >
                    <Text as="span" variant="body-14" weight="semibold" leading="regular">
                      Side Panel
                    </Text>
                    <Button appearance="ghost" size="xsmall" label="Close" onClick={() => setShowSidePanel(false)} />
                  </Flex>
                  <Flex direction="column" gap="8" style={{ padding: "var(--uds-spacing-12)", minWidth: 280 }}>
                    <Text as="p" variant="body-14" leading="regular">
                      This panel slides from the right for contextual tasks.
                    </Text>
                    <Text as="p" variant="body-14" leading="regular">
                      Keep core details in Main and use this area for secondary workflows.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Examples
          </Text>
          <Text as="p" variant="body-16" leading="regular">
            Start with a minimal shell, then add optional regions (`Listview`) and layout configuration as your page needs grow.
          </Text>
        </Flex>

        <Flex direction="column" gap="12">
          <Text as="h3" variant="heading-20" weight="medium" leading="regular">
            Basic Shell
          </Text>
          <Flex direction="column" gap="0" style={PREVIEW_FRAME}>
            <Flex style={PREVIEW_HEADER}>
              <Text as="span" variant="body-14" weight="semibold" leading="regular">
                brand-default + theme-light
              </Text>
            </Flex>
            <Flex style={{ minHeight: 180 }}>
              <Flex
                direction="column"
                style={{
                  ...PREVIEW_REGION,
                  width: 140,
                  margin: "var(--uds-spacing-10)",
                  backgroundColor: "var(--uds-surface-tertiary)",
                }}
              >
                <Text as="span" variant="body-14" weight="semibold" leading="regular">
                  AppShell.Menu
                </Text>
              </Flex>
              <Flex direction="column" style={{ flex: 1, margin: "var(--uds-spacing-10) var(--uds-spacing-10) var(--uds-spacing-10) 0" }}>
                <Flex style={{ ...PREVIEW_REGION, minHeight: 120 }}>
                  <Text as="span" variant="body-14" weight="semibold" leading="regular">
                    AppShell.Main
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Code language="tsx" code={BASIC_APP_SHELL_EXAMPLE} />
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h3" variant="heading-20" weight="medium" leading="regular">
            Shell with Listview
          </Text>
          <Flex direction="column" gap="0" style={PREVIEW_FRAME}>
            <Flex style={PREVIEW_HEADER}>
              <Text as="span" variant="body-14" weight="semibold" leading="regular">
                brand-comphealth + theme-dark
              </Text>
            </Flex>
            <Flex style={{ minHeight: 200 }}>
              <Flex
                direction="column"
                style={{
                  ...PREVIEW_REGION,
                  width: 140,
                  margin: "var(--uds-spacing-10)",
                  backgroundColor: "var(--uds-surface-tertiary)",
                }}
              >
                <Text as="span" variant="body-14" weight="semibold" leading="regular">
                  AppShell.Menu
                </Text>
              </Flex>
              <Flex direction="column" style={{ flex: 1, margin: "var(--uds-spacing-10) var(--uds-spacing-10) var(--uds-spacing-10) 0" }} gap="8">
                <Flex style={{ ...PREVIEW_REGION, minHeight: 72 }}>
                  <Text as="span" variant="body-14" weight="semibold" leading="regular">
                    AppShell.Listview
                  </Text>
                </Flex>
                <Flex style={{ ...PREVIEW_REGION, minHeight: 98 }}>
                  <Text as="span" variant="body-14" weight="semibold" leading="regular">
                    AppShell.Main
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Code language="tsx" code={LISTVIEW_APP_SHELL_EXAMPLE} />
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h3" variant="heading-20" weight="medium" leading="regular">
            Compact + Fluid Layout
          </Text>
          <Flex direction="column" gap="0" style={PREVIEW_FRAME}>
            <Flex style={PREVIEW_HEADER}>
              <Text as="span" variant="body-14" weight="semibold" leading="regular">
                density-compact + container-fluid + padding-standard
              </Text>
            </Flex>
            <Flex style={{ minHeight: 180 }}>
              <Flex
                direction="column"
                style={{
                  ...PREVIEW_REGION,
                  width: 120,
                  margin: "var(--uds-spacing-8)",
                  padding: "var(--uds-spacing-8)",
                }}
              >
                <Text as="span" variant="body-12" weight="semibold" leading="regular">
                  Menu
                </Text>
              </Flex>
              <Flex direction="column" style={{ flex: 1, margin: "var(--uds-spacing-8) var(--uds-spacing-8) var(--uds-spacing-8) 0" }}>
                <Flex style={{ ...PREVIEW_REGION, minHeight: 132, padding: "var(--uds-spacing-8)" }}>
                  <Text as="span" variant="body-12" weight="semibold" leading="regular">
                    Main (compact spacing)
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Code language="tsx" code={COMPACT_LAYOUT_EXAMPLE} />
        </Flex>
      </Flex>

      <Divider variant="solid" />
      <ComponentPropsTable rows={APP_SHELL_PROPS} />
      <ComponentPropsTable rows={LAYOUT_CONFIG_PROPS} title="Layout Config" />
    </DocPageLayout>
  );
}
