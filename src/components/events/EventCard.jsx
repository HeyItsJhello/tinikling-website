import { motion } from "framer-motion";

export default function EventCard({ event }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: event.featured
        ? "0 20px 40px rgba(208, 49, 45, 0.2), 0 0 0 2px var(--red)"
        : "0 16px 32px rgba(0,0,0,0.14)"
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        aspectRatio: "1/1",
        background: "white",
        borderRadius: "0.75rem",
        overflow: "hidden",
        boxShadow: event.featured
          ? "0 6px 20px rgba(208, 49, 45, 0.18), 0 0 0 2px var(--red)"
          : "0 4px 12px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
      }}
    >
      {/* Full-bleed image */}
      <div style={{ flex: "1 1 0", overflow: "hidden", minHeight: 0 }}>
        <img
          src={event.image}
          alt={event.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Text section */}
      <div style={{
        padding: "0.7rem 0.85rem 0.8rem",
        flexShrink: 0,
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}>
        <h3 className="event-card-title" style={{ color: "var(--dark)", margin: "0 0 0.2rem 0" }}>
          {event.title}
        </h3>
        <strong className="event-card-date" style={{
          display: "block",
          color: "var(--gold)",
          fontSize: "0.78rem",
          fontFamily: "var(--font-body)",
          marginBottom: "0.25rem",
        }}>
          {event.date}
        </strong>
        {event.description && (
          <p className="event-card-description" style={{
            color: "var(--dark)",
            opacity: 0.7,
            margin: 0,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}>
            {event.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
