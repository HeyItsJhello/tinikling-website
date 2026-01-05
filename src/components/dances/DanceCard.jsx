import { motion } from "framer-motion";

export default function DanceCard({ dance }) {
    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
            whileHover={{ y: -8 }}
            className="dance-card"
            style={{
                background: "white",
                padding: "clamp(1rem, 3vw, 2rem)",
                textAlign: "center",
                border: "2px solid var(--gold)",
                minWidth: "15rem",
                width: "min(20rem, 85vw)",
                minHeight: "30rem",
                display: "flex",
                flexDirection: "column",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 10
            }}
        >
            <img
                src={dance.image}
                alt={dance.name}
                style={{
                    width: "100%",
                    maxWidth: "15rem",
                    height: "auto",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    margin: "0 auto",
                }}
            />

            <h3 style={{ margin: "1rem 0 0.5rem" }}>{dance.name}</h3>

            <motion.p
                initial={false}
                whileHover={{ WebkitLineClamp: "unset" }}
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 10,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    flex: "1 0 auto",
                    minHeight: "calc(10 * 1.5em)",
                    lineHeight: "1.5em",
                }}
            >
                {dance.description}
            </motion.p>
        </motion.div>
    );
}
