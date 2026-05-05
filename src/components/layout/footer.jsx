import { learnConfig } from "../../data/learn";

const navLinks = [
  { label: "About Us", id: "about" },
  { label: "Events", id: "events" },
  { label: "Dances", id: "dances" },
  { label: "Officers", id: "officers" },
  ...(learnConfig.enabled ? [{ label: "Learn", id: "learn" }] : []),
  { label: "Contact Us", id: "contact" },
];

export default function Footer({ setActiveSection }) {
  return (
    <footer style={{ background: "var(--dark)", color: "var(--cream)", position: "relative" }}>
      {/* Wave divider */}
      <div style={{ lineHeight: 0, overflow: "hidden" }}>
        <svg
          viewBox="0 0 1440 64"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "64px" }}
        >
          <path
            d="M0,32 C240,64 480,0 720,32 C960,64 1200,0 1440,32 L1440,0 L0,0 Z"
            fill="var(--cream)"
          />
        </svg>
      </div>

      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem clamp(1.5rem, 4vw, 4rem) 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* Branding column */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.4rem",
              letterSpacing: "0.06em",
              lineHeight: 1,
              marginBottom: "1.1rem",
              color: "var(--red)",
              textAlign: "center",
            }}
          >
            T.D.C
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem", alignItems: "center" }}>
            {[
              {
                href: "https://www.instagram.com/fhs_tdc/",
                label: "@fhs_tdc",
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"/></svg>,
              },
              {
                href: "https://www.youtube.com/@TiniklingDanceCompany",
                label: "YouTube",
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
              },
              ...(learnConfig.social?.tiktok?.url ? [{
                href: learnConfig.social.tiktok.url,
                label: "TikTok",
                icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.17 8.17 0 004.77 1.53V6.84a4.85 4.85 0 01-1-.15z"/></svg>,
              }] : []),
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "var(--cream)",
                  textDecoration: "none",
                  fontSize: "0.88rem",
                  fontWeight: "600",
                  opacity: 0.75,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.75")}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links column */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              color: "var(--red)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 1rem 0",
            }}
          >
            Navigate
          </h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.55rem" }}>
            {navLinks.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--cream)",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    padding: 0,
                    opacity: 0.7,
                    transition: "opacity 0.2s",
                    fontFamily: "var(--font-body)",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* About column */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1rem",
              color: "var(--red)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "0 0 1rem 0",
            }}
          >
            About
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", fontSize: "0.88rem", opacity: 0.65, color: "var(--cream)" }}>
            <span>Franklin High School</span>
            <span>Elk Grove, CA</span>
            <span>Est. 2008</span>
            <span style={{ marginTop: "0.5rem" }}>NCPASA Member</span>
            <span>Kabataan Alliance</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(218, 160, 109, 0.2)",
          padding: "1.25rem clamp(1.5rem, 4vw, 4rem)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.8rem", opacity: 0.45, color: "var(--cream)" }}>
          © {new Date().getFullYear()} Tinikling Dance Company. All rights reserved.
        </p>
      </div>

      {/* Secret Developer Button */}
      <button
        onClick={() => setActiveSection("developer")}
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          width: "3rem",
          height: "3rem",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          opacity: 0,
        }}
        aria-label="Developer credits"
      />
    </footer>
  );
}
