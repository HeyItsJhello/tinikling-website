import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../common/reveal";
import OfficerCard from "./OfficerCard";
import { quotes, alumniData, alumniYears } from "../../data/members";
import { officers } from "../../data/officers";
import PastOfficers from "./PastOfficers";

const navBtnTransition = { duration: 0.15 };

function NavButton({ onClick, disabled, children }) {
  if (disabled) return <div style={{ width: "2.75rem" }} />;
  return (
    <motion.button
      whileHover={{ scale: 1.1, background: "var(--red)", color: "white" }}
      whileTap={{ scale: 0.93 }}
      onClick={onClick}
      transition={navBtnTransition}
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
  const [currentYearIndex, setCurrentYearIndex] = useState(
    () => Math.max(0, alumniYears.findIndex(y => y.endsWith(`-${new Date().getFullYear() + 1}`)))
  );

  const currentYear = alumniYears[currentYearIndex];
  const currentData = alumniData[currentYear];
  const isAlumni = parseInt(currentYear.split("-")[1]) < 2026;

  const goToPreviousYear = useCallback(() => {
    setCurrentYearIndex(i => Math.max(0, i - 1));
  }, []);
  const goToNextYear = useCallback(() => {
    setCurrentYearIndex(i => Math.min(alumniYears.length - 1, i + 1));
  }, []);

  return (
    <section>
      <h1>Club Officers</h1>

      {/* Officer portrait row */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "1.75rem",
        marginTop: "3rem",
        marginBottom: "5rem",
        paddingTop: "1.25rem",
      }}>
        {officers.map((officer, index) => (
          <OfficerCard key={index} officer={officer} index={index} />
        ))}
      </div>

      {/* Divider */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "3rem clamp(1rem, 4vw, 2rem)",
      }}>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(218,160,109,0.5))" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)" }} />
          <span style={{
            fontSize: "0.6rem",
            fontWeight: "800",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--red)",
            fontFamily: "var(--font-display)",
            whiteSpace: "nowrap",
          }}>
            Meet the Team
          </span>
          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)" }} />
        </div>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(218,160,109,0.5))" }} />
      </div>

      {/* Detailed officer cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 31.25rem), 1fr))",
        gap: "1.75rem",
        maxWidth: "75rem",
        margin: "0 auto",
        padding: "0 clamp(1rem, 4vw, 2rem)",
      }}>
        {officers.map((officer, index) => {
          const num = String(index + 1).padStart(2, "0");
          return (
            <Reveal key={index}>
              <motion.div
                whileHover={{ y: -8, boxShadow: "0 20px 52px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.25 }}
                className="officer-detail-card"
                style={{
                  background: "white",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "stretch",
                  overflow: "hidden",
                  minHeight: "22rem",
                  height: "100%",
                  boxSizing: "border-box",
                  position: "relative",
                }}
              >
                {/* Top accent */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "4px",
                  background: "var(--red)",
                  zIndex: 2,
                }} />

                {/* Info panel */}
                <div style={{
                  flex: 1,
                  padding: "2rem 1.75rem 2rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "left",
                  position: "relative",
                  overflow: "hidden",
                  minWidth: 0,
                }}>
                  {/* Ghost number */}
                  <span style={{
                    position: "absolute",
                    bottom: "-2rem",
                    right: "-0.75rem",
                    fontSize: "9rem",
                    fontFamily: "var(--font-display)",
                    color: "var(--gold)",
                    opacity: 0.07,
                    lineHeight: 1,
                    userSelect: "none",
                    pointerEvents: "none",
                    letterSpacing: "-0.05em",
                  }}>
                    {num}
                  </span>

                  {/* Role badge */}
                  <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "rgba(208,49,45,0.07)",
                    border: "1.5px solid rgba(208,49,45,0.15)",
                    borderRadius: "999px",
                    padding: "0.22rem 0.8rem 0.22rem 0.6rem",
                    marginBottom: "0.65rem",
                    alignSelf: "flex-start",
                  }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                    <span style={{
                      fontSize: "0.65rem",
                      fontWeight: "800",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--red)",
                      fontFamily: "var(--font-display)",
                    }}>
                      {officer.role}
                    </span>
                  </div>

                  {/* Name */}
                  <h2 style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    color: "var(--dark)",
                    margin: "0 0 1rem",
                    fontWeight: "bold",
                    lineHeight: 1.1,
                    overflowWrap: "break-word",
                  }}>
                    {officer.name}
                  </h2>

                  {/* Accent rule */}
                  <div style={{
                    height: "1px",
                    background: "linear-gradient(90deg, rgba(218,160,109,0.5), transparent)",
                    marginBottom: "1rem",
                  }} />

                  {/* Fact fields */}
                  {[
                    ["Grade", officer.grade],
                    ["Pronouns", officer.pronouns],
                    ["Hobbies", officer.hobbies],
                    ["Favorite Dance", officer.favoriteDance],
                    ["Fun Fact", officer.funFact],
                  ].map(([label, value]) => (
                    <div key={label} style={{ marginBottom: "0.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.05rem" }}>
                        <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--gold)", flexShrink: 0 }} />
                        <span style={{
                          fontSize: "0.6rem",
                          fontWeight: "800",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          fontFamily: "var(--font-display)",
                        }}>
                          {label}
                        </span>
                      </div>
                      <p style={{
                        margin: 0,
                        paddingLeft: "0.6rem",
                        fontSize: "clamp(0.85rem, 1.5vw, 0.97rem)",
                        color: "var(--dark)",
                        fontFamily: "var(--font-body)",
                        lineHeight: 1.45,
                        overflowWrap: "break-word",
                      }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Photo */}
                <div
                  className="officer-detail-image"
                  style={{
                    width: "clamp(10rem, 28vw, 14rem)",
                    flexShrink: 0,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={officer.image}
                    alt={officer.name}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: `center ${officer.center_amount}%`,
                      display: "block",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, rgba(255,255,250,0.1), transparent 35%)",
                    pointerEvents: "none",
                  }} />
                </div>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* Members & Alumni CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          background: "linear-gradient(135deg, #1e1b17 0%, #2a2118 100%)",
          borderRadius: "1.25rem",
          padding: "clamp(2.5rem, 5vw, 4rem) 2rem",
          textAlign: "center",
          margin: "4.5rem auto 1rem",
          maxWidth: "55rem",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
        }}
      >
        {/* Concentric rings */}
        {[28, 20, 13].map((size, i) => (
          <div key={i} style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: `${size}rem`,
            height: `${size}rem`,
            borderRadius: "50%",
            border: `1px solid rgba(218,160,109,${0.06 - i * 0.015})`,
            pointerEvents: "none",
          }} />
        ))}

        <div style={{
          fontSize: "0.58rem",
          fontWeight: "800",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "rgba(218,160,109,0.45)",
          fontFamily: "var(--font-display)",
          marginBottom: "0.75rem",
          position: "relative",
        }}>
          Past &amp; Present
        </div>

        <h2 style={{
          color: "white",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          margin: "0 0 0.5rem",
          lineHeight: 1.2,
          position: "relative",
        }}>
          The people who make TDC what it is
        </h2>

        <motion.button
          whileHover={{ scale: 1.04, background: "var(--red)" }}
          whileTap={{ scale: 0.96 }}
          onClick={() => setShowAlumni(true)}
          transition={{ duration: 0.15 }}
          style={{
            background: "rgba(208,49,45,0.85)",
            fontFamily: "var(--font-display)",
            color: "white",
            padding: "0.9rem 2.75rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "0.55rem",
            cursor: "pointer",
            letterSpacing: "0.06em",
            boxShadow: "0 6px 24px rgba(208,49,45,0.4)",
            position: "relative",
          }}
        >
          Members &amp; Alumni
        </motion.button>
      </motion.div>

      {/* Alumni Modal */}
      <AnimatePresence>
        {showAlumni && (
          <>
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
                {/* Modal header */}
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
