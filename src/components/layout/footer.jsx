export default function Footer({ setActiveSection }) {
  return (
    <footer
      style={{
        background: "var(--dark)",
        color: "var(--cream)",
        padding: "4rem 6vw",
        textAlign: "center",
        position: "relative"
      }}
    >
      <p style={{ marginBottom: "1rem" }}>
        © {new Date().getFullYear()} Tinikling Dance Company
      </p>
      <p style={{ fontSize: "0.9rem", opacity: 0.7 }}>
        @fhs_tdc on Instagram
      </p>
      
      {/* Secret Developer Button */}
      <button
        onClick={() => setActiveSection('developer')}
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          width: "3rem",
          height: "3rem",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          opacity: 0
        }}
        aria-label="Developer credits"
      />
    </footer>
  );
}