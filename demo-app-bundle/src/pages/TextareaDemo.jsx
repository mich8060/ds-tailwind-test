import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Textarea from "../ui/Textarea/Textarea";
import Field from "../ui/Field/Field";
import Flex from "../ui/Flex/Flex";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import { formatLastUpdated } from "../utils/formatDate";
import CopyButton from "../ui/CopyButton/CopyButton";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";

const BASIC_CODE = `import Textarea from "@mich8060/chg-design-system/Textarea";

<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter a description..."
/>`;

const SIZES_CODE = `import Textarea from "@mich8060/chg-design-system/Textarea";
import Field from "@mich8060/chg-design-system/Field";

{/* Default size (120px min-height) */}
<Field label="Default Size">
  <Textarea placeholder="Default size textarea" size="default" />
</Field>

{/* Compact size (80px min-height) */}
<Field label="Compact Size">
  <Textarea placeholder="Compact size textarea" size="compact" />
</Field>`;

const STATES_CODE = `import Textarea from "@mich8060/chg-design-system/Textarea";
import Field from "@mich8060/chg-design-system/Field";

{/* Default */}
<Field label="Default State">
  <Textarea placeholder="Default state" state="default" />
</Field>

{/* Focused */}
<Field label="Focused State">
  <Textarea placeholder="Focused state" state="focused" />
</Field>

{/* Error with helper message */}
<Field label="Error State" helperMessage="This field has an error">
  <Textarea placeholder="Error state" state="error" />
</Field>`;

const DISABLED_CODE = `import Textarea from "@mich8060/chg-design-system/Textarea";
import Field from "@mich8060/chg-design-system/Field";

<Field label="Disabled Textarea">
  <Textarea
    value="This content cannot be edited"
    placeholder="Disabled textarea"
    disabled
  />
</Field>`;

const RESIZE_CODE = `import Textarea from "@mich8060/chg-design-system/Textarea";
import Field from "@mich8060/chg-design-system/Field";

{/* Resizable (default) */}
<Field label="Resizable">
  <Textarea placeholder="Drag the corner to resize..." />
</Field>

{/* No resize */}
<Field label="No Resize">
  <Textarea placeholder="Cannot be resized" resize={false} />
</Field>`;

const FIELD_CODE = `import Textarea from "@mich8060/chg-design-system/Textarea";
import Field from "@mich8060/chg-design-system/Field";

<Field label="Description" required helperMessage="Provide a detailed description">
  <Textarea
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    placeholder="Enter description..."
  />
</Field>`;

