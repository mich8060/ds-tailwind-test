import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Menu from "../ui/Menu/Menu";
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

// Sample navigation for the live preview
const DEMO_NAVIGATION = [
  {
    label: "Getting Started",
    icon: "Layout",
    items: [
      { path: "/", label: "Overview", exact: true },
      { path: "/getting-started/installation", label: "Installation" },
      { path: "/getting-started/font", label: "Font Installation" },
      { path: "/getting-started/components", label: "Using Components" },
    ],
  },
  {
    label: "Foundations",
    icon: "SquaresFour",
    items: [
      { path: "/colors", label: "Colors" },
      { path: "/typography", label: "Typography" },
      { path: "/spacing", label: "Spacing" },
      { path: "/icons", label: "Icons" },
    ],
  },
  {
    label: "Components",
    icon: "DiamondsFour",
    items: [
      { path: "/buttons", label: "Buttons" },
      { path: "/input", label: "Text Input" },
      { path: "/menu", label: "Menu" },
    ],
  },
  {
    label: "Patterns",
    icon: "CirclesThree",
    items: [{ path: "/menu", label: "Menu" }],
  },
];

const HIDE_SECTIONS_CODE = `// Hide the search bar
<Menu
  navigation={NAVIGATION}
  showSearch={false}
/>

// Show the brand switcher (off by default)
<Menu
  navigation={NAVIGATION}
  showBrandSwitcher={true}
/>

// Hide the account section
<Menu
  navigation={NAVIGATION}
  showAccount={false}
/>

// Show the dark/light mode toggle in the account menu (off by default)
<Menu
  navigation={NAVIGATION}
  showModeToggle={true}
  activeMode={activeMode}
  onModeChange={setActiveMode}
/>

// Minimal menu — navigation only
<Menu
  navigation={NAVIGATION}
  showSearch={false}
  showBrandSwitcher={false}
  showAccount={false}
/>`;

const INSTALL_CODE = `import { Menu } from '@mich8060/chg-design-system';
import '@mich8060/chg-design-system/tokens.css';
import '@mich8060/chg-design-system/styles.css';`;

const BASIC_CODE = `import Menu from '../ui/Menu/Menu';

const navigation = [
  {
    label: "Dashboard",
    icon: "House",
    items: [
      { path: "/", label: "Overview", exact: true },
      { path: "/analytics", label: "Analytics" },
    ],
  },
  {
    label: "Settings",
    icon: "Gear",
    items: [
      { path: "/settings/profile", label: "Profile" },
      { path: "/settings/team", label: "Team" },
    ],
  },
];

function App() {
  const [activeBrand, setActiveBrand] = useState('design-system');
  const [activeMode, setActiveMode] = useState('light');

  return (
    <div className="app">
      <Menu
        navigation={navigation}
        activeBrand={activeBrand}
        activeMode={activeMode}
        onBrandChange={setActiveBrand}
        onModeChange={setActiveMode}
      />
      <div className="app__content">
        {/* Your page content */}
      </div>
    </div>
  );
}`;

const NAV_STRUCTURE_CODE = `// The navigation prop is an array of section objects.
// Each section has a label, icon, and items array.
const navigation = [
  {
    label: "Getting Started",  // Accordion header text
    icon: "Layout",            // Phosphor icon name
    items: [
      { path: "/", label: "Overview", exact: true },
      { path: "/getting-started/installation", label: "Installation" },
      { path: "/getting-started/font", label: "Font Installation" },
    ],
  },
  {
    label: "Foundations",
    icon: "SquaresFour",
    items: [
      { path: "/colors", label: "Colors" },
      { path: "/typography", label: "Typography" },
      { path: "/spacing", label: "Spacing" },
      { path: "/icons", label: "Icons" },
    ],
  },
  {
    label: "Components",
    icon: "DiamondsFour",
    items: [
      { path: "/buttons", label: "Buttons" },
      { path: "/checkbox", label: "Checkbox" },
      { path: "/input", label: "Text Input" },
      // ...more items (auto-sorted with .sort())
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
];

// Each item in the items array:
// {
//   path: string    — Route path (used for NavLink "to" and active detection)
//   label: string   — Display text in the sidebar
//   exact?: boolean — When true, only matches the exact path (use for "/")
// }`;

