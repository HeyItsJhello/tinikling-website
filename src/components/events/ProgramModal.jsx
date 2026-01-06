import { motion, AnimatePresence } from "framer-motion";

export default function ProgramModal({ isOpen, onClose, program, eventTitle }) {
  if (!isOpen || !program) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem"
            }}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                padding: "3rem",
                maxWidth: "50rem",
                width: "100%",
                maxHeight: "80vh",
                overflowY: "auto",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                position: "relative"
              }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "none",
                  border: "none",
                  fontSize: "2rem",
                  cursor: "pointer",
                  color: "var(--dark)",
                  width: "3rem",
                  height: "3rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  transition: "background-color 0.2s"
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#f0f0f0"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
              >
                ×
              </button>

              {/* Title */}
              <h2 style={{
                fontSize: "2.5rem",
                color: "var(--red)",
                marginBottom: "2rem",
                textAlign: "center",
                fontWeight: "bold",
                paddingRight: "3rem"
              }}>
                {eventTitle} Program
              </h2>

              {/* Acts */}
              {program.acts.map((act, actIndex) => (
                <div key={actIndex} style={{ marginBottom: "2.5rem" }}>
                  <h3 style={{
                    fontSize: "1.8rem",
                    color: "var(--gold)",
                    marginBottom: "1.5rem",
                    fontWeight: "bold",
                    borderBottom: "2px solid var(--gold)",
                    paddingBottom: "0.5rem"
                  }}>
                    {act.title}
                  </h3>
                  <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0
                  }}>
                    {act.performances.map((performance, perfIndex) => (
                      <li key={perfIndex} style={{
                        marginBottom: "1rem",
                        paddingLeft: "1.5rem",
                        position: "relative",
                        lineHeight: "1.6",
                        fontSize: "1.1rem",
                        color: "var(--dark)",
                        whiteSpace: "pre-line"
                      }}>
                        <span style={{
                          position: "absolute",
                          left: 0,
                          color: "var(--red)",
                          fontWeight: "bold"
                        }}>
                          •
                        </span>
                        {performance}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
