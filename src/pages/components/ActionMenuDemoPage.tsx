import { ActionMenu, Button, Divider, Flex, Text } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";
import { ComponentPropsTable, type ComponentPropRow } from "../docs/ComponentPropsTable";

type ActionItem = {
  id?: string;
  label?: string;
  icon?: string;
  shortcut?: string;
  active?: boolean;
  destructive?: boolean;
  disabled?: boolean;
  divider?: boolean;
  items?: ActionItem[];
  onClick?: (...args: unknown[]) => void;
};

const ACTION_MENU_PROPS: ComponentPropRow[] = [
  { prop: "trigger", type: "ReactNode", defaultValue: "-", description: "Element that opens the menu (usually Button)." },
  { prop: "items", type: "ActionItem[]", defaultValue: "[]", description: "Menu item configuration including submenus and dividers." },
  { prop: "placement", type: '"bottom-start" | "bottom-end" | "top-start" | "top-end" | "left-start" | "left-end" | "right-start" | "right-end"', defaultValue: '"bottom-start"', description: "Where the menu opens relative to the trigger." },
  { prop: "fullWidth", type: "boolean", defaultValue: "false", description: "When true, menu width matches trigger width." },
  { prop: "disabled", type: "boolean", defaultValue: "false", description: "Disables trigger and menu interaction." },
  { prop: "onOpenChange", type: "(isOpen: boolean) => void", defaultValue: "-", description: "Fires when menu opens/closes." },
  { prop: "className", type: "string", defaultValue: '""', description: "Additional root classes." },
  { prop: "menuClassName", type: "string", defaultValue: '""', description: "Additional classes on menu panel." },
];

const BASIC_ITEMS: ActionItem[] = [
  { id: "edit", label: "Edit", icon: "PencilSimple" },
  { id: "duplicate", label: "Duplicate", icon: "Copy" },
  { id: "delete", label: "Delete", icon: "Trash" },
];

const DIVIDER_ITEMS: ActionItem[] = [
  { id: "edit", label: "Edit", icon: "PencilSimple" },
  { id: "duplicate", label: "Duplicate", icon: "Copy" },
  { divider: true },
  { id: "archive", label: "Archive", icon: "ArchiveBox" },
  { id: "delete", label: "Delete", icon: "Trash" },
];

const DISABLED_ITEMS: ActionItem[] = [
  { id: "edit", label: "Edit", icon: "PencilSimple" },
  { id: "duplicate", label: "Duplicate", icon: "Copy" },
  { id: "delete", label: "Delete", icon: "Trash", disabled: true },
];

const DESTRUCTIVE_ITEMS: ActionItem[] = [
  { id: "edit", label: "Edit", icon: "PencilSimple" },
  { id: "duplicate", label: "Duplicate", icon: "Copy" },
  { divider: true },
  { id: "delete", label: "Delete", icon: "Trash", destructive: true },
];

const SHORTCUT_ITEMS: ActionItem[] = [
  { id: "cut", label: "Cut", icon: "Scissors", shortcut: "Cmd+X" },
  { id: "copy", label: "Copy", icon: "Copy", shortcut: "Cmd+C" },
  { id: "paste", label: "Paste", icon: "ClipboardText", shortcut: "Cmd+V" },
];

const MULTILEVEL_ITEMS: ActionItem[] = [
  { id: "edit", label: "Edit", icon: "PencilSimple" },
  {
    id: "share",
    label: "Share",
    icon: "ShareNetwork",
    items: [
      { id: "share-email", label: "Email", icon: "EnvelopeSimple" },
      { id: "share-slack", label: "Slack", icon: "ChatCircle" },
    ],
  },
  {
    id: "export",
    label: "Export",
    icon: "Export",
    items: [
      { id: "export-pdf", label: "PDF", icon: "FilePdf" },
      {
        id: "export-more",
        label: "More Formats",
        items: [
          { id: "export-json", label: "JSON", icon: "Code" },
          { id: "export-xml", label: "XML", icon: "FileCode" },
        ],
      },
    ],
  },
];

const PLACEMENTS = [
  { label: "Bottom Start", placement: "bottom-start" as const },
  { label: "Bottom End", placement: "bottom-end" as const },
  { label: "Top Start", placement: "top-start" as const },
  { label: "Top End", placement: "top-end" as const },
];

export function ActionMenuDemoPage() {
  return (
    <DocPageLayout
      title="ActionMenu"
      description="ActionMenu groups contextual commands into a compact, keyboard-accessible dropdown."
    >
      <Flex direction="column" gap="48">
        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Basic Usage
          </Text>
          <ActionMenu
            trigger={<Button appearance="ghost" layout="icon-only" icon="DotsThree" aria-label="More actions" />}
            items={BASIC_ITEMS as unknown[]}
          />
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            With Dividers
          </Text>
          <ActionMenu
            trigger={<Button appearance="outline" label="Actions" layout="icon-right" icon="CaretDown" />}
            items={DIVIDER_ITEMS as unknown[]}
          />
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            With Disabled Items
          </Text>
          <ActionMenu
            trigger={<Button appearance="outline" label="Actions" layout="icon-right" icon="CaretDown" />}
            items={DISABLED_ITEMS as unknown[]}
          />
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Destructive Actions
          </Text>
          <ActionMenu
            trigger={<Button appearance="outline" label="Actions" layout="icon-right" icon="CaretDown" />}
            items={DESTRUCTIVE_ITEMS as unknown[]}
          />
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            With Keyboard Shortcuts
          </Text>
          <ActionMenu
            trigger={<Button appearance="outline" label="Actions" layout="icon-right" icon="CaretDown" />}
            items={SHORTCUT_ITEMS as unknown[]}
          />
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Multilevel Menus
          </Text>
          <ActionMenu
            trigger={<Button appearance="outline" label="Actions" layout="icon-right" icon="CaretDown" />}
            items={MULTILEVEL_ITEMS as unknown[]}
          />
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="12">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Trigger Variations
          </Text>
          <Flex alignItems="center" gap="16" wrap>
            <ActionMenu
              trigger={<Button appearance="ghost" layout="icon-only" icon="DotsThree" aria-label="More actions" />}
              items={BASIC_ITEMS as unknown[]}
            />
            <ActionMenu
              trigger={<Button appearance="outline" label="Actions" layout="icon-right" icon="CaretDown" />}
              items={BASIC_ITEMS as unknown[]}
            />
            <ActionMenu
              trigger={<Button appearance="primary" label="Options" />}
              items={BASIC_ITEMS as unknown[]}
            />
          </Flex>
        </Flex>
        <Divider variant="solid" />

        <Flex direction="column" gap="16">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Placement Options
          </Text>
          <Flex alignItems="center" gap="24" wrap>
            {PLACEMENTS.map((placement) => (
              <Flex
                key={placement.placement}
                direction="column"
                gap="8"
                style={{ minWidth: 200, minHeight: 120, justifyContent: "center", alignItems: "center" }}
              >
                <Text as="span" variant="body-14" leading="regular">
                  {placement.label}
                </Text>
                <ActionMenu
                  placement={placement.placement}
                  trigger={<Button appearance="outline" label={placement.label} />}
                  items={BASIC_ITEMS as unknown[]}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Divider variant="solid" />
      <ComponentPropsTable rows={ACTION_MENU_PROPS} />
    </DocPageLayout>
  );
}
