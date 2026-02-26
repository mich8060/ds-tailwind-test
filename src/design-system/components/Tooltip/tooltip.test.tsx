import React from "react";
import { render } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  it("renders without crashing", () => {
    render(<Tooltip />);
  });
});
