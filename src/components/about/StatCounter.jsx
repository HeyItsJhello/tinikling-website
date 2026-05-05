import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { dances } from "../../data/dances";
import { events } from "../../data/events";
import { alumniData } from "../../data/members";

const yearsActive = new Date().getFullYear() - 2008;
const danceCount = dances.length;
const memberCount = Object.values(alumniData).flat().length;
const macCount = events.filter(e => e.isMakeAChange && e.year !== "upcoming").length;

const STATS = [
  { value: yearsActive, label: "Years Active", suffix: "" },
  { value: danceCount, label: "Dances", suffix: "" },
  { value: macCount, label: "Make A Change Shows", suffix: "+" },
];

function StatItem({ value, label, suffix, isActive }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isActive, value]);

  return (
    <div style={{ textAlign: "center", padding: "1.5rem 2rem" }}>
      <div
        style={{
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: "bold",
          color: "var(--red)",
          lineHeight: 1,
          fontFamily: "var(--font-display)",
        }}
      >
        {display}{suffix}
      </div>
      <div
        style={{
          fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
          color: "var(--dark)",
          marginTop: "0.6rem",
          fontWeight: "700",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          opacity: 0.7,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function StatCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} style={{ padding: "4rem 2rem", background: "var(--cream)" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            style={{ flex: "1 1 180px", minWidth: "140px" }}
          >
            <StatItem {...stat} isActive={isInView} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
