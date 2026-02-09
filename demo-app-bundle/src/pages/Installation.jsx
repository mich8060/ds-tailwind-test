import React, { useEffect } from "react";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import Flex from "../ui/Flex/Flex";
import { formatLastUpdated } from "../utils/formatDate";
import CopyButton from "../ui/CopyButton/CopyButton";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "./Installation.scss";

export default function Installation() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="page">
      <header className="page__header">
        <div className="page__header-container">
          <Breadcrumb />
          <div className="page__header-info">
            <div className="page__header-content">
              <h1 className="page__header-title">Installation</h1>
              <p className="page__header-description">
                Get started with the design system by following these installation steps.
              </p>
            </div>
            <div className="page__header-metadata">
              <div className="page__metadata-row">
                <p className="page__metadata-label">Last updated</p>
                <p className="page__metadata-value">{formatLastUpdated()}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page__content">
        <div className="page__examples-section">
          <div className="demo-group">
            <h2 className="demo-group__heading">Overview</h2>
            <p className="demo-group__description">
              The design system consists of CSS custom properties (tokens), typography classes, 
              utility classes, and React components. This guide will walk you through setting 
              up the design system in your project.
            </p>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Step 1: Install the Package</h2>
            <p className="demo-group__description">
              Install the design system package from npm:
            </p>
            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <h3 className="uds-heading-20-semibold" style={{ marginTop: 0, marginBottom: "12px" }}>
                npm
              </h3>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`npm install @mich8060/chg-design-system`} />
                <pre className="installation__code-block">
                  <code className="language-bash">{`npm install @mich8060/chg-design-system`}</code>
                </pre>
              </div>
            </div>

            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <h3 className="uds-heading-20-semibold" style={{ marginTop: 0, marginBottom: "12px" }}>
                yarn
              </h3>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`yarn add @mich8060/chg-design-system`} />
                <pre className="installation__code-block">
                  <code className="language-bash">{`yarn add @mich8060/chg-design-system`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Step 2: Import Styles</h2>
            <p className="demo-group__description">
              Import <strong>both</strong> CSS files in your application's entry point (e.g., <code>index.js</code> or <code>App.js</code>).
              The tokens file must be imported first as it contains CSS variable definitions used by the component styles.
            </p>
            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <h3 className="uds-heading-20-semibold" style={{ marginTop: 0, marginBottom: "12px" }}>
                Import in JavaScript/React (Recommended)
              </h3>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`// ⚠️ Import BOTH files - tokens FIRST, then styles
import '@mich8060/chg-design-system/tokens.css';   // CSS variable definitions (colors, spacing, etc.)
import '@mich8060/chg-design-system/styles.css';   // Component styles`} />
                <pre className="installation__code-block">
                  <code className="language-javascript">{`// ⚠️ Import BOTH files - tokens FIRST, then styles
import '@mich8060/chg-design-system/tokens.css';   // CSS variable definitions (colors, spacing, etc.)
import '@mich8060/chg-design-system/styles.css';   // Component styles`}</code>
                </pre>
              </div>
              <div style={{ 
                marginTop: "16px", 
                padding: "12px 16px", 
                background: "var(--uds-surface-warning, rgba(245, 158, 11, 0.1))", 
                borderRadius: "6px",
                border: "1px solid var(--uds-border-warning, rgba(245, 158, 11, 0.3))"
              }}>
                <p className="uds-body-14" style={{ margin: 0 }}>
                  <strong>Important:</strong> If you only import <code>styles.css</code> without <code>tokens.css</code>, 
                  components will render but lose all colors, backgrounds, and spacing because the CSS variables won't be defined.
                </p>
              </div>
            </div>

            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <h3 className="uds-heading-20-semibold" style={{ marginTop: 0, marginBottom: "12px" }}>
                Import in CSS/SCSS
              </h3>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`@import '@mich8060/chg-design-system/tokens.css';
@import '@mich8060/chg-design-system/styles.css';`} />
                <pre className="installation__code-block">
                  <code className="language-css">{`@import '@mich8060/chg-design-system/tokens.css';
@import '@mich8060/chg-design-system/styles.css';`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Step 3: Install Font</h2>
            <p className="demo-group__description">
              The design system uses the Inter font family. See the{" "}
              <a href="/getting-started/font" style={{ color: "var(--uds-text-brand-primary)" }}>
                Font Installation
              </a>{" "}
              page for detailed instructions.
            </p>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Step 4: Set Brand and Mode</h2>
            <p className="demo-group__description">
              Apply brand and mode attributes to your root HTML element to activate 
              brand-specific tokens and dark mode.
            </p>
            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <h3 className="uds-heading-20-semibold" style={{ marginTop: 0, marginBottom: "12px" }}>
                HTML Attributes
              </h3>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`<html data-brand="design-system" data-mode="light">
  <!-- or -->
<html data-brand="comphealth" data-mode="dark">`} />
                <pre className="installation__code-block">
                  <code className="language-markup">{`<html data-brand="design-system" data-mode="light">
  <!-- or -->
<html data-brand="comphealth" data-mode="dark">`}</code>
                </pre>
              </div>
            </div>

            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <h3 className="uds-heading-20-semibold" style={{ marginTop: 0, marginBottom: "12px" }}>
                Set Dynamically in React
              </h3>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`// In your App.js or index.js
useEffect(() => {
  document.documentElement.setAttribute('data-brand', 'design-system');
  document.documentElement.setAttribute('data-mode', 'light'); // or 'dark'
}, []);`} />
                <pre className="installation__code-block">
                  <code className="language-jsx">{`// In your App.js or index.js
useEffect(() => {
  document.documentElement.setAttribute('data-brand', 'design-system');
  document.documentElement.setAttribute('data-mode', 'light'); // or 'dark'
}, []);`}</code>
                </pre>
              </div>
            </div>

            <div style={{ marginTop: "16px" }}>
              <p className="uds-body-14" style={{ marginTop: 0, marginBottom: 0 }}>
                Available brands: <code>design-system</code>, <code>comphealth</code>, <code>locumsmart</code>, 
                <code>modio</code>, <code>wireframe</code>, <code>connect</code>, <code>weatherby</code>
              </p>
              <p className="uds-body-14" style={{ marginTop: "8px", marginBottom: 0 }}>
                Available modes: <code>light</code>, <code>dark</code>
              </p>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Step 5: Use Typography Classes</h2>
            <p className="demo-group__description">
              Apply typography classes to your HTML elements. See the{" "}
              <a href="/typography" style={{ color: "var(--uds-text-brand-primary)" }}>
                Typography
              </a>{" "}
              page for all available classes.
            </p>
            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`<h1 className="uds-display-48-semibold">Large Heading</h1>
<p className="uds-body-16">Body text content</p>
<h2 className="uds-heading-24-bold">Section Title</h2>`} />
                <pre className="installation__code-block">
                  <code className="language-jsx">{`<h1 className="uds-display-48-semibold">Large Heading</h1>
<p className="uds-body-16">Body text content</p>
<h2 className="uds-heading-24-bold">Section Title</h2>`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Step 6: Use CSS Tokens</h2>
            <p className="demo-group__description">
              Reference design tokens in your CSS using CSS custom properties. See the{" "}
              <a href="/figma-variables" style={{ color: "var(--uds-text-brand-primary)" }}>
                Design Tokens
              </a>{" "}
              page for detailed usage examples.
            </p>
            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`.my-component {
  color: var(--uds-text-primary);
  background: var(--uds-surface-primary);
  padding: var(--uds-spacing-16);
  border-radius: var(--uds-radius-8);
}`} />
                <pre className="installation__code-block">
                  <code className="language-css">{`.my-component {
  color: var(--uds-text-primary);
  background: var(--uds-surface-primary);
  padding: var(--uds-spacing-16);
  border-radius: var(--uds-radius-8);
}`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Next Steps</h2>
            <Flex direction="column" gap="12">
              <div>
                <a href="/getting-started/font" className="uds-body-16-semibold" style={{ color: "var(--uds-text-brand-primary)" }}>
                  → Font Installation Guide
                </a>
                <p className="uds-body-14" style={{ marginTop: "4px", color: "var(--uds-text-secondary)" }}>
                  Learn how to install and configure the Inter font
                </p>
              </div>
              <div>
                <a href="/getting-started/components" className="uds-body-16-semibold" style={{ color: "var(--uds-text-brand-primary)" }}>
                  → Using Components
                </a>
                <p className="uds-body-14" style={{ marginTop: "4px", color: "var(--uds-text-secondary)" }}>
                  Import and use React components from the design system
                </p>
              </div>
              <div>
                <a href="/figma-variables" className="uds-body-16-semibold" style={{ color: "var(--uds-text-brand-primary)" }}>
                  → Design Tokens
                </a>
                <p className="uds-body-14" style={{ marginTop: "4px", color: "var(--uds-text-secondary)" }}>
                  Comprehensive guide to using design tokens
                </p>
              </div>
              <div>
                <a href="/typography" className="uds-body-16-semibold" style={{ color: "var(--uds-text-brand-primary)" }}>
                  → Typography Classes
                </a>
                <p className="uds-body-14" style={{ marginTop: "4px", color: "var(--uds-text-secondary)" }}>
                  Browse all available typography classes
                </p>
              </div>
            </Flex>
          </div>
        </div>

        <Divider variant="solid" />
      </main>
    </section>
  );
}
