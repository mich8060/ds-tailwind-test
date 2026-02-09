import React, { useEffect } from "react";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import Flex from "../ui/Flex/Flex";
import Tag from "../ui/Tag/Tag";
import { formatLastUpdated } from "../utils/formatDate";
import CopyButton from "../ui/CopyButton/CopyButton";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-javascript";
import "./SpacingDemo.scss";

const CodeBlock = ({ code, language = "css" }) => {
  return (
    <div className="spacing__code-wrapper">
      <CopyButton textToCopy={code} />
      <pre className="spacing__code-block">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const TSHIRT_SIZES = [
  {
    name: "3XS",
    token: "--uds-spacing-2",
    px: 2,
    usage: "Hairline offsets, border compensation, optical adjustments",
    contexts: ["Border offsets", "Sub-pixel corrections"],
    frequencyLabel: "Rare",
    frequencyColor: "red",
  },
  {
    name: "2XS",
    token: "--uds-spacing-4",
    px: 4,
    usage: "Tight internal spacing, icon insets, badge offsets",
    contexts: ["Icon padding", "Badge offsets", "Inline element margins", "Chip internal spacing"],
    frequencyLabel: "Frequent",
    frequencyColor: "indigo",
  },
  {
    name: "XS",
    token: "--uds-spacing-8",
    px: 8,
    usage: "Icon-to-label gaps, compact element padding, tight stack spacing",
    contexts: ["Icon label gaps", "Small button padding", "Tight list items", "Inline group gaps"],
    frequencyLabel: "Common",
    frequencyColor: "sky",
  },
  {
    name: "SM",
    token: "--uds-spacing-12",
    px: 12,
    usage: "Default component internal padding — the most-used value in UDS",
    contexts: ["Input vertical padding", "Button vertical padding", "Dropdown item padding", "Tag/chip padding"],
    frequencyLabel: "Frequent",
    frequencyColor: "indigo",
  },
  {
    name: "MD",
    token: "--uds-spacing-16",
    px: 16,
    usage: "Standard padding & gaps, form field spacing, stacked item spacing",
    contexts: ["Form field gaps", "Card body padding", "Stack spacing", "Menu item padding"],
    frequencyLabel: "Frequent",
    frequencyColor: "indigo",
  },
  {
    name: "LG",
    token: "--uds-spacing-24",
    px: 24,
    usage: "Card padding, grid/card gaps, section title margins",
    contexts: ["Card padding", "Grid gaps", "Section title margins", "Button horizontal padding"],
    frequencyLabel: "Common",
    frequencyColor: "sky",
  },
  {
    name: "XL",
    token: "--uds-spacing-32",
    px: 32,
    usage: "Modal padding, large section separation, sidebar padding",
    contexts: ["Modal body padding", "Sidebar section spacing", "Large section gap"],
    frequencyLabel: "Common",
    frequencyColor: "sky",
  },
  {
    name: "2XL",
    token: "--uds-spacing-48",
    px: 48,
    usage: "Page-level content padding, major section dividers",
    contexts: ["Page content padding", "Section-to-section spacing", "Header padding"],
    frequencyLabel: "Rare",
    frequencyColor: "red",
  },
  {
    name: "3XL",
    token: "--uds-spacing-64",
    px: 64,
    usage: "Large page section separation, layout region spacing",
    contexts: ["Major page section dividers", "Layout region margins"],
    frequencyLabel: "Rare",
    frequencyColor: "red",
  },
  {
    name: "4XL",
    token: "--uds-spacing-80",
    px: 80,
    usage: "Full page header padding, hero section spacing",
    contexts: ["Page header padding", "Hero/banner vertical padding"],
    frequencyLabel: "Rare",
    frequencyColor: "red",
  },
];

const SPACING_TOKENS = [
  { token: "--uds-spacing-0", px: 0 },
  { token: "--uds-spacing-2", px: 2 },
  { token: "--uds-spacing-4", px: 4 },
  { token: "--uds-spacing-6", px: 6 },
  { token: "--uds-spacing-8", px: 8 },
  { token: "--uds-spacing-10", px: 10 },
  { token: "--uds-spacing-12", px: 12 },
  { token: "--uds-spacing-14", px: 14 },
  { token: "--uds-spacing-16", px: 16 },
  { token: "--uds-spacing-18", px: 18 },
  { token: "--uds-spacing-24", px: 24 },
  { token: "--uds-spacing-32", px: 32 },
  { token: "--uds-spacing-48", px: 48 },
  { token: "--uds-spacing-64", px: 64 },
  { token: "--uds-spacing-80", px: 80 },
];

const GAP_TOKENS = [
  { token: "--uds-gap-0", px: 0 },
  { token: "--uds-gap-2", px: 2 },
  { token: "--uds-gap-4", px: 4 },
  { token: "--uds-gap-8", px: 8 },
  { token: "--uds-gap-12", px: 12 },
  { token: "--uds-gap-16", px: 16 },
  { token: "--uds-gap-24", px: 24 },
  { token: "--uds-gap-32", px: 32 },
];


export default function SpacingDemo() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="page spacing-demo">
      <header className="page__header">
        <div className="page__header-container">
          <Breadcrumb />
          <div className="page__header-info">
            <div className="page__header-content">
              <h1 className="page__header-title">Spacing</h1>
              <p className="page__header-description">
                A unified spacing system built on a <strong>4px baseline grid</strong> with
                t-shirt sizes derived from real component usage across the design system.
                Use spacing tokens for all padding, margins, and gaps.
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

      <main className="page__content spacing__main">

        {/* ── T-Shirt Sizing System ── */}
        <section className="spacing__section">
          <h2 className="spacing__section-title">T-Shirt Sizing System</h2>
          <p className="spacing__text">
            Based on an analysis of spacing usage across all UDS components, we've defined a
            t-shirt sizing scale that maps human-readable names to our spacing tokens. These
            sizes represent the <strong>actual frequency and context</strong> of how spacing
            is used in production components.
          </p>

          <div className="spacing__tshirt-grid">
            {TSHIRT_SIZES.map((size) => (
              <div key={size.name} className="spacing__tshirt-card">
                <div className="spacing__tshirt-header">
                  <span className="spacing__tshirt-name">{size.name}</span>
                  <Tag
                    label={size.frequencyLabel}
                    color={size.frequencyColor}
                    solid
                    rounded={false}
                    size="default"
                  />
                </div>
                <div className="spacing__tshirt-measure">
                  <div
                    className="spacing__tshirt-bar"
                    style={{ width: `${Math.max(size.px, 2)}px` }}
                  />
                  <span className="spacing__tshirt-px">{size.px}px</span>
                </div>
                <p className="spacing__tshirt-usage">{size.usage}</p>
                <div className="spacing__tshirt-contexts">
                  {size.contexts.map((ctx, i) => (
                    <Tag
                      key={i}
                      label={ctx}
                      color="neutral"
                      solid
                      rounded={false}
                      size="default"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider variant="solid" />

        {/* ── When to Use Each Size ── */}
        <section className="spacing__section">
          <h2 className="spacing__section-title">When to Use Each Size</h2>
          <p className="spacing__text">
            This reference maps common design patterns to the recommended t-shirt size.
            Values were derived by averaging actual spacing usage across all UDS components.
          </p>

          <div className="spacing__usage-table-wrapper">
            <table className="spacing__table">
              <thead>
                <tr>
                  <th>Size</th>
                  <th>Token</th>
                  <th>Value</th>
                  <th>Use For</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="spacing__size-badge">3XS</span></td>
                  <td><code>--uds-spacing-2</code></td>
                  <td>2px</td>
                  <td>Optical adjustments</td>
                  <td>Border offsets, focus ring compensation, sub-pixel nudges</td>
                </tr>
                <tr>
                  <td><span className="spacing__size-badge">2XS</span></td>
                  <td><code>--uds-spacing-4</code></td>
                  <td>4px</td>
                  <td>Micro spacing</td>
                  <td>Icon insets, badge positioning, tight inline gaps, tooltip offsets</td>
                </tr>
                <tr>
                  <td><span className="spacing__size-badge spacing__size-badge--popular">XS</span></td>
                  <td><code>--uds-spacing-8</code></td>
                  <td>8px</td>
                  <td>Tight element spacing</td>
                  <td>Icon ↔ label gap, small button padding, compact list spacing</td>
                </tr>
                <tr className="spacing__table-row--highlight">
                  <td><span className="spacing__size-badge spacing__size-badge--most-used">SM</span></td>
                  <td><code>--uds-spacing-12</code></td>
                  <td>12px</td>
                  <td>Component internal padding</td>
                  <td>Input padding, button vertical padding, dropdown items, tag padding</td>
                </tr>
                <tr className="spacing__table-row--highlight">
                  <td><span className="spacing__size-badge spacing__size-badge--popular">MD</span></td>
                  <td><code>--uds-spacing-16</code></td>
                  <td>16px</td>
                  <td>Standard padding & gaps</td>
                  <td>Form field gaps, card body padding, stacked items, menu padding</td>
                </tr>
                <tr>
                  <td><span className="spacing__size-badge spacing__size-badge--popular">LG</span></td>
                  <td><code>--uds-spacing-24</code></td>
                  <td>24px</td>
                  <td>Container padding & grid gaps</td>
                  <td>Card padding, grid gaps, section title margins, button horizontal padding</td>
                </tr>
                <tr>
                  <td><span className="spacing__size-badge">XL</span></td>
                  <td><code>--uds-spacing-32</code></td>
                  <td>32px</td>
                  <td>Large section spacing</td>
                  <td>Modal padding, sidebar sections, large section gaps</td>
                </tr>
                <tr>
                  <td><span className="spacing__size-badge">2XL</span></td>
                  <td><code>--uds-spacing-48</code></td>
                  <td>48px</td>
                  <td>Page-level padding</td>
                  <td>Page content padding, section dividers, header padding</td>
                </tr>
                <tr>
                  <td><span className="spacing__size-badge">3XL</span></td>
                  <td><code>--uds-spacing-64</code></td>
                  <td>64px</td>
                  <td>Major layout separation</td>
                  <td>Major section dividers, layout region margins</td>
                </tr>
                <tr>
                  <td><span className="spacing__size-badge">4XL</span></td>
                  <td><code>--uds-spacing-80</code></td>
                  <td>80px</td>
                  <td>Hero / page header</td>
                  <td>Page header padding, hero banner spacing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="spacing__callout spacing__callout--info">
            <strong>Most-used sizes:</strong> <code>SM</code> (12px) and <code>MD</code> (16px)
            account for the majority of spacing across all UDS components. When in doubt,
            start with <code>SM</code> for internal component padding and <code>MD</code> for
            gaps between sibling elements.
          </div>
        </section>

        <Divider variant="solid" />

        {/* ── Quick Reference: Choosing a Size ── */}
        <section className="spacing__section">
          <h2 className="spacing__section-title">Quick Reference: Choosing a Size</h2>

          <div className="spacing__decision-grid">
            <div className="spacing__decision-card">
              <h4 className="spacing__decision-title">Inside a Component</h4>
              <p className="spacing__decision-description">Padding within buttons, inputs, dropdowns, tags, chips</p>
              <div className="spacing__decision-recommendation">
                <span className="spacing__size-badge spacing__size-badge--most-used">SM</span>
                <span>12px vertical</span>
              </div>
              <div className="spacing__decision-recommendation">
                <span className="spacing__size-badge spacing__size-badge--popular">MD – LG</span>
                <span>16–24px horizontal</span>
              </div>
            </div>

            <div className="spacing__decision-card">
              <h4 className="spacing__decision-title">Between Elements in a Group</h4>
              <p className="spacing__decision-description">Icon-to-label, stacked fields, inline actions</p>
              <div className="spacing__decision-recommendation">
                <span className="spacing__size-badge spacing__size-badge--popular">XS</span>
                <span>8px (icon gaps)</span>
              </div>
              <div className="spacing__decision-recommendation">
                <span className="spacing__size-badge spacing__size-badge--popular">MD</span>
                <span>16px (field gaps)</span>
              </div>
            </div>

            <div className="spacing__decision-card">
              <h4 className="spacing__decision-title">Between Sections</h4>
              <p className="spacing__decision-description">Card groups, content blocks, section dividers</p>
              <div className="spacing__decision-recommendation">
                <span className="spacing__size-badge spacing__size-badge--popular">LG</span>
                <span>24px (card grids)</span>
              </div>
              <div className="spacing__decision-recommendation">
                <span className="spacing__size-badge">2XL</span>
                <span>48px (sections)</span>
              </div>
            </div>

            <div className="spacing__decision-card">
              <h4 className="spacing__decision-title">Page-Level Layout</h4>
              <p className="spacing__decision-description">Page padding, hero sections, major content areas</p>
              <div className="spacing__decision-recommendation">
                <span className="spacing__size-badge">2XL</span>
                <span>48px (content area)</span>
              </div>
              <div className="spacing__decision-recommendation">
                <span className="spacing__size-badge">4XL</span>
                <span>80px (page headers)</span>
              </div>
            </div>
          </div>
        </section>

        <Divider variant="solid" />

        {/* ── Vertical Rhythm: The 4px Grid ── */}
        <section className="spacing__section">
          <h2 className="spacing__section-title">Vertical Rhythm</h2>
          <p className="spacing__text">
            All spacing values are multiples of our <strong>4px baseline grid</strong>. Like
            lines on ruled paper, the baseline grid provides invisible guidelines that
            maintain proportional spacing between text, images, and UI components.
          </p>

          <div className="spacing__visual">
            <div className="spacing__grid-demo">
              <div className="spacing__grid-lines">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="spacing__grid-line" />
                ))}
              </div>
              <div className="spacing__grid-content">
                <div className="spacing__grid-box" style={{ height: '16px' }}>
                  <span>MD – 16px (4×4)</span>
                </div>
                <div className="spacing__grid-box" style={{ height: '24px' }}>
                  <span>LG – 24px (4×6)</span>
                </div>
                <div className="spacing__grid-box" style={{ height: '32px' }}>
                  <span>XL – 32px (4×8)</span>
                </div>
                <div className="spacing__grid-box" style={{ height: '48px' }}>
                  <span>2XL – 48px (4×12)</span>
                </div>
              </div>
            </div>
            <p className="spacing__caption">Elements aligned to the 4px grid create visual harmony</p>
          </div>

          <h3 className="spacing__subsection-title">Why 4px?</h3>
          <div className="spacing__benefits">
            <div className="spacing__benefit">
              <h4 className="spacing__benefit-title">Mathematical Simplicity</h4>
              <p className="spacing__benefit-text">
                4 divides evenly into common screen sizes. It's also divisible by 2, making
                half-values (2px) possible for border and optical adjustments.
              </p>
            </div>
            <div className="spacing__benefit">
              <h4 className="spacing__benefit-title">Visual Clarity</h4>
              <p className="spacing__benefit-text">
                4px is small enough to be imperceptible as a unit, but large enough to create
                meaningful visual distinctions between spacing values.
              </p>
            </div>
            <div className="spacing__benefit">
              <h4 className="spacing__benefit-title">Screen Compatibility</h4>
              <p className="spacing__benefit-text">
                Scales cleanly to 2x and 3x retina displays without subpixel rendering issues.
              </p>
            </div>
            <div className="spacing__benefit">
              <h4 className="spacing__benefit-title">Design–Dev Alignment</h4>
              <p className="spacing__benefit-text">
                A consistent 4px grid makes handoff seamless — designers and developers speak
                the same spacing language.
              </p>
            </div>
          </div>
        </section>

        <Divider variant="solid" />

        {/* ── Token Reference ── */}
        <section className="spacing__section">
          <h2 className="spacing__section-title">All Spacing Tokens</h2>
          <p className="spacing__text">
            Visual reference of every spacing token with its pixel value. The t-shirt size
            mapping is shown for quick selection. Intermediate values (6, 10, 14, 18) are
            available but should be used sparingly.
          </p>

          <div className="spacing__token-list">
            {SPACING_TOKENS.map(({ token, px }) => {
              const tshirt = TSHIRT_SIZES.find((s) => s.token === token);
              return (
                <div key={token} className="spacing__token-row">
                  <div className="spacing__token-label-group">
                    {tshirt && (
                      <span className={`spacing__size-badge spacing__size-badge--inline ${tshirt.frequencyLevel >= 4 ? 'spacing__size-badge--popular' : ''}`}>
                        {tshirt.name}
                      </span>
                    )}
                    {!tshirt && <span className="spacing__size-badge spacing__size-badge--inline spacing__size-badge--intermediate">—</span>}
                    <span className="spacing__token-px">{px}px</span>
                  </div>
                  <div
                    className="spacing__token-bar"
                    style={{ width: px === 0 ? '2px' : `${Math.min(px * 2.5, 200)}px` }}
                  />
                  <code className="spacing__token-code">{token}</code>
                </div>
              );
            })}
          </div>

          <h3 className="spacing__subsection-title">Gap Tokens</h3>
          <p className="spacing__text">
            Gap tokens are used specifically with <code>gap</code> in flex and grid layouts.
            They mirror the core spacing values.
          </p>

          <div className="spacing__token-list">
            {GAP_TOKENS.map(({ token, px }) => (
              <div key={token} className="spacing__token-row">
                <div className="spacing__token-label-group">
                  <span className="spacing__token-px">{px}px</span>
                </div>
                <Flex direction="row" gap={String(px)} alignItems="center">
                  {[1, 2, 3].map((n) => (
                    <div key={n} className="spacing__gap-box" />
                  ))}
                </Flex>
                <code className="spacing__token-code">{token}</code>
              </div>
            ))}
          </div>
        </section>

        <Divider variant="solid" />

        {/* ── Using Spacing Tokens ── */}
        <section className="spacing__section">
          <h2 className="spacing__section-title">Using Spacing Tokens</h2>
          <p className="spacing__text">
            Always use spacing tokens rather than hardcoded pixel values. This ensures
            consistency and makes future adjustments easier.
          </p>

          <h3 className="spacing__subsection-title">CSS Custom Properties</h3>
          <CodeBlock
            code={`/* ✅ Do: Use spacing tokens */
.component {
  padding: var(--uds-spacing-12) var(--uds-spacing-24);  /* SM vertical, LG horizontal */
  margin-bottom: var(--uds-spacing-16);                   /* MD */
  gap: var(--uds-gap-8);                                  /* XS */
}

/* ❌ Don't: Use hardcoded values */
.component {
  padding: 12px 24px;
  margin-bottom: 16px;
  gap: 8px;
}`}
          />

          <h3 className="spacing__subsection-title">Component Internal Spacing</h3>
          <CodeBlock
            code={`/* Button — SM vertical, LG horizontal */
.uds-button {
  padding: var(--uds-spacing-12) var(--uds-spacing-24);
  gap: var(--uds-spacing-8);           /* XS: icon ↔ label */
}

/* Input — SM vertical, MD horizontal */
.uds-input {
  padding: var(--uds-spacing-12) var(--uds-spacing-16);
}

/* Card — LG all around */
.uds-card {
  padding: var(--uds-spacing-24);
}`}
          />

          <h3 className="spacing__subsection-title">Layout Spacing</h3>
          <CodeBlock
            code={`/* Page layout — 2XL padding */
.page-content {
  padding: var(--uds-spacing-48);
}

/* Section gap — LG between cards */
.card-grid {
  display: grid;
  gap: var(--uds-gap-24);
}

/* Form fields — MD between fields */
.form-stack {
  display: flex;
  flex-direction: column;
  gap: var(--uds-gap-16);
}`}
          />

          <h3 className="spacing__subsection-title">Typography & Line Height</h3>
          <p className="spacing__text">
            Line heights also follow the 4px grid. Our typography tokens are designed with
            line heights that maintain vertical rhythm:
          </p>
          <CodeBlock
            code={`/* Typography aligned to the 4px grid */
.heading-large  { font-size: 32px; line-height: 40px; }  /* 4 × 10 */
.heading-medium { font-size: 24px; line-height: 32px; }  /* 4 × 8  */
.body-text      { font-size: 16px; line-height: 24px; }  /* 4 × 6  */
.caption        { font-size: 12px; line-height: 16px; }  /* 4 × 4  */`}
          />
        </section>

        <Divider variant="solid" />

        {/* ── Intermediate Values & Exceptions ── */}
        <section className="spacing__section">
          <h2 className="spacing__section-title">Intermediate Values & Exceptions</h2>
          <p className="spacing__text">
            While the t-shirt sizes cover 95% of use cases, we provide intermediate tokens
            for edge cases. These should be used sparingly and documented in code comments.
          </p>

          <div className="spacing__exceptions">
            <div className="spacing__exception">
              <h4 className="spacing__exception-title">
                <span className="spacing__exception-badge">6 · 10 · 14 · 18</span>
                Intermediate Values
              </h4>
              <p className="spacing__exception-text">
                Available for specific component requirements where t-shirt sizes don't
                provide the right optical balance. Used in 10% of UDS components.
              </p>
              <CodeBlock
                code={`/* Available intermediate values */
--uds-spacing-6: 6px;    /* Between 2XS and XS */
--uds-spacing-10: 10px;  /* Between XS and SM */
--uds-spacing-14: 14px;  /* Between SM and MD */
--uds-spacing-18: 18px;  /* Between MD and LG */`}
              />
            </div>

            <div className="spacing__exception">
              <h4 className="spacing__exception-title">
                <span className="spacing__exception-badge">Optical</span>
                Optical Adjustments
              </h4>
              <p className="spacing__exception-text">
                Sometimes elements need 1–2px nudges for optical alignment. Use
                <code> --uds-spacing-2</code> (3XS) or CSS transforms for sub-pixel corrections.
              </p>
              <CodeBlock
                code={`/* Optical adjustment example */
.icon-button svg {
  transform: translateY(-1px); /* Visual centering */
}`}
              />
            </div>
          </div>

          <div className="spacing__callout spacing__callout--warning">
            <strong>When deviating from t-shirt sizes:</strong> Document the reason in a code
            comment. This helps maintain consistency and ensures exceptions don't
            proliferate unnecessarily.
          </div>
        </section>

        <Divider variant="solid" />

        {/* ── Debugging ── */}
        <section className="spacing__section">
          <h2 className="spacing__section-title">Debugging Vertical Rhythm</h2>
          <p className="spacing__text">
            Use this CSS snippet during development to visualize the 4px grid overlay:
          </p>
          <CodeBlock
            code={`/* Add to your dev environment to visualize the grid */
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 0, 0, 0.05) 1px,
    transparent 1px
  );
  background-size: 100% 4px;
  z-index: 9999;
}`}
          />
        </section>

        <Divider variant="solid" />

        {/* ── Summary ── */}
        <section className="spacing__section">
          <h2 className="spacing__section-title">Summary</h2>
          <div className="spacing__summary">
            <div className="spacing__summary-item">
              <span className="spacing__summary-check">✓</span>
              <span>Use t-shirt sizes (3XS → 4XL) to pick the right spacing for any context</span>
            </div>
            <div className="spacing__summary-item">
              <span className="spacing__summary-check">✓</span>
              <span>All values are 4px-grid-aligned — maintaining consistent vertical rhythm</span>
            </div>
            <div className="spacing__summary-item">
              <span className="spacing__summary-check">✓</span>
              <span><strong>SM</strong> (12px) and <strong>MD</strong> (16px) are your defaults — start there</span>
            </div>
            <div className="spacing__summary-item">
              <span className="spacing__summary-check">✓</span>
              <span>Always use spacing tokens — never hardcoded pixel values</span>
            </div>
            <div className="spacing__summary-item">
              <span className="spacing__summary-check">✓</span>
              <span>Intermediate values (6, 10, 14, 18px) are available but use sparingly</span>
            </div>
            <div className="spacing__summary-item">
              <span className="spacing__summary-check">✓</span>
              <span>Use the debug grid overlay to verify alignment during development</span>
            </div>
          </div>
        </section>

      </main>
    </section>
  );
}
