import React from "react";
import { render } from "@testing-library/react";
import PillToggle from "./PillToggle";

describe("PillToggle", () => {
  it("renders without crashing", () => {
    render(<PillToggle />);
  });
});
