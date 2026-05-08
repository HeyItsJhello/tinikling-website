import { useState, useEffect } from "react";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import Hero from "../components/hero/hero";
import EventsGrid from "../components/events/EventsGrid";
import DancesGrid from "../components/dances/DancesGrid";
import OfficersGrid from "../components/officers/OfficersGrid";
import MakeAChange from "../components/events/MAC"
import Reveal from "../components/common/reveal";
import Developer from "../components/developer/Developer";
import PerformanceInquiry from "../components/business/performanceinquiries";
import AboutUs from "../components/about/AboutUs";
import BecomeMember from "../components/about/BecomeMember";
import GettingInvolved from "../components/about/GettingInvolved";
import OfficerPositions from "../components/about/OfficerPositions";
import SocialEvents from "../components/events/SocialEvents";
import { dances } from "../data/dances";
import { learnConfig } from "../data/learn";
import LearnPage from "../components/learn/LearnPage";
import { motion, AnimatePresence } from "framer-motion";
export default function Home() {
  const [activeSection, setActiveSection] = useState('welcome');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Ensure component is fully mounted
    setMounted(true);
  }, []);

  useEffect(() => {
    // Scroll to top whenever section changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [activeSection]);

  if (!mounted) {
    return null; // Or a loading spinner
  }

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4 }}
          style={{ minHeight: '100vh', width: '100%' }}
        >
          {activeSection === 'welcome' && (
            <>
              <Hero />
              <main
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: "100%",
                  marginTop: "50vh",
                  background: "var(--cream)",
                  paddingBottom: "5rem"
                }}
              >
                {/* Gradient transition from hero */}
                <div
                  style={{
                    position: "absolute",
                    top: "-2rem",
                    left: 0,
                    width: "100%",
                    height: "2rem",
                    background: "linear-gradient(to bottom, transparent, var(--cream))",
                    zIndex: 9
                  }}
                />

                {/* Section label */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "3rem clamp(2rem, 6vw, 5rem) 0",
                }}>
                  <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
                  <span style={{
                    fontSize: "0.6rem",
                    fontWeight: "800",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--red)",
                    fontFamily: "var(--font-display)",
                    whiteSpace: "nowrap",
                  }}>
                    Franklin High School · Est. 2008
                  </span>
                  <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
                </div>


                {/* Who are we + collage */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(1rem, 3vw, 2rem)",
                    width: "100%",
                    padding: "0 clamp(1rem, 4vw, 4rem)",
                    boxSizing: "border-box",
                  }}
                >
                  <section
                    style={{
                      flex: "2 1 5%",
                      minWidth: "min(100%, 35rem)",
                      padding: "clamp(1rem, 3vw, 2rem)",
                      boxSizing: "border-box",
                      textAlign: "center"
                    }}
                  >
                    <Reveal>
                      <h1 style={{ textAlign: "center" }}>Who are we?</h1>
                      <p style={{
                        width: "100%",
                        lineHeight: "1.8",
                        textAlign: "center",
                        fontSize: "clamp(1rem, 2vw, 1.15rem)",
                        margin: "0 auto",
                        maxWidth: "42rem",
                        color: "var(--dark)",
                        opacity: 0.85,
                      }}>
                        Franklin High School's Tinikling Dance Company is a cultural dance group that specializes in traditional Philippine Folk Dance. Established in 2008, our club continues to share the beauty of Filipino culture through our dance. We take on various performance opportunities, hoping to honor Philippine tradition through our fulfilling and energizing dances. Towards the end of our school year, we host our annual Make A Change that gives all of its proceeds to charities that directly help Filipino communities in crisis.
                      </p>
                      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <motion.button
                          onClick={() => setActiveSection("about")}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          style={{
                            background: "var(--red)",
                            color: "white",
                            border: "none",
                            borderRadius: "0.55rem",
                            padding: "0.7rem 1.75rem",
                            fontSize: "0.9rem",
                            fontWeight: "700",
                            fontFamily: "var(--font-display)",
                            cursor: "pointer",
                            letterSpacing: "0.03em",
                            boxShadow: "0 4px 14px rgba(208,49,45,0.25)",
                          }}
                        >
                          About Us →
                        </motion.button>
                        <motion.button
                          onClick={() => setActiveSection("dances")}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          style={{
                            background: "transparent",
                            color: "var(--red)",
                            border: "2px solid var(--red)",
                            borderRadius: "0.55rem",
                            padding: "0.7rem 1.75rem",
                            fontSize: "0.9rem",
                            fontWeight: "700",
                            fontFamily: "var(--font-display)",
                            cursor: "pointer",
                            letterSpacing: "0.03em",
                          }}
                        >
                          Our Dances
                        </motion.button>
                      </div>
                    </Reveal>
                  </section>

                  <section
                    style={{
                      flex: "1.5 1 400px",
                      minWidth: "min(100%, 350px)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "clamp(0.5rem, 2vw, 1rem)",
                      boxSizing: "border-box"
                    }}
                  >
                    <Reveal>
                      <div style={{ width: "100%", maxWidth: "900px", aspectRatio: "4/3" }}>
                        <img
                          src={"/assets/dances/collage/Tinikling-Collage.png"}
                          className="collage"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      </div>
                    </Reveal>
                  </section>
                </div>

                {/* Make A Change */}
                <MakeAChange setActiveSection={setActiveSection} />
              </main>
            </>
          )}

          {activeSection === 'about' && (
            <AboutUs setActiveSection={setActiveSection} />
          )}

          {activeSection === 'events' && (
            <main
              style={{
                paddingTop: "8rem",
                background: "var(--cream)",
                minHeight: "100vh"
              }}
            >
              <Reveal>
                <EventsGrid />
              </Reveal>
            </main>
          )}

          {activeSection === 'dances' && (
            <main
              style={{
                paddingTop: "0rem",
                background: "var(--cream)",
                minHeight: "100vh",
                width: "100%"
              }}
            >
              <Reveal>
                {mounted && <DancesGrid key={`dances-${activeSection}`} title="Our Dances" dances={dances} setActiveSection={setActiveSection} />}
              </Reveal>
            </main>
          )}

          {activeSection === 'officers' && (
            <main
              style={{
                paddingTop: "8rem",
                background: "var(--cream)",
                minHeight: "100vh"
              }}
            >
              <Reveal>
                <OfficersGrid />
              </Reveal>
            </main>
          )}

          {activeSection === 'contact' && (
            <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
              {/* Header */}
              <div style={{
                padding: "clamp(6rem, 10vw, 8rem) 2rem 2.5rem",
                textAlign: "center",
                maxWidth: "600px",
                margin: "0 auto",
              }}>
                <h1>Contact Us</h1>
                <p style={{
                  fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                  lineHeight: "1.75",
                  color: "var(--dark)",
                  opacity: 0.75,
                  margin: "1rem auto 1.25rem",
                }}>
                  TDC performs at debuts and community events across the Elk Grove and Sacramento region.
                  Reach us directly or fill out the inquiry form below.
                </p>
                <a
                  href="mailto:frhstinikling@gmail.com"
                  style={{
                    display: "inline-block",
                    color: "var(--blue)",
                    fontWeight: "700",
                    textDecoration: "none",
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    marginBottom: "1.75rem",
                  }}
                >
                  frhstinikling@gmail.com
                </a>
                <div style={{ display: "flex", justifyContent: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                  {[
                    { href: "https://www.instagram.com/fhs_tdc/", label: "Instagram" },
                    { href: "https://www.youtube.com/@TiniklingDanceCompany", label: "YouTube" },
                    { href: "https://www.facebook.com/frhstinikling/", label: "Facebook" },
                  ].map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: "0.45rem 1.1rem",
                        border: "2px solid var(--red)",
                        borderRadius: "999px",
                        color: "var(--red)",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--red)"; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--red)"; }}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <PerformanceInquiry />
            </main>
          )}
          {activeSection === 'learn' && learnConfig.enabled && (
            <main style={{ paddingTop: "8rem", background: "var(--cream)", minHeight: "100vh" }}>
              <LearnPage />
            </main>
          )}

          {activeSection === 'developer' && (
                <Developer />
            )}

          {activeSection === 'becomemember' && (
            <BecomeMember setActiveSection={setActiveSection} />
          )}

          {activeSection === 'gettinginvolved' && (
            <GettingInvolved setActiveSection={setActiveSection} />
          )}

          {activeSection === 'officerpositions' && (
            <OfficerPositions setActiveSection={setActiveSection} />
          )}

          {activeSection === 'socialevents' && (
            <SocialEvents setActiveSection={setActiveSection} />
          )}
        </motion.div>
      </AnimatePresence>

      <Footer setActiveSection={setActiveSection} />

    </>
  );
}