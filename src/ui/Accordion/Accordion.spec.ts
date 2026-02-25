export const ACCORDION_BASE_CLASS = "accordion";
export const ACCORDION_ITEM_BASE_CLASS = "accordion-item";

export const ACCORDION_DEFAULTS = {
  className: "",
} as const;

export const ACCORDION_ITEM_DEFAULTS = {
  defaultExpanded: false,
  className: "",
} as const;

export const ACCORDION_STORY_SPEC = {
  defaults: {
    expandedFirst: false as boolean,
  },
  stories: {
    default: { expandedFirst: false },
    firstExpanded: { expandedFirst: true },
  },
  items: [
    { id: "section-one", label: "Section One", content: "First section content" },
    { id: "section-two", label: "Section Two", content: "Second section content" },
  ],
} as const;
