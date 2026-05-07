import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const regions = [
  {
    id: "luzon",
    name: "Luzon",
    label: "Northern Islands",
    accent: "var(--red)",
    dances: [
      { name: "Pandanggo sa Ilaw", province: "Mindoro" },
      { name: "Binasuan", province: "Pangasinan" },
      { name: "Sayaw Sa Bangko", province: "Pangasinan" },
      { name: "Maglalatik", province: "Laguna" },
      { name: "Pandanggo Oasiwas", province: "Pangasinan" },
      { name: "Bulaklakan", province: "Bulacan" },
    ],
    svgPath: "M48,4 C58,2 72,8 75,20 C78,32 70,45 75,58 C80,72 74,86 62,91 C50,96 38,88 33,76 C26,62 30,48 27,35 C24,22 32,7 48,4Z",
  },
  {
    id: "visayas",
    name: "Visayas",
    label: "Central Islands",
    accent: "var(--gold)",
    dances: [
      { name: "Tinikling", province: "Visayas" },
      { name: "Cariñosa", province: "Visayas" },
    ],
    svgPath: "M20,35 C28,22 44,26 46,38 C48,50 38,60 26,58 C14,56 12,48 20,35Z M55,18 C64,10 78,14 80,26 C82,38 72,46 62,44 C52,42 46,26 55,18Z M68,60 C75,52 86,56 88,68 C90,80 80,86 70,82 C60,78 60,68 68,60Z",
  },
  {
    id: "mindanao",
    name: "Mindanao",
    label: "Southern Islands",
    accent: "var(--blue)",
    dances: [
      { name: "Kapag Apir", province: "Mindanao" },
      { name: "Itik Itik", province: "Surigao del Sur" },
      { name: "Kini Kini", province: "Mindanao" },
      { name: "Pangalay", province: "Sulu" },
      { name: "Kappa Malong-Malong", province: "Mindanao" },
    ],
    svgPath: "M14,30 C26,12 52,8 70,18 C88,28 94,52 82,70 C70,88 44,94 22,82 C0,70 2,48 14,30Z",
  },
];

export default function PhilippinesMap() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section style={{ padding: "5rem clamp(1rem, 4vw, 3rem)", maxWidth: "1100px", margin: "0 auto" }}>

      {/* Section label */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
        <span style={{
          fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--red)",
          fontFamily: "var(--font-display)", whiteSpace: "nowrap",
        }}>
          Where Our Dances Come From
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", margin: "0 0 0.75rem", lineHeight: 1.2 }}>
          The Philippine Archipelago
        </h2>
        <p style={{
          color: "var(--dark)", opacity: 0.6,
          fontFamily: "var(--font-body)",
          fontSize: "clamp(0.9rem, 2vw, 1rem)",
          maxWidth: "40rem", margin: "0 auto",
          lineHeight: 1.7,
        }}>
          Our dances span all three island groups — each carrying the distinct culture, tradition, and spirit of its people.
        </p>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 18rem), 1fr))",
        gap: "1.5rem",
        alignItems: "start",
      }}>
        {regions.map((region, i) => {
          const isActive = activeId === region.id;

          return (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.13)" }}
              onClick={() => setActiveId(isActive ? null : region.id)}
              style={{
                background: "white",
                borderRadius: "1.25rem",
                padding: "2rem",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                boxShadow: isActive
                  ? "0 16px 48px rgba(0,0,0,0.14)"
                  : "0 4px 20px rgba(0,0,0,0.07)",
                border: `2px solid ${isActive ? region.accent : "rgba(218,160,109,0.2)"}`,
                transition: "border-color 0.3s, box-shadow 0.3s",
                userSelect: "none",
              }}
            >
              {/* Diagonal hatch texture */}
              <svg
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  opacity: 0.025, pointerEvents: "none",
                }}
              >
                <defs>
                  <pattern
                    id={`hatch-${region.id}`}
                    patternUnits="userSpaceOnUse"
                    width="12" height="12"
                    patternTransform="rotate(45)"
                  >
                    <line x1="0" y1="0" x2="0" y2="12" stroke={region.accent} strokeWidth="2" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#hatch-${region.id})`} />
              </svg>

              {/* Island silhouette watermark */}
              <svg
                viewBox="0 0 100 100"
                style={{
                  position: "absolute",
                  right: "-6%", top: "-6%",
                  width: "54%",
                  opacity: isActive ? 0.11 : 0.05,
                  transition: "opacity 0.4s",
                  pointerEvents: "none",
                }}
              >
                <path d={region.svgPath} fill={region.accent} />
              </svg>

              {/* Label pill */}
              <div style={{
                display: "inline-block",
                padding: "0.22rem 0.8rem",
                background: isActive ? region.accent : "rgba(218,160,109,0.1)",
                borderRadius: "999px",
                fontSize: "0.58rem",
                fontWeight: "800",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: isActive ? "white" : "rgba(218,160,109,0.85)",
                fontFamily: "var(--font-display)",
                marginBottom: "0.75rem",
                transition: "background 0.3s, color 0.3s",
              }}>
                {region.label}
              </div>

              {/* Region name */}
              <h3 style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                margin: "0 0 0.25rem",
                color: isActive ? region.accent : "var(--dark)",
                fontFamily: "var(--font-display)",
                lineHeight: 1,
                transition: "color 0.3s",
              }}>
                {region.name}
              </h3>

              <p style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.78rem",
                color: "var(--dark)",
                opacity: 0.4,
                margin: "0 0 1.25rem",
              }}>
                {region.dances.length} {region.dances.length === 1 ? "dance" : "dances"}
              </p>

              {/* Divider */}
              <div style={{
                height: "1px",
                background: isActive ? region.accent : "rgba(218,160,109,0.3)",
                opacity: isActive ? 0.4 : 1,
                marginBottom: "1.25rem",
                transition: "background 0.3s, opacity 0.3s",
              }} />

              {/* Dance list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {region.dances.map((dance, di) => (
                  <div key={dance.name} style={{ display: "flex", alignItems: "flex-start", gap: "0.65rem" }}>
                    <div style={{
                      width: "6px", height: "6px",
                      borderRadius: "50%",
                      background: region.accent,
                      flexShrink: 0,
                      marginTop: "0.38rem",
                      opacity: isActive ? 1 : 0.3,
                      transition: "opacity 0.3s",
                    }} />
                    <div style={{ flex: 1 }}>
                      <span style={{
                        fontSize: "0.9rem",
                        fontFamily: "var(--font-display)",
                        color: "var(--dark)",
                        fontWeight: isActive ? "600" : "400",
                        letterSpacing: "0.01em",
                        display: "block",
                        transition: "font-weight 0.2s",
                      }}>
                        {dance.name}
                      </span>
                      <AnimatePresence>
                        {isActive && (
                          <motion.span
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.18, delay: di * 0.04 }}
                            style={{
                              display: "block",
                              fontSize: "0.68rem",
                              color: "var(--dark)",
                              opacity: 0.45,
                              fontFamily: "var(--font-body)",
                              overflow: "hidden",
                              marginTop: "0.05rem",
                            }}
                          >
                            {dance.province}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>

              {/* Toggle hint */}
              <div style={{
                marginTop: "1.5rem",
                fontSize: "0.62rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontFamily: "var(--font-display)",
                color: region.accent,
                opacity: 0.65,
              }}>
                {isActive ? "← collapse" : "explore →"}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
