import Accordion, { AccordionItem } from "./Accordion";
import { ACCORDION_STORY_SPEC } from "./Accordion.spec";
import { createStoryArgsFromSpec } from "../_spec/createStoryArgsFromSpec";

const fromSpec = createStoryArgsFromSpec(ACCORDION_STORY_SPEC.defaults);

export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: ACCORDION_STORY_SPEC.defaults,
  parameters: {},
  argTypes: {
    expandedFirst: {
      control: "boolean",
      description: "Expands the first accordion item by default.",
    },
  },
};

const renderFromSpec = (expandedFirst: boolean) => (
  <Accordion>
    {ACCORDION_STORY_SPEC.items.map((item, index) => (
      <AccordionItem
        key={item.id}
        id={item.id}
        label={item.label}
        defaultExpanded={expandedFirst && index === 0}
      >
        {item.content}
      </AccordionItem>
    ))}
  </Accordion>
);

export const Default = {
  args: fromSpec(ACCORDION_STORY_SPEC.stories.default),
  render: ({ expandedFirst }: { expandedFirst: boolean }) =>
    renderFromSpec(expandedFirst),
};

export const FirstExpanded = {
  args: fromSpec(ACCORDION_STORY_SPEC.stories.firstExpanded),
  render: ({ expandedFirst }: { expandedFirst: boolean }) =>
    renderFromSpec(expandedFirst),
};
