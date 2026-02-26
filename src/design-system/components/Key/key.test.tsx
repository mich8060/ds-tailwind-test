import React from "react";
import { render } from "@testing-library/react";
import Key from "./Key";

describe("Key", () => {
  it("renders without crashing", () => {
    render(<Key />);
  });
});
