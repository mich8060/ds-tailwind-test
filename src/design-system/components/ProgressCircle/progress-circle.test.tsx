import React from "react";
import { render } from "@testing-library/react";
import ProgressCircle from "./ProgressCircle";

describe("ProgressCircle", () => {
  it("renders without crashing", () => {
    render(<ProgressCircle />);
  });
});
