import { useState } from "react";
import { motion } from "framer-motion";

export default function PerformanceInquiry() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyEvent: "",
    email: "",
    phone: "",
    month: "",
    day: "",
    year: "",
    time: "",
    address: "",
    danceType: [],
    description: "",
    questions: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDanceChange = (danceName) => {
    setFormData(prev => {
      const currentDances = prev.danceType;
      if (currentDances.includes(danceName)) {
        return {
          ...prev,
          danceType: currentDances.filter(d => d !== danceName)
        };
      } else {
        return {
          ...prev,
          danceType: [...currentDances, danceName]
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.danceType.length === 0) {
      alert("Please select at least one dance");
      return;
    }
    
    const subject = `Performance Inquiry - ${formData.companyEvent}`;
    const body = `
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Company/Event Name: ${formData.companyEvent}
Email: ${formData.email}
Phone: ${formData.phone}

Date & Time: ${formData.month}/${formData.day}/${formData.year} at ${formData.time}
Address: ${formData.address}

Dance Type Requested: ${formData.danceType.join(", ")}

Description of Requested Performance:
${formData.description}

Questions/Comments/Concerns:
${formData.questions}
    `;

    window.location.href = `mailto:frhstinikling@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "3rem 2rem",
        backgroundColor: "var(--cream)"
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          color: "var(--red)",
          marginBottom: "2rem",
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        Performance Inquiries
      </h1>

        <b
            style ={{
                color: "var(--red)",
                paddingBottom: "3rem"
            }}
        >We perform at Debuts and Community Events in the Elk Grove and Sacramento area</b>

        <br/>
      <form onSubmit={handleSubmit}
        style={{
            paddingTop: "2rem"
        }}
      >
        {/* Name Fields */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "600",
                color: "var(--dark)"
              }}
            >
              First Name *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "2px solid var(--gold)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                boxSizing: "border-box"
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "600",
                color: "var(--dark)"
              }}
            >
              Last Name *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "2px solid var(--gold)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                boxSizing: "border-box"
              }}
            />
          </div>
        </div>

        {/* Company/Event Name */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "600",
              color: "var(--dark)"
            }}
          >
            Company / Event Name *
          </label>
          <input
            type="text"
            name="companyEvent"
            value={formData.companyEvent}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "2px solid var(--gold)",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              boxSizing: "border-box"
            }}
          />
        </div>

        {/* Email and Phone */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "600",
                color: "var(--dark)"
              }}
            >
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "2px solid var(--gold)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                boxSizing: "border-box"
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "600",
                color: "var(--dark)"
              }}
            >
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.75rem",
                border: "2px solid var(--gold)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                boxSizing: "border-box"
              }}
            />
          </div>
        </div>

        {/* Date and Time Section */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "600",
              color: "var(--dark)"
            }}
          >
            Date and Time *
          </label>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            <input
              type="text"
              name="month"
              placeholder="MM"
              value={formData.month}
              onChange={handleChange}
              required
              maxLength="2"
              style={{
                width: "70px",
                padding: "0.75rem",
                border: "2px solid var(--gold)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                textAlign: "center"
              }}
            />
            <input
              type="text"
              name="day"
              placeholder="DD"
              value={formData.day}
              onChange={handleChange}
              required
              maxLength="2"
              style={{
                width: "70px",
                padding: "0.75rem",
                border: "2px solid var(--gold)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                textAlign: "center"
              }}
            />
            <input
              type="text"
              name="year"
              placeholder="YYYY"
              value={formData.year}
              onChange={handleChange}
              required
              maxLength="4"
              style={{
                width: "100px",
                padding: "0.75rem",
                border: "2px solid var(--gold)",
                borderRadius: "0.5rem",
                fontSize: "1rem",
                textAlign: "center"
              }}
            />
            <input
              type="text"
              name="time"
              placeholder="Time (e.g., 3:00 PM)"
              value={formData.time}
              onChange={handleChange}
              required
              style={{
                flex: 1,
                minWidth: "150px",
                padding: "0.75rem",
                border: "2px solid var(--gold)",
                borderRadius: "0.5rem",
                fontSize: "1rem"
              }}
            />
          </div>
        </div>

        {/* Address */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "600",
              color: "var(--dark)"
            }}
          >
            Address *
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "2px solid var(--gold)",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              boxSizing: "border-box"
            }}
          />
        </div>

        {/* Dance Type */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "1rem",
              fontWeight: "600",
              color: "var(--dark)"
            }}
          >
            What dance(s) are you looking to have performed? *
          </label>
          
          <div style={{ 
            border: "2px solid var(--gold)", 
            borderRadius: "0.5rem", 
            padding: "1rem",
            backgroundColor: "white"
          }}>
            {/* Tinikling */}
            <div style={{ marginBottom: "0.75rem" }}>
              <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={formData.danceType.includes("Tinikling")}
                  onChange={() => handleDanceChange("Tinikling")}
                  style={{ marginRight: "0.5rem", width: "18px", height: "18px", cursor: "pointer" }}
                />
                <span style={{ fontSize: "1rem", fontWeight: "600" }}>Tinikling</span>
              </label>
            </div>

            <hr style={{ margin: "0.75rem 0", border: "none", borderTop: "1px solid var(--gold)" }} />

            {/* Dances This Year */}
            <div style={{ marginBottom: "0.75rem" }}>
              {["Bulaklakan", "Cariñosa", "Kapag Apir", "Kini Kini", "Maglalatik", "Pangalay", "Sayaw Sa Bangko"].map(dance => (
                <label key={dance} style={{ display: "flex", alignItems: "center", cursor: "pointer", marginBottom: "0.5rem" }}>
                  <input
                    type="checkbox"
                    checked={formData.danceType.includes(dance)}
                    onChange={() => handleDanceChange(dance)}
                    style={{ marginRight: "0.5rem", width: "18px", height: "18px", cursor: "pointer" }}
                  />
                  <span style={{ fontSize: "1rem" }}>{dance}</span>
                </label>
              ))}
            </div>

            <hr style={{ margin: "0.75rem 0", border: "none", borderTop: "1px solid var(--gold)" }} />

            {/* Not Done This Year */}
            <div style={{ marginBottom: "0.75rem" }}>
              {["Binasuan", "Itik Itik", "Kappa Malong Malong", "Pandanggo Oasiwas", "Pandanggo Sa Ilaw"].map(dance => (
                <label key={dance} style={{ display: "flex", alignItems: "center", cursor: "pointer", marginBottom: "0.5rem" }}>
                  <input
                    type="checkbox"
                    checked={formData.danceType.includes(dance)}
                    onChange={() => handleDanceChange(dance)}
                    style={{ marginRight: "0.5rem", width: "18px", height: "18px", cursor: "pointer" }}
                  />
                  <span style={{ fontSize: "1rem", opacity: 0.8 }}>{dance}</span>
                </label>
              ))}
            </div>

            <hr style={{ margin: "0.75rem 0", border: "none", borderTop: "1px solid var(--gold)" }} />
          </div>
          
          {formData.danceType.length === 0 && (
            <div style={{ color: "red", fontSize: "0.9rem", marginTop: "0.5rem" }}>
              Please select at least one dance
            </div>
          )}
        </div>

        {/* Description */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "600",
              color: "var(--dark)"
            }}
          >
            Description of requested performance *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="5"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "2px solid var(--gold)",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              boxSizing: "border-box",
              fontFamily: "inherit",
              resize: "vertical"
            }}
          />
        </div>

        {/* Questions/Comments */}
        <div style={{ marginBottom: "2rem" }}>
          <label
            style={{
              display: "block",
              marginBottom: "0.5rem",
              fontWeight: "600",
              color: "var(--dark)"
            }}
          >
            Any questions, comments, or concerns?
          </label>
          <textarea
            name="questions"
            value={formData.questions}
            onChange={handleChange}
            rows="4"
            style={{
              width: "100%",
              padding: "0.75rem",
              border: "2px solid var(--gold)",
              borderRadius: "0.5rem",
              fontSize: "1rem",
              boxSizing: "border-box",
              fontFamily: "inherit",
              resize: "vertical"
            }}
          />
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: "center" }}>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
                fontFamily:"font-display",
              backgroundColor: "var(--red)",
              color: "white",
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
            Send
          </motion.button>
        </div>
      </form>
    </section>
  );
}