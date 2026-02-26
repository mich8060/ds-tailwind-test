import React from "react";
import { render } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag", () => {
  it("renders without crashing", () => {
    render(<Tag />);
  });
});
