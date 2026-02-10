import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
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
    appearance: {
      control: "select",
      options: [
        "primary",
        "soft",
        "outline",
        "text",
        "ghost",
        "destructive",
        "disabled",
      ],
      description: "Visual style variant",
    },
    layout: {
      control: "select",
      options: ["label-only", "icon-left", "icon-right", "icon-only"],
      description: "Content arrangement",
    },
    size: {
      control: "select",
      options: ["large", "default", "small", "xsmall"],
      description: "Button size",
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
  },
  parameters: {
    layout: "centered",
  },
};

// ── Default ──────────────────────────────────────────────────────────
export const Default = {
  args: {
    label: "Button",
  },
};

// ── Appearances ──────────────────────────────────────────────────────
export const Primary = {
  args: {
    label: "Primary",
    appearance: "primary",
  },
};

export const Soft = {
  args: {
    label: "Soft",
    appearance: "soft",
  },
};

export const Outline = {
  args: {
    label: "Outline",
    appearance: "outline",
  },
};

export const Text = {
  args: {
    label: "Text",
    appearance: "text",
  },
};

export const Ghost = {
  args: {
    label: "Ghost",
    appearance: "ghost",
  },
};

export const Destructive = {
  args: {
    label: "Destructive",
    appearance: "destructive",
  },
};

export const Disabled = {
  args: {
    label: "Disabled",
    disabled: true,
  },
};

// ── All Appearances ──────────────────────────────────────────────────
export const AllAppearances = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
      <Button label="Primary" appearance="primary" />
      <Button label="Soft" appearance="soft" />
      <Button label="Outline" appearance="outline" />
      <Button label="Text" appearance="text" />
      <Button label="Ghost" appearance="ghost" />
      <Button label="Destructive" appearance="destructive" />
      <Button label="Disabled" appearance="disabled" />
    </div>
  ),
};

// ── Sizes ────────────────────────────────────────────────────────────
export const Large = {
  args: {
    label: "Large",
    size: "large",
  },
};

export const Small = {
  args: {
    label: "Small",
    size: "small",
  },
};

export const XSmall = {
  args: {
    label: "XSmall",
    size: "xsmall",
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Button label="Large" size="large" />
      <Button label="Default" size="default" />
      <Button label="Small" size="small" />
      <Button label="XSmall" size="xsmall" />
    </div>
  ),
};

// ── Layouts ──────────────────────────────────────────────────────────
export const IconLeft = {
  args: {
    label: "Add Item",
    icon: "Plus",
    layout: "icon-left",
  },
};

export const IconRight = {
  args: {
    label: "Next",
    icon: "ArrowRight",
    layout: "icon-right",
  },
};

export const IconOnly = {
  args: {
    icon: "Trash",
    layout: "icon-only",
    "aria-label": "Delete item",
  },
};

export const AllLayouts = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Button label="Label Only" layout="label-only" />
      <Button label="Icon Left" icon="Plus" layout="icon-left" />
      <Button label="Icon Right" icon="ArrowRight" layout="icon-right" />
      <Button icon="Trash" layout="icon-only" aria-label="Delete" />
    </div>
  ),
};

// ── Icon Sizes ───────────────────────────────────────────────────────
export const CustomIconSize = {
  args: {
    label: "Download",
    icon: "DownloadSimple",
    layout: "icon-left",
    iconSize: 24,
  },
};

// ── Composition Patterns ─────────────────────────────────────────────
export const ActionBar = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
      <Button label="Cancel" appearance="outline" />
      <Button label="Save Changes" icon="FloppyDisk" layout="icon-left" />
    </div>
  ),
};

export const Toolbar = {
  render: () => (
    <div style={{ display: "flex", gap: "4px" }}>
      <Button icon="TextB" layout="icon-only" appearance="ghost" aria-label="Bold" />
      <Button icon="TextItalic" layout="icon-only" appearance="ghost" aria-label="Italic" />
      <Button icon="TextUnderline" layout="icon-only" appearance="ghost" aria-label="Underline" />
      <Button icon="TextStrikethrough" layout="icon-only" appearance="ghost" aria-label="Strikethrough" />
    </div>
  ),
};

export const DestructiveConfirmation = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
      <Button label="Cancel" appearance="outline" />
      <Button label="Delete Account" icon="Trash" layout="icon-left" appearance="destructive" />
    </div>
  ),
};

// ── Size × Appearance Matrix ─────────────────────────────────────────
export const SizeAppearanceMatrix = {
  render: () => {
    const sizes = ["large", "default", "small", "xsmall"];
    const appearances = ["primary", "soft", "outline", "text", "ghost", "destructive"];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {sizes.map((size) => (
          <div key={size} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ width: "64px", fontSize: "12px", color: "#888" }}>{size}</span>
            {appearances.map((appearance) => (
              <Button
                key={`${size}-${appearance}`}
                label={appearance}
                size={size}
                appearance={appearance}
              />
            ))}
          </div>
        ))}
      </div>
    );
  },
};

// ── Tracking ────────────────────────────────────────────────────────
export const TrackingString = {
  name: "Tracking (string)",
  args: {
    label: "Sign Up",
    tracking: "signup-cta",
  },
};

export const TrackingObject = {
  name: "Tracking (object)",
  args: {
    label: "Add to Cart",
    icon: "ShoppingCart",
    layout: "icon-left",
    tracking: {
      event: "add_to_cart",
      category: "ecommerce",
      productId: "widget-123",
    },
  },
};
