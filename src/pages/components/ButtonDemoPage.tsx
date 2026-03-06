import { Button } from "../../design-system/components/Button";
import { Code } from "../../design-system/components/Code";
import { Divider } from "../../design-system/components/Divider";
import { Flex } from "../../design-system/components/Flex";
import { Text } from "../../design-system/components/Text";
import { DocPageLayout } from "../docs/DocPageLayout";
import { ComponentPropsTable, type ComponentPropRow } from "../docs/ComponentPropsTable";

const BUTTON_PROPS: ComponentPropRow[] = [
    { prop: "label", type: "string", defaultValue: "-", description: "Visible button label." },
    {
        prop: "appearance",
        type: '"primary" | "soft" | "outline" | "text" | "ghost" | "disabled" | "destructive"',
        defaultValue: '"primary"',
        description: "Visual style and emphasis.",
    },
    {
        prop: "layout",
        type: '"label-only" | "icon-left" | "icon-right" | "icon-only" | "only"',
        defaultValue: '"label-only"',
        description: "Layout for label and icon content.",
    },
    {
        prop: "size",
        type: '"large" | "default" | "small" | "xsmall"',
        defaultValue: '"default"',
        description: "Control size token.",
    },
    { prop: "icon", type: "string | ReactNode", defaultValue: "-", description: "Icon name or custom icon node." },
    { prop: "iconSize", type: "number", defaultValue: "-", description: "Explicit icon size in px." },
    { prop: "icons", type: "ReactNode", defaultValue: "-", description: "Custom icon slot content." },
    { prop: "children", type: "ReactNode", defaultValue: "-", description: "Optional custom content." },
    { prop: "tracking", type: "string | Record<string, unknown>", defaultValue: "-", description: "Analytics payload for click tracking." },
    { prop: "loading", type: "boolean", defaultValue: "false", description: "Shows a spinner while preserving button width and disables interaction." },
    {
        prop: "...rest",
        type: "ButtonHTMLAttributes<HTMLButtonElement>",
        defaultValue: "-",
        description: "Native button attributes like disabled, onClick, aria-*, type, id.",
    },
];

const BUTTON_SIZES = ["large", "default", "small", "xsmall"] as const;

const BUTTON_LAYOUT_EXAMPLES = [
    {
        layout: "label-only" as const,
        label: "Label only",
    },
    {
        layout: "icon-left" as const,
        label: "Add User",
        icon: "Plus",
    },
    {
        layout: "icon-right" as const,
        label: "Continue",
        icon: "ArrowRight",
    },
    {
        layout: "icon-only" as const,
        label: "Delete",
        icon: "Trash",
        ariaLabel: "Delete item",
    },
    {
        layout: "only" as const,
        label: "More actions",
        icon: "DotsThree",
        ariaLabel: "More actions",
    },
];

const VARIANTS_SNIPPET = `<Button appearance="primary" label="Primary" />
<Button appearance="soft" label="Soft" />
<Button appearance="outline" label="Outline" />
<Button appearance="text" label="Text" />
<Button appearance="ghost" label="Ghost" />
<Button appearance="destructive" label="Destructive" />
<Button appearance="disabled" label="Disabled" />`;

const LAYOUTS_SNIPPET = `<Button size="default" layout="label-only" label="Label only" />
<Button size="default" layout="icon-left" icon="Plus" label="Add User" />
<Button size="default" layout="icon-right" icon="ArrowRight" label="Continue" />
<Button size="default" layout="icon-only" icon="Trash" label="Delete" aria-label="Delete item" />
<Button size="default" layout="only" icon="DotsThree" label="More actions" aria-label="More actions" />`;

const INTERACTION_SNIPPET = `<Button label="Disabled prop" disabled />
<Button label="Tracking Event" tracking="button-demo-click" />
<Button
  label="Tracking Payload"
  tracking={{ event: "demo_click", section: "button" }}
/>`;

const LOADING_SNIPPET = `<Button label="Saving" loading />
<Button label="Submitting" appearance="soft" loading />
<Button label="Deleting" appearance="destructive" loading />
<Button layout="icon-left" icon="DownloadSimple" label="Downloading" loading />`;

export function ButtonDemoPage() {
    return (
        <DocPageLayout
            title="Button"
            description="Buttons trigger primary and secondary actions. Use appearance to communicate emphasis and intent."
        >
            <Flex direction="column" gap="48">
                <Flex direction="column" gap="12">
                    <Text as="h2" variant="heading-24" weight="medium" leading="regular">
                        Variants
                    </Text>
                    <Flex alignItems="center" gap="12" wrap>
                        <Button appearance="primary" label="Primary" />
                        <Button appearance="soft" label="Soft" />
                        <Button appearance="outline" label="Outline" />
                        <Button appearance="text" label="Text" />
                        <Button appearance="ghost" label="Ghost" />
                        <Button appearance="destructive" label="Destructive" />
                        <Button appearance="disabled" label="Disabled" />
                    </Flex>
                    <Code language="tsx" code={VARIANTS_SNIPPET} />
                </Flex>
                <Divider variant="solid" />

                <Flex direction="column" gap="16">
                    <Text as="h2" variant="heading-24" weight="medium" leading="regular">
                        Layout Variants by Size
                    </Text>
                    {BUTTON_SIZES.map((size) => (
                        <Flex key={size} direction="column" gap="8">
                            <Text as="h3" variant="body-16" weight="semibold" leading="regular">
                                {size}
                            </Text>
                            <Flex alignItems="center" gap="12" wrap>
                                {BUTTON_LAYOUT_EXAMPLES.map((example) => (
                                    <Button
                                        key={`${size}-${example.layout}`}
                                        size={size}
                                        layout={example.layout}
                                        label={example.label}
                                        icon={example.icon}
                                        aria-label={example.ariaLabel}
                                    />
                                ))}
                            </Flex>
                        </Flex>
                    ))}
                    <Code language="tsx" code={LAYOUTS_SNIPPET} />
                </Flex>
                <Divider variant="solid" />

                <Flex direction="column" gap="12">
                    <Text as="h2" variant="heading-24" weight="medium" leading="regular">
                        Interaction States
                    </Text>
                    <Flex alignItems="center" gap="12" wrap>
                        <Button label="Disabled prop" disabled />
                        <Button label="Tracking Event" tracking="button-demo-click" />
                        <Button label="Tracking Payload" tracking={{ event: "demo_click", section: "button" }} />
                    </Flex>
                    <Code language="tsx" code={INTERACTION_SNIPPET} />
                </Flex>
                <Divider variant="solid" />

                <Flex direction="column" gap="12">
                    <Text as="h2" variant="heading-24" weight="medium" leading="regular">
                        Loading State
                    </Text>
                    <Flex alignItems="center" gap="12" wrap>
                        <Button label="Saving" loading />
                        <Button label="Submitting" appearance="soft" loading />
                        <Button label="Deleting" appearance="destructive" loading />
                        <Button layout="icon-left" icon="DownloadSimple" label="Downloading" loading />
                    </Flex>
                    <Code language="tsx" code={LOADING_SNIPPET} />
                </Flex>
            </Flex>
            <Divider variant="solid" />
            <ComponentPropsTable rows={BUTTON_PROPS} />
        </DocPageLayout>
    );
}