const AUTO_EXPAND_CODE = `// The Menu automatically expands accordion sections
// when a child route is active. This is handled internally:

useEffect(() => {
  const updates = {};
  navigation.forEach((section, index) => {
    const hasActiveChild = section.items.some((item) =>
      item.exact || item.path === "/"
        ? location.pathname === item.path
        : location.pathname.startsWith(item.path),
    );
    if (hasActiveChild) {
      updates[index] = true;
    }
  });
  if (Object.keys(updates).length > 0) {
    setExpandedSections((prev) => ({ ...prev, ...updates }));
  }
}, [location.pathname, navigation]);`;

const COMPLETE_CODE = `import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from '@mich8060/chg-design-system';
import '@mich8060/chg-design-system/tokens.css';
import '@mich8060/chg-design-system/styles.css';

const BRANDS = [
  'design-system', 'locumsmart', 'wireframe',
  'connect', 'comphealth', 'modio', 'weatherby',
];

const NAVIGATION = [
  {
    label: "Getting Started",
    icon: "Layout",
    items: [
      { path: "/", label: "Overview", exact: true },
      { path: "/docs/install", label: "Installation" },
    ],
  },
  {
    label: "Components",
    icon: "DiamondsFour",
    items: [
      { path: "/buttons", label: "Buttons" },
      { path: "/input", label: "Text Input" },
      { path: "/modal", label: "Modal" },
    ].sort((a, b) => a.label.localeCompare(b.label)),
  },
];

function App() {
  const [activeBrand, setActiveBrand] = useState(() => {
    const saved = localStorage.getItem('activeBrand');
    return saved && BRANDS.includes(saved) ? saved : 'design-system';
  });

  const [activeMode, setActiveMode] = useState(() => {
    const saved = localStorage.getItem('activeMode');
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-brand', activeBrand);
    root.setAttribute('data-mode', activeMode);
    localStorage.setItem('activeBrand', activeBrand);
    localStorage.setItem('activeMode', activeMode);
  }, [activeBrand, activeMode]);

  return (
    <Router>
      <div className="app">
        <Menu
          navigation={NAVIGATION}
          activeBrand={activeBrand}
          activeMode={activeMode}
          onBrandChange={setActiveBrand}
          onModeChange={setActiveMode}
          showBrandSwitcher={true}
          showModeToggle={true}
          user={{ name: "Jane Doe", initials: "JD" }}
          onSignOut={() => console.log("Sign out")}
          accountMenuItems={[
            { label: "Profile", icon: "User", onClick: () => {} },
            { label: "Settings", icon: "Gear", onClick: () => {} },
          ]}
        />
        <div className="app__content">
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

/**
 * Menu Component Demo & Documentation
 *
 * This page demonstrates the Menu component and its various configurations.
 */
const BRANDS = [
  { value: "design-system", label: "Design System" },
  { value: "locumsmart", label: "LocumSmart" },
  { value: "wireframe", label: "Wireframe" },
  { value: "connect", label: "Connect" },
  { value: "comphealth", label: "CompHealth" },
  { value: "modio", label: "Modio" },
  { value: "weatherby", label: "Weatherby" },
];

export default function MenuDemo() {
  const [demoBrand, setDemoBrand] = useState("design-system");
  const [demoMode, setDemoMode] = useState("light");

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
                The Menu component provides a collapsible, data-driven
                navigation sidebar. Pass a JSON array of sections via the{" "}
                <code>navigation</code> prop to define the entire nav structure.
                It supports both expanded and collapsed states, with automatic
                expansion of sections when child items are active.
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

          {/* Brand Previews */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Brand Previews</h2>
            <p className="demo-group__description">
              The Menu component rendered for each available brand. Each
              preview is scoped to its own brand theme so you can compare
              branding, colors, and logo treatments side by side.
            </p>
            <div className="menu-demo__brand-grid">
              {BRANDS.map((brand) => (
                <div key={brand.value} className="menu-demo__brand-cell">
                  <span className="menu-demo__brand-label">{brand.label}</span>
                  <div
                    className="menu-demo__preview-container"
                    data-brand={brand.value}
                  >
                    <Menu
                      navigation={DEMO_NAVIGATION}
                      activeBrand={brand.value}
                      activeMode={demoMode}
                      onBrandChange={() => {}}
                      onModeChange={setDemoMode}
                      showSearch={false}
                      showBrandSwitcher={false}
                      user={{ name: "Jane Doe", initials: "JD" }}
                      onSignOut={() => {}}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Basic Usage */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Basic Usage</h2>
            <p className="demo-group__description">
              Pass a <code>navigation</code> array to define the sidebar
              sections and items. Each section becomes a collapsible accordion
              group.
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
                <h3 className="menu-demo__feature-title">Data-Driven Navigation</h3>
                <p className="menu-demo__feature-description">
                  Define your entire navigation structure as a JSON array via the{" "}
                  <code>navigation</code> prop. Add, remove, or reorder sections
                  and items without modifying the component.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Collapsible Sidebar</h3>
                <p className="menu-demo__feature-description">
                  Toggle between expanded (full labels) and collapsed (icon-only)
                  states using the hamburger button. The collapsed state preserves
                  quick access while saving screen space.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Accordion Sections</h3>
                <p className="menu-demo__feature-description">
                  Navigation items are organized into collapsible accordion
                  groups defined by the <code>navigation</code> prop. Sections
                  auto-expand when their child routes are active.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Brand Switcher</h3>
                <p className="menu-demo__feature-description">
                  A built-in dropdown allows users to switch between CHG
                  sub-brands (LocumSmart, CompHealth, Modio, Weatherby, etc.),
                  updating design tokens throughout the application.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Account &amp; Mode Toggle</h3>
                <p className="menu-demo__feature-description">
                  An account section at the bottom shows the user&apos;s avatar and
                  name with an ActionMenu for profile actions, sign out, and an
                  optional dark/light mode toggle (via{" "}
                  <code>showModeToggle</code>). Both the account section and
                  mode toggle can be independently shown or hidden.
                </p>
              </div>

              <div className="menu-demo__feature-card">
                <h3 className="menu-demo__feature-title">Active Route Detection</h3>
                <p className="menu-demo__feature-description">
                  Uses React Router&apos;s <code>NavLink</code> and{" "}
                  <code>useLocation</code> to automatically highlight the active
                  route and expand the relevant accordion section.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Structure */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Navigation Structure</h2>
            <p className="demo-group__description">
              The <code>navigation</code> prop accepts an array of section
              objects. Each section has a <code>label</code>, <code>icon</code>{" "}
              (Phosphor icon name), and <code>items</code> array. Each item has a{" "}
              <code>path</code>, <code>label</code>, and an optional{" "}
              <code>exact</code> flag for exact route matching.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton codeString={NAV_STRUCTURE_CODE} />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{NAV_STRUCTURE_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Brand Options */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Brand Options</h2>
            <p className="demo-group__description">
              The Menu includes a brand switcher dropdown that updates the
              application&apos;s design tokens. The following brands are available:
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton
                codeString={`const BRAND_OPTIONS = [
  { value: "design-system", label: "Design System" },
  { value: "locumsmart", label: "LocumSmart" },
  { value: "wireframe", label: "Wireframe" },
  { value: "connect", label: "Connect" },
  { value: "comphealth", label: "CompHealth" },
  { value: "modio", label: "Modio" },
  { value: "weatherby", label: "Weatherby" },
];`}
              />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{`const BRAND_OPTIONS = [
  { value: "design-system", label: "Design System" },
  { value: "locumsmart", label: "LocumSmart" },
  { value: "wireframe", label: "Wireframe" },
  { value: "connect", label: "Connect" },
  { value: "comphealth", label: "CompHealth" },
  { value: "modio", label: "Modio" },
  { value: "weatherby", label: "Weatherby" },
];`}</code>
              </pre>
            </div>
          </div>

          {/* Hiding Sections */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Hiding Sections</h2>
            <p className="demo-group__description">
              Use boolean props to toggle the visibility of individual menu
              sections. <code>showSearch</code> and <code>showAccount</code>{" "}
              default to <code>true</code>. <code>showBrandSwitcher</code> and{" "}
              <code>showModeToggle</code> default to <code>false</code>.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton codeString={HIDE_SECTIONS_CODE} />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{HIDE_SECTIONS_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Auto-Expand Behavior */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Auto-Expand Behavior</h2>
            <p className="demo-group__description">
              When a route changes, the Menu automatically expands the accordion
              section that contains the active route. This is handled dynamically
              across all sections defined in the <code>navigation</code> prop.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton codeString={AUTO_EXPAND_CODE} />
              <pre className="menu-demo__code-block">
                <code className="language-jsx">{AUTO_EXPAND_CODE}</code>
              </pre>
            </div>
          </div>

          {/* Props Reference */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Props Reference</h2>
            <p className="demo-group__description">
              The Menu component accepts the following props for controlling
              navigation, brand, and mode state.
            </p>
            <div className="menu-demo__props-table-wrapper">
              <table className="menu-demo__props-table">
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
                    <td><code>navigation</code></td>
                    <td><code>Array</code></td>
                    <td><code>[]</code></td>
                    <td>
                      Array of section objects defining the sidebar navigation.
                      Each section: <code>{"{ label, icon, items: [{ path, label, exact? }] }"}</code>
                    </td>
                  </tr>
                  <tr>
                    <td><code>activeBrand</code></td>
                    <td><code>string</code></td>
                    <td><code>"design-system"</code></td>
                    <td>Currently selected brand. One of: <code>"design-system"</code>, <code>"locumsmart"</code>, <code>"wireframe"</code>, <code>"connect"</code>, <code>"comphealth"</code>, <code>"modio"</code>, <code>"weatherby"</code></td>
                  </tr>
                  <tr>
                    <td><code>activeMode</code></td>
                    <td><code>string</code></td>
                    <td><code>"light"</code></td>
                    <td>Currently selected color mode. One of: <code>"light"</code> or <code>"dark"</code></td>
                  </tr>
                  <tr>
                    <td><code>onBrandChange</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td>Callback fired when the brand selection changes. Receives the new brand value as a string.</td>
                  </tr>
                  <tr>
                    <td><code>onModeChange</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td>Callback fired when the mode toggle is clicked. Receives the new mode value (<code>"light"</code> or <code>"dark"</code>).</td>
                  </tr>
                  <tr>
                    <td><code>showSearch</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Whether to show the search input section. Set to <code>false</code> to hide it.</td>
                  </tr>
                  <tr>
                    <td><code>showBrandSwitcher</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Whether to show the brand switcher dropdown. Set to <code>true</code> to show it.</td>
                  </tr>
                  <tr>
                    <td><code>showAccount</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Whether to show the account section (avatar, name, action menu) at the bottom of the sidebar.</td>
                  </tr>
                  <tr>
                    <td><code>showModeToggle</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Whether to include the dark/light mode toggle inside the account action menu. Set to <code>true</code> to show it.</td>
                  </tr>
                  <tr>
                    <td><code>user</code></td>
                    <td><code>object</code></td>
                    <td>—</td>
                    <td>User object for the account section: <code>{"{ name, initials, avatar }"}</code>. Displays the avatar and name at the bottom of the sidebar.</td>
                  </tr>
                  <tr>
                    <td><code>onSignOut</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td>Callback fired when "Sign Out" is clicked in the account action menu.</td>
                  </tr>
                  <tr>
                    <td><code>accountMenuItems</code></td>
                    <td><code>Array</code></td>
                    <td><code>[]</code></td>
                    <td>Additional items to prepend in the account action menu (e.g., Profile, Settings). Each item follows the ActionMenu item schema.</td>
                  </tr>
                  <tr>
                    <td><code>expanded</code></td>
                    <td><code>boolean</code></td>
                    <td><code>undefined</code></td>
                    <td>Controlled expanded state. When provided, the component becomes controlled. Use with <code>onExpandedChange</code>.</td>
                  </tr>
                  <tr>
                    <td><code>onExpandedChange</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td>Callback fired when the sidebar expanded state changes. Receives the new boolean value.</td>
                  </tr>
                  <tr>
                    <td><code>className</code></td>
                    <td><code>string</code></td>
                    <td><code>""</code></td>
                    <td>Additional CSS classes to apply to the root element.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Internal State */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Internal State</h2>
            <p className="demo-group__description">
              The Menu manages its own internal state for sidebar expansion and
              accordion sections. Section expanded states are tracked dynamically
              in a single map keyed by section index.
            </p>
            <div className="menu-demo__props-table-wrapper">
              <table className="menu-demo__props-table">
                <thead>
                  <tr>
                    <th>State</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>internalExpanded</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Controls whether the sidebar is fully expanded or collapsed to icon-only mode. Used when the <code>expanded</code> prop is not provided.</td>
                  </tr>
                  <tr>
                    <td><code>expandedSections</code></td>
                    <td><code>{"{ [index]: boolean }"}</code></td>
                    <td><code>{"{}"}</code></td>
                    <td>
                      A map tracking which accordion sections are expanded.
                      Keyed by section index from the <code>navigation</code> array.
                      Automatically updated when the active route matches a section&apos;s items.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* CSS Class Structure */}
          <div className="demo-group">
            <h2 className="demo-group__heading">CSS Class Structure</h2>
            <p className="demo-group__description">
              The Menu follows BEM naming conventions with the <code>menu</code>{" "}
              block prefix.
            </p>
            <div className="menu-demo__code-block-wrapper">
              <CopyButton
                codeString={`/* Block */
