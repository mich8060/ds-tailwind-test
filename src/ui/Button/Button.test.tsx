import { describe, test, jest } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import {
  BUTTON_APPEARANCES,
  BUTTON_DEFAULTS,
  BUTTON_LAYOUTS,
  BUTTON_SIZES,
} from "./Button.spec";

describe("Button spec sync", () => {
  test("renders with spec defaults", () => {
    render(<Button label="Default" />);
    const button = screen.getByRole("button", { name: "Default" });
    expect(button).toHaveClass("uds-button");
    expect(button).not.toHaveClass(BUTTON_DEFAULTS.appearance);
    expect(button).not.toHaveClass(BUTTON_DEFAULTS.layout);
    expect(button).not.toHaveClass(BUTTON_DEFAULTS.size);
  });

  test("supports all appearance options from spec", () => {
    BUTTON_APPEARANCES.forEach((appearance) => {
      const { unmount } = render(<Button label={appearance} appearance={appearance} />);
      const button = screen.getByRole("button", { name: appearance });
      if (appearance === BUTTON_DEFAULTS.appearance) {
        expect(button).not.toHaveClass(appearance);
      } else {
        expect(button).toHaveClass(appearance);
      }
      unmount();
    });
  });

  test("supports all size options from spec", () => {
    BUTTON_SIZES.forEach((size) => {
      const { unmount } = render(<Button label={size} size={size} />);
      const button = screen.getByRole("button", { name: size });
      if (size === BUTTON_DEFAULTS.size) {
        expect(button).not.toHaveClass(size);
      } else {
        expect(button).toHaveClass(size);
      }
      unmount();
    });
  });

  test("supports all layout options from spec", () => {
    BUTTON_LAYOUTS.forEach((layout) => {
      const isIconOnly = layout === "icon-only" || layout === "only";
      const baseProps = {
        icon: "Plus",
        layout,
      } as const;
      const props = isIconOnly
        ? { ...baseProps, "aria-label": "icon-action" }
        : { ...baseProps, label: layout };

      const { unmount } = render(
        <Button {...props} />,
      );

      const button = screen.getByRole("button", {
        name: isIconOnly ? "icon-action" : layout,
      });

      if (layout === BUTTON_DEFAULTS.layout) {
        expect(button).not.toHaveClass(layout);
      } else {
        expect(button).toHaveClass(layout);
      }
      unmount();
    });
  });

  test("tracks click event when tracking prop is provided", () => {
    const onTrack = jest.fn();
    window.addEventListener("uds:track", onTrack as EventListener);

    render(<Button label="Track me" tracking="cta-click" />);
    fireEvent.click(screen.getByRole("button", { name: "Track me" }));

    expect(onTrack).toHaveBeenCalled();
    window.removeEventListener("uds:track", onTrack as EventListener);
  });
});
