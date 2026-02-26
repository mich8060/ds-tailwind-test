import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders without crashing", () => {
    const { getByRole } = render(<Button label="Button" />);
    expect(getByRole("button", { name: "Button" })).toBeInTheDocument();
  });
});
