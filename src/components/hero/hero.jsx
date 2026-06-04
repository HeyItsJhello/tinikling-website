import { motion } from "framer-motion";
import hero from "/assets/hero.jpeg";

export default function Hero() {
  return (
    <section
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "clamp(40vh, 50vh, 60vh)",
        minHeight: "400px",
        overflow: "hidden",
        width: "100%",
        margin: 0,
        padding: 0,
        zIndex: 1,
        boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(12,8,5,0.45)",
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(208,49,45,0.04) 0px, rgba(208,49,45,0.04) 1px, transparent 1px, transparent 22px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "45%",
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,224,0.18), rgba(255,255,224,0.65))",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "var(--cream)",
          padding: "0 1rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                width: "2rem",
                height: "1px",
                background: "rgba(218,160,109,0.5)",
              }}
            />
            <span
              style={{
                fontSize: "0.52rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(218,160,109,0.75)",
                fontFamily: "var(--font-display)",
              }}
            >
              Franklin High School · Est. 2008
            </span>
            <div
              style={{
                width: "2rem",
                height: "1px",
                background: "rgba(218,160,109,0.5)",
              }}
            />
          </motion.div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              margin: "0 0 clamp(0.5rem, 2vw, 1rem) 0",
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: "var(--red)" }}>Tinikling</span>{" "}
            <span style={{ color: "var(--gold)" }}>Dance</span>{" "}
            <span style={{ color: "var(--blue)" }}>Company</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(0.92rem, 2.5vw, 1.4rem)",
              lineHeight: 1.5,
              maxWidth: "38rem",
              margin: "0 auto",
              color: "var(--gold)",
              letterSpacing: "0.02em",
            }}
          >
            A High School dance group performing cultural Filipino dances
          </p>
        </motion.div>
      </div>
    </section>
  );
}
