"use client";
import { useEffect, useState } from "react";
 
export default function KBJunkRemovalWebsiteClient() {
const [submitted, setSubmitted] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [message, setMessage] = useState("");
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);
  const services = [
    "Yard Waste",
    "Furniture Removal",
    "Hoarder Cleanup",
    "Large Item Removal",
  ];

  const quoteOptions = [
    "Furniture Cleanup",
    "General Trash Removal",
    "Yard Waste",
    "Large Items",
    "Hoarder Cleanup",
    "Appliance Removal",
    "Garage Cleanout",
    "Property Cleanup",
    "Other",
  ];

const pageStyle = {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #0a0a0a, #151515 55%, #1d1d1d)",
    color: "white",
    minHeight: "100vh",
};

const containerStyle = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: isMobile ? "18px 14px 40px" : "32px 20px 60px",
};

const heroStyle = {
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "1.15fr 0.85fr",
  gap: isMobile ? "18px" : "28px",
  alignItems: "stretch",
  marginBottom: "36px",
};

const heroLeftStyle = {
  background: "linear-gradient(145deg, rgba(24,24,24,0.95), rgba(12,12,12,0.95))",
  border: "1px solid rgba(250, 204, 21, 0.18)",
  borderRadius: "24px",
  padding: isMobile ? "20px" : "34px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
};

  const badgeStyle = {
    display: "inline-block",
    background: "rgba(250, 204, 21, 0.12)",
    color: "#fde047",
    border: "1px solid rgba(250, 204, 21, 0.22)",
    borderRadius: "999px",
    padding: "8px 14px",
    fontWeight: "bold",
    fontSize: "13px",
    marginBottom: "18px",
    letterSpacing: "0.4px",
  };

const heroRightStyle = {
  background: "linear-gradient(145deg, rgba(26,26,26,0.95), rgba(10,10,10,0.95))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: isMobile ? "20px" : "28px",
  boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
};

  const cardStyle = {
    background: "#111",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "18px",
    fontWeight: "bold",
    textAlign: "center",
  };

  const sectionTitleStyle = {
    fontSize: "32px",
    fontWeight: "800",
    margin: "0 0 10px",
  };

  const sectionTextStyle = {
    color: "#d4d4d8",
    lineHeight: 1.7,
    margin: 0,
  };

const gridStyle = {
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "repeat(4, minmax(0, 1fr))",
  gap: "18px",
  marginTop: "20px",
};

  const serviceCardStyle = {
    background: "linear-gradient(145deg, #171717, #101010)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "22px",
    boxShadow: "0 14px 35px rgba(0,0,0,0.25)",
  };

const quoteWrapStyle = {
  display: "grid",
  gridTemplateColumns: isMobile ? "1fr" : "0.9fr 1.1fr",
  gap: isMobile ? "18px" : "28px",
  marginTop: "38px",
};

