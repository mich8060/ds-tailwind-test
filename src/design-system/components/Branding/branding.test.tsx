import React from "react";
import { render } from "@testing-library/react";
import Branding from "./Branding";

describe("Branding", () => {
  it("renders without crashing", () => {
    render(<Branding />);
  });
});
