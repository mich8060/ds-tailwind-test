import { useState, type CSSProperties } from "react";
import { Button } from "../../design-system/components/Button";
import { Code } from "../../design-system/components/Code";
import { Divider } from "../../design-system/components/Divider";
import { Dropdown } from "../../design-system/components/Dropdown";
import { Flex } from "../../design-system/components/Flex";
import { Text } from "../../design-system/components/Text";
import { ThemeProvider, createBrand, createTheme, useTheme, useThemeController } from "../../design-system/theme";
import { DocPageLayout } from "../docs/DocPageLayout";
import { ComponentPropsTable, type ComponentPropRow } from "../docs/ComponentPropsTable";

type DemoBrand = "default" | "ocean";

const DEMO_THEME = createTheme<DemoBrand>({
  defaultBrand: "default",
  defaultMode: "light",
  baseTokens: {
    "--uds-surface-primary": "#ffffff",
    "--uds-surface-secondary": "#f8fafc",
    "--uds-text-primary": "#0f172a",
    "--uds-text-secondary": "#334155",
    "--uds-border-primary": "#cbd5e1",
    "--brand-primary-25": "#eff6ff",
    "--brand-primary-50": "#dbeafe",
    "--brand-primary-100": "#bfdbfe",
    "--brand-primary-200": "#93c5fd",
    "--brand-primary-300": "#60a5fa",
    "--brand-primary-400": "#3b82f6",
    "--brand-primary-500": "#2563eb",
    "--brand-primary-600": "#1d4ed8",
    "--brand-primary-700": "#1e40af",
    "--brand-primary-800": "#1e3a8a",
    "--brand-primary-900": "#172554",
  },
  brands: {
    default: createBrand("default"),
    ocean: createBrand("ocean", {
      className: "brand-ocean",
      tokens: {
        "--brand-primary-25": "#ecfeff",
        "--brand-primary-50": "#cffafe",
        "--brand-primary-100": "#a5f3fc",
        "--brand-primary-200": "#67e8f9",
        "--brand-primary-300": "#22d3ee",
        "--brand-primary-400": "#06b6d4",
        "--brand-primary-500": "#0891b2",
        "--brand-primary-600": "#0e7490",
        "--brand-primary-700": "#155e75",
        "--brand-primary-800": "#164e63",
        "--brand-primary-900": "#083344",
        "--uds-surface-secondary": "#ecfeff",
      },
      modeTokens: {
        dark: {
          "--uds-surface-primary": "#082f49",
          "--uds-surface-secondary": "#0c4a6e",
          "--uds-text-primary": "#e0f2fe",
          "--uds-text-secondary": "#bae6fd",
          "--uds-border-primary": "#0369a1",
        },
      },
    }),
  },
  modes: {
    light: { name: "light", className: "theme-light" },
    dark: {
      name: "dark",
      className: "theme-dark",
      tokens: {
        "--uds-surface-primary": "#0f172a",
        "--uds-surface-secondary": "#1e293b",
        "--uds-text-primary": "#f8fafc",
        "--uds-text-secondary": "#cbd5e1",
        "--uds-border-primary": "#334155",
      },
    },
  },
});

const THEME_PROPS: ComponentPropRow[] = [
  { prop: "theme", type: "Theme", defaultValue: "-", description: "Theme engine created with `createTheme`." },
  { prop: "initialBrand", type: "BrandName", defaultValue: "theme default", description: "Initial brand selection for provider state." },
  { prop: "initialMode", type: '"light" | "dark"', defaultValue: "theme default", description: "Initial mode selection for provider state." },
  { prop: "target", type: "HTMLElement | null", defaultValue: "document.documentElement", description: "Element where classes and CSS vars are applied." },
  { prop: "children", type: "ReactNode", defaultValue: "-", description: "Themed subtree that can read/update theme via hooks." },
];

const CREATE_THEME_SNIPPET = `const theme = createTheme({
  defaultBrand: "default",
  defaultMode: "light",
  baseTokens: {
    "--uds-text-primary": "#0f172a",
    "--brand-primary-500": "#2563eb",
    "--brand-primary-700": "#1e40af",
  },
  brands: {
    default: createBrand("default"),
    ocean: createBrand("ocean", {
      tokens: {
        "--brand-primary-500": "#0891b2",
        "--brand-primary-700": "#155e75",
      },
      modeTokens: { dark: { "--uds-surface-primary": "#082f49" } },
    }),
  },
});

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>`;

function ThemeLiveControls() {
  const theme = useTheme<DemoBrand>();
  const controller = useThemeController<DemoBrand>();

  return (
    <Flex direction="column" gap="12">
      <Flex alignItems="center" gap="12" wrap>
        <Flex alignItems="center" gap="8">
          <Text as="span" variant="body-14" leading="regular">
            Brand
          </Text>
          <Dropdown
            options={[
              { value: "default", label: "default" },
              { value: "ocean", label: "ocean" },
            ]}
            value={theme.brand}
            onChange={(value) => {
              if (value === "default" || value === "ocean") controller.setBrand(value);
            }}
            size="compact"
            placement="bottom-start"
          />
        </Flex>
        <Button
          appearance="outline"
          size="xsmall"
          label={theme.mode === "light" ? "Switch to Dark" : "Switch to Light"}
          onClick={() => controller.setMode(theme.mode === "light" ? "dark" : "light")}
        />
      </Flex>
      <Text as="p" variant="body-14" leading="regular">
        Active classes: `{theme.classNames.brand}` + `{theme.classNames.mode}`
      </Text>
    </Flex>
  );
}

export function ThemeDemoPage() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const previewStyle: CSSProperties = {
    border: "var(--uds-border-width-1) solid var(--uds-border-primary)",
    borderRadius: "var(--uds-radius-8)",
    padding: "var(--uds-spacing-16)",
    backgroundColor: "var(--uds-surface-primary)",
    color: "var(--uds-text-primary)",
  };

  return (
    <DocPageLayout
      title="Theme API"
      description="Theme API formalizes brand and mode switching with typed definitions and runtime CSS variable updates."
    >
      <ThemeProvider theme={DEMO_THEME} target={target}>
        <Flex direction="column" gap="24">
          <ThemeLiveControls />
          <Flex
            direction="column"
            gap="12"
            style={previewStyle}
            ref={(node) => setTarget(node)}
          >
            <Text as="h3" variant="heading-24" weight="medium" leading="regular">
              Themed Surface Preview
            </Text>
            <Text as="p" variant="body-16" leading="regular">
              This block is themed via CSS variable updates on a target element. Switching brand/mode updates classes and variables without remounting the subtree.
            </Text>
            <Flex
              style={{
                border: "var(--uds-border-width-1) solid var(--uds-border-primary)",
                borderRadius: "var(--uds-radius-4)",
                padding: "var(--uds-spacing-12)",
                backgroundColor: "var(--uds-surface-secondary)",
              }}
            >
              <Text as="span" variant="body-14" leading="regular">
                Uses `--uds-surface-*`, `--uds-text-*`, and `--uds-border-*` tokens from resolved theme.
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </ThemeProvider>

      <Divider variant="solid" />
      <Code language="tsx" code={CREATE_THEME_SNIPPET} />
      <Divider variant="solid" />
      <ComponentPropsTable rows={THEME_PROPS} title="ThemeProvider Props" />
    </DocPageLayout>
  );
}
