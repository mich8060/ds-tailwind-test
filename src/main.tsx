import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./design-system/components/Button";
import { Layout } from "./design-system/components/Layout";
import { Text } from "./design-system/components/Text";
import "./styles/index.scss";





++
function PackageWorkspace() {
  return (
    <Layout
      direction="column"
      gap="12"
      style={{ minHeight: "100vh", padding: "var(--uds-spacing-24)", background: "var(--uds-surface-primary)" }}
    >
      <Text as="h1" variant="heading-24" weight="medium" leading="regular">
        Unified Design System Package Workspace
      </Text>
      <Text as="p" variant="body-16" leading="regular">
        Documentation pages were removed from this repository. Use Storybook for component previews.
      </Text>
      <Layout alignItems="center" gap="8">
        <Button appearance="primary" label="Run Storybook (npm run storybook)" disabled />
      </Layout>
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PackageWorkspace />
  </React.StrictMode>
);
