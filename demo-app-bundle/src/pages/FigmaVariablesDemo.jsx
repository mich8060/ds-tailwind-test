import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Divider from "../ui/Divider/Divider";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import { formatLastUpdated } from "../utils/formatDate";
import Flex from "../ui/Flex/Flex";
import CopyButton from "../ui/CopyButton/CopyButton";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-jsx";
import "./FigmaVariablesDemo.scss";

function FigmaVariablesDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect(() => {
    const loadData = async () => {
      try {
        // Try to load from the data file
        const response = await fetch("/data/figma-variables.json");
        
        // Check if response is actually JSON
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error(
            "Data file not found. Please run: npm run fetch:variables"
          );
        }
        
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`);
        }
        
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        console.error("Error loading Figma variables:", err);
        // Check if it's a JSON parse error (likely HTML 404 page)
        if (err.message.includes("JSON") || err.message.includes("<!DOCTYPE")) {
          setError("Data file not found. Please run the fetch script first.");
        } else {
          setError(err.message);
        }
        setLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [loading, data]);

  const filteredVariables = useMemo(() => {
    if (!data || !data.variables) return [];

    // Only include variables that start with "uds/"
    let filtered = data.variables.filter((v) => {
      const name = v.name || "";
      return name.toLowerCase().startsWith("uds/");
    });

    // Filter by collection
    if (selectedCollection !== "all") {
      // Try matching by collectionId first
      let collectionMatch = filtered.filter(
        (v) => v.collectionId === selectedCollection,
      );
      
      // If no matches by ID, try matching by collection name (for inferred collections)
      if (collectionMatch.length === 0) {
        const selectedCollectionObj = data.collections.find(
          (c) => c.id === selectedCollection
        );
        if (selectedCollectionObj) {
          const collectionName = selectedCollectionObj.name;
          // Match variables by prefix (e.g., "uds/icon/primary" matches collection "uds")
          collectionMatch = filtered.filter((v) => {
            const name = v.name || "";
            const parts = name.split("/");
            return parts.length > 0 && parts[0] === collectionName;
          });
        }
      }
      
      filtered = collectionMatch;
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (v) =>
          v.name.toLowerCase().includes(term) ||
          v.type.toLowerCase().includes(term) ||
          (v.description && v.description.toLowerCase().includes(term)),
      );
    }

    return filtered;
  }, [data, selectedCollection, searchTerm]);

  // Group variables by their path prefix (e.g., "uds/icon", "uds/color/primary")
  const groupedVariables = useMemo(() => {
    if (!filteredVariables || filteredVariables.length === 0) return {};

    const groups = {};

    filteredVariables.forEach((variable) => {
      const name = variable.name || "";
      const parts = name.split("/").filter(Boolean);
      
      if (parts.length === 0) {
        // Variables without a path go to "root"
        if (!groups["root"]) {
          groups["root"] = [];
        }
        groups["root"].push(variable);
      } else if (parts.length === 1) {
        // Single segment - group by that segment
        const groupKey = parts[0];
        if (!groups[groupKey]) {
          groups[groupKey] = [];
        }
        groups[groupKey].push(variable);
      } else {
        // Multiple segments - group by all but the last segment
        // e.g., "uds/icon/primary" -> group "uds/icon"
        // e.g., "uds/color/primary/500" -> group "uds/color/primary"
        const groupKey = parts.slice(0, -1).join("/");
        if (!groups[groupKey]) {
          groups[groupKey] = [];
        }
        groups[groupKey].push(variable);
      }
    });

    // Sort groups by name for consistent display
    const sortedGroups = {};
    Object.keys(groups)
      .sort((a, b) => {
        // Sort "root" to the end
        if (a === "root") return 1;
        if (b === "root") return -1;
        return a.localeCompare(b);
      })
      .forEach((key) => {
        sortedGroups[key] = groups[key];
      });

    return sortedGroups;
  }, [filteredVariables]);

  const isColorValue = (value) => {
    if (typeof value !== "string") return false;
    return (
      /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/i.test(value.trim()) ||
      /^rgba?\(/.test(value.trim())
    );
  };

  const getColorValue = (value) => {
    if (typeof value !== "string") return null;
    if (isColorValue(value)) {
      return value.trim();
    }
    return null;
  };

  const VariableValue = ({ value, type, variableName }) => {
    // Handle null/undefined values
    if (value === null || value === undefined) {
      return <span className="variable-value text-muted">—</span>;
    }

    // Handle object values (e.g. Figma variable aliases like {type, id})
    if (typeof value === "object" && value !== null) {
      if (value.type === "VARIABLE_ALIAS" || value.id) {
        return (
          <span className="variable-value variable-value--text">
            <code style={{ fontSize: 12, opacity: 0.7 }}>→ {value.id || JSON.stringify(value)}</code>
          </span>
        );
      }
      // Fallback for any other object shape
      return (
        <span className="variable-value variable-value--text">
          <code style={{ fontSize: 12, opacity: 0.7 }}>{JSON.stringify(value)}</code>
        </span>
      );
    }

    const colorValue = getColorValue(value);

    if (colorValue) {
      return (
        <div className="variable-value variable-value--color">
          <span
            className="variable-value__swatch"
            style={{ backgroundColor: colorValue }}
          />
          <span className="variable-value__text">{value}</span>
        </div>
      );
    }

    if (type === "BOOLEAN") {
      return (
        <span className="variable-value variable-value--boolean">
          {value ? "true" : "false"}
        </span>
      );
    }

    if (type === "NUMBER" || type === "FLOAT") {
      // Add px units for spacing, sizing, blur, border-width, gap, and radius variables
      let displayValue = value;
      if (variableName && typeof value === "number") {
        const varLower = variableName.toLowerCase();
        // Exclude typography-related variables
        const isTypography = ['font', 'line', 'letter', 'typography', 'lhu', 'paragraph', 'heading', 'body', 'display', 'label'].some(term => varLower.includes(term));
        // Check for border-width (can be border/width or border-width)
        const hasBorderWidth = (varLower.includes('border') && varLower.includes('width')) || varLower.includes('border-width');
        // Include variables that need px units
        const needsPx = ['spacing', 'sizing', 'blur', 'gap', 'radius'].some(term => varLower.includes(term)) || hasBorderWidth;
        
        if (!isTypography && needsPx) {
          displayValue = `${value}px`;
        }
      }
      return (
        <span className="variable-value variable-value--number">{displayValue}</span>
      );
    }

    return <span className="variable-value variable-value--text">{String(value)}</span>;
  };

  // Render the CSS Tokens usage documentation section
  const renderTokensUsage = () => (
    <div className="page__examples-section">
      <div className="demo-group">
        <h2 className="demo-group__heading">What are Design Tokens?</h2>
        <p className="demo-group__description">
          Design tokens are CSS custom properties (variables) that store design decisions 
          like colors, spacing, typography, and more. They ensure consistency across your 
          application and make it easy to update the design system.
        </p>
      </div>

      <div className="demo-group">
        <h2 className="demo-group__heading">Basic Usage</h2>
        <p className="demo-group__description">
          Reference tokens in your CSS using the <code>var()</code> function:
        </p>
        <div className="figma-variables-demo__code-block-wrapper">
          <CopyButton
            codeString={`.my-component {
  color: var(--uds-text-primary);
  background: var(--uds-surface-primary);
  padding: var(--uds-spacing-16);
  border-radius: var(--uds-radius-8);
  border: var(--uds-border-width-1) solid var(--uds-border-primary);
}`}
          />
          <pre className="figma-variables-demo__code-block">
            <code className="language-css">{`.my-component {
  color: var(--uds-text-primary);
  background: var(--uds-surface-primary);
  padding: var(--uds-spacing-16);
  border-radius: var(--uds-radius-8);
  border: var(--uds-border-width-1) solid var(--uds-border-primary);
}`}</code>
          </pre>
        </div>
      </div>

      <div className="demo-group">
        <h2 className="demo-group__heading">Token Categories</h2>

        <div style={{ marginTop: "16px" }}>
          <h3 className="uds-heading-20-semibold" style={{ marginBottom: "12px" }}>Colors</h3>
          <p className="uds-body-16" style={{ marginBottom: "12px" }}>
            Color tokens follow this naming pattern:
          </p>
          <ul className="uds-body-16" style={{ marginLeft: "24px", marginBottom: "16px" }}>
            <li><code>--uds-color-primary-*</code> — Primary brand colors</li>
            <li><code>--uds-color-secondary-*</code> — Secondary brand colors</li>
            <li><code>--uds-text-*</code> — Text colors</li>
            <li><code>--uds-surface-*</code> — Background/surface colors</li>
            <li><code>--uds-border-*</code> — Border colors</li>
          </ul>
          <div className="figma-variables-demo__code-block-wrapper">
            <CopyButton
              codeString={`.card {
  background: var(--uds-surface-primary);
  color: var(--uds-text-primary);
  border: var(--uds-border-width-1) solid var(--uds-border-primary);
}`}
            />
            <pre className="figma-variables-demo__code-block">
              <code className="language-css">{`.card {
  background: var(--uds-surface-primary);
  color: var(--uds-text-primary);
  border: var(--uds-border-width-1) solid var(--uds-border-primary);
}`}</code>
            </pre>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          <h3 className="uds-heading-20-semibold" style={{ marginBottom: "12px" }}>Spacing</h3>
          <p className="uds-body-16" style={{ marginBottom: "12px" }}>
            Spacing tokens use the pattern <code>--uds-spacing-{`{size}`}</code>:
          </p>
          <div className="figma-variables-demo__code-block-wrapper">
            <CopyButton
              codeString={`.container {
  padding: var(--uds-spacing-16);
  margin: var(--uds-spacing-24);
  gap: var(--uds-spacing-8);
}`}
            />
            <pre className="figma-variables-demo__code-block">
              <code className="language-css">{`.container {
  padding: var(--uds-spacing-16);
  margin: var(--uds-spacing-24);
  gap: var(--uds-spacing-8);
}`}</code>
            </pre>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          <h3 className="uds-heading-20-semibold" style={{ marginBottom: "12px" }}>Typography</h3>
          <p className="uds-body-16" style={{ marginBottom: "12px" }}>
            Typography tokens include font size, line height, and weight:
          </p>
          <div className="figma-variables-demo__code-block-wrapper">
            <CopyButton
              codeString={`.custom-text {
  font-family: var(--uds-font-family);
  font-size: var(--uds-font-size-16);
  line-height: var(--uds-line-16);
  font-weight: var(--uds-font-weight-semibold);
}`}
            />
            <pre className="figma-variables-demo__code-block">
              <code className="language-css">{`.custom-text {
  font-family: var(--uds-font-family);
  font-size: var(--uds-font-size-16);
  line-height: var(--uds-line-16);
  font-weight: var(--uds-font-weight-semibold);
}`}</code>
            </pre>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          <h3 className="uds-heading-20-semibold" style={{ marginBottom: "12px" }}>Border Radius</h3>
          <p className="uds-body-16" style={{ marginBottom: "12px" }}>
            Border radius tokens: <code>--uds-radius-{`{size}`}</code>
          </p>
          <div className="figma-variables-demo__code-block-wrapper">
            <CopyButton
              codeString={`.rounded {
  border-radius: var(--uds-radius-8);
}

.rounded-lg {
  border-radius: var(--uds-radius-12);
}`}
            />
            <pre className="figma-variables-demo__code-block">
              <code className="language-css">{`.rounded {
  border-radius: var(--uds-radius-8);
}

.rounded-lg {
  border-radius: var(--uds-radius-12);
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="demo-group">
        <h2 className="demo-group__heading">Brand and Theme Switching</h2>
        <p className="demo-group__description">
          Tokens automatically adapt based on the <code>data-brand</code> and <code>data-mode</code>{" "}
          attributes on your root HTML element.
        </p>
        <div className="figma-variables-demo__code-block-wrapper">
          <CopyButton
            codeString={`<!-- Light mode, default brand -->
<html data-brand="design-system" data-mode="light">

<!-- Dark mode, CompHealth brand -->
<html data-brand="comphealth" data-mode="dark">`}
          />
          <pre className="figma-variables-demo__code-block">
            <code className="language-markup">{`<!-- Light mode, default brand -->
<html data-brand="design-system" data-mode="light">

<!-- Dark mode, CompHealth brand -->
<html data-brand="comphealth" data-mode="dark">`}</code>
          </pre>
        </div>
        <p className="uds-body-14" style={{ marginTop: "16px", color: "var(--uds-text-secondary)" }}>
          When you change these attributes, all tokens automatically update to match the selected 
          brand and theme. No code changes needed!
        </p>
      </div>

      <div className="demo-group">
        <h2 className="demo-group__heading">Inline Styles (React)</h2>
        <p className="demo-group__description">
          You can also use tokens directly in inline styles:
        </p>
        <div className="figma-variables-demo__code-block-wrapper">
          <CopyButton
            codeString={`<div style={{
  color: 'var(--uds-text-primary)',
  padding: 'var(--uds-spacing-16)',
  background: 'var(--uds-surface-secondary)'
}}>
  Content
</div>`}
          />
          <pre className="figma-variables-demo__code-block">
            <code className="language-jsx">{`<div style={{
  color: 'var(--uds-text-primary)',
  padding: 'var(--uds-spacing-16)',
  background: 'var(--uds-surface-secondary)'
}}>
  Content
</div>`}</code>
          </pre>
        </div>
      </div>

      <div className="demo-group">
        <h2 className="demo-group__heading">Animation Tokens</h2>
        <p className="demo-group__description">
          Use animation tokens for consistent motion:
        </p>
        <div className="figma-variables-demo__code-block-wrapper">
          <CopyButton
            codeString={`.animated-element {
  transition: all var(--uds-animation-duration-200) var(--uds-animation-ease-standard);
}

.animated-element:hover {
  transform: scale(1.05);
}`}
          />
          <pre className="figma-variables-demo__code-block">
            <code className="language-css">{`.animated-element {
  transition: all var(--uds-animation-duration-200) var(--uds-animation-ease-standard);
}

.animated-element:hover {
  transform: scale(1.05);
}`}</code>
          </pre>
        </div>
      </div>

      <div className="demo-group">
        <h2 className="demo-group__heading">Button Tokens</h2>
        <p className="demo-group__description">
          Button-specific tokens for consistent button styling:
        </p>
        <div className="figma-variables-demo__code-block-wrapper">
          <CopyButton
            codeString={`.custom-button {
  background: var(--uds-button-surface-primary-default);
  color: var(--uds-button-text-default);
  border: var(--uds-border-width-1) solid var(--uds-button-border-primary-default);
}

.custom-button:hover {
  background: var(--uds-button-surface-primary-hover);
  border-color: var(--uds-button-border-primary-hover);
}`}
          />
          <pre className="figma-variables-demo__code-block">
            <code className="language-css">{`.custom-button {
  background: var(--uds-button-surface-primary-default);
  color: var(--uds-button-text-default);
  border: var(--uds-border-width-1) solid var(--uds-button-border-primary-default);
}

.custom-button:hover {
  background: var(--uds-button-surface-primary-hover);
  border-color: var(--uds-button-border-primary-hover);
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="figma-variables-demo">
        <div className="figma-variables-demo__loading">Loading variables...</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div>
        <header className="page__header">
          <div className="page__header-container">
            <Breadcrumb />
            <div className="page__header-info">
              <div className="page__header-content">
                <h1 className="page__header-title">Design Tokens</h1>
                <p className="page__header-description">
                  Design tokens are the building blocks of the design system — CSS custom properties
                  that store colors, spacing, typography, and more. They ensure consistency and
                  enable brand theming across your application.
                </p>
              </div>
              <div className="page__header-metadata">
                <div className="page__metadata-row">
                  <p className="page__metadata-label">Last updated</p>
                  <p className="page__metadata-value">{formatLastUpdated()}</p>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="page__content">
          {renderTokensUsage()}

          <Divider variant="solid" />

          <div className="page__examples-section" style={{ marginTop: "var(--uds-spacing-32)" }}>
            <div className="demo-group">
              <h2 className="demo-group__heading">Figma Variables</h2>
              <p className="demo-group__description">
                Explore all published design variables from Figma below.
              </p>
            </div>
          </div>

          <div className="figma-variables-demo">
            <div className="figma-variables-demo__error">
              <h2>No Data Available</h2>
              <p>{error || "Failed to load variables."}</p>
              <br />
              <div className="figma-variables-demo__instructions">
                <h3>To fetch variables from Figma:</h3>
                <ol>
                  <li>
                    Make sure you have a <code>FIGMA_ACCESS_TOKEN</code> in your <code>.env</code> file
                  </li>
                  <li>
                    Run the fetch script:
                    <pre>
                      <code>npm run fetch:variables</code>
                    </pre>
                    Or:
                    <pre>
                      <code>node scripts/fetch-figma-variables.js</code>
                    </pre>
                  </li>
                  <li>Refresh this page to see the variables</li>
                </ol>
                <p>
                  <strong>Note:</strong> The script will fetch variables from the Figma file and save them to{" "}
                  <code>public/data/figma-variables.json</code>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <header className="page__header">
        <div className="page__header-container">
          <Breadcrumb />
          <div className="page__header-info">
            <div className="page__header-content">
              <h1 className="page__header-title">Design Tokens</h1>
              <p className="page__header-description">
                Design tokens are the building blocks of the design system — CSS custom properties
                that store colors, spacing, typography, and more. They ensure consistency and
                enable brand theming across your application.
              </p>
            </div>
            <div className="page__header-metadata">
              <div className="page__metadata-row">
                <p className="page__metadata-label">File Key</p>
                <p className="page__metadata-value">{data.fileKey}</p>
              </div>
              <div className="page__metadata-row">
                <p className="page__metadata-label">Last fetched</p>
                <p className="page__metadata-value">
                  {new Date(data.fetchedAt).toLocaleString()}
                </p>
              </div>
              <div className="page__metadata-row">
                <p className="page__metadata-label">Total Variables</p>
                <p className="page__metadata-value">{data.stats.total}</p>
              </div>
              <div className="page__metadata-row">
                <p className="page__metadata-label">Collections</p>
                <p className="page__metadata-value">{data.stats.collections}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="page__content">
        {renderTokensUsage()}

        <Divider variant="solid" />

        <div className="page__examples-section" style={{ marginTop: "var(--uds-spacing-32)" }}>
          <div className="demo-group">
            <h2 className="demo-group__heading">Figma Variables</h2>
            <p className="demo-group__description">
              Explore all published design variables from Figma below. Use the collection filter and search to find specific tokens.
            </p>
          </div>
        </div>

        <div className="page__tabs-content-container">
          <div className="figma-variables-demo__filters">
            <div className="figma-variables-demo__filter-group">
              <label htmlFor="collection-filter" className="figma-variables-demo__filter-label">
                Collection:
              </label>
              <select
                id="collection-filter"
                className="figma-variables-demo__filter-select"
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
              >
                <option value="all">All Collections</option>
                {data.collections && data.collections.length > 0 && data.collections.map((collection) => (
                  <option key={collection.id} value={collection.id}>
                    {collection.name} ({collection.variableCount || 0})
                  </option>
                ))}
              </select>
            </div>
            <div className="figma-variables-demo__filter-group">
              <label htmlFor="search-filter" className="figma-variables-demo__filter-label">
                Search:
              </label>
              <input
                id="search-filter"
                type="text"
                className="figma-variables-demo__filter-input"
                placeholder="Search by name, type, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="figma-variables-demo__stats">
            <p>
              Showing {filteredVariables.length} of {data.stats.total} variables
            </p>
          </div>

          {Object.keys(groupedVariables).length === 0 ? (
            <div className="figma-variables-demo__table-wrapper">
              <div className="figma-variables-table__empty">
                No variables found matching your filters.
              </div>
            </div>
          ) : (
            Object.entries(groupedVariables).map(([groupName, variables]) => {
              const displayName = groupName === "root" ? "Root Variables" : groupName;
              
              return (
                <div key={groupName} className="figma-variables-group">
                  <h3 className="figma-variables-group__title">
                    {displayName} <span className="figma-variables-group__count">({variables.length})</span>
                  </h3>
                  <div className="figma-variables-demo__table-wrapper">
                    <table className="figma-variables-table">
                      <thead>
                        <tr>
                          <th className="figma-variables-table__header figma-variables-table__header--name">
                            Name
                          </th>
                          <th className="figma-variables-table__header figma-variables-table__header--mode">
                            Light
                          </th>
                          <th className="figma-variables-table__header figma-variables-table__header--mode">
                            Dark
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {variables.map((variable) => {
                          const lightMode = variable.modes?.find(
                            (m) => m.name.toLowerCase() === "light"
                          );
                          const darkMode = variable.modes?.find(
                            (m) => m.name.toLowerCase() === "dark"
                          );
                          
                          const lightValue = variable.valuesByModeName?.light || 
                            (lightMode ? variable.valuesByMode?.[lightMode.modeId] : null) || 
                            variable.value;
                          const darkValue = variable.valuesByModeName?.dark || 
                            (darkMode ? variable.valuesByMode?.[darkMode.modeId] : null) || 
                            variable.value;

                          return (
                            <tr key={variable.id} className="figma-variables-table__row">
                              <td className="figma-variables-table__cell figma-variables-table__cell--name">
                                <code>{variable.name}</code>
                              </td>
                              <td className="figma-variables-table__cell figma-variables-table__cell--mode">
                                <VariableValue value={lightValue} type={variable.type} variableName={variable.name} />
                              </td>
                              <td className="figma-variables-table__cell figma-variables-table__cell--mode">
                                <VariableValue value={darkValue} type={variable.type} variableName={variable.name} />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}

export default FigmaVariablesDemo;
