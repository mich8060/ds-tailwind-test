import { describe, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import Accordion, { AccordionItem } from "./Accordion";
import { ACCORDION_STORY_SPEC } from "./Accordion.spec";

describe("Accordion spec sync", () => {
  test("renders all spec items", () => {
    render(
      <Accordion>
        {ACCORDION_STORY_SPEC.items.map((item) => (
          <AccordionItem key={item.id} id={item.id} label={item.label}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>,
    );

    ACCORDION_STORY_SPEC.items.forEach((item) => {
      expect(screen.getByRole("button", { name: item.label })).toBeInTheDocument();
    });
  });

  test("toggles expanded state on click", () => {
    render(
      <Accordion>
        <AccordionItem id="accordion-test" label="Toggle Section">
          Body content
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Toggle Section" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  test("honors defaultExpanded", () => {
    render(
      <Accordion>
        <AccordionItem id="accordion-expanded" label="Expanded Section" defaultExpanded>
          Expanded body
        </AccordionItem>
      </Accordion>,
    );

    const trigger = screen.getByRole("button", { name: "Expanded Section" });
    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });
});
