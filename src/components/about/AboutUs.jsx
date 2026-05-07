import React, { useState } from "react";
import { motion } from "framer-motion";
import aboutUsHERO from "/assets/AboutUsHERO.png";
import Reveal from "../common/reveal";
import StatCounter from "./StatCounter";

function SpecialThanksCard({ person }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [photo1Error, setPhoto1Error] = useState(false);
  const [photo2Error, setPhoto2Error] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 16px 48px rgba(0,0,0,0.14)" }}
      transition={{ duration: 0.25 }}
      className="special-recognition-card"
      style={{
        background: "white",
        borderRadius: "1rem",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.09)",
        borderTop: "4px solid var(--red)",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "2rem",
        padding: "2rem 2rem 2rem 2.5rem",
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: "0.25rem" }}>
          {person.name}
        </h2>
        {person.quote && (
          <p style={{
            fontSize: "0.8rem",
            fontStyle: "italic",
            color: "var(--gold)",
            fontFamily: "var(--font-body)",
            margin: "0 0 0.85rem",
            lineHeight: 1.5,
            opacity: 0.9,
          }}>
            "{person.quote}"
          </p>
        )}
        <div style={{ height: "1.5px", background: "rgba(218,160,109,0.35)", margin: "0.75rem 0 1rem" }} />
        <p style={{
          fontSize: "clamp(0.88rem, 1.8vw, 1rem)",
          lineHeight: "1.75",
          color: "var(--dark)",
          fontFamily: "var(--font-body)",
          margin: 0,
          opacity: 0.85,
        }}>
          {person.description}
        </p>
      </div>

      {/* Flip photo */}
      <div
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        className="special-recognition-photo"
        style={{
          position: "relative",
          width: "min(18rem, 38vw)",
          height: "min(18rem, 38vw)",
          flexShrink: 0,
          perspective: "1000px",
          cursor: "pointer",
        }}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.55 }}
          style={{
            position: "absolute", width: "100%", height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "0.75rem",
            overflow: "hidden",
            background: photo1Error ? "var(--gold)" : "transparent",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={person.photo}
            alt={person.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => setPhoto1Error(true)}
          />
        </motion.div>

        <motion.div
          animate={{ rotateY: isFlipped ? 0 : -180 }}
          transition={{ duration: 0.55 }}
          style={{
            position: "absolute", width: "100%", height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "0.75rem",
            overflow: "hidden",
            transform: "rotateY(180deg)",
            background: photo2Error ? "var(--gold)" : "transparent",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={person.photo2}
            alt={person.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => setPhoto2Error(true)}
          />
        </motion.div>

        {/* Hover hint */}
        <div style={{
          position: "absolute",
          bottom: "0.6rem",
          right: "0.6rem",
          background: "rgba(0,0,0,0.45)",
          backdropFilter: "blur(4px)",
          color: "white",
          fontSize: "0.6rem",
          fontWeight: "700",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "0.2rem 0.55rem",
          borderRadius: "999px",
          fontFamily: "var(--font-display)",
          pointerEvents: "none",
        }}>
          Hover to flip
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutUs({ setActiveSection }) {
  const specialThanks = [
    {
      name: "Celi Corpuz",
      description: "Celi Corpuz is a University of California, Davis graduate and is a part of NCPASA, Mga Kapatid, and Kabataan Alliance. Celi has been helping us learn new traditional dances and has helped us with numerous fundraisers since 2023.",
      quote: "",
      photo: "/assets/Special/Celi.png",
      photo2: "/assets/Special/CeliGroup.png",
    },
    {
      name: "Mathew Post",
      description: "Our previous TDC president, August Post, had a grandfather to handmake and donate our Sayaw Sa Bangko performance benches in 2022 to pay tribute to the passion and culture of this club. Mathew Post was a woodcarver for over 60 years and was such a big fan of all the work the club has been doing. He passed away at the beginning of 2025. We thank him for helping the Tinikling Dance Club to continue performing and sharing the culture of Sayaw Sa Bangko after so many years.",
      quote: "",
      photo: "/assets/Special/MATHEW.png",
      photo2: "/assets/Special/MATHEWBUILD.png",
    }
  ];

  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh", overflow: "hidden", width: "100%" }}>

      {/* Hero */}
      <section
        className="about-hero"
        style={{
          position: "relative",
          height: "50vh",
          minHeight: "300px",
          overflowX: "hidden",
          width: "100%",
          margin: 0,
          padding: 0,
          boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
        }}
      >
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          backgroundImage: `url(${aboutUsHERO})`,
          backgroundSize: "cover",
          backgroundPosition: "center 50%",
          backgroundRepeat: "no-repeat",
        }} />
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(20,15,10,0.72)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, left: 0, width: "100%", height: "30%",
          background: "linear-gradient(to bottom, transparent, rgba(255,255,224,0.15))",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "relative", zIndex: 1,
          height: "100%", display: "flex", alignItems: "center",
          justifyContent: "center", textAlign: "center",
          padding: "0 1rem",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p style={{
              fontSize: "0.65rem",
              fontWeight: "800",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontFamily: "var(--font-display)",
              margin: "0 0 1rem",
              opacity: 0.8,
            }}>
              Tinikling Dance Club · 2024
            </p>
            <h1 style={{
              fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
              margin: 0,
              fontStyle: "italic",
              lineHeight: "1.3",
              color: "var(--cream)",
            }}>
              Our mission is to share the beauty of Filipino culture through our dance
            </h1>
          </motion.div>
        </div>
      </section>

      {/* About Us section */}
      <Reveal>
        <section style={{ padding: "5rem 2rem 3rem", maxWidth: "1100px", margin: "0 auto" }}>

          {/* Section label */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
            <span style={{
              fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--red)",
              fontFamily: "var(--font-display)", whiteSpace: "nowrap",
            }}>
              Who We Are
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
          </div>

          <h1 style={{ textAlign: "center", marginBottom: "2.5rem" }}>About Us</h1>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            lineHeight: "1.85",
            textAlign: "center",
            color: "var(--dark)",
            maxWidth: "780px",
            margin: "0 auto",
            opacity: 0.88,
          }}>
            <p style={{ margin: 0, color: "var(--dark)", fontFamily: "var(--font-body)" }}>
              Franklin's Tinikling Dance Club (TDC) is a student led cultural dance group that specializes in traditional Philippine Folk Dance. Established in 2008, our club continues to share the beauty of Filipino culture through dance. We take on various performance opportunities, hoping to honor Philippine tradition through our fulfilling and energizing dances.
            </p>
            <p style={{ margin: 0, color: "var(--dark)", fontFamily: "var(--font-body)" }}>
              Towards the end of our school year, we host our annual{" "}
              <span
                onClick={() => setActiveSection("events")}
                style={{ color: "var(--red)", fontWeight: "700", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Make A Change
              </span>. All proceeds are donated to a charity of our choice with the intent of aiding those in need. During our event, members showcase the many dances they have worked on throughout the school year.
            </p>
            <p style={{ margin: 0, color: "var(--dark)", fontFamily: "var(--font-body)" }}>
              Our intricate choreography showcases the culturally diverse population of the Philippines. Originating from the regions of Luzon, Visayas, and Mindanao, each region has developed{" "}
              <span
                onClick={() => setActiveSection("dances")}
                style={{ color: "var(--red)", fontWeight: "700", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                dances
              </span>{" "}
              that reflect their unique cultures and values.
            </p>
            <p style={{ margin: 0, color: "var(--dark)", fontFamily: "var(--font-body)" }}>
              We also host numerous{" "}
              <span
                onClick={() => setActiveSection("socialevents")}
                style={{ color: "var(--red)", fontWeight: "700", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                social events
              </span>{" "}
              and hold regular meetings and workshops for our members at Franklin High School. Our goal is to give our members a sense of community by spreading Filipino culture through performance in the Elk Grove and Sacramento region.
            </p>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginTop: "3rem",
            flexWrap: "wrap",
          }}>
            <motion.button
              onClick={() => setActiveSection("becomemember")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: "var(--red)",
                color: "white",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                fontWeight: "700",
                padding: "0.8rem 2rem",
                border: "none",
                borderRadius: "0.55rem",
                cursor: "pointer",
                letterSpacing: "0.03em",
                boxShadow: "0 4px 14px rgba(208,49,45,0.25)",
              }}
            >
              How do I join
            </motion.button>
            <motion.button
              onClick={() => setActiveSection("officerpositions")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              style={{
                background: "transparent",
                color: "var(--red)",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                fontWeight: "700",
                padding: "0.8rem 2rem",
                border: "2px solid var(--red)",
                borderRadius: "0.55rem",
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
            >
              Officer Positions
            </motion.button>
          </div>
        </section>
      </Reveal>

      {/* Stat Counter */}
      <StatCounter />

      {/* Affiliations & Founded — dark callout stripe */}
      <Reveal>
        <div style={{
          width: "100%",
          background: "var(--red)",
          padding: "3.5rem clamp(2rem, 6vw, 5rem)",
          marginTop: "1rem",
          boxSizing: "border-box",
        }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(2rem, 6vw, 6rem)",
            maxWidth: "760px",
            margin: "0 auto",
          }}>
            <div style={{ textAlign: "center" }}>
              <p style={{
                fontSize: "0.6rem",
                fontWeight: "800",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,224,0.55)",
                fontFamily: "var(--font-display)",
                margin: "0 0 0.75rem",
              }}>
                Affiliations
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {["NCPASA", "Kabataan Alliance"].map(a => (
                  <span key={a} style={{
                    fontSize: "clamp(1rem, 3vw, 1.35rem)",
                    fontFamily: "var(--font-display)",
                    color: "var(--gold)",
                    display: "block",
                  }}>{a}</span>
                ))}
              </div>
            </div>

            <div style={{ width: "1px", height: "5rem", background: "rgba(218,160,109,0.35)", flexShrink: 0 }} />

            <div style={{ textAlign: "center" }}>
              <p style={{
                fontSize: "0.6rem",
                fontWeight: "800",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,224,0.55)",
                fontFamily: "var(--font-display)",
                margin: "0 0 0.75rem",
              }}>
                Founded
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {["2008", "Edith Montemayor"].map(f => (
                  <span key={f} style={{
                    fontSize: "clamp(1rem, 3vw, 1.35rem)",
                    fontFamily: "var(--font-display)",
                    color: "var(--gold)",
                    display: "block",
                  }}>{f}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Special Recognition */}
      <Reveal>
        <section style={{ padding: "5rem 2rem 4rem", maxWidth: "1000px", margin: "0 auto" }}>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
            <span style={{
              fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--red)",
              fontFamily: "var(--font-display)", whiteSpace: "nowrap",
            }}>
              Special Recognition
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {specialThanks.map((person, index) => (
              <SpecialThanksCard key={index} person={person} />
            ))}
          </div>
        </section>
      </Reveal>

      {/* Get Involved CTA */}
      <Reveal>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2rem 2rem 6rem",
          gap: "1.25rem",
          textAlign: "center",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", width: "100%", maxWidth: "400px" }}>
            <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
            <span style={{
              fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--red)",
              fontFamily: "var(--font-display)", whiteSpace: "nowrap",
            }}>
              Want to help?
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
          </div>
          <h2 style={{ margin: 0, fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            Get Involved
          </h2>
          <p style={{
            margin: 0,
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            color: "var(--dark)",
            opacity: 0.7,
            fontFamily: "var(--font-body)",
            maxWidth: "36rem",
            lineHeight: 1.7,
          }}>
            There are many ways to support TDC — from volunteering at events to joining the club or applying for an officer position.
          </p>
          <motion.button
            onClick={() => setActiveSection("gettinginvolved")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: "var(--red)",
              color: "white",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              fontWeight: "700",
              padding: "0.9rem 3rem",
              border: "none",
              borderRadius: "0.55rem",
              cursor: "pointer",
              letterSpacing: "0.04em",
              boxShadow: "0 6px 20px rgba(208,49,45,0.3)",
              marginTop: "0.5rem",
            }}
          >
            Get Involved →
          </motion.button>
        </div>
      </Reveal>
    </main>
  );
}
