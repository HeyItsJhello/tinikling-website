import React from "react";
import { motion } from "framer-motion";
import aboutUsHERO from "/assets/AboutUsHERO.png";
import Reveal from "../common/reveal";

export default function AboutUs({ setActiveSection }) {
  // Placeholder data for special thanks - you can customize these
  const specialThanks = [
    {
      name: "Celi Corpuz",
      description: "Celi Corpuz is a University of California, Davis graduate and is a part of NCPASA, Mga Kapatid, and Kabataan Alliance. Celi has been helping us learn new traditional dances and has helped us with numerous fundraisers since 2023.",
      quote: "",
      photo: "/assets/Special/Celi.png", // Replace with actual photo path
      photo2: "/assets/special/CeliGroup.png", // Replace with actual photo path
    },
    {
      name: "Mathew Post",
      description: "Our previous TDC president, August Post, had a grandfather to handmake and donate our Sayaw Sa Bangko performance benches in 2022 to pay tribute to the passion and culture of this club. Mathew Post was a woodcarver for over 60 years and was such a big fan of all the work the club has been doing. He passed away at the beginning of 2025. We thank him for helping the Tinikling Dance Club to continue performing and sharing the culture of Sayaw Sa Bangko after so many years.",
      quote: "to my amazing officers that i've been priveleged to work alongside with, to the members both new and returning that i've been honored to lead, to my second home and found family: thank you. it's been a wonderful four years, and an honor to be your president <3",
      photo: "/assets/special/MATHEW.png", // Replace with actual photo path
      photo2: "/assets/special/MATHEWBUILD.png", // Replace with actual photo path
    }
  ];

  return (
    <main
      style={{
        background: "var(--cream)",
        minHeight: "100vh",
        overflow: "hidden",
        width: "100%"
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          height: "50vh",
          overflowX: "hidden",
          width: "100%",
          margin: 0,
          padding: 0,
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.3)"
        }}
      >
        {/* Background image layer */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${aboutUsHERO})`,
            backgroundSize: "cover",
            backgroundPosition: "center 50%",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(43, 43, 43, 0.8)"
          }}
        />

        {/* Gradient transition to cream background */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "30%",
            background: "linear-gradient(to bottom, transparent, rgba(139, 115, 85, 0.4), rgba(139, 115, 85, 0.7))",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "var(--cream)"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 style={{ fontSize: "3.5rem", margin: "0 0 1rem 0", fontStyle: "italic" }}>
              Our mission is to share the beauty of Filipino culture through our dance
            </h1>
            <p style={{ fontSize: "1.5rem", margin: 0 }}>
              - Tinikling Dance Club 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Content Section */}
      <Reveal>
        <section
          style={{
            padding: "5rem 2rem",
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          <h1 style={{
            fontSize: "4rem",
            textAlign: "center",
            marginBottom: "3rem",
            color: "var(--red)"
          }}>
            About Us
          </h1>

          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            textAlign: "center",
            padding: "0 3rem"
          }}>
            <p>
              Franklin's Tinikling Dance Club (TDC) is a student led cultural dance group that specializes in traditional Philippine Folk Dance. Establish in 2008, our club continues to share the beauty of Filipino culture through dance. We take on various performance opportunities, hoping to honor Philippine tradition through our fuilfilling and energizing dances.
            </p>
            <p>
              Towards the end of our school year, we host our annual{" "}
              <span
                onClick={() => setActiveSection('events')}
                style={{
                  color: "var(--blue)",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
              >
                Make A Change
              </span>. All of the proceeds from our event are donated to a charity of our choice with the intnet of aiding those in need. During our event our members showcase the many dances they have worked on throughout the school year.
            </p>
            <p>
              Our intricate choreography showcases the culturally diverse population of the Philippines. To keep our traditions alive, we perform these{" "}
              <span
                onClick={() => setActiveSection('dances')}
                style={{
                  color: "var(--blue)",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
              >
                dances
              </span>{" "}
              with great attention to detail. Originative from the regions of Luzon, Visaya, and Mindanao, each region has developed difference dances that reflect their cultures and values.
            </p>
            <p>
              We also host numerous{" "}
              <span
                onClick={() => setActiveSection('events')}
                style={{
                  color: "var(--blue)",
                  fontWeight: "bold",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
              >
                social events
              </span>{" "}
              and hold regular meetings and workshops for our members at Franklin High School. Our goal is to give our members a sense of community by spreading Filipino culture through performance in the Elk Grove and Sacramento region.
            </p>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              marginTop: "4rem",
              flexWrap: "wrap"
            }}
          >
            <motion.button
              onClick={() => setActiveSection('becomemember')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--dark)",
                font: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: "bold",
                padding: "1.2rem 2.5rem",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease"
              }}
            >
              How do I join
            </motion.button>

            <motion.button
              onClick={() => setActiveSection('officerpositions')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--dark)",
                font: "var(--font-display)",
                fontSize: "1.3rem",
                fontWeight: "bold",
                padding: "1.2rem 2.5rem",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease"
              }}
            >
              Applying for Officer / Positions
            </motion.button>
          </div>
        </section>
      </Reveal>

      {/* Affiliations and Special Thanks Bar */}
      <Reveal>
        <div
          style={{
            width: "100%",
            backgroundColor: "var(--red)",
            padding: "4rem 2rem",
            marginTop: "3rem",
            color: "var(--cream)"
          }}
        >
          <div
            style={{
              maxWidth: "1400px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "4rem"
            }}
          >
            {/* Affiliations Section */}
            <div style={{ flex: "1 1 300px", textAlign: "center" }}>
              <h2 style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
                color: "var(--gold)"
              }}>
                Affiliations
              </h2>
              <div style={{ fontSize: "1.5rem", lineHeight: "2" }}>
                <p style={{ margin: "0.5rem 0", color: "var(--gold)" }}>NCPASA</p>
                <p style={{ margin: "0.5rem 0", color: "var(--gold)" }}>Kabataan Alliance</p>
              </div>
            </div>

            {/* Special Thanks Section */}
            <div style={{ flex: "1 1 300px", textAlign: "center" }}>
              <h2 style={{
                fontSize: "2.5rem",
                marginBottom: "1.5rem",
                color: "var(--gold)"
              }}>
                Founded
              </h2>
              <div style={{ fontSize: "1.3rem", lineHeight: "2"}}>
                <p style={{ margin: "0.5rem 0", color: "var(--gold)" }}>2008 Aug</p>
                <p style={{ margin: "0.5rem 0", color: "var(--gold)" }}>Edith Montemayor</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Special Thanks Cards */}
      <Reveal>
        <section
          style={{
            padding: "5rem 2rem",
            maxWidth: "1400px",
            margin: "0 auto"
          }}
        >
          <h1 style={{
            fontSize: "3rem",
            textAlign: "center",
            marginBottom: "3rem",
            color: "var(--blue)"
          }}>
            Special Recognition
          </h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              padding: "0 2rem",
              maxWidth: "1000px",
              margin: "0 auto"
            }}
          >
            {specialThanks.map((person, index) => {
              const [isFlipped, setIsFlipped] = React.useState(false);
              const [photo1Error, setPhoto1Error] = React.useState(false);
              const [photo2Error, setPhoto2Error] = React.useState(false);

              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.3s ease",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "2rem",
                    padding: "2rem"
                  }}
                >
                  <div style={{ flex: "1", padding: "1rem" }}>
                    <h1 style={{
                      fontSize: "2.5rem",
                      marginBottom: "1rem",
                      color: "var(--blue)"
                    }}>
                      {person.name}
                    </h1>
                    <p style={{
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      color: "var(--dark)"
                    }}>
                      {person.description}
                    </p>

                  </div>
                  <div
                    onMouseEnter={() => setIsFlipped(true)}
                    onMouseLeave={() => setIsFlipped(false)}
                    style={{
                      position: "relative",
                      width: "20rem",
                      height: "20rem",
                      flexShrink: 0,
                      perspective: "1000px",
                      cursor: "pointer"
                    }}
                  >
                    {/* First photo - front */}
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        borderRadius: "0.5rem",
                        border: "0.5rem solid white",
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: photo1Error ? "var(--gold)" : "transparent"
                      }}
                    >

                        <img
                          src={person.photo}
                          alt={person.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                          onError={() => setPhoto1Error(true)}
                        />
                      
                    </motion.div>

                    {/* Second photo - back */}
                    <motion.div
                      animate={{ rotateY: isFlipped ? 0 : -180 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        backfaceVisibility: "hidden",
                        borderRadius: "0.5rem",
                        border: "0.5rem solid white",
                        overflow: "hidden",
                        transform: "rotateY(180deg)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: photo2Error ? "var(--gold)" : "transparent"
                      }}
                    >
                        <img
                          src={person.photo2}
                          alt={person.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover"
                          }}
                          onError={() => setPhoto2Error(true)}
                        />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </Reveal>

      {/* Get Involved Button */}
      <Reveal>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "3rem 2rem 5rem 2rem",
            gap: "1rem"
          }}
        >
          <h3 style={{
            fontSize: "1.8rem",
            color: "var(--dark)",
            margin: 0
          }}>
            Want to help?
          </h3>
          <motion.button
            onClick={() => setActiveSection('gettinginvolved')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "var(--red)",
              color: "var(--cream)",
              font: "var(--font-display)",
              fontSize: "2rem",
              fontWeight: "bold",
              padding: "1.5rem 4rem",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease"
            }}
          >
            Get Involved
          </motion.button>
        </div>
      </Reveal>
    </main>
  );
}
