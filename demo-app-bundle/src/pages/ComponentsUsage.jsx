import React, { useEffect } from "react";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import Flex from "../ui/Flex/Flex";
import { formatLastUpdated } from "../utils/formatDate";
import CopyButton from "../ui/CopyButton/CopyButton";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-css";
import "./Installation.scss";

export default function ComponentsUsage() {
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
              <h1 className="page__header-title">Using Components</h1>
              <p className="page__header-description">
                Learn how to install and import components from the design system npm package.
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
            <h2 className="demo-group__heading">Installation</h2>
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
                <pre className="code-block">
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
                <pre className="code-block">
                  <code className="language-bash">{`yarn add @mich8060/chg-design-system`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Import Styles</h2>
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
                Required Imports
              </h3>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`// ⚠️ Import BOTH files - tokens FIRST, then styles
import '@mich8060/chg-design-system/tokens.css';   // CSS variable definitions (colors, spacing, etc.)
import '@mich8060/chg-design-system/styles.css';   // Component styles`} />
                <pre className="code-block">
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
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Import Components</h2>
            <p className="demo-group__description">
              Import individual components as needed:
            </p>
            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <h3 className="uds-heading-20-semibold" style={{ marginTop: 0, marginBottom: "12px" }}>
                Named Imports (Recommended)
              </h3>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`import { Button, Input, Field, Avatar, Card, Tag, UDS } from '@mich8060/chg-design-system';`} />
                <pre className="code-block">
                  <code className="language-javascript">{`import { Button, Input, Field, Avatar, Card, Tag, UDS } from '@mich8060/chg-design-system';`}</code>
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
                Individual Imports (Tree-shaking)
              </h3>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`import Button from '@mich8060/chg-design-system/Button';
import Input from '@mich8060/chg-design-system/Input';
import Field from '@mich8060/chg-design-system/Field';
import Card from '@mich8060/chg-design-system/Card';`} />
                <pre className="code-block">
                  <code className="language-javascript">{`import Button from '@mich8060/chg-design-system/Button';
import Input from '@mich8060/chg-design-system/Input';
import Field from '@mich8060/chg-design-system/Field';
import Card from '@mich8060/chg-design-system/Card';`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Basic Usage Example</h2>
            <p className="demo-group__description">
              Here's a complete example of a simple form using design system components.
              Note that form inputs should be wrapped with the <code>Field</code> component
              for labels, validation, and helper text.
            </p>
            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`import React, { useState } from 'react';
import { Button, Input, Field, Checkbox, Flex } from '@mich8060/chg-design-system';

// Import BOTH CSS files - tokens first, then styles
import '@mich8060/chg-design-system/tokens.css';
import '@mich8060/chg-design-system/styles.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="16">
        <Field label="Email" required>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Password" required>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Field>
        <Checkbox
          label="Remember me"
          checked={remember}
          onChange={(checked) => setRemember(checked)}
        />
        <Button label="Sign In" type="submit" />
      </Flex>
    </form>
  );
}

export default LoginForm;`} />
                <pre className="code-block">
                  <code className="language-jsx">{`import React, { useState } from 'react';
import { Button, Input, Field, Checkbox, Flex } from '@mich8060/chg-design-system';

// Import BOTH CSS files - tokens first, then styles
import '@mich8060/chg-design-system/tokens.css';
import '@mich8060/chg-design-system/styles.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap="16">
        <Field label="Email" required>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Password" required>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Field>
        <Checkbox
          label="Remember me"
          checked={remember}
          onChange={(checked) => setRemember(checked)}
        />
        <Button label="Sign In" type="submit" />
      </Flex>
    </form>
  );
}

export default LoginForm;`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Available Components</h2>
            <p className="demo-group__description">
              The design system includes the following components:
            </p>
            <div style={{ marginTop: "16px" }}>
              <Flex wrap="wrap" gap="8">
                {[
                  'Accordion', 'ActionMenu', 'Avatar', 'Badge', 'Branding',
                  'Breadcrumb', 'Button', 'Calendar', 'Card', 'Checkbox',
                  'Chip', 'Datepicker', 'Divider', 'DotStatus', 'Dropdown',
                  'EventCard', 'Field', 'FileUpload', 'Flex', 'Icon',
                  'ImageAspect', 'Input', 'Key', 'Menu', 'MicroCalendar',
                  'Modal', 'Pagination', 'PillToggle', 'ProgressCircle',
                  'ProgressIndicator', 'Radio', 'Slider', 'Status', 'Steps',
                  'Table', 'Tabs', 'Tag', 'Textarea', 'Toast', 'Toggle',
                  'Tooltip', 'UDS'
                ].map(component => (
                  <code 
                    key={component}
                    style={{
                      padding: '4px 8px',
                      background: 'var(--uds-surface-tertiary)',
                      borderRadius: 'var(--uds-radius-4)',
                      fontSize: 'var(--uds-font-size-14)'
                    }}
                  >
                    {component}
                  </code>
                ))}
              </Flex>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Setting Up Theming</h2>
            <p className="demo-group__description">
              Configure the <code>data-brand</code> and <code>data-mode</code> attributes on your root HTML element to enable theming:
            </p>
            <div style={{ 
              marginTop: "16px", 
              padding: "24px", 
              background: "var(--uds-surface-secondary)", 
              borderRadius: "8px", 
              border: "1px solid var(--uds-border-primary)" 
            }}>
              <div className="installation__code-block-wrapper">
                <CopyButton codeString={`// In your App.js or index.js
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-brand', 'design-system');
    document.documentElement.setAttribute('data-mode', 'light'); // or 'dark'
  }, []);

  return <div>...</div>;
}`} />
                <pre className="code-block">
                  <code className="language-jsx">{`// In your App.js or index.js
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-brand', 'design-system');
    document.documentElement.setAttribute('data-mode', 'light'); // or 'dark'
  }, []);

  return <div>...</div>;
}`}</code>
                </pre>
              </div>
              <p className="uds-body-14" style={{ marginTop: "16px", marginBottom: 0 }}>
                Available brands: <code>design-system</code>, <code>comphealth</code>, <code>locumsmart</code>, 
                <code>modio</code>, <code>wireframe</code>, <code>connect</code>, <code>weatherby</code>
              </p>
              <p className="uds-body-14" style={{ marginTop: "8px", marginBottom: 0 }}>
                Available modes: <code>light</code>, <code>dark</code>
              </p>
            </div>
          </div>

          <div className="demo-group">
            <h2 className="demo-group__heading">Next Steps</h2>
            <Flex direction="column" gap="12">
              <div>
                <a href="/buttons" className="uds-body-16-semibold" style={{ color: "var(--uds-text-brand-primary)" }}>
                  → Button Component
                </a>
                <p className="uds-body-14" style={{ marginTop: "4px", color: "var(--uds-text-secondary)" }}>
                  View all button variants and usage examples
                </p>
              </div>
              <div>
                <a href="/input" className="uds-body-16-semibold" style={{ color: "var(--uds-text-brand-primary)" }}>
                  → Input Component
                </a>
                <p className="uds-body-14" style={{ marginTop: "4px", color: "var(--uds-text-secondary)" }}>
                  Learn about text inputs, labels, and validation
                </p>
              </div>
              <div>
                <a href="/figma-variables" className="uds-body-16-semibold" style={{ color: "var(--uds-text-brand-primary)" }}>
                  → Design Tokens
                </a>
                <p className="uds-body-14" style={{ marginTop: "4px", color: "var(--uds-text-secondary)" }}>
                  Use design tokens for custom styling
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
