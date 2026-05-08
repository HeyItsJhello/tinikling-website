import { motion } from "framer-motion";
import { useState } from "react";
import DanceModal from "./DanceModal";

export default function DanceCard({ dance, isActive, isAnyHovered, onHoverStart, onHoverEnd, onModalOpen, onModalClose, setActiveSection }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const clickable = dance.descriptions.length > 1;

    const handleClick = () => {
        if (clickable) {
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
                whileHover={{ y: -10 }}
                animate={{
                    boxShadow: isActive
                        ? "0 20px 48px rgba(0,0,0,0.22)"
                        : "0 4px 14px rgba(0,0,0,0.1)",
                    opacity: isAnyHovered && !isActive ? 0.45 : 1,
                    scale: isAnyHovered && !isActive ? 0.96 : 1,
                }}
                onHoverStart={onHoverStart}
                onHoverEnd={onHoverEnd}
                onClick={handleClick}
                className="dance-card"
                style={{
                    background: "white",
                    borderRadius: "0.85rem",
                    borderTop: "4px solid var(--red)",
                    minWidth: "17rem",
                    width: "min(22rem, 85vw)",
                    minHeight: "32rem",
                    display: "flex",
                    flexDirection: "column",
                    cursor: clickable ? "pointer" : "default",
                    // no overflow:hidden here — card must be free to expand vertically on hover
                }}
            >
                {/* Image fills top — clipped to card's top rounded corners only */}
                <div style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "1 / 1",
                    flexShrink: 0,
                    borderRadius: "0.75rem 0.75rem 0 0",
                    overflow: "hidden",
                }}>
                    <img
                        src={dance.image}
                        alt={dance.name}
                        loading="lazy"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />
                    {dance.region && (
                        <span style={{
                            position: "absolute",
                            bottom: "0.6rem",
                            left: "0.6rem",
                            fontSize: "0.58rem",
                            fontWeight: "800",
                            textTransform: "uppercase",
                            letterSpacing: "0.09em",
                            padding: "0.22rem 0.6rem",
                            background: "rgba(218,160,109,0.92)",
                            color: "#1a1a1a",
                            borderRadius: "999px",
                            backdropFilter: "blur(4px)",
                        }}>
                            {dance.region}
                        </span>
                    )}
                </div>

                {/* Text content */}
                <div style={{ padding: "1rem 1.25rem 1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3 style={{
                        margin: "0 0 0.5rem",
                        fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        lineHeight: 1.2,
                    }}>
                        {dance.name}
                    </h3>

                    <div style={{
                        height: "1.5px",
                        background: "rgba(218,160,109,0.4)",
                        marginBottom: "0.75rem",
                        flexShrink: 0,
                    }} />

                    {/* Description — expands on hover via line-clamp toggle + layout animation */}
                    <p style={{
                        margin: 0,
                        color: "var(--dark)",
                        fontSize: "0.88rem",
                        lineHeight: "1.65",
                        fontFamily: "var(--font-body)",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: isActive ? "unset" : 5,
                        overflow: "hidden",
                        flex: 1,
                        minHeight: "calc(5 * 1.65 * 0.88rem)",
                    }}>
                        {dance.descriptions[0] || ""}
                    </p>

                    {clickable && (
                        <div style={{ marginTop: "0.85rem", flexShrink: 0 }}>
                            <span style={{
                                fontSize: "0.7rem",
                                fontWeight: "800",
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: "var(--red)",
                                fontFamily: "var(--font-display)",
                            }}>
                                Learn more →
                            </span>
                        </div>
                    )}
                </div>
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
