import React, { useEffect } from "react";
import { UDSProvider, useUDS } from "./UDSContext";
import Icon from "../Icon/Icon";
import Menu from "../Menu/Menu";
import "./UDS.scss";

/**
 * UDS - Application Wrapper Component
 *
 * A comprehensive application shell providing:
 * - Collapsible sidebar navigation
 * - Main content area with layout options (full, focus-left, focus-right)
 * - ListView panel (slides from left within content)
 * - SidePanel (slides from right within content)
 * - Modal dialog overlay
 * - Fullscreen modal overlay
 * - Mobile responsive navigation
 *
 * Reference: https://height-blanch-43641663.figma.site
 *
 * @example
 * <UDS>
 *   <UDS.Sidebar
 *     brand={<Logo />}
 *     brandTitle="My App"
 *     navItems={[
 *       { icon: "House", label: "Home", active: true },
 *       { icon: "Users", label: "Users" },
 *       { icon: "Gear", label: "Settings" },
 *     ]}
 *     userAvatar="JD"
 *     searchable
 *   />
 *   <UDS.ContentArea>
 *     <UDS.PageHeader
 *       breadcrumbs={["Dashboard", "Projects", "Current"]}
 *       title="Project Dashboard"
 *       badge="Active"
 *       backButton
 *       actions={<><Button>Export</Button><Button>Add</Button></>}
 *     />
 *     <UDS.Main>
 *       <YourContent />
 *     </UDS.Main>
 *   </UDS.ContentArea>
 *   <UDS.ListView>
 *     <ListContent />
 *   </UDS.ListView>
 *   <UDS.SidePanel>
 *     <PanelContent />
 *   </UDS.SidePanel>
 *   <UDS.Modal>
 *     <ModalContent />
 *   </UDS.Modal>
 *   <UDS.FullscreenModal>
 *     <FullscreenContent />
 *   </UDS.FullscreenModal>
 * </UDS>
 */
function UDS({
  children,
  className = "",
  sidebarExpanded = true,
  navPosition = "left",
  contentLayout = "full",
  sidebarWidth = 280,
  sidebarCollapsedWidth = 80,
  ...props
}) {
  return (
    <UDSProvider
      defaultSidebarExpanded={sidebarExpanded}
      defaultNavPosition={navPosition}
      defaultContentLayout={contentLayout}
    >
      <UDSInner
        className={className}
        sidebarWidth={sidebarWidth}
        sidebarCollapsedWidth={sidebarCollapsedWidth}
        {...props}
      >
        {children}
      </UDSInner>
    </UDSProvider>
  );
}

