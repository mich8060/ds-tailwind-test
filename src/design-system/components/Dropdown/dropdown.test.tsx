import React from "react";
import { render } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown", () => {
  it("renders without crashing", () => {
    render(<Dropdown />);
  });
});
