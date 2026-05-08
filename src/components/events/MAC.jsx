import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { events } from "../../data/events";
import { newYearStarted } from "../../data/config";

const PAST_MACS = events
  .filter(e => e.isMakeAChange && e.year !== "upcoming" && e.date !== "TBD")
  .sort((a, b) => new Date(b.date) - new Date(a.date));
const UPCOMING_MAC = events.find(e => e.year === "upcoming" && e.isMakeAChange);

export default function MakeAChange({ setActiveSection }) {
  const [countdown, setCountdown] = useState({ type: null, days: null, direction: null });
  const [displayDays, setDisplayDays] = useState(0);
  const bannerRef = useRef(null);
  const isInView = useInView(bannerRef, { once: true, margin: "-80px" });

  useEffect(() => {
    const calculate = () => {
      if (!newYearStarted) {
        const last = PAST_MACS[0];
        if (last) {
          const days = Math.floor((new Date() - new Date(last.date)) / (1000 * 60 * 60 * 24));
          setCountdown({ type: "number", days, direction: "since" });
        }
      } else {
        const dateStr = UPCOMING_MAC?.date;
        if (!dateStr || dateStr === "TBD") {
          setCountdown({ type: "tbd", days: null, direction: null });
        } else {
          const days = Math.ceil((new Date(dateStr) - new Date()) / (1000 * 60 * 60 * 24));
          setCountdown(days > 0
            ? { type: "number", days, direction: "until" }
            : { type: "tbd", days: null, direction: null }
          );
        }
      }
    };
    calculate();
    const interval = setInterval(calculate, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isInView || !countdown.days) return;
    const controls = animate(0, countdown.days, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplayDays(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, countdown.days]);

  return (
    <>
      {/* ── Banner ── */}
      <div
        ref={bannerRef}
        style={{
          width: "100%",
          background: "var(--red)",
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.08) 0px, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 18px)",
          boxSizing: "border-box",
          marginTop: "clamp(2rem, 6vw, 4rem)",
          position: "relative",
          overflow: "hidden",
          borderTop: "3px solid rgba(0,0,0,0.2)",
          borderBottom: "3px solid rgba(0,0,0,0.15)",
        }}
      >
        {/* Ghost watermark */}
        <div aria-hidden style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{
            fontSize: "13.5vw",
            fontFamily: "var(--font-display)",
            color: "rgba(0,0,0,0.07)",
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.02em",
            whiteSpace: "nowrap",
          }}>
            Make A Change
          </div>
        </div>

        {/* Content — fully centered */}
        <div style={{
          position: "relative",
          zIndex: 1,
          padding: "clamp(3rem, 7vw, 5rem) clamp(2rem, 6vw, 5rem)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "0",
        }}>

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            style={{
              fontSize: "0.55rem",
              fontWeight: "800",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(218,160,109,0.9)",
              fontFamily: "var(--font-display)",
              marginBottom: "1.25rem",
            }}
          >
            Annual Showcase
          </motion.span>

          {/* Countdown */}
          {countdown.type === "tbd" && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                color: "var(--cream)",
                fontSize: "clamp(3rem, 9vw, 6.5rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}>
                Date TBD
              </div>
              <div style={{
                marginTop: "1rem",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(218,160,109,0.65)",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
              }}>
                Announcement coming soon
              </div>
            </motion.div>
          )}

          {countdown.type === "number" && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <div style={{
                fontFamily: "var(--font-display)",
                color: "var(--cream)",
                fontSize: "clamp(5rem, 18vw, 13rem)",
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
              }}>
                {displayDays}
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                marginTop: "0.5rem",
              }}>
                <div style={{ width: "1.5rem", height: "1px", background: "rgba(218,160,109,0.5)" }} />
                <span style={{
                  fontSize: "clamp(0.65rem, 1.8vw, 0.95rem)",
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontFamily: "var(--font-display)",
                }}>
                  Days {countdown.direction}
                </span>
                <div style={{ width: "1.5rem", height: "1px", background: "rgba(218,160,109,0.5)" }} />
              </div>
            </motion.div>
          )}

          {/* Gold rule */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.55, ease: "easeOut" }}
            style={{
              width: "3rem", height: "2px",
              background: "rgba(218,160,109,0.6)",
              borderRadius: "999px",
              margin: "1.5rem auto",
            }}
          />

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            style={{
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              fontFamily: "var(--font-display)",
              color: "var(--cream)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Make A Change
          </motion.div>

          {/* Credit */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            style={{
              marginTop: "1.5rem",
              fontSize: "0.5rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(218,160,109,0.4)",
              fontFamily: "var(--font-display)",
            }}
          >
            Franklin High School · Tinikling Dance Company
          </motion.span>

        </div>
      </div>

      {/* ── Event Info ── */}
      <div style={{
        width: "100%",
        boxSizing: "border-box",
        padding: "clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 4rem)",
      }}>
        {/* Image + text row */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(1rem, 3vw, 2rem)",
        }}>
          <div style={{
            flex: "1 1 min(100%, 22rem)",
            minWidth: "min(100%, 20rem)",
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
          }}>
            <img
              src="/assets/hero.jpeg"
              alt="Make A Change Event"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.style.background = "rgba(218,160,109,0.12)";
                e.target.parentElement.style.minHeight = "14rem";
              }}
            />
          </div>

          <div style={{
            flex: "1.5 1 min(100%, 22rem)",
            minWidth: "min(100%, 20rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1rem",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "2.5rem", height: "1px", background: "rgba(218,160,109,0.4)" }} />
              <span style={{
                fontSize: "0.6rem",
                fontWeight: "800",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--red)",
                fontFamily: "var(--font-display)",
              }}>
                About the event
              </span>
            </div>

            <h2 style={{ margin: 0, fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>
              Make A Change
            </h2>

            <p style={{
              fontSize: "clamp(0.92rem, 2vw, 1.05rem)",
              lineHeight: "1.85",
              color: "var(--dark)",
              fontFamily: "var(--font-body)",
              margin: 0,
              opacity: 0.85,
            }}>
              Make A Change is an annual event at the end of the school year, showcasing various Filipino dances learned within Franklin High School's Tinikling Dance Club. In partnership with Kabataan Alliance and NCPASA, all proceeds are donated directly to charities supporting Filipino and Filipino-American communities.
            </p>
          </div>
        </div>

        {/* Performance Inquiries CTA */}
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
            marginTop: "2.5rem",
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
            Book Us
          </div>

          <h2 style={{
            color: "white",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            margin: "0 0 1.5rem",
            lineHeight: 1.2,
            position: "relative",
          }}>
            Bring TDC to your debut or event
          </h2>

          <motion.button
            whileHover={{ scale: 1.04, background: "var(--red)" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveSection("contact")}
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
            Performance Inquiries →
          </motion.button>
        </motion.div>
      </div>
    </>
  );
}
