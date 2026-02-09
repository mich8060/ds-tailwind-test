import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../ui/Input/Input";
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

const BASIC_CODE = `import Input from "@mich8060/chg-design-system/Input";

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text"
/>`;

const TYPES_CODE = `import Input from "@mich8060/chg-design-system/Input";
import Field from "@mich8060/chg-design-system/Field";

<Field label="Email">
  <Input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
  />
</Field>

<Field label="Password">
  <Input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Enter your password"
  />
</Field>`;

const SIZES_CODE = `import Input from "@mich8060/chg-design-system/Input";
import Field from "@mich8060/chg-design-system/Field";

{/* Default size */}
<Field label="Default Size">
  <Input placeholder="Default size input" size="default" />
</Field>

{/* Compact size */}
<Field label="Compact Size">
  <Input placeholder="Compact size input" size="compact" />
</Field>`;

const STATES_CODE = `import Input from "@mich8060/chg-design-system/Input";
import Field from "@mich8060/chg-design-system/Field";

{/* Default */}
<Field label="Default State">
  <Input placeholder="Default state" state="default" />
</Field>

{/* Focused */}
<Field label="Focused State">
  <Input placeholder="Focused state" state="focused" />
</Field>

{/* Error with helper message */}
<Field label="Error State" helperMessage="This field has an error">
  <Input placeholder="Error state" state="error" />
</Field>`;

const DISABLED_CODE = `import Input from "@mich8060/chg-design-system/Input";
import Field from "@mich8060/chg-design-system/Field";

<Field label="Disabled Input">
  <Input
    value="Disabled value"
    placeholder="Disabled input"
    disabled
  />
</Field>`;

const ICON_CODE = `import Input from "@mich8060/chg-design-system/Input";
import Field from "@mich8060/chg-design-system/Field";

{/* Icon on the right (default) */}
<Field label="Search">
  <Input placeholder="Search..." icon="MagnifyingGlass" />
</Field>

{/* Icon on the left */}
<Field label="Search">
  <Input placeholder="Search..." icon="MagnifyingGlass" iconPosition="left" />
</Field>

{/* Clickable icon */}
<Field label="Password">
  <Input
    type="password"
    placeholder="Enter your password"
    icon="Eye"
    onIconClick={() => toggleVisibility()}
  />
</Field>`;

