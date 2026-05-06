import React from "react";

export default function GettingInvolved({ setActiveSection }) {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh", paddingTop: "8rem" }}>
      <section style={{ padding: "3rem clamp(1rem, 4vw, 2rem) 5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "3.5rem" }}>Getting Involved</h1>

        {/* Kabataan Alliance */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", gap: "clamp(1.5rem, 4vw, 3rem)",
          marginBottom: "4rem",
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
            <div style={{
              width: "100%", maxWidth: "38rem",
              height: "min(22rem, 60vw)",
              borderRadius: "1.25rem", overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}>
              <img
                src="/assets/involvement/KABATAAN.png"
                alt="Kabataan Alliance"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>

        {/* Defend Migrants Campaign — callout block */}
        <div style={{
          background: "var(--dark)",
          borderRadius: "1.25rem",
          padding: "clamp(1.75rem, 5vw, 3rem) clamp(1.5rem, 5vw, 3.5rem)",
          marginBottom: "4rem",
        }}>
          <h2 style={{ color: "var(--red)", textAlign: "center", marginBottom: "1.25rem", marginTop: 0 }}>
            Defend Migrants Campaign
          </h2>
          <p style={{
            fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
            lineHeight: "1.85", color: "rgba(255,255,245,0.85)",
            textAlign: "center", maxWidth: "62rem",
            margin: "0 auto 1.5rem",
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
                fontWeight: "600",
                textDecoration: "none",
                fontSize: "0.92rem",
                borderBottom: "1px solid rgba(218,160,109,0.5)",
                fontFamily: "var(--font-body)",
                paddingBottom: "1px",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = "var(--gold)"}
              onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = "rgba(218,160,109,0.5)"}
            >
              Learn more about the campaign →
            </a>
          </div>
        </div>

        {/* Kapit Bisig */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", gap: "clamp(1.5rem, 4vw, 3rem)",
        }}>
          <div style={{ flex: "1 1 300px", minWidth: "min(300px, 100%)", display: "flex", justifyContent: "center", order: 1 }}>
            <div style={{
              width: "100%", maxWidth: "38rem",
              height: "min(22rem, 60vw)",
              borderRadius: "1.25rem", overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            }}>
              <img
                src="/assets/involvement/KAPIT.png"
                alt="Kapit Bisig"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
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
