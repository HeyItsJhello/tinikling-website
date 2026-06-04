import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "../../data/events";
import ProgramModal from "./ProgramModal";

// ─── Precomputed at module load (runs once, never again) ──────────────────────

function parseDate(dateStr) {
  if (!dateStr) return new Date(0);
  if (dateStr.includes(",")) return new Date(dateStr);
  const parts = dateStr.split(" ");
  if (parts.length === 2) return new Date(`${parts[0]} 1, ${parts[1]}`);
  return new Date(dateStr);
}

const YEAR_SECTIONS = [
  { keys: ["upcoming", "2026-current"], title: "26-27" },
  { keys: ["2025-26"], title: "25-26" },
  { keys: ["2024-25"], title: "24-25" },
  { keys: ["2023-24"], title: "23-24" },
  { keys: ["2022-23"], title: "22-23" },
  { keys: ["2021-22"], title: "21-22" },
  { keys: ["2019-20"], title: "19-20" },
  { keys: ["2018-19"], title: "18-19" },
  { keys: ["2017-18"], title: "17-18" },
  { keys: ["2016-17"], title: "16-17" },
  { keys: ["2015-16"], title: "15-16" },
  { keys: ["2014-15"], title: "14-15" },
  { keys: ["2013-14"], title: "13-14" },
  { keys: ["2012-13"], title: "12-13" },
  { keys: ["2011-12"], title: "11-12" },
  { keys: ["2010-11"], title: "10-11" },
  { keys: ["2009-10"], title: "09-10" },
];

const GROUPED_EVENTS = (() => {
  const result = events.reduce((acc, event) => {
    if (!acc[event.year]) acc[event.year] = [];
    acc[event.year].push(event);
    return acc;
  }, {});
  Object.keys(result).forEach(year => {
    result[year].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  });
  return result;
})();

const SECTION_EVENTS = YEAR_SECTIONS.map(section =>
  section.keys.flatMap(key => GROUPED_EVENTS[key] || [])
);

const UPCOMING_EVENTS = GROUPED_EVENTS["upcoming"] || [];
const CURRENT_EVENTS = GROUPED_EVENTS["2026-current"] || [];

// ─── Sub-components (stable references, never re-created) ─────────────────────

const navBtnTransition = { duration: 0.15 };

function NavButton({ onClick, disabled, children }) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.08 } : {}}
      whileTap={!disabled ? { scale: 0.93 } : {}}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "2.8rem", height: "2.8rem",
        borderRadius: "50%",
        border: `2px solid ${disabled ? "rgba(218,160,109,0.2)" : "var(--red)"}`,
        background: "transparent",
        color: disabled ? "rgba(218,160,109,0.3)" : "var(--red)",
        fontSize: "1.1rem", cursor: disabled ? "default" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, fontFamily: "inherit",
        transition: "border-color 0.15s, color 0.15s",
      }}
    >
      {children}
    </motion.button>
  );
}

function SectionDivider({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "0 0 2rem" }}>
      <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
      <span style={{
        fontSize: "0.63rem", fontWeight: "800", letterSpacing: "0.16em",
        textTransform: "uppercase", color: "var(--red)",
        fontFamily: "var(--font-display)", whiteSpace: "nowrap",
      }}>
        {label}
      </span>
      <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
    </div>
  );
}

const featuredVariants = {
  rest: { y: 0, boxShadow: "0 12px 48px rgba(0,0,0,0.18)" },
  hovered: { y: -4, boxShadow: "0 20px 60px rgba(0,0,0,0.25)" },
};

