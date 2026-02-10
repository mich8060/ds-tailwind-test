import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Tag from "../ui/Tag/Tag";
import Flex from "../ui/Flex/Flex";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import CopyButton from "../ui/CopyButton/CopyButton";
import { formatLastUpdated } from "../utils/formatDate";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-jsx";
import "./TagDemo.scss";

const COLORS = [
  "transparent",
  "neutral",
  "red",
  "orange",
  "yellow",
  "emerald",
  "green",
  "sky",
  "cyan",
  "blue",
  "indigo",
  "purple",
  "fuchsia",
  "magenta",
  "inverse",
];

// ── Code examples ────────────────────────────────────────────────────
const COLOR_VARIANTS_CODE = `import { Tag } from "@mich8060/chg-design-system";

// Non-solid color variants (text color only)
<Tag label="transparent" color="transparent" />
<Tag label="neutral" color="neutral" />
<Tag label="red" color="red" />
<Tag label="orange" color="orange" />
<Tag label="yellow" color="yellow" />
<Tag label="emerald" color="emerald" />
<Tag label="green" color="green" />
<Tag label="blue" color="blue" />
<Tag label="purple" color="purple" />
<Tag label="inverse" color="inverse" />`;

const SOLID_VARIANTS_CODE = `import { Tag } from "@mich8060/chg-design-system";

// Solid variants (filled background)
<Tag label="red" color="red" solid />
<Tag label="orange" color="orange" solid />
<Tag label="green" color="green" solid />
<Tag label="blue" color="blue" solid />
<Tag label="purple" color="purple" solid />`;

const SIZES_CODE = `import { Tag } from "@mich8060/chg-design-system";

// Compact (16px tall) — default size
<Tag label="Compact" color="blue" solid size="compact" />

// Default (24px tall)
<Tag label="Default" color="blue" solid size="default" />`;

const ROUNDED_CODE = `import { Tag } from "@mich8060/chg-design-system";

// Rounded (default) — pill shape
<Tag label="Rounded" color="green" solid rounded />

// Square — no border-radius
<Tag label="Square" color="green" solid rounded={false} />`;

const ICON_CODE = `import { Tag } from "@mich8060/chg-design-system";

// Use appearance="icon-left" with icon prop (Phosphor icon name)
<Tag
  label="Active"
  color="green"
  solid
  appearance="icon-left"
  icon="CheckCircle"
/>
<Tag
  label="Warning"
  color="orange"
  solid
  appearance="icon-left"
  icon="Warning"
/>
<Tag
  label="Error"
  color="red"
  solid
  appearance="icon-left"
  icon="XCircle"
/>`;

const CLICKABLE_CODE = `import { Tag } from "@mich8060/chg-design-system";

// When onClick is provided, tag renders as <button>
<Tag
  label="Click me"
  color="blue"
  solid
  onClick={() => console.log("Tag clicked!")}
/>
<Tag
  label="Filter"
  color="purple"
  solid
  appearance="icon-left"
  icon="Funnel"
  onClick={() => console.log("Filter clicked!")}
/>`;

const USAGE_CODE = `import { Tag } from "@mich8060/chg-design-system";

// Status tags
<Tag label="Active" color="green" solid />
<Tag label="Pending" color="yellow" solid />
<Tag label="Archived" color="neutral" solid />
<Tag label="Rejected" color="red" solid />

// Category tags
<Tag label="Design" color="purple" solid />
<Tag label="Engineering" color="blue" solid />
<Tag label="Marketing" color="fuchsia" solid />

// Priority tags with icons
<Tag label="Critical" color="red" solid appearance="icon-left" icon="Warning" />
<Tag label="High" color="orange" solid />
<Tag label="Medium" color="yellow" solid />
<Tag label="Low" color="sky" solid />`;

