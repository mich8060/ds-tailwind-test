import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../ui/Menu/Menu";
import Table from "../ui/Table/Table";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Flex from "../ui/Flex/Flex";
import Divider from "../ui/Divider/Divider";
import CopyButton from "../ui/CopyButton/CopyButton";
import { formatLastUpdated } from "../utils/formatDate";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "./MenuDemo.scss";

const DEMO_NAV_ITEMS = [
  { label: "Dashboard", icon: "House", path: "/" },
  {
    label: "Getting Started",
    icon: "Layout",
    children: [
      { label: "Installation", path: "/getting-started/installation" },
      { label: "Font Installation", path: "/getting-started/font" },
      { label: "Using Components", path: "/getting-started/components" },
    ],
  },
  {
    label: "Foundations",
    icon: "SquaresFour",
    children: [
      { label: "Colors", path: "/colors" },
      { label: "Typography", path: "/typography" },
      { label: "Spacing", path: "/spacing" },
      { label: "Icons", path: "/icons" },
    ],
  },
  {
    label: "Components",
    icon: "DiamondsFour",
    children: [
      { label: "Buttons", path: "/buttons" },
      { label: "Text Input", path: "/input" },
      { label: "Menu", path: "/menu" },
    ],
  },
];

const INSTALL_CODE = `import { Menu } from '@mich8060/chg-design-system';
import '@mich8060/chg-design-system/tokens.css';
import '@mich8060/chg-design-system/styles.css';`;

const BASIC_CODE = `import Menu from '../ui/Menu/Menu';

const navItems = [
  // Flat item — renders as a direct link, no caret
  { label: "Dashboard", icon: "House", path: "/" },

  // Accordion item — renders with caret and expandable children
  {
    label: "Settings",
    icon: "Gear",
    children: [
      { label: "Profile", path: "/settings/profile" },
      { label: "Team", path: "/settings/team" },
    ],
  },
];

function App() {
  return (
    <div className="app">
      <Menu navItems={navItems} />
      <div className="app__content">
        {/* Your page content */}
      </div>
    </div>
  );
}`;

const NAV_STRUCTURE_CODE = `// The navItems prop accepts two types of entries:
//
// 1. FLAT ITEM — Direct link, no caret, no children
//    { label, icon, path }
//
// 2. ACCORDION — Expandable section with children and caret
//    { label, icon, children: [{ label, path }] }

const navItems = [
  // ── Flat item (direct link, no caret) ──
  {
    label: "Dashboard",        // Link text
    icon: "House",             // Phosphor icon name
    path: "/",                 // Route path
  },

  // ── Accordion with children (expandable, with caret) ──
  {
    label: "Getting Started",  // Accordion header text
    icon: "Layout",            // Phosphor icon name
    children: [
      { label: "Installation", path: "/getting-started/installation" },
      { label: "Font Installation", path: "/getting-started/font" },
    ],
  },
  {
    label: "Components",
    icon: "DiamondsFour",
    children: [
      { label: "Buttons", path: "/buttons" },
      { label: "Checkbox", path: "/checkbox" },
      { label: "Text Input", path: "/input" },
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
];`;

const BRAND_SWITCHING_CODE = `// Pass brands array and handlers for brand switching
const BRANDS = ["comphealth", "weatherby", "connect", "locumsmart"];

<Menu
  navItems={navItems}
  brands={BRANDS}
  activeBrand={activeBrand}
  onBrandChange={setActiveBrand}
/>`;

const MODE_TOGGLE_CODE = `// Pass activeMode and onModeChange for light/dark mode toggle
<Menu
  navItems={navItems}
  activeMode={activeMode}
  onModeChange={setActiveMode}
/>`;

const COMPLETE_CODE = `import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from '@mich8060/chg-design-system';
import '@mich8060/chg-design-system/tokens.css';
import '@mich8060/chg-design-system/styles.css';

const NAV_ITEMS = [
  { label: "Dashboard", icon: "House", path: "/" },
  {
    label: "Getting Started",
    icon: "Layout",
    children: [
      { label: "Installation", path: "/docs/install" },
      { label: "Usage", path: "/docs/usage" },
    ],
  },
  {
    label: "Components",
    icon: "DiamondsFour",
    children: [
      { label: "Buttons", path: "/buttons" },
      { label: "Text Input", path: "/input" },
      { label: "Modal", path: "/modal" },
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
];

const BRANDS = ["comphealth", "weatherby", "connect", "locumsmart"];

function App() {
  const [activeBrand, setActiveBrand] = useState("comphealth");
  const [activeMode, setActiveMode] = useState("light");

  return (
    <Router>
      <div className="app">
        <Menu
          navItems={NAV_ITEMS}
          brands={BRANDS}
          activeBrand={activeBrand}
          onBrandChange={setActiveBrand}
          activeMode={activeMode}
          onModeChange={setActiveMode}
        />
        <div className="app__content" style={{ paddingLeft: 64 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* ...your routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;`;

