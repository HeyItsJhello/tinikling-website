import { useRef, useEffect, useState } from "react";
import Reveal from "../common/reveal";
import DanceCard from "./DanceCard";

export default function DancesGrid({ dances, title }) {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const arrowRefs = useRef([]);
  const arrowStates = useRef([]); // Track whether each arrow is flipped
  const [isReady, setIsReady] = useState(false);

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
      // Use setTimeout to ensure DOM is painted
      setTimeout(() => {
        initialCard.scrollIntoView({
          behavior: "smooth",
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

  useEffect(() => {
    if (!isReady) return;
    
    const container = scrollRef.current;
    if (!container) return;

    const onScroll = () => {
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

    onScroll(); // initial state
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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

      <h1>{title}</h1>

      <div
        ref={scrollRef}
        className="dances-scroll"
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
          overflowY: "hidden",
          gap: "5rem",
          marginTop: "3rem",
          paddingInline: "40%",
          paddingTop: "1.5rem",
          paddingBottom: "3rem",
          boxSizing: "border-box",
        }}
      >
        {dances.map((dance, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{ position: "relative", zIndex: 10}}
          >
            <DanceCard dance={dance} />
            {index < dances.length - 1 && (
              <button
                ref={(el) => (arrowRefs.current[index] = el)}
                onClick={() => handleArrowClick(index)}
                className="scroll-arrow"
                style={{
                  position: "absolute",
                  right: "-3rem",
                  top: "15rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1.5rem",
                  transition: "transform 0.3s ease"
                }}
              >
                →
              </button>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .scroll-arrow.flipped {
          transform: scaleX(-1) !important;
        }
      `}</style>
    </section>
  );
}