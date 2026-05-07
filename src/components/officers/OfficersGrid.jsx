import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../common/reveal";
import OfficerCard from "./OfficerCard";
import { quotes, alumniData, alumniYears } from "../../data/members";
import { officers } from "../../data/officers";
import PastOfficers from "./PastOfficers";

function NavButton({ onClick, disabled, children }) {
  if (disabled) return <div style={{ width: "2.75rem" }} />;
  return (
    <motion.button
      whileHover={{ scale: 1.1, background: "var(--red)", color: "white" }}
      whileTap={{ scale: 0.93 }}
      onClick={onClick}
      transition={{ duration: 0.15 }}
      style={{
        width: "2.75rem",
        height: "2.75rem",
        borderRadius: "50%",
        border: "2px solid var(--red)",
        background: "transparent",
        color: "var(--red)",
        fontSize: "1.2rem",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </motion.button>
  );
}

export default function OfficersGrid() {
  const [showAlumni, setShowAlumni] = useState(false);
  const [currentYearIndex, setCurrentYearIndex] = useState(4);

  const currentYear = alumniYears[currentYearIndex];
  const currentData = alumniData[currentYear];
  const isAlumni = parseInt(currentYear.split("-")[1]) < 2026;

  const goToPreviousYear = () => {
    if (currentYearIndex > 0) setCurrentYearIndex(currentYearIndex - 1);
  };
  const goToNextYear = () => {
    if (currentYearIndex < alumniYears.length - 1) setCurrentYearIndex(currentYearIndex + 1);
  };

  return (
    <section>
      <h1>Club Officers</h1>

      {/* Small portrait cards */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.25rem",
        marginTop: "2rem",
        marginBottom: "5rem",
      }}>
        {officers.map((officer, index) => (
          <OfficerCard key={index} officer={officer} />
        ))}
      </div>

      {/* Section divider */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "3rem clamp(1rem, 4vw, 2rem)" }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
        <span style={{
          fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--red)",
          fontFamily: "var(--font-display)", whiteSpace: "nowrap",
        }}>
          Meet the Team
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
      </div>

      {/* Detailed officer cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 31.25rem), 1fr))",
        gap: "2rem",
        maxWidth: "75rem",
        margin: "0 auto",
        padding: "0 clamp(1rem, 4vw, 2rem)",
      }}>
        {officers.map((officer, index) => (
          <Reveal key={index}>
            <motion.div
              whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(0,0,0,0.14)" }}
              transition={{ duration: 0.25 }}
              className="officer-detail-card"
              style={{
                background: "white",
                borderRadius: "1rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.09)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "clamp(1.5rem, 3vw, 2.5rem)",
                gap: "clamp(1.5rem, 3vw, 2rem)",
                minHeight: "20rem",
                height: "100%",
                boxSizing: "border-box",
                borderTop: "4px solid var(--red)",
              }}
            >
              {/* Info left */}
              <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "left",
                minWidth: 0,
              }}>
                <h2 style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "var(--red)",
                  marginBottom: "0.25rem",
                  fontWeight: "bold",
                  overflowWrap: "break-word",
                }}>
                  {officer.name}
                </h2>
                <h3 style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                  color: "var(--gold)",
                  marginBottom: "1.25rem",
                  fontWeight: "700",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  overflowWrap: "break-word",
                }}>
                  {officer.role}
                </h3>

                {[
                  ["Grade", officer.grade],
                  ["Pronouns", officer.pronouns],
                  ["Hobbies", officer.hobbies],
                  ["Favorite Dance", officer.favoriteDance],
                  ["Fun Fact", officer.funFact],
                ].map(([label, value]) => (
                  <div key={label} style={{ marginBottom: "0.45rem" }}>
                    <span style={{
                      fontSize: "0.7rem",
                      fontWeight: "800",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--red)",
                      fontFamily: "var(--font-display)",
                    }}>
                      {label}
                    </span>
                    <p style={{
                      margin: "0.05rem 0 0",
                      fontSize: "clamp(0.88rem, 1.6vw, 1rem)",
                      color: "var(--dark)",
                      fontFamily: "var(--font-body)",
                      lineHeight: 1.5,
                      overflowWrap: "break-word",
                    }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Photo right */}
              <div
                className="officer-detail-image"
                style={{
                  width: "clamp(10rem, 28vw, 14rem)",
                  height: "clamp(10rem, 28vw, 14rem)",
                  flexShrink: 0,
                  borderRadius: "0.65rem",
                  overflow: "hidden",
                }}
              >
                <img
                  src={officer.image}
                  alt={officer.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: `center ${officer.center_amount}%`,
                    display: "block",
                  }}
                />
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Members & Alumni button */}
      <div style={{ textAlign: "center", marginTop: "4rem", marginBottom: "1rem" }}>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setShowAlumni(true)}
          style={{
            background: "var(--red)",
            fontFamily: "var(--font-display)",
            color: "white",
            padding: "0.85rem 2.5rem",
            fontSize: "1.05rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "0.55rem",
            cursor: "pointer",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 16px rgba(208,49,45,0.3)",
          }}
        >
          Members and Alumni
        </motion.button>
      </div>

      {/* Alumni Modal */}
      <AnimatePresence>
        {showAlumni && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAlumni(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(15,12,10,0.75)",
                backdropFilter: "blur(6px)",
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "7rem 2rem 2rem",
              }}
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.96 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="officer-modal"
                style={{
                  background: "#1e1b17",
                  borderRadius: "1.1rem",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                  maxWidth: "52rem",
                  width: "100%",
                  maxHeight: "calc(100vh - 9rem)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  borderTop: "3px solid var(--red)",
                }}
              >
                {/* Modal header bar */}
                <div style={{
                  padding: "1.25rem 1.5rem",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: "1px solid rgba(218,160,109,0.15)",
                }}>
                  <span style={{
                    fontSize: "0.6rem",
                    fontWeight: "800",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(218,160,109,0.6)",
                    fontFamily: "var(--font-display)",
                  }}>
                    TDC Members &amp; Alumni
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowAlumni(false)}
                    style={{
                      background: "rgba(208,49,45,0.15)",
                      color: "var(--red)",
                      border: "1.5px solid rgba(208,49,45,0.4)",
                      borderRadius: "50%",
                      width: "2rem",
                      height: "2rem",
                      fontSize: "1.1rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                    }}
                  >
                    ×
                  </motion.button>
                </div>

                {/* Scrollable content */}
                <div style={{ flex: 1, overflowY: "auto", padding: "2rem 1.75rem 2.5rem" }}>

                  {/* Year navigation */}
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1.5rem",
                    marginBottom: "2.25rem",
                  }}>
                    <NavButton onClick={goToPreviousYear} disabled={currentYearIndex === 0}>←</NavButton>

                    <div style={{ textAlign: "center" }}>
                      <p style={{
                        margin: 0,
                        fontSize: "0.6rem",
                        fontWeight: "800",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "rgba(218,160,109,0.55)",
                        fontFamily: "var(--font-display)",
                        marginBottom: "0.2rem",
                      }}>
                        Class of
                      </p>
                      <h2 style={{
                        margin: 0,
                        fontSize: "clamp(2rem, 5vw, 2.75rem)",
                        color: "var(--gold)",
                        fontFamily: "var(--font-display)",
                        lineHeight: 1,
                      }}>
                        {currentYear.split("-")[1]}
                      </h2>
                      <p style={{
                        margin: "0.3rem 0 0",
                        fontSize: "0.7rem",
                        color: "rgba(255,255,255,0.3)",
                        fontFamily: "var(--font-body)",
                      }}>
                        {currentYearIndex + 1} / {alumniYears.length}
                      </p>
                    </div>

                    <NavButton onClick={goToNextYear} disabled={currentYearIndex === alumniYears.length - 1}>→</NavButton>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentYear}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {currentData && currentData.length > 0 ? (
                        <>
                          {/* Members label */}
                          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                            <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.2)" }} />
                            <span style={{
                              fontSize: "0.58rem",
                              fontWeight: "800",
                              letterSpacing: "0.18em",
                              textTransform: "uppercase",
                              color: "rgba(218,160,109,0.55)",
                              fontFamily: "var(--font-display)",
                              whiteSpace: "nowrap",
                            }}>
                              {isAlumni ? "Alumni" : "Members"}
                            </span>
                            <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.2)" }} />
                          </div>

                          {/* Name pills */}
                          <div style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "0.45rem",
                            justifyContent: "center",
                            marginBottom: "2.5rem",
                          }}>
                            {currentData.map((alum, i) => (
                              <span key={i} style={{
                                padding: "0.3rem 0.85rem",
                                background: "rgba(255,255,255,0.06)",
                                border: "1.5px solid rgba(218,160,109,0.3)",
                                borderRadius: "999px",
                                fontSize: "0.85rem",
                                color: "rgba(255,255,255,0.85)",
                                fontFamily: "var(--font-body)",
                              }}>
                                {alum}
                              </span>
                            ))}
                          </div>

                          {/* Quotes */}
                          {quotes[currentYear] && Object.keys(quotes[currentYear]).length > 0 && (
                            <>
                              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                                <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.2)" }} />
                                <span style={{
                                  fontSize: "0.58rem",
                                  fontWeight: "800",
                                  letterSpacing: "0.18em",
                                  textTransform: "uppercase",
                                  color: "rgba(218,160,109,0.55)",
                                  fontFamily: "var(--font-display)",
                                  whiteSpace: "nowrap",
                                }}>
                                  In their words
                                </span>
                                <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.2)" }} />
                              </div>

                              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                                {Object.entries(quotes[currentYear]).map(([name, quote], i) => (
                                  <div key={i} style={{
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(218,160,109,0.12)",
                                    borderRadius: "0.75rem",
                                    padding: "1.5rem 1.75rem",
                                    position: "relative",
                                    overflow: "hidden",
                                  }}>
                                    {/* Decorative quote mark */}
                                    <span style={{
                                      position: "absolute",
                                      top: "-0.5rem",
                                      left: "1rem",
                                      fontSize: "5rem",
                                      lineHeight: 1,
                                      color: "var(--gold)",
                                      opacity: 0.12,
                                      fontFamily: "Georgia, serif",
                                      userSelect: "none",
                                      pointerEvents: "none",
                                    }}>"</span>

                                    <p style={{
                                      margin: "0 0 1rem",
                                      fontSize: "clamp(0.88rem, 2vw, 1rem)",
                                      fontStyle: "italic",
                                      color: "rgba(255,255,255,0.8)",
                                      lineHeight: 1.75,
                                      fontFamily: "var(--font-body)",
                                      position: "relative",
                                    }}>
                                      {quote}
                                    </p>

                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                      <div style={{ flex: 1, height: "1px", background: "rgba(208,49,45,0.35)" }} />
                                      <span style={{
                                        fontSize: "0.78rem",
                                        fontWeight: "700",
                                        color: "var(--gold)",
                                        fontFamily: "var(--font-display)",
                                        letterSpacing: "0.04em",
                                      }}>
                                        {name}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <p style={{
                          textAlign: "center",
                          color: "rgba(255,255,255,0.4)",
                          fontSize: "1rem",
                          fontStyle: "italic",
                          fontFamily: "var(--font-body)",
                        }}>
                          No member data available for this year.
                        </p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Past Officers Section */}
      <PastOfficers />
    </section>
  );
}