const PROPS_DATA = [
  {
    prop: "navItems",
    type: "Array",
    default: "[]",
    description: (
      <>
        Array of navigation entries. Each entry is either a <strong>flat item</strong>{" "}
        <code>{"{ label, icon, path }"}</code> or an <strong>accordion item</strong>{" "}
        <code>{"{ label, icon, children: [{ label, path }] }"}</code>.
      </>
    ),
  },
  {
    prop: "brands",
    type: "Array",
    default: "[]",
    description: (
      <>
        Array of brand key strings (e.g. <code>"comphealth"</code>, <code>"weatherby"</code>).
        When provided with <code>onBrandChange</code>, renders a brand switcher dropdown.
      </>
    ),
  },
  {
    prop: "activeBrand",
    type: "string",
    default: "—",
    description: "The currently active brand key. Controls the brand switcher dropdown value.",
  },
  {
    prop: "onBrandChange",
    type: "function",
    default: "—",
    description: (
      <>
        Callback fired when the user selects a brand. Receives the brand key string.
        Required alongside <code>brands</code> to render the switcher.
      </>
    ),
  },
  {
    prop: "activeMode",
    type: "string",
    default: "—",
    description: (
      <>
        Current color mode: <code>"light"</code> or <code>"dark"</code>.
        Controls the mode toggle icon and label.
      </>
    ),
  },
  {
    prop: "onModeChange",
    type: "function",
    default: "—",
    description: "Callback fired when the user toggles light/dark mode. Receives the new mode string. Required to render the mode toggle.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: (
      <>Additional CSS classes applied to the root <code>&lt;aside&gt;</code> element.</>
    ),
  },
  {
    prop: "title",
    type: "string",
    default: '"Menu"',
    description: "Title for the menu (available for extension).",
  },
];

const PROPS_COLUMNS = [
  {
    key: "prop",
    label: "Prop",
    render: (row) => <code>{row.prop}</code>,
  },
  {
    key: "type",
    label: "Type",
    render: (row) => <code>{row.type}</code>,
  },
  {
    key: "default",
    label: "Default",
    render: (row) => (row.default === "—" ? "—" : <code>{row.default}</code>),
  },
  {
    key: "description",
    label: "Description",
    render: (row) => row.description,
  },
];

