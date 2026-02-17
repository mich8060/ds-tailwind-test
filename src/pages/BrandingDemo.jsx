import React, { useEffect } from "react";
import Branding from "../ui/Branding/Branding";
import Flex from "../ui/Flex/Flex";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import Table from "../ui/Table/Table";
import { formatLastUpdated } from "../utils/formatDate";
import CopyButton from "../ui/CopyButton/CopyButton";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";

const BRAND_KEYS = [
  "design-system",
  "connect",
  "comphealth",
  "weatherby",
  "modio",
  "locumsmart",
  "wireframe",
];

export default function BrandingDemo() {
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
              <h1 className="page__header-title">Branding</h1>
              <p className="page__header-description">
                The Branding component displays a brand logo or symbol. Pass a{" "}
                <code>brand</code> prop to pick which brand to show, add{" "}
                <code>symbol</code> to render just the icon mark, or use{" "}
                <code>inherit</code> to automatically match the active brand.
              </p>
            </div>
            <div className="page__header-metadata">
              <div className="page__metadata-row">
                <p className="page__metadata-label">Author</p>
                <a
                  href="https://chgit.slack.com/team/U06V9C0K06S"
                  className="page__metadata-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Michael-Stevens
                </a>
              </div>
              <div className="page__metadata-row">
                <p className="page__metadata-label">Last updated</p>
                <p className="page__metadata-value">{formatLastUpdated()}</p>
              </div>
              <div className="page__metadata-row">
                <p className="page__metadata-label">Version</p>
                <Flex direction="row" gap="8" alignItems="center">
                  <p className="page__metadata-value">1.0.0</p>
                  <span className="page__version-badge">BETA</span>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page__content">
        <div className="page__examples-section">

          {/* Basic Usage */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Basic Usage</h2>
            <p className="demo-group__description">
              Pass a <code>brand</code> prop to display the corresponding logo.
              Works just like <code>&lt;Icon name="House" /&gt;</code>.
            </p>
            <div className="demo-grid">
              <Branding brand="connect" />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={`import Branding from "@mich8060/chg-design-system/Branding";

<Branding brand="connect" />`} />
              <pre className="code-block">
                <code className="language-jsx">{`import Branding from "@mich8060/chg-design-system/Branding";

<Branding brand="connect" />`}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Inherit */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Inherit (Active Brand)</h2>
            <p className="demo-group__description">
              Set <code>inherit</code> to automatically display the logo for the
              currently selected brand. The component reads the{" "}
              <code>data-brand</code> attribute from <code>&lt;html&gt;</code>{" "}
              and updates reactively. Try switching brands in the sidebar to see
              it change.
            </p>
            <div className="demo-grid">
              <Branding inherit />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={`// Automatically shows the logo for the active brand
<Branding inherit />`} />
              <pre className="code-block">
                <code className="language-jsx">{`// Automatically shows the logo for the active brand
<Branding inherit />`}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* All Brands */}
          <div className="demo-group">
            <h2 className="demo-group__heading">All Brands</h2>
            <p className="demo-group__description">
              Every available brand key and its logo.
            </p>
            <Flex direction="row" gap="32" wrap={true} alignItems="center" className="demo-grid">
              {BRAND_KEYS.map((key) => (
                <Flex key={key} direction="column" gap="8" alignItems="center">
                  <Branding brand={key} />
                  <code style={{ fontSize: 12 }}>"{key}"</code>
                </Flex>
              ))}
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={`<Branding brand="design-system" />
<Branding brand="connect" />
<Branding brand="comphealth" />
<Branding brand="weatherby" />
<Branding brand="modio" />
<Branding brand="locumsmart" />
<Branding brand="wireframe" />`} />
              <pre className="code-block">
                <code className="language-jsx">{`<Branding brand="design-system" />
<Branding brand="connect" />
<Branding brand="comphealth" />
<Branding brand="weatherby" />
<Branding brand="modio" />
<Branding brand="locumsmart" />
<Branding brand="wireframe" />`}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Size Variants */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Sizes</h2>
            <p className="demo-group__description">
              Three size options control logo height: <code>small</code> (32px),{" "}
              <code>default</code> (40px), and <code>large</code> (48px).
            </p>
            <Flex direction="row" gap="32" wrap={true} alignItems="center" className="demo-grid">
              <Flex direction="column" gap="8" alignItems="center">
                <Branding brand="connect" size="small" />
                <span className="demo-label">Small</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <Branding brand="connect" size="default" />
                <span className="demo-label">Default</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <Branding brand="connect" size="large" />
                <span className="demo-label">Large</span>
              </Flex>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={`<Branding brand="connect" size="small" />
<Branding brand="connect" size="default" />
<Branding brand="connect" size="large" />`} />
              <pre className="code-block">
                <code className="language-jsx">{`<Branding brand="connect" size="small" />
<Branding brand="connect" size="default" />
<Branding brand="connect" size="large" />`}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Symbol Only */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Symbol Only</h2>
            <p className="demo-group__description">
              Set <code>symbol</code> to render only the brand icon mark instead
              of the full wordmark logo. Useful for collapsed sidebars, favicons,
              and compact UI areas.
            </p>
            <Flex direction="row" gap="32" wrap={true} alignItems="center" className="demo-grid">
              {BRAND_KEYS.map((key) => (
                <Flex key={key} direction="column" gap="8" alignItems="center">
                  <Branding brand={key} symbol />
                  <code style={{ fontSize: 12 }}>"{key}"</code>
                </Flex>
              ))}
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={`<Branding brand="design-system" symbol />
<Branding brand="connect" symbol />
<Branding brand="comphealth" symbol />
<Branding brand="weatherby" symbol />
<Branding brand="modio" symbol />
<Branding brand="locumsmart" symbol />
<Branding brand="wireframe" symbol />`} />
              <pre className="code-block">
                <code className="language-jsx">{`<Branding brand="design-system" symbol />
<Branding brand="connect" symbol />
<Branding brand="comphealth" symbol />
<Branding brand="weatherby" symbol />
<Branding brand="modio" symbol />
<Branding brand="locumsmart" symbol />
<Branding brand="wireframe" symbol />`}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Symbol Sizes */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Symbol Sizes</h2>
            <p className="demo-group__description">
              Symbols use a square aspect ratio. Three sizes are available:{" "}
              <code>small</code> (24px), <code>default</code> (32px), and{" "}
              <code>large</code> (48px).
            </p>
            <Flex direction="row" gap="32" wrap={true} alignItems="center" className="demo-grid">
              <Flex direction="column" gap="8" alignItems="center">
                <Branding brand="connect" symbol size="small" />
                <span className="demo-label">Small (24px)</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <Branding brand="connect" symbol size="default" />
                <span className="demo-label">Default (32px)</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <Branding brand="connect" symbol size="large" />
                <span className="demo-label">Large (48px)</span>
              </Flex>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={`<Branding brand="connect" symbol size="small" />
<Branding brand="connect" symbol size="default" />
<Branding brand="connect" symbol size="large" />`} />
              <pre className="code-block">
                <code className="language-jsx">{`<Branding brand="connect" symbol size="small" />
<Branding brand="connect" symbol size="default" />
<Branding brand="connect" symbol size="large" />`}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Logo vs Symbol comparison */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Logo vs Symbol</h2>
            <p className="demo-group__description">
              Side-by-side comparison of the full wordmark logo and the symbol
              variant for each brand.
            </p>
            <Flex direction="column" gap="24" className="demo-grid">
              {BRAND_KEYS.map((key) => (
                <Flex key={key} direction="row" gap="24" alignItems="center">
                  <Branding brand={key} symbol />
                  <Branding brand={key} />
                  <code style={{ fontSize: 12 }}>"{key}"</code>
                </Flex>
              ))}
            </Flex>
          </div>

          <Divider />

          {/* Props Reference Table */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Props Reference</h2>
            <Table
              columns={[
                {
                  key: "prop",
                  label: "Prop",
                  render: (row) => <code>{row.prop}</code>,
                },
                {
                  key: "type",
                  label: "Type",
                  render: (row) => <code>{row.type}</code>,
                },
                {
                  key: "default",
                  label: "Default",
                  render: (row) =>
                    row.default === "—" ? "—" : <code>{row.default}</code>,
                },
                {
                  key: "description",
                  label: "Description",
                  render: (row) => row.description,
                },
              ]}
              data={[
                {
                  prop: "brand",
                  type: "string",
                  default: "—",
                  description: (
                    <>
                      Brand key: <code>"design-system"</code>,{" "}
                      <code>"connect"</code>, <code>"comphealth"</code>,{" "}
                      <code>"weatherby"</code>, <code>"modio"</code>,{" "}
                      <code>"locumsmart"</code>, <code>"wireframe"</code>
                    </>
                  ),
                },
                {
                  prop: "symbol",
                  type: "boolean",
                  default: "false",
                  description: (
                    <>
                      When <code>true</code>, renders only the brand
                      symbol/icon mark instead of the full wordmark logo
                    </>
                  ),
                },
                {
                  prop: "inherit",
                  type: "boolean",
                  default: "false",
                  description: (
                    <>
                      When <code>true</code>, ignores <code>brand</code> and
                      automatically uses the active brand from{" "}
                      <code>data-brand</code> on <code>&lt;html&gt;</code>
                    </>
                  ),
                },
                {
                  prop: "size",
                  type: "string",
                  default: '"default"',
                  description: (
                    <>
                      Logo: <code>"small"</code> (100×40) |{" "}
                      <code>"default"</code> (160×64) |{" "}
                      <code>"large"</code> (200×80)<br />
                      Symbol: <code>"small"</code> (24px) |{" "}
                      <code>"default"</code> (32px) |{" "}
                      <code>"large"</code> (48px)
                    </>
                  ),
                },
                {
                  prop: "className",
                  type: "string",
                  default: '""',
                  description: "Additional CSS classes",
                },
              ]}
            />
          </div>

        </div>
      </main>
    </section>
  );
}
