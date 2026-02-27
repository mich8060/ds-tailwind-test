import { Button, Flex, Text } from "../../design-system";
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
    {
        prop: "...rest",
        type: "ButtonHTMLAttributes<HTMLButtonElement>",
        defaultValue: "-",
        description: "Native button attributes like disabled, onClick, aria-*, type, id.",
    },
];

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
                </Flex>

                <Flex direction="column" gap="12">
                    <Text as="h2" variant="heading-24" weight="medium" leading="regular">
                        Common Patterns
                    </Text>
                    <Flex alignItems="center" gap="12" wrap>
                        <Button icon="Plus" layout="icon-left" label="Add User" />
                        <Button icon="ArrowRight" layout="icon-right" label="Continue" />
                        <Button icon="Trash" layout="icon-only" label="Delete" aria-label="Delete item" />
                    </Flex>
                </Flex>
            </Flex>
            <ComponentPropsTable rows={BUTTON_PROPS} />
        </DocPageLayout>
    );
}