function FeaturedCard({ event, onProgramOpen }) {
  const hasImage = event.image && event.image !== "";

  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hovered"
      variants={featuredVariants}
      transition={{ duration: 0.2 }}
      className="featured-event-card"
      style={{
        position: "relative", borderRadius: "1.25rem",
        overflow: "hidden", marginBottom: "2.5rem",
        minHeight: "24rem",
      }}
    >
      {hasImage ? (
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <div style={{
          position: "absolute", inset: 0, background: "var(--dark)",
          backgroundImage: "repeating-linear-gradient(135deg,rgba(218,160,109,0.08) 0,rgba(218,160,109,0.08) 1px,transparent 1px,transparent 24px),repeating-linear-gradient(45deg,rgba(218,160,109,0.05) 0,rgba(218,160,109,0.05) 1px,transparent 1px,transparent 24px)",
        }} />
      )}
      <div style={{
        position: "absolute", inset: 0,
        background: hasImage
          ? "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.12) 100%)"
          : "rgba(0,0,0,0.25)",
      }} />
      <div style={{
        position: "relative", zIndex: 1,
        padding: "clamp(2rem, 5vw, 3.5rem)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "flex-end",
        minHeight: "24rem", textAlign: "center",
      }}>
        <span style={{
          display: "inline-block", padding: "0.22rem 0.85rem",
          background: "var(--red)", borderRadius: "999px",
          fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.16em",
          textTransform: "uppercase", color: "white",
          fontFamily: "var(--font-display)", marginBottom: "0.85rem",
        }}>
          Featured Event
        </span>
        <h2 style={{ color: "white", margin: "0 0 0.6rem", fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
          {event.title}
        </h2>
        {event.date && event.date !== "TBD" ? (
          <p style={{ color: "var(--gold)", margin: "0 0 0.7rem", fontWeight: "600", fontSize: "0.9rem", fontFamily: "var(--font-body)" }}>
            {event.date}
          </p>
        ) : event.date === "TBD" ? (
          <p style={{ color: "rgba(255,255,255,0.45)", margin: "0 0 0.7rem", fontFamily: "var(--font-body)", fontSize: "0.88rem" }}>
            Date to be announced
          </p>
        ) : null}
        {event.description && (
          <p style={{ color: "rgba(255,255,255,0.8)", margin: "0 0 1.75rem", maxWidth: "55ch", lineHeight: "1.75", fontSize: "clamp(0.88rem, 2vw, 1rem)", fontFamily: "var(--font-body)" }}>
            {event.description}
          </p>
        )}
        <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", justifyContent: "center" }}>
          {event.video && event.video !== "" && (
            <motion.a
              href={event.video} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                background: "var(--red)", color: "white",
                padding: "0.7rem 1.75rem", borderRadius: "0.55rem",
                textDecoration: "none", fontWeight: "700",
                fontSize: "0.88rem", fontFamily: "var(--font-display)",
                letterSpacing: "0.03em",
              }}
            >
              Watch Performance →
            </motion.a>
          )}
          {event.programLink && event.programLink !== "" && (
            <motion.a
              href={event.programLink} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                color: "white", border: "1.5px solid rgba(255,255,255,0.3)",
                padding: "0.7rem 1.75rem", borderRadius: "0.55rem",
                textDecoration: "none", fontWeight: "600",
                fontSize: "0.88rem", fontFamily: "var(--font-body)",
              }}
            >
              2025 Show Program
            </motion.a>
          )}
          {event.program && (
            <motion.button
              onClick={() => onProgramOpen(event.program, event.title)}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{
                background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)",
                color: "white", border: "1.5px solid rgba(255,255,255,0.3)",
                padding: "0.7rem 1.75rem", borderRadius: "0.55rem",
                cursor: "pointer", fontWeight: "600",
                fontSize: "0.88rem", fontFamily: "var(--font-body)",
              }}
            >
              Show Program
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const eventCardVariants = {
  rest: { y: 0, boxShadow: "0 4px 16px rgba(0,0,0,0.07)" },
  hovered: { y: -5, boxShadow: "0 12px 32px rgba(0,0,0,0.13)" },
};

function EventCard({ event }) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hovered"
      variants={eventCardVariants}
      transition={{ duration: 0.2 }}
      style={{
        background: "white", borderRadius: "1rem",
        overflow: "hidden", display: "flex", flexDirection: "column",
        border: event.featured ? "2px solid var(--red)" : "1.5px solid rgba(218,160,109,0.3)",
      }}
    >
      <div style={{ position: "relative", paddingTop: "62.5%", flexShrink: 0, background: "var(--dark)" }}>
        {event.image ? (
          <img
            src={event.image} alt={event.title}
            loading="lazy"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "repeating-linear-gradient(135deg,rgba(218,160,109,0.08) 0,rgba(218,160,109,0.08) 1px,transparent 1px,transparent 24px)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "rgba(218,160,109,0.35)", fontSize: "1.8rem", fontFamily: "var(--font-display)" }}>TDC</span>
          </div>
        )}
      </div>
      <div style={{ padding: "0.85rem 1rem 1rem", flex: 1, display: "flex", flexDirection: "column", textAlign: "center" }}>
        <h3 className="event-card-title" style={{ color: "var(--dark)", margin: "0 0 0.25rem", lineHeight: "1.4" }}>
          {event.title}
        </h3>
        <strong className="event-card-date" style={{ color: "var(--gold)", display: "block", marginBottom: "0.35rem", fontSize: "0.78rem", fontFamily: "var(--font-body)", fontWeight: "600" }}>
          {event.date}
        </strong>
        {event.description && (
          <p className="event-card-description" style={{
            color: "var(--dark)", margin: "0 0 0.6rem", flex: 1,
            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>
            {event.description}
          </p>
        )}
        {event.video && event.video !== "" && (
          <a href={event.video} target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-block", marginTop: "auto",
              color: "var(--red)", fontWeight: "700", fontSize: "0.8rem",
              textDecoration: "none", fontFamily: "var(--font-body)",
            }}
          >
            Watch →
          </a>
        )}
      </div>
    </motion.div>
  );
}

