import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../ui/Modal/Modal";
import Button from "../ui/Button/Button";
import Flex from "../ui/Flex/Flex";
import Input from "../ui/Input/Input";
import Field from "../ui/Field/Field";
import Textarea from "../ui/Textarea/Textarea";
import Dropdown from "../ui/Dropdown/Dropdown";
import Divider from "../ui/Divider/Divider";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import CopyButton from "../ui/CopyButton/CopyButton";
import { formatLastUpdated } from "../utils/formatDate";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "./ModalDemo.scss";

export default function ModalDemo() {
  const [basicOpen, setBasicOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [largeOpen, setLargeOpen] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [persistentOpen, setPersistentOpen] = useState(false);
  const [customHeaderOpen, setCustomHeaderOpen] = useState(false);

  // Form state for form modal demo
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="page modal-demo">
      <header className="page__header">
        <div className="page__header-container">
          <Breadcrumb />
          <div className="page__header-info">
            <div className="page__header-content">
              <h1 className="page__header-title">Modal</h1>
              <p className="page__header-description">
                A standalone, accessible dialog overlay for confirmations, forms,
                and focused content. Renders via a portal with backdrop,
                Escape-key dismissal, scroll locking, and focus management.
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
          {/* Basic Modal */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Basic Modal</h2>
            <p className="demo-group__description">
              A simple modal with title, subtitle, and body content. Click the backdrop
              or press Escape to close.
            </p>
            <Flex direction="row" gap="8" wrap={true}>
              <Button label="Open Basic Modal" appearance="primary" onClick={() => setBasicOpen(true)} />
            </Flex>
            <Modal
              open={basicOpen}
              onClose={() => setBasicOpen(false)}
              title="Welcome"
              subtitle="Get started with the Modal component"
            >
              <p style={{ margin: 0, color: "var(--uds-text-primary)" }}>
                This is a basic modal with a title and subtitle. The body area
                scrolls independently when content overflows. Click the backdrop
                or press <strong>Escape</strong> to close.
              </p>
            </Modal>
            <div className="modal-demo__code-block-wrapper">
              <CopyButton
                codeString={`const [open, setOpen] = useState(false);

<Button label="Open Basic Modal" onClick={() => setOpen(true)} />

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Welcome"
  subtitle="Get started with the Modal component"
>
  <p>Modal body content goes here.</p>
</Modal>`}
              />
              <pre className="modal-demo__code-block">
                <code className="language-jsx">{`const [open, setOpen] = useState(false);

<Button label="Open Basic Modal" onClick={() => setOpen(true)} />

<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Welcome"
  subtitle="Get started with the Modal component"
>
  <p>Modal body content goes here.</p>
</Modal>`}</code>
              </pre>
            </div>
          </div>

          {/* Confirmation Modal */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Confirmation Modal</h2>
            <p className="demo-group__description">
              A small confirmation dialog with footer actions. Ideal for destructive
              operations that require user acknowledgment.
            </p>
            <Flex direction="row" gap="8" wrap={true}>
              <Button label="Delete Item" appearance="destructive" onClick={() => setConfirmOpen(true)} />
            </Flex>
            <Modal
              open={confirmOpen}
              onClose={() => setConfirmOpen(false)}
              title="Confirm Deletion"
              subtitle="This action cannot be undone."
              size="small"
              footer={
                <>
                  <Button label="Cancel" appearance="outline" onClick={() => setConfirmOpen(false)} />
                  <Button
                    label="Delete"
                    appearance="destructive"
                    onClick={() => {
                      setConfirmOpen(false);
                    }}
                  />
                </>
              }
            >
              <p style={{ margin: 0, color: "var(--uds-text-primary)" }}>
                Are you sure you want to delete this item? All associated data
                will be permanently removed.
              </p>
            </Modal>
            <div className="modal-demo__code-block-wrapper">
              <CopyButton
                codeString={`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Deletion"
  subtitle="This action cannot be undone."
  size="small"
  footer={
    <>
      <Button label="Cancel" appearance="outline" onClick={() => setOpen(false)} />
      <Button label="Delete" appearance="destructive" onClick={handleDelete} />
    </>
  }
>
  <p>Are you sure you want to delete this item?</p>
</Modal>`}
              />
              <pre className="modal-demo__code-block">
                <code className="language-jsx">{`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Deletion"
  subtitle="This action cannot be undone."
  size="small"
  footer={
    <>
      <Button label="Cancel" appearance="outline" onClick={() => setOpen(false)} />
      <Button label="Delete" appearance="destructive" onClick={handleDelete} />
    </>
  }
>
  <p>Are you sure you want to delete this item?</p>
</Modal>`}</code>
              </pre>
            </div>
          </div>

          {/* Form Modal */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Form Modal</h2>
            <p className="demo-group__description">
              A modal containing a form with multiple fields. Uses the default
              size (640px) for comfortable form layouts.
            </p>
            <Flex direction="row" gap="8" wrap={true}>
              <Button label="Create Project" appearance="primary" onClick={() => setFormOpen(true)} />
            </Flex>
            <Modal
              open={formOpen}
              onClose={() => setFormOpen(false)}
              title="Create Project"
              subtitle="Fill in the details to create a new project."
              footer={
                <>
                  <Button label="Cancel" appearance="outline" onClick={() => setFormOpen(false)} />
                  <Button
                    label="Create"
                    appearance="primary"
                    onClick={() => {
                      setFormOpen(false);
                      setProjectName("");
                      setProjectDesc("");
                      setProjectType("");
                    }}
                  />
                </>
              }
            >
              <Flex direction="column" gap="16">
                <Field label="Project Name" required>
                  <Input
                    placeholder="Enter project name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </Field>
                <Field label="Type">
                  <Dropdown
                    options={[
                      { value: "web", label: "Web Application" },
                      { value: "mobile", label: "Mobile App" },
                      { value: "api", label: "API Service" },
                      { value: "library", label: "Library / Package" },
                    ]}
                    value={projectType}
                    onChange={setProjectType}
                    placeholder="Select project type"
                  />
                </Field>
                <Field label="Description">
                  <Textarea
                    placeholder="Describe the project..."
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    rows={4}
                  />
                </Field>
              </Flex>
            </Modal>
            <div className="modal-demo__code-block-wrapper">
              <CopyButton
                codeString={`<Modal
  open={formOpen}
  onClose={() => setFormOpen(false)}
  title="Create Project"
  subtitle="Fill in the details to create a new project."
  footer={
    <>
      <Button label="Cancel" appearance="outline" onClick={() => setFormOpen(false)} />
      <Button label="Create" appearance="primary" onClick={handleCreate} />
    </>
  }
>
  <Flex direction="column" gap="16">
    <Field label="Project Name" required>
      <Input placeholder="Enter project name" />
    </Field>
    <Field label="Type">
      <Dropdown options={types} value={type} onChange={setType} />
    </Field>
    <Field label="Description">
      <Textarea placeholder="Describe the project..." rows={4} />
    </Field>
  </Flex>
</Modal>`}
              />
              <pre className="modal-demo__code-block">
                <code className="language-jsx">{`<Modal
  open={formOpen}
  onClose={() => setFormOpen(false)}
  title="Create Project"
  subtitle="Fill in the details to create a new project."
  footer={
    <>
      <Button label="Cancel" appearance="outline" onClick={() => setFormOpen(false)} />
      <Button label="Create" appearance="primary" onClick={handleCreate} />
    </>
  }
>
  <Flex direction="column" gap="16">
    <Field label="Project Name" required>
      <Input placeholder="Enter project name" />
    </Field>
    <Field label="Type">
      <Dropdown options={types} value={type} onChange={setType} />
    </Field>
    <Field label="Description">
      <Textarea placeholder="Describe the project..." rows={4} />
    </Field>
  </Flex>
</Modal>`}</code>
              </pre>
            </div>
          </div>

          {/* Size Variants */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Size Variants</h2>
            <p className="demo-group__description">
              Modals come in four sizes: <code>small</code> (480px),{" "}
              <code>default</code> (640px), <code>large</code> (800px), and{" "}
              <code>fullscreen</code>.
            </p>
            <Flex direction="row" gap="8" wrap={true}>
              <Button label="Small (480px)" appearance="outline" onClick={() => setConfirmOpen(true)} />
              <Button label="Default (640px)" appearance="outline" onClick={() => setBasicOpen(true)} />
              <Button label="Large (800px)" appearance="outline" onClick={() => setLargeOpen(true)} />
              <Button label="Fullscreen" appearance="outline" onClick={() => setFullscreenOpen(true)} />
            </Flex>
            <Modal
              open={largeOpen}
              onClose={() => setLargeOpen(false)}
              title="Release Notes"
              badge="v2.0"
              size="large"
            >
              <Flex direction="column" gap="16">
                <div>
                  <h3 style={{ margin: "0 0 8px", color: "var(--uds-text-primary)" }}>
                    What's New
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: 20, color: "var(--uds-text-secondary)" }}>
                    <li>New standalone Modal component with portal rendering</li>
                    <li>Size variants: small, default, large, fullscreen</li>
                    <li>Escape key and backdrop click dismissal</li>
                    <li>Body scroll locking and focus management</li>
                    <li>ARIA attributes for full accessibility</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ margin: "0 0 8px", color: "var(--uds-text-primary)" }}>
                    Bug Fixes
                  </h3>
                  <ul style={{ margin: 0, paddingLeft: 20, color: "var(--uds-text-secondary)" }}>
                    <li>Fixed Dropdown border color in default state</li>
                    <li>Resolved focus ring inconsistency on buttons</li>
                    <li>Menu sidebar now uses flex layout instead of fixed positioning</li>
                  </ul>
                </div>
              </Flex>
            </Modal>
            <Modal
              open={fullscreenOpen}
              onClose={() => setFullscreenOpen(false)}
              title="Document Viewer"
              subtitle="Fullscreen mode — press Escape or click X to close"
              size="fullscreen"
            >
              <Flex
                direction="column"
                gap="16"
                alignItems="center"
                justifyContent="center"
                style={{ height: "100%", minHeight: 300 }}
              >
                <p style={{ margin: 0, color: "var(--uds-text-secondary)", textAlign: "center", maxWidth: 480 }}>
                  This is a fullscreen modal that fills the entire viewport. It's
                  useful for immersive experiences like document editors, media
                  viewers, or complex workflows.
                </p>
              </Flex>
            </Modal>
            <div className="modal-demo__code-block-wrapper">
              <CopyButton
                codeString={`<Modal open={open} onClose={onClose} title="Title" size="small">...</Modal>
<Modal open={open} onClose={onClose} title="Title" size="default">...</Modal>
<Modal open={open} onClose={onClose} title="Title" size="large">...</Modal>
<Modal open={open} onClose={onClose} title="Title" size="fullscreen">...</Modal>`}
              />
              <pre className="modal-demo__code-block">
                <code className="language-jsx">{`<Modal open={open} onClose={onClose} title="Title" size="small">...</Modal>
<Modal open={open} onClose={onClose} title="Title" size="default">...</Modal>
<Modal open={open} onClose={onClose} title="Title" size="large">...</Modal>
<Modal open={open} onClose={onClose} title="Title" size="fullscreen">...</Modal>`}</code>
              </pre>
            </div>
          </div>

          {/* Persistent Modal */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Persistent Modal</h2>
            <p className="demo-group__description">
              Disable backdrop and Escape key dismissal for modals that require
              explicit user action (e.g. wizards, mandatory confirmations).
            </p>
            <Flex direction="row" gap="8" wrap={true}>
              <Button label="Open Persistent Modal" appearance="primary" onClick={() => setPersistentOpen(true)} />
            </Flex>
            <Modal
              open={persistentOpen}
              onClose={() => setPersistentOpen(false)}
              title="Terms & Conditions"
              closeOnBackdrop={false}
              closeOnEscape={false}
              size="small"
              footer={
                <>
                  <Button label="Decline" appearance="outline" onClick={() => setPersistentOpen(false)} />
                  <Button label="Accept" appearance="primary" onClick={() => setPersistentOpen(false)} />
                </>
              }
            >
              <p style={{ margin: 0, color: "var(--uds-text-primary)" }}>
                You must accept the terms and conditions before continuing.
                This modal cannot be dismissed by clicking outside or pressing Escape —
                you must use the footer buttons.
              </p>
            </Modal>
            <div className="modal-demo__code-block-wrapper">
              <CopyButton
                codeString={`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Terms & Conditions"
  closeOnBackdrop={false}
  closeOnEscape={false}
  footer={
    <>
      <Button label="Decline" appearance="outline" onClick={() => setOpen(false)} />
      <Button label="Accept" appearance="primary" onClick={() => setOpen(false)} />
    </>
  }
>
  <p>You must accept before continuing.</p>
</Modal>`}
              />
              <pre className="modal-demo__code-block">
                <code className="language-jsx">{`<Modal
  open={open}
  onClose={() => setOpen(false)}
  title="Terms & Conditions"
  closeOnBackdrop={false}
  closeOnEscape={false}
  footer={
    <>
      <Button label="Decline" appearance="outline" onClick={() => setOpen(false)} />
      <Button label="Accept" appearance="primary" onClick={() => setOpen(false)} />
    </>
  }
>
  <p>You must accept before continuing.</p>
</Modal>`}</code>
              </pre>
            </div>
          </div>

          {/* Custom Header */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Custom Header</h2>
            <p className="demo-group__description">
              Pass a <code>header</code> prop to completely replace the default
              title/subtitle/badge header with your own markup.
            </p>
            <Flex direction="row" gap="8" wrap={true}>
              <Button label="Open Custom Header Modal" appearance="outline" onClick={() => setCustomHeaderOpen(true)} />
            </Flex>
            <Modal
              open={customHeaderOpen}
              onClose={() => setCustomHeaderOpen(false)}
              size="default"
              header={
                <Flex direction="row" alignItems="center" justifyContent="space-between" gap="12">
                  <Flex direction="row" alignItems="center" gap="12">
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "var(--uds-radius-8)",
                        background: "var(--uds-surface-brand-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--uds-text-inverse)",
                        fontWeight: 700,
                        fontSize: 16,
                      }}
                    >
                      P
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--uds-text-primary)" }}>
                        Project Settings
                      </div>
                      <div style={{ fontSize: 13, color: "var(--uds-text-tertiary)" }}>
                        Manage configuration and preferences
                      </div>
                    </div>
                  </Flex>
                  <Button
                    appearance="ghost"
                    layout="icon-only"
                    icon="X"
                    iconSize={16}
                    onClick={() => setCustomHeaderOpen(false)}
                    aria-label="Close modal"
                  />
                </Flex>
              }
            >
              <p style={{ margin: 0, color: "var(--uds-text-secondary)" }}>
                This modal uses a fully custom header with an avatar, title,
                description, and a custom close button — all passed via the{" "}
                <code>header</code> prop.
              </p>
            </Modal>
            <div className="modal-demo__code-block-wrapper">
              <CopyButton
                codeString={`<Modal
  open={open}
  onClose={onClose}
  header={
    <Flex direction="row" alignItems="center" justifyContent="space-between">
      <Flex direction="row" alignItems="center" gap="12">
        <Avatar initials="P" size="small" />
        <div>
          <div style={{ fontWeight: 600 }}>Project Settings</div>
          <div style={{ fontSize: 13 }}>Manage configuration</div>
        </div>
      </Flex>
      <Button appearance="ghost" layout="icon-only" icon="X" onClick={onClose} />
    </Flex>
  }
>
  <p>Modal body with custom header.</p>
</Modal>`}
              />
              <pre className="modal-demo__code-block">
                <code className="language-jsx">{`<Modal
  open={open}
  onClose={onClose}
  header={
    <Flex direction="row" alignItems="center" justifyContent="space-between">
      <Flex direction="row" alignItems="center" gap="12">
        <Avatar initials="P" size="small" />
        <div>
          <div style={{ fontWeight: 600 }}>Project Settings</div>
          <div style={{ fontSize: 13 }}>Manage configuration</div>
        </div>
      </Flex>
      <Button appearance="ghost" layout="icon-only" icon="X" onClick={onClose} />
    </Flex>
  }
>
  <p>Modal body with custom header.</p>
</Modal>`}</code>
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
                    <td><code>open</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td><code>true | false</code></td>
                    <td>Controls whether the modal is visible.</td>
                  </tr>
                  <tr>
                    <td><code>onClose</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td><code>() =&gt; void</code></td>
                    <td>Called when close is requested (X button, Escape, backdrop click).</td>
                  </tr>
                  <tr>
                    <td><code>title</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>Header title text.</td>
                  </tr>
                  <tr>
                    <td><code>subtitle</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>Header subtitle text.</td>
                  </tr>
                  <tr>
                    <td><code>badge</code></td>
                    <td><code>ReactNode</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>Badge element rendered next to the title.</td>
                  </tr>
                  <tr>
                    <td><code>header</code></td>
                    <td><code>ReactNode</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>Fully custom header (replaces title/subtitle/badge).</td>
                  </tr>
                  <tr>
                    <td><code>footer</code></td>
                    <td><code>ReactNode</code></td>
                    <td>—</td>
                    <td>—</td>
                    <td>Footer content, typically action buttons.</td>
                  </tr>
                  <tr>
                    <td><code>size</code></td>
                    <td><code>string</code></td>
                    <td><code>"default"</code></td>
                    <td><code>"small" | "default" | "large" | "fullscreen"</code></td>
                    <td>Controls the maximum width of the dialog.</td>
                  </tr>
                  <tr>
                    <td><code>closeOnBackdrop</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td><code>true | false</code></td>
                    <td>Whether clicking the backdrop calls <code>onClose</code>.</td>
                  </tr>
                  <tr>
                    <td><code>closeOnEscape</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td><code>true | false</code></td>
                    <td>Whether pressing Escape calls <code>onClose</code>.</td>
                  </tr>
                  <tr>
                    <td><code>className</code></td>
                    <td><code>string</code></td>
                    <td><code>""</code></td>
                    <td>—</td>
                    <td>Additional CSS classes for the dialog panel.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Divider variant="solid" />

        {/* Keyboard & Accessibility */}
        <div className="page__reference-section">
          <div className="demo-group">
            <h2 className="demo-group__heading">Keyboard & Accessibility</h2>
            <div className="table-responsive">
              <table className="reference-table">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>Escape</code></td>
                    <td>Closes the modal (when <code>closeOnEscape</code> is true)</td>
                  </tr>
                  <tr>
                    <td><code>Tab</code></td>
                    <td>Cycles forward through focusable elements</td>
                  </tr>
                  <tr>
                    <td><code>Shift + Tab</code></td>
                    <td>Cycles backward through focusable elements</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Flex direction="column" gap="8" style={{ marginTop: 8 }}>
              <p className="demo-group__description">
                <strong>Focus management:</strong> When the modal opens, focus moves into
                the dialog panel. When it closes, focus returns to the previously
                focused element.
              </p>
              <p className="demo-group__description">
                <strong>ARIA:</strong> The component uses <code>role="dialog"</code>,{" "}
                <code>aria-modal="true"</code>, <code>aria-labelledby</code> (title),
                and <code>aria-describedby</code> (subtitle).
              </p>
              <p className="demo-group__description">
                <strong>Scroll locking:</strong> Body scroll is disabled while the modal
                is open and restored on close.
              </p>
            </Flex>
          </div>
        </div>

        <Divider variant="solid" />

        {/* Navigation */}
        <div className="page__tabs-content-container">
          <div className="demo-group">
            <div className="page__navigation">
              <Link
                to="/micro-calendar"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Micro Calendar</span>
              </Link>
              <Link
                to="/pagination"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Pagination</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
