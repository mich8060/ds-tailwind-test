import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Calendar from "../ui/Calendar/Calendar";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import Flex from "../ui/Flex/Flex";
import PillToggle from "../ui/PillToggle/PillToggle";
import Tag from "../ui/Tag/Tag";
import CopyButton from "../ui/CopyButton/CopyButton";
import { formatLastUpdated } from "../utils/formatDate";
import Prism from "prismjs";
import "../styles/prism-custom.css";
import "prismjs/components/prism-jsx";

const CodeBlock = ({ code, language = "jsx" }) => (
  <div className="uds-demo__code-wrapper" style={{ position: "relative" }}>
    <CopyButton textToCopy={code} />
    <pre className="uds-demo__code-block">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  </div>
);

// ── Sample events with multi-day spanning ─────────────────────────
function generateSampleEvents(baseDate) {
  const y = baseDate.getFullYear();
  const m = baseDate.getMonth();
  return [
    // Multi-day spanning events
    {
      id: "span-1",
      title: "Team Offsite",
      startDate: new Date(y, m, 3),
      endDate: new Date(y, m, 5),
      type: "travel",
      status: "active",
      allDay: true,
    },
    {
      id: "span-2",
      title: "Conference Trip",
      startDate: new Date(y, m, 10),
      endDate: new Date(y, m, 14),
      type: "travel",
      status: "pending",
      allDay: true,
    },
    {
      id: "span-3",
      title: "Sprint 42",
      startDate: new Date(y, m, 17),
      endDate: new Date(y, m, 28),
      type: "assignment",
      status: "active",
      allDay: true,
    },
    {
      id: "span-4",
      title: "Holiday Break",
      startDate: new Date(y, m, 24),
      endDate: new Date(y, m, 26),
      type: "unassigned",
      status: "active",
      allDay: true,
    },
    // Single-day events
    {
      id: "e1",
      title: "Team Standup",
      startDate: new Date(y, m, 3),
      type: "travel",
      status: "active",
      startTime: "09:00",
      endTime: "09:30",
    },
    {
      id: "e2",
      title: "Sprint Planning",
      startDate: new Date(y, m, 3),
      type: "assignment",
      status: "active",
      startTime: "10:00",
      endTime: "11:00",
    },
    {
      id: "e3",
      title: "Design Review",
      startDate: new Date(y, m, 5),
      type: "travel",
      status: "past",
      startTime: "14:00",
      endTime: "15:00",
    },
    {
      id: "e4",
      title: "Lunch & Learn",
      startDate: new Date(y, m, 7),
      type: "assignment",
      status: "active",
      startTime: "12:00",
      endTime: "13:00",
    },
    {
      id: "e5",
      title: "1:1 with Manager",
      startDate: new Date(y, m, 10),
      type: "assignment",
      status: "active",
      startTime: "11:00",
      endTime: "11:30",
    },
    {
      id: "e6",
      title: "Release Day",
      startDate: new Date(y, m, 12),
      type: "unassigned",
      status: "active",
    },
    {
      id: "e7",
      title: "Code Review",
      startDate: new Date(y, m, 12),
      type: "travel",
      status: "active",
      startTime: "15:00",
    },
    {
      id: "e8",
      title: "Client Call",
      startDate: new Date(y, m, 14),
      type: "assignment",
      status: "active",
      startTime: "10:00",
    },
    {
      id: "e9",
      title: "Retro",
      startDate: new Date(y, m, 14),
      type: "travel",
      status: "pending",
      startTime: "16:00",
    },
    {
      id: "e10",
      title: "Workshop",
      startDate: new Date(y, m, 17),
      type: "assignment",
      status: "pending",
      startTime: "09:00",
      endTime: "12:00",
    },
    {
      id: "e11",
      title: "All Hands",
      startDate: new Date(y, m, 19),
      type: "travel",
      status: "active",
      startTime: "13:00",
      endTime: "14:00",
    },
    {
      id: "e12",
      title: "Hackathon Kickoff",
      startDate: new Date(y, m, 21),
      type: "unassigned",
      status: "pending",
      startTime: "09:00",
    },
    {
      id: "e13",
      title: "Hackathon Demos",
      startDate: new Date(y, m, 22),
      type: "unassigned",
      status: "active",
      startTime: "15:00",
    },
    {
      id: "e14",
      title: "Deploy v2.0",
      startDate: new Date(y, m, 24),
      type: "assignment",
      status: "past",
    },
    {
      id: "e15",
      title: "Monthly Review",
      startDate: new Date(y, m, 28),
      type: "travel",
      status: "active",
      startTime: "11:00",
    },
  ];
}

