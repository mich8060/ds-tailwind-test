import React from "react";
import { render } from "@testing-library/react";
import MicroCalendar from "./MicroCalendar";

describe("MicroCalendar", () => {
  it("renders without crashing", () => {
    render(<MicroCalendar />);
  });
});
