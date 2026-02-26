import React from "react";
import { render } from "@testing-library/react";
import DotStatus from "./DotStatus";

describe("DotStatus", () => {
  it("renders without crashing", () => {
    render(<DotStatus />);
  });
});