function UDSInner({
  children,
  className,
  sidebarWidth,
  sidebarCollapsedWidth,
  ...props
}) {
  const {
    sidebarExpanded,
    navPosition,
    navVisible,
    listViewOpen,
    sidePanelOpen,
    modalOpen,
    fullscreenModalOpen,
    mobileMenuOpen,
  } = useUDS();

  // Separate children by type
  const sidebar = [];
  const contentArea = [];
  const header = [];
  const nav = [];
  const main = [];
  const listView = [];
  const sidePanel = [];
  const modal = [];
  const fullscreenModal = [];
  const panelComponents = [];
  const footer = [];
  const other = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;

    if (child.type === UDS.Sidebar) {
      sidebar.push(child);
    } else if (child.type === UDS.ContentArea) {
      contentArea.push(child);
    } else if (child.type === UDS.Header) {
      header.push(child);
    } else if (child.type === UDS.Nav) {
      nav.push(child);
    } else if (child.type === UDS.Main) {
      main.push(child);
    } else if (child.type === UDS.ListView) {
      listView.push(child);
    } else if (child.type === UDS.SidePanel) {
      sidePanel.push(child);
    } else if (child.type === UDS.Modal) {
      modal.push(child);
    } else if (child.type === UDS.FullscreenModal) {
      fullscreenModal.push(child);
    } else if (child.type === UDS.Panel) {
      panelComponents.push(child);
    } else if (child.type === UDS.Footer) {
      footer.push(child);
    } else {
      other.push(child);
    }
  });

  const shellClasses = [
    "uds",
    !sidebarExpanded && "uds--sidebar-collapsed",
    !navVisible && "uds--nav-hidden",
    navPosition === "right" && "uds--nav-right",
    listViewOpen && "uds--listview-open",
    sidePanelOpen && "uds--sidepanel-open",
    modalOpen && "uds--modal-open",
    fullscreenModalOpen && "uds--fullscreen-modal-open",
    mobileMenuOpen && "uds--mobile-menu-open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const cssVars = {
    "--uds-sidebar-width": `${sidebarWidth}px`,
    "--uds-sidebar-collapsed-width": `${sidebarCollapsedWidth}px`,
  };

  return (
    <div className={shellClasses} style={cssVars} {...props}>
      {/* Legacy header support */}
      {header}

      <div className="uds__body">
        {/* Sidebar */}
        {navPosition === "left" && sidebar}
        {navPosition === "left" && nav}

        {/* Content area */}
        <div className="uds__content-container">
          {/* ListView panel */}
          {listView}

          {/* Main content wrapper */}
          <div className="uds__main-wrapper">
            {contentArea.length > 0 ? contentArea : (
              <>
                {main}
                {other}
              </>
            )}
          </div>

          {/* SidePanel */}
          {sidePanel}

          {/* Legacy panels */}
          {panelComponents.filter((p) => p.props.position === "left")}
          {panelComponents.filter((p) => p.props.position === "right")}
          {panelComponents.filter((p) => p.props.position === "bottom")}
        </div>

        {navPosition === "right" && sidebar}
        {navPosition === "right" && nav}
      </div>

      {/* Footer */}
      {footer}

      {/* Modal overlay */}
      {modal}

      {/* Fullscreen modal overlay */}
      {fullscreenModal}

      {/* Mobile overlay */}
      {mobileMenuOpen && <MobileOverlay />}
    </div>
  );
}

// ============================================
// UDS.Sidebar - Renders the Menu component as the sidebar
// ============================================
UDS.Sidebar = function Sidebar({
  children,
  className = "",
  activeBrand,
  activeMode,
  onBrandChange,
  onModeChange,
  ...props
}) {
  const {
    sidebarExpanded,
    setSidebarExpanded,
  } = useUDS();

  return (
    <Menu
      activeBrand={activeBrand}
      activeMode={activeMode}
      onBrandChange={onBrandChange}
      onModeChange={onModeChange}
      expanded={sidebarExpanded}
      onExpandedChange={setSidebarExpanded}
      className={className}
      {...props}
    />
  );
};

// ============================================
// UDS.ContentArea - Main content container
// ============================================
UDS.ContentArea = function ContentArea({
  children,
  className = "",
  ...props
}) {
  const { sidebarExpanded } = useUDS();

  const contentClasses = [
    "uds__content-area",
    sidebarExpanded ? "uds__content-area--sidebar-expanded" : "uds__content-area--sidebar-collapsed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={contentClasses} {...props}>
      {children}
    </div>
  );
};

