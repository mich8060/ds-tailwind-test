import Input from "./Input";
import { INPUT_STORY_SPEC } from "./Input.spec";
import { createStoryArgsFromSpec } from "../_spec/createStoryArgsFromSpec";

type InputStoryArgs = {
  value: string;
  placeholder: string;
  type: string;
  size: "compact" | "default";
  state: "default" | "focused" | "error" | "disabled";
  disabled: boolean;
  iconPosition: "left" | "right";
  icon: string;
  label: string;
};

const INPUT_DEFAULT_ARGS: InputStoryArgs = {
  ...INPUT_STORY_SPEC.defaults,
};

const fromSpec = createStoryArgsFromSpec<InputStoryArgs>(INPUT_DEFAULT_ARGS);

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: INPUT_DEFAULT_ARGS,
  argTypes: {
    size: {
      control: "select",
      options: [...INPUT_STORY_SPEC.options.size],
    },
    state: {
      control: "select",
      options: [...INPUT_STORY_SPEC.options.state],
    },
    iconPosition: {
      control: "select",
      options: [...INPUT_STORY_SPEC.options.iconPosition],
    },
    placeholder: { control: "text", description: "Placeholder text" },
    icon: { control: "text", description: "Phosphor icon name" },
    label: { control: "text", description: "Accessible label" },
  },
  parameters: {
    layout: "padded",
  },
};

export const Default = {
  args: fromSpec(INPUT_STORY_SPEC.stories.default),
};

export const Compact = {
  args: fromSpec(INPUT_STORY_SPEC.stories.compact),
};

export const Error = {
  args: fromSpec(INPUT_STORY_SPEC.stories.error),
};

export const Disabled = {
  args: fromSpec(INPUT_STORY_SPEC.stories.disabled),
};

export const IconLeft = {
  args: fromSpec(INPUT_STORY_SPEC.stories.iconLeft),
};

export const IconRight = {
  args: fromSpec(INPUT_STORY_SPEC.stories.iconRight),
};
