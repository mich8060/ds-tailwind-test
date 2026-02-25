import { useState } from "react";
import Icon from "../Icon/Icon";
import "./Accordion.scss";
import {
  ACCORDION_BASE_CLASS,
  ACCORDION_DEFAULTS,
  ACCORDION_ITEM_BASE_CLASS,
  ACCORDION_ITEM_DEFAULTS,
} from "./Accordion.spec";
import type { AccordionItemProps, AccordionProps } from "./Accordion.types";

const IconComponent = Icon as any;

export function AccordionItem({
  label,
  defaultExpanded = ACCORDION_ITEM_DEFAULTS.defaultExpanded,
  children,
  className = ACCORDION_ITEM_DEFAULTS.className,
  onToggle,
  id,
  ...rest
}: AccordionItemProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const contentId = `accordion-content-${id || label}`;

  const handleToggle = () => {
    const newExpanded = !expanded;
    setExpanded(newExpanded);
    onToggle?.(newExpanded);
  };

  return (
    <div className={`${ACCORDION_ITEM_BASE_CLASS} ${className}`.trim()} id={id} {...rest}>
      <button
        type="button"
        className={`${ACCORDION_ITEM_BASE_CLASS}__header`}
        onClick={handleToggle}
        aria-expanded={expanded}
        aria-controls={contentId}
      >
        <span className={`${ACCORDION_ITEM_BASE_CLASS}__label`}>{label}</span>
        <IconComponent
          name="CaretDown"
          size={16}
          appearance="bold"
          className={`${ACCORDION_ITEM_BASE_CLASS}__icon ${
            expanded ? `${ACCORDION_ITEM_BASE_CLASS}__icon--expanded` : ""
          }`}
        />
      </button>
      <div
        id={contentId}
        className={`${ACCORDION_ITEM_BASE_CLASS}__body ${
          expanded ? `${ACCORDION_ITEM_BASE_CLASS}__body--expanded` : ""
        }`}
      >
        <div className={`${ACCORDION_ITEM_BASE_CLASS}__body-inner`}>{children}</div>
      </div>
    </div>
  );
}

export default function Accordion({
  children,
  className = ACCORDION_DEFAULTS.className,
  ...rest
}: AccordionProps) {
  return (
    <div className={`${ACCORDION_BASE_CLASS} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