function renderSection(eventsToRender, sectionTitle, onProgramOpen) {
  const makeAChange = eventsToRender.find(e => e.isMakeAChange);
  const bayanihan = eventsToRender.find(e => e.title.toLowerCase().includes("bayanihan"));
  const otherEvents = eventsToRender.filter(e => !e.isMakeAChange && !e.title.toLowerCase().includes("bayanihan"));

  return (
    <div style={{ marginBottom: "3rem" }}>
      {sectionTitle && <SectionDivider label={sectionTitle} />}
      {makeAChange && <FeaturedCard event={makeAChange} onProgramOpen={onProgramOpen} />}
      {otherEvents.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 15rem), 18rem))",
          gap: "clamp(0.75rem, 2vw, 1.25rem)",
          justifyContent: "center",
        }}>
          {otherEvents.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </div>
      )}
      {bayanihan && (
        <div style={{ marginTop: "2.5rem" }}>
          <FeaturedCard event={bayanihan} onProgramOpen={onProgramOpen} />
        </div>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function EventsGrid() {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [modalState, setModalState] = useState({ isOpen: false, program: null, eventTitle: "" });

  const sectionEvents = SECTION_EVENTS[currentYearIndex];
  const currentSection = YEAR_SECTIONS[currentYearIndex];
  const isCurrentYear = currentYearIndex === 0;

  const closeModal = useCallback(() =>
    setModalState({ isOpen: false, program: null, eventTitle: "" }), []);
  const openProgram = useCallback((program, eventTitle) =>
    setModalState({ isOpen: true, program, eventTitle }), []);
  const prevYear = useCallback(() => setCurrentYearIndex(i => i - 1), []);
  const nextYear = useCallback(() => setCurrentYearIndex(i => i + 1), []);

  return (
    <>
      <ProgramModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        program={modalState.program}
        eventTitle={modalState.eventTitle}
      />
      <section style={{ padding: "clamp(1rem, 3vw, 2rem)" }}>

        {/* Year Navigation */}
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: "clamp(1.5rem, 5vw, 4rem)", marginBottom: "3.5rem",
        }}>
          <NavButton onClick={prevYear} disabled={currentYearIndex === 0}>←</NavButton>

          <div style={{ textAlign: "center" }}>
            <span style={{
              display: "block", fontSize: "0.6rem", fontWeight: "800",
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: "var(--gold)", fontFamily: "var(--font-display)", marginBottom: "0.2rem",
            }}>
              School Year
            </span>
            <h1 style={{ margin: 0, lineHeight: 1 }}>
              {currentSection.title}
            </h1>
            <span style={{
              display: "block", marginTop: "0.3rem",
              fontSize: "0.7rem", color: "var(--dark)", opacity: 0.38,
              fontFamily: "var(--font-body)",
            }}>
              {currentYearIndex + 1} / {YEAR_SECTIONS.length}
            </span>
          </div>

          <NavButton onClick={nextYear} disabled={currentYearIndex === YEAR_SECTIONS.length - 1}>→</NavButton>
        </div>

        {/* Events Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentYearIndex}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
          >
            {sectionEvents.length === 0 ? (
              <p style={{ textAlign: "center", color: "var(--dark)", fontSize: "1rem", opacity: 0.5, fontFamily: "var(--font-body)" }}>
                No events recorded for this year.
              </p>
            ) : isCurrentYear ? (
              <>
                {UPCOMING_EVENTS.length > 0 && renderSection(UPCOMING_EVENTS, "Upcoming Events", openProgram)}
                {CURRENT_EVENTS.length > 0 && renderSection(CURRENT_EVENTS, "Past Events", openProgram)}
              </>
            ) : (
              renderSection(sectionEvents, null, openProgram)
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
}
