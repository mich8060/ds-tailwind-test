import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("renders without crashing", () => {
    render(<Breadcrumb />);
  });
});
