import React from "react";
import { MemoryRouter } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
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
    items: [
      { label: "Home", href: "/" },
      { label: "Components", href: "/components" },
      { label: "Breadcrumb" },
    ],
  },
};
