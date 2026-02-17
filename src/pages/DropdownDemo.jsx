import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../ui/Dropdown/Dropdown";
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

const BASIC_CODE = `import Dropdown from "@mich8060/chg-design-system/Dropdown";

const [value, setValue] = useState("");

<Dropdown
  options={["Option 1", "Option 2", "Option 3"]}
  value={value}
  onChange={setValue}
  placeholder="Select an option"
/>`;

const CUSTOM_CODE = `import Dropdown from "@mich8060/chg-design-system/Dropdown";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  placeholder="Choose a fruit"
/>`;

const LABEL_CODE = `import Dropdown from "@mich8060/chg-design-system/Dropdown";

<Dropdown
  options={["Option 1", "Option 2", "Option 3"]}
  value={value}
  onChange={setValue}
  label="Select an option"
  placeholder="Choose..."
/>`;

const SIZES_CODE = `import Dropdown from "@mich8060/chg-design-system/Dropdown";

{/* Default size (44px) */}
<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  size="default"
  placeholder="Default size"
/>

{/* Compact size (36px) */}
<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  size="compact"
  placeholder="Compact size"
/>`;

const STATES_CODE = `import Dropdown from "@mich8060/chg-design-system/Dropdown";

{/* Focused */}
<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  state="focused"
  placeholder="Focused state"
/>

{/* Error */}
<Dropdown
  options={options}
  value={value}
  onChange={setValue}
  state="error"
  placeholder="Error state"
/>`;

const DISABLED_CODE = `import Dropdown from "@mich8060/chg-design-system/Dropdown";

<Dropdown
  options={["Option 1", "Option 2"]}
  value="Option 1"
  disabled
  placeholder="Disabled dropdown"
/>`;

const simpleOptions = [
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
  "Option 5",
];

const customOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
];

export default function DropdownDemo() {
  const [defaultValue, setDefaultValue] = useState("");
  const [focusedValue, setFocusedValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [labeledValue, setLabeledValue] = useState("");
  const [sizeDefaultValue, setSizeDefaultValue] = useState("");
  const [sizeCompactValue, setSizeCompactValue] = useState("");

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
              <h1 className="page__header-title">Dropdown</h1>
              <p className="page__header-description">
                The Dropdown component provides a custom select input with support for
          different states, keyboard navigation, and accessibility features. It
          can be used as a replacement for native select elements with enhanced
          styling and functionality.
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
              A simple dropdown with string options. Click to open and select an option from the list.
            </p>
            <div className="demo-content">
              <Dropdown
                options={simpleOptions}
                value={defaultValue}
                onChange={setDefaultValue}
                placeholder="Select an option"
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={BASIC_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{BASIC_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Custom Options */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Custom Options</h2>
            <p className="demo-group__description">
              Dropdowns can use custom option objects with separate value and label properties. This is useful when the display text differs from the underlying value.
            </p>
            <div className="demo-content">
              <Dropdown
                options={customOptions}
                value={customValue}
                onChange={setCustomValue}
                placeholder="Choose a fruit"
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={CUSTOM_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{CUSTOM_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* With Label */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Label</h2>
            <p className="demo-group__description">
              Dropdowns can include a label above the control to provide context and improve accessibility.
            </p>
            <div className="demo-content">
              <Dropdown
                options={simpleOptions}
                value={labeledValue}
                onChange={setLabeledValue}
                label="Select an option"
                placeholder="Choose..."
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={LABEL_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{LABEL_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Sizes */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Sizes</h2>
            <p className="demo-group__description">
              Dropdowns are available in two sizes: <code>default</code> (44px) and <code>compact</code> (36px). Use compact in tight layouts like table filters or toolbars.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Dropdown
                options={simpleOptions}
                value={sizeDefaultValue}
                onChange={setSizeDefaultValue}
                size="default"
                label="Default Size"
                placeholder="Default size dropdown"
              />
              <Dropdown
                options={simpleOptions}
                value={sizeCompactValue}
                onChange={setSizeCompactValue}
                size="compact"
                label="Compact Size"
                placeholder="Compact size dropdown"
              />
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={SIZES_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{SIZES_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* States */}
          <div className="demo-group">
            <h2 className="demo-group__heading">States</h2>
            <p className="demo-group__description">
              Dropdowns support different visual states including default, focused, error, and disabled. The focused state is automatically applied when the dropdown is active.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Dropdown
                options={simpleOptions}
                value={focusedValue}
                onChange={setFocusedValue}
                state="focused"
                placeholder="Focused state"
              />
              <Dropdown
                options={simpleOptions}
                value={errorValue}
                onChange={setErrorValue}
                state="error"
                placeholder="Error state"
              />
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={STATES_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{STATES_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Disabled */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Disabled State</h2>
            <p className="demo-group__description">
              Disabled dropdowns prevent user interaction and are typically used when the selection is not applicable in the current context.
            </p>
            <div className="demo-content">
              <Dropdown
                options={simpleOptions}
                value="Option 1"
                onChange={() => {}}
                disabled
                placeholder="Disabled dropdown"
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={DISABLED_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{DISABLED_CODE}</code>
              </pre>
            </div>
          </div>
        </div>

        <Divider variant="solid" />

        {/* Props Reference */}
        <div className="demo-group">
          <h2 className="demo-group__heading">Props Reference</h2>
          <Table
            columns={[
              { key: "prop", label: "Prop", render: (row) => <code>{row.prop}</code> },
              { key: "type", label: "Type", render: (row) => <code>{row.type}</code> },
              { key: "default", label: "Default", render: (row) => row.default ? <code>{row.default}</code> : "—" },
              { key: "values", label: "Values", render: (row) => row.values ? <code>{row.values}</code> : "—" },
              { key: "description", label: "Description" },
            ]}
            data={[
              { prop: "options", type: "array", default: "[]", values: "[string] | [{ value, label }]", description: "Array of options (strings or objects)." },
              { prop: "value", type: "string | number", default: null, values: null, description: "Currently selected value." },
              { prop: "onChange", type: "function", default: null, values: "(value) => void", description: "Callback fired when the selection changes." },
              { prop: "placeholder", type: "string", default: '"Select an option"', values: null, description: "Placeholder text when nothing is selected." },
              { prop: "size", type: "string", default: '"default"', values: '"compact" | "default"', description: "Size variant of the dropdown." },
              { prop: "state", type: "string", default: '"default"', values: '"default" | "focused" | "error" | "disabled"', description: "Visual state of the dropdown." },
              { prop: "placement", type: "string", default: '"bottom-start"', values: '"bottom-start" | "bottom-end" | "top-start" | "top-end"', description: "Menu placement relative to the trigger." },
              { prop: "disabled", type: "boolean", default: "false", values: null, description: "Whether the dropdown is disabled." },
              { prop: "label", type: "string", default: null, values: null, description: "Label text displayed above the dropdown." },
              { prop: "id", type: "string", default: "auto-generated", values: null, description: "Unique identifier for the dropdown." },
              { prop: "className", type: "string", default: '""', values: null, description: "Additional CSS classes to apply." },
            ]}
          />
        </div>

        <Divider variant="solid" />

        <div className="page__tabs-content-container">
          <div className="demo-group">
            <div className="page__navigation">
              <Link
                to="/dot-status"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Dot Status</span>
              </Link>
              <Link
                to="/event-card"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Event Card</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
