import React from "react";
import { motion } from "framer-motion";
import Reveal from "../common/reveal";

export default function BecomeMember({ setActiveSection }) {
  return (
    <main
      style={{
        background: "var(--cream)",
        minHeight: "100vh",
        width: "100%",
        paddingTop: "8rem"
      }}
    >
      {/* How do I join Section */}
      <section
        style={{
          padding: "5rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <Reveal>
          <h1 style={{
            fontSize: "4rem",
            textAlign: "center",
            marginBottom: "3rem",
            color: "var(--red)"
          }}>
            Become a Member!
          </h1>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            fontSize: "1.2rem",
            lineHeight: "1.8"
          }}>
            {/* How do I join TDC */}
            <div>
              <h2 style={{
                fontSize: "2.5rem",
                color: "var(--blue)",
                marginBottom: "1.5rem"
              }}>
                How do I join TDC?
              </h2>

              <h3 style={{
                fontSize: "2rem",
                color: "var(--dark)",
                marginBottom: "1rem",
                marginTop: "2rem"
              }}>
                Come visit our meetings!
              </h3>
              <p style={{
                textAlign: "center",
                padding: "0 2rem"
              }}>
                Our meetings are for Franklin High School members only and are held at least once a month on Fridays in Mr. Alovera's room HG7. In our meetings, we learn about different Filipino traditions, current events, and dances through workshops. We often have practices for our performances every day throughout the school year, giving each member an opportunity to perform alongside us.
              </p>

              <h3 style={{
                fontSize: "2rem",
                color: "var(--dark)",
                marginBottom: "1rem",
                marginTop: "2rem"
              }}>
                Stay connected with us!
              </h3>
              <p style={{
                textAlign: "center",
                padding: "0 2rem"
              }}>
                Join our GroupMe if you're interested in learning about new information!
                Follow TDC's Instagram (@fhs_tdc) and our other social media! We send updates and reminders about different events and performance opportunities throughout all our social media.
              </p>
            </div>

            {/* Contact Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "2rem"
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
                Contact Us / Social Media
              </motion.button>
            </div>

            {/* Placeholder for picture */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2rem"
            }}>
              <div style={{
                width: "100%",
                maxWidth: "800px",
                height: "400px",
                backgroundColor: "var(--gold)",
                borderRadius: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--dark)",
                fontSize: "1.5rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
              }}>
                <img 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    borderRadius: "1rem",
                    objectPosition: ""
                  }}
                  src="src/assets/involvement/JOINUP.png" 
                  alt="Event Photo" 
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQs Section */}
      <Reveal>
        <section style={{
          padding: "3rem 2rem 5rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          <h2 style={{
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "2rem",
            color: "var(--blue)"
          }}>
            FAQs
          </h2>
          <p style={{
            fontSize: "1.2rem",
            textAlign: "center",
            color: "var(--dark)",
            lineHeight: "1.8"
          }}>
            {/* FAQ content can be added here */}
            <ul style={{
              listStyleType: "none",
              padding: "0",
              margin: "0"
            }}>
              <li>
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem"
                }}>
                  Do I have to be Filipino?
                </h3>
                <p style={{
                  fontSize: "1.2rem",
                  marginBottom: "2rem"
                }}>
                  You do NOT have to be Filipino to learn and spread Filipino culture. Many of our members are not Filipino and still stay in the club to perform. We highly invite anyone and everyone to share their own cultures while learning a bit about ours.
                </p>
              </li>
              <li>
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem"
                }}>
                  Is it too late to join?
                </h3>
                <p style={{
                  fontSize: "1.2rem",
                  marginBottom: "2rem"
                }}>
                  Nope! Never. We open dance sign ups to anyone throughout the whole school year starting from October until April! Each month has their own dances to learn and we always try to get new members to perform with our club!
                </p>
              </li>
              <li>
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem"
                }}>
                  Do I have to perform?
                </h3>
                <p style={{
                  fontSize: "1.2rem",
                  marginBottom: "2rem"
                }}>
                  Although we highly recommend it, members do not have to perform if they are too busy or simply don't want to. Members can join the club and attend our meetings, hangouts, and other events to learn more about Filipino culture and even learn dances through workshops.
                </p>
              </li>
              <li>
                <h3 style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem"
                }}>
                  What do I gain from joining the club?
                </h3>
                <p style={{
                  fontSize: "1.2rem",
                  marginBottom: "2rem"
                }}>
                  Members can gain a new family and while learning Filipino culture. We actively participate in many events in the region and at Franklin!
                </p>
                <li>
                  <h3>
                    For the 2025-2026 school year, here's what we're doing!
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, color: "var(--red)" }}>
                    <li>Back to School Rally</li>
                    <li>Club Rush</li>
                    <li>Homecoming Parade</li>
                    <li>Tinikling Workshops & Practices</li>
                    <li>Bobba Fundraiser</li>
                    <li>Performance at Sari Sari Night Market</li>
                    <li>Multicultural Rally</li>
                    <li>EGUSD Interclub Fundraiser</li>
                    <li>EGUSD Interclub Workshops and Hangout</li>
                    <li>Parol Making</li>
                    <li>Food Fair</li>
                    <li>Poly Night</li>
                    <li>Make A Change Night</li>
                    <li>Debuts</li>
                    <li>Traditional Dance Workshops</li>
                    <li>Holiday Hangouts</li>
                  </ul>
                </li>
              <li>
                <h2>Still have questions?</h2>
                <p><strong>Contact us at <a href="mailto:frhstinikling@gmail.com" style={{color: "var(--blue)"}}>frhstinikling@gmail.com</a></strong></p>
              </li>
              </li>
            </ul>
          </p>
        </section>
      </Reveal>
    </main>
  );
}
