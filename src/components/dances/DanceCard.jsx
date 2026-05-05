import { motion } from "framer-motion";
import { useState } from "react";
import DanceModal from "./DanceModal";

export default function DanceCard({ dance, isActive, isAnyHovered, onHoverStart, onHoverEnd, onModalOpen, onModalClose, setActiveSection }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        if (dance.descriptions.length > 1) {
            setIsModalOpen(true);
            onModalOpen?.();
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        onModalClose?.();
    };

    return (
        <>
            <motion.div
                layout
                transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
                whileHover={{ y: -8 }}
                animate={{
                    boxShadow: isActive
                        ? "0 12px 28px rgba(0,0,0,0.2)"
                        : "0 4px 6px rgba(0,0,0,0.1)",
                    opacity: isAnyHovered && !isActive ? 0.5 : 1,
                    scale: isAnyHovered && !isActive ? 0.97 : 1,
                }}
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
                onClick={handleClick}
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
                    cursor: dance.descriptions.length > 1 ? "pointer" : "default",
                }}
            >
                <div style={{ position: "relative", width: "100%", maxWidth: "15rem", margin: "0 auto" }}>
                    <img
                        src={dance.image}
                        alt={dance.name}
                        style={{
                            width: "100%",
                            height: "auto",
                            aspectRatio: "1 / 1",
                            objectFit: "cover",
                            borderRadius: "0.5rem",
                            display: "block",
                        }}
                    />
                    {dance.region && (
                        <span style={{
                            position: "absolute",
                            bottom: "0.5rem",
                            left: "0.5rem",
                            fontSize: "0.62rem",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "0.07em",
                            padding: "0.2rem 0.55rem",
                            backgroundColor: "rgba(218, 160, 109, 0.92)",
                            color: "var(--dark)",
                            borderRadius: "999px",
                            backdropFilter: "blur(4px)",
                        }}>
                            {dance.region}
                        </span>
                    )}
                </div>

                <h3 style={{
                    margin: "1rem 0 0.5rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "100%"
                }}>{dance.name}</h3>

                <motion.p
                    initial={false}
                    animate={{ WebkitLineClamp: 10 }}
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
                        margin: 0,
                        color: "var(--dark)",
                    }}
                >
                    {dance.descriptions[0] || ""}
                </motion.p>
            </motion.div>

            <DanceModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                dance={dance}
                setActiveSection={setActiveSection}
            />
        </>
    );
}
