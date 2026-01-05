import React from "react";
import { motion } from "framer-motion";
import Reveal from "../common/reveal";

export default function SocialEvents({ setActiveSection }) {
  return (
    <main
      style={{
        background: "var(--cream)",
        minHeight: "100vh",
        width: "100%",
        paddingTop: "8rem"
      }}
    >
      {/* Header */}
      <section
        style={{
          padding: "3rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <Reveal>
          <h1 style={{
            fontSize: "4rem",
            textAlign: "center",
            marginBottom: "2rem",
            color: "var(--red)"
          }}>
            Social Events
          </h1>
        </Reveal>
      </section>

      {/* What are Social Events? */}
      <section
        style={{
          padding: "2rem 2rem 4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        <Reveal>
          <h2 style={{
            fontSize: "2.5rem",
            color: "var(--blue)",
            marginBottom: "1.5rem",
            textAlign: "center"
          }}>
            What are Social Events?
          </h2>
          <p style={{
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "var(--dark)",
            textAlign: "center",
            padding: "0 2rem"
          }}>
            TDC host various social events throughout the year. These events are great ways to meet other TDC members and members of other Filipino clubs throughout Elk Grove. Our officers and event coordinator work hard to organize events with other EGUSD clubs, including Franklin's Filipino-American Honors Society, Cosumnes Oaks's Tinikling Dance Club, Monterey Trail's Filipino Club, Sheldon High School's Filipino Pamayanan Club, Laguna Creek's Bayanihan Club, Florin's Kapit Bisig Club, and Pleasant Grove's Filipino-American Youth Association. We also work alongside our school's Poly, Haka, Pasifika United, and Red Cross.
          </p>
        </Reveal>
      </section>

      {/* Some of our events! */}
      <section
        style={{
          padding: "2rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <Reveal>
          <h2 style={{
            fontSize: "3rem",
            color: "var(--red)",
            marginBottom: "3rem",
            textAlign: "center"
          }}>
            Some of our events!
          </h2>

          {/* Kapit Bisig Interclub Fundraiser & Karaoke Night */}
          <div style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            marginBottom: "3rem"
          }}>
            {/* Picture */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem"
            }}>
              <div style={{
                width: "100%",
                maxWidth: "50rem",
                height: "25rem",
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
                  src="src/assets/events/NONMAC/2025KAPIT.png" 
                  alt="Event Photo" 
                />
              </div>
            </div>

            <h3 style={{
              fontSize: "2rem",
              color: "var(--blue)",
              marginBottom: "1rem",
              textAlign: "center"
            }}>
              Kapit Bisig Interclub Fundraiser & Karaoke Night
            </h3>
            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "var(--dark)",
              textAlign: "center"
            }}>
              On December 5th, TDC met with Franklin's FAHS, Monterey Trail's Filipino Club, and Sheldon's Filipino Pamayanan Club to raise funds for those impacted by the typhoons that had just his the Philippines. Celi, a guest speaker from Kabataan Alliance came to inform members of how to create an impact in their community!
            </p>
          </div>

          {/* Divider */}
          <div style={{
            width: "80%",
            height: "2px",
            backgroundColor: "var(--gold)",
            margin: "3rem auto"
          }} />

          {/* TDC Hangouts */}
          <div style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            marginBottom: "3rem"
          }}>
            {/* Picture */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem"
            }}>
              <div style={{
                width: "100%",
                maxWidth: "50rem",
                height: "25rem",
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
                    objectPosition: "center 35%"
                  }}
                  src="src/assets/events/SOCIAL/THANKSGIVING.png" 
                  alt="Event Photo" 
                />
              </div>
            </div>

            <h3 style={{
              fontSize: "2rem",
              color: "var(--blue)",
              marginBottom: "1rem",
              textAlign: "center"
            }}>
              TDC Hangouts
            </h3>
            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "var(--dark)",
              textAlign: "center",
              marginBottom: "-1rem"
            }}>
              Tinikling Dance Club has a Thanksgiving, Winter, Spring, and Summer Hangout, 
              
            </p>

            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "var(--dark)",
              textAlign: "center",
              marginBottom: "2rem"
            }}>
              filled with food, games, karaoke, and fire alarm!
            </p>
            {/* Additional Picture */}
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <div style={{
                width: "100%",
                maxWidth: "50rem",
                height: "25rem",
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
                    objectPosition: "center "
                  }}
                  src="src/assets/events/SOCIAL/WINTER.png" 
                  alt="Event Photo" 
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            width: "80%",
            height: "2px",
            backgroundColor: "var(--gold)",
            margin: "3rem auto"
          }} />

          {/* And more! */}
          <div style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "1rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            marginBottom: "3rem"
          }}>
            {/* Picture */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem"
            }}>
              <div style={{
                width: "100%",
                maxWidth: "50rem",
                height: "25rem",
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
                    objectPosition: "center 35%"
                  }}
                  src="src/assets/events/SOCIAL/ABOVEANDMORE.png" 
                  alt="Event Photo" 
                />

              </div>
            </div>

            <h3 style={{
              fontSize: "2rem",
              color: "var(--blue)",
              marginBottom: "1rem",
              textAlign: "center"
            }}>
              And more!
            </h3>
            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "var(--dark)",
              textAlign: "center",
              marginBottom: "-1rem"
            }}>
              We have many other events throughout the year. Be on the lookout for
            </p>
            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "var(--dark)",
              textAlign: "center",
              marginBottom: "2rem"
            }}>
              announcements at our general meetings!
            </p>
            {/* Two pictures side by side */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "center"
            }}>
              <img
                src="src/assets/events/SOCIAL/BELOWLEFTANDMORE.png"
                alt="Event Photo"
                style={{
                  flex: "1 1 20rem",
                  minWidth: "20rem",
                  maxWidth: "25rem",
                  height: "20rem",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                }}
              />
              <img
                src="src/assets/events/SOCIAL/BELOWRIGHTANDMORE.png"
                alt="Event Video"
                style={{
                  flex: "1 1 20rem",
                  minWidth: "20rem",
                  maxWidth: "25rem",
                  height: "20rem",
                  objectFit: "cover",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)"
                }}
              />
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
