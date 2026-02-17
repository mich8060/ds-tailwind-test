import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FileUpload from "../ui/FileUpload/FileUpload";
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

const BASIC_CODE = `import { FileUpload } from "@mich8060/chg-design-system";

const [files, setFiles] = useState([]);

<FileUpload
  onFileSelect={(files) => setFiles(Array.from(files))}
  instructionText="Drop files here or click to upload"
/>`;

const MULTIPLE_CODE = `<FileUpload
  onFileSelect={handleFileSelect}
  multiple
  instructionText="Drop multiple files here or click to upload"
/>`;

const ACCEPT_CODE = `<FileUpload
  onFileSelect={handleFileSelect}
  accept={["image/png", "image/jpeg", "image/jpg", "image/gif"]}
  acceptText="PNG, JPG, GIF"
  instructionText="Drop images here or click to upload"
/>`;

const MAXSIZE_CODE = `<FileUpload
  onFileSelect={handleFileSelect}
  maxSize={5}
  instructionText="Drop files here or click to upload (max 5MB)"
/>`;

const DISABLED_CODE = `<FileUpload
  onFileSelect={() => {}}
  disabled
  instructionText="Upload disabled"
/>`;

const PROPS_COLUMNS = [
  { key: "prop", label: "Prop", render: (row) => <code>{row.prop}</code> },
  { key: "type", label: "Type", render: (row) => <code>{row.type}</code> },
  { key: "default", label: "Default", render: (row) => row.default ? <code>{row.default}</code> : "—" },
  { key: "description", label: "Description" },
];

const PROPS_DATA = [
  {
    prop: "onFileSelect",
    type: "function",
    default: null,
    description: "Callback fired when files are selected. Receives a FileList of validated files.",
  },
  {
    prop: "accept",
    type: "string[]",
    default: "[]",
    description: "Array of accepted MIME types (e.g. ['image/png', 'image/jpeg']). Empty array allows all types.",
  },
  {
    prop: "maxSize",
    type: "number",
    default: "10",
    description: "Maximum file size in megabytes. Files exceeding this limit are silently rejected.",
  },
  {
    prop: "acceptText",
    type: "string",
    default: null,
    description: "Custom display text for accepted file types (e.g. 'PNG, JPG'). Auto-generated from accept if omitted.",
  },
  {
    prop: "instructionText",
    type: "string",
    default: '"Drop files here or click to upload"',
    description: "Instruction text displayed inside the upload area.",
  },
  {
    prop: "multiple",
    type: "boolean",
    default: "false",
    description: "Whether to allow selecting multiple files at once.",
  },
  {
    prop: "disabled",
    type: "boolean",
    default: "false",
    description: "Disables the upload area, preventing drag-and-drop and click interactions.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes to apply to the upload container.",
  },
];

export default function FileUploadDemo() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFilesMultiple, setSelectedFilesMultiple] = useState([]);

  const handleFileSelect = (files) => {
    setSelectedFiles(Array.from(files));
  };

  const handleFileSelectMultiple = (files) => {
    setSelectedFilesMultiple(Array.from(files));
  };

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
              <h1 className="page__header-title">File Upload</h1>
              <p className="page__header-description">
                File upload component that supports both drag-and-drop and
                click-to-upload functionality. Users can drag files onto the
                upload area or click to browse and select files.
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

          {/* Basic Usage */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Basic Usage</h2>
            <p className="demo-group__description">
              A simple file upload component that supports both drag-and-drop and click-to-upload functionality.
            </p>
            <div className="demo-content">
              <FileUpload
                onFileSelect={handleFileSelect}
                instructionText="Drop files here or click to upload"
              />
              {selectedFiles.length > 0 && (
                <div style={{ marginTop: "16px" }}>
                  <p>Selected files:</p>
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li key={index}>
                        {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={BASIC_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{BASIC_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Multiple Files */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Multiple Files</h2>
            <p className="demo-group__description">
              Enable multiple file selection by setting the <code>multiple</code> prop to true.
            </p>
            <div className="demo-content">
              <FileUpload
                onFileSelect={handleFileSelectMultiple}
                multiple
                instructionText="Drop multiple files here or click to upload"
              />
              {selectedFilesMultiple.length > 0 && (
                <div style={{ marginTop: "16px" }}>
                  <p>Selected files ({selectedFilesMultiple.length}):</p>
                  <ul>
                    {selectedFilesMultiple.map((file, index) => (
                      <li key={index}>
                        {file.name} ({(file.size / 1024).toFixed(2)} KB)
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={MULTIPLE_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{MULTIPLE_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* File Type Restrictions */}
          <div className="demo-group">
            <h2 className="demo-group__heading">File Type Restrictions</h2>
            <p className="demo-group__description">
              Restrict file uploads to specific file types using the <code>accept</code> prop. This example only accepts images.
            </p>
            <div className="demo-content">
              <FileUpload
                onFileSelect={handleFileSelect}
                accept={["image/png", "image/jpeg", "image/jpg", "image/gif"]}
                acceptText="PNG, JPG, GIF"
                instructionText="Drop images here or click to upload"
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={ACCEPT_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{ACCEPT_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* File Size Limit */}
          <div className="demo-group">
            <h2 className="demo-group__heading">File Size Limit</h2>
            <p className="demo-group__description">
              Set a maximum file size limit using the <code>maxSize</code> prop (in MB). Files exceeding this limit will be rejected.
            </p>
            <div className="demo-content">
              <FileUpload
                onFileSelect={handleFileSelect}
                maxSize={5}
                instructionText="Drop files here or click to upload (max 5MB)"
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={MAXSIZE_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{MAXSIZE_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Disabled State */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Disabled State</h2>
            <p className="demo-group__description">
              Disabled file upload components prevent user interaction and are typically used when uploads are not applicable.
            </p>
            <div className="demo-content">
              <FileUpload
                onFileSelect={() => {}}
                disabled
                instructionText="Upload disabled"
              />
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
        <div className="demo-group">
          <h2 className="demo-group__heading">Props Reference</h2>
          <Table columns={PROPS_COLUMNS} data={PROPS_DATA} />
        </div>

        <Divider variant="solid" />

        <div className="page__tabs-content-container">
          <div className="demo-group">
            <div className="page__navigation">
              <Link
                to="/field"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Field</span>
              </Link>
              <Link
                to="/image-aspect"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Image Aspect</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
