import React, { useEffect } from "react";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import { formatLastUpdated } from "../utils/formatDate";
import Flex from "../ui/Flex/Flex";
import Divider from "../ui/Divider/Divider";
import CopyButton from "../ui/CopyButton/CopyButton";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "./UtilitiesDemo.scss";

const CodeBlock = ({ code, language = "markup" }) => {
  return (
    <div className="utilities-demo__code-block-wrapper">
      <CopyButton textToCopy={code} />
      <pre className="utilities-demo__code-block">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

const UtilityTable = ({ utilities }) => {
  return (
    <div className="utilities-demo__table-wrapper">
      <table className="utilities-demo__table">
        <thead>
          <tr>
            <th>Class</th>
            <th>CSS Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {utilities.map((util, index) => (
            <tr key={index}>
              <td><code>{util.class}</code></td>
              <td><code>{util.property}</code></td>
              <td><code>{util.value}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function UtilitiesDemo() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="page utilities-demo">
      <header className="page__header">
        <div className="page__header-container">
          <Breadcrumb />
          <div className="page__header-info">
            <div className="page__header-content">
              <h1 className="page__header-title">Utility Classes</h1>
              <p className="page__header-description">
                Tailwind-inspired utility classes built on design tokens. These utilities provide
                quick access to common CSS patterns while maintaining consistency with your design
                system. All utilities automatically respect theme and brand settings.
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

      <main className="page__content utilities-demo__main">
        {/* Getting Started */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Getting Started</h2>
          <p className="utilities-demo__section-description">
            Utility classes are included automatically when you import <code>tokens.css</code> or <code>styles.css</code>. 
            Apply them directly to HTML elements using the <code>class</code> attribute.
          </p>
          
          <h3 className="utilities-demo__subsection-title">Installation</h3>
          <p className="utilities-demo__text">Import the design system styles in your application:</p>
          <CodeBlock 
            code={`// In your main App.js or index.js
import '@mich8060/chg-design-system/tokens.css';
import '@mich8060/chg-design-system/styles.css';`}
            language="javascript"
          />

          <h3 className="utilities-demo__subsection-title">Basic Usage</h3>
          <p className="utilities-demo__text">Combine utility classes to build layouts quickly:</p>
          <CodeBlock 
            code={`<div class="flex items-center gap-16 p-24 rounded-8 bg-surface-secondary">
  <img class="size-48 rounded-full" src="avatar.jpg" alt="User" />
  <div class="flex flex-col gap-4">
    <span class="text-16 font-semibold text-primary">John Doe</span>
    <span class="text-14 text-secondary">Software Engineer</span>
  </div>
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Display */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Display</h2>
          <p className="utilities-demo__section-description">
            Control how elements are rendered in the document flow. These utilities map directly to 
            the CSS <code>display</code> property.
          </p>

          <UtilityTable utilities={[
            { class: "block", property: "display", value: "block" },
            { class: "inline-block", property: "display", value: "inline-block" },
            { class: "inline", property: "display", value: "inline" },
            { class: "flex", property: "display", value: "flex" },
            { class: "inline-flex", property: "display", value: "inline-flex" },
            { class: "grid", property: "display", value: "grid" },
            { class: "inline-grid", property: "display", value: "inline-grid" },
            { class: "hidden", property: "display", value: "none" },
            { class: "contents", property: "display", value: "contents" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Examples</h3>
          <CodeBlock 
            code={`<!-- Block element -->
<div class="block w-full p-16 bg-surface-secondary">
  Block takes full width
</div>

<!-- Inline elements -->
<span class="inline bg-brand-primary-100 p-8">Inline</span>
<span class="inline bg-brand-primary-100 p-8">Elements</span>

<!-- Hidden (visually remove from page) -->
<div class="hidden">This content is not rendered</div>

<!-- Responsive display -->
<div class="hidden md:block">Only visible on medium screens and up</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Flexbox */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Flexbox</h2>
          <p className="utilities-demo__section-description">
            Flexbox utilities for creating flexible, responsive layouts. Use these to align, 
            distribute, and order elements within a container.
          </p>

          <h3 className="utilities-demo__subsection-title">Direction</h3>
          <p className="utilities-demo__text">Control the direction of flex items:</p>
          <UtilityTable utilities={[
            { class: "flex-row", property: "flex-direction", value: "row" },
            { class: "flex-row-reverse", property: "flex-direction", value: "row-reverse" },
            { class: "flex-col", property: "flex-direction", value: "column" },
            { class: "flex-col-reverse", property: "flex-direction", value: "column-reverse" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Wrap</h3>
          <p className="utilities-demo__text">Control whether flex items wrap:</p>
          <UtilityTable utilities={[
            { class: "flex-wrap", property: "flex-wrap", value: "wrap" },
            { class: "flex-wrap-reverse", property: "flex-wrap", value: "wrap-reverse" },
            { class: "flex-nowrap", property: "flex-wrap", value: "nowrap" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Justify Content</h3>
          <p className="utilities-demo__text">Distribute space along the main axis:</p>
          <UtilityTable utilities={[
            { class: "justify-start", property: "justify-content", value: "flex-start" },
            { class: "justify-end", property: "justify-content", value: "flex-end" },
            { class: "justify-center", property: "justify-content", value: "center" },
            { class: "justify-between", property: "justify-content", value: "space-between" },
            { class: "justify-around", property: "justify-content", value: "space-around" },
            { class: "justify-evenly", property: "justify-content", value: "space-evenly" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Align Items</h3>
          <p className="utilities-demo__text">Align items along the cross axis:</p>
          <UtilityTable utilities={[
            { class: "items-start", property: "align-items", value: "flex-start" },
            { class: "items-end", property: "align-items", value: "flex-end" },
            { class: "items-center", property: "align-items", value: "center" },
            { class: "items-baseline", property: "align-items", value: "baseline" },
            { class: "items-stretch", property: "align-items", value: "stretch" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Gap</h3>
          <p className="utilities-demo__text">Set spacing between flex/grid items using design tokens:</p>
          <UtilityTable utilities={[
            { class: "gap-0", property: "gap", value: "0" },
            { class: "gap-4", property: "gap", value: "var(--uds-spacing-4)" },
            { class: "gap-8", property: "gap", value: "var(--uds-spacing-8)" },
            { class: "gap-12", property: "gap", value: "var(--uds-spacing-12)" },
            { class: "gap-16", property: "gap", value: "var(--uds-spacing-16)" },
            { class: "gap-24", property: "gap", value: "var(--uds-spacing-24)" },
            { class: "gap-32", property: "gap", value: "var(--uds-spacing-32)" },
            { class: "gap-48", property: "gap", value: "var(--uds-spacing-48)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Flex Item Properties</h3>
          <UtilityTable utilities={[
            { class: "flex-1", property: "flex", value: "1 1 0%" },
            { class: "flex-auto", property: "flex", value: "1 1 auto" },
            { class: "flex-initial", property: "flex", value: "0 1 auto" },
            { class: "flex-none", property: "flex", value: "none" },
            { class: "grow", property: "flex-grow", value: "1" },
            { class: "grow-0", property: "flex-grow", value: "0" },
            { class: "shrink", property: "flex-shrink", value: "1" },
            { class: "shrink-0", property: "flex-shrink", value: "0" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Complete Example</h3>
          <CodeBlock 
            code={`<!-- Card layout with flexbox -->
<div class="flex flex-col gap-16 p-24 rounded-12 border border-primary">
  <!-- Header row -->
  <div class="flex items-center justify-between">
    <h3 class="text-18 font-semibold">Card Title</h3>
    <button class="flex items-center gap-8">
      <span>Options</span>
    </button>
  </div>
  
  <!-- Content -->
  <p class="text-14 text-secondary">
    Card content goes here with proper spacing.
  </p>
  
  <!-- Footer with actions -->
  <div class="flex items-center justify-end gap-12">
    <button class="px-16 py-8">Cancel</button>
    <button class="px-16 py-8 bg-brand-primary text-on-brand rounded-8">
      Confirm
    </button>
  </div>
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Grid */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Grid</h2>
          <p className="utilities-demo__section-description">
            CSS Grid utilities for creating complex two-dimensional layouts with precise control 
            over rows, columns, and item placement.
          </p>

          <h3 className="utilities-demo__subsection-title">Grid Template Columns</h3>
          <UtilityTable utilities={[
            { class: "grid-cols-1", property: "grid-template-columns", value: "repeat(1, minmax(0, 1fr))" },
            { class: "grid-cols-2", property: "grid-template-columns", value: "repeat(2, minmax(0, 1fr))" },
            { class: "grid-cols-3", property: "grid-template-columns", value: "repeat(3, minmax(0, 1fr))" },
            { class: "grid-cols-4", property: "grid-template-columns", value: "repeat(4, minmax(0, 1fr))" },
            { class: "grid-cols-6", property: "grid-template-columns", value: "repeat(6, minmax(0, 1fr))" },
            { class: "grid-cols-12", property: "grid-template-columns", value: "repeat(12, minmax(0, 1fr))" },
            { class: "grid-cols-none", property: "grid-template-columns", value: "none" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Grid Template Rows</h3>
          <UtilityTable utilities={[
            { class: "grid-rows-1", property: "grid-template-rows", value: "repeat(1, minmax(0, 1fr))" },
            { class: "grid-rows-2", property: "grid-template-rows", value: "repeat(2, minmax(0, 1fr))" },
            { class: "grid-rows-3", property: "grid-template-rows", value: "repeat(3, minmax(0, 1fr))" },
            { class: "grid-rows-4", property: "grid-template-rows", value: "repeat(4, minmax(0, 1fr))" },
            { class: "grid-rows-none", property: "grid-template-rows", value: "none" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Column Span</h3>
          <UtilityTable utilities={[
            { class: "col-span-1", property: "grid-column", value: "span 1 / span 1" },
            { class: "col-span-2", property: "grid-column", value: "span 2 / span 2" },
            { class: "col-span-3", property: "grid-column", value: "span 3 / span 3" },
            { class: "col-span-4", property: "grid-column", value: "span 4 / span 4" },
            { class: "col-span-6", property: "grid-column", value: "span 6 / span 6" },
            { class: "col-span-full", property: "grid-column", value: "1 / -1" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Grid Example</h3>
          <CodeBlock 
            code={`<!-- Responsive card grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
  <div class="p-24 rounded-12 bg-surface-secondary">Card 1</div>
  <div class="p-24 rounded-12 bg-surface-secondary">Card 2</div>
  <div class="p-24 rounded-12 bg-surface-secondary">Card 3</div>
  <div class="p-24 rounded-12 bg-surface-secondary">Card 4</div>
  <div class="p-24 rounded-12 bg-surface-secondary">Card 5</div>
  <div class="p-24 rounded-12 bg-surface-secondary">Card 6</div>
</div>

<!-- Dashboard layout with column spans -->
<div class="grid grid-cols-12 gap-16">
  <div class="col-span-8 p-24 bg-surface-secondary rounded-12">Main Content</div>
  <div class="col-span-4 p-24 bg-surface-secondary rounded-12">Sidebar</div>
  <div class="col-span-full p-24 bg-surface-secondary rounded-12">Full Width Footer</div>
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Spacing */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Spacing</h2>
          <p className="utilities-demo__section-description">
            Padding and margin utilities based on the 4px spacing scale from design tokens. 
            Use consistent spacing to create visual rhythm and hierarchy.
          </p>

          <h3 className="utilities-demo__subsection-title">Padding</h3>
          <p className="utilities-demo__text">
            Apply padding using <code>p-{'{size}'}</code> for all sides, or directional variants:
          </p>
          <UtilityTable utilities={[
            { class: "p-{size}", property: "padding", value: "var(--uds-spacing-{size})" },
            { class: "px-{size}", property: "padding-left/right", value: "var(--uds-spacing-{size})" },
            { class: "py-{size}", property: "padding-top/bottom", value: "var(--uds-spacing-{size})" },
            { class: "pt-{size}", property: "padding-top", value: "var(--uds-spacing-{size})" },
            { class: "pr-{size}", property: "padding-right", value: "var(--uds-spacing-{size})" },
            { class: "pb-{size}", property: "padding-bottom", value: "var(--uds-spacing-{size})" },
            { class: "pl-{size}", property: "padding-left", value: "var(--uds-spacing-{size})" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Available Spacing Values</h3>
          <div className="utilities-demo__spacing-grid">
            {[0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96].map(size => (
              <div key={size} className="utilities-demo__spacing-item">
                <code className="utilities-demo__spacing-class">p-{size}</code>
                <span className="utilities-demo__spacing-value">{size}px</span>
              </div>
            ))}
          </div>

          <h3 className="utilities-demo__subsection-title">Margin</h3>
          <p className="utilities-demo__text">
            Apply margin using <code>m-{'{size}'}</code> for all sides, or directional variants:
          </p>
          <UtilityTable utilities={[
            { class: "m-{size}", property: "margin", value: "var(--uds-spacing-{size})" },
            { class: "mx-{size}", property: "margin-left/right", value: "var(--uds-spacing-{size})" },
            { class: "my-{size}", property: "margin-top/bottom", value: "var(--uds-spacing-{size})" },
            { class: "mt-{size}", property: "margin-top", value: "var(--uds-spacing-{size})" },
            { class: "mr-{size}", property: "margin-right", value: "var(--uds-spacing-{size})" },
            { class: "mb-{size}", property: "margin-bottom", value: "var(--uds-spacing-{size})" },
            { class: "ml-{size}", property: "margin-left", value: "var(--uds-spacing-{size})" },
            { class: "mx-auto", property: "margin-left/right", value: "auto" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Space Between</h3>
          <p className="utilities-demo__text">
            Add spacing between child elements without affecting the container edges:
          </p>
          <UtilityTable utilities={[
            { class: "space-x-{size}", property: "margin-left (children)", value: "var(--uds-spacing-{size})" },
            { class: "space-y-{size}", property: "margin-top (children)", value: "var(--uds-spacing-{size})" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Spacing Examples</h3>
          <CodeBlock 
            code={`<!-- Card with internal spacing -->
<div class="p-24 bg-surface-secondary rounded-12">
  <h3 class="mb-8">Card Title</h3>
  <p class="mb-16">Card description with bottom margin.</p>
  <button class="px-16 py-8">Action</button>
</div>

<!-- Centered container -->
<div class="max-w-960 mx-auto px-24">
  Centered content with horizontal padding
</div>

<!-- Vertical stack with consistent spacing -->
<div class="space-y-16">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Horizontal items with spacing -->
<div class="flex space-x-12">
  <span>Tag 1</span>
  <span>Tag 2</span>
  <span>Tag 3</span>
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Sizing */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Sizing</h2>
          <p className="utilities-demo__section-description">
            Control width, height, and aspect ratio of elements. Sizing utilities support 
            fixed values, percentages, and viewport units.
          </p>

          <h3 className="utilities-demo__subsection-title">Width</h3>
          <UtilityTable utilities={[
            { class: "w-auto", property: "width", value: "auto" },
            { class: "w-full", property: "width", value: "100%" },
            { class: "w-screen", property: "width", value: "100vw" },
            { class: "w-min", property: "width", value: "min-content" },
            { class: "w-max", property: "width", value: "max-content" },
            { class: "w-fit", property: "width", value: "fit-content" },
            { class: "w-1/2", property: "width", value: "50%" },
            { class: "w-1/3", property: "width", value: "33.333%" },
            { class: "w-2/3", property: "width", value: "66.667%" },
            { class: "w-1/4", property: "width", value: "25%" },
            { class: "w-3/4", property: "width", value: "75%" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Fixed Width Values</h3>
          <p className="utilities-demo__text">
            Use <code>w-{'{size}'}</code> for pixel-based widths:
          </p>
          <UtilityTable utilities={[
            { class: "w-24", property: "width", value: "24px" },
            { class: "w-32", property: "width", value: "32px" },
            { class: "w-48", property: "width", value: "48px" },
            { class: "w-64", property: "width", value: "64px" },
            { class: "w-96", property: "width", value: "96px" },
            { class: "w-128", property: "width", value: "128px" },
            { class: "w-256", property: "width", value: "256px" },
            { class: "w-320", property: "width", value: "320px" },
            { class: "w-480", property: "width", value: "480px" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Height</h3>
          <UtilityTable utilities={[
            { class: "h-auto", property: "height", value: "auto" },
            { class: "h-full", property: "height", value: "100%" },
            { class: "h-screen", property: "height", value: "100vh" },
            { class: "h-min", property: "height", value: "min-content" },
            { class: "h-max", property: "height", value: "max-content" },
            { class: "h-fit", property: "height", value: "fit-content" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Size (Width & Height)</h3>
          <p className="utilities-demo__text">
            Set both width and height simultaneously:
          </p>
          <UtilityTable utilities={[
            { class: "size-16", property: "width/height", value: "16px" },
            { class: "size-24", property: "width/height", value: "24px" },
            { class: "size-32", property: "width/height", value: "32px" },
            { class: "size-40", property: "width/height", value: "40px" },
            { class: "size-48", property: "width/height", value: "48px" },
            { class: "size-64", property: "width/height", value: "64px" },
            { class: "size-full", property: "width/height", value: "100%" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Min/Max Width & Height</h3>
          <UtilityTable utilities={[
            { class: "min-w-0", property: "min-width", value: "0" },
            { class: "min-w-full", property: "min-width", value: "100%" },
            { class: "max-w-full", property: "max-width", value: "100%" },
            { class: "max-w-screen", property: "max-width", value: "100vw" },
            { class: "max-w-480", property: "max-width", value: "480px" },
            { class: "max-w-640", property: "max-width", value: "640px" },
            { class: "max-w-768", property: "max-width", value: "768px" },
            { class: "max-w-960", property: "max-width", value: "960px" },
            { class: "max-w-1200", property: "max-width", value: "1200px" },
            { class: "min-h-0", property: "min-height", value: "0" },
            { class: "min-h-full", property: "min-height", value: "100%" },
            { class: "min-h-screen", property: "min-height", value: "100vh" },
            { class: "max-h-full", property: "max-height", value: "100%" },
            { class: "max-h-screen", property: "max-height", value: "100vh" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Aspect Ratio</h3>
          <UtilityTable utilities={[
            { class: "aspect-auto", property: "aspect-ratio", value: "auto" },
            { class: "aspect-square", property: "aspect-ratio", value: "1 / 1" },
            { class: "aspect-video", property: "aspect-ratio", value: "16 / 9" },
            { class: "aspect-4/3", property: "aspect-ratio", value: "4 / 3" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Sizing Examples</h3>
          <CodeBlock 
            code={`<!-- Avatar with fixed size -->
<img class="size-48 rounded-full" src="avatar.jpg" alt="User" />

<!-- Icon button -->
<button class="size-40 flex items-center justify-center rounded-8">
  <svg class="size-24">...</svg>
</button>

<!-- Responsive video container -->
<div class="w-full aspect-video bg-surface-secondary rounded-12">
  <video class="w-full h-full object-cover">...</video>
</div>

<!-- Centered container with max-width -->
<div class="w-full max-w-960 mx-auto">
  Content constrained to 960px
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Typography */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Typography</h2>
          <p className="utilities-demo__section-description">
            Typography utilities for controlling font size, weight, line height, letter spacing, 
            and text styling. All values are based on design tokens for consistency.
          </p>

          <h3 className="utilities-demo__subsection-title">Font Size</h3>
          <UtilityTable utilities={[
            { class: "text-10", property: "font-size", value: "10px" },
            { class: "text-12", property: "font-size", value: "12px" },
            { class: "text-14", property: "font-size", value: "14px" },
            { class: "text-16", property: "font-size", value: "16px" },
            { class: "text-18", property: "font-size", value: "18px" },
            { class: "text-20", property: "font-size", value: "20px" },
            { class: "text-24", property: "font-size", value: "24px" },
            { class: "text-28", property: "font-size", value: "28px" },
            { class: "text-32", property: "font-size", value: "32px" },
            { class: "text-40", property: "font-size", value: "40px" },
            { class: "text-48", property: "font-size", value: "48px" },
            { class: "text-56", property: "font-size", value: "56px" },
            { class: "text-64", property: "font-size", value: "64px" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Font Weight</h3>
          <UtilityTable utilities={[
            { class: "font-light", property: "font-weight", value: "300" },
            { class: "font-normal", property: "font-weight", value: "400" },
            { class: "font-medium", property: "font-weight", value: "500" },
            { class: "font-semibold", property: "font-weight", value: "600" },
            { class: "font-bold", property: "font-weight", value: "700" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Line Height</h3>
          <UtilityTable utilities={[
            { class: "leading-none", property: "line-height", value: "1" },
            { class: "leading-tight", property: "line-height", value: "1.25" },
            { class: "leading-snug", property: "line-height", value: "1.375" },
            { class: "leading-normal", property: "line-height", value: "1.5" },
            { class: "leading-relaxed", property: "line-height", value: "1.625" },
            { class: "leading-loose", property: "line-height", value: "2" },
            { class: "leading-16", property: "line-height", value: "16px" },
            { class: "leading-20", property: "line-height", value: "20px" },
            { class: "leading-24", property: "line-height", value: "24px" },
            { class: "leading-28", property: "line-height", value: "28px" },
            { class: "leading-32", property: "line-height", value: "32px" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Text Color</h3>
          <UtilityTable utilities={[
            { class: "text-primary", property: "color", value: "var(--uds-text-primary)" },
            { class: "text-secondary", property: "color", value: "var(--uds-text-secondary)" },
            { class: "text-tertiary", property: "color", value: "var(--uds-text-tertiary)" },
            { class: "text-disabled", property: "color", value: "var(--uds-text-disabled)" },
            { class: "text-on-brand", property: "color", value: "var(--uds-text-on-brand)" },
            { class: "text-brand-primary", property: "color", value: "var(--uds-text-brand-primary)" },
            { class: "text-success", property: "color", value: "var(--uds-text-success)" },
            { class: "text-warning", property: "color", value: "var(--uds-text-warning)" },
            { class: "text-error", property: "color", value: "var(--uds-text-error)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Text Alignment</h3>
          <UtilityTable utilities={[
            { class: "text-left", property: "text-align", value: "left" },
            { class: "text-center", property: "text-align", value: "center" },
            { class: "text-right", property: "text-align", value: "right" },
            { class: "text-justify", property: "text-align", value: "justify" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Text Transform & Decoration</h3>
          <UtilityTable utilities={[
            { class: "uppercase", property: "text-transform", value: "uppercase" },
            { class: "lowercase", property: "text-transform", value: "lowercase" },
            { class: "capitalize", property: "text-transform", value: "capitalize" },
            { class: "normal-case", property: "text-transform", value: "none" },
            { class: "underline", property: "text-decoration", value: "underline" },
            { class: "line-through", property: "text-decoration", value: "line-through" },
            { class: "no-underline", property: "text-decoration", value: "none" },
            { class: "italic", property: "font-style", value: "italic" },
            { class: "not-italic", property: "font-style", value: "normal" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Text Overflow</h3>
          <UtilityTable utilities={[
            { class: "truncate", property: "text-overflow + overflow + white-space", value: "ellipsis hidden nowrap" },
            { class: "text-ellipsis", property: "text-overflow", value: "ellipsis" },
            { class: "text-clip", property: "text-overflow", value: "clip" },
            { class: "line-clamp-1", property: "-webkit-line-clamp", value: "1" },
            { class: "line-clamp-2", property: "-webkit-line-clamp", value: "2" },
            { class: "line-clamp-3", property: "-webkit-line-clamp", value: "3" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Whitespace</h3>
          <UtilityTable utilities={[
            { class: "whitespace-normal", property: "white-space", value: "normal" },
            { class: "whitespace-nowrap", property: "white-space", value: "nowrap" },
            { class: "whitespace-pre", property: "white-space", value: "pre" },
            { class: "whitespace-pre-line", property: "white-space", value: "pre-line" },
            { class: "whitespace-pre-wrap", property: "white-space", value: "pre-wrap" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Typography Examples</h3>
          <CodeBlock 
            code={`<!-- Heading hierarchy -->
<h1 class="text-32 font-bold leading-tight text-primary mb-8">
  Page Title
</h1>
<h2 class="text-24 font-semibold text-primary mb-16">
  Section Heading
</h2>
<p class="text-16 leading-relaxed text-secondary">
  Body text with comfortable line height for readability.
</p>

<!-- Truncated text -->
<p class="truncate max-w-256">
  This is a very long text that will be truncated with an ellipsis
</p>

<!-- Multi-line clamp -->
<p class="line-clamp-2">
  This text will be clamped to two lines maximum, with an ellipsis 
  at the end if it exceeds that limit.
</p>

<!-- Label styling -->
<span class="text-12 font-medium uppercase tracking-wide text-secondary">
  Category Label
</span>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Position */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Position</h2>
          <p className="utilities-demo__section-description">
            Control element positioning and stacking context. Use these utilities for 
            overlays, sticky headers, and absolute positioning.
          </p>

          <h3 className="utilities-demo__subsection-title">Position Type</h3>
          <UtilityTable utilities={[
            { class: "static", property: "position", value: "static" },
            { class: "relative", property: "position", value: "relative" },
            { class: "absolute", property: "position", value: "absolute" },
            { class: "fixed", property: "position", value: "fixed" },
            { class: "sticky", property: "position", value: "sticky" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Inset (Top, Right, Bottom, Left)</h3>
          <UtilityTable utilities={[
            { class: "inset-0", property: "top/right/bottom/left", value: "0" },
            { class: "inset-auto", property: "top/right/bottom/left", value: "auto" },
            { class: "top-0", property: "top", value: "0" },
            { class: "right-0", property: "right", value: "0" },
            { class: "bottom-0", property: "bottom", value: "0" },
            { class: "left-0", property: "left", value: "0" },
            { class: "top-1/2", property: "top", value: "50%" },
            { class: "left-1/2", property: "left", value: "50%" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Z-Index</h3>
          <UtilityTable utilities={[
            { class: "z-0", property: "z-index", value: "0" },
            { class: "z-10", property: "z-index", value: "10" },
            { class: "z-20", property: "z-index", value: "20" },
            { class: "z-30", property: "z-index", value: "30" },
            { class: "z-40", property: "z-index", value: "40" },
            { class: "z-50", property: "z-index", value: "50" },
            { class: "z-dropdown", property: "z-index", value: "var(--uds-z-dropdown)" },
            { class: "z-sticky", property: "z-index", value: "var(--uds-z-sticky)" },
            { class: "z-modal", property: "z-index", value: "var(--uds-z-modal)" },
            { class: "z-tooltip", property: "z-index", value: "var(--uds-z-tooltip)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Position Examples</h3>
          <CodeBlock 
            code={`<!-- Sticky header -->
<header class="sticky top-0 z-sticky bg-surface-primary border-b border-primary">
  <nav class="flex items-center justify-between p-16">
    <span class="font-semibold">Logo</span>
    <div class="flex gap-16">...</div>
  </nav>
</header>

<!-- Modal overlay -->
<div class="fixed inset-0 z-modal bg-black/50 flex items-center justify-center">
  <div class="relative bg-surface-primary rounded-16 p-24 max-w-480">
    <button class="absolute top-16 right-16">×</button>
    <h2>Modal Title</h2>
  </div>
</div>

<!-- Badge positioned on avatar -->
<div class="relative inline-block">
  <img class="size-48 rounded-full" src="avatar.jpg" alt="" />
  <span class="absolute bottom-0 right-0 size-12 bg-success rounded-full border-2 border-surface-primary"></span>
</div>

<!-- Centered absolute element -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Centered content
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Backgrounds */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Backgrounds</h2>
          <p className="utilities-demo__section-description">
            Background color and image utilities using semantic color tokens. These automatically 
            adapt to light/dark themes and brand variations.
          </p>

          <h3 className="utilities-demo__subsection-title">Background Colors</h3>
          <UtilityTable utilities={[
            { class: "bg-surface-primary", property: "background-color", value: "var(--uds-surface-primary)" },
            { class: "bg-surface-secondary", property: "background-color", value: "var(--uds-surface-secondary)" },
            { class: "bg-surface-tertiary", property: "background-color", value: "var(--uds-surface-tertiary)" },
            { class: "bg-brand-primary", property: "background-color", value: "var(--uds-surface-brand-primary)" },
            { class: "bg-brand-secondary", property: "background-color", value: "var(--uds-surface-brand-secondary)" },
            { class: "bg-success", property: "background-color", value: "var(--uds-surface-success)" },
            { class: "bg-warning", property: "background-color", value: "var(--uds-surface-warning)" },
            { class: "bg-error", property: "background-color", value: "var(--uds-surface-error)" },
            { class: "bg-transparent", property: "background-color", value: "transparent" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Background Size & Position</h3>
          <UtilityTable utilities={[
            { class: "bg-cover", property: "background-size", value: "cover" },
            { class: "bg-contain", property: "background-size", value: "contain" },
            { class: "bg-auto", property: "background-size", value: "auto" },
            { class: "bg-center", property: "background-position", value: "center" },
            { class: "bg-top", property: "background-position", value: "top" },
            { class: "bg-bottom", property: "background-position", value: "bottom" },
            { class: "bg-left", property: "background-position", value: "left" },
            { class: "bg-right", property: "background-position", value: "right" },
            { class: "bg-no-repeat", property: "background-repeat", value: "no-repeat" },
            { class: "bg-repeat", property: "background-repeat", value: "repeat" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Background Examples</h3>
          <CodeBlock 
            code={`<!-- Card with semantic background -->
<div class="bg-surface-secondary p-24 rounded-12">
  <h3 class="text-primary">Card Title</h3>
  <p class="text-secondary">Card content</p>
</div>

<!-- Status badges -->
<span class="bg-success text-on-brand px-8 py-4 rounded-full text-12">
  Active
</span>
<span class="bg-warning text-on-brand px-8 py-4 rounded-full text-12">
  Pending
</span>
<span class="bg-error text-on-brand px-8 py-4 rounded-full text-12">
  Error
</span>

<!-- Hero with background image -->
<div class="bg-cover bg-center bg-no-repeat min-h-320" 
     style="background-image: url('hero.jpg')">
  <div class="bg-black/50 p-48 text-white">
    Hero content with overlay
  </div>
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Borders */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Borders</h2>
          <p className="utilities-demo__section-description">
            Border utilities for width, color, style, and radius. Use these to create 
            visual boundaries, cards, and interactive elements.
          </p>

          <h3 className="utilities-demo__subsection-title">Border Width</h3>
          <UtilityTable utilities={[
            { class: "border", property: "border-width", value: "1px" },
            { class: "border-0", property: "border-width", value: "0" },
            { class: "border-2", property: "border-width", value: "2px" },
            { class: "border-4", property: "border-width", value: "4px" },
            { class: "border-t", property: "border-top-width", value: "1px" },
            { class: "border-r", property: "border-right-width", value: "1px" },
            { class: "border-b", property: "border-bottom-width", value: "1px" },
            { class: "border-l", property: "border-left-width", value: "1px" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Border Color</h3>
          <UtilityTable utilities={[
            { class: "border-primary", property: "border-color", value: "var(--uds-border-primary)" },
            { class: "border-secondary", property: "border-color", value: "var(--uds-border-secondary)" },
            { class: "border-brand", property: "border-color", value: "var(--uds-border-brand)" },
            { class: "border-success", property: "border-color", value: "var(--uds-border-success)" },
            { class: "border-warning", property: "border-color", value: "var(--uds-border-warning)" },
            { class: "border-error", property: "border-color", value: "var(--uds-border-error)" },
            { class: "border-transparent", property: "border-color", value: "transparent" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Border Radius</h3>
          <UtilityTable utilities={[
            { class: "rounded-0", property: "border-radius", value: "0" },
            { class: "rounded-2", property: "border-radius", value: "2px" },
            { class: "rounded-4", property: "border-radius", value: "4px" },
            { class: "rounded-6", property: "border-radius", value: "6px" },
            { class: "rounded-8", property: "border-radius", value: "8px" },
            { class: "rounded-12", property: "border-radius", value: "12px" },
            { class: "rounded-16", property: "border-radius", value: "16px" },
            { class: "rounded-24", property: "border-radius", value: "24px" },
            { class: "rounded-full", property: "border-radius", value: "9999px" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Directional Radius</h3>
          <UtilityTable utilities={[
            { class: "rounded-t-{size}", property: "border-top-radius", value: "var(--uds-radius-{size})" },
            { class: "rounded-r-{size}", property: "border-right-radius", value: "var(--uds-radius-{size})" },
            { class: "rounded-b-{size}", property: "border-bottom-radius", value: "var(--uds-radius-{size})" },
            { class: "rounded-l-{size}", property: "border-left-radius", value: "var(--uds-radius-{size})" },
            { class: "rounded-tl-{size}", property: "border-top-left-radius", value: "var(--uds-radius-{size})" },
            { class: "rounded-tr-{size}", property: "border-top-right-radius", value: "var(--uds-radius-{size})" },
            { class: "rounded-bl-{size}", property: "border-bottom-left-radius", value: "var(--uds-radius-{size})" },
            { class: "rounded-br-{size}", property: "border-bottom-right-radius", value: "var(--uds-radius-{size})" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Border Style</h3>
          <UtilityTable utilities={[
            { class: "border-solid", property: "border-style", value: "solid" },
            { class: "border-dashed", property: "border-style", value: "dashed" },
            { class: "border-dotted", property: "border-style", value: "dotted" },
            { class: "border-none", property: "border-style", value: "none" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Divide (Between Children)</h3>
          <UtilityTable utilities={[
            { class: "divide-x", property: "border-left (children)", value: "1px" },
            { class: "divide-y", property: "border-top (children)", value: "1px" },
            { class: "divide-primary", property: "border-color (children)", value: "var(--uds-border-primary)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Border Examples</h3>
          <CodeBlock 
            code={`<!-- Card with border -->
<div class="border border-primary rounded-12 p-24">
  Card content
</div>

<!-- Input field styling -->
<input class="border border-secondary rounded-8 px-16 py-12 
              focus:border-brand focus:outline-none" 
       type="text" 
       placeholder="Enter text..." />

<!-- Divider list -->
<ul class="divide-y divide-primary">
  <li class="py-12">Item 1</li>
  <li class="py-12">Item 2</li>
  <li class="py-12">Item 3</li>
</ul>

<!-- Pill/Tag -->
<span class="border border-brand text-brand-primary px-12 py-4 rounded-full text-14">
  Tag Label
</span>

<!-- Card with top accent border -->
<div class="border border-primary border-t-4 border-t-brand rounded-12 p-24">
  Featured content
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Effects */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Effects</h2>
          <p className="utilities-demo__section-description">
            Shadow, opacity, and filter utilities for adding depth and visual effects to elements.
          </p>

          <h3 className="utilities-demo__subsection-title">Box Shadow</h3>
          <UtilityTable utilities={[
            { class: "shadow-none", property: "box-shadow", value: "none" },
            { class: "shadow-sm", property: "box-shadow", value: "0 1px 2px rgba(0,0,0,0.05)" },
            { class: "shadow", property: "box-shadow", value: "0 1px 3px rgba(0,0,0,0.1)" },
            { class: "shadow-md", property: "box-shadow", value: "0 4px 6px rgba(0,0,0,0.1)" },
            { class: "shadow-lg", property: "box-shadow", value: "0 10px 15px rgba(0,0,0,0.1)" },
            { class: "shadow-xl", property: "box-shadow", value: "0 20px 25px rgba(0,0,0,0.1)" },
            { class: "shadow-2xl", property: "box-shadow", value: "0 25px 50px rgba(0,0,0,0.25)" },
            { class: "shadow-inner", property: "box-shadow", value: "inset 0 2px 4px rgba(0,0,0,0.05)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Opacity</h3>
          <UtilityTable utilities={[
            { class: "opacity-0", property: "opacity", value: "0" },
            { class: "opacity-10", property: "opacity", value: "0.1" },
            { class: "opacity-25", property: "opacity", value: "0.25" },
            { class: "opacity-50", property: "opacity", value: "0.5" },
            { class: "opacity-75", property: "opacity", value: "0.75" },
            { class: "opacity-90", property: "opacity", value: "0.9" },
            { class: "opacity-100", property: "opacity", value: "1" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Blur</h3>
          <UtilityTable utilities={[
            { class: "blur-none", property: "filter", value: "blur(0)" },
            { class: "blur-sm", property: "filter", value: "blur(4px)" },
            { class: "blur", property: "filter", value: "blur(8px)" },
            { class: "blur-md", property: "filter", value: "blur(12px)" },
            { class: "blur-lg", property: "filter", value: "blur(16px)" },
            { class: "blur-xl", property: "filter", value: "blur(24px)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Backdrop Blur</h3>
          <UtilityTable utilities={[
            { class: "backdrop-blur-sm", property: "backdrop-filter", value: "blur(4px)" },
            { class: "backdrop-blur", property: "backdrop-filter", value: "blur(8px)" },
            { class: "backdrop-blur-md", property: "backdrop-filter", value: "blur(12px)" },
            { class: "backdrop-blur-lg", property: "backdrop-filter", value: "blur(16px)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Effects Examples</h3>
          <CodeBlock 
            code={`<!-- Card with shadow -->
<div class="bg-surface-primary shadow-md rounded-12 p-24">
  Elevated card
</div>

<!-- Hover shadow effect -->
<div class="shadow-sm hover:shadow-lg transition-shadow duration-200 p-24 rounded-12">
  Hover for shadow
</div>

<!-- Glassmorphism effect -->
<div class="bg-white/10 backdrop-blur-md rounded-16 p-24 border border-white/20">
  Frosted glass effect
</div>

<!-- Disabled state with opacity -->
<button class="opacity-50 cursor-not-allowed" disabled>
  Disabled Button
</button>

<!-- Image with blur on hover -->
<div class="relative overflow-hidden rounded-12">
  <img class="blur-sm hover:blur-none transition-all duration-300" src="image.jpg" />
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Transforms */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Transforms</h2>
          <p className="utilities-demo__section-description">
            Transform utilities for scaling, rotating, translating, and skewing elements. 
            Combine with transitions for smooth animations.
          </p>

          <h3 className="utilities-demo__subsection-title">Scale</h3>
          <UtilityTable utilities={[
            { class: "scale-0", property: "transform", value: "scale(0)" },
            { class: "scale-50", property: "transform", value: "scale(0.5)" },
            { class: "scale-75", property: "transform", value: "scale(0.75)" },
            { class: "scale-90", property: "transform", value: "scale(0.9)" },
            { class: "scale-95", property: "transform", value: "scale(0.95)" },
            { class: "scale-100", property: "transform", value: "scale(1)" },
            { class: "scale-105", property: "transform", value: "scale(1.05)" },
            { class: "scale-110", property: "transform", value: "scale(1.1)" },
            { class: "scale-125", property: "transform", value: "scale(1.25)" },
            { class: "scale-150", property: "transform", value: "scale(1.5)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Rotate</h3>
          <UtilityTable utilities={[
            { class: "rotate-0", property: "transform", value: "rotate(0deg)" },
            { class: "rotate-45", property: "transform", value: "rotate(45deg)" },
            { class: "rotate-90", property: "transform", value: "rotate(90deg)" },
            { class: "rotate-180", property: "transform", value: "rotate(180deg)" },
            { class: "-rotate-45", property: "transform", value: "rotate(-45deg)" },
            { class: "-rotate-90", property: "transform", value: "rotate(-90deg)" },
            { class: "-rotate-180", property: "transform", value: "rotate(-180deg)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Translate</h3>
          <UtilityTable utilities={[
            { class: "translate-x-0", property: "transform", value: "translateX(0)" },
            { class: "translate-x-1/2", property: "transform", value: "translateX(50%)" },
            { class: "translate-x-full", property: "transform", value: "translateX(100%)" },
            { class: "-translate-x-1/2", property: "transform", value: "translateX(-50%)" },
            { class: "-translate-x-full", property: "transform", value: "translateX(-100%)" },
            { class: "translate-y-0", property: "transform", value: "translateY(0)" },
            { class: "translate-y-1/2", property: "transform", value: "translateY(50%)" },
            { class: "-translate-y-1/2", property: "transform", value: "translateY(-50%)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Transform Origin</h3>
          <UtilityTable utilities={[
            { class: "origin-center", property: "transform-origin", value: "center" },
            { class: "origin-top", property: "transform-origin", value: "top" },
            { class: "origin-top-right", property: "transform-origin", value: "top right" },
            { class: "origin-right", property: "transform-origin", value: "right" },
            { class: "origin-bottom-right", property: "transform-origin", value: "bottom right" },
            { class: "origin-bottom", property: "transform-origin", value: "bottom" },
            { class: "origin-bottom-left", property: "transform-origin", value: "bottom left" },
            { class: "origin-left", property: "transform-origin", value: "left" },
            { class: "origin-top-left", property: "transform-origin", value: "top left" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Transform Examples</h3>
          <CodeBlock 
            code={`<!-- Button press effect -->
<button class="active:scale-95 transition-transform duration-150">
  Click Me
</button>

<!-- Card hover zoom -->
<div class="hover:scale-105 transition-transform duration-300 p-24 rounded-12">
  Hover to zoom
</div>

<!-- Dropdown arrow rotation -->
<span class="rotate-0 open:rotate-180 transition-transform duration-200">
  ▼
</span>

<!-- Center absolute element -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Perfectly centered
</div>

<!-- Rotating icon -->
<svg class="animate-spin size-24">...</svg>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Transitions & Animation */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Transitions & Animation</h2>
          <p className="utilities-demo__section-description">
            Transition utilities for smooth property changes. Combine with hover, focus, 
            and other state variants for interactive feedback.
          </p>

          <h3 className="utilities-demo__subsection-title">Transition Property</h3>
          <UtilityTable utilities={[
            { class: "transition-none", property: "transition-property", value: "none" },
            { class: "transition-all", property: "transition-property", value: "all" },
            { class: "transition", property: "transition-property", value: "color, background, border, shadow, opacity, transform" },
            { class: "transition-colors", property: "transition-property", value: "color, background-color, border-color" },
            { class: "transition-opacity", property: "transition-property", value: "opacity" },
            { class: "transition-shadow", property: "transition-property", value: "box-shadow" },
            { class: "transition-transform", property: "transition-property", value: "transform" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Duration</h3>
          <UtilityTable utilities={[
            { class: "duration-75", property: "transition-duration", value: "75ms" },
            { class: "duration-100", property: "transition-duration", value: "100ms" },
            { class: "duration-150", property: "transition-duration", value: "150ms" },
            { class: "duration-200", property: "transition-duration", value: "200ms" },
            { class: "duration-300", property: "transition-duration", value: "300ms" },
            { class: "duration-500", property: "transition-duration", value: "500ms" },
            { class: "duration-700", property: "transition-duration", value: "700ms" },
            { class: "duration-1000", property: "transition-duration", value: "1000ms" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Timing Function</h3>
          <UtilityTable utilities={[
            { class: "ease-linear", property: "transition-timing-function", value: "linear" },
            { class: "ease-in", property: "transition-timing-function", value: "cubic-bezier(0.4, 0, 1, 1)" },
            { class: "ease-out", property: "transition-timing-function", value: "cubic-bezier(0, 0, 0.2, 1)" },
            { class: "ease-in-out", property: "transition-timing-function", value: "cubic-bezier(0.4, 0, 0.2, 1)" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Delay</h3>
          <UtilityTable utilities={[
            { class: "delay-75", property: "transition-delay", value: "75ms" },
            { class: "delay-100", property: "transition-delay", value: "100ms" },
            { class: "delay-150", property: "transition-delay", value: "150ms" },
            { class: "delay-200", property: "transition-delay", value: "200ms" },
            { class: "delay-300", property: "transition-delay", value: "300ms" },
            { class: "delay-500", property: "transition-delay", value: "500ms" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Transition Examples</h3>
          <CodeBlock 
            code={`<!-- Button with color transition -->
<button class="bg-brand-primary hover:bg-brand-secondary 
               transition-colors duration-200 ease-out
               px-24 py-12 rounded-8 text-on-brand">
  Hover Me
</button>

<!-- Card with multiple transitions -->
<div class="bg-surface-secondary hover:bg-surface-tertiary 
            shadow-sm hover:shadow-lg
            transition duration-300 ease-in-out
            p-24 rounded-12">
  Hover for combined effect
</div>

<!-- Fade in on load (with JS to add class) -->
<div class="opacity-0 loaded:opacity-100 
            transition-opacity duration-500 ease-out">
  Fades in when loaded
</div>

<!-- Staggered animation (use with animation-delay in CSS) -->
<div class="space-y-8">
  <div class="opacity-0 animate-fadeIn delay-0">Item 1</div>
  <div class="opacity-0 animate-fadeIn delay-100">Item 2</div>
  <div class="opacity-0 animate-fadeIn delay-200">Item 3</div>
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Overflow */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Overflow</h2>
          <p className="utilities-demo__section-description">
            Control how content is handled when it overflows its container boundaries.
          </p>

          <UtilityTable utilities={[
            { class: "overflow-auto", property: "overflow", value: "auto" },
            { class: "overflow-hidden", property: "overflow", value: "hidden" },
            { class: "overflow-visible", property: "overflow", value: "visible" },
            { class: "overflow-scroll", property: "overflow", value: "scroll" },
            { class: "overflow-x-auto", property: "overflow-x", value: "auto" },
            { class: "overflow-x-hidden", property: "overflow-x", value: "hidden" },
            { class: "overflow-x-scroll", property: "overflow-x", value: "scroll" },
            { class: "overflow-y-auto", property: "overflow-y", value: "auto" },
            { class: "overflow-y-hidden", property: "overflow-y", value: "hidden" },
            { class: "overflow-y-scroll", property: "overflow-y", value: "scroll" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Overflow Examples</h3>
          <CodeBlock 
            code={`<!-- Scrollable container -->
<div class="h-256 overflow-y-auto p-16 border border-primary rounded-12">
  <p>Long content that scrolls vertically...</p>
</div>

<!-- Horizontal scroll for wide content -->
<div class="overflow-x-auto">
  <table class="min-w-640">...</table>
</div>

<!-- Hide overflow for rounded corners with images -->
<div class="rounded-12 overflow-hidden">
  <img src="image.jpg" class="w-full" />
</div>

<!-- Truncated card content -->
<div class="overflow-hidden">
  <p class="truncate">Very long text that gets truncated...</p>
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Interactivity */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Interactivity</h2>
          <p className="utilities-demo__section-description">
            Utilities for controlling cursor behavior, pointer events, user selection, 
            and other interactive properties.
          </p>

          <h3 className="utilities-demo__subsection-title">Cursor</h3>
          <UtilityTable utilities={[
            { class: "cursor-auto", property: "cursor", value: "auto" },
            { class: "cursor-default", property: "cursor", value: "default" },
            { class: "cursor-pointer", property: "cursor", value: "pointer" },
            { class: "cursor-wait", property: "cursor", value: "wait" },
            { class: "cursor-text", property: "cursor", value: "text" },
            { class: "cursor-move", property: "cursor", value: "move" },
            { class: "cursor-not-allowed", property: "cursor", value: "not-allowed" },
            { class: "cursor-grab", property: "cursor", value: "grab" },
            { class: "cursor-grabbing", property: "cursor", value: "grabbing" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Pointer Events</h3>
          <UtilityTable utilities={[
            { class: "pointer-events-none", property: "pointer-events", value: "none" },
            { class: "pointer-events-auto", property: "pointer-events", value: "auto" },
          ]} />

          <h3 className="utilities-demo__subsection-title">User Select</h3>
          <UtilityTable utilities={[
            { class: "select-none", property: "user-select", value: "none" },
            { class: "select-text", property: "user-select", value: "text" },
            { class: "select-all", property: "user-select", value: "all" },
            { class: "select-auto", property: "user-select", value: "auto" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Touch Action</h3>
          <UtilityTable utilities={[
            { class: "touch-auto", property: "touch-action", value: "auto" },
            { class: "touch-none", property: "touch-action", value: "none" },
            { class: "touch-pan-x", property: "touch-action", value: "pan-x" },
            { class: "touch-pan-y", property: "touch-action", value: "pan-y" },
            { class: "touch-manipulation", property: "touch-action", value: "manipulation" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Interactivity Examples</h3>
          <CodeBlock 
            code={`<!-- Clickable card -->
<div class="cursor-pointer hover:bg-surface-secondary transition-colors p-24">
  Click anywhere on this card
</div>

<!-- Disabled button -->
<button class="cursor-not-allowed opacity-50" disabled>
  Cannot Click
</button>

<!-- Draggable item -->
<div class="cursor-grab active:cursor-grabbing p-16 bg-surface-secondary rounded-8">
  Drag me
</div>

<!-- Non-selectable UI text -->
<nav class="select-none">
  <a href="#">Menu Item 1</a>
  <a href="#">Menu Item 2</a>
</nav>

<!-- Click-through overlay -->
<div class="absolute inset-0 pointer-events-none">
  Decorative overlay (clicks pass through)
</div>

<!-- Selectable code block -->
<code class="select-all">npm install @mich8060/chg-design-system</code>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Accessibility */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Accessibility</h2>
          <p className="utilities-demo__section-description">
            Utilities for screen readers, focus management, and other accessibility features.
          </p>

          <h3 className="utilities-demo__subsection-title">Screen Reader</h3>
          <UtilityTable utilities={[
            { class: "sr-only", property: "position + clip + overflow", value: "Visually hidden, available to screen readers" },
            { class: "not-sr-only", property: "position + clip + overflow", value: "Remove sr-only styles" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Focus Ring</h3>
          <UtilityTable utilities={[
            { class: "outline-none", property: "outline", value: "none" },
            { class: "outline", property: "outline", value: "2px solid currentColor" },
            { class: "ring", property: "box-shadow", value: "0 0 0 3px var(--uds-ring-color)" },
            { class: "ring-0", property: "box-shadow", value: "0 0 0 0px" },
            { class: "ring-2", property: "box-shadow", value: "0 0 0 2px var(--uds-ring-color)" },
            { class: "ring-4", property: "box-shadow", value: "0 0 0 4px var(--uds-ring-color)" },
            { class: "ring-brand", property: "--uds-ring-color", value: "var(--uds-border-brand)" },
            { class: "ring-offset-2", property: "box-shadow", value: "0 0 0 2px white, ring" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Accessibility Examples</h3>
          <CodeBlock 
            code={`<!-- Icon button with accessible label -->
<button class="p-12 rounded-8" aria-label="Close">
  <span class="sr-only">Close dialog</span>
  <svg class="size-24" aria-hidden="true">...</svg>
</button>

<!-- Skip link for keyboard navigation -->
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                       p-16 bg-brand-primary text-on-brand rounded-8 z-50">
  Skip to main content
</a>

<!-- Custom focus ring -->
<button class="outline-none focus-visible:ring-2 focus-visible:ring-brand 
               focus-visible:ring-offset-2 px-24 py-12 rounded-8">
  Keyboard accessible
</button>

<!-- Decorative image (hidden from AT) -->
<img src="decoration.png" alt="" aria-hidden="true" />

<!-- Live region for dynamic content -->
<div aria-live="polite" class="sr-only">
  {/* Announce dynamic changes to screen readers */}
</div>`}
          />
        </section>

        <Divider variant="solid" />

        {/* State Variants */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">State Variants</h2>
          <p className="utilities-demo__section-description">
            Apply utilities conditionally based on element state. Prefix any utility class 
            with a state variant to apply styles only when that state is active.
          </p>

          <h3 className="utilities-demo__subsection-title">Available Variants</h3>
          <UtilityTable utilities={[
            { class: "hover:{utility}", property: ":hover", value: "On mouse hover" },
            { class: "focus:{utility}", property: ":focus", value: "On element focus" },
            { class: "focus-within:{utility}", property: ":focus-within", value: "When child is focused" },
            { class: "focus-visible:{utility}", property: ":focus-visible", value: "Keyboard focus only" },
            { class: "active:{utility}", property: ":active", value: "While being clicked" },
            { class: "disabled:{utility}", property: ":disabled", value: "When disabled" },
            { class: "checked:{utility}", property: ":checked", value: "When checkbox/radio checked" },
            { class: "first:{utility}", property: ":first-child", value: "First child element" },
            { class: "last:{utility}", property: ":last-child", value: "Last child element" },
            { class: "odd:{utility}", property: ":nth-child(odd)", value: "Odd numbered children" },
            { class: "even:{utility}", property: ":nth-child(even)", value: "Even numbered children" },
            { class: "group-hover:{utility}", property: ".group:hover &", value: "When parent .group is hovered" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Variant Examples</h3>
          <CodeBlock 
            code={`<!-- Hover state -->
<button class="bg-brand-primary hover:bg-brand-secondary transition-colors">
  Hover changes background
</button>

<!-- Focus state for inputs -->
<input class="border-secondary focus:border-brand focus:ring-2 focus:ring-brand/20 
              outline-none transition-all" />

<!-- Active/pressed state -->
<button class="scale-100 active:scale-95 transition-transform">
  Press for effect
</button>

<!-- Disabled state -->
<button class="bg-brand-primary disabled:bg-surface-secondary 
               disabled:text-disabled disabled:cursor-not-allowed" disabled>
  Disabled Button
</button>

<!-- Group hover (parent triggers child) -->
<div class="group p-24 hover:bg-surface-secondary transition-colors">
  <h3>Card Title</h3>
  <a href="#" class="text-secondary group-hover:text-brand-primary transition-colors">
    Link appears on card hover →
  </a>
</div>

<!-- Zebra striped table -->
<tbody>
  <tr class="odd:bg-surface-secondary">...</tr>
  <tr class="odd:bg-surface-secondary">...</tr>
  <tr class="odd:bg-surface-secondary">...</tr>
</tbody>

<!-- First/last child styling -->
<ul class="divide-y divide-primary">
  <li class="py-12 first:pt-0 last:pb-0">Item</li>
  <li class="py-12 first:pt-0 last:pb-0">Item</li>
  <li class="py-12 first:pt-0 last:pb-0">Item</li>
</ul>`}
          />
        </section>

        <Divider variant="solid" />

        {/* Responsive Design */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Responsive Design</h2>
          <p className="utilities-demo__section-description">
            Apply utilities at specific breakpoints using responsive prefixes. All utilities 
            can be combined with breakpoint prefixes for mobile-first responsive design.
          </p>

          <h3 className="utilities-demo__subsection-title">Breakpoints</h3>
          <UtilityTable utilities={[
            { class: "sm:{utility}", property: "@media (min-width: 640px)", value: "Small screens and up" },
            { class: "md:{utility}", property: "@media (min-width: 768px)", value: "Medium screens and up" },
            { class: "lg:{utility}", property: "@media (min-width: 1024px)", value: "Large screens and up" },
            { class: "xl:{utility}", property: "@media (min-width: 1280px)", value: "Extra large screens and up" },
            { class: "2xl:{utility}", property: "@media (min-width: 1536px)", value: "2X large screens and up" },
          ]} />

          <h3 className="utilities-demo__subsection-title">Responsive Examples</h3>
          <CodeBlock 
            code={`<!-- Responsive grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>

<!-- Responsive padding -->
<div class="p-16 sm:p-24 lg:p-32 xl:p-48">
  Padding increases with screen size
</div>

<!-- Responsive typography -->
<h1 class="text-24 sm:text-32 md:text-40 lg:text-48 xl:text-56 font-bold">
  Responsive Heading
</h1>

<!-- Hide/show at breakpoints -->
<nav class="hidden md:flex gap-16">
  Desktop navigation
</nav>
<button class="md:hidden p-12">
  Mobile menu button
</button>

<!-- Responsive layout direction -->
<div class="flex flex-col md:flex-row gap-24">
  <aside class="w-full md:w-256">Sidebar</aside>
  <main class="flex-1">Main content</main>
</div>

<!-- Responsive image sizing -->
<img class="w-full sm:w-1/2 lg:w-1/3 rounded-12" src="image.jpg" />`}
          />
        </section>

        <Divider variant="solid" />

        {/* Dark Mode */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Dark Mode</h2>
          <p className="utilities-demo__section-description">
            Apply utilities specifically for dark mode using the <code>dark:</code> prefix. 
            Dark mode is typically controlled via a <code>data-theme="dark"</code> attribute 
            on the root element.
          </p>

          <h3 className="utilities-demo__subsection-title">Dark Mode Examples</h3>
          <CodeBlock 
            code={`<!-- Dark mode background -->
<div class="bg-white dark:bg-gray-900 p-24 rounded-12">
  Adapts to theme
</div>

<!-- Dark mode text color -->
<p class="text-gray-900 dark:text-gray-100">
  Readable in both modes
</p>

<!-- Dark mode border -->
<div class="border border-gray-200 dark:border-gray-700 p-16">
  Border adapts to theme
</div>

<!-- Complete dark mode card -->
<div class="bg-surface-primary dark:bg-surface-primary 
            border border-primary dark:border-secondary
            text-primary dark:text-primary
            p-24 rounded-12 shadow-md dark:shadow-lg">
  <h3 class="font-semibold mb-8">Card Title</h3>
  <p class="text-secondary dark:text-secondary">
    This card automatically adapts to light and dark themes.
  </p>
</div>

<!-- Note: When using semantic tokens (--uds-*), dark mode 
     is often handled automatically at the token level -->`}
          />

          <div className="utilities-demo__callout">
            <strong>💡 Pro Tip:</strong> When using semantic design tokens like <code>bg-surface-primary</code> 
            and <code>text-primary</code>, dark mode adaptation often happens automatically at the token 
            level. You only need explicit <code>dark:</code> variants when overriding or using 
            non-semantic values.
          </div>
        </section>

        <Divider variant="solid" />

        {/* Best Practices */}
        <section className="utilities-demo__section">
          <h2 className="utilities-demo__section-title">Best Practices</h2>
          
          <div className="utilities-demo__practice">
            <h3 className="utilities-demo__practice-title">✅ Do: Use semantic tokens</h3>
            <p className="utilities-demo__text">
              Prefer semantic color utilities like <code>bg-surface-primary</code> over raw values. 
              Semantic tokens automatically adapt to themes and maintain consistency.
            </p>
            <CodeBlock 
              code={`<!-- Good: Semantic tokens -->
<div class="bg-surface-secondary text-primary border-primary">
  Automatically adapts to themes
</div>

<!-- Avoid: Hardcoded values -->
<div class="bg-gray-100 text-gray-900 border-gray-300">
  Won't adapt to dark mode
</div>`}
            />
          </div>

          <div className="utilities-demo__practice">
            <h3 className="utilities-demo__practice-title">✅ Do: Extract repeated patterns</h3>
            <p className="utilities-demo__text">
              When you find yourself repeating the same combination of utilities, consider 
              extracting them into a component or custom class.
            </p>
            <CodeBlock 
              code={`<!-- Repeated pattern (extract this) -->
<button class="px-24 py-12 bg-brand-primary text-on-brand rounded-8 
               font-semibold hover:bg-brand-secondary transition-colors">
  Button 1
</button>
<button class="px-24 py-12 bg-brand-primary text-on-brand rounded-8 
               font-semibold hover:bg-brand-secondary transition-colors">
  Button 2
</button>

<!-- Better: Use the Button component -->
import { Button } from '@mich8060/chg-design-system';

<Button label="Button 1" />
<Button label="Button 2" />`}
              language="javascript"
            />
          </div>

          <div className="utilities-demo__practice">
            <h3 className="utilities-demo__practice-title">✅ Do: Mobile-first responsive</h3>
            <p className="utilities-demo__text">
              Start with mobile styles (no prefix), then add larger breakpoint overrides. 
              This results in cleaner, more maintainable code.
            </p>
            <CodeBlock 
              code={`<!-- Good: Mobile-first -->
<div class="p-16 md:p-24 lg:p-32">
  Starts small, grows larger
</div>

<!-- Avoid: Desktop-first (harder to maintain) -->
<div class="p-32 md:p-24 sm:p-16">
  Confusing order
</div>`}
            />
          </div>

          <div className="utilities-demo__practice">
            <h3 className="utilities-demo__practice-title">✅ Do: Combine utilities logically</h3>
            <p className="utilities-demo__text">
              Group related utilities together for readability: layout → spacing → colors → effects → transitions.
            </p>
            <CodeBlock 
              code={`<!-- Good: Logical grouping -->
<div class="
  flex items-center justify-between      /* layout */
  p-24 gap-16                            /* spacing */
  bg-surface-secondary text-primary      /* colors */
  rounded-12 shadow-md                   /* effects */
  hover:shadow-lg transition-shadow      /* interactions */
">
  Organized utility classes
</div>`}
            />
          </div>
        </section>

      </main>
    </section>
  );
}
