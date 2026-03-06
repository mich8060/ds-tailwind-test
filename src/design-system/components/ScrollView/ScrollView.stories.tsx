import type { Meta, StoryObj } from "@storybook/react-vite";
import type { CSSProperties } from "react";
import { ScrollView } from "./ScrollView";

const boxStyle: CSSProperties = {
  border: "var(--uds-border-width-1) solid var(--uds-border-primary)",
  borderRadius: "var(--uds-radius-8)",
  padding: "var(--uds-spacing-8)",
};

const meta = {
  title: "Components/ScrollView",
  component: ScrollView,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "inline-radio",
      options: ["vertical", "horizontal"],
    },
  },
  args: {
    direction: "vertical",
  },
} satisfies Meta<typeof ScrollView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    direction: "vertical",
    style: { ...boxStyle, height: "160px" },
    children: (
      <div>
        {Array.from({ length: 12 }).map((_, index) => (
          <p key={index} style={{ margin: "0 0 var(--uds-spacing-8) 0" }}>
            Vertical item {index + 1}
          </p>
        ))}
      </div>
    ),
  },
};

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
    style: { ...boxStyle, width: "320px" },
    children: (
      <div style={{ display: "inline-flex", gap: "var(--uds-spacing-8)", whiteSpace: "nowrap" }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index}>Horizontal item {index + 1}</span>
        ))}
      </div>
    ),
  },
};
