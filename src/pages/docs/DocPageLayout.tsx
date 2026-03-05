import type { ReactNode } from "react";
import { Flex } from "../../design-system/components/Flex";
import { Text } from "../../design-system/components/Text";

interface DocPageLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function DocPageLayout({ title, description, children }: DocPageLayoutProps) {
  return (
    <Flex className="app-shell__demo-page" direction="column" gap="0">
      <Flex className="app-shell__page-header" direction="column" gap="8">
        <Text as="h1" variant="heading-32" weight="bold" leading="regular">
          {title}
        </Text>
        <Text as="p" variant="body-16" leading="regular">
          {description}
        </Text>
      </Flex>
      <Flex className="app-shell__contentInner" direction="column" gap="24">
        {children}
      </Flex>
    </Flex>
  );
}