// ============================================
// UDS.PageHeader - Page header with breadcrumb, title, actions
// ============================================
UDS.PageHeader = function PageHeader({
  children,
  className = "",
  breadcrumbs = [],
  title,
  subtitle,
  badge,
  backButton = false,
  onBack,
  actions,
  ...props
}) {
  const pageHeaderClasses = [
    "uds__page-header",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={pageHeaderClasses} {...props}>
      {/* Breadcrumb trail */}
      {breadcrumbs.length > 0 && (
        <div className="uds__page-breadcrumb">
          <Icon name="House" size={16} className="uds__page-breadcrumb-home" />
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <Icon name="CaretRight" size={12} className="uds__page-breadcrumb-sep" />
              <span className={`uds__page-breadcrumb-item ${index === breadcrumbs.length - 1 ? "uds__page-breadcrumb-item--current" : ""}`}>
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Title row */}
      <div className="uds__page-header-row">
        <div className="uds__page-header-left">
          {backButton && (
            <button
              className="uds__page-header-back"
              onClick={onBack}
              aria-label="Go back"
            >
              <Icon name="ArrowLeft" size={16} />
            </button>
          )}
          <div className="uds__page-header-title-group">
            <div className="uds__page-header-title-row">
              {title && <h1 className="uds__page-header-title">{title}</h1>}
              {badge && <span className="uds__page-header-badge">{badge}</span>}
            </div>
            {subtitle && <p className="uds__page-header-subtitle">{subtitle}</p>}
          </div>
        </div>
        {actions && (
          <div className="uds__page-header-actions">
            {actions}
          </div>
        )}
      </div>

      {children}
    </div>
  );
};

// ============================================
// UDS.ContentLayout - Content layout toolbar (Full, Focus Left, Focus Right)
// ============================================
UDS.ContentLayout = function ContentLayout({
  children,
  className = "",
  showToolbar = true,
  ...props
}) {
  const { contentLayout, setContentLayout } = useUDS();

  const layoutOptions = [
    { value: "full", label: "Full", icon: "ArrowsOutSimple" },
    { value: "focus-left", label: "Focus Left", icon: "TextAlignLeft" },
    { value: "focus-right", label: "Focus Right", icon: "TextAlignRight" },
  ];

  const containerClasses = [
    "uds__content-layout",
    `uds__content-layout--${contentLayout}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses} {...props}>
      {/* Layout toolbar */}
      {showToolbar && (
        <div className="uds__content-layout-toolbar">
          <div className="uds__content-layout-info">
            <Icon name="Layout" size={20} className="uds__content-layout-info-icon" />
            <div>
              <span className="uds__content-layout-label">Content Layout</span>
              <span className="uds__content-layout-desc">Choose column arrangement for content focus</span>
            </div>
          </div>
          <div className="uds__content-layout-options">
            {layoutOptions.map((option) => (
              <button
                key={option.value}
                className={`uds__content-layout-option ${contentLayout === option.value ? "uds__content-layout-option--active" : ""}`}
                onClick={() => setContentLayout(option.value)}
                title={option.label}
              >
                <Icon name={option.icon} size={14} />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content grid */}
      <div className="uds__content-grid">
        {children}
      </div>
    </div>
  );
};

// ============================================
// UDS.Main - Main content area
// ============================================
UDS.Main = function Main({ children, className = "", ...props }) {
  const mainClasses = ["uds__main", className].filter(Boolean).join(" ");

  return (
    <main className={mainClasses} {...props}>
      {children}
    </main>
  );
};

// ============================================
// UDS.ListView - Left-side list panel
// ============================================
UDS.ListView = function ListView({
  children,
  className = "",
  title,
  subtitle,
  count,
  searchable = false,
  searchPlaceholder = "Search...",
  onSearch,
  header,
  footer,
  backButton = false,
  onBack,
  width = 375,
  ...props
}) {
  const { listViewOpen, closeListView } = useUDS();

  const listViewClasses = [
    "uds__listview",
    listViewOpen && "uds__listview--open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={listViewClasses}
      style={{ "--uds-listview-width": `${width}px` }}
      {...props}
    >
      {/* ListView Header */}
      <div className="uds__listview-header">
        {header || (
          <div className="uds__listview-header-content">
            <div className="uds__listview-header-left">
              {backButton && (
                <button
                  className="uds__listview-back"
                  onClick={onBack || closeListView}
                  aria-label="Go back"
                >
                  <Icon name="ArrowLeft" size={16} />
                </button>
              )}
              <div className="uds__listview-header-info">
                <div className="uds__listview-header-title-row">
                  {title && <h2 className="uds__listview-title">{title}</h2>}
                  {count !== undefined && (
                    <span className="uds__listview-count">{count}</span>
                  )}
                </div>
                {subtitle && <p className="uds__listview-subtitle">{subtitle}</p>}
              </div>
            </div>
            <div className="uds__listview-header-actions">
              {searchable && (
                <button className="uds__listview-action-btn" aria-label="Search">
                  <Icon name="MagnifyingGlass" size={16} />
                </button>
              )}
              <button className="uds__listview-action-btn" aria-label="Filter">
                <Icon name="FunnelSimple" size={16} />
              </button>
              <button className="uds__listview-action-btn" aria-label="More">
                <Icon name="DotsThree" size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ListView Content */}
      <div className="uds__listview-content">
        {children}
      </div>

      {/* ListView Footer */}
      {footer && (
        <div className="uds__listview-footer">{footer}</div>
      )}
    </div>
  );
};

// ============================================
// UDS.SidePanel - Right-side detail panel
// ============================================
UDS.SidePanel = function SidePanel({
  children,
  className = "",
  title,
  subtitle,
  badge,
  header,
  footer,
  width = 480,
  ...props
}) {
  const { sidePanelOpen, closeSidePanel } = useUDS();

  const panelClasses = [
    "uds__sidepanel",
    sidePanelOpen && "uds__sidepanel--open",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={panelClasses}
      style={{ "--uds-sidepanel-width": `${width}px` }}
      {...props}
    >
      {/* SidePanel Header */}
      <div className="uds__sidepanel-header">
        {header || (
          <div className="uds__sidepanel-header-content">
            <div className="uds__sidepanel-header-info">
              <div className="uds__sidepanel-header-title-row">
                {title && <h2 className="uds__sidepanel-title">{title}</h2>}
                {badge && <span className="uds__sidepanel-badge">{badge}</span>}
              </div>
              {subtitle && <p className="uds__sidepanel-subtitle">{subtitle}</p>}
            </div>
            <button
              className="uds__sidepanel-close"
              onClick={closeSidePanel}
              aria-label="Close panel"
            >
              <Icon name="X" size={16} />
            </button>
          </div>
        )}
      </div>

      {/* SidePanel Content */}
      <div className="uds__sidepanel-content">
        {children}
      </div>

      {/* SidePanel Footer */}
      {footer && (
        <div className="uds__sidepanel-footer">{footer}</div>
      )}
    </div>
  );
};

// ============================================
// UDS.Modal - Centered dialog overlay
// ============================================
UDS.Modal = function Modal({
  children,
  className = "",
  title,
  subtitle,
  badge,
  header,
  footer,
  maxWidth = 800,
  closeOnBackdrop = true,
  ...props
}) {
  const { modalOpen, closeModal } = useUDS();

  useEffect(() => {
    if (modalOpen) {
      const handleEsc = (e) => {
        if (e.key === "Escape") closeModal();
      };
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [modalOpen, closeModal]);

  if (!modalOpen) return null;

  const modalClasses = [
    "uds__modal",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="uds__modal-overlay" onClick={closeOnBackdrop ? closeModal : undefined}>
      <div
        className={modalClasses}
        style={{ "--uds-modal-max-width": `${maxWidth}px` }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        {/* Modal Header */}
        <div className="uds__modal-header">
          {header || (
            <div className="uds__modal-header-content">
              <div className="uds__modal-header-info">
                <div className="uds__modal-header-title-row">
                  {title && <h2 className="uds__modal-title">{title}</h2>}
                  {badge && <span className="uds__modal-badge">{badge}</span>}
                </div>
                {subtitle && <p className="uds__modal-subtitle">{subtitle}</p>}
              </div>
              <button
                className="uds__modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
          )}
        </div>

        {/* Modal Content */}
        <div className="uds__modal-content">
          {children}
        </div>

        {/* Modal Footer */}
        {footer && (
          <div className="uds__modal-footer">{footer}</div>
        )}
      </div>
    </div>
  );
};

// ============================================
// UDS.FullscreenModal - Full-page overlay
// ============================================
UDS.FullscreenModal = function FullscreenModal({
  children,
  className = "",
  header,
  footer,
  ...props
}) {
  const { fullscreenModalOpen, closeFullscreenModal } = useUDS();

  useEffect(() => {
    if (fullscreenModalOpen) {
      const handleEsc = (e) => {
        if (e.key === "Escape") closeFullscreenModal();
      };
      document.addEventListener("keydown", handleEsc);
      return () => document.removeEventListener("keydown", handleEsc);
    }
  }, [fullscreenModalOpen, closeFullscreenModal]);

  if (!fullscreenModalOpen) return null;

  const fullscreenClasses = [
    "uds__fullscreen-modal",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={fullscreenClasses} role="dialog" aria-modal="true" {...props}>
      {/* Close button */}
      <div className="uds__fullscreen-modal-toolbar">
        {header}
        <button
          className="uds__fullscreen-modal-close"
          onClick={closeFullscreenModal}
          aria-label="Close fullscreen modal"
        >
          <Icon name="X" size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="uds__fullscreen-modal-content">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="uds__fullscreen-modal-footer">{footer}</div>
      )}
    </div>
  );
};

// ============================================
// UDS.DemoControls - Floating demo toolbar (matches Figma bottom bar)
// ============================================
UDS.DemoControls = function DemoControls({
  className = "",
  showSidebar = true,
  showListView = true,
  showSidePanel = true,
  showModal = true,
  showFullscreenModal = true,
  ...props
}) {
  const {
    sidebarExpanded,
    toggleSidebar,
    listViewOpen,
    toggleListView,
    sidePanelOpen,
    toggleSidePanel,
    modalOpen,
    toggleModal,
    fullscreenModalOpen,
    toggleFullscreenModal,
  } = useUDS();

  const controlsClasses = [
    "uds__demo-controls",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const layoutControls = [
    showSidebar && {
      id: "sidebar",
      label: "Sidebar",
      icon: "SidebarSimple",
      active: sidebarExpanded,
      onClick: toggleSidebar,
    },
    showListView && {
      id: "listview",
      label: "ListView",
      icon: "ListBullets",
      active: listViewOpen,
      onClick: toggleListView,
    },
    showSidePanel && {
      id: "sidepanel",
      label: "SidePanel",
      icon: "SidebarSimple",
      active: sidePanelOpen,
      onClick: toggleSidePanel,
    },
    showModal && {
      id: "modal",
      label: "Modal",
      icon: "Square",
      active: modalOpen,
      onClick: toggleModal,
    },
    showFullscreenModal && {
      id: "fullscreen",
      label: "Fullscreen Modal",
      icon: "ArrowsOut",
      active: fullscreenModalOpen,
      onClick: toggleFullscreenModal,
    },
  ].filter(Boolean);

  return (
    <div className={controlsClasses} {...props}>
      <div className="uds__demo-controls-inner">
        <span className="uds__demo-controls-label">Layout:</span>
        <div className="uds__demo-controls-buttons">
          {layoutControls.map((control) => (
            <button
              key={control.id}
              className={`uds__demo-controls-btn ${control.active ? "uds__demo-controls-btn--active" : ""}`}
              onClick={control.onClick}
            >
              <Icon name={control.icon} size={14} />
              <span>{control.label}</span>
              {control.active && <span className="uds__demo-controls-badge">On</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================
// UDS.MobileMenuButton - Mobile menu toggle
// ============================================
UDS.MobileMenuButton = function MobileMenuButton({
  className = "",
  ...props
}) {
  const { mobileMenuOpen, setMobileMenuOpen } = useUDS();

  return (
    <button
      className={`uds__mobile-menu-btn ${className}`}
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={mobileMenuOpen}
      {...props}
    >
      <Icon name={mobileMenuOpen ? "X" : "List"} size={24} />
    </button>
  );
};

// ============================================
// Legacy subcomponents (backward compatibility)
// ============================================

/**
 * UDS.Header - Top header/navbar area (legacy)
 */
UDS.Header = function Header({
  children,
  className = "",
  sticky = true,
  ...props
}) {
  const headerClasses = [
    "uds__header",
    sticky && "uds__header--sticky",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses} {...props}>
      <div className="uds__header-content">{children}</div>
    </header>
  );
};

/**
 * UDS.Nav - Navigation sidebar (legacy)
 */
UDS.Nav = function Nav({
  children,
  className = "",
  header,
  footer,
  collapsible = true,
  ...props
}) {
  const { navCollapsed, toggleNav, mobileMenuOpen, setMobileMenuOpen } = useUDS();

  const navClasses = [
    "uds__nav-legacy",
    navCollapsed && "uds__nav-legacy--collapsed",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navClasses} {...props}>
        {header && <div className="uds__nav-legacy-header">{header}</div>}
        <div className="uds__nav-legacy-content">{children}</div>
        {footer && <div className="uds__nav-legacy-footer">{footer}</div>}
        {collapsible && (
          <button
            className="uds__nav-legacy-toggle"
            onClick={toggleNav}
            aria-label={navCollapsed ? "Expand navigation" : "Collapse navigation"}
          >
            <Icon
              name={navCollapsed ? "CaretRight" : "CaretLeft"}
              size={16}
              appearance="bold"
            />
          </button>
        )}
      </nav>

      <div
        className={`uds__nav-mobile ${mobileMenuOpen ? "uds__nav-mobile--open" : ""}`}
      >
        <div className="uds__nav-mobile-header">
          {header}
          <button
            className="uds__nav-mobile-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <Icon name="X" size={24} />
          </button>
        </div>
        <div className="uds__nav-mobile-content">{children}</div>
        {footer && <div className="uds__nav-mobile-footer">{footer}</div>}
      </div>
    </>
  );
};

/**
 * UDS.Panel - Slide-in panel (legacy)
 */
UDS.Panel = function Panel({
  children,
  className = "",
  position = "right",
  header,
  footer,
  width,
  height,
  overlay = false,
  ...props
}) {
  const { panels, closePanel } = useUDS();
  const isOpen = panels[position]?.open;

  const panelClasses = [
    "uds__panel",
    `uds__panel--${position}`,
    isOpen && "uds__panel--open",
    overlay && "uds__panel--overlay",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const panelStyle = {};
  if (width && position !== "bottom") panelStyle.width = width;
  if (height && position === "bottom") panelStyle.height = height;

  return (
    <>
      {overlay && isOpen && (
        <div
          className="uds__panel-overlay"
          onClick={() => closePanel(position)}
        />
      )}
      <aside className={panelClasses} style={panelStyle} {...props}>
        {header && (
          <div className="uds__panel-header">
            {header}
            <button
              className="uds__panel-close"
              onClick={() => closePanel(position)}
              aria-label="Close panel"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        )}
        <div className="uds__panel-content">{children}</div>
        {footer && <div className="uds__panel-footer">{footer}</div>}
      </aside>
    </>
  );
};

/**
 * UDS.Footer - Bottom footer area
 */
UDS.Footer = function Footer({ children, className = "", ...props }) {
  const footerClasses = ["uds__footer", className].filter(Boolean).join(" ");
  return (
    <footer className={footerClasses} {...props}>
      {children}
    </footer>
  );
};

/**
 * UDS.PanelToggle - Button to toggle a panel
 */
UDS.PanelToggle = function PanelToggle({
  position = "right",
  children,
  className = "",
  ...props
}) {
  const { panels, togglePanel } = useUDS();
  const isOpen = panels[position]?.open;

  return (
    <button
      className={`uds__panel-toggle ${className}`}
      onClick={() => togglePanel(position)}
      aria-expanded={isOpen}
      {...props}
    >
      {children || <Icon name="SidebarSimple" size={20} />}
    </button>
  );
};

function MobileOverlay() {
  const { setMobileMenuOpen } = useUDS();
  return (
    <div
      className="uds__mobile-overlay"
      onClick={() => setMobileMenuOpen(false)}
    />
  );
}

export default UDS;