const formCardStyle = {
  background: "linear-gradient(145deg, #171717, #0d0d0d)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: isMobile ? "20px" : "28px",
  boxShadow: "0 18px 45px rgba(0,0,0,0.3)",
};

  const inputStyle = {
    width: "100%",
    background: "#0b0b0b",
    color: "white",
    border: "1px solid #3f3f46",
    borderRadius: "14px",
    padding: "14px 16px",
    outline: "none",
    boxSizing: "border-box",
    fontSize: "15px",
  };
  
   const buttonStyle = {
    width: "100%",
    background: "#facc15",
    color: "black",
    padding: "15px 18px",
    fontWeight: "800",
    border: "none",
    borderRadius: "16px",
    cursor: "pointer",
    fontSize: "17px",
    boxShadow: "0 12px 28px rgba(250, 204, 21, 0.22)",
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <div style={heroStyle}>
          <div style={heroLeftStyle}>
            <div style={badgeStyle}>Serving Washington County</div>
            <div style={{ position: "relative", marginBottom: "22px", paddingRight: isMobile ? "0" : "170px", minHeight: isMobile ? "auto" : "140px" }}>
              <div
                style={{
                  position: "absolute",
                  right: isMobile ? "10px" : "0",
                  top: isMobile ? "-6px" : "-10px",
                  width: isMobile ? "90px" : "150px",
                  height: isMobile ? "90px" : "150px",
                  borderRadius: "999px",
                  background: "radial-gradient(circle, rgba(250,204,21,0.26) 0%, rgba(250,204,21,0.14) 38%, rgba(250,204,21,0.04) 58%, rgba(250,204,21,0) 76%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 42px rgba(250,204,21,0.14)",
                  zIndex: 0,
                }}
              >
                <img
                  src="/logo1.png"
                  alt="KB Junk Removal Logo"
                  style={{
                    width: isMobile ? "68px" : "122px",
                    height: isMobile ? "68px" : "122px",
                    objectFit: "contain",
                    borderRadius: "999px",
                    filter: "drop-shadow(0 10px 24px rgba(0,0,0,0.35))",
                    opacity: 0.98,
                  }}
                />
              </div>

              <h1
                style={{
                  color: "#facc15",
                  fontSize: isMobile ? "42px" : "64px",
                  margin: 0,
                  fontWeight: 900,
                  lineHeight: 0.98,
                  position: "relative",
                  zIndex: 1,
                  maxWidth: isMobile ? "100%" : "760px",
                  textShadow: "0 4px 18px rgba(0,0,0,0.22)",
                }}
              >
                KB Junk Removal
              </h1>
            </div>
            <h2 style={{ margin: "0 0 16px", fontSize: isMobile ? "24px" : "32px", lineHeight: 1.3, textAlign: "left", maxWidth: "760px" }}>
              <span style={{ color: "#facc15" }}>Reliable Junk Removal Services</span><br />
              <span style={{ color: "white", display: "inline-block", marginTop: "2px" }}>You Can Trust</span>
            </h2>
            <p style={{ color: "#d4d4d8", fontSize: isMobile ? "15px" : "17px", lineHeight: 1.7, maxWidth: "620px", marginBottom: "24px", textAlign: "left" }}>
              Fast, affordable, and dependable junk removal for homes, garages, and properties across Washington County.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center", marginTop: "4px" }}>
              <a
                href="tel:6183675815"
                style={{
                  background: "#facc15",
                  color: "black",
                  padding: "14px 22px",
                  borderRadius: "16px",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 12px 28px rgba(250, 204, 21, 0.2)",
                }}
              >
                Call (618) 367-5815
              </a>
              <a
                href="https://www.facebook.com/share/1AyaqTqqSA/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#2563eb",
                  color: "white",
                  padding: "14px 22px",
                  borderRadius: "16px",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Visit Our Facebook
              </a>
              <a
                href="https://www.facebook.com/share/1AyaqTqqSA/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#93c5fd",
                  fontWeight: 700,
                  textDecoration: "none",
                  padding: "10px 4px",
                }}
              >
                Follow us for updates
              </a>
            </div>
          </div>

          <div style={heroRightStyle}>
            <div style={{ color: "#fde047", fontWeight: 800, marginBottom: "18px", letterSpacing: "0.8px", fontSize: "13px" }}>
              WHAT WE REMOVE
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "14px" }}>
              {services.map((service) => (
                <div key={service} style={cardStyle}>{service}</div>
              ))}
            </div>
            <div style={{ marginTop: "18px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.22)", color: "#86efac", padding: "14px 16px", borderRadius: "16px", textAlign: "center", fontWeight: 700 }}>
              Local service • Straightforward pricing • Quick response
            </div>
          </div>
        </div>

        <section style={{ marginBottom: "26px" }}>
          <h2 style={sectionTitleStyle}>Services</h2>
          <p style={sectionTextStyle}>Built for quick browsing on phones and easy contact from Facebook, Google, and local customers.</p>
          <div style={gridStyle}>
            {[
              {
                title: "Yard Waste",
                text: "Brush, branches, bags, storm debris, and outdoor cleanup made easy.",
              },
              {
                title: "Furniture Removal",
                text: "Couches, dressers, mattresses, tables, and bulky furniture hauled away.",
              },
              {
                title: "Hoarder Cleanup",
                text: "Dependable cleanout help for heavy clutter and difficult cleanup jobs.",
              },
              {
                title: "Large Items",
                text: "Appliances, oversized junk, and hard-to-move items removed safely.",
              },
            ].map((item) => (
              <div key={item.title} style={serviceCardStyle}>
                <div style={{ display: "inline-block", background: "rgba(250,204,21,0.14)", color: "#fde047", borderRadius: "999px", padding: "7px 12px", fontSize: "13px", fontWeight: 800, marginBottom: "14px" }}>
                  {item.title}
                </div>
                <p style={{ color: "#d4d4d8", lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={quoteWrapStyle}>
          <div>
            <div style={badgeStyle}>Free Quote Request</div>
            <h2 style={sectionTitleStyle}>Get a fast junk removal quote</h2>
            <p style={{ ...sectionTextStyle, maxWidth: "520px" }}>
              Serving Washington County, IL — fast, reliable, and local junk removal you can count on.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "14px", marginTop: "20px" }}>
              {[
                "Easy for mobile users",
                "Quick service selection",
                "Helps pre-qualify jobs",
                "Makes quoting faster",
              ].map((item) => (
                <div key={item} style={{ ...cardStyle, textAlign: "left" }}>{item}</div>
              ))}
            </div>
          </div>

          <div style={formCardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: "8px", fontSize: "26px" }}>Request a Quote</h3>
            <p style={{ color: "#a1a1aa", marginTop: 0, marginBottom: "22px" }}>
              Select the services you need and send over a few details.
            </p>

        <form
onSubmit={async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const res = await fetch("/api/quote-request", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to send request.");
    }

    setSubmitted(true);
    setMessage(
      data.message ||
        "Thank you for your request! We appreciate your business and will be in touch with you shortly."
    );
    form.reset();
  } catch (err) {
    setMessage(err.message || "Failed to send request.");
  } finally {
    setIsSubmitting(false);
  }
}}
  style={{ display: "flex", flexDirection: "column", gap: "16px" }}
