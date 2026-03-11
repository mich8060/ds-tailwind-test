import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb } from "../../design-system/components/Breadcrumb";
import { Flex } from "../../design-system/components/Flex";
import { Text } from "../../design-system/components/Text";
import { UDS_RUNTIME_VERSION } from "../../design-system/version";

interface PageHeaderMetaProps {
  title: string;
  description?: string;
  author?: string;
}

const AUTO_LAST_UPDATED = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

function getSectionLabel(pathname: string): string {
  if (pathname.startsWith("/components/")) return "Components";
  if (pathname.startsWith("/patterns/")) return "Modules";
  if (pathname.startsWith("/foundations/")) return "Foundations";
  if (pathname === "/docs/tokens") return "Foundations";
  if (pathname === "/docs/components-overview") return "Components";
  return "Getting Started";
}

function getVersionLabel(pathname: string): string {
  const suffix = pathname.startsWith("/components/") ? "COMPONENT" : "PAGE";
  return `${UDS_RUNTIME_VERSION} ${suffix}`;
}

function sanitizeLine(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

function buildDescriptionLines(title: string, description?: string): [string, string, string] {
  const baseLine = sanitizeLine(
    description && description.length > 0
      ? description
      : `${title} provides a focused view of this area of the design system.`
  );

  const usageLine = sanitizeLine(
    `Use this page to understand when to apply ${title}, what patterns it supports, and how it fits into product workflows.`
  );

  const qualityLine = sanitizeLine(
    `Examples and guidance here are aligned to shared tokens, accessibility expectations, and the current system version contract.`
  );

  return [baseLine, usageLine, qualityLine];
}

export function PageHeaderMeta({ title, description, author = "@Michael-Stevens" }: PageHeaderMetaProps) {
  const { pathname } = useLocation();

  const section = useMemo(() => getSectionLabel(pathname), [pathname]);
  const version = useMemo(() => getVersionLabel(pathname), [pathname]);
  const breadcrumbItems = useMemo(
    () => [
      { label: "Unified Design System", href: "/getting-started" },
      { label: section, href: pathname.startsWith("/components/") ? "/docs/components-overview" : undefined },
      { label: title },
    ],
    [pathname, section, title]
  );
  const descriptionLines = useMemo(() => buildDescriptionLines(title, description), [title, description]);
  const descriptionText = useMemo(() => descriptionLines.join(" "), [descriptionLines]);

  return (
    <Flex alignItems="flex-end" justifyContent="space-between" wrap gap="16">
      <Flex direction="column" gap="16">
        <Breadcrumb items={breadcrumbItems} />
        <Text as="h1" variant="heading-32" weight="bold" leading="regular">
          {title}
        </Text>
        <Text as="p" variant="body-16" leading="regular" className="app-shell__page-header-description">
          {descriptionText}
        </Text>
      </Flex>
      <Flex direction="column" className="app-shell__page-header-meta">
          <Flex className="app-shell__page-header-meta-row">
            <Text as="span" variant="body-14" weight="semibold" leading="regular" style={{ color: "var(--uds-text-secondary)" }}>
              Author
            </Text>
            <Text as="span" variant="body-14" leading="regular">
              {author}
            </Text>
          </Flex>
          <Flex className="app-shell__page-header-meta-row">
            <Text as="span" variant="body-14" weight="semibold" leading="regular" style={{ color: "var(--uds-text-secondary)" }}>
              Last updated
            </Text>
            <Text as="span" variant="body-14" leading="regular">
              {AUTO_LAST_UPDATED}
            </Text>
          </Flex>
          <Flex className="app-shell__page-header-meta-row">
            <Text as="span" variant="body-14" weight="semibold" leading="regular" style={{ color: "var(--uds-text-secondary)" }}>
              Version
            </Text>
            <Text as="span" variant="body-14" leading="regular">
              {version}
            </Text>
          </Flex>
      </Flex>
    </Flex>
  );
}
