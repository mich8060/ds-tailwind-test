import React from "react";
import { render } from "@testing-library/react";
import ActionMenu from "./ActionMenu";

describe("ActionMenu", () => {
  it("renders without crashing", () => {
    render(<ActionMenu />);
  });
});
