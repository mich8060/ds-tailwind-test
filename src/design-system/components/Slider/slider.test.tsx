import React from "react";
import { render } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider", () => {
  it("renders without crashing", () => {
    render(<Slider />);
  });
});
