import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  it("renders without crashing", () => {
    render(<Table />);
  });

  it("renders a placeholder for empty cells", () => {
    render(
      <Table
        columns={[{ key: "name", label: "Name" }]}
        data={[{ name: "" }]}
      />
    );

    const cell = screen.getByRole("cell");
    expect(cell).toHaveTextContent("\u00A0");
  });
});
