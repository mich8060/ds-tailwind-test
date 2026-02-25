import Dropdown from "./Dropdown";
import { DROPDOWN_STORY_SPEC } from "./Dropdown.spec";
import { createStoryArgsFromSpec } from "../_spec/createStoryArgsFromSpec";

type DropdownStoryArgs = {
  options: readonly { value: string; label: string }[];
  value: string;
  placeholder: string;
  size: "compact" | "default";
  state: "default" | "focused" | "error" | "disabled";
  placement: string;
  disabled: boolean;
  label: string;
};

const DROPDOWN_DEFAULT_ARGS: DropdownStoryArgs = {
  ...DROPDOWN_STORY_SPEC.defaults,
};

const fromSpec = createStoryArgsFromSpec<DropdownStoryArgs>(DROPDOWN_DEFAULT_ARGS);

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  args: DROPDOWN_DEFAULT_ARGS,
  argTypes: {
    size: {
      control: "select",
      options: [...DROPDOWN_STORY_SPEC.options.size],
    },
    state: {
      control: "select",
      options: [...DROPDOWN_STORY_SPEC.options.state],
    },
    label: { control: "text", description: "Field label" },
    placeholder: { control: "text", description: "Placeholder text" },
    options: { control: "object", description: "Dropdown options list" },
  },
  parameters: {
    layout: "padded",
  },
};

export const Default = {
  args: fromSpec(DROPDOWN_STORY_SPEC.stories.default),
};

export const Compact = {
  args: fromSpec(DROPDOWN_STORY_SPEC.stories.compact),
};

export const Error = {
  args: fromSpec(DROPDOWN_STORY_SPEC.stories.error),
};

export const Disabled = {
  args: fromSpec(DROPDOWN_STORY_SPEC.stories.disabled),
};
