import { motion } from "framer-motion";

const cardVariants = {
  rest: { y: 0, boxShadow: "0 4px 16px rgba(218,160,109,0.3), 0 1px 4px rgba(0,0,0,0.06)" },
  hovered: { y: -10, boxShadow: "0 18px 40px rgba(218,160,109,0.45), 0 2px 12px rgba(0,0,0,0.1)" },
};

const frameVariants = {
  rest: { background: "rgba(218,160,109,0.55)" },
  hovered: { background: "rgba(208,49,45,0.75)" },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hovered: { opacity: 1 },
};

const cardTransition = { duration: 0.28 };
const overlayTransition = { duration: 0.25 };

export default function OfficerCard({ officer }) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hovered"
      variants={cardVariants}
      transition={cardTransition}
      style={{
        background: "white",
        padding: "1.5rem 1.5rem 1.75rem",
        textAlign: "center",
        border: "1px solid rgba(0,0,0,0.07)",
        borderTop: "3px solid var(--red)",
        borderRadius: "0.65rem",
        width: "14.5rem",
        flexShrink: 0,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Subtle crosshatch background */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(218,160,109,0.045) 0px, rgba(218,160,109,0.045) 1px, transparent 1px, transparent 16px)," +
          "repeating-linear-gradient(45deg, rgba(218,160,109,0.03) 0px, rgba(218,160,109,0.03) 1px, transparent 1px, transparent 16px)",
        borderRadius: "inherit",
        pointerEvents: "none",
      }} />

      {officer.image && (
        <div style={{ position: "relative", marginBottom: "1rem", zIndex: 1 }}>
          <motion.div
            variants={frameVariants}
            transition={cardTransition}
            style={{ padding: "3px", borderRadius: "0.55rem", lineHeight: 0 }}
          >
            <div style={{ borderRadius: "0.35rem", overflow: "hidden", lineHeight: 0, position: "relative" }}>
              <img
                src={officer.image}
                alt={officer.name}
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  objectPosition: `center ${officer.center_amount}%`,
                  display: "block",
                }}
              />
              <motion.div
                variants={overlayVariants}
                transition={overlayTransition}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(208,49,45,0.1)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>
        </div>
      )}

      {/* Ornamental divider */}
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "0.9rem",
        zIndex: 1,
      }}>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(218,160,109,0.6))" }} />
        <span style={{ color: "var(--gold)", fontSize: "0.45rem", lineHeight: 1, padding: "0 0.35rem", userSelect: "none" }}>◆</span>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(218,160,109,0.6))" }} />
      </div>

      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 1,
        minHeight: "3.5rem",
      }}>
        <h2 style={{
          fontSize: "1.25rem",
          margin: "0 auto",
          overflowWrap: "break-word",
          wordBreak: "break-word",
          hyphens: "auto",
          lineHeight: 1.25,
        }}>
          {officer.name}
        </h2>

        <span style={{
          display: "block",
          color: "var(--red)",
          fontFamily: "var(--font-display)",
          fontWeight: "700",
          fontSize: "0.8rem",
          letterSpacing: "0.08em",
          lineHeight: 1.35,
          marginTop: "0.5rem",
        }}>
          {officer.role}
        </span>
      </div>
    </motion.div>
  );
}
