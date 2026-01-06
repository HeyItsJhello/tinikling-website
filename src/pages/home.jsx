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
                <br />
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "clamp(1rem, 3vw, 2rem)",
                    width: "100%"
                  }}
                >
                  <section
                    style={{
                      flex: "2 1 5%",
                      minWidth: "min(100%, 35rem)",
                      padding: "clamp(1rem, 3vw, 2rem)",
                      margin: "0 auto",
                      marginLeft: "clamp(0rem, 5vw, 5rem)",
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
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        margin: "0 auto",
                        maxWidth: "100%"
                      }}>
                        Franklin High School's Tinikling Dance Company is a cultural dance group that specializes in traditional Philippine Folk Dance. Established in 2008, our club continues to share the beauty of Filipino culture through our dance. We take on various performance opportunities, hoping to honor Philippine tradition through our fulfilling and energizing dances. Towards the end of our school year, we host our annual Make A Change that that gives all of its proceeds to charities that directly help Filipino communities in crisis.
                      </p>
                    </Reveal>
                  </section>

                  <section
                    style={{
                      flex: "1.5 1 400px",
                      minWidth: "min(100%, 350px)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "clamp(0.5rem, 2vw, 0.5rem)",
                      boxSizing: "border-box"
                    }}
                  >
                    <Reveal>
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <div className="collage-container" style={{
                          width: "100%",
                          maxWidth: "900px",
                          aspectRatio: "4/3",
                          position: "relative"
                        }}>
                          <img
                            src={"/assets/dances/collage/Tinikling-Collage.png"}
                            className="collage"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "contain"
                            }}
                          />
                        </div>
                      </motion.div>

                    </Reveal>
                  </section>
                <MakeAChange setActiveSection={setActiveSection} />
                </div>
                
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
                {mounted && <DancesGrid key={`dances-${activeSection}`} title="Our Dances" dances={dances} />}
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
            <main
              style={{
                paddingTop: "0rem",
                background: "var(--cream)",
                minHeight: "100vh",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Reveal>
              <div
                style={{
                  paddingTop: "clamp(8rem, 20vw, 15rem)",
                  paddingBottom: "0rem"
                }}
              >
                  <h1>Contact Us</h1>
                  <div
                    style={{
                      marginLeft: "clamp(1rem, 10vw, 20rem)",
                      marginRight: "clamp(1rem, 10vw, 20rem)",
                      marginBottom: "2rem"
                    }}
                  >
                    <h2
                      style={{
                        width: "100%",
                        lineHeight: "1.8",
                        textAlign: "center",
                        fontSize: "clamp(1rem, 3vw, 2rem)"
                      }}
                    >
                      Tinikling Dance Company performs at many community events and debuts in the Elk Grove and Sacramento region. If you're interested in having our club perform Tinikling or any other traditional Filipino dance listed below, contact us on our email, send us a DM, or fill out the inquiry below.
                    </h2>
                  </div>
                  <h2 style={{
                    fontSize: "clamp(1rem, 2.5vw, 2rem)",
                    textAlign: "center",
                    padding: "0 1rem"
                  }}>Email us at{" "}
                    <a
                      href="mailto:frhstinikling@gmail.com"
                      style={{
                        color: "var(--blue)",
                        textDecoration: "none",
                        wordBreak: "break-word"
                      }}
                    >
                      frhstinikling@gmail.com
                    </a>
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "clamp(1rem, 3vw, 2rem)",
                      marginTop: "3rem",
                      marginBottom: "4rem",
                      flexWrap: "wrap"
                    }}
                  >
                    <a
                      href="https://www.instagram.com/fhs_tdc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      style={{
                        transition: "transform 0.3s ease",
                        display: "flex"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                      <svg width="clamp(40px, 10vw, 60px)" height="clamp(40px, 10vw, 60px)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="var(--blue)"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/@TiniklingDanceCompany"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      style={{
                        transition: "transform 0.3s ease",
                        display: "flex"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                      <svg width="clamp(40px, 10vw, 60px)" height="clamp(40px, 10vw, 60px)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="var(--blue)"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/frhstinikling/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      style={{
                        transition: "transform 0.3s ease",
                        display: "flex"
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                      <svg width="clamp(40px, 10vw, 60px)" height="clamp(40px, 10vw, 60px)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="var(--blue)"/>
                      </svg>
                    </a>
                  </div>

              </div>


                <PerformanceInquiry />
              </Reveal>
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