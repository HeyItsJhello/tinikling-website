import { motion } from "framer-motion";
import { blogs } from "../../data/blogs";

export default function Developer() {
  return (
    <main
      style={{
        background: "#161210",
        minHeight: "100vh",
        paddingTop: "7rem",
        paddingBottom: "7rem",
      }}
    >
      <div
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 2.5rem)",
        }}
      >
        {/* Found me hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(218,160,109,0.18)",
            }}
          />
          <span
            style={{
              fontSize: "0.6rem",
              fontWeight: "800",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(218,160,109,0.5)",
              fontFamily: "var(--font-display)",
              whiteSpace: "nowrap",
            }}
          >
            you found me
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(218,160,109,0.18)",
            }}
          />
        </motion.div>

        {/* ── Profile ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55 }}
          style={{
            display: "flex",
            gap: "clamp(1.5rem, 4vw, 3rem)",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {/* Photo */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div
              style={{
                width: "clamp(9rem, 20vw, 12rem)",
                height: "clamp(9rem, 20vw, 12rem)",
                borderRadius: "0.85rem",
                overflow: "hidden",
                border: "2px solid rgba(218,160,109,0.25)",
              }}
            >
              <img
                src="/assets/developer/jhelson.png"
                alt="Jhelson Gonzales"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background =
                    "rgba(218,160,109,0.06)";
                }}
              />
            </div>
          </div>

          {/* Name + bio */}
          <div style={{ flex: 1, minWidth: "14rem" }}>
            <p
              style={{
                fontSize: "0.62rem",
                fontWeight: "800",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontFamily: "var(--font-display)",
                margin: "0 0 0.5rem",
                opacity: 0.7,
              }}
            >
              Website Created By
            </p>
            <h1
              style={{
                color: "rgba(255,255,224,0.92)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                margin: "0 0 0.4rem",
                lineHeight: 1.05,
              }}
            >
              Jhelson Gonzales
            </h1>
            <p
              style={{
                color: "rgba(255,255,224,0.4)",
                fontSize: "clamp(0.85rem, 2vw, 0.95rem)",
                fontFamily: "var(--font-body)",
                margin: "0 0 1.5rem",
                lineHeight: 1.5,
              }}
            >
              Advertising Officer · Franklin High School
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["React", "Vite", "Framer Motion"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "0.25rem 0.75rem",
                    background: "rgba(218,160,109,0.08)",
                    border: "1.5px solid rgba(218,160,109,0.2)",
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: "700",
                    color: "rgba(218,160,109,0.65)",
                    fontFamily: "var(--font-display)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Personal note ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            borderLeft: "3px solid var(--red)",
            paddingLeft: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,224,0.65)",
              fontSize: "clamp(0.95rem, 2.2vw, 1.05rem)",
              lineHeight: 1.85,
              fontFamily: "var(--font-body)",
              fontStyle: "italic",
              margin: "0 0 0.75rem",
            }}
          >
            "Why would you even check the very bottom right corner of the
            footer? How did you find me? So anyways,hi I'm the developer"
          </p>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: "800",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontFamily: "var(--font-display)",
              opacity: 0.6,
            }}
          >
            — Jhelson
          </span>
        </motion.div>

        {/* ── Blog section ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          {/* Section divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(218,160,109,0.18)",
              }}
            />
            <span
              style={{
                fontSize: "0.6rem",
                fontWeight: "800",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--red)",
                fontFamily: "var(--font-display)",
                whiteSpace: "nowrap",
              }}
            >
              Developer Blog
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: "rgba(218,160,109,0.18)",
              }}
            />
          </div>

          {/* Blog cards */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {blogs.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 + i * 0.1, duration: 0.4 }}
                style={{
                  background: "#1f1b16",
                  borderRadius: "0.85rem",
                  borderTop: "3px solid var(--red)",
                  padding: "1.5rem 1.75rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.85rem",
                    marginBottom: "0.6rem",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      color: "rgba(255,255,224,0.88)",
                      fontSize: "clamp(0.95rem, 2.2vw, 1.1rem)",
                      fontFamily: "var(--font-display)",
                      margin: 0,
                      lineHeight: 1.3,
                      flex: 1,
                      minWidth: "12rem",
                    }}
                  >
                    {post.title}
                  </h3>
                  <span
                    style={{
                      color: "var(--gold)",
                      fontSize: "0.72rem",
                      fontWeight: "700",
                      opacity: 0.55,
                      fontFamily: "var(--font-display)",
                      letterSpacing: "0.04em",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {post.date}
                  </span>
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "rgba(218,160,109,0.12)",
                    marginBottom: "0.85rem",
                  }}
                />

                <p
                  style={{
                    color: "rgba(255,255,224,0.5)",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    fontFamily: "var(--font-body)",
                    margin: 0,
                  }}
                >
                  {post.content}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* ── Footer line ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{
            marginTop: "4rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(218,160,109,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,224,0.22)",
              fontSize: "0.78rem",
              fontFamily: "monospace",
            }}
          >
            built with React + Vite + Framer Motion
          </span>
          <span
            style={{
              color: "rgba(218,160,109,0.3)",
              fontSize: "0.78rem",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} TDC
          </span>
        </motion.div>
      </div>
    </main>
  );
}
