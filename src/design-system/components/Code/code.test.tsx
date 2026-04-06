import React from "react";
import { render } from "@testing-library/react";
import Code from "./Code";

describe("Code", () => {
  it("renders highlighted block code", () => {
    render(<Code code={"const value = 1;"} language="javascript" />);
  });

  it("renders without throwing when code is omitted (Prism-safe)", () => {
    render(<Code language="javascript" inline={false} />);
  });
});
