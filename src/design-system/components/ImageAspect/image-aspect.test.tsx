import React from "react";
import { render } from "@testing-library/react";
import ImageAspect from "./ImageAspect";

describe("ImageAspect", () => {
  it("renders without crashing", () => {
    render(<ImageAspect />);
  });
});