.menu { }

/* States */
.menu--expanded { }          /* Sidebar is fully expanded */
.menu--collapsed { }         /* Sidebar is icon-only */

/* Elements */
.menu__branding { }          /* Logo and toggle area */
.menu__toggle { }            /* Hamburger toggle button */
.menu__brand { }             /* Brand logo container */
.menu__search { }            /* Search section */
.menu__search-input { }      /* Search input wrapper */
.menu__search-field { }      /* The input element */
.menu__search-icon { }       /* Collapsed search icon */
.menu__brand-switcher { }    /* Brand dropdown section */
.menu__nav { }               /* Navigation container */
.menu__accordion { }         /* Accordion section wrapper */
.menu__accordion-header { }  /* Accordion toggle button */
.menu__accordion-header--active { } /* Active section */
.menu__accordion-icon { }    /* Caret icon */
.menu__accordion-icon--expanded { } /* Rotated caret */
.menu__accordion-body { }    /* Accordion content */
.menu__accordion-body--expanded { } /* Visible content */
.menu__item { }              /* Navigation item */
.menu__item--sub { }         /* Nested nav item */
.menu__item--sub--active { } /* Active nested nav item */
.menu__item-label { }        /* Nav item text */
.menu__account { }           /* Account section (bottom) */
.menu__account-name { }      /* User display name */
.menu__account-menu { }      /* ActionMenu wrapper */`}
              />
              <pre className="menu-demo__code-block">
                <code className="language-css">{`/* Block */
