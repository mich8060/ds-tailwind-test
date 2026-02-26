import React from "react";
import { render } from "@testing-library/react";
import Textarea from "./Textarea";

describe("Textarea", () => {
  it("renders without crashing", () => {
    render(<Textarea />);
  });
});
