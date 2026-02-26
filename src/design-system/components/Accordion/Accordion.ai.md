# Accordion

Expandable/collapsible content sections for organizing information hierarchically.

## When to Use
- FAQs, settings panels, or grouped content that benefits from progressive disclosure
- Reducing visual clutter by hiding secondary information behind headers

## Props

### Accordion (container)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | — | `AccordionItem` components |
| `className` | `string` | `""` | Additional CSS classes |

### AccordionItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | — | Header text for the item |
| `defaultExpanded` | `boolean` | `false` | Whether item starts expanded |
| `children` | `ReactNode` | — | Content shown when expanded |
| `className` | `string` | `""` | Additional CSS classes |
| `onToggle` | `function` | — | Callback `(isExpanded: boolean) => void` |

## Examples

### Basic accordion
```jsx
<Accordion>
  <AccordionItem label="Section 1">
    <p>Content for section 1</p>
  </AccordionItem>
  <AccordionItem label="Section 2">
    <p>Content for section 2</p>
  </AccordionItem>
  <AccordionItem label="Section 3" defaultExpanded>
    <p>This section starts expanded</p>
  </AccordionItem>
</Accordion>
```

### FAQ pattern
```jsx
<Accordion>
  {faqs.map((faq) => (
    <AccordionItem key={faq.id} label={faq.question}>
      <p>{faq.answer}</p>
    </AccordionItem>
  ))}
</Accordion>
```

## Import
```jsx
import { Accordion, AccordionItem } from "@mich8060/chg-design-system";
// OR
import Accordion, { AccordionItem } from "@mich8060/chg-design-system/Accordion";
```

## Do's and Don'ts

✅ **Do**: Use for content that doesn't all need to be visible at once
✅ **Do**: Use `defaultExpanded` on the most important section

❌ **Don't**: Nest accordions inside accordions
❌ **Don't**: Put critical information only inside accordion items
