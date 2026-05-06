import { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: "3px", zIndex: 99999,
      background: "rgba(218,160,109,0.18)",
      pointerEvents: "none",
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "linear-gradient(to right, var(--red), var(--gold))",
        borderRadius: "0 2px 2px 0",
        transition: "width 0.08s linear",
        boxShadow: "0 0 6px rgba(208,49,45,0.4)",
      }} />
    </div>
  );
}
