import { motion, AnimatePresence } from "framer-motion";
import useScrollLock from "../common/useScrollLock";
import { learnConfig } from "../../data/learn";

const ROTATIONS = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.2, -2.8, 2.5];

export default function DanceModal({ isOpen, onClose, dance, setActiveSection }) {
  useScrollLock(isOpen);
  if (!isOpen || !dance) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              borderRadius: "1rem",
              padding: "2.5rem",
              maxWidth: "64rem",
              width: "95%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              position: "relative",
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                fontSize: "1.75rem",
                cursor: "pointer",
                color: "var(--dark)",
                width: "2.5rem",
                height: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              ×
            </button>

            {/* Two-column body */}
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", marginTop: "1rem" }}>

              {/* Left: Photo collage */}
              {dance.images && dance.images.length > 0 && (
                <div
                  style={{
                    flex: "0 0 52%",
                    columns: "2",
                    columnGap: "0.75rem",
                    padding: "0.25rem 0",
                  }}
                >
                  {dance.images.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ rotate: ROTATIONS[i % ROTATIONS.length] }}
                      whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      style={{
                        breakInside: "avoid",
                        marginBottom: "0.75rem",
                        backgroundColor: "white",
                        padding: "0.4rem 0.4rem 1.6rem",
                        boxShadow: "0 3px 14px rgba(0,0,0,0.18)",
                        position: "relative",
                        cursor: "default",
                      }}
                    >
                      <img
                        src={img}
                        alt={`${dance.name} photo ${i + 1}`}
                        style={{ width: "100%", display: "block" }}
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Right: Title + Descriptions */}
              <div style={{ flex: 1, paddingTop: "0.5rem" }}>
                <h2
                  style={{
                    fontSize: "clamp(1.3rem, 3vw, 2rem)",
                    color: "var(--red)",
                    marginBottom: "1rem",
                    marginTop: 0,
                    fontWeight: "bold",
                  }}
                >
                  {dance.name}
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {dance.descriptions.filter(Boolean).map((desc, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)",
                        color: "var(--dark)",
                        lineHeight: "1.65",
                        margin: 0,
                      }}
                    >
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Learn button */}
                {learnConfig.enabled && (
                  <button
                    onClick={() => { onClose(); setActiveSection?.('learn'); }}
                    style={{
                      marginTop: "1.25rem",
                      padding: "0.45rem 1.1rem",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      backgroundColor: "transparent",
                      color: "var(--gold)",
                      border: "1.5px solid var(--gold)",
                      borderRadius: "0.4rem",
                      cursor: "pointer",
                      transition: "background-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--gold)"; e.currentTarget.style.color = "white"; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
                  >
                    Learn this dance →
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
