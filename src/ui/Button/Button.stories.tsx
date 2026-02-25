import Button from "./Button";
import { createStoryArgsFromSpec } from "../_spec/createStoryArgsFromSpec";
import {
  BUTTON_APPEARANCES,
  BUTTON_DEFAULTS,
  BUTTON_LAYOUTS,
  BUTTON_SIZES,
} from "./Button.spec";
import type { StorySpec } from "../_spec/types";

type ButtonStoryArgs = {
  label: string;
  icon?: string;
  appearance: (typeof BUTTON_APPEARANCES)[number];
  layout: (typeof BUTTON_LAYOUTS)[number];
  size: (typeof BUTTON_SIZES)[number];
  iconSize?: number;
  disabled?: boolean;
  tracking?: string | Record<string, unknown>;
  "aria-label"?: string;
};

const BUTTON_DEFAULT_ARGS: ButtonStoryArgs = {
  label: "Button",
  icon: "Plus",
  appearance: BUTTON_DEFAULTS.appearance,
  layout: BUTTON_DEFAULTS.layout,
  size: BUTTON_DEFAULTS.size,
};

const BUTTON_STORY_SPEC = {
  defaults: BUTTON_DEFAULT_ARGS,
  options: {
    appearance: BUTTON_APPEARANCES,
    layout: BUTTON_LAYOUTS,
    size: BUTTON_SIZES,
  },
  stories: {
    primary: { label: "Primary", appearance: "primary" },
    soft: { label: "Soft", appearance: "soft" },
    outline: { label: "Outline", appearance: "outline" },
    text: { label: "Text", appearance: "text" },
    ghost: { label: "Ghost", appearance: "ghost" },
    destructive: { label: "Destructive", appearance: "destructive" },
    disabled: { label: "Disabled", appearance: "disabled", disabled: true },
    large: { label: "Large", size: "large" },
    small: { label: "Small", size: "small" },
    xsmall: { label: "XSmall", size: "xsmall" },
    iconLeft: { label: "Add Item", icon: "Plus", layout: "icon-left" },
    iconRight: { label: "Next", icon: "ArrowRight", layout: "icon-right" },
    iconOnly: { icon: "Trash", layout: "icon-only", label: "", "aria-label": "Delete item" },
    customIconSize: {
      label: "Download",
      icon: "DownloadSimple",
      layout: "icon-left",
      iconSize: 24,
    },
    trackingString: {
      label: "Sign Up",
      tracking: "signup-cta",
    },
    trackingObject: {
      label: "Add to Cart",
      icon: "ShoppingCart",
      layout: "icon-left",
      tracking: {
        event: "add_to_cart",
        category: "ecommerce",
        productId: "widget-123",
      },
    },
  } as const,
} satisfies StorySpec<ButtonStoryArgs>;

const fromSpec = createStoryArgsFromSpec<ButtonStoryArgs>(
  BUTTON_STORY_SPEC.defaults,
);

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: BUTTON_STORY_SPEC.defaults,
  argTypes: {
    label: {
      control: "text",
      description: "Button text label",
    },
    tracking: {
      control: "object",
      description:
        'Analytics payload — string or object. Fires a "uds:track" CustomEvent on click.',
    },
    icon: {
      control: "text",
      description: "Phosphor icon name (e.g. ArrowRight, Plus, Trash)",
    },
    iconSize: {
      control: "number",
      description: "Override icon size in px",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
    appearance: {
      control: "select",
      options: [...BUTTON_APPEARANCES],
      description: "Visual style variant",
    },
    layout: {
      control: "select",
      options: [...BUTTON_LAYOUTS],
      description: "Content arrangement",
    },
    size: {
      control: "select",
      options: [...BUTTON_SIZES],
      description: "Button size",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: fromSpec({}),
};

export const Primary = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.primary),
};

export const Soft = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.soft),
};

export const Outline = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.outline),
};

export const Text = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.text),
};

export const Ghost = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.ghost),
};

export const Destructive = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.destructive),
};

export const Disabled = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.disabled),
};

export const Large = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.large),
};

export const Small = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.small),
};

export const XSmall = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.xsmall),
};

export const IconLeft = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.iconLeft),
};

export const IconRight = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.iconRight),
};

export const IconOnly = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.iconOnly),
};

export const CustomIconSize = {
  args: fromSpec(BUTTON_STORY_SPEC.stories.customIconSize),
};

export const TrackingString = {
  name: "Tracking (string)",
  args: fromSpec(BUTTON_STORY_SPEC.stories.trackingString),
};

export const TrackingObject = {
  name: "Tracking (object)",
  args: fromSpec(BUTTON_STORY_SPEC.stories.trackingObject),
};
