import React from "react";
import { render } from "@testing-library/react";
import Datepicker from "./Datepicker";

describe("Datepicker", () => {
  it("renders without crashing", () => {
    render(<Datepicker />);
  });
});
