import React from "react";
import { render } from "@testing-library/react";
import Chip from "./Chip";

describe("Chip", () => {
  it("renders without crashing", () => {
    render(<Chip />);
  });
});
