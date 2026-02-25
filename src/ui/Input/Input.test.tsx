import { describe, test, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";
import {
  INPUT_DEFAULTS,
  INPUT_ICON_POSITIONS,
  INPUT_SIZES,
  INPUT_STATES,
} from "./Input.spec";

describe("Input spec sync", () => {
  test("renders with defaults from spec", () => {
    render(<Input value="" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("uds-input");
    expect(input).toHaveClass(`uds-input--${INPUT_DEFAULTS.size}`);
    expect(input).toHaveClass(`uds-input--${INPUT_DEFAULTS.state}`);
  });

  test("supports all size options from spec", () => {
    INPUT_SIZES.forEach((size) => {
      const { unmount } = render(
        <Input value="" onChange={() => {}} size={size} placeholder={size} />,
      );
      expect(screen.getByRole("textbox")).toHaveClass(`uds-input--${size}`);
      unmount();
    });
  });

  test("supports all state options from spec", () => {
    INPUT_STATES.forEach((state) => {
      const { unmount } = render(
        <Input value="" onChange={() => {}} state={state} placeholder={state} />,
      );
      expect(screen.getByRole("textbox")).toHaveClass(`uds-input--${state}`);
      unmount();
    });
  });

  test("supports icon positions from spec", () => {
    INPUT_ICON_POSITIONS.forEach((iconPosition) => {
      const { container, unmount } = render(
        <Input
          value=""
          onChange={() => {}}
          icon="MagnifyingGlass"
          iconPosition={iconPosition}
        />,
      );
      const iconEl = container.querySelector(`.uds-input__icon--${iconPosition}`);
      expect(iconEl).toBeInTheDocument();
      unmount();
    });
  });

  test("invokes onIconClick when icon button is clicked", () => {
    const onIconClick = jest.fn();
    render(
      <Input
        value=""
        onChange={() => {}}
        icon="MagnifyingGlass"
        onIconClick={onIconClick}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Input action" }));
    expect(onIconClick).toHaveBeenCalledTimes(1);
  });
});
