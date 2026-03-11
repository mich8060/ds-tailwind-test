import { Flex } from "../../design-system/components/Flex";
import { Table } from "../../design-system/components/Table";
import { Text } from "../../design-system/components/Text";
import tokensCss from "../../design-system/tokens/index.css?raw";
import { DocPageLayout } from "./DocPageLayout";

const TOKEN_COLUMNS = [
  { key: "token", label: "Variable" },
  { key: "value", label: "Default Value" },
];

const PRIMITIVE_PREFIXES = [
  "--uds-color-",
  "--uds-spacing-",
  "--uds-radius-",
  "--uds-font-size-",
  "--uds-font-weight-",
  "--uds-line-",
  "--uds-shadow-",
  "--uds-border-width-",
  "--uds-animation-",
] as const;

const PRIMITIVE_GROUPS: Record<string, readonly string[]> = {
  Color: ["--uds-color-"],
  Spacing: ["--uds-spacing-"],
  Radius: ["--uds-radius-"],
  Typography: ["--uds-font-size-", "--uds-font-weight-", "--uds-line-"],
  BorderWidth: ["--uds-border-width-"],
  Shadow: ["--uds-shadow-"],
  Motion: ["--uds-animation-"],
};

function extractTokenMap(cssSource: string): Map<string, string> {
  const tokenMap = new Map<string, string>();
  const declarationPattern = /(--uds-[a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let match: RegExpExecArray | null = declarationPattern.exec(cssSource);

  while (match) {
    const tokenName = match[1];
    const tokenValue = match[2].trim();
    if (!tokenMap.has(tokenName)) {
      tokenMap.set(tokenName, tokenValue);
    }
    match = declarationPattern.exec(cssSource);
  }

  return tokenMap;
}

const tokenMap = extractTokenMap(tokensCss);

function rowsForPrefixes(prefixes: readonly string[]) {
  return Array.from(tokenMap.entries())
    .filter(([tokenName]) => prefixes.some((prefix) => tokenName.startsWith(prefix)))
    .map(([token, value]) => ({ token, value }))
    .sort((left, right) => left.token.localeCompare(right.token));
}

const allPrimitiveRows = rowsForPrefixes(PRIMITIVE_PREFIXES);

export function PrimitiveCssVariablesPage() {
  return (
    <DocPageLayout
      title="Primitive CSS Variables"
      description="Primitive variables are base design decisions for color, spacing, typography, shape, shadow, border width, and motion."
    >
      <Flex direction="column" gap="24">
        <Flex direction="column" gap="8">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Primitive Variable Inventory
          </Text>
          <Text as="p" variant="body-16" leading="regular">
            These variables are sourced from the token bundle and listed by their
            CSS custom property names.
          </Text>
        </Flex>

        <Table columns={TOKEN_COLUMNS} data={allPrimitiveRows} />

        {Object.entries(PRIMITIVE_GROUPS).map(([groupName, prefixes]) => {
          const rows = rowsForPrefixes(prefixes);
          return (
            <Flex key={groupName} direction="column" gap="12">
              <Text as="h3" variant="heading-24" weight="medium" leading="regular">
                {groupName}
              </Text>
              <Table columns={TOKEN_COLUMNS} data={rows} />
            </Flex>
          );
        })}
      </Flex>
    </DocPageLayout>
  );
}
