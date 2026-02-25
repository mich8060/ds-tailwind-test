import ActionMenu from "./ActionMenu";
import Button from "../Button/Button";

const DEFAULT_ITEMS = [
  { label: "Edit", icon: "PencilSimple", onClick: () => {} },
  { label: "Duplicate", icon: "Copy", onClick: () => {} },
  { divider: true },
  { label: "Delete", icon: "Trash", destructive: true, onClick: () => {} },
];

const NESTED_ITEMS = [
  {
    label: "Share",
    icon: "ShareNetwork",
    items: [
      { label: "Copy Link", icon: "Link", onClick: () => {} },
      { label: "Email", icon: "EnvelopeSimple", onClick: () => {} },
    ],
  },
  {
    label: "Notifications",
    icon: "Bell",
    type: "toggle",
    checked: true,
    onChange: () => {},
  },
  { divider: true },
  { label: "Archive", icon: "Archive", onClick: () => {} },
];

export default {
  title: "Components/ActionMenu",
  component: ActionMenu,
  tags: ["autodocs"],
  args: {
    trigger: <Button appearance="ghost" layout="icon-only" icon="DotsThree" />,
    items: DEFAULT_ITEMS,
    placement: "bottom-end",
    fullWidth: false,
    disabled: false,
    className: "",
    menuClassName: "",
  },
  argTypes: {
    trigger: {
      control: false,
      description:
        "Element that opens the menu. Use a Button for the best keyboard and visual behavior.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    items: {
      control: "object",
      description:
        "Array of menu items. Each item can include label, icon, onClick, shortcut, active, destructive, disabled, divider, nested items, or toggle fields (type, checked, onChange).",
      table: {
        type: {
          summary:
            "Array<{ label?: string; icon?: string; onClick?: fn; shortcut?: string; active?: boolean; destructive?: boolean; disabled?: boolean; divider?: boolean; items?: MenuItem[]; type?: 'toggle'; checked?: boolean; onChange?: (checked: boolean) => void; }>",
        },
      },
    },
    placement: {
      control: "select",
      options: [
        "bottom-start",
        "bottom-end",
        "top-start",
        "top-end",
        "right-start",
        "right-end",
        "left-start",
        "left-end",
      ],
      description: "Position of the menu relative to the trigger.",
    },
    fullWidth: {
      control: "boolean",
      description: "When true, menu width matches the trigger width.",
    },
    disabled: {
      control: "boolean",
      description: "Disables opening and interaction for the whole menu.",
    },
    onOpenChange: {
      action: "open changed",
      description: "Called when open state changes: (isOpen: boolean) => void.",
    },
    className: {
      control: "text",
      description: "Extra class names applied to the root wrapper.",
    },
    menuClassName: {
      control: "text",
      description: "Extra class names applied to the floating menu panel.",
    },
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "ActionMenu is a contextual dropdown for grouped actions. Start with a Button trigger and pass an `items` array with menu rows, optional dividers, nested submenus, or toggle rows.",
      },
    },
  },
};

export const Default = {};

export const WithNestedItems = {
  args: {
    items: NESTED_ITEMS,
  },
};

export const FullWidth = {
  args: {
    fullWidth: true,
    placement: "bottom-start",
    trigger: <Button appearance="soft">Choose action</Button>,
  },
};
