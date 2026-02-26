import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "UI/Toggle",
  component: Toggle,
  argTypes: {
    checked: {
      control: "boolean",
      description: "Whether the toggle is checked",
    },
    state: {
      control: "select",
      options: ["off", "on", "indeterminate"],
      description: "Toggle state (overrides checked if provided)",
    },
    size: {
      control: "radio",
      options: ["large", "small"],
      description: "Toggle size",
    },
    bordered: {
      control: "boolean",
      description: "Whether to show a border",
    },
    disabled: {
      control: "boolean",
      description: "Whether the toggle is disabled",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

const InteractiveToggle = (args: React.ComponentProps<typeof Toggle>) => {
  const [checked, setChecked] = useState(args.checked ?? false);
  return <Toggle {...args} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
  args: {
    checked: false,
    state: "off",
    size: "large",
    bordered: false,
    disabled: false,
  },
  render: (args) => <InteractiveToggle {...args} />,
};

export const On: Story = {
  args: {
    checked: true,
    state: "on",
    size: "large",
    bordered: false,
    disabled: false,
  },
  render: (args) => <InteractiveToggle {...args} />,
};

export const Indeterminate: Story = {
  args: {
    checked: false,
    state: "indeterminate",
    size: "large",
    bordered: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    state: "off",
    size: "large",
    bordered: false,
    disabled: true,
  },
};
