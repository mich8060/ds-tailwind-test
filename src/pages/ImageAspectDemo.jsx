import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageAspect from "../ui/ImageAspect/ImageAspect";
import Flex from "../ui/Flex/Flex";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import Table from "../ui/Table/Table";
import { formatLastUpdated } from "../utils/formatDate";
import CopyButton from "../ui/CopyButton/CopyButton";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";

const BASIC_CODE = `import { ImageAspect } from "@mich8060/chg-design-system";

<ImageAspect
  ratio="square"
  src="/path/to/image.jpg"
  alt="Square image"
/>`;

const RATIOS_CODE = `<ImageAspect ratio="square" src="https://placehold.co/108x108" alt="1:1" />
<ImageAspect ratio="video" src="https://placehold.co/192x108" alt="16:9" />
<ImageAspect ratio="4-3" src="https://placehold.co/144x108" alt="4:3" />
<ImageAspect ratio="3-2" src="https://placehold.co/162x108" alt="3:2" />
<ImageAspect ratio="21-9" src="https://placehold.co/252x108" alt="21:9" />
<ImageAspect ratio="portrait" src="https://placehold.co/81x108" alt="3:4" />
<ImageAspect ratio="auto" src="https://placehold.co/108x108" alt="Auto" />`;

const PLACEHOLDER_CODE = `{/* No src provided — renders a dashed placeholder */}
<ImageAspect ratio="square" alt="Square placeholder" />
<ImageAspect ratio="video" alt="Video placeholder" />
<ImageAspect ratio="4-3" alt="4:3 placeholder" />
<ImageAspect ratio="3-2" alt="3:2 placeholder" />
<ImageAspect ratio="21-9" alt="21:9 placeholder" />
<ImageAspect ratio="portrait" alt="Portrait placeholder" />
<ImageAspect ratio="auto" alt="Auto placeholder" />`;


const PROPS_COLUMNS = [
  { key: "prop", label: "Prop", render: (row) => <code>{row.prop}</code> },
  { key: "type", label: "Type", render: (row) => <code>{row.type}</code> },
  { key: "default", label: "Default", render: (row) => row.default ? <code>{row.default}</code> : "—" },
  { key: "description", label: "Description" },
];

const PROPS_DATA = [
  {
    prop: "ratio",
    type: "string",
    default: '"square"',
    description: "Aspect ratio variant. Options: 'square' (1:1), 'video' (16:9), '4-3', '3-2', '21-9', 'portrait' (3:4), 'auto' (intrinsic).",
  },
  {
    prop: "src",
    type: "string",
    default: null,
    description: "Image source URL. When omitted, a placeholder is rendered instead.",
  },
  {
    prop: "alt",
    type: "string",
    default: '""',
    description: "Alt text for the image, used for accessibility.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes to apply to the container element.",
  },
];

export default function ImageAspectDemo() {
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
              <h1 className="page__header-title">Image Aspect</h1>
              <p className="page__header-description">
                The Image Aspect component maintains consistent aspect ratios for
                images, ensuring they display correctly regardless of their original
                dimensions. Perfect for creating uniform image grids, galleries, or
                maintaining brand logo consistency across different sizes.
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

          {/* Aspect Ratios */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Aspect Ratios</h2>
            <p className="demo-group__description">
              The Image Aspect component maintains consistent aspect ratios for images. Choose from various predefined ratios to ensure uniform display across different image sizes.
            </p>
            <Flex direction="row" gap="12" wrap={false} alignItems="flex-end" className="demo-content">
              <Flex direction="column" gap="8" alignItems="center">
                <ImageAspect
                  ratio="square"
                  src="https://placehold.co/108x108"
                  alt="1:1 aspect ratio"
                />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>
                  square (1:1)
                </span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <ImageAspect
                  ratio="video"
                  src="https://placehold.co/192x108"
                  alt="16:9 aspect ratio"
                />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>
                  video (16:9)
                </span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <ImageAspect
                  ratio="4-3"
                  src="https://placehold.co/144x108"
                  alt="4:3 aspect ratio"
                />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>
                  4-3 (4:3)
                </span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <ImageAspect
                  ratio="3-2"
                  src="https://placehold.co/162x108"
                  alt="3:2 aspect ratio"
                />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>
                  3-2 (3:2)
                </span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <ImageAspect
                  ratio="21-9"
                  src="https://placehold.co/252x108"
                  alt="21:9 aspect ratio"
                />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>
                  21-9 (21:9)
                </span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <ImageAspect
                  ratio="portrait"
                  src="https://placehold.co/81x108"
                  alt="3:4 aspect ratio"
                />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>
                  portrait (3:4)
                </span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center">
                <ImageAspect
                  ratio="auto"
                  src="https://placehold.co/108x108"
                  alt="Auto aspect ratio"
                />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>
                  auto
                </span>
              </Flex>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={RATIOS_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{RATIOS_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Placeholder */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Placeholder</h2>
            <p className="demo-group__description">
              When no image source is provided, the component displays a placeholder with the aspect ratio maintained. This is useful for loading states or when images are unavailable.
            </p>
            <Flex direction="row" gap="12" wrap={false} alignItems="flex-end" className="demo-content">
              <Flex direction="column" gap="8" alignItems="center" style={{ width: 108 }}>
                <ImageAspect ratio="square" alt="Square placeholder" />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>square (1:1)</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center" style={{ width: 192 }}>
                <ImageAspect ratio="video" alt="Video placeholder" />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>video (16:9)</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center" style={{ width: 144 }}>
                <ImageAspect ratio="4-3" alt="4:3 placeholder" />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>4-3 (4:3)</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center" style={{ width: 162 }}>
                <ImageAspect ratio="3-2" alt="3:2 placeholder" />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>3-2 (3:2)</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center" style={{ width: 252 }}>
                <ImageAspect ratio="21-9" alt="21:9 placeholder" />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>21-9 (21:9)</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center" style={{ width: 81 }}>
                <ImageAspect ratio="portrait" alt="Portrait placeholder" />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>portrait (3:4)</span>
              </Flex>
              <Flex direction="column" gap="8" alignItems="center" style={{ width: 108 }}>
                <ImageAspect ratio="auto" alt="Auto placeholder" />
                <span style={{ fontSize: "12px", color: "var(--uds-text-secondary)" }}>auto</span>
              </Flex>
            </Flex>
            <div className="code-block-wrapper">
              <CopyButton codeString={PLACEHOLDER_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{PLACEHOLDER_CODE}</code>
              </pre>
            </div>
          </div>
        </div>

        <Divider variant="solid" />

        {/* Props Reference */}
        <div className="demo-group">
          <h2 className="demo-group__heading">Props Reference</h2>
          <Table columns={PROPS_COLUMNS} data={PROPS_DATA} />
        </div>

        <Divider variant="solid" />

        <div className="page__tabs-content-container">
          <div className="demo-group">
            <div className="page__navigation">
              <Link
                to="/file-upload"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">File Upload</span>
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
