import { describe, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";
import { DROPDOWN_DEFAULTS, DROPDOWN_SIZES } from "./Dropdown.spec";

describe("Dropdown spec sync", () => {
  test("renders label and placeholder from defaults", () => {
    render(<Dropdown label="Fruit" />);
    expect(screen.getByRole("button", { name: /Fruit/i })).toBeInTheDocument();
    expect(screen.getByText(DROPDOWN_DEFAULTS.placeholder)).toBeInTheDocument();
  });

  test("supports all size options from spec", () => {
    DROPDOWN_SIZES.forEach((size) => {
      const { container, unmount } = render(<Dropdown size={size} />);
      const root = container.querySelector(".uds-dropdown");
      if (size === DROPDOWN_DEFAULTS.size) {
        expect(root).not.toHaveClass(`uds-dropdown--${size}`);
      } else {
        expect(root).toHaveClass(`uds-dropdown--${size}`);
      }
      unmount();
    });
  });

  test("normalizes string options and renders selected value", () => {
    render(
      <Dropdown
        label="Sort by"
        options={["Latest", "Oldest"]}
        value="Oldest"
      />,
    );
    expect(screen.getByRole("button", { name: /Sort by/i })).toBeInTheDocument();
    expect(screen.getByText("Oldest")).toBeInTheDocument();
  });
});
