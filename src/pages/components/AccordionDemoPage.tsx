import { Flex, Text } from "../../design-system";
import Accordion, { AccordionItem } from "../../design-system/components/Accordion/Accordion";
import { DocPageLayout } from "../docs/DocPageLayout";

const faqItems = [
  {
    label: "What is Accordion used for?",
    content:
      "Accordion helps organize dense information by revealing content only when users need it."
  },
  {
    label: "Can I start with a section open?",
    content:
      "Yes. Use the defaultExpanded prop on an AccordionItem to render it open on first load."
  },
  {
    label: "Should I nest accordions?",
    content:
      "Avoid nested accordions whenever possible. Use clear section labels and concise content instead."
  }
];

export function AccordionDemoPage() {
  return (
    <DocPageLayout
      title="Accordion"
      description="Accordion progressively discloses content so pages stay scannable while still providing detail."
    >
      <Flex direction="column" gap="12">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          FAQ Example
        </Text>
        <Accordion>
          {faqItems.map((item, index) => (
            <AccordionItem key={item.label} label={item.label} defaultExpanded={index === 0}>
              <Text as="p" variant="body-16" leading="regular">
                {item.content}
              </Text>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>
    </DocPageLayout>
  );
}
