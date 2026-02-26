import React from "react";
import Accordion, { AccordionItem } from "./Accordion";

export default {
  title: "UI/Accordion",
  component: Accordion,
};

export const Default = {
  render: () => (
    <Accordion>
      <AccordionItem label="What is the Unified Design System?">
        The Unified Design System is a shared component library and token framework used to build
        consistent product experiences.
      </AccordionItem>
      <AccordionItem label="Who should use this component?">
        Use Accordion when content is helpful but not always required immediately on page load.
      </AccordionItem>
      <AccordionItem label="Can I nest accordions?">
        Avoid nesting accordions inside accordions. Prefer clearer sectioning with concise labels.
      </AccordionItem>
    </Accordion>
  ),
};

export const FirstItemExpanded = {
  render: () => (
    <Accordion>
      <AccordionItem label="Design token categories" defaultExpanded>
        Tokens are organized by primitives, semantics, brands, and themes.
      </AccordionItem>
      <AccordionItem label="Brand support">
        This library supports multiple brands including default, comphealth, connect, and others.
      </AccordionItem>
      <AccordionItem label="Theme support">
        Light and dark themes are controlled at the shell level and inherited by components.
      </AccordionItem>
    </Accordion>
  ),
};

export const WithToggleCallback = {
  render: () => (
    <Accordion>
      <AccordionItem
        label="Accordion callback demo"
        onToggle={(isExpanded) => {
          console.log("Accordion item expanded:", isExpanded);
        }}
      >
        Toggle this item and check the browser console to see the callback payload.
      </AccordionItem>
    </Accordion>
  ),
};
