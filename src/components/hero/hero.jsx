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
        width: "100vw",
        margin: 0,
        padding: 0,
        zIndex: 1,
        boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)"
      }}
    >
      {/* Background image layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(43, 43, 43, 0.8)"
        }}
      />
      
      {/* Gradient transition to cream background */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "30%",
          background: "linear-gradient(to bottom, transparent, rgba(139, 115, 85, 0.4), rgba(139, 115, 85, 0.7))",
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
          color: "var(--cream)"
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ padding: "0 1rem" }}
        >
          <h1 style={{
            fontSize: "clamp(2.5rem, 8vw, 6rem)",
            margin: "0 0 clamp(0.5rem, 2vw, 1rem) 0",
            lineHeight: "1.2"
          }}>
            <span style={{color: "var(--red)"}}>Tinikling</span>{" "}
            <span style={{color: "var(--gold)"}}>Dance</span>{" "}
            <span style={{color: "var(--blue)"}}>Company</span>
          </h1>
          <p style={{
            fontSize: "clamp(1rem, 3vw, 1.7rem)",
            margin: 0,
            lineHeight: "1.4",
            maxWidth: "800px"
          }}>
            A High School dance group performing cultural Filipino dances
          </p>
        </motion.div>
      </div>
    </section>
  );
}