export default function MenuDemo() {
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
              <h1 className="page__header-title">Menu</h1>
              <p className="page__header-description">
                A collapsible, hover-expanding navigation sidebar with brand
                switching, light/dark mode toggle, search, and accordion
                navigation groups. Pass <code>navItems</code> to define the
                navigation structure, and optional <code>brands</code> and
                mode props for application-level controls.
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
                </Flex>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="page__content">
        <div className="page__examples-section">
          {/* Live Preview */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Live Preview</h2>
            <p className="demo-group__description">
              Hover over the sidebar to see it expand. Accordion sections can be
              toggled by clicking their header. The brand logo switches
              automatically based on the active brand. When you hover off,
              accordion children collapse visually but retain their open state.
            </p>
            <div className="menu-demo__preview-container">
              <Menu className="example" navItems={DEMO_NAV_ITEMS} />
              <div style={{ flex: 1, padding: "var(--uds-spacing-48)", paddingLeft: "calc(64px + var(--uds-spacing-48))" }}>
                <h2 style={{ color: "var(--uds-text-secondary)", margin: 0 }}>Page Content Area</h2>
                <p style={{ color: "var(--uds-text-tertiary)" }}>Hover the sidebar to expand it.</p>
              </div>
            </div>
          </div>

          {/* Installation */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Installation</h2>
            <p className="demo-group__description">
              Import the Menu component and required styles.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton codeString={INSTALL_CODE} />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{INSTALL_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Basic Usage */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Basic Usage</h2>
            <p className="demo-group__description">
              Pass a <code>navItems</code> array to define the sidebar structure.
              Items with a <code>path</code> render as direct links.
              Items with a <code>children</code> array render as collapsible
              accordion groups with a caret.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton codeString={BASIC_CODE} />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{BASIC_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Features */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Features</h2>
            <p className="demo-group__description">
              The Menu component includes several built-in features for
              application navigation.
            </p>

            <div className="menu-demo__features-grid">
              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Hover Expansion</h3>
                <p className="menu-demo__feature-description">
                  The sidebar expands from 64px (icon-only) to 280px on hover,
                  with smooth width transitions. Labels and carets animate in
                  with a staggered delay from top to bottom.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Flat Items &amp; Accordions</h3>
                <p className="menu-demo__feature-description">
                  Navigation entries with a <code>path</code> render as direct
                  links. Entries with a <code>children</code> array render as
                  collapsible accordion groups with a CaretDown icon.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Auto-Expand Active Routes</h3>
                <p className="menu-demo__feature-description">
                  Accordion sections automatically expand when the current route
                  matches one of their child paths. This uses React Router&apos;s{" "}
                  <code>useLocation</code> hook.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Brand Switching</h3>
                <p className="menu-demo__feature-description">
                  Pass a <code>brands</code> array and <code>onBrandChange</code>{" "}
                  callback to render a brand switcher dropdown. The brand logo
                  updates automatically via the <code>Branding</code> component&apos;s{" "}
                  <code>inherit</code> prop.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Light / Dark Mode Toggle</h3>
                <p className="menu-demo__feature-description">
                  Pass <code>activeMode</code> and <code>onModeChange</code> to
                  render a Sun/Moon toggle in the footer. The icon and label
                  update reactively based on the current mode.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Staggered Animations</h3>
                <p className="menu-demo__feature-description">
                  Nav item labels fade in left-to-right with a staggered delay
                  from top to bottom (50ms per item), creating a polished
                  cascading reveal effect.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Structure */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Navigation Structure</h2>
            <p className="demo-group__description">
              The <code>navItems</code> prop accepts an array of two entry types:{" "}
              <strong>flat items</strong> and <strong>accordion items</strong>. A
              flat item has a <code>path</code> and renders as a direct link. An
              accordion item has a <code>children</code> array and renders as a
              collapsible group with a caret. Both types require a{" "}
              <code>label</code> and <code>icon</code> (Phosphor icon name).
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton codeString={NAV_STRUCTURE_CODE} />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{NAV_STRUCTURE_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Brand Switching */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Brand Switching</h2>
            <p className="demo-group__description">
              Pass a <code>brands</code> array along with <code>activeBrand</code>{" "}
              and <code>onBrandChange</code> to enable a brand switcher dropdown
              in the sidebar. The brand logo in the header automatically updates
              via the <code>Branding</code> component&apos;s <code>inherit</code> prop,
              which reads the <code>data-brand</code> attribute from <code>&lt;html&gt;</code>.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton codeString={BRAND_SWITCHING_CODE} />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{BRAND_SWITCHING_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Mode Toggle */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Mode Toggle</h2>
            <p className="demo-group__description">
              Pass <code>activeMode</code> and <code>onModeChange</code> to
              render a light/dark mode toggle button in the menu footer. The
              button displays a Moon icon in light mode and a Sun icon in dark
              mode, with a label that animates in on hover expansion.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton codeString={MODE_TOGGLE_CODE} />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{MODE_TOGGLE_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Props Reference */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Props Reference</h2>
            <Table columns={PROPS_COLUMNS} data={PROPS_DATA} />
          </div>

          {/* CSS Class Structure */}
          <div className="demo-group">
            <h2 className="demo-group__heading">CSS Class Structure</h2>
            <p className="demo-group__description">
              The Menu follows BEM-like naming conventions with the{" "}
              <code>uds-menu</code> block prefix.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton
                codeString={`/* Block */
.uds-menu { }
.uds-menu--expanded { }

/* Brand section */
.uds-menu_brand { }
.uds-menu_brand__symbol { }
.uds-menu_brand__full { }

/* Search section */
.uds-menu_search { }
.uds-menu_search__input { }
.uds-menu_search__button { }

/* Brand switcher */
.uds-menu_brands { }
.uds-menu_brands__button { }
.uds-menu_brands__dropdown { }

/* Navigation */
.uds-menu_nav { }
.uds-menu_nav__item { }
.uds-menu_nav__item--accordion { }
.uds-menu_nav__item--open { }
.uds-menu_nav__item--active { }
.uds-menu_nav__item-icon { }
.uds-menu_nav__item-label { }
.uds-menu_nav__item-link { }
.uds-menu_nav__item-caret { }
.uds-menu_nav__item-caret--open { }

/* Accordion children */
.uds-menu_nav__children { }
.uds-menu_nav__children--open { }
.uds-menu_nav__child-link { }
.uds-menu_nav__child-link--active { }

/* Footer */
.uds-menu_footer { }

/* Mode toggle */
.uds-menu_mode { }
.uds-menu_mode__toggle { }
.uds-menu_mode__label { }

/* User section */
.uds-menu_user { }`}
              />
              <pre className="menu-demo__code-block">
                <code className="language-css">{`/* Block */
.uds-menu { }
.uds-menu--expanded { }

/* Brand section */
.uds-menu_brand { }
.uds-menu_brand__symbol { }
.uds-menu_brand__full { }

/* Search section */
.uds-menu_search { }
.uds-menu_search__input { }
.uds-menu_search__button { }

/* Brand switcher */
.uds-menu_brands { }
.uds-menu_brands__button { }
.uds-menu_brands__dropdown { }

/* Navigation */
.uds-menu_nav { }
.uds-menu_nav__item { }
.uds-menu_nav__item--accordion { }
.uds-menu_nav__item--open { }
.uds-menu_nav__item--active { }
.uds-menu_nav__item-icon { }
.uds-menu_nav__item-label { }
.uds-menu_nav__item-link { }
.uds-menu_nav__item-caret { }
.uds-menu_nav__item-caret--open { }

/* Accordion children */
.uds-menu_nav__children { }
.uds-menu_nav__children--open { }
.uds-menu_nav__child-link { }
.uds-menu_nav__child-link--active { }

/* Footer */
.uds-menu_footer { }

/* Mode toggle */
.uds-menu_mode { }
.uds-menu_mode__toggle { }
.uds-menu_mode__label { }

/* User section */
.uds-menu_user { }`}</code>
              </pre>
            </div>
          </div>

          {/* Complete Example */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Complete Example</h2>
            <p className="demo-group__description">
              A full application setup with the Menu sidebar, brand switching,
              mode toggle, data-driven navigation, and React Router integration.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton codeString={COMPLETE_CODE} />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{COMPLETE_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Best Practices */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Best Practices</h2>
            <div className="menu-demo__best-practices">
              <div className="menu-demo__practice menu-demo__practice--do">
                <h3 className="menu-demo__practice-title">Do</h3>
                <ul className="menu-demo__practice-list">
                  <li>Define your navigation structure as a JSON array and pass it via the <code>navItems</code> prop</li>
                  <li>Use flat items (<code>path</code>) for standalone links like Dashboard or Home</li>
                  <li>Use accordion items (<code>children</code>) for groups of related pages</li>
                  <li>Add <code>padding-left: 64px</code> to your content area so it clears the collapsed menu</li>
                  <li>Use React Router for navigation so active route detection works automatically</li>
                  <li>Keep navigation items alphabetically sorted within accordion groups using <code>.sort()</code></li>
                  <li>Pass <code>brands</code> and <code>onBrandChange</code> together to enable the brand switcher</li>
                  <li>Pass <code>activeMode</code> and <code>onModeChange</code> together to enable the mode toggle</li>
                </ul>
              </div>
              <div className="menu-demo__practice menu-demo__practice--dont">
                <h3 className="menu-demo__practice-title">Don&apos;t</h3>
                <ul className="menu-demo__practice-list">
                  <li>Don&apos;t render multiple Menu instances on the same page</li>
                  <li>Don&apos;t use outside of a React Router context — it depends on <code>useLocation</code> and <code>Link</code></li>
                  <li>Don&apos;t forget to import the required CSS tokens and styles</li>
                  <li>Don&apos;t nest the Menu inside scrollable containers — it should be a fixed sidebar</li>
                  <li>Don&apos;t hardcode navigation items inside the Menu — always pass them via the <code>navItems</code> prop</li>
                  <li>Don&apos;t pass <code>brands</code> without <code>onBrandChange</code> — the switcher won&apos;t render</li>
                </ul>
              </div>
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
                to="/"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Home</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
