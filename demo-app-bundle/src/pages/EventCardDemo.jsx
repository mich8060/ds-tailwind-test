import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import EventCard from "../ui/EventCard/EventCard";
import Breadcrumb from "../ui/Breadcrumb/Breadcrumb";
import Divider from "../ui/Divider/Divider";
import Flex from "../ui/Flex/Flex";
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

export default function EventCardDemo() {
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
              <h1 className="page__header-title">Event Card</h1>
              <p className="page__header-description">
                A visual scheduling event bar (blade) for calendars, schedules,
                and lists. Supports three event types, three statuses, optional
                badge, optional expand icon, and startCap/endCap for multi-day
                spanning.
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
                  <span className="page__version-badge">UPDATED</span>
                </Flex>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="page__content">
        {/* ── Types × Statuses ────────────────────────────────── */}
        <div className="page__examples-section">
          <div className="demo-group">
            <h2 className="demo-group__heading">Types &amp; Statuses</h2>
            <p className="demo-group__description">
              Three event types (<code>travel</code>, <code>assignment</code>,{" "}
              <code>unassigned</code>) each with three statuses (
              <code>active</code>, <code>past</code>, <code>pending</code>).
            </p>
            <div className="demo-content">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 240px)", gap: "var(--uds-spacing-16)" }}>
                {/* Header row */}
                <p style={{ fontWeight: 600, fontSize: "var(--uds-font-size-12)", color: "var(--uds-text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Active</p>
                <p style={{ fontWeight: 600, fontSize: "var(--uds-font-size-12)", color: "var(--uds-text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Past</p>
                <p style={{ fontWeight: 600, fontSize: "var(--uds-font-size-12)", color: "var(--uds-text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Pending</p>

                {/* Travel */}
                <EventCard title="Travel Event" type="travel" status="active" />
                <EventCard title="Travel Event" type="travel" status="past" />
                <EventCard title="Travel Event" type="travel" status="pending" />

                {/* Assignment */}
                <EventCard title="Assignment" type="assignment" status="active" />
                <EventCard title="Assignment" type="assignment" status="past" />
                <EventCard title="Assignment" type="assignment" status="pending" />

                {/* Unassigned */}
                <EventCard title="Unassigned" type="unassigned" status="active" />
                <EventCard title="Unassigned" type="unassigned" status="past" />
                <EventCard title="Unassigned" type="unassigned" status="pending" />
              </div>
            </div>
            <CodeBlock
              code={`import { EventCard } from "@mich8060/chg-design-system";

// Travel (blue) — Active, Past, Pending
<EventCard title="Travel Event" type="travel" status="active" />
<EventCard title="Travel Event" type="travel" status="past" />
<EventCard title="Travel Event" type="travel" status="pending" />

// Assignment (orange)
<EventCard title="Assignment" type="assignment" status="active" />
<EventCard title="Assignment" type="assignment" status="past" />
<EventCard title="Assignment" type="assignment" status="pending" />

// Unassigned (gray)
<EventCard title="Unassigned" type="unassigned" status="active" />
<EventCard title="Unassigned" type="unassigned" status="past" />
<EventCard title="Unassigned" type="unassigned" status="pending" />`}
            />
          </div>

          {/* ── With Badge ──────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Badge</h2>
            <p className="demo-group__description">
              Use the <code>badge</code> prop to show a compact label tag inside
              the event bar. Great for showing event counts or categories.
            </p>
            <div className="demo-content">
              <Flex direction="column" gap="8" style={{ maxWidth: 280 }}>
                <EventCard title="Denver" type="travel" status="active" badge="Label" />
                <EventCard title="Salt Lake" type="assignment" status="active" badge="Label" />
                <EventCard title="Open Shift" type="unassigned" status="active" badge="Label" />
              </Flex>
            </div>
            <CodeBlock
              code={`<EventCard title="Denver" type="travel" status="active" badge="Label" />
<EventCard title="Salt Lake" type="assignment" status="active" badge="Label" />
<EventCard title="Open Shift" type="unassigned" status="active" badge="Label" />`}
            />
          </div>

          {/* ── With Icon ───────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">With Icon</h2>
            <p className="demo-group__description">
              Use the <code>icon</code> prop to show a CornersOut expand icon.
              Can be combined with the badge.
            </p>
            <div className="demo-content">
              <Flex direction="column" gap="8" style={{ maxWidth: 280 }}>
                <EventCard title="Denver" type="travel" status="active" icon />
                <EventCard title="Denver" type="travel" status="active" badge="Label" icon />
                <EventCard title="Assignment" type="assignment" status="active" icon />
                <EventCard title="Assignment" type="assignment" status="active" badge="Label" icon />
              </Flex>
            </div>
            <CodeBlock
              code={`// Icon only
<EventCard title="Denver" type="travel" status="active" icon />

// Badge + Icon
<EventCard title="Denver" type="travel" status="active" badge="Label" icon />

// Assignment with icon
<EventCard title="Assignment" type="assignment" status="active" icon />`}
            />
          </div>

          {/* ── Start & End Caps (Spanning) ──────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Start &amp; End Caps (Spanning)</h2>
            <p className="demo-group__description">
              Use <code>startCap</code> and <code>endCap</code> to control which
              ends are rounded. This is used for multi-day spanning in calendars.
              When neither icon nor badge is set and <code>startCap</code> is{" "}
              <code>false</code>, only a color bar is rendered.
            </p>
            <div className="demo-content">
              <Flex direction="column" gap="12" style={{ maxWidth: 600 }}>
                {/* Both caps (single day) */}
                <div>
                  <p style={{ marginBottom: 4, color: "var(--uds-text-secondary)", fontSize: "var(--uds-font-size-12)" }}>
                    startCap + endCap (single day)
                  </p>
                  <div style={{ maxWidth: 240 }}>
                    <EventCard title="Single Day" type="travel" status="active" startCap endCap />
                  </div>
                </div>

                {/* Multi-day span */}
                <div>
                  <p style={{ marginBottom: 4, color: "var(--uds-text-secondary)", fontSize: "var(--uds-font-size-12)" }}>
                    Multi-day span: start → middle → middle → end
                  </p>
                  <Flex gap="0" style={{ width: "100%" }}>
                    <div style={{ flex: 1 }}>
                      <EventCard title="5-Day Trip" type="travel" status="active" startCap endCap={false} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <EventCard title="" type="travel" status="active" startCap={false} endCap={false} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <EventCard title="" type="travel" status="active" startCap={false} endCap={false} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <EventCard title="" type="travel" status="active" startCap={false} endCap />
                    </div>
                  </Flex>
                </div>

                {/* Assignment span */}
                <div>
                  <p style={{ marginBottom: 4, color: "var(--uds-text-secondary)", fontSize: "var(--uds-font-size-12)" }}>
                    Assignment span
                  </p>
                  <Flex gap="0" style={{ width: "100%" }}>
                    <div style={{ flex: 1 }}>
                      <EventCard title="Assignment" type="assignment" status="active" startCap endCap={false} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <EventCard title="" type="assignment" status="active" startCap={false} endCap={false} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <EventCard title="" type="assignment" status="active" startCap={false} endCap />
                    </div>
                  </Flex>
                </div>

                {/* Pending span */}
                <div>
                  <p style={{ marginBottom: 4, color: "var(--uds-text-secondary)", fontSize: "var(--uds-font-size-12)" }}>
                    Pending span
                  </p>
                  <Flex gap="0" style={{ width: "100%" }}>
                    <div style={{ flex: 1 }}>
                      <EventCard title="Pending Trip" type="travel" status="pending" startCap endCap={false} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <EventCard title="" type="travel" status="pending" startCap={false} endCap={false} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <EventCard title="" type="travel" status="pending" startCap={false} endCap />
                    </div>
                  </Flex>
                </div>
              </Flex>
            </div>
            <CodeBlock
              code={`// Single day (both caps)
<EventCard title="Meeting" type="travel" status="active" startCap endCap />

// Start of span (rounded left only)
<EventCard title="5-Day Trip" type="travel" status="active" startCap endCap={false} />

// Middle of span (no rounding, bar only)
<EventCard title="" type="travel" status="active" startCap={false} endCap={false} />

// End of span (rounded right only, bar only)
<EventCard title="" type="travel" status="active" startCap={false} endCap />`}
            />
          </div>

          {/* ── With Icon on End Cap ──────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Icon on End Cap</h2>
            <p className="demo-group__description">
              When <code>icon</code> is true and <code>startCap</code> is false,
              the content area (title + icon) still appears — useful for showing
              an expand icon on the trailing segment of a span.
            </p>
            <div className="demo-content">
              <Flex gap="0" style={{ maxWidth: 500 }}>
                <div style={{ flex: 1 }}>
                  <EventCard title="Denver Trip" type="travel" status="active" startCap endCap={false} />
                </div>
                <div style={{ flex: 1 }}>
                  <EventCard title="Denver Trip" type="travel" status="active" startCap={false} endCap icon />
                </div>
              </Flex>
            </div>
            <CodeBlock
              code={`// Start segment
<EventCard title="Denver Trip" type="travel" status="active" startCap endCap={false} />

// End segment with expand icon
<EventCard title="Denver Trip" type="travel" status="active" startCap={false} endCap icon />`}
            />
          </div>

          {/* ── Clickable ───────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Clickable Events</h2>
            <p className="demo-group__description">
              Pass an <code>onClick</code> handler to make event cards
              interactive. When clickable, the component renders as a{" "}
              <code>&lt;button&gt;</code> with hover and focus states.
            </p>
            <div className="demo-content">
              <Flex direction="column" gap="8" style={{ maxWidth: 280 }}>
                <EventCard
                  title="Click me!"
                  type="travel"
                  status="active"
                  onClick={() => alert("Event clicked!")}
                />
                <EventCard
                  title="Hover for effect"
                  type="assignment"
                  status="active"
                  onClick={() => {}}
                />
              </Flex>
            </div>
            <CodeBlock
              code={`<EventCard
  title="Clickable Event"
  type="travel"
  status="active"
  onClick={() => console.log("Event clicked!")}
/>`}
            />
          </div>

          {/* ── All Variants ─────────────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">All Variants Matrix</h2>
            <p className="demo-group__description">
              Full matrix showing every type × status combination with badge and
              icon.
            </p>
            <div className="demo-content">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 240px)", gap: "8px 16px" }}>
                {/* Header */}
                <p style={{ fontWeight: 600, fontSize: "var(--uds-font-size-12)", color: "var(--uds-text-secondary)" }}>Active</p>
                <p style={{ fontWeight: 600, fontSize: "var(--uds-font-size-12)", color: "var(--uds-text-secondary)" }}>Past</p>
                <p style={{ fontWeight: 600, fontSize: "var(--uds-font-size-12)", color: "var(--uds-text-secondary)" }}>Pending</p>

                {/* Travel with badge + icon */}
                <EventCard title="Travel" type="travel" status="active" badge="Label" icon />
                <EventCard title="Travel" type="travel" status="past" badge="Label" icon />
                <EventCard title="Travel" type="travel" status="pending" badge="Label" icon />

                {/* Assignment with badge + icon */}
                <EventCard title="Assignment" type="assignment" status="active" badge="Label" icon />
                <EventCard title="Assignment" type="assignment" status="past" badge="Label" icon />
                <EventCard title="Assignment" type="assignment" status="pending" badge="Label" icon />

                {/* Unassigned with badge + icon */}
                <EventCard title="Unassigned" type="unassigned" status="active" badge="Label" icon />
                <EventCard title="Unassigned" type="unassigned" status="past" badge="Label" icon />
                <EventCard title="Unassigned" type="unassigned" status="pending" badge="Label" icon />
              </div>
            </div>
          </div>

          {/* ── Schedule List Pattern ─────────────────────────────── */}
          <div className="demo-group">
            <h2 className="demo-group__heading">Schedule List Pattern</h2>
            <p className="demo-group__description">
              Combine EventCards in a vertical list to build daily schedules or
              agenda views.
            </p>
            <div className="demo-content">
              <div style={{ maxWidth: 300, background: "var(--uds-surface-secondary)", borderRadius: "var(--uds-radius-8)", padding: "var(--uds-spacing-12)" }}>
                <p style={{ margin: "0 0 8px", fontWeight: 600, color: "var(--uds-text-primary)", fontSize: "var(--uds-font-size-14)" }}>Today's Schedule</p>
                <Flex direction="column" gap="4">
                  <EventCard title="Denver, CO" type="travel" status="active" onClick={() => {}} />
                  <EventCard title="Salt Lake City" type="assignment" status="active" badge="2" onClick={() => {}} />
                  <EventCard title="Open Shift" type="unassigned" status="active" onClick={() => {}} />
                  <EventCard title="Portland" type="travel" status="pending" onClick={() => {}} />
                  <EventCard title="Completed" type="assignment" status="past" onClick={() => {}} />
                </Flex>
              </div>
            </div>
            <CodeBlock
              code={`<Flex direction="column" gap="4">
  <EventCard title="Denver, CO" type="travel" status="active" onClick={...} />
  <EventCard title="Salt Lake City" type="assignment" status="active" badge="2" onClick={...} />
  <EventCard title="Open Shift" type="unassigned" status="active" onClick={...} />
  <EventCard title="Portland" type="travel" status="pending" onClick={...} />
  <EventCard title="Completed" type="assignment" status="past" onClick={...} />
</Flex>`}
            />
          </div>
        </div>

        <Divider variant="solid" />

        {/* ── Props Table ────────────────────────────────────────── */}
        <div className="page__examples-section">
          <div className="demo-group">
            <h2 className="demo-group__heading">Props</h2>
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
                  <tr>
                    <td><code>title</code></td>
                    <td><code>string</code></td>
                    <td><code>"Title"</code></td>
                    <td>Event title text</td>
                  </tr>
                  <tr>
                    <td><code>type</code></td>
                    <td><code>string</code></td>
                    <td><code>"travel"</code></td>
                    <td>Event type that determines color: <code>"travel"</code> (blue), <code>"assignment"</code> (orange), <code>"unassigned"</code> (gray)</td>
                  </tr>
                  <tr>
                    <td><code>status</code></td>
                    <td><code>string</code></td>
                    <td><code>"active"</code></td>
                    <td>Event status: <code>"active"</code> (solid fill), <code>"past"</code> (neutral gray), <code>"pending"</code> (striped pattern)</td>
                  </tr>
                  <tr>
                    <td><code>badge</code></td>
                    <td><code>string</code></td>
                    <td>—</td>
                    <td>Badge label text. Shows a compact inverse Tag when provided.</td>
                  </tr>
                  <tr>
                    <td><code>icon</code></td>
                    <td><code>boolean</code></td>
                    <td><code>false</code></td>
                    <td>Show CornersOut expand icon on the right side</td>
                  </tr>
                  <tr>
                    <td><code>startCap</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Rounded left corners. Set to <code>false</code> for middle/end segments of a span.</td>
                  </tr>
                  <tr>
                    <td><code>endCap</code></td>
                    <td><code>boolean</code></td>
                    <td><code>true</code></td>
                    <td>Rounded right corners. Set to <code>false</code> for start/middle segments of a span.</td>
                  </tr>
                  <tr>
                    <td><code>onClick</code></td>
                    <td><code>function</code></td>
                    <td>—</td>
                    <td>Click handler — renders as <code>&lt;button&gt;</code> when provided</td>
                  </tr>
                  <tr>
                    <td><code>className</code></td>
                    <td><code>string</code></td>
                    <td><code>""</code></td>
                    <td>Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Divider variant="solid" />

        {/* ── Navigation ─────────────────────────────────────────── */}
        <div className="page__tabs-content-container">
          <div className="demo-group">
            <div className="page__navigation">
              <Link
                to="/dropdown"
                className="page__nav-link page__nav-link--prev"
              >
                <span className="page__nav-label">Previous</span>
                <span className="page__nav-title">Dropdown</span>
              </Link>
              <Link
                to="/field"
                className="page__nav-link page__nav-link--next"
              >
                <span className="page__nav-label">Next</span>
                <span className="page__nav-title">Field</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
