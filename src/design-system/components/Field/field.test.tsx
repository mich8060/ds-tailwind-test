import React from "react";
import { render } from "@testing-library/react";
import Field from "./Field";

describe("Field", () => {
  it("renders without crashing", () => {
    render(<Field />);
  });
});
