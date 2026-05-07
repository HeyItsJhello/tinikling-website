import { motion } from "framer-motion";
import { pastOfficersData, pastOfficersYears } from "../../data/members";

export default function PastOfficers() {
  return (
    <section style={{ marginTop: "2rem", paddingTop: "3rem" }}>
      {/* Section divider */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem", padding: "0 clamp(1rem, 4vw, 2rem)" }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
        <span style={{
          fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--red)",
          fontFamily: "var(--font-display)", whiteSpace: "nowrap",
        }}>
          Past Officers
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 17rem), 1fr))",
        gap: "2rem",
        padding: "0 clamp(1rem, 4vw, 2rem) 5rem",
      }}>
        {pastOfficersYears.map((year, index) => {
          const yearData = pastOfficersData[year];
          const shortYear = year.split("-").map(y => y.slice(2)).join("-");
          const imagePath = `/assets/officers/groupphotos/${shortYear}Officers.png`;

          return (
            <motion.div
              key={index}
              whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.25 }}
              style={{
                background: "white",
                borderRadius: "0.85rem",
                overflow: "hidden",
                boxShadow: "0 4px 16px rgba(0,0,0,0.09)",
                display: "flex",
                flexDirection: "column",
                borderTop: "4px solid var(--red)",
              }}
            >
              {/* Photo — fills top */}
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", background: "#2b2b2b", flexShrink: 0 }}>
                <img
                  src={imagePath}
                  alt={`${year} Officers`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    const parent = e.target.parentElement;
                    parent.style.display = "flex";
                    parent.style.alignItems = "center";
                    parent.style.justifyContent = "center";
                    parent.innerHTML = `<span style="color:rgba(255,255,255,0.35);font-size:0.85rem;font-style:italic">No Photo</span>`;
                  }}
                />
                {/* Year badge */}
                <div style={{
                  position: "absolute",
                  top: "0.75rem",
                  left: "0.75rem",
                  background: "var(--red)",
                  color: "white",
                  padding: "0.22rem 0.72rem",
                  borderRadius: "999px",
                  fontSize: "0.68rem",
                  fontWeight: "800",
                  letterSpacing: "0.07em",
                  fontFamily: "var(--font-display)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                }}>
                  {shortYear}
                </div>
              </div>

              {/* Officers list */}
              <div style={{ padding: "1.25rem 1.5rem 1.5rem", flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {Object.entries(yearData).map(([role, name], idx) => (
                    <div key={idx}>
                      {idx > 0 && (
                        <div style={{ height: "1px", background: "rgba(218,160,109,0.3)", margin: "0.6rem 0" }} />
                      )}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.08rem" }}>
                        <span style={{
                          fontSize: "0.58rem",
                          fontWeight: "800",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          fontFamily: "var(--font-display)",
                        }}>
                          {role}
                        </span>
                        <span style={{
                          fontSize: "0.92rem",
                          fontWeight: "600",
                          color: "var(--dark)",
                          fontFamily: "var(--font-body)",
                          lineHeight: 1.3,
                        }}>
                          {name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
