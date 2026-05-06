import { useState } from "react";
import { motion } from "framer-motion";

const CURRENT_DANCES = [
  "Tinikling", "Bulaklakan", "Cariñosa", "Kapag Apir",
  "Kini Kini", "Maglalatik", "Pangalay", "Sayaw Sa Bangko",
];

const OTHER_DANCES = [
  "Binasuan", "Itik Itik", "Kappa Malong Malong",
  "Pandanggo Oasiwas", "Pandanggo Sa Ilaw",
];

function SectionLabel({ children }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "1.75rem 0 1.25rem" }}>
      <span style={{
        fontSize: "0.68rem", fontWeight: "800", letterSpacing: "0.14em",
        textTransform: "uppercase", color: "var(--red)",
        fontFamily: "var(--font-display)", whiteSpace: "nowrap",
      }}>
        {children}
      </span>
      <div style={{ flex: 1, height: "1px", background: "rgba(218,160,109,0.4)" }} />
    </div>
  );
}

function Field({ label, required, children }) {
  return (
    <div style={{ marginBottom: "1.1rem" }}>
      <label style={{
        display: "block", marginBottom: "0.35rem",
        fontWeight: "600", color: "var(--dark)", fontSize: "0.85rem",
      }}>
        {label}
        {required && <span style={{ color: "var(--red)", marginLeft: "3px" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function Input(props) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{
        width: "100%", padding: "0.65rem 0.85rem",
        border: `1.5px solid ${focused ? "var(--red)" : "rgba(218,160,109,0.55)"}`,
        borderRadius: "0.5rem", fontSize: "0.92rem",
        boxSizing: "border-box", fontFamily: "inherit",
        background: "white", color: "var(--dark)", outline: "none",
        boxShadow: focused ? "0 0 0 3px rgba(208,49,45,0.1)" : "none",
        transition: "border-color 0.18s, box-shadow 0.18s",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function Textarea(props) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...props}
      style={{
        width: "100%", padding: "0.65rem 0.85rem",
        border: `1.5px solid ${focused ? "var(--red)" : "rgba(218,160,109,0.55)"}`,
        borderRadius: "0.5rem", fontSize: "0.92rem",
        boxSizing: "border-box", fontFamily: "inherit",
        background: "white", color: "var(--dark)", outline: "none",
        resize: "vertical",
        boxShadow: focused ? "0 0 0 3px rgba(208,49,45,0.1)" : "none",
        transition: "border-color 0.18s, box-shadow 0.18s",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

function DancePill({ dance, selected, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      style={{
        padding: "0.38rem 0.9rem",
        border: `1.5px solid ${selected ? "var(--red)" : "rgba(218,160,109,0.5)"}`,
        borderRadius: "999px",
        backgroundColor: selected ? "var(--red)" : "white",
        color: selected ? "white" : "var(--dark)",
        fontSize: "0.83rem",
        fontWeight: selected ? "600" : "400",
        cursor: "pointer",
        transition: "all 0.15s ease",
        fontFamily: "var(--font-body)",
      }}
    >
      {dance}
    </button>
  );
}

export default function PerformanceInquiry() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "",
    email: "", phone: "",
    companyEvent: "",
    date: "", time: "",
    address: "",
    danceType: [],
    description: "", questions: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleDanceChange = (dance) => {
    setFormData((prev) => ({
      ...prev,
      danceType: prev.danceType.includes(dance)
        ? prev.danceType.filter((d) => d !== dance)
        : [...prev.danceType, dance],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.danceType.length === 0) {
      alert("Please select at least one dance");
      return;
    }
    const subject = `Performance Inquiry - ${formData.companyEvent}`;
    const body = `First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Company/Event Name: ${formData.companyEvent}
Email: ${formData.email}
Phone: ${formData.phone}

Date & Time: ${formData.date} at ${formData.time}
Address: ${formData.address}

Dance Type Requested: ${formData.danceType.join(", ")}

Description of Requested Performance:
${formData.description}

Questions/Comments/Concerns:
${formData.questions}`;

    window.location.href = `mailto:frhstinikling@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section style={{
      maxWidth: "780px", margin: "0 auto",
      padding: "0 clamp(1rem, 4vw, 2rem) 5rem",
      boxSizing: "border-box",
    }}>
      <div style={{
        background: "white", borderRadius: "1.25rem",
        boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}>
        {/* Card header */}
        <div style={{ background: "var(--red)", padding: "1.6rem 2rem" }}>
          <h2 style={{
            color: "white", margin: 0,
            fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
            fontFamily: "var(--font-display)",
          }}>
            Performance Inquiry
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.78)", margin: "0.3rem 0 0",
            fontSize: "0.88rem", fontFamily: "var(--font-body)",
          }}>
            We perform at debuts and community events in Elk Grove &amp; Sacramento
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: "0.5rem 2rem 2rem" }}>

          <SectionLabel>Your Information</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "1rem" }}>
            <Field label="First Name" required>
              <Input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </Field>
            <Field label="Last Name" required>
              <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </Field>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "1rem" }}>
            <Field label="Email" required>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Field>
            <Field label="Phone" required>
              <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </Field>
          </div>

          <SectionLabel>Event Details</SectionLabel>
          <Field label="Company / Event Name" required>
            <Input type="text" name="companyEvent" value={formData.companyEvent} onChange={handleChange} required />
          </Field>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))", gap: "1rem" }}>
            <Field label="Date" required>
              <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </Field>
            <Field label="Time" required>
              <Input type="text" name="time" placeholder="e.g. 3:00 PM" value={formData.time} onChange={handleChange} required />
            </Field>
          </div>
          <Field label="Address" required>
            <Input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </Field>

          <SectionLabel>Dance Selection</SectionLabel>
          <p style={{ fontSize: "0.8rem", color: "var(--dark)", opacity: 0.55, margin: "0 0 0.6rem", fontFamily: "var(--font-body)" }}>
            Current repertoire
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1rem" }}>
            {CURRENT_DANCES.map((dance) => (
              <DancePill key={dance} dance={dance}
                selected={formData.danceType.includes(dance)}
                onToggle={() => handleDanceChange(dance)} />
            ))}
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--dark)", opacity: 0.55, margin: "0 0 0.6rem", fontFamily: "var(--font-body)" }}>
            Available on request
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
            {OTHER_DANCES.map((dance) => (
              <DancePill key={dance} dance={dance}
                selected={formData.danceType.includes(dance)}
                onToggle={() => handleDanceChange(dance)} />
            ))}
          </div>
          {formData.danceType.length === 0 && (
            <p style={{ color: "var(--red)", fontSize: "0.8rem", margin: "0.5rem 0 0", fontFamily: "var(--font-body)" }}>
              Please select at least one dance
            </p>
          )}

          <SectionLabel>Anything Else?</SectionLabel>
          <Field label="Description of requested performance" required>
            <Textarea name="description" value={formData.description} onChange={handleChange} required rows={4} />
          </Field>
          <Field label="Questions, comments, or concerns">
            <Textarea name="questions" value={formData.questions} onChange={handleChange} rows={3} />
          </Field>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              width: "100%", marginTop: "0.75rem",
              backgroundColor: "var(--red)", color: "white",
              fontSize: "1rem", fontWeight: "700",
              fontFamily: "var(--font-display)",
              letterSpacing: "0.04em",
              padding: "0.9rem", border: "none",
              borderRadius: "0.6rem", cursor: "pointer",
            }}
          >
            Send Inquiry →
          </motion.button>
        </form>
      </div>
    </section>
  );
}
