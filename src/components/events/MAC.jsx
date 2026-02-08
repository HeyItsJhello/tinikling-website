import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MakeAChange({ setActiveSection }) {
  const [daysUntil, setDaysUntil] = useState(0);

    useEffect(() => {
            const calculateDays = () => {
            const eventDate = new Date("2026-04-16T17:30:00-08:00"); // 5:30 PM Pacific Standard Time (PST)
            const today = new Date();
            const timeDiff = eventDate - today;
            const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            setDaysUntil(days);
        };

        calculateDays();
        const interval = setInterval(calculateDays, 1000 * 60 * 60); // Update every hour

        return () => clearInterval(interval);
    }, []);

  return (
    <>
      {/* Countdown Bar - Full Width */}
      <div
        style={{
          width: "100%",
          backgroundColor: "var(--red)",
          padding: "clamp(3rem, 9vw, 7rem) clamp(2rem, 4vw, 3rem)",
          marginTop: "clamp(3rem, 8vw, 6rem)",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "3rem",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1 style={{color: "var(--cream)", fontSize: "clamp(2.5rem, 7vw, 7rem)", margin: 0, lineHeight: 1.2}}>{daysUntil} Days Until Make A Change</h1>
      </div>

      {/* Content Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(1rem, 2vw, 0.5rem)",
          width: "100%",
          boxSizing: "border-box"
        }}
      >
        {/* Left - Image */}
        <section
          style={{
            flex: "40rem",
            minWidth: "min(100%, 350px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "clamp(1rem, 2vw, 1.5rem)",
            marginLeft: "clamp(0rem, 4vw, 4rem)",
            marginRight: "clamp(0rem, 4vw, 4rem)",
            boxSizing: "border-box"
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              width: "100%",
              maxWidth: "75rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "2rem"
            }}
          >
            {/* Placeholder - replace with your image */}
            <img
              src="/assets/hero.jpeg"
              alt="Make A Change Event"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "2rem"
              }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = '<div style="font-size: 1.5rem; color: var(--dark);">Image Placeholder</div>';
              }}
            />
          </motion.div>
        </section>

        {/* Right - Content */}
        <section
          style={{
            flex: "1.5 1 30rem",
            minWidth: "min(100%, 350px)",
            padding: "clamp(1rem, 2vw, 1.5rem)",
            marginRight: "clamp(0rem, 4vw, 4rem)",
            marginLeft: "clamp(0rem, 4vw, 4rem)",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 4em)",
              color: "var(--red)",
              marginBottom: "1.5rem",
              fontWeight: "bold",
              textAlign: "center",
              width: "100%"
            }}
          >
            MAKE A CHANGE
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
              lineHeight: "1.8",
              color: "var(--dark)",
              textAlign: "center",
              width: "100%",
              maxWidth: "100%"
            }}
          >
            Make A Change is an annual event at the end of the school year, showcasing various Filipino Dances learned within Franklin High School's Tinkling Dance Club. Tinikling Dance Club puts on an elaborate production consisting of high to low energy dances and even guest performances of different cultures. In partnership with Kabataan Alliance and NCPASA, we find charities that directly help those in the Philippines and Filipino-American communities. All of Make A Change's proceeds go to charity.
          </p>
        </section>
      </div>

      {/* Contact Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "3rem",
          paddingBottom: "2rem",
          padding: "0 1rem"
        }}
      >
        <motion.button
          onClick={() => setActiveSection('contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: "var(--red)",
            color: "var(--cream)",
            font: "var(--font-display)",
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            fontWeight: "bold",
            padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 3rem)",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease"
          }}
        >
          Performance Inquiries
        </motion.button>
      </div>
    </>
  );
}