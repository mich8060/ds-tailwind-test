import React, { useState, useEffect } from "react";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import Flex from "../ui/Flex/Flex";
import Button from "../ui/Button/Button";
import Toggle from "../ui/Toggle/Toggle";
import { formatLastUpdated } from "../utils/formatDate";
import CopyButton from "../ui/CopyButton/CopyButton";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "./UDSDemo.scss";

const CodeBlock = ({ code, language = "jsx" }) => {
  return (
    <div className="uds-demo__code-wrapper">
      <CopyButton textToCopy={code} />
      <pre className="uds-demo__code-block">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default function UDSDemo() {
  const [demoSidebarExpanded, setDemoSidebarExpanded] = useState(true);
  const [demoListView, setDemoListView] = useState(false);
  const [demoSidePanel, setDemoSidePanel] = useState(false);
  const [demoModal, setDemoModal] = useState(false);
  const [demoFullscreenModal, setDemoFullscreenModal] = useState(false);
  const [demoContentLayout, setDemoContentLayout] = useState("full");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="page uds-demo">
      <header className="page__header">
        <div className="page__header-container">
          <Breadcrumb />
          <div className="page__header-info">
            <div className="page__header-content">
              <h1 className="page__header-title">Application</h1>
              <p className="page__header-description">
                A comprehensive application wrapper (UDS) that provides collapsible sidebar navigation,
                content areas with layout options, ListView and SidePanel overlays, Modal and Fullscreen
                Modal dialogs, and full mobile responsiveness.
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
                  <p className="page__metadata-value">2.0.0</p>
                  <span className="page__version-badge">BETA</span>
                </Flex>
              </div>
              <div className="page__metadata-row">
                <p className="page__metadata-label">Prototype</p>
                <a
                  href="https://height-blanch-43641663.figma.site"
                  className="page__metadata-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Figma Prototype ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page__content uds-demo__main">
        {/* Installation */}
        <section className="uds-demo__section">
          <h2 className="uds-demo__section-title">Installation</h2>
          <p className="uds-demo__text">
            Import the UDS component and required styles:
          </p>
          <CodeBlock
            code={`// Import styles (required)
import '@mich8060/chg-design-system/tokens.css';
import '@mich8060/chg-design-system/styles.css';

// Import components
import { UDS, useUDS } from '@mich8060/chg-design-system';`}
            language="javascript"
          />
        </section>

        <Divider variant="solid" />

        {/* Architecture Overview */}
        <section className="uds-demo__section">
          <h2 className="uds-demo__section-title">Architecture</h2>
          <p className="uds-demo__text">
            The UDS application wrapper is composed of distinct areas, each serving
            a specific purpose. All areas are managed through a central context provider.
          </p>

          <div className="uds-demo__architecture-diagram">
            <div className="uds-demo__arch-shell">
              <div className="uds-demo__arch-sidebar">
                <div className="uds-demo__arch-label">Sidebar</div>
                <div className="uds-demo__arch-sub-items">
                  <span>Brand</span>
                  <span>Search</span>
                  <span>Nav Items</span>
                  <span>Account</span>
                </div>
              </div>
              <div className="uds-demo__arch-content-area">
                <div className="uds-demo__arch-content-inner">
                  <div className="uds-demo__arch-listview">
                    <div className="uds-demo__arch-label">ListView</div>
                  </div>
                  <div className="uds-demo__arch-main">
                    <div className="uds-demo__arch-page-header">
                      <div className="uds-demo__arch-label">PageHeader</div>
                    </div>
                    <div className="uds-demo__arch-content-layout">
                      <div className="uds-demo__arch-label">ContentLayout</div>
                      <div className="uds-demo__arch-grid">
                        <span>Col 1</span>
                        <span>Col 2</span>
                      </div>
                    </div>
                  </div>
                  <div className="uds-demo__arch-sidepanel">
                    <div className="uds-demo__arch-label">SidePanel</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="uds-demo__arch-overlays">
              <div className="uds-demo__arch-overlay-item">
                <div className="uds-demo__arch-label">Modal</div>
              </div>
              <div className="uds-demo__arch-overlay-item">
                <div className="uds-demo__arch-label">Fullscreen Modal</div>
              </div>
            </div>
          </div>
        </section>

        <Divider variant="solid" />

        {/* Interactive Demo */}
        <section className="uds-demo__interactive">
            <div className="uds-demo__interactive-container">
          <h2 className="uds-demo__section-title">Interactive Demo</h2>
          <p className="uds-demo__text">
            Toggle different areas of the UDS wrapper to see how the layout adapts.
            This mirrors the floating demo controls from the Figma prototype.
          </p>
          </div>

          {/* Demo Controls */}
          <div className="uds-demo__controls">
            <Flex direction="row" gap="24" wrap="wrap" alignItems="center">
              <Flex direction="row" gap="8" alignItems="center">
                <span className="uds-demo__control-label">Sidebar:</span>
                <Toggle
                  checked={demoSidebarExpanded}
                  onChange={setDemoSidebarExpanded}
                />
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <span className="uds-demo__control-label">ListView:</span>
                <Toggle
                  checked={demoListView}
                  onChange={setDemoListView}
                />
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <span className="uds-demo__control-label">SidePanel:</span>
                <Toggle
                  checked={demoSidePanel}
                  onChange={setDemoSidePanel}
                />
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <span className="uds-demo__control-label">Modal:</span>
                <Toggle
                  checked={demoModal}
                  onChange={setDemoModal}
                />
              </Flex>
              <Flex direction="row" gap="8" alignItems="center">
                <span className="uds-demo__control-label">Fullscreen:</span>
                <Toggle
                  checked={demoFullscreenModal}
                  onChange={setDemoFullscreenModal}
                />
              </Flex>
            </Flex>
            <Flex direction="row" gap="8" alignItems="center" style={{ marginTop: "12px" }}>
              <span className="uds-demo__control-label">Content Layout:</span>
              <Button
                appearance={demoContentLayout === "full" ? "primary" : "outline"}
                size="small"
                label="Full"
                onClick={() => setDemoContentLayout("full")}
              />
              <Button
                appearance={demoContentLayout === "focus-left" ? "primary" : "outline"}
                size="small"
                label="Focus Left"
                onClick={() => setDemoContentLayout("focus-left")}
              />
              <Button
                appearance={demoContentLayout === "focus-right" ? "primary" : "outline"}
                size="small"
                label="Focus Right"
                onClick={() => setDemoContentLayout("focus-right")}
              />
            </Flex>
          </div>

          {/* Mini Preview */}
          <div className="uds-demo__preview">
            <div className={`uds-demo__mini-shell ${!demoSidebarExpanded ? "uds-demo__mini-shell--collapsed" : ""}`}>
              {/* Sidebar */}
              <div className={`uds-demo__mini-sidebar ${!demoSidebarExpanded ? "uds-demo__mini-sidebar--collapsed" : ""}`}>
                <div className="uds-demo__mini-sidebar-header">
                  <div className="uds-demo__mini-brand-icon">DS</div>
                  {demoSidebarExpanded && <span className="uds-demo__mini-brand-title">Design System</span>}
                </div>
                {demoSidebarExpanded && (
                  <div className="uds-demo__mini-sidebar-search">
                    <div className="uds-demo__mini-search-box">🔍 Search...</div>
                  </div>
                )}
                <div className="uds-demo__mini-sidebar-nav">
                  {["Dashboard", "Users", "Projects", "Settings"].map((item, i) => (
                    <div key={item} className={`uds-demo__mini-nav-item ${i === 0 ? "uds-demo__mini-nav-item--active" : ""}`}>
                      <span className="uds-demo__mini-nav-icon">◻</span>
                      {demoSidebarExpanded && <span>{item}</span>}
                    </div>
                  ))}
                </div>
                <div className="uds-demo__mini-sidebar-account">
                  <div className="uds-demo__mini-avatar">JD</div>
                  {demoSidebarExpanded && (
                    <div className="uds-demo__mini-user-info">
                      <span className="uds-demo__mini-user-name">Jane Doe</span>
                      <span className="uds-demo__mini-user-email">jane@example.com</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Container */}
              <div className="uds-demo__mini-content-container">
                {/* ListView */}
                {demoListView && (
                  <div className="uds-demo__mini-listview">
                    <div className="uds-demo__mini-panel-header">
                      <strong>ListView</strong>
                      <span className="uds-demo__mini-count">24</span>
                    </div>
                    <div className="uds-demo__mini-panel-body">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="uds-demo__mini-list-item">
                          <div className="uds-demo__mini-list-item-line" />
                          <div className="uds-demo__mini-list-item-line uds-demo__mini-list-item-line--short" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Main Content */}
                <div className="uds-demo__mini-main-wrapper">
                  <div className="uds-demo__mini-content-area">
                    {/* Page Header */}
                    <div className="uds-demo__mini-page-header">
                      <div className="uds-demo__mini-breadcrumb">🏠 › Dashboard › Projects</div>
                      <div className="uds-demo__mini-page-title-row">
                        <div>
                          <strong>Project Dashboard</strong>
                          <span className="uds-demo__mini-badge">Active</span>
                        </div>
                        <div className="uds-demo__mini-page-actions">
                          <div className="uds-demo__mini-btn">Export</div>
                          <div className="uds-demo__mini-btn uds-demo__mini-btn--primary">Add New</div>
                        </div>
                      </div>
                    </div>

                    {/* Content Layout */}
                    <div className={`uds-demo__mini-content-layout uds-demo__mini-content-layout--${demoContentLayout}`}>
                      <div className="uds-demo__mini-col">
                        <div className="uds-demo__mini-col-label">
                          {demoContentLayout === "full" ? "Full Width Content" : "Primary Column"}
                        </div>
                      </div>
                      {demoContentLayout !== "full" && (
                        <div className="uds-demo__mini-col">
                          <div className="uds-demo__mini-col-label">Secondary Column</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* SidePanel */}
                {demoSidePanel && (
                  <div className="uds-demo__mini-sidepanel">
                    <div className="uds-demo__mini-panel-header">
                      <strong>Detail Panel</strong>
                      <span className="uds-demo__mini-close">✕</span>
                    </div>
                    <div className="uds-demo__mini-panel-body">
                      <div className="uds-demo__mini-detail-row" />
                      <div className="uds-demo__mini-detail-row" />
                      <div className="uds-demo__mini-detail-row uds-demo__mini-detail-row--short" />
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Overlay */}
              {demoModal && (
                <div className="uds-demo__mini-modal-overlay">
                  <div className="uds-demo__mini-modal">
                    <div className="uds-demo__mini-modal-header">
                      <strong>Modal Dialog</strong>
                      <span className="uds-demo__mini-close">✕</span>
                    </div>
                    <div className="uds-demo__mini-modal-body">
                      <div className="uds-demo__mini-detail-row" />
                      <div className="uds-demo__mini-detail-row" />
                    </div>
                    <div className="uds-demo__mini-modal-footer">
                      <div className="uds-demo__mini-btn">Cancel</div>
                      <div className="uds-demo__mini-btn uds-demo__mini-btn--primary">Confirm</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Fullscreen Modal */}
              {demoFullscreenModal && (
                <div className="uds-demo__mini-fullscreen-modal">
                  <div className="uds-demo__mini-fullscreen-toolbar">
                    <span className="uds-demo__mini-close">✕</span>
                  </div>
                  <div className="uds-demo__mini-fullscreen-content">
                    Fullscreen Modal Content
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <Divider variant="solid" />

        {/* Basic Usage */}
        <section className="uds-demo__section">
          <h2 className="uds-demo__section-title">Basic Usage</h2>
          <p className="uds-demo__text">
            The UDS provides a comprehensive layout with sidebar navigation,
            page headers, content layouts, and overlay panels.
          </p>
          <CodeBlock
            code={`import { UDS } from '@mich8060/chg-design-system';

function App() {
  return (
    <UDS sidebarExpanded contentLayout="full">
      <UDS.Sidebar
        brandTitle="My App"
        searchable
        navItems={[
          { icon: "House", label: "Dashboard", active: true },
          { icon: "Users", label: "Users" },
          { icon: "Gear", label: "Settings" },
        ]}
        userAvatar="JD"
        userName="Jane Doe"
        userEmail="jane@example.com"
        onNavItemClick={(item) => navigate(item.path)}
      />

      <UDS.ContentArea>
        <UDS.PageHeader
          breadcrumbs={["Dashboard", "Projects"]}
          title="Project Dashboard"
          badge="Active"
          subtitle="Manage your active projects"
          backButton
          onBack={() => navigate(-1)}
          actions={
            <>
              <Button label="Export" appearance="outline" />
              <Button label="Add New" appearance="primary" />
            </>
          }
        />

        <UDS.ContentLayout showToolbar>
          <div>Primary content column</div>
          <div>Secondary content column</div>
        </UDS.ContentLayout>
      </UDS.ContentArea>

      <UDS.ListView
        title="All Items"
        count={24}
        searchable
        backButton
      >
        {items.map(item => (
          <ListItem key={item.id} {...item} />
        ))}
      </UDS.ListView>

      <UDS.SidePanel
        title="Item Details"
        subtitle="View and edit item information"
        badge="Draft"
      >
        <DetailForm />
      </UDS.SidePanel>

      <UDS.Modal
        title="Confirm Action"
        subtitle="This action cannot be undone"
        footer={
          <>
            <Button label="Cancel" appearance="outline" />
            <Button label="Confirm" appearance="primary" />
          </>
        }
      >
        <p>Are you sure you want to proceed?</p>
      </UDS.Modal>

      <UDS.FullscreenModal>
        <FullscreenEditor />
      </UDS.FullscreenModal>

      <UDS.DemoControls />
    </UDS>
  );
}`}
          />
        </section>

        <Divider variant="solid" />

        {/* Subcomponents */}
        <section className="uds-demo__section">
          <h2 className="uds-demo__section-title">Subcomponents</h2>

          <div className="uds-demo__component-grid">
            <div className="uds-demo__component-card">
              <h3 className="uds-demo__component-name">UDS.Sidebar</h3>
              <p className="uds-demo__component-desc">
                Collapsible navigation sidebar with brand, search, nav items, and user account sections.
                Includes built-in mobile drawer support.
              </p>
              <CodeBlock
                code={`<UDS.Sidebar
  brandTitle="My App"
  brandIcon={<Logo />}
  searchable
  searchPlaceholder="Search navigation..."
  navItems={[
    { icon: "House", label: "Home", active: true },
    { icon: "Users", label: "Users", badge: "12" },
    { icon: "Gear", label: "Settings" },
  ]}
  userAvatar="JD"
  userName="Jane Doe"
  userEmail="jane@example.com"
  onNavItemClick={(item, index) => handleNav(item)}
  footer={<VersionInfo />}
/>`}
              />
            </div>

            <div className="uds-demo__component-card">
              <h3 className="uds-demo__component-name">UDS.ContentArea</h3>
              <p className="uds-demo__component-desc">
                Main content container that adapts its max-width based on sidebar state.
                Wraps PageHeader and ContentLayout.
              </p>
              <CodeBlock
                code={`<UDS.ContentArea>
  <UDS.PageHeader title="Dashboard" />
  <UDS.ContentLayout>
    <ContentCards />
  </UDS.ContentLayout>
</UDS.ContentArea>`}
              />
            </div>

            <div className="uds-demo__component-card">
              <h3 className="uds-demo__component-name">UDS.PageHeader</h3>
              <p className="uds-demo__component-desc">
                Page header with breadcrumb trail, title, badge, subtitle, back button, and action buttons.
              </p>
              <CodeBlock
                code={`<UDS.PageHeader
  breadcrumbs={["Home", "Projects", "Current"]}
  title="Project Dashboard"
  badge="Active"
  subtitle="Manage your projects"
  backButton
  onBack={() => navigate(-1)}
  actions={
    <>
      <Button label="Export" appearance="outline" />
      <Button label="Create" appearance="primary" />
    </>
  }
/>`}
              />
            </div>

            <div className="uds-demo__component-card">
              <h3 className="uds-demo__component-name">UDS.ContentLayout</h3>
              <p className="uds-demo__component-desc">
                Content layout with a toolbar for switching between Full, Focus Left, and Focus Right
                arrangements using a 12-column grid.
              </p>
              <CodeBlock
                code={`<UDS.ContentLayout showToolbar>
  <div>Primary column (8/12 or 4/12)</div>
  <div>Secondary column (4/12 or 8/12)</div>
</UDS.ContentLayout>`}
              />
            </div>

            <div className="uds-demo__component-card">
              <h3 className="uds-demo__component-name">UDS.ListView</h3>
              <p className="uds-demo__component-desc">
                Left-side sliding list panel with header, search, filter actions,
                scrollable content, and optional footer.
              </p>
              <CodeBlock
                code={`<UDS.ListView
  title="All Users"
  count={156}
  subtitle="Active members"
  searchable
  backButton
  onBack={() => closeListView()}
  footer={<Pagination />}
>
  {users.map(user => (
    <UserListItem key={user.id} {...user} />
  ))}
</UDS.ListView>`}
              />
            </div>

            <div className="uds-demo__component-card">
              <h3 className="uds-demo__component-name">UDS.SidePanel</h3>
              <p className="uds-demo__component-desc">
                Right-side sliding detail panel with header (title, badge, close), scrollable
                content, and optional footer.
              </p>
              <CodeBlock
                code={`<UDS.SidePanel
  title="User Details"
  subtitle="View and edit information"
  badge="Active"
  width={480}
  footer={
    <Flex gap="8">
      <Button label="Cancel" appearance="outline" />
      <Button label="Save" appearance="primary" />
    </Flex>
  }
>
  <UserDetailForm userId={selectedId} />
</UDS.SidePanel>`}
              />
            </div>

            <div className="uds-demo__component-card">
              <h3 className="uds-demo__component-name">UDS.Modal</h3>
              <p className="uds-demo__component-desc">
                Centered dialog overlay with header, scrollable content, footer, and
                Escape key / backdrop click dismissal.
              </p>
              <CodeBlock
                code={`<UDS.Modal
  title="Confirm Deletion"
  subtitle="This action cannot be undone"
  badge="Warning"
  maxWidth={600}
  closeOnBackdrop
  footer={
    <Flex gap="8" justifyContent="flex-end">
      <Button label="Cancel" appearance="outline" />
      <Button label="Delete" appearance="danger" />
    </Flex>
  }
>
  <p>Are you sure you want to delete this item?</p>
</UDS.Modal>`}
              />
            </div>

            <div className="uds-demo__component-card">
              <h3 className="uds-demo__component-name">UDS.FullscreenModal</h3>
              <p className="uds-demo__component-desc">
                Full-page overlay with close button, scrollable content area, and optional
                footer. Dismissible with Escape key.
              </p>
              <CodeBlock
                code={`<UDS.FullscreenModal
  footer={
    <Flex gap="8" justifyContent="flex-end">
      <Button label="Discard" appearance="outline" />
      <Button label="Save" appearance="primary" />
    </Flex>
  }
>
  <FullscreenEditor document={doc} />
</UDS.FullscreenModal>`}
              />
            </div>

            <div className="uds-demo__component-card">
              <h3 className="uds-demo__component-name">UDS.DemoControls</h3>
              <p className="uds-demo__component-desc">
                Floating demo toolbar that toggles all UDS areas. Useful for prototyping
                and demonstrating the framework capabilities.
              </p>
              <CodeBlock
                code={`<UDS.DemoControls
  showSidebar
  showListView
  showSidePanel
  showModal
  showFullscreenModal
/>`}
              />
            </div>
          </div>
        </section>

        <Divider variant="solid" />

        {/* Props */}
        <section className="uds-demo__section">
          <h2 className="uds-demo__section-title">Props</h2>

          <h3 className="uds-demo__subsection-title">UDS (Root)</h3>
          <div className="uds-demo__props-table">
            <table className="uds-demo__table">
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
                  <td><code>sidebarExpanded</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>Initial sidebar expanded state</td>
                </tr>
                <tr>
                  <td><code>navPosition</code></td>
                  <td><code>'left' | 'right'</code></td>
                  <td><code>'left'</code></td>
                  <td>Position of the sidebar</td>
                </tr>
                <tr>
                  <td><code>contentLayout</code></td>
                  <td><code>'full' | 'focus-left' | 'focus-right'</code></td>
                  <td><code>'full'</code></td>
                  <td>Initial content layout arrangement</td>
                </tr>
                <tr>
                  <td><code>sidebarWidth</code></td>
                  <td><code>number</code></td>
                  <td><code>280</code></td>
                  <td>Width of expanded sidebar (px)</td>
                </tr>
                <tr>
                  <td><code>sidebarCollapsedWidth</code></td>
                  <td><code>number</code></td>
                  <td><code>80</code></td>
                  <td>Width of collapsed sidebar (px)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="uds-demo__subsection-title">UDS.Sidebar</h3>
          <div className="uds-demo__props-table">
            <table className="uds-demo__table">
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
                  <td><code>brandTitle</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Application brand title</td>
                </tr>
                <tr>
                  <td><code>brandIcon</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Custom brand icon element</td>
                </tr>
                <tr>
                  <td><code>brand</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Full custom brand element (overrides brandTitle/brandIcon)</td>
                </tr>
                <tr>
                  <td><code>searchable</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Show search input in sidebar</td>
                </tr>
                <tr>
                  <td><code>navItems</code></td>
                  <td><code>Array</code></td>
                  <td><code>[]</code></td>
                  <td>Navigation items: <code>{`{ icon, label, active, badge, id }`}</code></td>
                </tr>
                <tr>
                  <td><code>userAvatar</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>User initials for avatar circle</td>
                </tr>
                <tr>
                  <td><code>userName</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>User display name</td>
                </tr>
                <tr>
                  <td><code>userEmail</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>User email address</td>
                </tr>
                <tr>
                  <td><code>onNavItemClick</code></td>
                  <td><code>function</code></td>
                  <td>—</td>
                  <td>Callback when a nav item is clicked: <code>(item, index) =&gt; void</code></td>
                </tr>
                <tr>
                  <td><code>footer</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Footer slot below account section</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="uds-demo__subsection-title">UDS.PageHeader</h3>
          <div className="uds-demo__props-table">
            <table className="uds-demo__table">
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
                  <td><code>breadcrumbs</code></td>
                  <td><code>string[]</code></td>
                  <td><code>[]</code></td>
                  <td>Breadcrumb trail items</td>
                </tr>
                <tr>
                  <td><code>title</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Page title</td>
                </tr>
                <tr>
                  <td><code>subtitle</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Page subtitle / description</td>
                </tr>
                <tr>
                  <td><code>badge</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Status badge next to title</td>
                </tr>
                <tr>
                  <td><code>backButton</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Show back navigation button</td>
                </tr>
                <tr>
                  <td><code>onBack</code></td>
                  <td><code>function</code></td>
                  <td>—</td>
                  <td>Callback for back button click</td>
                </tr>
                <tr>
                  <td><code>actions</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Action buttons slot (right-aligned)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="uds-demo__subsection-title">UDS.ListView</h3>
          <div className="uds-demo__props-table">
            <table className="uds-demo__table">
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
                  <td><code>title</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Panel title</td>
                </tr>
                <tr>
                  <td><code>count</code></td>
                  <td><code>number</code></td>
                  <td>—</td>
                  <td>Item count badge</td>
                </tr>
                <tr>
                  <td><code>subtitle</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Panel subtitle</td>
                </tr>
                <tr>
                  <td><code>searchable</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Show search in header actions</td>
                </tr>
                <tr>
                  <td><code>backButton</code></td>
                  <td><code>boolean</code></td>
                  <td><code>false</code></td>
                  <td>Show back button</td>
                </tr>
                <tr>
                  <td><code>width</code></td>
                  <td><code>number</code></td>
                  <td><code>375</code></td>
                  <td>Panel width (px)</td>
                </tr>
                <tr>
                  <td><code>header</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Custom header content (overrides default)</td>
                </tr>
                <tr>
                  <td><code>footer</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Footer slot</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="uds-demo__subsection-title">UDS.SidePanel</h3>
          <div className="uds-demo__props-table">
            <table className="uds-demo__table">
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
                  <td><code>title</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Panel title</td>
                </tr>
                <tr>
                  <td><code>subtitle</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Panel subtitle</td>
                </tr>
                <tr>
                  <td><code>badge</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Status badge</td>
                </tr>
                <tr>
                  <td><code>width</code></td>
                  <td><code>number</code></td>
                  <td><code>480</code></td>
                  <td>Panel width (px)</td>
                </tr>
                <tr>
                  <td><code>header</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Custom header (overrides default)</td>
                </tr>
                <tr>
                  <td><code>footer</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Footer slot</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="uds-demo__subsection-title">UDS.Modal</h3>
          <div className="uds-demo__props-table">
            <table className="uds-demo__table">
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
                  <td><code>title</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Modal title</td>
                </tr>
                <tr>
                  <td><code>subtitle</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Modal subtitle</td>
                </tr>
                <tr>
                  <td><code>badge</code></td>
                  <td><code>string</code></td>
                  <td>—</td>
                  <td>Status badge</td>
                </tr>
                <tr>
                  <td><code>maxWidth</code></td>
                  <td><code>number</code></td>
                  <td><code>800</code></td>
                  <td>Maximum width (px)</td>
                </tr>
                <tr>
                  <td><code>closeOnBackdrop</code></td>
                  <td><code>boolean</code></td>
                  <td><code>true</code></td>
                  <td>Close when clicking backdrop</td>
                </tr>
                <tr>
                  <td><code>header</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Custom header (overrides default)</td>
                </tr>
                <tr>
                  <td><code>footer</code></td>
                  <td><code>ReactNode</code></td>
                  <td>—</td>
                  <td>Footer slot (e.g. action buttons)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Divider variant="solid" />

        {/* Context Hook */}
        <section className="uds-demo__section">
          <h2 className="uds-demo__section-title">useUDS Hook</h2>
          <p className="uds-demo__text">
            Control all UDS areas programmatically from any child component:
          </p>
          <CodeBlock
            code={`import { useUDS } from '@mich8060/chg-design-system';

function MyComponent() {
  const {
    // Sidebar
    sidebarExpanded,
    toggleSidebar,

    // ListView
    listViewOpen,
    openListView,
    closeListView,
    toggleListView,

    // SidePanel
    sidePanelOpen,
    openSidePanel,
    closeSidePanel,
    toggleSidePanel,

    // Modal
    modalOpen,
    openModal,
    closeModal,
    toggleModal,

    // Fullscreen Modal
    fullscreenModalOpen,
    openFullscreenModal,
    closeFullscreenModal,
    toggleFullscreenModal,

    // Content Layout
    contentLayout,       // 'full' | 'focus-left' | 'focus-right'
    setContentLayout,

    // Mobile
    mobileMenuOpen,
    setMobileMenuOpen,
  } = useUDS();

  return (
    <div>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <button onClick={openListView}>Open List</button>
      <button onClick={openSidePanel}>Open Panel</button>
      <button onClick={openModal}>Open Modal</button>
      <button onClick={() => setContentLayout('focus-left')}>Focus Left</button>
    </div>
  );
}`}
          />

          <h3 className="uds-demo__subsection-title">Available Methods</h3>
          <div className="uds-demo__props-table">
            <table className="uds-demo__table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Arguments</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>toggleSidebar()</code></td>
                  <td>—</td>
                  <td>Toggle sidebar expanded/collapsed</td>
                </tr>
                <tr>
                  <td><code>openListView()</code></td>
                  <td>—</td>
                  <td>Open the ListView panel</td>
                </tr>
                <tr>
                  <td><code>closeListView()</code></td>
                  <td>—</td>
                  <td>Close the ListView panel</td>
                </tr>
                <tr>
                  <td><code>openSidePanel()</code></td>
                  <td>—</td>
                  <td>Open the SidePanel</td>
                </tr>
                <tr>
                  <td><code>closeSidePanel()</code></td>
                  <td>—</td>
                  <td>Close the SidePanel</td>
                </tr>
                <tr>
                  <td><code>openModal()</code></td>
                  <td>—</td>
                  <td>Open the Modal dialog</td>
                </tr>
                <tr>
                  <td><code>closeModal()</code></td>
                  <td>—</td>
                  <td>Close the Modal dialog</td>
                </tr>
                <tr>
                  <td><code>openFullscreenModal()</code></td>
                  <td>—</td>
                  <td>Open the Fullscreen Modal</td>
                </tr>
                <tr>
                  <td><code>closeFullscreenModal()</code></td>
                  <td>—</td>
                  <td>Close the Fullscreen Modal</td>
                </tr>
                <tr>
                  <td><code>setContentLayout(layout)</code></td>
                  <td><code>'full' | 'focus-left' | 'focus-right'</code></td>
                  <td>Change content layout arrangement</td>
                </tr>
                <tr>
                  <td><code>closeAllPanels()</code></td>
                  <td>—</td>
                  <td>Close all open panels (ListView, SidePanel, legacy)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Divider variant="solid" />

        {/* Complete Example */}
        <section className="uds-demo__section">
          <h2 className="uds-demo__section-title">Complete Example</h2>
          <p className="uds-demo__text">
            A full application setup with the new UDS framework:
          </p>
          <CodeBlock
            code={`import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UDS, useUDS, Button } from '@mich8060/chg-design-system';
import '@mich8060/chg-design-system/tokens.css';
import '@mich8060/chg-design-system/styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <UDS sidebarExpanded contentLayout="full">
        {/* Sidebar with full navigation */}
        <UDS.Sidebar
          brandTitle="MyApp"
          searchable
          navItems={[
            { icon: "House", label: "Dashboard", active: true },
            { icon: "Users", label: "Users" },
            { icon: "FolderSimple", label: "Projects", badge: "5" },
            { icon: "ChartBar", label: "Analytics" },
            { icon: "Gear", label: "Settings" },
          ]}
          userAvatar="JD"
          userName="Jane Doe"
          userEmail="jane@company.com"
        />

        {/* Main content area */}
        <UDS.ContentArea>
          <UDS.PageHeader
            breadcrumbs={["Dashboard"]}
            title="Welcome Back"
            subtitle="Here's what's happening with your projects"
            actions={
              <Button label="New Project" appearance="primary" icon="Plus" />
            }
          />

          <UDS.ContentLayout showToolbar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </UDS.ContentLayout>
        </UDS.ContentArea>

        {/* ListView for item lists */}
        <UDS.ListView
          title="Recent Activity"
          count={42}
          searchable
          backButton
        >
          <ActivityList />
        </UDS.ListView>

        {/* SidePanel for details */}
        <UDS.SidePanel
          title="Activity Details"
          badge="New"
          footer={
            <Button label="View Full Report" appearance="primary" fullWidth />
          }
        >
          <ActivityDetail />
        </UDS.SidePanel>

        {/* Modal for confirmations */}
        <UDS.Modal
          title="Create Project"
          subtitle="Fill in the details below"
          footer={
            <>
              <Button label="Cancel" appearance="outline" />
              <Button label="Create" appearance="primary" />
            </>
          }
        >
          <ProjectForm />
        </UDS.Modal>

        {/* Floating demo controls */}
        <UDS.DemoControls />
      </UDS>
    </BrowserRouter>
  );
}`}
          />
        </section>

        <Divider variant="solid" />

        {/* Best Practices */}
        <section className="uds-demo__section">
          <h2 className="uds-demo__section-title">Best Practices</h2>

          <div className="uds-demo__practices">
            <div className="uds-demo__practice">
              <h4>✅ Use compound components</h4>
              <p>
                Compose your layout using <code>UDS.Sidebar</code>, <code>UDS.ContentArea</code>,
                <code>UDS.PageHeader</code>, and <code>UDS.ContentLayout</code> for a consistent structure.
              </p>
            </div>

            <div className="uds-demo__practice">
              <h4>✅ Leverage the context hook</h4>
              <p>
                Use <code>useUDS()</code> to programmatically control panels from any child component.
                For example, open a SidePanel when clicking a list item.
              </p>
            </div>

            <div className="uds-demo__practice">
              <h4>✅ Design for mobile first</h4>
              <p>
                The sidebar automatically becomes a mobile drawer on small screens. Use
                <code>UDS.MobileMenuButton</code> in your header to let users access it.
              </p>
            </div>

            <div className="uds-demo__practice">
              <h4>✅ Use content layout for data density</h4>
              <p>
                Switch between Full, Focus Left, and Focus Right layouts based on the content type.
                The <code>UDS.ContentLayout</code> toolbar lets users choose their preferred arrangement.
              </p>
            </div>

            <div className="uds-demo__practice">
              <h4>✅ Persist user preferences</h4>
              <p>
                Save sidebar collapsed state and content layout preference to localStorage:
              </p>
              <CodeBlock
                code={`const { sidebarExpanded, contentLayout } = useUDS();

useEffect(() => {
  localStorage.setItem('uds-sidebar', sidebarExpanded);
  localStorage.setItem('uds-layout', contentLayout);
}, [sidebarExpanded, contentLayout]);`}
              />
            </div>
          </div>
        </section>

      </main>
    </section>
  );
}
