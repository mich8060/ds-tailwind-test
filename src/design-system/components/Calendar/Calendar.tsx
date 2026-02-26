import React, { useState, useMemo, useCallback } from "react";
import Button from "../Button/Button";
import "./_calendar.scss";
import type { CalendarProps } from "./Calendar.types";

const BASE_CLASS = "uds-calendar";

const DAYS_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAYS_SHORT = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/* ── Date helpers ──────────────────────────────────────────────────── */

function normalizeDate(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function daysBetween(a, b) {
  return Math.round((b - a) / 86400000);
}

/* ── Normalize event dates ─────────────────────────────────────────── */

function normalizeEvent(evt) {
  const start = normalizeDate(evt.startDate || evt.date);
  const end = evt.endDate ? normalizeDate(evt.endDate) : start;
  const isMultiDay = daysBetween(start, end) > 0;
  const isAllDay = evt.allDay || isMultiDay;
  return { ...evt, _start: start, _end: end, _isMultiDay: isMultiDay, _isAllDay: isAllDay };
}

/* ── Lane assignment (greedy first-fit) ────────────────────────────── */

function assignLanes(segments) {
  const sorted = [...segments].sort(
    (a, b) => a.startCol - b.startCol || b.span - a.span
  );

  const lanes = [];

  return sorted.map((seg) => {
    let lane = 0;
    while (lane < lanes.length && lanes[lane] > seg.startCol) {
      lane++;
    }
    if (lane === lanes.length) lanes.push(0);
    lanes[lane] = seg.startCol + seg.span;
    return { ...seg, lane };
  });
}

/* ── Inline Event Bar ──────────────────────────────────────────────── */

function EventBar({ title, type, status, startCap, endCap, onClick }) {
  const showContent = startCap;
  const Element = onClick ? "button" : "div";

  const classNames = [
    `${BASE_CLASS}__event-bar`,
    `${BASE_CLASS}__event-bar--${type}`,
    `${BASE_CLASS}__event-bar--${status}`,
    !startCap && `${BASE_CLASS}__event-bar--no-start-cap`,
    !endCap && `${BASE_CLASS}__event-bar--no-end-cap`,
    !showContent && `${BASE_CLASS}__event-bar--bar-only`,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Element
      className={classNames}
      onClick={onClick}
      type={onClick ? "button" : undefined}
      title={title}
    >
      {status === "pending" && (
        <span className={`${BASE_CLASS}__event-bar-pattern`} aria-hidden="true" />
      )}
      {showContent && (
        <span className={`${BASE_CLASS}__event-bar-label`}>{title}</span>
      )}
    </Element>
  );
}

/* ── Calendar Component ────────────────────────────────────────────── */

/**
 * Calendar — A full-size calendar component with multi-day spanning events.
 *
 * Events support `startDate` + `endDate` for multi-day spans across
 * days, weeks, and months. Renders lightweight inline event bars.
 *
 * @param {string} view - "month" (default) or "week"
 * @param {Date} defaultDate - Initial date to display (default: today)
 * @param {Date} value - Selected date (controlled)
 * @param {Array} events - Event objects (see docs for shape)
 * @param {function} onDateSelect - (date: Date) => void
 * @param {function} onEventClick - (event, e) => void
 * @param {number} maxEventsPerDay - Max event rows per cell (default: 3)
 * @param {boolean} showWeekNumbers - Show ISO week number column
 * @param {string} size - "default" or "compact"
 * @param {string} className - Additional CSS classes
 */
export default function Calendar({
  view = "month",
  defaultDate,
  value,
  events = [],
  onDateSelect,
  onEventClick,
  maxEventsPerDay = 3,
  showWeekNumbers = false,
  size = "default",
  className = "",
  ...rest
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(
    defaultDate ? normalizeDate(defaultDate) : normalizeDate(new Date())
  );

  const today = useMemo(() => normalizeDate(new Date()), []);
  const year = currentDate.getFullYear();
  const monthIndex = currentDate.getMonth();

  // ── Normalize all events ────────────────────────────────────────
  const normalizedEvents = useMemo(
    () => events.map(normalizeEvent),
    [events]
  );

  // ── Build 6-row month grid ──────────────────────────────────────
  const calendarWeeks = useMemo(() => {
    const firstOfMonth = new Date(year, monthIndex, 1);
    const startDay = firstOfMonth.getDay();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, monthIndex, 0).getDate();

    const weeks = [];
    let dayCounter = 1;
    let nextMonthDay = 1;

    for (let w = 0; w < 6; w++) {
      const row = [];
      for (let dow = 0; dow < 7; dow++) {
        const idx = w * 7 + dow;
        if (idx < startDay) {
          const prevDay = daysInPrevMonth - startDay + 1 + idx;
          row.push({ date: normalizeDate(new Date(year, monthIndex - 1, prevDay)), isCurrentMonth: false });
        } else if (dayCounter <= daysInMonth) {
          row.push({ date: normalizeDate(new Date(year, monthIndex, dayCounter)), isCurrentMonth: true });
          dayCounter++;
        } else {
          row.push({ date: normalizeDate(new Date(year, monthIndex + 1, nextMonthDay)), isCurrentMonth: false });
          nextMonthDay++;
        }
      }
      weeks.push(row);
    }
    return weeks;
  }, [year, monthIndex]);

  // ── Week view grid ──────────────────────────────────────────────
  const weekDays = useMemo(() => {
    if (view !== "week") return [];
    const start = new Date(currentDate);
    start.setDate(start.getDate() - start.getDay());
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(d.getDate() + i);
      return normalizeDate(d);
    });
  }, [view, currentDate]);

  // ── Compute event layout for a week row ─────────────────────────
  const computeWeekLayout = useCallback(
    (weekDates) => {
      const weekStart = weekDates[0];
      const weekEnd = weekDates[6];

      const spanningEvents = [];
      const timedByDay = Array.from({ length: 7 }, () => []);

      normalizedEvents.forEach((evt) => {
        if (evt._end < weekStart || evt._start > weekEnd) return;

        if (evt._isAllDay || evt._isMultiDay) {
          const clipStart = evt._start < weekStart ? weekStart : evt._start;
          const clipEnd = evt._end > weekEnd ? weekEnd : evt._end;
          const startCol = daysBetween(weekStart, clipStart);
          const endCol = daysBetween(weekStart, clipEnd);
          const span = endCol - startCol + 1;

          spanningEvents.push({
            event: evt,
            startCol,
            span,
            isStart: evt._start >= weekStart,
            isEnd: evt._end <= weekEnd,
          });
        } else {
          const col = daysBetween(weekStart, evt._start);
          if (col >= 0 && col < 7) {
            timedByDay[col].push(evt);
          }
        }
      });

      timedByDay.forEach((arr) =>
        arr.sort((a, b) => (a.startTime || "").localeCompare(b.startTime || ""))
      );

      const segments = assignLanes(spanningEvents);
      const maxLane = segments.length > 0 ? Math.max(...segments.map((s) => s.lane)) + 1 : 0;

      return { segments, timedByDay, maxLane };
    },
    [normalizedEvents]
  );

  // ── Precompute layouts for all visible weeks ────────────────────
  const weekLayouts = useMemo(() => {
    if (view === "month") {
      return calendarWeeks.map((week) =>
        computeWeekLayout(week.map((c) => c.date))
      );
    }
    if (view === "week") {
      return [computeWeekLayout(weekDays)];
    }
    return [];
  }, [view, calendarWeeks, weekDays, computeWeekLayout]);

  // ── ISO week number ─────────────────────────────────────────────
  const getWeekNumber = useCallback((date) => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  }, []);

  // ── Navigation ──────────────────────────────────────────────────
  const handlePrev = () => {
    if (view === "week") {
      setCurrentDate((d) => { const n = new Date(d); n.setDate(n.getDate() - 7); return n; });
    } else {
      setCurrentDate(new Date(year, monthIndex - 1, 1));
    }
  };

  const handleNext = () => {
    if (view === "week") {
      setCurrentDate((d) => { const n = new Date(d); n.setDate(n.getDate() + 7); return n; });
    } else {
      setCurrentDate(new Date(year, monthIndex + 1, 1));
    }
  };

  const handleToday = () => setCurrentDate(normalizeDate(new Date()));

  // ── Helpers ─────────────────────────────────────────────────────
  const isToday = (date) => date.getTime() === today.getTime();
  const isSelected = (date) => value && date.getTime() === normalizeDate(value).getTime();

  const handleDateClick = (date) => {
    if (onDateSelect) onDateSelect(date);
  };
  const handleEventClick = (evt, e) => {
    e.stopPropagation();
    if (onEventClick) onEventClick(evt, e);
  };

  // ── Header title ────────────────────────────────────────────────
  const headerTitle = useMemo(() => {
    if (view === "week" && weekDays.length === 7) {
      const s = weekDays[0];
      const e = weekDays[6];
      if (s.getMonth() === e.getMonth()) {
        return `${MONTHS[s.getMonth()]} ${s.getDate()}–${e.getDate()}, ${s.getFullYear()}`;
      }
      return `${MONTHS[s.getMonth()].slice(0, 3)} ${s.getDate()} – ${MONTHS[e.getMonth()].slice(0, 3)} ${e.getDate()}, ${e.getFullYear()}`;
    }
    return `${MONTHS[monthIndex]} ${year}`;
  }, [view, weekDays, monthIndex, year]);

  // ── Render a week row ───────────────────────────────────────────
  const renderWeekRow = (dates, cells, layout, weekIdx) => {
    const { segments, timedByDay, maxLane } = layout;

    // Build lane grid: lanes[lane][col] = segment | null
    const laneGrid = Array.from({ length: maxLane }, () => Array(7).fill(null));
    segments.forEach((seg) => {
      for (let c = seg.startCol; c < seg.startCol + seg.span; c++) {
        laneGrid[seg.lane][c] = seg;
      }
    });

    // For each cell, compute total event count and overflow
    const cellEventCounts = dates.map((_, col) => {
      let count = 0;
      for (let lane = 0; lane < maxLane; lane++) {
        if (laneGrid[lane][col]) count++;
      }
      count += timedByDay[col].length;
      return count;
    });

    const maxRows = maxEventsPerDay;

    return (
      <div key={weekIdx} className={`${BASE_CLASS}__week-row`}>
        {showWeekNumbers && (
          <div className={`${BASE_CLASS}__week-number`}>
            {getWeekNumber(dates[0])}
          </div>
        )}
        <div className={`${BASE_CLASS}__week-content`}>
          {/* Day number strip */}
          <div className={`${BASE_CLASS}__day-strip`}>
            {dates.map((date, col) => {
              const cell = cells ? cells[col] : null;
              const isOutside = cell ? !cell.isCurrentMonth : false;
              return (
                <div
                  key={toDateKey(date)}
                  className={[
                    `${BASE_CLASS}__day-cell`,
                    isOutside && `${BASE_CLASS}__day-cell--outside`,
                    isToday(date) && `${BASE_CLASS}__day-cell--today`,
                    isSelected(date) && `${BASE_CLASS}__day-cell--selected`,
                  ].filter(Boolean).join(" ")}
                  onClick={() => handleDateClick(date)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleDateClick(date);
                    }
                  }}
                  aria-label={`${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`}
                >
                  <span
                    className={[
                      `${BASE_CLASS}__day-number`,
                      isToday(date) && `${BASE_CLASS}__day-number--today`,
                    ].filter(Boolean).join(" ")}
                  >
                    {date.getDate()}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Events overlay — absolutely positioned over day cells */}
          <div className={`${BASE_CLASS}__events-overlay`}>
            {/* Event lanes (spanning / all-day events) */}
            {Array.from({ length: Math.min(maxLane, maxRows) }, (_, laneIdx) => (
              <div key={`lane-${laneIdx}`} className={`${BASE_CLASS}__event-lane`}>
                {(() => {
                  const rendered = [];
                  let col = 0;
                  while (col < 7) {
                    const seg = laneGrid[laneIdx][col];
                    if (seg && col === seg.startCol) {
                      rendered.push(
                        <div
                          key={seg.event.id || `seg-${col}`}
                          className={`${BASE_CLASS}__event-slot`}
                          style={{ gridColumn: `${col + 1} / ${col + seg.span + 1}` }}
                        >
                          <EventBar
                            title={seg.event.title}
                            type={seg.event.type || "travel"}
                            status={seg.event.status || "active"}
                            startCap={seg.isStart}
                            endCap={seg.isEnd}
                            onClick={onEventClick ? (e) => handleEventClick(seg.event, e) : undefined}
                          />
                        </div>
                      );
                      col += seg.span;
                    } else if (seg && col !== seg.startCol) {
                      col++;
                    } else {
                      rendered.push(
                        <div
                          key={`empty-${col}`}
                          className={`${BASE_CLASS}__event-slot ${BASE_CLASS}__event-slot--empty`}
                          style={{ gridColumn: `${col + 1}` }}
                        />
                      );
                      col++;
                    }
                  }
                  return rendered;
                })()}
              </div>
            ))}

            {/* Timed events row */}
            <div className={`${BASE_CLASS}__timed-row`}>
              {dates.map((date, col) => {
                const usedLanes = Math.min(maxLane, maxRows);
                const remainingSlots = Math.max(0, maxRows - usedLanes);
                const visibleTimed = timedByDay[col].slice(0, remainingSlots);
                const totalEvents = cellEventCounts[col];
                const overflowCount = totalEvents - maxRows;

                return (
                  <div key={toDateKey(date)} className={`${BASE_CLASS}__timed-col`}>
                    {visibleTimed.map((evt) => (
                      <EventBar
                        key={evt.id || evt.title}
                        title={evt.startTime ? `${evt.startTime} ${evt.title}` : evt.title}
                        type={evt.type || "travel"}
                        status={evt.status || "active"}
                        startCap
                        endCap
                        onClick={onEventClick ? (e) => handleEventClick(evt, e) : undefined}
                      />
                    ))}
                    {overflowCount > 0 && (
                      <span className={`${BASE_CLASS}__more`}>
                        +{overflowCount} more
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // ── Root class ──────────────────────────────────────────────────
  const rootClass = [
    BASE_CLASS,
    size === "compact" && `${BASE_CLASS}--compact`,
    view === "week" && `${BASE_CLASS}--week`,
    className,
  ].filter(Boolean).join(" ");

  // ── RENDER ──────────────────────────────────────────────────────
  return (
    <div className={rootClass} {...rest}>
      {/* Header */}
      <div className={`${BASE_CLASS}__header`}>
        <div className={`${BASE_CLASS}__header-left`}>
          <h2 className={`${BASE_CLASS}__title`}>{headerTitle}</h2>
        </div>
        <div className={`${BASE_CLASS}__header-right`}>
          <Button label="Today" appearance="outline" size="small" onClick={handleToday} />
          <Button icon="CaretLeft" appearance="ghost" size="small" layout="icon-only" onClick={handlePrev} aria-label={view === "week" ? "Previous week" : "Previous month"} />
          <Button icon="CaretRight" appearance="ghost" size="small" layout="icon-only" onClick={handleNext} aria-label={view === "week" ? "Next week" : "Next month"} />
        </div>
      </div>

      {/* Weekday header */}
      <div className={`${BASE_CLASS}__weekday-row`}>
        {showWeekNumbers && <div className={`${BASE_CLASS}__week-number-header`}>Wk</div>}
        {(size === "compact" ? DAYS_SHORT : DAYS_OF_WEEK).map((day, i) => (
          <div key={i} className={`${BASE_CLASS}__weekday`}>{day}</div>
        ))}
      </div>

      {/* Month view */}
      {view === "month" && (
        <div className={`${BASE_CLASS}__grid`}>
          {calendarWeeks.map((week, idx) =>
            renderWeekRow(
              week.map((c) => c.date),
              week,
              weekLayouts[idx],
              idx
            )
          )}
        </div>
      )}

      {/* Week view */}
      {view === "week" && weekLayouts.length > 0 && (
        <div className={`${BASE_CLASS}__grid`}>
          {renderWeekRow(weekDays, null, weekLayouts[0], 0)}
        </div>
      )}
    </div>
  );
}
