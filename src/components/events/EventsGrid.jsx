import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { events } from "../../data/events";

export default function EventsGrid() {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const today = new Date();

  // Helper to parse dates
  const parseDate = (dateStr) => {
    if (!dateStr) return new Date(0);
    if (dateStr.includes(",")) return new Date(dateStr);
    const parts = dateStr.split(" ");
    if (parts.length === 2) return new Date(`${parts[0]} 1, ${parts[1]}`);
    return new Date(dateStr);
  };

  // Group events by year category
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.year]) acc[event.year] = [];
    acc[event.year].push(event);
    return acc;
  }, {});

  // Sort events within each group by date (newest first)
  Object.keys(groupedEvents).forEach(year => {
    groupedEvents[year].sort((a, b) => parseDate(b.date) - parseDate(a.date));
  });

  // Define year sections - combine upcoming and current into current school year
  const yearSections = [
    { keys: ["upcoming", "2025-current"], title: "25-26" },
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

  const goToPreviousYear = () => {
    if (currentYearIndex > 0) {
      setCurrentYearIndex(currentYearIndex - 1);
    }
  };

  const goToNextYear = () => {
    if (currentYearIndex < yearSections.length - 1) {
      setCurrentYearIndex(currentYearIndex + 1);
    }
  };

  const currentSection = yearSections[currentYearIndex];
  // Combine events from all keys in this section
  const sectionEvents = currentSection.keys.flatMap(key => groupedEvents[key] || []);

  // For 25-26, separate upcoming and past events
  const upcomingEvents = currentYearIndex === 0 ? (groupedEvents["upcoming"] || []) : [];
  const pastEvents = currentYearIndex === 0 ? (groupedEvents["2025-current"] || []) : [];
  const isCurrentYear = currentYearIndex === 0;

  // Component for Make A Change and Bayanihan featured card
  const FeaturedCard = ({ event }) => {
    const isBayanihan = event.title.toLowerCase().includes('bayanihan');
    
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          backgroundColor: "white",
          padding: "3rem",
          margin: "0 2rem 3rem 2rem",
          borderRadius: "0.5rem",
          border: "3px solid var(--red)",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          minHeight: "25rem",
          flexDirection: isBayanihan ? "row" : "row"
        }}
      >
        {/* Image - Left for Bayanihan, Right for Make A Change */}
        {isBayanihan && (
          <div style={{ flex: "1 1 20rem", maxWidth: "45rem", marginLeft: "4rem" }}>
            <img
              src={event.image && event.image !== "" ? event.image : "/assets/hero.jpeg"}
              alt={event.title}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "0.5rem",
                filter: event.image && event.image !== "" ? "none" : "grayscale(100%) opacity(0.5)"
              }}
            />
          </div>
        )}

        {/* Content */}
        <div style={{ 
          flex: "1 1 25rem", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          order: isBayanihan ? 2 : 1
        }}>
          <h2 style={{ 
            fontSize: "3rem", 
            color: "var(--red)", 
            marginBottom: "1rem",
            fontWeight: "bold"
          }}>
            {event.title}
          </h2>
          <p style={{ 
            fontSize: "1.3rem", 
            lineHeight: "1.8",
            marginBottom: "2rem"
          }}>
            {event.description}
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            {event.video && event.video !== "" && (
              <motion.a
                href={event.video}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: "var(--red)",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)"
                }}
              >
                Watch our performance here!
              </motion.a>
            )}
            {event.programLink && event.programLink !== "" && (
              <motion.a
                href={event.programLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: "var(--gold)",
                  color: "var(--dark)",
                  padding: "1rem 2rem",
                  borderRadius: "0.5rem",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)"
                }}
              >
                2025 Show Program
              </motion.a>
            )}
          </div>
        </div>

        {/* Image - Right for Make A Change only */}
        {!isBayanihan && (
          <div style={{ flex: "1 1 20rem", maxWidth: "45rem", marginRight: "0rem", order: 2 }}>
            <img
              src={event.image && event.image !== "" ? event.image : "/assets/hero.jpeg"}
              alt={event.title}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "0.5rem",
                filter: event.image && event.image !== "" ? "none" : "grayscale(100%) opacity(0.5)"
              }}
            />
          </div>
        )}
      </motion.div>
    );
  };

  // Component for regular event card
  // Component for regular event card