>
 <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "14px" }}>
    <input
      name="name"
      placeholder="Name"
      required
      style={inputStyle}
    />
    <input
      name="phone"
      placeholder="Phone"
      required
      style={inputStyle}
    />
  </div>

  <div>
    <div style={{ fontWeight: 700, marginBottom: "10px", color: "#e4e4e7" }}>
      What do you need removed?
    </div>
   <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "10px" }}>
      {quoteOptions.map((item) => (
        <label
          key={item}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#0b0b0b",
            border: "1px solid #27272a",
            borderRadius: "14px",
            padding: "12px 14px",
          }}
        >
          <input type="checkbox" name="services" value={item} />
          <span>{item}</span>
        </label>
      ))}
    </div>
  </div>

  <input
    name="otherDetails"
    placeholder="If other, please specify..."
    style={inputStyle}
  />

  <textarea
    name="details"
    placeholder="Project details"
    rows={5}
    style={{ ...inputStyle, resize: "vertical" }}
  />

  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "14px" }}>
    <select
      name="contactMethod"
      style={inputStyle}
      defaultValue=""
    >
      <option value="" disabled>
        Preferred contact
      </option>
      <option>Call me</option>
      <option>Text me</option>
      <option>Either is fine</option>
    </select>

    <input
      name="bestTime"
      placeholder="Best time to reach you"
      style={inputStyle}
    />
  </div>

  <div>
    <div style={{ fontWeight: 700, marginBottom: "10px", color: "#e4e4e7" }}>
      Upload photos (optional)
    </div>
    <input
      name="photos"
      type="file"
      multiple
      accept="image/*"
      style={{ ...inputStyle, padding: "12px" }}
    />
  </div>

  {message ? (
    <div
      style={{
        background: submitted ? "rgba(250,204,21,0.1)" : "rgba(239,68,68,0.1)",
        border: submitted
          ? "1px solid rgba(250,204,21,0.25)"
          : "1px solid rgba(239,68,68,0.25)",
        color: submitted ? "#fef08a" : "#fca5a5",
        borderRadius: "18px",
        padding: "16px 18px",
        fontWeight: 700,
      }}
    >
      {message}
    </div>
  ) : null}

  <button
    type="submit"
    disabled={isSubmitting}
    style={{
      ...buttonStyle,
      opacity: isSubmitting ? 0.7 : 1,
      cursor: isSubmitting ? "not-allowed" : "pointer",
    }}
  >
    {isSubmitting ? "Sending..." : "Submit Quote Request"}
  </button>
</form> 
          </div>
        </section>

        <footer style={{ marginTop: "50px", borderTop: "1px solid #27272a", paddingTop: "20px", textAlign: "center", color: "#a1a1aa" }}>
          <p style={{ marginBottom: "10px", fontWeight: 700 }}>Serving Washington County, IL</p>
          <div style={{ marginBottom: "10px" }}>
            <a href="https://www.facebook.com/share/1AyaqTqqSA/?mibextid=wwXIfr" target="_blank" rel="noreferrer" style={{ color: "#3b82f6", marginRight: "10px" }}>Facebook</a>
            <a href="https://www.facebook.com/share/1AyaqTqqSA/?mibextid=wwXIfr" target="_blank" rel="noreferrer" style={{ color: "#3b82f6" }}>Follow Us</a>
          </div>
          <p style={{ fontSize: "14px" }}>© {new Date().getFullYear()} KB Junk Removal. All rights reserved.</p>
          <p style={{ fontSize: "13px", marginTop: "8px" }}>Reliable junk removal services in Washington County, Illinois.</p>
        </footer>
      </div>
    </div>
  );
}

