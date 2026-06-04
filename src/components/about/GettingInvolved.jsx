import { motion } from "framer-motion";

function SectionDivider({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "3rem 0 2rem" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(218,160,109,0.5))" }} />
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)" }} />
        <span style={{
          fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--red)",
          fontFamily: "var(--font-display)", whiteSpace: "nowrap",
        }}>
          {label}
        </span>
        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)" }} />
      </div>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(218,160,109,0.5))" }} />
    </div>
  );
}

export default function GettingInvolved({ setActiveSection }) {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh", paddingTop: "8rem" }}>
      <section style={{ padding: "3rem 2rem 1.5rem", textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
        <h1>Getting Involved</h1>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--dark)", opacity: 0.72, margin: "0.5rem auto 0", maxWidth: "540px", fontFamily: "var(--font-body)" }}>
          TDC connects with the wider Filipino community through advocacy, partnerships, and service.
        </p>
      </section>

      <section style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem) 5rem" }}>

        <SectionDivider label="Kabataan Alliance" />

        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", gap: "clamp(1.5rem, 4vw, 3rem)",
          marginBottom: "1rem",
        }}>
          <div style={{ flex: "1 1 300px", minWidth: "min(300px, 100%)" }}>
            <h2 style={{ marginBottom: "1.25rem" }}>
              <a
                href="https://www.kabataanalliance.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--red)", textDecoration: "none", borderBottom: "2px solid rgba(208,49,45,0.3)" }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = "var(--red)"}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = "rgba(208,49,45,0.3)"}
              >
                Kabataan Alliance ↗
              </a>
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: "1.85", color: "var(--dark)", margin: 0, fontFamily: "var(--font-body)" }}>
              The Kabataan Alliance is a national alliance of more than 50 Filipino youth and student organizations dedicated to serving our communities in the U.S. and back home in the Philippines. With the mission to build national unity among Filipino youth, Kabataan Alliance unites and empowers Filipino youth across the U.S. to engage in community organizing and advocacy toward a just society where people can reach their full potential.
            </p>
          </div>
          <div style={{ flex: "1 1 300px", minWidth: "min(300px, 100%)", display: "flex", justifyContent: "center" }}>
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(218,160,109,0.3), 0 2px 8px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.25 }}
              style={{
                width: "100%", maxWidth: "38rem",
                height: "min(22rem, 60vw)",
                borderRadius: "1.25rem", overflow: "hidden",
                boxShadow: "0 8px 32px rgba(218,160,109,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                borderTop: "4px solid var(--red)",
              }}
            >
              <img
                src="/assets/involvement/KABATAAN.png"
                alt="Kabataan Alliance"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>
          </div>
        </div>

        <SectionDivider label="Defend Migrants Campaign" />

        <div style={{
          position: "relative",
          background: "linear-gradient(135deg, #1e1b17 0%, #2a2118 100%)",
          borderRadius: "1.25rem",
          padding: "clamp(1.75rem, 5vw, 3rem) clamp(1.5rem, 5vw, 3.5rem)",
          marginBottom: "1rem",
          overflow: "hidden",
        }}>
          {/* Concentric rings decoration */}
          <div style={{
            position: "absolute", top: "-4rem", right: "-4rem",
            width: "16rem", height: "16rem", borderRadius: "50%",
            border: "1px solid rgba(218,160,109,0.1)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: "-2.5rem", right: "-2.5rem",
            width: "12rem", height: "12rem", borderRadius: "50%",
            border: "1px solid rgba(218,160,109,0.16)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", top: "-1rem", right: "-1rem",
            width: "8rem", height: "8rem", borderRadius: "50%",
            border: "1px solid rgba(218,160,109,0.22)", pointerEvents: "none",
          }} />
          {/* Bottom-left rings */}
          <div style={{
            position: "absolute", bottom: "-3rem", left: "-3rem",
            width: "12rem", height: "12rem", borderRadius: "50%",
            border: "1px solid rgba(218,160,109,0.08)", pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: "-1.5rem", left: "-1.5rem",
            width: "8rem", height: "8rem", borderRadius: "50%",
            border: "1px solid rgba(218,160,109,0.12)", pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div style={{ width: "1.5rem", height: "1px", background: "rgba(218,160,109,0.45)" }} />
              <span style={{
                fontSize: "0.55rem", fontWeight: "800", letterSpacing: "0.22em",
                textTransform: "uppercase", color: "rgba(218,160,109,0.65)",
                fontFamily: "var(--font-display)",
              }}>
                Advocacy
              </span>
              <div style={{ width: "1.5rem", height: "1px", background: "rgba(218,160,109,0.45)" }} />
            </div>
            <h2 style={{ color: "var(--gold)", textAlign: "center", marginBottom: "1.25rem", marginTop: 0 }}>
              Defend Migrants Campaign
            </h2>
            <p style={{
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              lineHeight: "1.85", color: "rgba(255,255,245,0.82)",
              textAlign: "center", maxWidth: "62rem",
              margin: "0 auto 1.75rem",
              fontFamily: "var(--font-body)",
            }}>
              As Filipino youth, many of our families have migrated to the U.S. for a better livelihood due to lack of employment in the Philippines. Filipinos have been here for decades to find jobs abroad and often petition their families to reunite. Trump's announcement for deportation leaves feelings of uncertainty and fear for Filipino youth under the DACA program. Recently, U.S.-Philippine Ambassador Jose Manuel Romualdez affirmed mass deportation by instructing Filipinos to "self-deport" — abandoning many Filipinos in times of anxiety and stress. The results of this election are a call for Filipino youth to raise our concerns and advocate for the rights and welfare of Filipinos.
            </p>
            <div style={{ textAlign: "center" }}>
              <a
                href="https://tinyurl.com/kaba-DMC"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  color: "var(--gold)",
                  fontWeight: "700",
                  textDecoration: "none",
                  fontSize: "0.92rem",
                  borderBottom: "1px solid rgba(218,160,109,0.5)",
                  fontFamily: "var(--font-body)",
                  paddingBottom: "1px",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = "var(--gold)"}
                onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = "rgba(218,160,109,0.5)"}
              >
                Learn more about the campaign →
              </a>
            </div>
          </div>
        </div>

        <SectionDivider label="Kapit Bisig" />

        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", gap: "clamp(1.5rem, 4vw, 3rem)",
        }}>
          <div style={{ flex: "1 1 300px", minWidth: "min(300px, 100%)", display: "flex", justifyContent: "center", order: 1 }}>
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(218,160,109,0.3), 0 2px 8px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.25 }}
              style={{
                width: "100%", maxWidth: "38rem",
                height: "min(22rem, 60vw)",
                borderRadius: "1.25rem", overflow: "hidden",
                boxShadow: "0 8px 32px rgba(218,160,109,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                borderTop: "4px solid var(--red)",
              }}
            >
              <img
                src="/assets/involvement/KAPIT.png"
                alt="Kapit Bisig"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </motion.div>
          </div>
          <div style={{ flex: "1 1 300px", minWidth: "min(300px, 100%)", order: 2 }}>
            <h2 style={{ marginBottom: "1.25rem" }}>Kapit Bisig</h2>
            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: "1.85", color: "var(--dark)", margin: 0, fontFamily: "var(--font-body)" }}>
              Kabataan Alliance's Kapit Bisig ("link arms" in Tagalog) Relief Campaign brings together Filipino youth to fundraise for relief and rehabilitation in vulnerable communities impacted by super typhoons in the Philippines. We use education to understand why environmental disasters happen and the impacts left on families. We partner with the National Alliance of Filipino Concerns (NAFCON) to direct donations to the Consortium for People's Development – Disaster Response (CPDDR), supporting and directly providing relief to those in need.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
