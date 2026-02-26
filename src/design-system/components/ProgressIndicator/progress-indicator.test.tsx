import React from "react";
import { render } from "@testing-library/react";
import ProgressIndicator from "./ProgressIndicator";

describe("ProgressIndicator", () => {
  it("renders without crashing", () => {
    render(<ProgressIndicator />);
  });
});
