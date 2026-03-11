import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Container } from "../../design-system/components/Container";
import { Text } from "../../design-system/components/Text";
import {
  getComponentDemoBySlug,
  type ComponentDemoDefinition,
} from "../../demos/component-demo.registry";
import { ComponentPlaceholderDemoPage } from "./ComponentPlaceholderDemoPage";

const demoModules = import.meta.glob("./*DemoPage.tsx");

function toDemoModulePath(entry: ComponentDemoDefinition): string | null {
  if (entry.kind !== "module" || !entry.moduleFile) return null;
  return `./${entry.moduleFile}.tsx`;
}

function buildLazyComponent(entry: ComponentDemoDefinition): React.LazyExoticComponent<React.ComponentType> | null {
  const modulePath = toDemoModulePath(entry);
  if (!modulePath) return null;
  const loader = demoModules[modulePath] as
    | (() => Promise<Record<string, React.ComponentType>>)
    | undefined;
  if (!loader || !entry.exportName) return null;
  return React.lazy(async () => {
    const loaded = await loader();
    const component = loaded[entry.exportName];
    if (!component) {
      throw new Error(`Demo export "${entry.exportName}" was not found in ${modulePath}.`);
    }
    return { default: component };
  });
}

function MissingDemo({ slug }: { slug: string }) {
  return (
    <Container appearance="transparent" padding="large">
      <Text as="h2" variant="heading-24" weight="medium">
        Demo Missing
      </Text>
      <Text as="p" variant="body-16">
        No demo module is configured for component route "{slug}".
      </Text>
    </Container>
  );
}

export function ComponentDemoRoutePage() {
  const { componentId } = useParams<{ componentId: string }>();
  if (!componentId) return <Navigate to="/getting-started" replace />;

  const entry = getComponentDemoBySlug(componentId);
  if (!entry) return <Navigate to="/getting-started" replace />;

  if (entry.kind === "placeholder") {
    return <ComponentPlaceholderDemoPage componentName={entry.placeholderName ?? entry.label} />;
  }

  const DemoComponent = buildLazyComponent(entry);
  if (!DemoComponent) return <MissingDemo slug={componentId} />;

  return (
    <React.Suspense fallback={<Container appearance="transparent" padding="large">Loading demo...</Container>}>
      <DemoComponent />
    </React.Suspense>
  );
}
