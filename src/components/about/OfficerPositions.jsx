import React from "react";
import { motion } from "framer-motion";
import Reveal from "../common/reveal";

export default function OfficerPositions({ setActiveSection }) {
  return (
    <main
      style={{
        background: "var(--cream)",
        minHeight: "100vh",
        width: "100%",
        paddingTop: "8rem",
      }}
    >
      {/* Header */}
      <section
        style={{
          padding: "3rem 2rem",
          maxWidth: "100%",
          margin: "0 auto",
          marginBottom: "-5rem",
        }}
      >
        <Reveal>
          <h1
            style={{
              fontSize: "4rem",
              textAlign: "center",
              marginBottom: "2rem",
              color: "var(--red)",
            }}
          >
            Officer Positions
          </h1>
        </Reveal>
      </section>

      <div
        style={{
          marginRight: "clamp(1rem, 10vw, 7rem)",
          marginLeft: "clamp(1rem, 10vw, 7rem)",
          marginBottom: "3rem",
        }}
      >
        <Reveal>
          <h2
            style={{
              color: "var(--dark)",
              textAlign: "center",
              fontSize: "clamp(1rem, 2.5vw, 2rem)"
            }}
          >
            As a dance company, TDC has officer applicants go through a lengthy
            process of submitting an essay, being interviewed, performing two
            choreographies, presenting a speech, and teaching a panel of judges
            basic moves to become an officer. During the summer, officers are
            trained into their leadership skills with advice from previous
            officers, properly learning basics from each dance in several
            leadership workshops.
          </h2>
        </Reveal>
      </div>
      {/* Executive Positions - President, VP, Assistant */}
      <section
        style={{
          padding: "clamp(1rem, 3vw, 2rem)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              marginBottom: "3rem",
            }}
          >
            {/* President */}
            <div
              style={{
                backgroundColor: "white",
                padding: "clamp(1rem, 3vw, 2rem)",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  color: "var(--blue)",
                  marginBottom: "1rem",
                  textAlign: "center"
                }}
              >
                President
              </h2>
              <p
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.2rem)",
                  lineHeight: "1.8",
                  color: "var(--dark)",
                  textAlign: "center"
                }}
              >
                Presidents runs the club's and officer's meetings, coordinating
                events, running and organizing fundraisers, and communicating
                with other clubs and our club advisor. With at least a year as
                an officer, presidents get everything done in a timely manner
                and lead the club whenever necessary.
              </p>
              <div
                style={{
                  width: "80%",
                  height: "2px",
                  backgroundColor: "var(--gold)",
                  margin: "3rem auto",
                }}
              />
              <div
                style={{
                  marginTop: "2rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "2rem",
                    color: "var(--dark)",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  Past Presidents
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "var(--dark)",
                  }}
                >
                  Kaleb Espinoza, Lynn Ly, Brielle Dam, Yumilka Wagas, August
                  Post, Khrizza Manalastas, Adora Bosano, Arianna Herrera,
                </p>
                <p
                  style={{
                    marginTop: "-1rem",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "var(--dark)",
                  }}
                >
                  Phoebe Bayudan-Soto, Christopher Viquiera, Donna Barron,
                  Vanessa Alindogan, Jelaine Cunanan, Cedric Barron, Kevin
                  Barron,
                </p>
                <p
                  style={{
                    marginTop: "-1rem",
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "var(--dark)",
                  }}
                >
                  Alexyia Bartholomew, Edith Montemayor
                </p>
              </div>
            </div>

            {/* VP */}
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "var(--blue)",
                  marginBottom: "1rem",
                }}
              >
                VP
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: "var(--dark)",
                  textAlign: "center",
                }}
              >
                The Vice President helps the President whenever they are busy or
                overworked, acting as a secretary and keeping tabs of officer
                meetings. The vice president is responsible and reliable and
                does just as much as the President.
              </p>
              <div
                style={{
                  width: "80%",
                  height: "2px",
                  backgroundColor: "var(--gold)",
                  margin: "3rem auto",
                }}
              />
              <div
                style={{
                  marginTop: "2rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "2rem",
                    color: "var(--dark)",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  Past Vice Presidents
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "var(--dark)",
                  }}
                >
                  Marlee Gerlach, Brielle Dam, Janna Madrinan, Ayanna Navarro,
                  Khrizza Manalastas, Adora Bosano, Samantha Asilo, Jericho
                  Mata, Jeanie Lee, Gensen Danipog, Rhian Advincula, Jelaine
                  Cunanan, Roxanne Devera, Kevin Barron, Kathlyne Nikki Ducusin,
                </p>
              </div>
            </div>

            {/* Assistant */}
            <div
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "var(--blue)",
                  marginBottom: "1rem",
                }}
              >
                Assistant
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: "var(--dark)",
                  textAlign: "center",
                }}
              >
                Assistants help all other roles in areas they may need help in.
                While creating and performing choreography, the assistant stays
                responsible and reliable and is always able to be leaned on in
                times of stress.
              </p>
              <div
                style={{
                  width: "80%",
                  height: "2px",
                  backgroundColor: "var(--gold)",
                  margin: "3rem auto",
                }}
              />
              <div
                style={{
                  marginTop: "2rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "2rem",
                    color: "var(--dark)",
                    marginBottom: "1rem",
                    textAlign: "center",
                  }}
                >
                  Past Assistants
                </h3>
                <p
                  style={{
                    fontSize: "1.1rem",
                    textAlign: "center",
                    color: "var(--dark)",
                  }}
                >
                  Carmelia Hayamizu, Jerome Kekoa Cabrera, Yumilka Wagas, August
                  Post, Ayanna Navarro, Khrizza Manalastas, Ari Herrera, Jaethan
                  Lazardibal, Myles Flores, Gensen Danipog, Donna Barron,
                  Nathalie Agustin, Ayah Lababedy, Tina Tran, Vanessa Alindogan,
                  Melissa Blaine, Moniq Barron, Monica Montemayor, Janet
                  Montemayor
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Divider */}
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "var(--gold)",
          margin: "3rem auto",
        }}
      />

      {/* Advertising Officer */}
      <section
        style={{
          padding: "2rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                color: "var(--blue)",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Advertising Officer
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "var(--dark)",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Advertising officers are in charge of all the photography,
              videography, graphic design, show programs, programming, editing,
              and social media of the club. Organizing media days and designing
              posts for Instagram, advertising officers are constantly busy
              producing content for the club. We can't wait to capture memories
              with you all this year!
            </p>

            {/* YouTube Video Embed */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "3rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "800px",
                  aspectRatio: "16/9",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ss7psDB8V2o "
                  title="Advertising Officer Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Divider between video and picture/quote */}
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "var(--gold)",
                margin: "2rem 0 3rem 0",
              }}
            />

            {/* Picture and Quote Side by Side - Same Height */}
            <div
              className="officer-card-content"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
                gap: "2rem",
                marginBottom: "2rem",
                maxWidth: "62.5rem",
                margin: "0 auto 2rem auto",
              }}
            >
              {/* Picture */}
              <div
                style={{
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "auto",
                    minHeight: "20rem",
                    backgroundColor: "var(--gold)",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--dark)",
                    fontSize: "1.5rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "1rem",
                    }}
                    src="/assets/involvement/ADVERTISEMENT.png"
                    alt="Event Photo"
                  />
                </div>
              </div>

              {/* Quote */}
              <div
                style={{
                  display: "flex",
                }}
              >
                <blockquote
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                    fontStyle: "italic",
                    color: "var(--dark)",
                    textAlign: "center",
                    margin: 0,
                    padding: "clamp(1rem, 3vw, 2rem)",
                    width: "100%",
                    borderLeft: "4px solid var(--blue)",
                    backgroundColor: "var(--cream)",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  "My name is Hannah Hufana and I was the advertising officer for  2023-2024. In high school, I was very timid and kept to myself. This position made me realize I could be a leader and helped hone my communication skills. If you told me I was helping teach groups of up to 30+ people to dance I would not have believed you! Supporting the club I loved in my own creative way was so fun and further built my portfolio for future creative work"
                </blockquote>
              </div>
            </div>

            {/* Past Advertising Officers */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "2px solid var(--gold)",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  color: "var(--dark)",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Past Advertising Officers
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  textAlign: "center",
                  color: "var(--dark)",
                }}
              >
                {/* Add past officers names/info here */}
                Kaleb Espinoza, Quinn Manapat, Hannah Hufana, Jerome Kekoa Cabrera,
                Evan Chau, Hunter Vong, Keilin Tankiamco, Jericho Mata, Molly
                Barron, Venus Villadelgado, Roxanne Devera, Justin Vallesteros
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Divider */}
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "var(--gold)",
          margin: "3rem auto",
        }}
      />

      {/* Event Coordinator */}
      <section
        style={{
          padding: "2rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                color: "var(--blue)",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Event Coordinator
            </h2>

            {/* Content with picture on right/below */}
            <div
              className="officer-card-content"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
                alignItems: "center",
                gap: "2rem",
                marginLeft: "clamp(0rem, 3vw, 3rem)",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                }}
              >
                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    lineHeight: "1.8",
                    color: "var(--dark)",
                    textAlign: "center",
                  }}
                >
                  Event coordinators organize, plan, and create events for the
                  club, coordinating our annual Make A Change from day one while
                  also contacting local shops for fundraisers and interclubs in
                  the area. Without them, we wouldn't have so many of our events
                  throughout the year!
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2rem",
                    marginBottom: "2rem",
                  }}
                >
                  <motion.button
                    onClick={() => setActiveSection("socialevents")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundColor: "var(--blue)",
                      color: "var(--cream)",
                      font: "var(--font-display)",
                      fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
                      fontWeight: "bold",
                      padding: "clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)",
                      border: "none",
                      borderRadius: "0.5rem",
                      cursor: "pointer",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    View Social Events
                  </motion.button>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    minHeight: "20rem",
                    aspectRatio: "4/5",
                    backgroundColor: "var(--gold)",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--dark)",
                    fontSize: "1.5rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "1rem",
                    }}
                    src="/assets/involvement/EVENTSCOORD.png"
                    alt="Event Photo"
                  />
                </div>
              </div>
            </div>

            {/* Button to social events */}

            {/* Past Event Coordinators */}
            <div
              style={{
                marginTop: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  color: "var(--dark)",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Past Event Coordinators
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  textAlign: "center",
                  color: "var(--dark)",
                }}
              >
                {/* Add past event coordinators info here */}
                Marlee Gerlach, Maliyah Manalastas,Adora Bosano, Phoebe
                Bayudan-Soto, Jeanie Le, Rhian Advincula, Kathlyne Nikki Ducusin
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Divider */}
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "var(--gold)",
          margin: "3rem auto",
        }}
      />

      {/* Cultural Advisor */}
      <section
        style={{
          padding: "2rem 2rem 5rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              marginBottom: "2rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "2.5rem",
                  color: "var(--blue)",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                Cultural Advisor
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "1.8",
                  color: "var(--dark)",
                  textAlign: "center",
                  marginBottom: "2rem",
                }}
              >
                Cultural advisors ensure cultural accuracy within all our
                tradition dance performances. Franklin's Tinikling Dance Club
                tries performing each dance with great attention to detail to keep
                these traditions alive with proper costumes and dance etiquette
                for each dance. To properly reflect each dance's values and
                culture, we stray away from modern interpretations of dances.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    minHeight: "20rem",
                    aspectRatio: "4/5",
                    backgroundColor: "var(--gold)",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--dark)",
                    fontSize: "1.5rem",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "1rem",
                    }}
                    src="/assets/involvement/OFFICERS3.png"
                    alt="Event Photo"
                  />
                </div>
              </div>
            </div>
            {/* Past Cultural Advisors */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "2px solid var(--gold)",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  color: "var(--dark)",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Past Cultural Advisors
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  textAlign: "center",
                  color: "var(--dark)",
                }}
              >
                {/* Add past cultural advisors info here */}
                Caleb Pascua, Quinn Manapat, Carmelia Hayamizu, Maliyah
                Manalastas, Rylan Silvestre, Gamiel Ortigoza, Mylene Asuncion,
                Christopher Viquiera, Gensen Danipog, Jaeo Jubinal, Emmanuel
                Perez
              </p>
            </div>
          </div>
        </Reveal>
      </section>
      {/* Divider */}
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "var(--gold)",
          margin: "3rem auto",
        }}
      />

      {/* Member Outreach */}
      <section
        style={{
          padding: "2rem 2rem 5rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Reveal>
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "1rem",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                color: "var(--blue)",
                marginBottom: "1.5rem",
                textAlign: "center",
              }}
            >
              Member Outreach
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "var(--dark)",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Member outreach officers, also known as our Titos, Titas, and
              Ninang, ensure a safe space for our members, always welcoming them
              with open arms! With a no tolerance policy, our club stays
              inclusive of all of its members, getting to know each one of them
              throughout the year in different families.
            </p>

            {/* Past Member Outreach */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "2px solid var(--gold)",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  color: "var(--dark)",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                Past Member Outreach
              </h3>
              <p
                style={{
                  fontSize: "1.1rem",
                  textAlign: "center",
                  color: "var(--dark)",
                }}
              >
                {/* Add past member outreach info here */}
                Caleb Pascua, Lynn Ly, Kai Tapiador, Hyacinth Cheung, Madon
                Lou-Dizon, Gabriel Asilo Gamiel Ortigoza, Mylene Asuncion, Emily
                Xiong, Raven Stinson, Corey Chan, Norbert Nguyen,
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
