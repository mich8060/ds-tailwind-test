import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Tooltip from "../ui/Tooltip/Tooltip";
import Button from "../ui/Button/Button";
import Flex from "../ui/Flex/Flex";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import CopyButton from "../ui/CopyButton/CopyButton";
import { formatLastUpdated } from "../utils/formatDate";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";

const tooltipContent =
  "A message which appears when a cursor is positioned over an icon, image, hyperlink, or other element in a graphical user interface.";

const PLACEMENT_CODE = `import Tooltip from "@mich8060/chg-design-system/Tooltip";
import Button from "@mich8060/chg-design-system/Button";

<Tooltip content="Tooltip message" placement="top">
  <Button appearance="outline" label="Top" />
</Tooltip>

<Tooltip content="Tooltip message" placement="bottom">
  <Button appearance="outline" label="Bottom" />
</Tooltip>

<Tooltip content="Tooltip message" placement="left">
  <Button appearance="outline" label="Left" />
</Tooltip>

<Tooltip content="Tooltip message" placement="right">
  <Button appearance="outline" label="Right" />
</Tooltip>`;

const ICONS_CODE = `import Tooltip from "@mich8060/chg-design-system/Tooltip";
import Button from "@mich8060/chg-design-system/Button";

<Tooltip content="Edit this item" placement="top">
  <Button appearance="text" layout="icon-only" icon="Pencil" size="small" />
</Tooltip>

<Tooltip content="Delete this item" placement="top">
  <Button appearance="text" layout="icon-only" icon="Trash" size="small" />
</Tooltip>

<Tooltip content="More information" placement="top">
  <Button appearance="text" layout="icon-only" icon="Info" size="small" />
</Tooltip>

<Tooltip content="Settings" placement="top">
  <Button appearance="text" layout="icon-only" icon="Gear" size="small" />
</Tooltip>`;

const TEXT_CODE = `import Tooltip from "@mich8060/chg-design-system/Tooltip";

{/* Tooltip on a link */}
<p>
  This is a paragraph with a{" "}
  <Tooltip content="This is a helpful tooltip" placement="top">
    <a href="#">tooltip on a link</a>
  </Tooltip>.
</p>

{/* Tooltip on inline text */}
<p>
  Hover over this{" "}
  <Tooltip content="Additional information appears here" placement="bottom">
    <span style={{ borderBottom: '1px dotted', cursor: 'help' }}>
      dotted text
    </span>
  </Tooltip>
  {" "}to see the tooltip.
</p>`;

const DISABLED_CODE = `import Tooltip from "@mich8060/chg-design-system/Tooltip";
import Button from "@mich8060/chg-design-system/Button";

{/* When disabled, the tooltip won't appear on hover */}
<Tooltip content="This tooltip is disabled" placement="top" disabled>
  <Button appearance="outline" label="Hover me (tooltip disabled)" />
</Tooltip>`;

/**
 * Tooltip Component Demo & Documentation
 *
 * This page demonstrates the Tooltip component and its various configurations.
 */
export default function TooltipDemo() {
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
              <h1 className="page__header-title">Tooltip</h1>
              <p className="page__header-description">
                Tooltips provide additional context or information when users
                hover over or focus on an element. They appear temporarily and
                disappear when the user moves their cursor away.
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
          {/* Placement */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Placement</h2>
            <p className="demo-group__description">
              Tooltips can be positioned on any side of the trigger element: top, bottom, left, or right. The default placement is top.
            </p>
            <Flex direction="row" gap="24" wrap={true} alignItems="center" className="demo-content">
              <Tooltip content={tooltipContent} placement="top">
                <Button appearance="outline" label="Top" />
              </Tooltip>
              <Tooltip content={tooltipContent} placement="bottom">
                <Button appearance="outline" label="Bottom" />
              </Tooltip>
              <Tooltip content={tooltipContent} placement="left">
                <Button appearance="outline" label="Left" />
              </Tooltip>
              <Tooltip content={tooltipContent} placement="right">
                <Button appearance="outline" label="Right" />
              </Tooltip>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={PLACEMENT_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{PLACEMENT_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* With Icons */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Icons</h2>
            <p className="demo-group__description">
              Tooltips work well with icon buttons to provide additional context without cluttering the interface.
            </p>
            <Flex direction="row" gap="16" wrap={true} alignItems="center" className="demo-content">
              <Tooltip content="Edit this item" placement="top">
                <Button appearance="text" layout="icon-only" icon="Pencil" size="small" />
              </Tooltip>
              <Tooltip content="Delete this item" placement="top">
                <Button appearance="text" layout="icon-only" icon="Trash" size="small" />
              </Tooltip>
              <Tooltip content="More information" placement="top">
                <Button appearance="text" layout="icon-only" icon="Info" size="small" />
              </Tooltip>
              <Tooltip content="Settings" placement="top">
                <Button appearance="text" layout="icon-only" icon="Gear" size="small" />
              </Tooltip>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={ICONS_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{ICONS_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* With Text */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Text</h2>
            <p className="demo-group__description">
              Tooltips can be attached to any element, including text links or labels, to provide helpful context.
            </p>
            <Flex direction="column" gap="16" className="demo-content">
              <p>
                This is a paragraph with a{" "}
                <Tooltip content="This is a helpful tooltip" placement="top">
                  <a href="#" style={{ color: 'var(--uds-text-link-primary-default)', textDecoration: 'underline' }}>
                    tooltip on a link
                  </a>
                </Tooltip>
                .
              </p>
              <p>
                Hover over this{" "}
                <Tooltip content="Additional information appears here" placement="bottom">
                  <span style={{ borderBottom: '1px dotted', cursor: 'help' }}>dotted text</span>
                </Tooltip>
                {" "}to see the tooltip.
              </p>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={TEXT_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{TEXT_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Disabled Tooltip */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Disabled Tooltip</h2>
            <p className="demo-group__description">
              Tooltips can be disabled when they are not needed or should not be displayed.
            </p>
            <div className="demo-content">
              <Tooltip content="This tooltip is disabled" placement="top" disabled>
                <Button appearance="outline" label="Hover me (tooltip disabled)" />
              </Tooltip>
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
                    <td><code>children</code></td>
                    <td><code>ReactNode</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>The trigger element that the tooltip wraps.</td>
                  </tr>
                  <tr>
                    <td><code>content</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>The tooltip message text. If empty, the tooltip is not rendered.</td>
                  </tr>
                  <tr>
                    <td><code>placement</code></td>
                    <td><code>string</code></td>
                    <td><code>"top"</code></td>
                    <td><code>"top" | "bottom" | "left" | "right"</code></td>
                    <td>Position of the tooltip relative to the trigger element.</td>
                  </tr>
                  <tr>
                    <td><code>disabled</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>—</td>
                    <td>When true, the tooltip is not displayed on hover.</td>
                  </tr>
                  <tr>
                    <td><code>className</code></td>
                    <td><code>string</code></td>
                    <td><code>""</code></td>
                    <td>—</td>
                    <td>Additional CSS classes to apply to the wrapper element.</td>
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
                to="/toggle"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Toggle</span>
              </Link>
              <Link
                to="/input"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Text Input</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
