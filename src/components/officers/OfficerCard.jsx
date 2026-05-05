import { motion } from "framer-motion";
export default function OfficerCard({ officer }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      style={{
        background: "white",
        padding: "2rem",
        textAlign: "center",
        border: "1px solid rgba(0,0,0,0.1)",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px var(--gold)",
        minHeight: "20rem",
        width: "11rem",
        flexShrink: 0,
      }}
    >
      {/* Photo (optional) */}
      {officer.image && (
        <img
          src={officer.image}
          alt={officer.name}
          style={{
            width: "100%",
            aspectRatio: "1/1",
            borderRadius: "0.5rem",
            objectFit: "cover",
            marginBottom: "1.5rem",
            objectPosition: `center ${officer.center_amount}%`,
          }}
        />
      )}
      <h2
        style={{
          fontSize: "1.25rem",
          margin: "0 auto 1rem auto",
          overflowWrap: "break-word",
          wordBreak: "break-word",
          hyphens: "auto",
        }}
      >
        {officer.name}
      </h2>
      <p
        style={{
          color: "var(--red)",
          fontWeight: "bold",
          fontSize: "0.9rem",
          letterSpacing: "0.05em",
        }}
      >
        {officer.role}
      </p>
    </motion.div>
  );
}