// Component for regular event card
const EventCard = ({ event }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    style={{
      border: event.featured ? "3px solid var(--red)" : "2px solid var(--gold)",
      padding: "1.5rem",
      background: "white",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "0.5rem",
      aspectRatio: "1/1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}
  >
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          style={{
            width: "60%",
            aspectRatio: "1/1",
            objectFit: "cover",
            borderRadius: "0.5rem",
            marginBottom: "1rem"
          }}
        />
      )}
      <h3 style={{ 
        color: "var(--dark)", 
        marginBottom: "0.5rem",
        minHeight: "3rem",
        lineHeight: "1.5rem",
        textAlign: "center"
      }}>{event.title}</h3>
      <strong style={{ color: "var(--red)", marginBottom: "0.5rem", display: "block", textAlign: "center" }}>{event.date}</strong>
      {event.description && <p style={{ marginBottom: "1rem", flex: 1, textAlign: "center" }}>{event.description}</p>}
    </div>
    
    {/* Always render button space to maintain consistent height */}
    <div style={{ marginTop: "auto", minHeight: "3rem", display: "flex", alignItems: "flex-end" }}>
      {event.video && event.video !== "" && (
        <motion.a
          href={event.video}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          style={{
            backgroundColor: "var(--red)",
            color: "white",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: "bold",
            textAlign: "center",
            display: "inline-block",
            width: "100%"
          }}
        >
          Watch
        </motion.a>
      )}
    </div>
  </motion.div>
);

  // Helper function to render events section
  const renderEventsSection = (events, sectionTitle = null) => {
    const makeAChange = events.find(e => e.isMakeAChange);
    const bayanihan = events.find(e => e.title.toLowerCase().includes('bayanihan'));
    const otherEvents = events.filter(e => !e.isMakeAChange && !e.title.toLowerCase().includes('bayanihan'));

    return (
      <div style={{ marginBottom: "4rem" }}>
        {sectionTitle && (
          <>
            <h2 style={{
              fontSize: "3rem",
              color: "var(--red)",
              textAlign: "center",
              marginBottom: "1rem",
              fontWeight: "bold"
            }}>
              {sectionTitle}
            </h2>
            <div style={{
              width: "60%",
              height: "2px",
              backgroundColor: "var(--gold)",
              margin: "0 auto 3rem auto"
            }} />
          </>
        )}

        {/* Make A Change featured if exists */}
        {makeAChange && <FeaturedCard event={makeAChange} />}

        {/* Other events grid */}
        {otherEvents.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 22rem))",
              gap: "2rem",
              justifyContent: "center",
              gridAutoRows: "1fr"
            }}
          >
            {otherEvents.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>
        )}

        {/* Bayanihan featured if exists - appears after other events */}
        {bayanihan && (
          <div style={{ marginTop: "3rem" }}>
            <FeaturedCard event={bayanihan} />
          </div>
        )}
      </div>
    );
  };

  return (
    <section style={{ padding: "2rem" }}>
      {/* Year Navigation Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          marginBottom: "3rem",
          paddingBottom: "1rem"
        }}
      >
        {currentYearIndex > 0 ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPreviousYear}
            style={{
              backgroundColor: "var(--gold)",
              border: "none",
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            ←
          </motion.button>
        ) : (
          <div style={{ width: "3rem" }} />
        )}

        <h1 style={{
          fontSize: "4rem",
          color: "var(--red)",
          margin: 0,
          fontWeight: "bold"
        }}>
          {currentSection.title}
        </h1>

        {currentYearIndex < yearSections.length - 1 ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNextYear}
            style={{
              backgroundColor: "var(--gold)",
              border: "none",
              borderRadius: "50%",
              width: "3rem",
              height: "3rem",
              fontSize: "1.5rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            →
          </motion.button>
        ) : (
          <div style={{ width: "3rem" }} />
        )}
      </div>

      {/* Events Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentYearIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {sectionEvents.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--dark)", fontSize: "1.2rem" }}>
              No events available for this year.
            </p>
          ) : isCurrentYear ? (
            // For 25-26, show Upcoming and Past Events separately
            <>
              {upcomingEvents.length > 0 && renderEventsSection(upcomingEvents, "Upcoming Events")}
              {pastEvents.length > 0 && renderEventsSection(pastEvents, "Past Events")}
            </>
          ) : (
            // For other years, show all events together without subsection header
            renderEventsSection(sectionEvents)
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}