export default function InputDemo() {
  const [basicValue, setBasicValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [compactValue, setCompactValue] = useState("");
  const [errorValue, setErrorValue] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchLeftValue, setSearchLeftValue] = useState("");
  const [iconPasswordValue, setIconPasswordValue] = useState("");
  const [disabledValue, setDisabledValue] = useState("Disabled value");

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
              <h1 className="page__header-title">Text Input</h1>
              <p className="page__header-description">
                Single-line text input component for form fields. Supports multiple
          input types (text, email, password), sizes, and states (default,
          focused, error, disabled).
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
              Single-line text input component for form fields. The default size is 'default' and state is 'default'.
            </p>
            <div className="demo-content">
              <Input
                value={basicValue}
                onChange={(e) => setBasicValue(e.target.value)}
                placeholder="Enter text"
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

          {/* Input Types */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Input Types</h2>
            <p className="demo-group__description">
              Input components support various HTML input types including text, email, and password.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Field label="Email">
                <Input
                  type="email"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder="Enter your email"
                />
              </Field>
              <Field label="Password">
                <Input
                  type="password"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  placeholder="Enter your password"
                />
              </Field>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={TYPES_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{TYPES_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Sizes */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Sizes</h2>
            <p className="demo-group__description">
              Input components are available in two sizes: default and compact.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Field label="Default Size">
                <Input
                  value={basicValue}
                  onChange={(e) => setBasicValue(e.target.value)}
                  placeholder="Default size input"
                  size="default"
                />
              </Field>
              <Field label="Compact Size">
                <Input
                  value={compactValue}
                  onChange={(e) => setCompactValue(e.target.value)}
                  placeholder="Compact size input"
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
              Input components support different visual states: default, focused, error, and disabled.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Field label="Default State">
                <Input
                  value={basicValue}
                  onChange={(e) => setBasicValue(e.target.value)}
                  placeholder="Default state"
                  state="default"
                />
              </Field>
              <Field label="Focused State">
                <Input
                  value={basicValue}
                  onChange={(e) => setBasicValue(e.target.value)}
                  placeholder="Focused state"
                  state="focused"
                />
              </Field>
              <Field label="Error State" helperMessage="This field has an error">
                <Input
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
              Disabled inputs prevent user interaction and are typically used when the field is not applicable.
            </p>
            <div className="demo-content">
              <Field label="Disabled Input">
                <Input
                  value={disabledValue}
                  onChange={(e) => setDisabledValue(e.target.value)}
                  placeholder="Disabled input"
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

          {/* With Icon */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Icon</h2>
            <p className="demo-group__description">
              Add an icon to the input using the <code>icon</code> prop (any Phosphor icon name).
              Position it on the <code>left</code> or <code>right</code> (default) with <code>iconPosition</code>.
              Use <code>onIconClick</code> to make the icon interactive.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <Field label="Search (icon right)">
                <Input
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search..."
                  icon="MagnifyingGlass"
                />
              </Field>
              <Field label="Search (icon left)">
                <Input
                  value={searchLeftValue}
                  onChange={(e) => setSearchLeftValue(e.target.value)}
                  placeholder="Search..."
                  icon="MagnifyingGlass"
                  iconPosition="left"
                />
              </Field>
              <Field label="Password (clickable icon)">
                <Input
                  value={iconPasswordValue}
                  onChange={(e) => setIconPasswordValue(e.target.value)}
                  type="password"
                  placeholder="Enter your password"
                  icon="Eye"
                  onIconClick={() => alert("Toggle password visibility")}
                />
              </Field>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={ICON_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{ICON_CODE}</code>
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
                    <td>The controlled value of the input.</td>
                  </tr>
                  <tr>
                    <td><code>onChange</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td><code>(event) =&gt; void</code></td>
                    <td>Callback fired when the input value changes.</td>
                  </tr>
                  <tr>
                    <td><code>placeholder</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>Placeholder text displayed when empty.</td>
                  </tr>
                  <tr>
                    <td><code>type</code></td>
                    <td><code>string</code></td>
                    <td><code>"text"</code></td>
                    <td><code>"text" | "email" | "password" | "number" | "tel" | "url"</code></td>
                    <td>The HTML input type.</td>
                  </tr>
                  <tr>
                    <td><code>size</code></td>
                    <td><code>string</code></td>
                    <td><code>"default"</code></td>
                    <td><code>"compact" | "default"</code></td>
                    <td>Size variant of the input.</td>
                  </tr>
                  <tr>
                    <td><code>state</code></td>
                    <td><code>string</code></td>
                    <td><code>"default"</code></td>
                    <td><code>"default" | "focused" | "error" | "disabled"</code></td>
                    <td>Visual state of the input.</td>
                  </tr>
                  <tr>
                    <td><code>disabled</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>—</td>
                    <td>Whether the input is disabled. Overrides <code>state</code>.</td>
                  </tr>
                  <tr>
                    <td><code>icon</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>Any Phosphor icon name (e.g. <code>"MagnifyingGlass"</code>, <code>"Eye"</code>)</td>
                    <td>Displays an icon inside the input.</td>
                  </tr>
                  <tr>
                    <td><code>iconPosition</code></td>
                    <td><code>string</code></td>
                    <td><code>"right"</code></td>
                    <td><code>"left" | "right"</code></td>
                    <td>Which side of the input to place the icon.</td>
                  </tr>
                  <tr>
                    <td><code>onIconClick</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td><code>() =&gt; void</code></td>
                    <td>Callback when the icon is clicked. Makes the icon interactive.</td>
                  </tr>
                  <tr>
                    <td><code>id</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>Unique identifier for the input element.</td>
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
                to="/tooltip"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Tooltip</span>
              </Link>
              <Link
                to="/key"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Key</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
