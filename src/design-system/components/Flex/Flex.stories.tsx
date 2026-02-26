import React from "react";
import { Flex } from "./Flex";

export default {
  title: "UI/Flex",
  component: Flex,
  argTypes: {
    direction: { control: "select", options: ["row", "column"] },
    justifyContent: {
      control: "select",
      options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"]
    },
    alignItems: { control: "select", options: ["stretch", "flex-start", "center", "flex-end", "baseline"] },
    wrap: { control: "select", options: [false, true, "nowrap", "wrap", "wrap-reverse"] },
    gap: { control: "text" },
    fullWidth: { control: "boolean" },
    inline: { control: "boolean" }
  }
};

export const Default = {
  args: {
    children: "Flex",
    gap: "8"
  }
};

export const HorizontalStack = {
  render: () => (
    <Flex gap="8">
      <div>Item A</div>
      <div>Item B</div>
      <div>Item C</div>
    </Flex>
  )
};

export const VerticalLayout = {
  render: () => (
    <Flex direction="column" gap="12">
      <div>Header</div>
      <div>Content</div>
      <div>Footer</div>
    </Flex>
  )
};

export const CenteredWrapRow = {
  render: () => (
    <Flex justifyContent="center" alignItems="center" wrap gap="16" style={{ maxWidth: 320 }}>
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </Flex>
  )
};

export const FullWidthContainer = {
  render: () => (
    <Flex fullWidth justifyContent="space-between" style={{ border: "1px dashed var(--uds-border-primary)", padding: 12 }}>
      <span>Left</span>
      <span>Right</span>
    </Flex>
  )
};
