import { motion } from "framer-motion";


export default function EventCard({ event }) {
    return (
    <motion.div
        whileHover={{ scale: 1.05 }}
            style={{
            border: event.featured ? "3px solid var(--red)" : "1px solid #ccc",
            padding: "2rem",
            background: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            aspectRatio: "1/1",
        }}
        >
        <img
            src={event.image}
            alt={event.title + " cover here"}
            style={{
                width: "100%",
            }}
        />
        <h3 className="event-card-title">{event.title}</h3>
        <strong className="event-card-date">{event.date}</strong>
        <p className="event-card-description">{event.description}</p>
    </motion.div>
    );
}

