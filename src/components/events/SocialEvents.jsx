import { motion } from "framer-motion";

const PARTNER_CLUBS = [
  "Franklin's FAHS",
  "Cosumnes Oaks Tinikling",
  "Monterey Trail Filipino Club",
  "Sheldon Filipino Pamayanan",
  "Laguna Creek Bayanihan",
  "Florin Kapit Bisig",
  "Pleasant Grove FAYA",
  "Poly", "Haka", "Pasifika United",
];

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

function SplitCard({ image, imagePosition = "left", objectPosition = "center", title, children, extra }) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hovered"
      variants={{
        rest: { y: 0, boxShadow: "0 4px 24px rgba(218,160,109,0.14), 0 1px 4px rgba(0,0,0,0.06)" },
        hovered: { y: -5, boxShadow: "0 14px 40px rgba(218,160,109,0.28), 0 2px 10px rgba(0,0,0,0.09)" },
      }}
      transition={{ duration: 0.25 }}
      style={{
        display: "flex", flexWrap: "wrap",
        background: "white", borderRadius: "1.25rem",
        overflow: "hidden",
        borderTop: "4px solid var(--red)",
        marginBottom: "2rem",
      }}
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
      <section style={{ padding: "3rem 2rem 1.5rem", textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
        <h1>Social Events</h1>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "var(--dark)", opacity: 0.72, margin: "0.5rem auto 0", fontFamily: "var(--font-body)" }}>
          TDC hosts events throughout the year — great ways to connect with members and partner clubs across Elk Grove.
        </p>
      </section>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem) 5rem" }}>

        <SectionDivider label="Some of our events" />

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
              boxShadow: "0 4px 14px rgba(208,49,45,0.28)",
            }}
          >
            Join Us →
          </motion.button>
        </SplitCard>

        <SectionDivider label="Partner Clubs" />

        <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--dark)", opacity: 0.5, margin: "-1rem 0 1.5rem", fontFamily: "var(--font-body)" }}>
          Schools and clubs we work with across the region
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
          {PARTNER_CLUBS.map((club) => (
            <span key={club} style={{
              padding: "0.38rem 0.95rem",
              background: "white",
              border: "1.5px solid rgba(218,160,109,0.55)",
              borderRadius: "999px",
              fontSize: "0.85rem",
              color: "var(--dark)",
              fontFamily: "var(--font-body)",
            }}>
              {club}
            </span>
          ))}
        </div>

      </section>
    </main>
  );
}
