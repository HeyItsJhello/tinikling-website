import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    q: "Do I have to be Filipino?",
    a: "You do NOT have to be Filipino to learn and spread Filipino culture. Many of our members are not Filipino and still perform with us. We highly invite anyone and everyone to share their own cultures while learning a bit about ours.",
  },
  {
    q: "Is it too late to join?",
    a: "Never! We open dance sign-ups throughout the whole school year from October to April. Each month has new dances to learn and we always welcome new members to perform with the club.",
  },
  {
    q: "Do I have to perform?",
    a: "Although we highly recommend it, members don't have to perform. You can join, attend meetings, hangouts, and events to learn about Filipino culture and dances through workshops without ever stepping on stage.",
  },
  {
    q: "What do I gain from joining?",
    a: "A new family and a deeper connection to Filipino culture. We actively participate in many events across the region and at Franklin — there's always something to be a part of.",
  },
];

const ACTIVITIES = [
  "Back to School Rally",
  "Club Rush",
  "Homecoming Parade",
  "Tinikling Workshops & Practices",
  "Boba Fundraiser",
  "Sari Sari Night Market",
  "Multicultural Rally",
  "EGUSD Interclub Fundraiser",
  "EGUSD Interclub Workshops",
  "Parol Making",
  "Food Fair",
  "Poly Night",
  "Make A Change Night",
  "Debuts",
  "Traditional Dance Workshops",
  "Holiday Hangouts",
];

function SectionDivider({ label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "3rem 0 2rem",
      }}
    >
      <div
        style={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(218,160,109,0.5))",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "var(--gold)",
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
          {label}
        </span>
        <div
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "50%",
            background: "var(--gold)",
          }}
        />
      </div>
      <div
        style={{
          flex: 1,
          height: "1px",
          background:
            "linear-gradient(to left, transparent, rgba(218,160,109,0.5))",
        }}
      />
    </div>
  );
}

export default function BecomeMember({ setActiveSection }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main
      style={{
        background: "var(--cream)",
        minHeight: "100vh",
        paddingTop: "8rem",
      }}
    >
      {/* Header */}
      <section
        style={{
          padding: "3rem 2rem 1.5rem",
          textAlign: "center",
          maxWidth: "720px",
          margin: "0 auto",
        }}
      >
        <h1>Become a Member</h1>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: "1.8",
            color: "var(--dark)",
            opacity: 0.72,
            margin: "0.5rem auto 0",
            maxWidth: "540px",
            fontFamily: "var(--font-body)",
          }}
        >
          No experience or Filipino heritage required — just bring your energy
          and curiosity.
        </p>
      </section>

      {/* How to Join */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "2rem clamp(1rem, 4vw, 2rem) 0",
        }}
      >
        <SectionDivider label="How to Join" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "1.25rem",
          }}
        >
          {[
            {
              title: "Come Visit Our Meetings",
              body: "Open to Franklin High School students, held at least once a month on Fridays in Mr. Alovera's room HG7. We explore Filipino traditions, current events, and dances through workshops — with regular practice sessions for performance opportunities throughout the year.",
            },
            {
              title: "Stay Connected",
              body: "Join our GroupMe for live updates. Follow @fhs_tdc on Instagram and our other social channels for event announcements, performance opportunities, and reminders throughout the year.",
            },
          ].map(({ title, body }) => (
            <motion.div
              key={title}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 12px 32px rgba(218,160,109,0.25), 0 2px 8px rgba(0,0,0,0.08)",
              }}
              transition={{ duration: 0.25 }}
              style={{
                background: "white",
                borderRadius: "1.25rem",
                padding: "1.75rem",
                boxShadow:
                  "0 4px 16px rgba(218,160,109,0.18), 0 1px 4px rgba(0,0,0,0.06)",
                borderTop: "4px solid var(--red)",
              }}
            >
              <h3 style={{ margin: "0 0 0.75rem", fontSize: "1.1rem" }}>
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: "1.8",
                  color: "var(--dark)",
                  margin: 0,
                  fontFamily: "var(--font-body)",
                }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <motion.button
            onClick={() => setActiveSection("contact")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "var(--red)",
              color: "white",
              border: "none",
              borderRadius: "0.55rem",
              padding: "0.8rem 2.25rem",
              fontSize: "0.95rem",
              fontWeight: "700",
              fontFamily: "var(--font-display)",
              cursor: "pointer",
              letterSpacing: "0.03em",
              boxShadow: "0 4px 14px rgba(208,49,45,0.28)",
            }}
          >
            Contact Us / Social Media
          </motion.button>
        </div>
      </section>

      {/* Activities */}
      <section
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem) 0",
        }}
      >
        <SectionDivider label="2025–26 Activities" />
        <p
          style={{
            textAlign: "center",
            fontSize: "0.85rem",
            color: "var(--dark)",
            opacity: 0.5,
            margin: "-1rem 0 1.5rem",
            fontFamily: "var(--font-body)",
          }}
        >
          What we've done before, stay tuned for the 2026-2027 schedule!
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "center",
          }}
        >
          {ACTIVITIES.map((activity) => (
            <span
              key={activity}
              style={{
                padding: "0.38rem 0.95rem",
                background: "white",
                border: "1.5px solid rgba(218,160,109,0.55)",
                borderRadius: "999px",
                fontSize: "0.85rem",
                color: "var(--dark)",
                fontFamily: "var(--font-body)",
              }}
            >
              {activity}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem) 5rem",
        }}
      >
        <SectionDivider label="Frequently Asked Questions" />
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                borderRadius: "0.85rem",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                borderLeft:
                  openFaq === i
                    ? "3px solid var(--red)"
                    : "3px solid transparent",
                transition: "border-color 0.2s ease",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  padding: "1.1rem 1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "left",
                  gap: "1rem",
                  fontFamily: "inherit",
                }}
              >
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    color: "var(--dark)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.q}
                </span>
                <span
                  style={{
                    color: "var(--red)",
                    fontSize: "1.4rem",
                    fontWeight: "400",
                    flexShrink: 0,
                    lineHeight: 1,
                    display: "inline-block",
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        padding: "0 1.5rem 1.3rem",
                        margin: 0,
                        fontSize: "0.92rem",
                        lineHeight: "1.8",
                        color: "var(--dark)",
                        opacity: 0.78,
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "2.5rem",
            background: "white",
            borderRadius: "1rem",
            padding: "1.4rem 1.75rem",
            textAlign: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
            borderTop: "3px solid var(--red)",
          }}
        >
          <p
            style={{
              margin: "0 0 0.35rem",
              fontWeight: "600",
              color: "var(--dark)",
              fontSize: "0.95rem",
              fontFamily: "var(--font-body)",
            }}
          >
            Still have questions?
          </p>
          <a
            href="mailto:frhstinikling@gmail.com"
            style={{
              color: "var(--red)",
              fontWeight: "700",
              textDecoration: "none",
              fontSize: "0.92rem",
              fontFamily: "var(--font-body)",
            }}
          >
            frhstinikling@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
