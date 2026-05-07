import { useRef, useEffect, useState } from "react";
import Reveal from "../common/reveal";
import DanceCard from "./DanceCard";

export default function DancesGrid({ dances, title, setActiveSection }) {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const arrowRefs = useRef([]);
  const arrowStates = useRef([]); // Track whether each arrow is flipped
  const [isReady, setIsReady] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [openModalIndex, setOpenModalIndex] = useState(null);

  useEffect(() => {
    // Wait for DOM to be fully ready
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    
    const container = scrollRef.current;
    if (!container) return;

    const initialCardIndex = Math.floor(0);
    const initialCard = cardRefs.current[initialCardIndex];
    if (initialCard) {
      setTimeout(() => {
        initialCard.scrollIntoView({
          behavior: "instant",
          inline: "center",
          block: "nearest"
        });
      }, 100);
    }
  }, [isReady]);

  const scrollToCard = (index) => {
    const el = cardRefs.current[index];
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  };

  const handleArrowClick = (index) => {
    // If flipped, go back; otherwise go forward
    const targetIndex = arrowStates.current[index] ? index : index + 1;
    scrollToCard(targetIndex);
  };

  // Snap to nearest card after scrollbar drag (CSS snap doesn't fire on thumb drag)
  useEffect(() => {
    if (!isReady) return;
    const container = scrollRef.current;
    if (!container) return;

    let timer = null;
    let isSnapping = false;

    const onScroll = () => {
      if (isSnapping) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        const cx = container.getBoundingClientRect().left + container.clientWidth / 2;
        let nearest = 0, minDist = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const dist = Math.abs(card.getBoundingClientRect().left + card.offsetWidth / 2 - cx);
          if (dist < minDist) { minDist = dist; nearest = i; }
        });
        isSnapping = true;
        cardRefs.current[nearest]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        setTimeout(() => { isSnapping = false; }, 600);
      }, 80);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => { container.removeEventListener("scroll", onScroll); clearTimeout(timer); };
  }, [isReady]);

  useEffect(() => {
    if (!isReady) return;

    const container = scrollRef.current;
    if (!container) return;

    const updateArrows = () => {
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const arrow = arrowRefs.current[index];

        if (!arrow) return;

        // Only flip if the card center has significantly passed the container center
        const threshold = cardRect.width / 4;

        if (cardCenterX < centerX - threshold) {
          arrow.classList.add("flipped");
          arrowStates.current[index] = true;
        } else {
          arrow.classList.remove("flipped");
          arrowStates.current[index] = false;
        }
      });
    };

    updateArrows(); // initial state
    container.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      container.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [isReady]);

  return (
    <section
      style={{
        backgroundColor: "var(--cream)",
        borderRadius: "0.5rem",
        opacity: isReady ? 1 : 0,
        transition: "opacity 0.3s ease"
      }}
    >

      <div style={{ textAlign: "center", padding: "2rem 2rem 0" }}>
        <h1 style={{ marginBottom: "0.5rem" }}>{title}</h1>
        <p style={{
          fontSize: "clamp(0.9rem, 2vw, 1rem)",
          color: "var(--dark)",
          opacity: 0.6,
          fontFamily: "var(--font-body)",
          margin: "0 auto",
          maxWidth: "36rem",
        }}>
          Scroll to explore the dances we perform — click any card to learn more.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="dances-scroll"
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
          overflowY: "hidden",
          gap: "clamp(2rem, 5vw, 5rem)",
          marginTop: "3rem",
          paddingInline: "max(calc(50% - 11rem), 5%)",
          paddingTop: "1.5rem",
          paddingBottom: "3rem",
          boxSizing: "border-box",
          scrollSnapType: "x mandatory",
        }}
      >
        {dances.map((dance, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ position: "relative", zIndex: hoveredIndex === index || openModalIndex === index ? 30 : 10, flexShrink: 0, scrollSnapAlign: "center" }}
          >
            <DanceCard
              dance={dance}
              isActive={hoveredIndex === index || openModalIndex === index}
              isAnyHovered={hoveredIndex !== null || openModalIndex !== null}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onModalOpen={() => setOpenModalIndex(index)}
              onModalClose={() => setOpenModalIndex(null)}
              setActiveSection={setActiveSection}
            />
            {index < dances.length - 1 && (
              <button
                ref={(el) => (arrowRefs.current[index] = el)}
                onClick={() => handleArrowClick(index)}
                className="scroll-arrow"
                style={{
                  position: "absolute",
                  left: "calc(100% + clamp(2rem, 5vw, 5rem) / 2)",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "transparent",
                  border: "2px solid var(--red)",
                  borderRadius: "50%",
                  width: "2.5rem",
                  height: "2.5rem",
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  color: "var(--red)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  zIndex: 20,
                  transition: "transform 0.3s ease, background 0.15s, color 0.15s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--red)"; e.currentTarget.style.color = "white"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--red)"; }}
              >
                →
              </button>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .scroll-arrow.flipped {
          transform: translate(-50%, -50%) scaleX(-1) !important;
        }
      `}</style>
    </section>
  );
}