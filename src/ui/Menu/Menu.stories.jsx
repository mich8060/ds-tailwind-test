import React from "react";
import { MemoryRouter } from "react-router-dom";
import Menu from "./Menu";

const navItems = [
  {
    label: "Components",
    icon: "DiamondsFour",
    children: [
      { label: "Buttons", path: "/buttons" },
      { label: "Input", path: "/input" },
    ],
  },
];

export default {
  title: "Components/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {
    navItems,
    brands: ["design-system", "connect"],
    activeBrand: "design-system",
    onBrandChange: () => {},
    activeMode: "light",
    onModeChange: () => {},
  },
};
