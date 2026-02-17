import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MicroCalendar from "../ui/MicroCalendar/MicroCalendar";
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

const BASIC_CODE = `import { MicroCalendar } from "@mich8060/chg-design-system";

const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 1));

<MicroCalendar
  value={selectedDate}
  onDateSelect={setSelectedDate}
  month={new Date(2026, 0, 1)}
  showExpandCollapse={false}
/>`;

const DATE_STATES_CODE = `const unavailableDates = [
  new Date(2026, 0, 4),
  new Date(2026, 0, 5),
  new Date(2026, 0, 6),
  new Date(2026, 0, 7),
];

const dateData = {
  "2026-01-08": { travel: false, onAssignment: true },
  "2026-01-25": { travel: true, onAssignment: false },
  "2026-01-26": { travel: false, onAssignment: true },
  "2026-01-31": { travel: true, onAssignment: true },
};

<MicroCalendar
  value={selectedDate}
  onDateSelect={setSelectedDate}
  unavailableDates={unavailableDates}
  dateData={dateData}
  month={new Date(2026, 0, 1)}
/>`;

const COLLAPSED_CODE = `<MicroCalendar
  value={selectedDate}
  onDateSelect={setSelectedDate}
  defaultExpanded={false}
  month={new Date(2026, 0, 1)}
/>`;

const NO_LEGEND_CODE = `<MicroCalendar
  value={selectedDate}
  onDateSelect={setSelectedDate}
  showLegend={false}
  month={new Date(2026, 0, 1)}
/>`;

const PROPS_COLUMNS = [
  { key: "prop", label: "Prop", render: (row) => <code>{row.prop}</code> },
  { key: "type", label: "Type", render: (row) => <code>{row.type}</code> },
  { key: "default", label: "Default", render: (row) => row.default ? <code>{row.default}</code> : "—" },
  { key: "description", label: "Description" },
];

const PROPS_DATA = [
  {
    prop: "value",
    type: "Date",
    default: null,
    description: "The currently selected date.",
  },
  {
    prop: "month",
    type: "Date",
    default: "new Date()",
    description: "The month to display. Defaults to the current month.",
  },
  {
    prop: "onDateSelect",
    type: "function",
    default: null,
    description: "Callback fired when a date is selected. Receives a Date object.",
  },
  {
    prop: "unavailableDates",
    type: "Date[]",
    default: "[]",
    description: "Array of dates that should be marked unavailable and disabled.",
  },
  {
    prop: "dateData",
    type: "object",
    default: "{}",
    description: "Object mapping date keys ('YYYY-MM-DD') to data objects with travel (boolean) and onAssignment (boolean) flags.",
  },
  {
    prop: "defaultExpanded",
    type: "boolean",
    default: "true",
    description: "Whether the calendar starts in its expanded state showing all weeks.",
  },
  {
    prop: "showLegend",
    type: "boolean",
    default: "true",
    description: "Whether to display the legend explaining date state icons.",
  },
  {
    prop: "showExpandCollapse",
    type: "boolean",
    default: "true",
    description: "Whether to show the expand/collapse toggle button.",
  },
  {
    prop: "className",
    type: "string",
    default: '""',
    description: "Additional CSS classes to apply to the calendar container.",
  },
];

export default function MicroCalendarDemo() {
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 1));
  const [selectedDate2, setSelectedDate2] = useState(null);

  const unavailableDates = [
    new Date(2026, 0, 4),
    new Date(2026, 0, 5),
    new Date(2026, 0, 6),
    new Date(2026, 0, 7),
  ];

  const dateData = {
    "2026-01-01": { travel: false, onAssignment: false },
    "2026-01-08": { travel: false, onAssignment: true },
    "2026-01-25": { travel: true, onAssignment: false },
    "2026-01-26": { travel: false, onAssignment: true },
    "2026-01-27": { travel: false, onAssignment: true },
    "2026-01-28": { travel: false, onAssignment: true },
    "2026-01-29": { travel: false, onAssignment: true },
    "2026-01-30": { travel: false, onAssignment: true },
    "2026-01-31": { travel: true, onAssignment: true },
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
              <h1 className="page__header-title">Micro Calendar</h1>
              <p className="page__header-description">
                A compact, minimal calendar component perfect for inline date selection
                or displaying dates in small spaces. The micro calendar shows a single
                month view with navigation controls, expand/collapse, and date state indicators.
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
              A micro calendar with month navigation, date selection, and expand/collapse functionality. Click on any date to select it.
            </p>
            <div className="demo-content">
              <MicroCalendar
                value={selectedDate}
                onDateSelect={setSelectedDate}
                month={new Date(2026, 0, 1)}
                showExpandCollapse={false}
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={BASIC_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{BASIC_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* With Date States */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Date States</h2>
            <p className="demo-group__description">
              The calendar supports multiple date states: Available (white), Selected (light blue), On Assignment (dark blue circle icon), Unavailable (red line), and Travel (green triangle icon).
            </p>
            <div className="demo-content">
              <MicroCalendar
                value={selectedDate}
                onDateSelect={setSelectedDate}
                unavailableDates={unavailableDates}
                dateData={dateData}
                month={new Date(2026, 0, 1)}
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={DATE_STATES_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{DATE_STATES_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Collapsed State */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Collapsed State</h2>
            <p className="demo-group__description">
              The calendar can start in a collapsed state, showing only the current week. Click the expand button to show all days.
            </p>
            <div className="demo-content">
              <MicroCalendar
                value={selectedDate2}
                onDateSelect={setSelectedDate2}
                defaultExpanded={false}
                month={new Date(2026, 0, 1)}
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={COLLAPSED_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{COLLAPSED_CODE}</code>
              </pre>
            </div>
          </div>

          <Divider />

          {/* Without Legend */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Without Legend</h2>
            <p className="demo-group__description">
              The legend can be hidden if you prefer a more compact display.
            </p>
            <div className="demo-content">
              <MicroCalendar
                value={selectedDate}
                onDateSelect={setSelectedDate}
                showLegend={false}
                month={new Date(2026, 0, 1)}
              />
            </div>
            <div className="code-block-wrapper">
              <CopyButton codeString={NO_LEGEND_CODE} />
              <pre className="code-block">
                <code className="language-jsx">{NO_LEGEND_CODE}</code>
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
                to="/datepicker"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Datepicker</span>
              </Link>
              <Link
                to="/divider"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Divider</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
