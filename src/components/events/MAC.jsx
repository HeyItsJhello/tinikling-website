import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MakeAChange({ setActiveSection }) {
  const [daysUntil, setDaysUntil] = useState(0);

    useEffect(() => {
            const calculateDays = () => {
            const eventDate = new Date("2026-04-17T00:00:00-07:00"); // Pacific Time (PDT)
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
          padding: "5rem",
          marginTop: "10rem",
          textAlign: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          marginBottom: "3rem"
        }}
      >
        <h1 style={{color: "var(--cream)"}}>{daysUntil} Days Until Make A Change</h1>
      </div>

      {/* Content Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "3rem"
        }}
      >
        {/* Left - Image */}
        <section
          style={{
            flex: "40rem",
            minWidth: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem"
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              width: "100%",
              maxWidth: "75rem",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "5rem",
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
            minWidth: "350px",
            padding: "2rem",
            marginRight: "5rem"
          }}
        >
          <h1
            style={{
              fontSize: "4em",
              color: "var(--red)",
              marginBottom: "1.5rem",
              fontWeight: "bold"
            }}
          >
            MAKE A CHANGE
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              color: "var(--dark)",
              textAlign: "center"
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
          paddingBottom: "2rem"
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
            fontSize: "1.5rem",
            fontWeight: "bold",
            padding: "1rem 3rem",
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