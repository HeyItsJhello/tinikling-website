import { motion } from "framer-motion";
import { blogs } from "../../data/blogs";

export default function Developer() {
  return (
    <main
      style={{
        paddingTop: "0rem",
        background: "var(--cream)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem"
      }}
    >
      {/* Developer Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: "center",
          padding: "3rem",
          backgroundColor: "white",
          borderRadius: "1rem",
          border: "3px solid var(--red)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          maxWidth: "40rem",
          width: "100%"
        }}
      >
        <h1 style={{ 
          fontSize: "3rem", 
          color: "var(--red)", 
          marginBottom: "1.5rem",
          fontWeight: "bold"
        }}>
          Developer
        </h1>
        <div style={{ marginBottom: "2rem" }}>
          {/* Portrait Image */}
          <div style={{ marginBottom: "1.5rem" }}>
            <img
              src="/src/assets/developer/jhelson.png"
              alt="Jhelson Gonzales"
              style={{
                width: "15rem",
                height: "15rem",
                borderRadius: "3rem",
                objectFit: "cover",
                border: "3px solid var(--gold)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
              }}
            />
          </div>
          <h2 style={{ fontSize: "2rem", color: "var(--dark)", marginBottom: "1rem" }}>
            Website Created By
          </h2>
          <p style={{ fontSize: "1.5rem", color: "var(--gold)", fontWeight: "bold" }}>
            Jhelson Gonzales
          </p>
        </div>
        <p style={{ 
          fontSize: "1.2rem", 
          lineHeight: "1.8", 
          color: "var(--dark)",
          marginBottom: "1.5rem"
        }}>
          Thank you for visiting the Franklin High School Tinikling Dance Company website. 
          This site was designed and developed with care to showcase our performances, 
          events, and Filipino cultural heritage.
        </p>
        <p style={{
          fontSize: "1.2rem",
          lineHeight: "1.8",
          color: "var(--dark)",
          marginBottom: "1.5rem"
        }}>
          Developer Commment: Why would you even check the very bottom right corner of the footer? How did you find me?
        </p>
        <div style={{ 
          borderTop: "2px solid var(--gold)", 
          paddingTop: "1.5rem",
          marginTop: "1.5rem"
        }}>
          <p style={{ fontSize: "1rem", color: "var(--dark)", opacity: 0.7 }}>
            Built with React & Framer Motion
          </p>
        </div>
      </motion.div>

      {/* Blog Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          marginTop: "3rem",
          maxWidth: "60rem",
          width: "100%"
        }}
      >
        <h2 style={{
          fontSize: "2.5rem",
          color: "var(--red)",
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight: "bold"
        }}>
          Developer Blog
        </h2>

        <div style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"
        }}>
          {blogs.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              style={{
                backgroundColor: "white",
                borderRadius: "1rem",
                border: "2px solid var(--gold)",
                padding: "2rem",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <h3 style={{
                fontSize: "1.5rem",
                color: "var(--red)",
                marginBottom: "0.5rem",
                fontWeight: "bold"
              }}>
                {post.title}
              </h3>
              <p style={{
                fontSize: "0.9rem",
                color: "var(--gold)",
                marginBottom: "1rem",
                fontWeight: "600"
              }}>
                {post.date}
              </p>
              <p style={{
                fontSize: "1rem",
                color: "var(--dark)",
                lineHeight: "1.6"
              }}>
                {post.content}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </main>
  );
}