export default function TagDemo() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="page tag-demo">
      <header className="page__header">
        <div className="page__header-container">
          <Breadcrumb />
          <div className="page__header-info">
            <div className="page__header-content">
              <h1 className="page__header-title">Tag</h1>
              <p className="page__header-description">
                Colored label component for categorization, status, or metadata
                display. Supports multiple colors, solid and non-solid variants,
                optional icons, and two sizes.
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
          {/* ── Color Variants (non-solid) ──────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Color Variants</h2>
            <p className="demo-group__description">
              Tags support 15 color variants. Non-solid tags display colored
              text on a transparent background.
            </p>
            <Flex direction="row" gap="12" wrap={true} className="demo-content">
              {COLORS.map((color) => (
                <Tag key={color} label={color} color={color} />
              ))}
            </Flex>
            <div className="tag-demo__code-block-wrapper">
              <CopyButton codeString={COLOR_VARIANTS_CODE} />
              <pre className="tag-demo__code-block">
                <code className="language-jsx">{COLOR_VARIANTS_CODE}</code>
              </pre>
            </div>
          </div>

          {/* ── Solid Variants ──────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Solid Variants</h2>
            <p className="demo-group__description">
              Pass <code>solid</code> to render tags with a filled background
              and inverse text color.
            </p>
            <Flex direction="row" gap="12" wrap={true} className="demo-content">
              {COLORS.map((color) => (
                <Tag key={color} label={color} color={color} solid />
              ))}
            </Flex>
            <div className="tag-demo__code-block-wrapper">
              <CopyButton codeString={SOLID_VARIANTS_CODE} />
              <pre className="tag-demo__code-block">
                <code className="language-jsx">{SOLID_VARIANTS_CODE}</code>
              </pre>
            </div>
          </div>

          {/* ── Sizes ───────────────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Sizes</h2>
            <p className="demo-group__description">
              Two size variants: <code>compact</code> (16px tall, default) and{" "}
              <code>default</code> (24px tall).
            </p>
            <Flex direction="row" gap="16" alignItems="center" className="demo-content">
              <Tag label="Compact" color="blue" solid size="compact" />
              <Tag label="Default" color="blue" solid size="default" />
            </Flex>
            <div className="tag-demo__code-block-wrapper">
              <CopyButton codeString={SIZES_CODE} />
              <pre className="tag-demo__code-block">
                <code className="language-jsx">{SIZES_CODE}</code>
              </pre>
            </div>
          </div>

          {/* ── Rounded vs Square ───────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Rounded vs Square</h2>
            <p className="demo-group__description">
              Tags are rounded by default. Pass <code>rounded=&#123;false&#125;</code>{" "}
              to remove border radius.
            </p>
            <Flex direction="row" gap="16" alignItems="center" className="demo-content">
              <Tag label="Rounded" color="green" solid rounded />
              <Tag label="Square" color="green" solid rounded={false} />
            </Flex>
            <div className="tag-demo__code-block-wrapper">
              <CopyButton codeString={ROUNDED_CODE} />
              <pre className="tag-demo__code-block">
                <code className="language-jsx">{ROUNDED_CODE}</code>
              </pre>
            </div>
          </div>

          {/* ── With Icons ──────────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Icons</h2>
            <p className="demo-group__description">
              Set <code>appearance=&quot;icon-left&quot;</code> and pass a
              Phosphor icon name via the <code>icon</code> prop.
            </p>
            <Flex direction="row" gap="12" wrap={true} className="demo-content">
              <Tag
                label="Active"
                color="green"
                solid
                appearance="icon-left"
                icon="CheckCircle"
              />
              <Tag
                label="Warning"
                color="orange"
                solid
                appearance="icon-left"
                icon="Warning"
              />
              <Tag
                label="Error"
                color="red"
                solid
                appearance="icon-left"
                icon="XCircle"
              />
              <Tag
                label="Info"
                color="blue"
                solid
                appearance="icon-left"
                icon="Info"
              />
              <Tag
                label="Pending"
                color="yellow"
                solid
                appearance="icon-left"
                icon="Clock"
              />
              <Tag
                label="Archived"
                color="neutral"
                solid
                appearance="icon-left"
                icon="Archive"
              />
            </Flex>
            <div className="tag-demo__code-block-wrapper">
              <CopyButton codeString={ICON_CODE} />
              <pre className="tag-demo__code-block">
                <code className="language-jsx">{ICON_CODE}</code>
              </pre>
            </div>
          </div>

          {/* ── Clickable Tags ──────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Clickable Tags</h2>
            <p className="demo-group__description">
              When an <code>onClick</code> handler is provided, the tag renders
              as a <code>&lt;button&gt;</code> element instead of a{" "}
              <code>&lt;span&gt;</code>.
            </p>
            <Flex direction="row" gap="12" wrap={true} className="demo-content">
              <Tag
                label="Click me"
                color="blue"
                solid
                onClick={() => alert("Tag clicked!")}
              />
              <Tag
                label="Filter"
                color="purple"
                solid
                appearance="icon-left"
                icon="Funnel"
                onClick={() => alert("Filter clicked!")}
              />
            </Flex>
            <div className="tag-demo__code-block-wrapper">
              <CopyButton codeString={CLICKABLE_CODE} />
              <pre className="tag-demo__code-block">
                <code className="language-jsx">{CLICKABLE_CODE}</code>
              </pre>
            </div>
          </div>

          {/* ── Usage Examples ───────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Usage Examples</h2>
            <p className="demo-group__description">
              Common real-world applications for the Tag component.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <div>
                <p style={{ marginBottom: "var(--uds-spacing-8)", fontWeight: "var(--uds-font-weight-semibold)" }}>
                  Status tags
                </p>
                <Flex direction="row" gap="8" wrap={true}>
                  <Tag label="Active" color="green" solid />
                  <Tag label="Pending" color="yellow" solid />
                  <Tag label="Archived" color="neutral" solid />
                  <Tag label="Rejected" color="red" solid />
                </Flex>
              </div>
              <div>
                <p style={{ marginBottom: "var(--uds-spacing-8)", fontWeight: "var(--uds-font-weight-semibold)" }}>
                  Category tags
                </p>
                <Flex direction="row" gap="8" wrap={true}>
                  <Tag label="Design" color="purple" solid />
                  <Tag label="Engineering" color="blue" solid />
                  <Tag label="Marketing" color="fuchsia" solid />
                  <Tag label="Sales" color="emerald" solid />
                </Flex>
              </div>
              <div>
                <p style={{ marginBottom: "var(--uds-spacing-8)", fontWeight: "var(--uds-font-weight-semibold)" }}>
                  Priority tags
                </p>
                <Flex direction="row" gap="8" wrap={true}>
                  <Tag label="Critical" color="red" solid appearance="icon-left" icon="Warning" />
                  <Tag label="High" color="orange" solid />
                  <Tag label="Medium" color="yellow" solid />
                  <Tag label="Low" color="sky" solid />
                </Flex>
              </div>
            </Flex>
            <div className="tag-demo__code-block-wrapper">
              <CopyButton codeString={USAGE_CODE} />
              <pre className="tag-demo__code-block">
                <code className="language-jsx">{USAGE_CODE}</code>
              </pre>
            </div>
          </div>

          {/* ── Props Reference ──────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Props Reference</h2>
            <div className="demo-group__table-wrapper">
              <table className="demo-group__table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>label</code></td>
                    <td><code>string</code></td>
                    <td><code>&quot;Label&quot;</code></td>
                    <td>The text content of the tag.</td>
                  </tr>
                  <tr>
                    <td><code>appearance</code></td>
                    <td><code>string</code></td>
                    <td><code>&quot;label-only&quot;</code></td>
                    <td>
                      Visual layout: <code>&quot;label-only&quot;</code> or{" "}
                      <code>&quot;icon-left&quot;</code>.
                    </td>
                  </tr>
                  <tr>
                    <td><code>size</code></td>
                    <td><code>string</code></td>
                    <td><code>&quot;compact&quot;</code></td>
                    <td>
                      Size variant: <code>&quot;compact&quot;</code> (16px) or{" "}
                      <code>&quot;default&quot;</code> (24px).
                    </td>
                  </tr>
                  <tr>
                    <td><code>color</code></td>
                    <td><code>string</code></td>
                    <td><code>&quot;transparent&quot;</code></td>
                    <td>
                      Color variant. One of: <code>&quot;transparent&quot;</code>,{" "}
                      <code>&quot;neutral&quot;</code>, <code>&quot;red&quot;</code>,{" "}
                      <code>&quot;orange&quot;</code>, <code>&quot;yellow&quot;</code>,{" "}
                      <code>&quot;emerald&quot;</code>, <code>&quot;green&quot;</code>,{" "}
                      <code>&quot;sky&quot;</code>, <code>&quot;cyan&quot;</code>,{" "}
                      <code>&quot;blue&quot;</code>, <code>&quot;indigo&quot;</code>,{" "}
                      <code>&quot;purple&quot;</code>, <code>&quot;fuchsia&quot;</code>,{" "}
                      <code>&quot;magenta&quot;</code>, <code>&quot;inverse&quot;</code>.
                    </td>
                  </tr>
                  <tr>
                    <td><code>rounded</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Whether to use fully rounded corners (pill shape).</td>
                  </tr>
                  <tr>
                    <td><code>solid</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Whether to use a solid filled background.</td>
                  </tr>
                  <tr>
                    <td><code>icon</code></td>
                    <td><code>string | boolean</code></td>
                    <td>—</td>
                    <td>
                      Phosphor icon name (e.g. <code>&quot;CheckCircle&quot;</code>).
                      Only visible when <code>appearance=&quot;icon-left&quot;</code>.
                    </td>
                  </tr>
                  <tr>
                    <td><code>onClick</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td>
                      Click handler. When provided, tag renders as a{" "}
                      <code>&lt;button&gt;</code>.
                    </td>
                  </tr>
                  <tr>
                    <td><code>className</code></td>
                    <td><code>string</code></td>
                    <td><code>&quot;&quot;</code></td>
                    <td>Additional CSS classes.</td>
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
                to="/textarea"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Textarea</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
