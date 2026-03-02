import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import Button from "../Button/Button";
import { EmptyState } from "./EmptyState";

const meta = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "inline-radio",
      options: ["center", "left"],
    },
    icon: { control: "text" },
    iconSize: { control: "number" },
  },
  args: {
    title: "No records found",
    description: "Try adjusting your filters or create a new record to get started.",
    icon: "Inbox",
    iconSize: 32,
    align: "center",
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    title: "No projects yet",
    description: "Create your first project to start organizing work.",
    action: <Button appearance="primary" label="Create Project" />,
    secondaryAction: <Button appearance="outline" label="Learn More" />,
  },
};

export const LeftAligned: Story = {
  args: {
    align: "left",
    title: "No search results",
    description: "No matches were found for your current query.",
    action: <Button appearance="text" label="Clear Search" />,
  },
};