.menu { }

/* States */
.menu--expanded { }          /* Sidebar is fully expanded */
.menu--collapsed { }         /* Sidebar is icon-only */

/* Elements */
.menu__branding { }          /* Logo and toggle area */
.menu__toggle { }            /* Hamburger toggle button */
.menu__brand { }             /* Brand logo container */
.menu__search { }            /* Search section */
.menu__search-input { }      /* Search input wrapper */
.menu__search-field { }      /* The input element */
.menu__search-icon { }       /* Collapsed search icon */
.menu__brand-switcher { }    /* Brand dropdown section */
.menu__nav { }               /* Navigation container */
.menu__accordion { }         /* Accordion section wrapper */
.menu__accordion-header { }  /* Accordion toggle button */
.menu__accordion-header--active { } /* Active section */
.menu__accordion-icon { }    /* Caret icon */
.menu__accordion-icon--expanded { } /* Rotated caret */
.menu__accordion-body { }    /* Accordion content */
.menu__accordion-body--expanded { } /* Visible content */
.menu__item { }              /* Navigation item */
.menu__item--sub { }         /* Nested nav item */
.menu__item--sub--active { } /* Active nested nav item */
.menu__item-label { }        /* Nav item text */
.menu__account { }           /* Account section (bottom) */
.menu__account-name { }      /* User display name */
.menu__account-menu { }      /* ActionMenu wrapper */`}</code>
              </pre>
            </div>
          </div>

          {/* Complete Example */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Complete Example</h2>
            <p className="demo-group__description">
              A full application setup with the Menu sidebar, data-driven
              navigation, brand/mode persistence, and React Router integration.
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
                <h3 className="menu-demo__practice-title">✓ Do</h3>
                <ul className="menu-demo__practice-list">
                  <li>Define your navigation structure as a JSON array and pass it via the <code>navigation</code> prop</li>
                  <li>Place the Menu in a fixed sidebar alongside your main content area</li>
                  <li>Persist brand and mode selections in <code>localStorage</code></li>
                  <li>Set <code>data-brand</code> and <code>data-mode</code> attributes on the root element for theming</li>
                  <li>Use React Router for navigation so active states work automatically</li>
                  <li>Keep navigation items alphabetically sorted within each section using <code>.sort()</code></li>
                  <li>Use <code>exact: true</code> for root paths like <code>"/"</code> to prevent false active matches</li>
                </ul>
              </div>
              <div className="menu-demo__practice menu-demo__practice--dont">
                <h3 className="menu-demo__practice-title">✗ Don&apos;t</h3>
                <ul className="menu-demo__practice-list">
                  <li>Don&apos;t render multiple Menu instances on the same page</li>
                  <li>Don&apos;t use outside of a React Router context — it depends on <code>useLocation</code> and <code>NavLink</code></li>
                  <li>Don&apos;t forget to import the required CSS tokens and styles</li>
                  <li>Don&apos;t nest the Menu inside scrollable containers — it should be a fixed sidebar</li>
                  <li>Don&apos;t hardcode navigation items inside the Menu — always pass them via the <code>navigation</code> prop</li>
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