export default function TextareaDemo() {
  const [basicValue, setBasicValue] = useState("");
  const [defaultSizeValue, setDefaultSizeValue] = useState("");
  const [compactSizeValue, setCompactSizeValue] = useState("");
  const [defaultStateValue, setDefaultStateValue] = useState("");
  const [focusedValue, setFocusedValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("This content cannot be edited");
  const [resizableValue, setResizableValue] = useState("");
  const [noResizeValue, setNoResizeValue] = useState("");
  const [fieldValue, setFieldValue] = useState("");

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
              <h1 className="page__header-title">Textarea</h1>
              <p className="page__header-description">
                Multi-line text input component for form fields. Supports
                different sizes (default, compact), visual states (default,
                focused, error, disabled), and optional resize control.
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
              A multi-line text input for descriptions, comments, and other
              longer-form content. The default size is 'default' and state is
              'default'.
            </p>
            <div className="demo-content">
              <Textarea
                value={basicValue}
                onChange={(e) => setBasicValue(e.target.value)}
                placeholder="Enter a description..."
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

          {/* Sizes */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Sizes</h2>
            <p className="demo-group__description">
              Textarea components are available in two sizes: default (120px
              min-height) and compact (80px min-height).
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Field label="Default Size">
                <Textarea
                  value={defaultSizeValue}
                  onChange={(e) => setDefaultSizeValue(e.target.value)}
                  placeholder="Default size textarea"
                  size="default"
                />
              </Field>
              <Field label="Compact Size">
                <Textarea
                  value={compactSizeValue}
                  onChange={(e) => setCompactSizeValue(e.target.value)}
                  placeholder="Compact size textarea"
                  size="compact"
                />
              </Field>
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
              Textarea components support different visual states: default,
              focused, error, and disabled.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Field label="Default State">
                <Textarea
                  value={defaultStateValue}
                  onChange={(e) => setDefaultStateValue(e.target.value)}
                  placeholder="Default state"
                  state="default"
                />
              </Field>
              <Field label="Focused State">
                <Textarea
                  value={focusedValue}
                  onChange={(e) => setFocusedValue(e.target.value)}
                  placeholder="Focused state"
                  state="focused"
                />
              </Field>
              <Field label="Error State" helperMessage="This field has an error">
                <Textarea
                  value={errorValue}
                  onChange={(e) => setErrorValue(e.target.value)}
                  placeholder="Error state"
                  state="error"
                />
              </Field>
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
              Disabled textareas prevent user interaction and are typically used
              when the field is not applicable.
            </p>
            <div className="demo-content">
              <Field label="Disabled Textarea">
                <Textarea
                  value={disabledValue}
                  onChange={(e) => setDisabledValue(e.target.value)}
                  placeholder="Disabled textarea"
                  disabled
                />
              </Field>
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={DISABLED_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{DISABLED_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Resize */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Resize Control</h2>
            <p className="demo-group__description">
              By default, the textarea can be resized vertically. Set{" "}
              <code>resize=&#123;false&#125;</code> to disable resizing.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Field label="Resizable (default)">
                <Textarea
                  value={resizableValue}
                  onChange={(e) => setResizableValue(e.target.value)}
                  placeholder="Drag the corner to resize..."
                />
              </Field>
              <Field label="No Resize">
                <Textarea
                  value={noResizeValue}
                  onChange={(e) => setNoResizeValue(e.target.value)}
                  placeholder="Cannot be resized"
                  resize={false}
                />
              </Field>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={RESIZE_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{RESIZE_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* With Field */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Field Wrapper</h2>
            <p className="demo-group__description">
              Wrap textarea inputs with <code>&lt;Field&gt;</code> for labels,
              validation messages, and helper text.
            </p>
            <div className="demo-content">
              <Field
                label="Description"
                required
                helperMessage="Provide a detailed description"
              >
                <Textarea
                  value={fieldValue}
                  onChange={(e) => setFieldValue(e.target.value)}
                  placeholder="Enter description..."
                />
              </Field>
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={FIELD_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{FIELD_CODE}</code>
              </pre>
            </div>
          </div>
        </div>

        <Divider variant="solid" />

        {/* Props Reference */}
        <div className="page__reference-section">
          <div className="demo-group">
            <h2 className="demo-group__heading">Props Reference</h2>
            <div className="table-responsive">
              <table className="reference-table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Values</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>value</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>The controlled value of the textarea.</td>
                  </tr>
                  <tr>
                    <td><code>onChange</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td><code>(event) =&gt; void</code></td>
                    <td>Callback fired when the textarea value changes.</td>
                  </tr>
                  <tr>
                    <td><code>placeholder</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>Placeholder text displayed when empty.</td>
                  </tr>
                  <tr>
                    <td><code>size</code></td>
                    <td><code>string</code></td>
                    <td><code>"default"</code></td>
                    <td><code>"compact" | "default"</code></td>
                    <td>Size variant. Default is 120px min-height, compact is 80px.</td>
                  </tr>
                  <tr>
                    <td><code>state</code></td>
                    <td><code>string</code></td>
                    <td><code>"default"</code></td>
                    <td><code>"default" | "focused" | "error" | "disabled"</code></td>
                    <td>Visual state of the textarea.</td>
                  </tr>
                  <tr>
                    <td><code>resize</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>—</td>
                    <td>Whether the textarea can be resized vertically.</td>
                  </tr>
                  <tr>
                    <td><code>disabled</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>—</td>
                    <td>Whether the textarea is disabled. Overrides <code>state</code>.</td>
                  </tr>
                  <tr>
                    <td><code>id</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>Unique identifier for the textarea element.</td>
                  </tr>
                  <tr>
                    <td><code>className</code></td>
                    <td><code>string</code></td>
                    <td><code>""</code></td>
                    <td>—</td>
                    <td>Additional CSS classes to apply.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Divider variant="solid" />

        <div className="page__tabs-content-container">
          <div className="demo-group">
            <div className="page__navigation">
              <Link
                to="/tabs"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Tabs</span>
              </Link>
              <Link
                to="/toast"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Toast</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
