import React from "react";
import Reveal from "../common/reveal";

export default function GettingInvolved({ setActiveSection }) {
  return (
    <main
      style={{
        background: "var(--cream)",
        minHeight: "100vh",
        width: "100%",
        paddingTop: "8rem"
      }}
    >
      {/* Getting Involved Section */}
      <section
        style={{
          padding: "5rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto"
        }}
      >
        <Reveal>
          <h1 style={{
            fontSize: "4rem",
            textAlign: "center",
            marginBottom: "4rem",
            color: "var(--red)"
          }}>
            Getting Involved
          </h1>

          {/* Kabataan Alliance - Description on left, image on right */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "3rem",
            marginBottom: "5rem"
          }}>
            <div style={{
              flex: "1 1 400px",
              minWidth: "300px"
            }}>
              <h2 style={{
                fontSize: "2.5rem",
                color: "var(--blue)",
                marginBottom: "1.5rem"
              }}>
                <a href="https://www.kabataanalliance.com/" style={{ color: "var(--blue)", textDecoration: "underline"}}>
                  Kabataan Alliance
                </a>
              </h2>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "var(--dark)",
                textAlign: "center"
              }}>
                {/* Placeholder text - replace with actual description */}
                The Kabataan Alliance is a national alliance of more than 50 Filipino youth and student organizations dedicated to serving our communities in the U.S. and back home in the Philippines.  With the mission to build national unity among Filipino youth across the United States to advocate for the rights and welfare of Filipinos in the US, the Philippines, and around the world, Kabataan Alliance unites and empowers Filipino youth across the U.S. to engage in community organizing and advocacy to build towards a just society where people can reach their full potentials.
              </p>
            </div>
            <div style={{
              flex: "1 1 25rem",
              minWidth: "30rem",
              display: "flex",
              justifyContent: "center"
            }}>
              <div style={{
                width: "100%",
                maxWidth: "40rem",
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
                  src="src/assets/involvement/KABATAAN.png" 
                  alt="Event Photo" 
                />
              </div>
            </div>
          </div>

          {/* Migrants- Full width paragraph */}
          <div style={{
            marginBottom: "5rem",
            padding: "0 2rem"
          }}>
            <h2 style={{
              fontSize: "2.5rem",
              color: "var(--blue)",
              marginBottom: "1.5rem",
              textAlign: "center"
            }}>
              Defend Migrants Campaign
            </h2>
            <p style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              color: "var(--dark)",
              textAlign: "center",
              maxWidth: "65rem",
              margin: "0 auto"
            }}>
              {/* Placeholder text - replace with actual description */}
               As Filipino youth, many of our families have migrated to the states for a better livelihood due to lack of employment in the Philippines. Filipinos have been in the U.S. for decades to find jobs abroad and oftentimes petition their own families to reunite. Trump's announcement for deportation leaves feelings of uncertainty and fear for Filipino youth under the DACA (Deferred Action for Childhood Arrivals) Program. Recently, U.S. Philippine Ambassador, Jose Manual Romauldez, affirms Trump's mass deportation by instructing Filipinos to already "self-deport." Advising for undocumented Filipinos to self-deport says that he is willing to abandon the many Filipinos in times of anxiety and stress. The results of this election is a call for Filipino youth to raise our concerns and advocate for the rights and welfare of Filipinos. Learn more on how to help at tinyurl.com/kaba-DMC
            </p>
          </div>

          {/* Kapit Bisig
           - Image on left, description on right */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "3rem",
            marginBottom: "3rem"
          }}>
            <div style={{
              flex: "1 1 25rem",
              minWidth: "30rem",
              display: "flex",
              justifyContent: "center",
              order: window.innerWidth < 768 ? 2 : 1
            }}>
              <div style={{
                width: "100%",
                maxWidth: "40rem",
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
                  src="src/assets/involvement/KAPIT.png" 
                  alt="Event Photo" 
                />
              </div>
            </div>
            <div style={{
              flex: "1 1 40rem",
              minWidth: "30rem",
              order: window.innerWidth < 768 ? 1 : 2
            }}>
              <h2 style={{
                fontSize: "2.5rem",
                color: "var(--blue)",
                marginBottom: "1.5rem"
              }}>
                Kapit Bisig
              </h2>
              <p style={{
                fontSize: "1.2rem",
                lineHeight: "1.8",
                color: "var(--dark)",
                textAlign: "center"
              }}>
                {/* Placeholder text - replace with actual description */}
                Kabataan Alliance’s Kapit Bisig (“link arms” in Tagalog) Relief  Campaign brings together Filipino youth to fundraise for relief and rehabilitation in vulnerable communities that are impacted by super typhoons in the Philippines. We use education to understand why environmental disasters happen and the impacts it leaves on families. We partner with the National Alliance of Filipino Concerns (NAFCON), to course donations to the Consortium for People’s Development - Disaster Response (CPDDR) that are supporting and directly providing relief to those in need. 
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
