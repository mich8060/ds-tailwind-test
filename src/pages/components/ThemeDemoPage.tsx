import { useState, type CSSProperties } from "react";
import {
  Button,
  Code,
  Divider,
  Dropdown,
  Flex,
  Text,
  ThemeProvider,
  createBrand,
  createTheme,
  useTheme,
  useThemeController,
} from "../../design-system";
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
    "--uds-color-brand-primary": "#2563eb",
  },
  brands: {
    default: createBrand("default"),
    ocean: createBrand("ocean", {
      className: "brand-ocean",
      tokens: {
        "--uds-color-brand-primary": "#0ea5e9",
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
  baseTokens: { "--uds-text-primary": "#0f172a" },
  brands: {
    default: createBrand("default"),
    ocean: createBrand("ocean", {
      tokens: { "--uds-color-brand-primary": "#0ea5e9" },
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
