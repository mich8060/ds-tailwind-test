import { Flex } from "../../design-system/components/Flex";
import { Table } from "../../design-system/components/Table";
import { Text } from "../../design-system/components/Text";
import tokensCss from "../../design-system/tokens/index.css?raw";
import { DocPageLayout } from "./DocPageLayout";

const TOKEN_COLUMNS = [
  { key: "token", label: "Variable" },
  { key: "lightValue", label: "Light Value" },
  { key: "darkValue", label: "Dark Value" },
];

const SEMANTIC_PREFIXES = [
  "--uds-text-",
  "--uds-surface-",
  "--uds-border-",
  "--uds-icon-",
  "--uds-focus-ring-",
  "--uds-system-",
] as const;

const SEMANTIC_GROUPS: Record<string, readonly string[]> = {
  Text: ["--uds-text-"],
  Surface: ["--uds-surface-"],
  Border: ["--uds-border-"],
  Icon: ["--uds-icon-"],
  FocusRing: ["--uds-focus-ring-"],
  System: ["--uds-system-"],
};

function extractTokenMap(cssSource: string): Map<string, string> {
  const tokenMap = new Map<string, string>();
  const declarationPattern = /(--uds-[a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let match: RegExpExecArray | null = declarationPattern.exec(cssSource);

  while (match) {
    const tokenName = match[1];
    const tokenValue = match[2].trim();
    tokenMap.set(tokenName, tokenValue);
    match = declarationPattern.exec(cssSource);
  }

  return tokenMap;
}

function extractModeBlock(cssSource: string, selector: ":root" | ".theme-dark"): string {
  const selectorPattern = new RegExp(`\\${selector}\\s*\\{([\\s\\S]*?)\\}`, "i");
  const match = cssSource.match(selectorPattern);
  return match?.[1] ?? "";
}

const lightTokenMap = extractTokenMap(extractModeBlock(tokensCss, ":root"));
const darkTokenMap = extractTokenMap(extractModeBlock(tokensCss, ".theme-dark"));

function rowsForPrefixes(prefixes: readonly string[]) {
  const allTokens = Array.from(
    new Set([...lightTokenMap.keys(), ...darkTokenMap.keys()]),
  );

  return allTokens
    .filter((tokenName) => prefixes.some((prefix) => tokenName.startsWith(prefix)))
    .map((token) => ({
      token,
      lightValue: lightTokenMap.get(token) ?? "—",
      darkValue: darkTokenMap.get(token) ?? "—",
    }))
    .sort((left, right) => left.token.localeCompare(right.token));
}

const allSemanticRows = rowsForPrefixes(SEMANTIC_PREFIXES);

export function SemanticCssVariablesPage() {
  return (
    <DocPageLayout
      title="Semantic CSS Variables"
      description="Semantic variables map design intent to implementable CSS properties for text, surface, borders, iconography, focus, and system feedback in both light and dark modes."
    >
      <Flex direction="column" gap="24">
        <Flex direction="column" gap="8">
          <Text as="h2" variant="heading-24" weight="medium" leading="regular">
            Semantic Variable Inventory
          </Text>
          <Text as="p" variant="body-16" leading="regular">
            Use semantic variables in component styling. They remain stable while
            underlying primitive values can evolve by brand and theme.
          </Text>
        </Flex>

        <Table columns={TOKEN_COLUMNS} data={allSemanticRows} />

        {Object.entries(SEMANTIC_GROUPS).map(([groupName, prefixes]) => {
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