export default function CalendarDemo() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [clickedEvent, setClickedEvent] = useState(null);
  const [view, setView] = useState("month");

  const today = useMemo(() => new Date(), []);
  const events = useMemo(() => generateSampleEvents(today), [today]);

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
              <h1 className="page__header-title">Calendar</h1>
              <p className="page__header-description">
                A full-size calendar component for displaying events, scheduling,
                and date navigation. Supports month and week views with multi-day
                spanning events and overflow handling. Events render as lightweight
                inline bars — for the standalone event component, see{" "}
                <Link to="/event-card">EventCard</Link>.
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
                  <p className="page__metadata-value">1.1.0</p>
                  <span className="page__version-badge">UPDATED</span>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page__content">
        {/* ── Live Preview ──────────────────────────────────────── */}
        <div className="page__examples-section">
          <div className="demo-group">
            <h2 className="demo-group__heading">Interactive Calendar</h2>
            <p className="demo-group__description">
              A fully interactive calendar with spanning and timed events.
              Multi-day events render as colored bars across day columns.
              Click dates to select or click events for details.
            </p>

            <Flex gap="12" alignItems="center" style={{ marginBottom: 16 }}>
              <PillToggle
                options={[
                  { label: "Month", value: "month" },
                  { label: "Week", value: "week" },
                ]}
                value={view}
                onChange={setView}
              />
              {selectedDate && (
                <Tag
                  label={`Selected: ${selectedDate.toLocaleDateString()}`}
                  appearance="label-only"
                  color="blue"
                  solid
                />
              )}
              {clickedEvent && (
                <Tag
                  label={`Event: ${clickedEvent.title}`}
                  appearance="label-only"
                  color="green"
                  solid
                />
              )}
            </Flex>

            <div className="demo-content">
              <Calendar
                view={view}
                events={events}
                value={selectedDate}
                onDateSelect={(date) => {
                  setSelectedDate(date);
                  setClickedEvent(null);
                }}
                onEventClick={(evt) => setClickedEvent(evt)}
              />
            </div>
          </div>

          {/* ── Multi-day Events ─────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Multi-Day Spanning Events</h2>
            <p className="demo-group__description">
              Events with <code>startDate</code> and <code>endDate</code> span
              across multiple day columns. They automatically wrap across week
              rows and can span across month boundaries. Events use{" "}
              <code>type</code> and <code>status</code> for color/style.
            </p>
            <div className="demo-content">
              <Calendar
                events={[
                  {
                    id: "s1",
                    title: "Company Retreat",
                    startDate: new Date(today.getFullYear(), today.getMonth(), 2),
                    endDate: new Date(today.getFullYear(), today.getMonth(), 6),
                    type: "travel",
                    status: "active",
                    allDay: true,
                  },
                  {
                    id: "s2",
                    title: "Sprint 42",
                    startDate: new Date(today.getFullYear(), today.getMonth(), 10),
                    endDate: new Date(today.getFullYear(), today.getMonth(), 21),
                    type: "assignment",
                    status: "active",
                    allDay: true,
                  },
                  {
                    id: "s3",
                    title: "Design Week",
                    startDate: new Date(today.getFullYear(), today.getMonth(), 15),
                    endDate: new Date(today.getFullYear(), today.getMonth(), 19),
                    type: "travel",
                    status: "pending",
                    allDay: true,
                  },
                ]}
              />
            </div>
            <CodeBlock
              code={`const events = [
  {
    id: "s1",
    title: "Company Retreat",
    startDate: new Date(2025, 2, 2),
    endDate: new Date(2025, 2, 6),
    type: "travel",      // "travel" | "assignment" | "unassigned"
    status: "active",    // "active" | "past" | "pending"
    allDay: true,
  },
  {
    id: "s2",
    title: "Sprint 42",
    startDate: new Date(2025, 2, 10),
    endDate: new Date(2025, 2, 21),
    type: "assignment",
    status: "active",
    allDay: true,
  },
  {
    id: "s3",
    title: "Design Week",
    startDate: new Date(2025, 2, 15),
    endDate: new Date(2025, 2, 19),
    type: "travel",
    status: "pending",
    allDay: true,
  },
];

<Calendar events={events} />`}
            />
          </div>

          {/* ── Basic Usage ──────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Basic Usage</h2>
            <p className="demo-group__description">
              A simple calendar with no events. Renders the current month by
              default.
            </p>
            <div className="demo-content">
              <Calendar />
            </div>
            <CodeBlock
              code={`import { Calendar } from "@mich8060/chg-design-system";

function MyComponent() {
  return <Calendar />;
}`}
            />
          </div>

          {/* ── With Timed Events ─────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Timed Events</h2>
            <p className="demo-group__description">
              Single-day events with <code>startTime</code> display as compact
              bars within day cells. Time is prepended to the title.
            </p>
            <div className="demo-content">
              <Calendar
                events={events.filter((e) => !e.allDay && !e.endDate)}
                onEventClick={(evt) => alert(`Clicked: ${evt.title}`)}
              />
            </div>
            <CodeBlock
              code={`const events = [
  { id: 1, title: "Standup", startDate: new Date(2025, 2, 3), type: "travel", status: "active", startTime: "09:00" },
  { id: 2, title: "Review", startDate: new Date(2025, 2, 5), type: "assignment", status: "past", startTime: "14:00" },
];

<Calendar
  events={events}
  onEventClick={(evt) => console.log(evt.title)}
/>`}
            />
          </div>

          {/* ── Event Overflow ──────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Event Overflow</h2>
            <p className="demo-group__description">
              When a day has more events than <code>maxEventsPerDay</code>, a
              "+N more" label appears. Default is 3.
            </p>
            <div className="demo-content">
              <Calendar events={events} maxEventsPerDay={2} />
            </div>
            <CodeBlock
              code={`<Calendar events={events} maxEventsPerDay={2} />`}
            />
          </div>

          {/* ── Week View ────────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Week View</h2>
            <p className="demo-group__description">
              Show a single week at a time with taller day cells for more event
              space. Spanning events still display correctly.
            </p>
            <div className="demo-content">
              <Calendar view="week" events={events} />
            </div>
            <CodeBlock code={`<Calendar view="week" events={events} />`} />
          </div>

          {/* ── Compact Size ─────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Compact Size</h2>
            <p className="demo-group__description">
              A smaller variant with reduced spacing and fonts, ideal for
              sidebars or dashboards.
            </p>
            <div className="demo-content" style={{ maxWidth: 600 }}>
              <Calendar size="compact" events={events.slice(0, 8)} />
            </div>
            <CodeBlock code={`<Calendar size="compact" events={events} />`} />
          </div>

          {/* ── Week Numbers ─────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Week Numbers</h2>
            <p className="demo-group__description">
              Enable ISO week numbers in a column on the left.
            </p>
            <div className="demo-content">
              <Calendar showWeekNumbers events={events.slice(0, 6)} />
            </div>
            <CodeBlock code={`<Calendar showWeekNumbers events={events} />`} />
          </div>

          {/* ── Date Selection ───────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Date Selection</h2>
            <p className="demo-group__description">
              Control the selected date with the <code>value</code> and{" "}
              <code>onDateSelect</code> props.
            </p>
            <div className="demo-content">
              <Calendar value={selectedDate} onDateSelect={setSelectedDate} />
              {selectedDate && (
                <p style={{ marginTop: 12, color: "var(--uds-text-secondary)" }}>
                  Selected: <strong>{selectedDate.toDateString()}</strong>
                </p>
              )}
            </div>
            <CodeBlock
              code={`const [selected, setSelected] = useState(null);

<Calendar value={selected} onDateSelect={setSelected} />

{selected && <p>Selected: {selected.toDateString()}</p>}`}
            />
          </div>
        </div>

        <Divider variant="solid" />

        {/* ── Props Tables ──────────────────────────────────────── */}
        <div className="page__examples-section">
          <div className="demo-group">
            <h2 className="demo-group__heading">Calendar Props</h2>
            <div className="page__table-wrapper">
              <table className="page__props-table">
                <thead>
                  <tr>
                    <th>Prop</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><code>view</code></td><td><code>string</code></td><td><code>"month"</code></td><td><code>"month"</code> or <code>"week"</code></td></tr>
                  <tr><td><code>defaultDate</code></td><td><code>Date</code></td><td>Today</td><td>Initial date to display</td></tr>
                  <tr><td><code>value</code></td><td><code>Date</code></td><td>—</td><td>Selected date (controlled)</td></tr>
                  <tr><td><code>events</code></td><td><code>array</code></td><td><code>[]</code></td><td>Array of event objects</td></tr>
                  <tr><td><code>onDateSelect</code></td><td><code>function</code></td><td>—</td><td>Callback when a date is clicked</td></tr>
                  <tr><td><code>onEventClick</code></td><td><code>function</code></td><td>—</td><td>Callback when an event is clicked</td></tr>
                  <tr><td><code>maxEventsPerDay</code></td><td><code>number</code></td><td><code>3</code></td><td>Max event rows before "+N more"</td></tr>
                  <tr><td><code>showWeekNumbers</code></td><td><code>boolean</code></td><td><code>false</code></td><td>Show ISO week number column</td></tr>
                  <tr><td><code>size</code></td><td><code>string</code></td><td><code>"default"</code></td><td><code>"default"</code> or <code>"compact"</code></td></tr>
                  <tr><td><code>className</code></td><td><code>string</code></td><td><code>""</code></td><td>Additional CSS classes</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Event Object Shape ─────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Event Object Shape</h2>
            <p className="demo-group__description">
              Events use <code>type</code> and <code>status</code> to control
              color. For the standalone <code>EventCard</code> component with
              badges, icons, and richer styling, see the{" "}
              <Link to="/event-card">EventCard page</Link>.
            </p>
            <CodeBlock
              language="javascript"
              code={`{
  id: "evt-1",             // Unique identifier
  title: "Conference",     // Display title (required)
  startDate: "2025-03-10", // Start date — Date object or "YYYY-MM-DD" string (required)
  endDate: "2025-03-14",   // End date — for multi-day events (optional)
  type: "travel",          // "travel" (blue) | "assignment" (orange) | "unassigned" (gray)
  status: "active",        // "active" (solid fill) | "past" (muted) | "pending" (striped)
  startTime: "09:00",      // Optional — prepended to title for timed events
  endTime: "17:00",        // Optional
  allDay: true,            // Optional — forces spanning rendering
}

// Backward compatible: "date" works as alias for "startDate"
{ id: "e1", title: "Meeting", date: "2025-03-15", type: "travel", status: "active", startTime: "09:00" }`}
            />
          </div>

          {/* ── Event Types & Statuses ────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Event Types &amp; Statuses</h2>
            <p className="demo-group__description">
              Three event types, each with three statuses.
            </p>
            <div className="page__table-wrapper">
              <table className="page__props-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Active</th>
                    <th>Past</th>
                    <th>Pending</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>"travel"</code></td>
                    <td>Primary blue fill</td>
                    <td>Neutral gray fill</td>
                    <td>Cyan bg + stripe</td>
                  </tr>
                  <tr>
                    <td><code>"assignment"</code></td>
                    <td>Secondary fill</td>
                    <td>Neutral gray fill</td>
                    <td>Aqua bg + stripe</td>
                  </tr>
                  <tr>
                    <td><code>"unassigned"</code></td>
                    <td>Neutral 500 fill</td>
                    <td>Neutral 100 fill</td>
                    <td>Neutral bg + stripe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Divider variant="solid" />

        {/* ── Navigation ───────────────────────────────────────── */}
        <div className="page__tabs-content-container">
          <div className="demo-group">
            <div className="page__navigation">
              <Link
                to="/buttons"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Buttons</span>
              </Link>
              <Link
                to="/checkbox"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Checkbox</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
