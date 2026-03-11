import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getStaticPageByPath } from "../demos/static-page.registry";
import { Container } from "../design-system/components/Container";
import { Text } from "../design-system/components/Text";

const staticPageModules = import.meta.glob("./docs/*Page.tsx");
const patternPageModules = import.meta.glob("./patterns/*Page.tsx");

function modulePathFor(page: NonNullable<ReturnType<typeof getStaticPageByPath>>): string {
  return `./${page.moduleDir}/${page.moduleFile}.tsx`;
}

function resolveLoader(path: string) {
  return (
    (staticPageModules[path] as (() => Promise<Record<string, React.ComponentType>>) | undefined) ??
    (patternPageModules[path] as (() => Promise<Record<string, React.ComponentType>>) | undefined)
  );
}

function MissingStaticPage({ path }: { path: string }) {
  return (
    <Container appearance="transparent" padding="large">
      <Text as="h2" variant="heading-24" weight="medium">
        Page Missing
      </Text>
      <Text as="p" variant="body-16">
        No static page definition was found for "{path}".
      </Text>
    </Container>
  );
}

export function StaticPageRoute() {
  const location = useLocation();
  const page = getStaticPageByPath(location.pathname);
  if (!page) return <Navigate to="/getting-started" replace />;

  const modulePath = modulePathFor(page);
  const loader = resolveLoader(modulePath);
  if (!loader) return <MissingStaticPage path={location.pathname} />;

  const LazyComponent = React.lazy(async () => {
    const loaded = await loader();
    const component = loaded[page.exportName];
    if (!component) {
      throw new Error(`Static page export "${page.exportName}" was not found in ${modulePath}.`);
    }
    return { default: component };
  });

  return (
    <React.Suspense fallback={<Container appearance="transparent" padding="large">Loading page...</Container>}>
      <LazyComponent />
    </React.Suspense>
  );
}
