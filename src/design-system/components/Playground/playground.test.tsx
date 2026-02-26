import React from "react";
import { render } from "@testing-library/react";
import Playground from "./Playground";

describe("Playground", () => {
  it("renders without crashing", () => {
    render(<Playground />);
  });
});
