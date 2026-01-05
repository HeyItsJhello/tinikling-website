import { motion } from "framer-motion";

export default function DanceCard({ dance }) {
    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
            whileHover={{ y: -8 }}
            style={{
                background: "white",
                padding: "2rem",
                textAlign: "center",
                border: "2px solid var(--gold)",
                minWidth: "15rem",
                minHeight: "30rem",
                overflow: "hidden",
                borderRadius: "0.5rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 10
            }}
        >
            <img
                src={dance.image}
                alt={dance.name}
                style={{
                    width: "15rem",
                    height: "15rem",
                    objectFit: "cover",
                }}
            />

            <h3>{dance.name}</h3>

            <motion.p
                initial={false}
                whileHover={{ WebkitLineClamp: "unset" }}
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 8,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}
            >
                {dance.description}
            </motion.p>
        </motion.div>
    );
}
