import React from "react";
import { motion } from "framer-motion";

const PARTNER_CLUBS = [
  "Franklin's FAHS",
  "Cosumnes Oaks Tinikling",
  "Monterey Trail Filipino Club",
  "Sheldon Filipino Pamayanan",
  "Laguna Creek Bayanihan",
  "Florin Kapit Bisig",
  "Pleasant Grove FAYA",
  "Poly", "Haka", "Pasifika United", "Red Cross",
];

function SplitCard({ image, imagePosition = "left", objectPosition = "center", title, children, extra }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      style={{
        display: "flex", flexWrap: "wrap",
        background: "white", borderRadius: "1.25rem",
        overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        marginBottom: "2rem",
        transition: "box-shadow 0.2s",
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.14)"}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08)"}
    >
      <div style={{
        flex: "1 1 300px", minWidth: "min(300px, 100%)",
        order: imagePosition === "right" ? 2 : 1,
        minHeight: "18rem",
      }}>
        <img
          src={image} alt={title}
          style={{ width: "100%", height: "100%", minHeight: "18rem", objectFit: "cover", objectPosition, display: "block" }}
        />
      </div>
      <div style={{
        flex: "1 1 300px", minWidth: "min(300px, 100%)",
        padding: "clamp(1.75rem, 4vw, 2.5rem)",
        display: "flex", flexDirection: "column", justifyContent: "center",
        order: imagePosition === "right" ? 1 : 2,
      }}>
        <h3 style={{ margin: "0 0 1rem", fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}>
          {title}
        </h3>
        <div style={{ fontSize: "clamp(0.92rem, 2vw, 1rem)", lineHeight: "1.85", color: "var(--dark)", fontFamily: "var(--font-body)" }}>
          {children}
        </div>
        {extra && (
          <div style={{ marginTop: "1.5rem" }}>
            {extra}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function SocialEvents({ setActiveSection }) {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh", paddingTop: "8rem" }}>

      {/* Header */}
      <section style={{ padding: "3rem 2rem 2rem", textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
        <h1>Social Events</h1>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--dark)", opacity: 0.72, margin: "0.5rem auto 0", fontFamily: "var(--font-body)" }}>
          TDC hosts events throughout the year — great ways to connect with members and partner clubs across Elk Grove.
        </p>
      </section>

      {/* Partner clubs */}
      <section style={{ maxWidth: "860px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem) 3rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
          <span style={{
            fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--red)",
            fontFamily: "var(--font-display)", whiteSpace: "nowrap",
          }}>
            Partner Clubs
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", justifyContent: "center" }}>
          {PARTNER_CLUBS.map((club) => (
            <span key={club} style={{
              padding: "0.32rem 0.85rem",
              background: "white",
              border: "1.5px solid rgba(218,160,109,0.5)",
              borderRadius: "999px",
              fontSize: "0.82rem",
              color: "var(--dark)",
              fontFamily: "var(--font-body)",
            }}>
              {club}
            </span>
          ))}
        </div>
      </section>

      {/* Events */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem) 5rem" }}>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2.5rem" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
          <span style={{
            fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
            textTransform: "uppercase", color: "var(--red)",
            fontFamily: "var(--font-display)", whiteSpace: "nowrap",
          }}>
            Some of our events
          </span>
          <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
        </div>

        {/* Kapit Bisig Fundraiser */}
        <SplitCard
          image="/assets/events/NONMAC/2025KAPIT.png"
          imagePosition="left"
          objectPosition="center"
          title="Kapit Bisig Interclub Fundraiser & Karaoke Night"
        >
          <p style={{ margin: 0, color: "var(--dark)", fontFamily: "var(--font-body)" }}>
            On December 5th, TDC met with Franklin's FAHS, Monterey Trail's Filipino Club, and Sheldon's Filipino Pamayanan Club to raise funds for those impacted by the typhoons that had just hit the Philippines. Celi, a guest speaker from Kabataan Alliance, came to inform members of how to create an impact in their community.
          </p>
        </SplitCard>

        {/* TDC Hangouts */}
        <SplitCard
          image="/assets/events/SOCIAL/THANKSGIVING.png"
          imagePosition="right"
          objectPosition="center 35%"
          title="TDC Hangouts"
          extra={
            <div style={{ borderRadius: "0.85rem", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
              <img
                src="/assets/events/SOCIAL/WINTER.png"
                alt="Winter Hangout"
                style={{ width: "100%", height: "10rem", objectFit: "cover", display: "block" }}
              />
            </div>
          }
        >
          <p style={{ margin: 0, color: "var(--dark)", fontFamily: "var(--font-body)" }}>
            Tinikling Dance Club hosts a Thanksgiving, Winter, Spring, and Summer Hangout — filled with food, games, karaoke, and the occasional fire alarm.
          </p>
        </SplitCard>

        {/* And more */}
        <SplitCard
          image="/assets/events/SOCIAL/ABOVEANDMORE.png"
          imagePosition="left"
          objectPosition="center 35%"
          title="And More!"
          extra={
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <div style={{ flex: 1, borderRadius: "0.85rem", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                <img
                  src="/assets/events/SOCIAL/BELOWLEFTANDMORE.png"
                  alt="More events"
                  style={{ width: "100%", height: "8rem", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ flex: 1, borderRadius: "0.85rem", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}>
                <img
                  src="/assets/events/SOCIAL/BELOWRIGHTANDMORE.png"
                  alt="More events"
                  style={{ width: "100%", height: "8rem", objectFit: "cover", display: "block" }}
                />
              </div>
            </div>
          }
        >
          <p style={{ margin: "0 0 1rem", color: "var(--dark)", fontFamily: "var(--font-body)" }}>
            We have many other events throughout the year. Keep an eye out for announcements at our general meetings!
          </p>
          <motion.button
            onClick={() => setActiveSection("becomemember")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "var(--red)", color: "white",
              border: "none", borderRadius: "0.55rem",
              padding: "0.65rem 1.5rem", fontSize: "0.88rem",
              fontWeight: "700", fontFamily: "var(--font-display)",
              cursor: "pointer", letterSpacing: "0.03em",
            }}
          >
            Join Us →
          </motion.button>
        </SplitCard>
      </section>
    </main>
  );
}
