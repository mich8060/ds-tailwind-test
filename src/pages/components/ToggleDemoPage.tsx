import { useState } from "react";
import { Flex, Text, Toggle } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";

export function ToggleDemoPage() {
    const [notifications, setNotifications] = useState(true);
    const [marketing, setMarketing] = useState(false);

    return (
        <DocPageLayout
            title="Toggle"
            description="Toggle is used for immediate on/off preferences and feature states."
        >
            <Flex direction="column" gap="24">
                <Text as="h2" variant="heading-24" weight="bold" leading="regular">
                    Settings
                </Text>
                <Flex alignItems="center" gap="24">
                    <Toggle checked={notifications} onChange={setNotifications} />
                    <Text as="span" variant="body-16" leading="regular">
                        Email notifications
                    </Text>
                </Flex>
                <Flex alignItems="center" gap="12">
                    <Toggle checked={marketing} onChange={setMarketing} />
                    <Text as="span" variant="body-16" leading="regular">
                        Marketing updates
                    </Text>
                </Flex>
            </Flex>
        </DocPageLayout>
    );
}
