import { motion } from "framer-motion";
import { pastOfficersData, pastOfficersYears } from "../../data/members";

export default function PastOfficers() {
  return (
    <section style={{ marginTop: "4rem" }}>
      <h1 style={{ 
        fontSize: "3rem", 
        color: "var(--red)", 
        textAlign: "center",
        marginBottom: "3rem"
      }}>
        Past Officers
      </h1>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(18.75rem, 1fr))",
          gap: "2rem",
          padding: "0 2rem"
        }}
      >
        {pastOfficersYears.map((year, index) => {
          const yearData = pastOfficersData[year];
          // Convert year format from "2023-2024" to "23-24"
          const shortYear = year.split("-").map(y => y.slice(2)).join("-");
          const imagePath = `/assets/officers/groupphotos/${shortYear}Officers.png`;
          
          return (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "white",
                padding: "2rem",
                border: "0.125rem solid var(--gold)",
                borderRadius: "0.5rem",
                boxShadow: "0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)"
              }}
            >
              {/* Year Header */}
              <h2
                style={{
                  fontSize: "1.5rem",
                  color: "var(--red)",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "1.5rem",
                  borderBottom: "0.125rem solid var(--gold)",
                  paddingBottom: "0.5rem"
                }}
              >
                {year}
              </h2>

              {/* Officers Photo */}
              <div
                style={{
                  width: "100%",
                  height: "12.5rem",
                  backgroundColor: "var(--cream)",
                  borderRadius: "0.5rem",
                  marginBottom: "1.5rem",
                  overflow: "hidden"
                }}
              >
                <img
                  src={imagePath}
                  alt={`${year} Officers`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.display = 'flex';
                    e.target.parentElement.style.alignItems = 'center';
                    e.target.parentElement.style.justifyContent = 'center';
                    e.target.parentElement.innerHTML = '<span style="color: var(--dark); font-size: 0.9rem; font-style: italic;">Officers Photo</span>';
                  }}
                />
              </div>

              {/* Officers List */}
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    color: "var(--dark)",
                    fontWeight: "bold",
                    marginBottom: "1rem"
                  }}
                >
                  Officers:
                </h3>
                <ul
                  style={{
                    listStyle: "disc",
                    paddingLeft: "1.5rem",
                    color: "var(--dark)"
                  }}
                >
                  {Object.entries(yearData).map(([role, name], idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: "0.5rem",
                        lineHeight: "1.6"
                      }}
                    >
                      <strong style={{ color: "var(--red)" }}>{role}:</strong> {name}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}