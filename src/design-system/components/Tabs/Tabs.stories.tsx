import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const BASE_TABS = [
  { id: "overview", label: "Overview" },
  { id: "details", label: "Details" },
  { id: "activity", label: "Activity" },
];

export const Default: Story = {
  args: {
    tabs: BASE_TABS,
    appearance: "underline",
    activeTab: 0,
  },
};

export const Vertical: Story = {
  args: {
    tabs: BASE_TABS,
    appearance: "underline",
    orientation: "vertical",
    activeTab: 0,
  },
};
