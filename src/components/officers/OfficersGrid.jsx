import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../common/reveal";
import OfficerCard from "./OfficerCard";
import { quotes, alumniData, alumniYears } from "../../data/members";
import { officers } from "../../data/officers";
import PastOfficers from "./PastOfficers";

export default function OfficersGrid() {
  const [showAlumni, setShowAlumni] = useState(false);
  const [currentYearIndex, setCurrentYearIndex] = useState(4);

  const currentYear = alumniYears[currentYearIndex];
  const currentData = alumniData[currentYear];

  const goToPreviousYear = () => {
    if (currentYearIndex > 0) {
      setCurrentYearIndex(currentYearIndex - 1);
    }
  };

  const goToNextYear = () => {
    if (currentYearIndex < alumniYears.length - 1) {
      setCurrentYearIndex(currentYearIndex + 1);
    }
  };

  return (
    <section>
      <h1>Club Officers</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(13.75rem, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
          marginBottom: "5rem"
        }}
      >
        {officers.map((officer, index) => (
          <OfficerCard key={index} officer={officer} />
        ))}
      </div>

      {/* Divider Above Detailed Cards */}
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "var(--gold)",
          margin: "3rem auto"
        }}
      />

      {/* Detailed Officer Cards - 2 per row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 31.25rem), 1fr))",
          gap: "2rem",
          marginTop: "3rem",
          marginBottom: "3rem",
          gridAutoRows: "1fr",
          maxWidth: "75rem",
          margin: "3rem auto"
        }}
      >
        {officers.map((officer, index) => (
          <Reveal key={index}>
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="officer-detail-card"
              style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "clamp(1.5rem, 3vw, 2.5rem)",
                gap: "clamp(1.5rem, 3vw, 2rem)",
                minHeight: "20rem",
                height: "100%",
                boxSizing: "border-box"
              }}
            >
              {/* Information on the left */}
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "left",
                  minWidth: 0,
                  wordWrap: "break-word",
                  overflowWrap: "break-word"
                }}
              >
                <h2
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    color: "var(--red)",
                    marginBottom: "0.75rem",
                    fontWeight: "bold",
                    wordWrap: "break-word",
                    overflowWrap: "break-word"
                  }}
                >
                  {officer.name}
                </h2>
                <h3
                  style={{
                    fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
                    color: "var(--blue)",
                    marginBottom: "1rem",
                    fontWeight: "600",
                    wordWrap: "break-word",
                    overflowWrap: "break-word"
                  }}
                >
                  {officer.role}
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    color: "var(--dark)",
                    fontSize: "clamp(0.95rem, 2vw, 1.1rem)"
                  }}
                >
                  <p style={{ wordWrap: "break-word", overflowWrap: "break-word", margin: 0 }}>
                    <strong>Grade:</strong> {officer.grade}
                  </p>
                  <p style={{ wordWrap: "break-word", overflowWrap: "break-word", margin: 0 }}>
                    <strong>Pronouns:</strong> {officer.pronouns}
                  </p>
                  <p style={{ wordWrap: "break-word", overflowWrap: "break-word", margin: 0 }}>
                    <strong>Hobbies:</strong> {officer.hobbies}
                  </p>
                  <p style={{ wordWrap: "break-word", overflowWrap: "break-word", margin: 0 }}>
                    <strong>Favorite Dance:</strong> {officer.favoriteDance}
                  </p>
                  <p style={{ wordWrap: "break-word", overflowWrap: "break-word", margin: 0 }}>
                    <strong>Fun Fact:</strong> {officer.funFact}
                  </p>
                </div>
              </div>

              {/* Photo on the right with 1:1 aspect ratio */}
              <div
                className="officer-detail-image"
                style={{
                  width: "clamp(10rem, 30vw, 15rem)",
                  height: "clamp(10rem, 30vw, 15rem)",
                  flexShrink: 0
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
                    borderRadius: "0.5rem"
                  }}
                />
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* Divider Below Detailed Cards */}
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "var(--gold)",
          margin: "3rem auto"
        }}
      />

      {/* Alumni Button */}
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAlumni(true)}
          style={{
            backgroundColor: "var(--red)",
            fontFamily: "var(--font-display)",
            color: "white",
            padding: "1rem 3rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.2)"
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
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem"
              }}
            >
              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="officer-modal"
                style={{
                  backgroundColor: "white",
                  border: "0.1875rem solid var(--red)",
                  borderRadius: "1rem",
                  boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.2)",
                  maxWidth: "56.25rem",
                  width: "100%",
                  height: "85vh",
                  maxHeight: "calc(100vh - 4rem)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Close Button */}
                <div style={{ position: "relative", padding: "1rem", flexShrink: 0 }}>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowAlumni(false)}
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      backgroundColor: "var(--red)",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      width: "2.5rem",
                      height: "2.5rem",
                      fontSize: "1.5rem",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      zIndex: 10
                    }}
                  >
                    ×
                  </motion.button>
                </div>

                {/* Scrollable Content Area */}
                <div
                  style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "0 2rem 2rem 2rem"
                  }}
                >
                  {/* Year Navigation Header */}
                  <div
                    className="officer-modal-buttons"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "clamp(1rem, 3vw, 2rem)",
                      marginBottom: "2rem",
                      borderBottom: "0.125rem solid var(--gold)",
                      paddingBottom: "1rem"
                    }}
                  >
                    {currentYearIndex > 0 ? (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToPreviousYear}
                        style={{
                          backgroundColor: "var(--gold)",
                          border: "none",
                          borderRadius: "50%",
                          width: "clamp(2.5rem, 8vw, 3rem)",
                          height: "clamp(2.5rem, 8vw, 3rem)",
                          fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        ←
                      </motion.button>
                    ) : (
                      <div style={{ width: "clamp(2.5rem, 8vw, 3rem)" }} />
                    )}

                    <h2
                      style={{
                        fontSize: "clamp(1.5rem, 5vw, 2rem)",
                        color: "var(--red)",
                        fontWeight: "bold",
                        margin: 0
                      }}
                    >
                      Class of {currentYear.split("-")[1]}
                    </h2>

                    {currentYearIndex < alumniYears.length - 1 ? (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={goToNextYear}
                        style={{
                          backgroundColor: "var(--gold)",
                          border: "none",
                          borderRadius: "50%",
                          width: "clamp(2.5rem, 8vw, 3rem)",
                          height: "clamp(2.5rem, 8vw, 3rem)",
                          fontSize: "clamp(1.2rem, 4vw, 1.5rem)",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        →
                      </motion.button>
                    ) : (
                      <div style={{ width: "clamp(2.5rem, 8vw, 3rem)" }} />
                    )}
                  </div>

                  {/* Alumni Section */}
                  {currentData && currentData.length > 0 ? (
                    <div>
                      <h3
                        style={{
                          fontSize: "1.5rem",
                          color: "var(--dark)",
                          marginBottom: "1rem",
                          fontWeight: "bold",
                          textAlign: "center"
                        }}
                      >
                        {parseInt(currentYear.split("-")[1]) < 2026 ? "Alumni" : "Members"}
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(12.5rem, 1fr))",
                          gap: "0.5rem"
                        }}
                      >
                        {currentData.map((alum, index) => (
                          <p
                            key={index}
                            style={{
                              padding: "0.5rem",
                              color: "var(--dark)"
                            }}
                          >
                            {alum}
                          </p>
                        ))}
                      </div>

                      {/* Quotes Section */}
                      {quotes[currentYear] && Object.keys(quotes[currentYear]).length > 0 && (
                        <div style={{ marginTop: "2rem" }}>
                          <h3
                            style={{
                              fontSize: "1.5rem",
                              color: "var(--blue)",
                              marginBottom: "1.5rem",
                              fontWeight: "bold",
                              textAlign: "center"
                            }}
                          >
                            Quotes
                          </h3>
                          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                            {Object.entries(quotes[currentYear]).map(([name, quote], index) => (
                              <div
                                key={index}
                                style={{
                                  backgroundColor: "var(--cream)",
                                  padding: "1.5rem",
                                  borderRadius: "0.5rem",
                                  borderLeft: "4px solid var(--red)"
                                }}
                              >
                                <p
                                  style={{
                                    fontSize: "1.1rem",
                                    fontStyle: "italic",
                                    color: "var(--dark)",
                                    marginBottom: "0.5rem",
                                    lineHeight: "1.6"
                                  }}
                                >
                                  "{quote}"
                                </p>
                                <p
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: "bold",
                                    color: "var(--blue)",
                                    textAlign: "right"
                                  }}
                                >
                                  — {name}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p style={{ textAlign: "center", color: "var(--dark)", fontSize: "1.2rem" }}>
                      No member data available for this year.
                    </p>
                  )

                  }

                  
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