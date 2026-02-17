import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Field from "../ui/Field/Field";
import Input from "../ui/Input/Input";
import Textarea from "../ui/Textarea/Textarea";
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

const BASIC_CODE = `import { Field, Input } from "@mich8060/chg-design-system";

<Field label="Name">
  <Input placeholder="Enter your name" />
</Field>`;

const REQUIRED_CODE = `<Field label="Email" required>
  <Input type="email" placeholder="Enter your email" />
</Field>`;

const HELPER_CODE = `<Field
  label="Password"
  required
  helperMessage="Must be at least 8 characters long"
>
  <Input type="password" placeholder="Enter your password" />
</Field>`;

const COUNT_CODE = `const [value, setValue] = useState("");

<Field
  label="Description"
  maxLength={100}
  value={value}
  helperMessage="Brief description of your item"
>
  <Textarea
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Enter a description"
    rows={4}
  />
</Field>`;

const INFO_CODE = `<Field
  label="Account Number"
  infoIcon="Info"
  onInfoClick={() => alert("Account numbers are 8-12 digits long")}
  helperMessage="Your unique account identifier"
>
  <Input placeholder="Enter account number" />
</Field>`;

const ALL_CODE = `<Field
  label="Product Description"
  required
  helperMessage="Provide a detailed description of your product"
  infoIcon="Info"
  onInfoClick={() => alert("Include key features and benefits")}
  maxLength={200}
  value={value}
>
  <Textarea
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="Enter product description"
    rows={5}
  />
</Field>`;

const PROPS_COLUMNS = [
  { key: "prop", label: "Prop", render: (row) => <code>{row.prop}</code> },
  { key: "type", label: "Type", render: (row) => <code>{row.type}</code> },
  { key: "default", label: "Default", render: (row) => row.default ? <code>{row.default}</code> : "—" },
  { key: "description", label: "Description" },
];

const PROPS_DATA = [
  { prop: "label", type: "string", default: null, description: "Label text displayed above the input." },
  { prop: "required", type: "boolean", default: "false", description: "Adds an asterisk (*) to the label indicating the field is required." },
  { prop: "helperMessage", type: "string", default: null, description: "Helper text displayed below the input." },
  { prop: "infoIcon", type: "string", default: null, description: "Phosphor icon name for an info button next to the label." },
  { prop: "onInfoClick", type: "function", default: null, description: "Callback fired when the info icon is clicked." },
  { prop: "maxLength", type: "number", default: null, description: "Maximum character length. Enables a character counter below the input." },
  { prop: "value", type: "string | number", default: null, description: "Current input value, used for calculating the character count." },
  { prop: "id", type: "string", default: "auto-generated", description: "Unique identifier for the field and its label association." },
  { prop: "children", type: "ReactNode", default: null, description: "The input element to wrap (Input, Textarea, Dropdown, etc.)." },
  { prop: "className", type: "string", default: '""', description: "Additional CSS classes to apply." },
];

export default function FieldDemo() {
  const [basicValue, setBasicValue] = useState("");
  const [requiredValue, setRequiredValue] = useState("");
  const [helperValue, setHelperValue] = useState("");
  const [countValue, setCountValue] = useState("");
  const [allFeaturesValue, setAllFeaturesValue] = useState("");
  const [infoValue, setInfoValue] = useState("");

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
              <h1 className="page__header-title">Field</h1>
              <p className="page__header-description">
                The Field component provides a consistent wrapper for form inputs with
                labels, helper messages, character counts, and optional info icons. It
                can wrap any input type and provides a unified styling and behavior pattern.
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
              A simple field wrapper with a label. The Field component wraps any input element and provides consistent styling and structure.
            </p>
            <div className="demo-content">
              <Field label="Name">
                <Input
                  value={basicValue}
                  onChange={(e) => setBasicValue(e.target.value)}
                  placeholder="Enter your name"
                />
              </Field>
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={BASIC_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{BASIC_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Required Field */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Required Field</h2>
            <p className="demo-group__description">
              Required fields display an asterisk (*) next to the label to indicate that the field must be filled out.
            </p>
            <div className="demo-content">
              <Field label="Email" required>
                <Input
                  type="email"
                  value={requiredValue}
                  onChange={(e) => setRequiredValue(e.target.value)}
                  placeholder="Enter your email"
                />
              </Field>
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={REQUIRED_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{REQUIRED_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* With Helper Message */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Helper Message</h2>
            <p className="demo-group__description">
              Helper messages provide additional context or instructions to help users understand what to enter in the field.
            </p>
            <div className="demo-content">
              <Field
                label="Password"
                helperMessage="Must be at least 8 characters long"
                required
              >
                <Input
                  type="password"
                  value={helperValue}
                  onChange={(e) => setHelperValue(e.target.value)}
                  placeholder="Enter your password"
                />
              </Field>
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={HELPER_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{HELPER_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* With Character Count */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Character Count</h2>
            <p className="demo-group__description">
              Fields can display a character count when a <code>maxLength</code> is specified. This is useful for textareas or inputs with character limits.
            </p>
            <div className="demo-content">
              <Field
                label="Description"
                maxLength={100}
                value={countValue}
                helperMessage="Brief description of your item"
              >
                <Textarea
                  value={countValue}
                  onChange={(e) => setCountValue(e.target.value)}
                  placeholder="Enter a description"
                  rows={4}
                />
              </Field>
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={COUNT_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{COUNT_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* With Info Icon */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Info Icon</h2>
            <p className="demo-group__description">
              Fields can include an info icon that triggers additional information or tooltips when clicked.
            </p>
            <div className="demo-content">
              <Field
                label="Account Number"
                infoIcon="Info"
                onInfoClick={() => alert("Account numbers are 8-12 digits long")}
                helperMessage="Your unique account identifier"
              >
                <Input
                  value={infoValue}
                  onChange={(e) => setInfoValue(e.target.value)}
                  placeholder="Enter account number"
                />
              </Field>
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={INFO_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{INFO_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* All Features Combined */}
          <div className="demo-group">
            <h2 className="demo-group__heading">All Features Combined</h2>
            <p className="demo-group__description">
              A field with all available features: label, required indicator, helper message, info icon, and character count.
            </p>
            <div className="demo-content">
              <Field
                label="Product Description"
                required
                helperMessage="Provide a detailed description of your product"
                infoIcon="Info"
                onInfoClick={() => alert("Include key features and benefits")}
                maxLength={200}
                value={allFeaturesValue}
              >
                <Textarea
                  value={allFeaturesValue}
                  onChange={(e) => setAllFeaturesValue(e.target.value)}
                  placeholder="Enter product description"
                  rows={5}
                />
              </Field>
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={ALL_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{ALL_CODE}</code>
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
                to="/event-card"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Event Card</span>
              </Link>
              <Link
                to="/file-upload"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">File Upload</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
