import React from "react";
import { MemoryRouter } from "react-router-dom";
import Card from "./Card";
import Icon from "../Icon/Icon";

export default {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div style={{ maxWidth: "320px" }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {
    to: "/",
    title: "Card Title",
    description: "Short description about this card.",
    icon: <Icon name="SquaresFour" size={28} />,
  },
};
