import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DotStatus from "../ui/DotStatus/DotStatus";
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

const BASIC_CODE = `import { DotStatus } from "@mich8060/chg-design-system";

<DotStatus variant="green" />`;

const VARIANTS_CODE = `<DotStatus variant="light-gray" />
<DotStatus variant="red" />
<DotStatus variant="orange" />
<DotStatus variant="yellow" />
<DotStatus variant="light-green" />
<DotStatus variant="green" />
<DotStatus variant="blue" />
<DotStatus variant="dark-blue" />
<DotStatus variant="teal" />
<DotStatus variant="purple" />
<DotStatus variant="pink" />
<DotStatus variant="magenta" />
<DotStatus variant="dark-red" />
<DotStatus variant="dark-gray" />`;

const SIZES_CODE = `<DotStatus variant="blue" size="small" />
<DotStatus variant="blue" size="medium" />
<DotStatus variant="blue" size="large" />`;

const OUTLINE_CODE = `<DotStatus variant="green" outline />
<DotStatus variant="red" outline />
<DotStatus variant="blue" outline />
<DotStatus variant="yellow" outline />`;

const USAGE_CODE = `<Flex direction="row" gap="12" alignItems="center">
  <DotStatus variant="green" />
  <span>Online</span>
</Flex>

<Flex direction="row" gap="12" alignItems="center">
  <DotStatus variant="red" />
  <span>Offline</span>
</Flex>

<Flex direction="row" gap="12" alignItems="center">
  <DotStatus variant="yellow" />
  <span>Away</span>
</Flex>`;

const variants = [
  "light-gray",
  "red",
  "orange",
  "yellow",
  "light-green",
  "green",
  "blue",
  "dark-blue",
  "teal",
  "purple",
  "pink",
  "magenta",
  "dark-red",
  "dark-gray",
];

const sizes = ["small", "medium", "large"];

const PROPS_COLUMNS = [
  { key: "prop", label: "Prop", render: (row) => <code>{row.prop}</code> },
  { key: "type", label: "Type", render: (row) => <code>{row.type}</code> },
  { key: "default", label: "Default", render: (row) => row.default ? <code>{row.default}</code> : "—" },
  { key: "description", label: "Description" },
];

const PROPS_DATA = [
  {
    prop: "variant",
    type: "string",
    default: '"blue"',
    description: "Color variant. Options: 'light-gray', 'red', 'orange', 'yellow', 'light-green', 'green', 'blue', 'dark-blue', 'teal', 'purple', 'pink', 'magenta', 'dark-red', 'dark-gray'.",
  },
  {
    prop: "size",
    type: "string",
    default: '"medium"',
    description: "Size of the dot. Options: 'small', 'medium', 'large'.",
  },
  {
    prop: "outline",
    type: "boolean",
    default: "false",
    description: "Adds a border/outline around the dot for additional visual definition.",
  },
  {
    prop: "aria-label",
    type: "string",
    default: null,
    description: "Accessible label for screen readers. Defaults to '{variant} status' if not provided.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes to apply to the dot element.",
  },
];

export default function DotStatusDemo() {
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
              <h1 className="page__header-title">Dot Status</h1>
              <p className="page__header-description">
                The Dot Status component provides visual status indicators using
                colored circular dots. Perfect for showing online/offline status, task
                states, or any categorical information. Supports multiple color
                variants, sizes, and optional outline styling.
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

          {/* Color Variants */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Color Variants</h2>
            <p className="demo-group__description">
              Dot Status supports multiple color variants to represent different states or categories. Each variant uses a distinct color to provide clear visual distinction.
            </p>
            <Flex direction="row" gap="16" wrap={true} alignItems="center" className="demo-content">
              {variants.map((variant) => (
                <Flex key={variant} direction="row" gap="8" alignItems="center">
                  <DotStatus variant={variant} />
                  <span>{variant}</span>
                </Flex>
              ))}
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={VARIANTS_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{VARIANTS_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Sizes */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Sizes</h2>
            <p className="demo-group__description">
              Dot Status comes in three sizes: small, medium (default), and large. Choose the size that best fits your layout and visual hierarchy.
            </p>
            <Flex direction="row" gap="24" wrap={true} alignItems="center" className="demo-content">
              {sizes.map((size) => (
                <Flex key={size} direction="row" gap="8" alignItems="center">
                  <DotStatus variant="blue" size={size} />
                  <span>{size}</span>
                </Flex>
              ))}
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={SIZES_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{SIZES_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* With Outline */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Outline</h2>
            <p className="demo-group__description">
              The outline variant adds a border around the dot, providing additional visual definition and making the status indicator more prominent.
            </p>
            <Flex direction="row" gap="16" wrap={true} alignItems="center" className="demo-content">
              <Flex direction="row" gap="8" alignItems="center">
                <DotStatus variant="green" outline />
                <span>Green with outline</span>
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <DotStatus variant="red" outline />
                <span>Red with outline</span>
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <DotStatus variant="blue" outline />
                <span>Blue with outline</span>
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <DotStatus variant="yellow" outline />
                <span>Yellow with outline</span>
              </Flex>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={OUTLINE_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{OUTLINE_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Usage Examples */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Usage Examples</h2>
            <p className="demo-group__description">
              Common use cases for Dot Status include showing online/offline status, task states, priority levels, or any categorical information.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Flex direction="row" gap="12" alignItems="center">
                <DotStatus variant="green" />
                <span>Online</span>
              </Flex>
              <Flex direction="row" gap="12" alignItems="center">
                <DotStatus variant="red" />
                <span>Offline</span>
              </Flex>
              <Flex direction="row" gap="12" alignItems="center">
                <DotStatus variant="yellow" />
                <span>Away</span>
              </Flex>
              <Flex direction="row" gap="12" alignItems="center">
                <DotStatus variant="blue" />
                <span>Active</span>
              </Flex>
              <Flex direction="row" gap="12" alignItems="center">
                <DotStatus variant="orange" />
                <span>Pending</span>
              </Flex>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={USAGE_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{USAGE_CODE}</code>
              </pre>
            </div>
          </div>
        </div>

        <Divider variant="solid" />

        {/* Props Reference */}
        <div className="demo-group">
          <h2 className="demo-group__heading">Props Reference</h2>
          <Table columns={PROPS_COLUMNS} data={PROPS_DATA} />
        </div>

        <Divider variant="solid" />

        <div className="page__tabs-content-container">
          <div className="demo-group">
            <div className="page__navigation">
              <Link
                to="/divider"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Divider</span>
              </Link>
              <Link
                to="/dropdown"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Dropdown</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
