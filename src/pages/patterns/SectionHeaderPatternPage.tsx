import type { ReactNode } from "react";
import { Button } from "../../design-system/components/Button";
import { Divider } from "../../design-system/components/Divider";
import { Flex } from "../../design-system/components/Flex";
import { Tag } from "../../design-system/components/Tag";
import { Text } from "../../design-system/components/Text";
import { DocPageLayout } from "../docs/DocPageLayout";

function SectionHeaderBlock({
  eyebrow,
  title,
  description,
  meta,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <Flex
      direction="column"
      gap="12"
      style={{
        border: "var(--uds-border-width-1) solid var(--uds-border-primary)",
        borderRadius: "var(--uds-radius-8)",
        padding: "var(--uds-spacing-20)",
        backgroundColor: "var(--uds-surface-primary)",
      }}
    >
      <Flex justifyContent="space-between" alignItems="flex-start" gap="16" wrap>
        <Flex direction="column" gap="8" style={{ maxWidth: "760px" }}>
          {eyebrow ? (
            <Text as="span" variant="body-12" weight="semibold" leading="regular">
              {eyebrow}
            </Text>
          ) : null}
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            {title}
          </Text>
          {description ? (
            <Text as="p" variant="body-16" leading="regular">
              {description}
            </Text>
          ) : null}
          {meta ? <Flex alignItems="center" gap="8" wrap>{meta}</Flex> : null}
        </Flex>
        {actions ? <Flex alignItems="center" gap="8" wrap>{actions}</Flex> : null}
      </Flex>
    </Flex>
  );
}

export function SectionHeaderPatternPage() {
  return (
    <DocPageLayout
      title="Section Header"
      description="Section Header is a reusable pattern for page and section intros using existing UDS primitives."
    >
      <Flex direction="column" gap="32">
        <Flex direction="column" gap="10">
          <Text as="h3" variant="heading-20" weight="medium" leading="regular">
            Basic
          </Text>
          <SectionHeaderBlock
            eyebrow="Overview"
            title="Candidates"
            description="Review active candidates, monitor progress, and manage handoff steps for this pipeline."
          />
        </Flex>

        <Divider variant="solid" />

        <Flex direction="column" gap="10">
          <Text as="h3" variant="heading-20" weight="medium" leading="regular">
            With Actions
          </Text>
          <SectionHeaderBlock
            eyebrow="Section Header Pattern"
            title="Open Requisitions"
            description="Track open roles and quickly create or export requisition details."
            actions={
              <>
                <Button label="Export" appearance="outline" />
                <Button label="New Requisition" />
              </>
            }
          />
        </Flex>

        <Divider variant="solid" />

        <Flex direction="column" gap="10">
          <Text as="h3" variant="heading-20" weight="medium" leading="regular">
            With Metadata
          </Text>
          <SectionHeaderBlock
            eyebrow="Pipeline"
            title="Cardiology - Denver"
            description="Current status and assignment metadata for this workflow."
            meta={
              <>
                <Tag label="8 Active" color="green" />
                <Tag label="2 Needs Review" color="orange" />
                <Text as="span" variant="body-14" leading="regular">
                  Updated 5 minutes ago
                </Text>
              </>
            }
            actions={
              <>
                <Button label="View Report" appearance="outline" />
                <Button label="Assign Candidate" />
              </>
            }
          />
        </Flex>
      </Flex>
    </DocPageLayout>
  );
}
