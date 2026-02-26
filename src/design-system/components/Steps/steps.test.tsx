import React from "react";
import { render } from "@testing-library/react";
import Steps from "./Steps";

describe("Steps", () => {
  it("renders without crashing", () => {
    render(<Steps />);
  });
});
