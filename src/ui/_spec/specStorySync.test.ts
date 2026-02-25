import { describe, test } from "@jest/globals";
import accordionMeta, {
  Default as AccordionDefaultStory,
  FirstExpanded as AccordionFirstExpandedStory,
} from "../Accordion/Accordion.stories";
import { ACCORDION_STORY_SPEC } from "../Accordion/Accordion.spec";
import buttonMeta from "../Button/Button.stories";
import {
  BUTTON_APPEARANCES,
  BUTTON_DEFAULTS,
  BUTTON_LAYOUTS,
  BUTTON_SIZES,
} from "../Button/Button.spec";
import dropdownMeta from "../Dropdown/Dropdown.stories";
import { DROPDOWN_STORY_SPEC } from "../Dropdown/Dropdown.spec";
import inputMeta from "../Input/Input.stories";
import { INPUT_STORY_SPEC } from "../Input/Input.spec";

const getArgTypeOptions = (meta: unknown, key: string): unknown[] => {
  const options = (meta as { argTypes?: Record<string, { options?: unknown[] }> }).argTypes?.[
    key
  ]?.options;
  return Array.isArray(options) ? options : [];
};

describe("Spec-to-story sync checks", () => {
  test("Button story meta uses spec defaults and options", () => {
    const meta = buttonMeta as { args?: Record<string, unknown> };
    expect(meta.args?.appearance).toBe(BUTTON_DEFAULTS.appearance);
    expect(meta.args?.layout).toBe(BUTTON_DEFAULTS.layout);
    expect(meta.args?.size).toBe(BUTTON_DEFAULTS.size);

    expect(getArgTypeOptions(buttonMeta, "appearance")).toEqual([...BUTTON_APPEARANCES]);
    expect(getArgTypeOptions(buttonMeta, "layout")).toEqual([...BUTTON_LAYOUTS]);
    expect(getArgTypeOptions(buttonMeta, "size")).toEqual([...BUTTON_SIZES]);
  });

  test("Input story meta uses spec defaults and options", () => {
    const meta = inputMeta as { args?: Record<string, unknown> };
    expect(meta.args).toEqual({ ...INPUT_STORY_SPEC.defaults });
    expect(getArgTypeOptions(inputMeta, "size")).toEqual([...INPUT_STORY_SPEC.options.size]);
    expect(getArgTypeOptions(inputMeta, "state")).toEqual([...INPUT_STORY_SPEC.options.state]);
    expect(getArgTypeOptions(inputMeta, "iconPosition")).toEqual([
      ...INPUT_STORY_SPEC.options.iconPosition,
    ]);
  });

  test("Dropdown story meta uses spec defaults and options", () => {
    const meta = dropdownMeta as { args?: Record<string, unknown> };
    expect(meta.args).toEqual({ ...DROPDOWN_STORY_SPEC.defaults });
    expect(getArgTypeOptions(dropdownMeta, "size")).toEqual([
      ...DROPDOWN_STORY_SPEC.options.size,
    ]);
    expect(getArgTypeOptions(dropdownMeta, "state")).toEqual([
      ...DROPDOWN_STORY_SPEC.options.state,
    ]);
  });

  test("Accordion stories map directly to spec story variants", () => {
    const meta = accordionMeta as { args?: Record<string, unknown> };
    expect(meta.args).toEqual({ ...ACCORDION_STORY_SPEC.defaults });

    expect((AccordionDefaultStory as { args: Record<string, unknown> }).args).toEqual({
      ...ACCORDION_STORY_SPEC.defaults,
      ...ACCORDION_STORY_SPEC.stories.default,
    });

    expect((AccordionFirstExpandedStory as { args: Record<string, unknown> }).args).toEqual({
      ...ACCORDION_STORY_SPEC.defaults,
      ...ACCORDION_STORY_SPEC.stories.firstExpanded,
    });
  });
});
