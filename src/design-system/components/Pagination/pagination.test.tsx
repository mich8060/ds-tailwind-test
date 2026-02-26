import React from "react";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renders without crashing", () => {
    render(<Pagination />);
  });
});
