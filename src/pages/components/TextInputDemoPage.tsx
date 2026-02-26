import { useState } from "react";
import { Flex, Text, TextInput } from "../../design-system";
import { DocPageLayout } from "../docs/DocPageLayout";

export function TextInputDemoPage() {
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");

  return (
    <DocPageLayout
      title="TextInput"
      description="TextInput supports standard entry, icon affordances, and stateful form experiences."
    >
      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          Basic Usage
        </Text>
        <TextInput
          value={email}
          onChange={(e) => {
            const next =
              typeof e === "object" && e !== null && "target" in e
                ? (e as { target?: { value?: unknown } }).target?.value
                : e;
            setEmail(typeof next === "string" ? next : String(next ?? ""));
          }}
          placeholder="Enter your email"
        />
      </Flex>

      <Flex direction="column" gap="16">
        <Text as="h2" variant="heading-24" weight="medium" leading="regular">
          With Icon
        </Text>
        <TextInput
          value={search}
          onChange={(e) => {
            const next =
              typeof e === "object" && e !== null && "target" in e
                ? (e as { target?: { value?: unknown } }).target?.value
                : e;
            setSearch(typeof next === "string" ? next : String(next ?? ""));
          }}
          placeholder="Search components"
          icon="MagnifyingGlass"
          iconPosition="right"
        />
      </Flex>
    </DocPageLayout>
  );
}
