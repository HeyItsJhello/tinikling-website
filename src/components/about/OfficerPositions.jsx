import { motion } from "framer-motion";

function SectionDivider({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "3rem 0 2rem" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(218,160,109,0.5))" }} />
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)" }} />
        <span style={{
          fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--red)",
          fontFamily: "var(--font-display)", whiteSpace: "nowrap",
        }}>
          {label}
        </span>
        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--gold)" }} />
      </div>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(218,160,109,0.5))" }} />
    </div>
  );
}

function PastSection({ title, names }) {
  return (
    <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1.5px solid rgba(218,160,109,0.4)" }}>
      <span style={{
        display: "block", fontSize: "0.62rem", fontWeight: "800",
        letterSpacing: "0.18em", textTransform: "uppercase",
        textAlign: "center", marginBottom: "1rem",
        color: "var(--red)", fontFamily: "var(--font-display)",
      }}>
        {title}
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", justifyContent: "center" }}>
        {names.split(", ").map(name => (
          <span key={name} style={{
            padding: "0.28rem 0.8rem",
            background: "rgba(218,160,109,0.07)",
            border: "1.5px solid rgba(218,160,109,0.38)",
            borderRadius: "999px",
            fontSize: "0.82rem",
            color: "var(--dark)",
            fontFamily: "var(--font-body)",
          }}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function PositionCard({ title, description, children, pastTitle, pastNames }) {
  return (
    <div style={{
      background: "white", borderRadius: "1.25rem",
      boxShadow: "0 4px 20px rgba(218,160,109,0.15), 0 1px 4px rgba(0,0,0,0.06)",
      overflow: "hidden",
    }}>
      <div style={{ borderTop: "4px solid var(--red)", padding: "clamp(1.25rem, 3vw, 2rem)" }}>
        <h2 style={{
          fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
          textAlign: "center",
          marginBottom: "1rem", marginTop: 0,
        }}>
          {title}
        </h2>
        <p style={{
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          lineHeight: "1.8", color: "var(--dark)",
          textAlign: "center", margin: 0,
          fontFamily: "var(--font-body)",
        }}>
          {description}
        </p>
        {children}
        {pastTitle && pastNames && (
          <PastSection title={pastTitle} names={pastNames} />
        )}
      </div>
    </div>
  );
}

export default function OfficerPositions({ setActiveSection }) {
  return (
    <main style={{ background: "var(--cream)", minHeight: "100vh", paddingTop: "8rem" }}>

      {/* Header */}
      <section style={{ padding: "3rem 2rem 1.5rem", textAlign: "center", maxWidth: "780px", margin: "0 auto" }}>
        <h1>Officer Positions</h1>
        <p style={{
          fontSize: "clamp(0.95rem, 2vw, 1.05rem)", lineHeight: "1.8",
          color: "var(--dark)", opacity: 0.72, margin: "0.5rem auto 0",
          fontFamily: "var(--font-body)", maxWidth: "640px",
        }}>
          Officer applicants go through a lengthy process — submitting an essay, being interviewed, performing two choreographies, presenting a speech, and teaching a panel of judges basic moves. During the summer, officers are trained in leadership with advice from previous officers and hands-on workshops.
        </p>
      </section>

      <section style={{ maxWidth: "900px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem) 3rem" }}>

        <SectionDivider label="Executive Positions" />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <PositionCard
            title="President"
            description="Presidents run the club's and officer's meetings, coordinate events, organize fundraisers, and communicate with other clubs and the club advisor. With at least a year as an officer, presidents get everything done in a timely manner and lead the club whenever necessary."
            pastTitle="Past Presidents"
            pastNames="Kaleb Espinoza, Lynn Ly, Brielle Dam, Yumilka Wagas, August Post, Khrizza Manalastas, Adora Bosano, Arianna Herrera, Phoebe Bayudan-Soto, Christopher Viquiera, Donna Barron, Vanessa Alindogan, Jelaine Cunanan, Cedric Barron, Kevin Barron, Alexyia Bartholomew, Edith Montemayor"
          />
          <PositionCard
            title="VP"
            description="The Vice President helps the President whenever they are busy or overworked, acting as a secretary and keeping tabs of officer meetings. The Vice President is responsible and reliable and does just as much as the President."
            pastTitle="Past Vice Presidents"
            pastNames="Marlee Gerlach, Brielle Dam, Janna Madrinan, Ayanna Navarro, Khrizza Manalastas, Adora Bosano, Samantha Asilo, Jericho Mata, Jeanie Lee, Gensen Danipog, Rhian Advincula, Jelaine Cunanan, Roxanne Devera, Kevin Barron, Kathlyne Nikki Ducusin"
          />
          <PositionCard
            title="Assistant"
            description="Assistants help all other roles in areas they may need help with. While creating and performing choreography, the Assistant stays responsible and reliable and is always there to be leaned on in times of stress."
            pastTitle="Past Assistants"
            pastNames="Carmelia Hayamizu, Jerome Kekoa Cabrera, Yumilka Wagas, August Post, Ayanna Navarro, Khrizza Manalastas, Ari Herrera, Jaethan Lazardibal, Myles Flores, Gensen Danipog, Donna Barron, Nathalie Agustin, Ayah Lababedy, Tina Tran, Vanessa Alindogan, Melissa Blaine, Moniq Barron, Monica Montemayor, Janet Montemayor"
          />
        </div>

        <SectionDivider label="Specialized Roles" />

        {/* Advertising Officer */}
        <div style={{
          background: "white", borderRadius: "1.25rem",
          boxShadow: "0 4px 20px rgba(218,160,109,0.15), 0 1px 4px rgba(0,0,0,0.06)",
          borderTop: "4px solid var(--red)",
          overflow: "hidden",
          marginBottom: "1.5rem",
        }}>
          <div style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", textAlign: "center", marginBottom: "1rem", marginTop: 0 }}>
              Advertising Officer
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: "1.8", color: "var(--dark)", textAlign: "center", margin: "0 0 2rem", fontFamily: "var(--font-body)" }}>
              Advertising officers are in charge of all photography, videography, graphic design, show programs, programming, editing, and social media. Organizing media days and designing posts for Instagram, advertising officers are constantly busy producing content for the club.
            </p>

            {/* YouTube embed */}
            <div style={{ width: "100%", maxWidth: "720px", aspectRatio: "16/9", borderRadius: "0.75rem", overflow: "hidden", boxShadow: "0 4px 16px rgba(0,0,0,0.15)", margin: "0 auto 2rem" }}>
              <iframe
                width="100%" height="100%"
                src="https://www.youtube.com/embed/ss7psDB8V2o"
                title="Advertising Officer Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ display: "block" }}
              />
            </div>

            {/* Picture + Quote */}
            <div
              className="officer-card-content"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
                gap: "2rem", margin: "0 auto 2rem",
                paddingTop: "1.5rem",
                borderTop: "1.5px solid rgba(218,160,109,0.4)",
              }}
            >
              <div style={{ borderRadius: "1rem", overflow: "hidden", minHeight: "20rem" }}>
                <img
                  src="/assets/involvement/ADVERTISEMENT.png"
                  alt="Advertising Officer"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
              <blockquote style={{
                fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                fontStyle: "italic", color: "var(--dark)",
                textAlign: "center", margin: 0,
                padding: "clamp(1rem, 3vw, 1.75rem)",
                borderLeft: "4px solid var(--gold)",
                background: "rgba(218,160,109,0.06)", borderRadius: "0.5rem",
                display: "flex", alignItems: "center", justifyContent: "center",
                lineHeight: "1.8", fontFamily: "var(--font-body)",
              }}>
                "My name is Hannah Hufana and I was the advertising officer for 2023-2024. In high school, I was very timid and kept to myself. This position made me realize I could be a leader and helped hone my communication skills. If you told me I was helping teach groups of up to 30+ people to dance I would not have believed you! Supporting the club I loved in my own creative way was so fun and further built my portfolio for future creative work."
              </blockquote>
            </div>

            <PastSection
              title="Past Advertising Officers"
              names="Kaleb Espinoza, Quinn Manapat, Hannah Hufana, Jerome Kekoa Cabrera, Evan Chau, Hunter Vong, Keilin Tankiamco, Jericho Mata, Molly Barron, Venus Villadelgado, Roxanne Devera, Justin Vallesteros"
            />
          </div>
        </div>

        {/* Event Coordinator */}
        <div style={{
          background: "white", borderRadius: "1.25rem",
          boxShadow: "0 4px 20px rgba(218,160,109,0.15), 0 1px 4px rgba(0,0,0,0.06)",
          borderTop: "4px solid var(--red)",
          overflow: "hidden",
          marginBottom: "1.5rem",
        }}>
          <div style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", textAlign: "center", marginBottom: "1.5rem", marginTop: 0 }}>
              Event Coordinator
            </h2>
            <div
              className="officer-card-content"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
                alignItems: "center", gap: "2rem", marginBottom: "2rem",
              }}
            >
              <div>
                <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: "1.8", color: "var(--dark)", textAlign: "center", margin: "0 0 1.5rem", fontFamily: "var(--font-body)" }}>
                  Event coordinators organize, plan, and create events for the club, coordinating our annual Make A Change from day one while also contacting local shops for fundraisers and interclubs in the area. Without them, we wouldn't have so many of our events throughout the year!
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <motion.button
                    onClick={() => setActiveSection("socialevents")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      background: "var(--red)", color: "white",
                      border: "none", borderRadius: "0.55rem",
                      padding: "0.75rem 2rem",
                      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                      fontWeight: "700", fontFamily: "var(--font-display)",
                      cursor: "pointer", letterSpacing: "0.03em",
                      boxShadow: "0 4px 14px rgba(208,49,45,0.28)",
                    }}
                  >
                    View Social Events
                  </motion.button>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{
                  width: "100%", maxWidth: "380px", aspectRatio: "4/5",
                  borderRadius: "1rem", overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                }}>
                  <img
                    src="/assets/involvement/EVENTSCOORD.png"
                    alt="Event Coordinator"
                    style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                  />
                </div>
              </div>
            </div>

            <PastSection
              title="Past Event Coordinators"
              names="Marlee Gerlach, Maliyah Manalastas, Adora Bosano, Phoebe Bayudan-Soto, Jeanie Le, Rhian Advincula, Kathlyne Nikki Ducusin"
            />
          </div>
        </div>

        {/* Cultural Advisor */}
        <div style={{
          background: "white", borderRadius: "1.25rem",
          boxShadow: "0 4px 20px rgba(218,160,109,0.15), 0 1px 4px rgba(0,0,0,0.06)",
          borderTop: "4px solid var(--red)",
          overflow: "hidden",
          marginBottom: "1.5rem",
        }}>
          <div style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", textAlign: "center", marginBottom: "1rem", marginTop: 0 }}>
              Cultural Advisor
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: "1.8", color: "var(--dark)", textAlign: "center", margin: "0 0 2rem", fontFamily: "var(--font-body)" }}>
              Cultural advisors ensure cultural accuracy within all our traditional dance performances. TDC performs each dance with great attention to detail — proper costumes, dance etiquette, and adherence to each tradition. We stray away from modern interpretations to properly honor each dance's values and culture.
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
              <div style={{
                width: "100%", maxWidth: "380px", aspectRatio: "4/5",
                borderRadius: "1rem", overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              }}>
                <img
                  src="/assets/involvement/OFFICERS3.png"
                  alt="Cultural Advisor"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                />
              </div>
            </div>

            <PastSection
              title="Past Cultural Advisors"
              names="Caleb Pascua, Quinn Manapat, Carmelia Hayamizu, Maliyah Manalastas, Rylan Silvestre, Gamiel Ortigoza, Mylene Asuncion, Christopher Viquiera, Gensen Danipog, Jaeo Jubinal, Emmanuel Perez"
            />
          </div>
        </div>

        {/* Member Outreach */}
        <div style={{
          background: "white", borderRadius: "1.25rem",
          boxShadow: "0 4px 20px rgba(218,160,109,0.15), 0 1px 4px rgba(0,0,0,0.06)",
          borderTop: "4px solid var(--red)",
          overflow: "hidden",
          marginBottom: "3rem",
        }}>
          <div style={{ padding: "clamp(1.25rem, 3vw, 2rem)" }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", textAlign: "center", marginBottom: "1rem", marginTop: 0 }}>
              Member Outreach
            </h2>
            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.1rem)", lineHeight: "1.8", color: "var(--dark)", textAlign: "center", margin: "0 0 2rem", fontFamily: "var(--font-body)" }}>
              Member outreach officers — also known as our Titos, Titas, and Ninang — ensure a safe space for every member, always welcoming them with open arms. With a no-tolerance policy, the club stays inclusive and gets to know each member throughout the year through different families.
            </p>

            <PastSection
              title="Past Member Outreach"
              names="Caleb Pascua, Lynn Ly, Kai Tapiador, Hyacinth Cheung, Madon Lou-Dizon, Gabriel Asilo, Gamiel Ortigoza, Mylene Asuncion, Emily Xiong, Raven Stinson, Corey Chan, Norbert Nguyen"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
