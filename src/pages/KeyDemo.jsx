import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Key from "../ui/Key/Key";
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

const BASIC_CODE = `import { Key } from "@mich8060/chg-design-system";

<Key label="Esc" />
<Key label="⌘" />
<Key label="Ctrl" />`;

const APPEARANCE_CODE = `<Key label="Esc" appearance="light" />
<Key label="Esc" appearance="dark" />`;

const SHORTCUT_CODE = `<Flex direction="row" gap="8" alignItems="center">
  <Key label="Ctrl" /> + <Key label="K" />
</Flex>

<Flex direction="row" gap="8" alignItems="center">
  <Key label="⌘" /> + <Key label="C" />
</Flex>

<Flex direction="row" gap="8" alignItems="center">
  <Key label="Shift" /> + <Key label="Enter" />
</Flex>`;

const commonKeys = [
  "Esc",
  "⌘",
  "Ctrl",
  "Alt",
  "Shift",
  "Enter",
  "Tab",
  "Space",
  "Delete",
  "Backspace",
  "↑",
  "↓",
  "←",
  "→",
];

const PROPS_COLUMNS = [
  { key: "prop", label: "Prop", render: (row) => <code>{row.prop}</code> },
  { key: "type", label: "Type", render: (row) => <code>{row.type}</code> },
  { key: "default", label: "Default", render: (row) => row.default ? <code>{row.default}</code> : "—" },
  { key: "description", label: "Description" },
];

const PROPS_DATA = [
  {
    prop: "label",
    type: "string",
    default: null,
    description: "The text or symbol to display on the key (e.g. 'Esc', '⌘', 'Ctrl').",
  },
  {
    prop: "appearance",
    type: "string",
    default: '"light"',
    description: "Visual style variant. Options: 'light', 'dark'.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes to apply to the kbd element.",
  },
];

export default function KeyDemo() {
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
              <h1 className="page__header-title">Key</h1>
              <p className="page__header-description">
                The Key component displays keyboard key representations, perfect for
                showing keyboard shortcuts, hotkeys, or keyboard instructions.
                Supports both light and dark appearance styles to match your design
                theme.
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

          {/* Common Keys */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Common Keys</h2>
            <p className="demo-group__description">
              Display keyboard key representations for shortcuts, hotkeys, or keyboard instructions. The default appearance is light.
            </p>
            <Flex direction="row" gap="8" wrap={true} alignItems="center" className="demo-content">
              {commonKeys.map((key) => (
                <Key key={key} label={key} />
              ))}
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={BASIC_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{BASIC_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Appearances */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Appearances</h2>
            <p className="demo-group__description">
              Keys support both light and dark appearance styles to match your design theme.
            </p>
            <Flex direction="row" gap="16" wrap={true} alignItems="center" className="demo-content">
              <Flex direction="column" gap="8" alignItems="center">
                <Key label="Esc" appearance="light" />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>Light</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <Key label="Esc" appearance="dark" />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>Dark</span>
              </Flex>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={APPEARANCE_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{APPEARANCE_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Keyboard Shortcuts */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Keyboard Shortcuts</h2>
            <p className="demo-group__description">
              Combine multiple keys to display keyboard shortcuts. This is useful for showing command combinations.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Flex direction="row" gap="8" alignItems="center">
                <Key label="Ctrl" /> + <Key label="K" />
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <Key label="⌘" /> + <Key label="C" />
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <Key label="Alt" /> + <Key label="Tab" />
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <Key label="Shift" /> + <Key label="Enter" />
              </Flex>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={SHORTCUT_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{SHORTCUT_CODE}</code>
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
                to="/input"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Text Input</span>
              </Link>
              <Link
                to="/micro-calendar"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Micro Calendar</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
