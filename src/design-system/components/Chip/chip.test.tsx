import React from "react";
import { render, screen } from "@testing-library/react";
import Chip from "./Chip";

describe("Chip", () => {
  it("renders without crashing", () => {
    render(<Chip />);
  });

  it("supports the mini size variant", () => {
    render(<Chip label="Mini chip" size="mini" />);
    expect(screen.getByRole("button", { name: "Mini chip" })).toHaveClass("uds-chip--mini");
  });
});
