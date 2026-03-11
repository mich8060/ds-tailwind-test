import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    children: "View details",
    href: "#",
    appearance: "primary",
    underline: "always",
    disabled: false,
  },
  argTypes: {
    appearance: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
    underline: {
      control: "inline-radio",
      options: ["always", "hover", "none"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    appearance: "secondary",
    children: "Secondary link",
  },
};

export const UnderlineOnHover: Story = {
  args: {
    underline: "hover",
    children: "Hover me",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled link",
  },
};
