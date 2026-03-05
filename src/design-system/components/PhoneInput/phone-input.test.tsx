import { fireEvent, render, screen } from "@testing-library/react";
import { PhoneInput } from "./PhoneInput";

describe("PhoneInput", () => {
  it("filters disallowed characters and auto-formats while typing", () => {
    render(<PhoneInput aria-label="Phone" />);

    const input = screen.getByLabelText("Phone") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1a2!3b4@5#6$7%8^9&0" } });

    expect(input.value).toBe("(123) 456-7890");
  });

  it("shows error state on blur for incomplete phone number", () => {
    render(<PhoneInput aria-label="Phone" />);

    const input = screen.getByLabelText("Phone");
    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.blur(input);

    expect(screen.getByText("Enter a valid 10-digit phone number.")).toBeInTheDocument();
  });

  it("reports validity changes", () => {
    const onValidityChange = vi.fn();
    render(<PhoneInput aria-label="Phone" onValidityChange={onValidityChange} />);

    const input = screen.getByLabelText("Phone");
    fireEvent.change(input, { target: { value: "12345" } });
    fireEvent.blur(input);
    fireEvent.change(input, { target: { value: "1234567890" } });
    fireEvent.blur(input);

    expect(onValidityChange).toHaveBeenCalledWith(false);
    expect(onValidityChange).toHaveBeenCalledWith(true);
  });
});
