'use client';
import { useState } from "react";

export default function KBJunkRemovalWebsiteClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", background: "#111", color: "white", minHeight: "100vh" }}>
      <h1 style={{ color: "#facc15", fontSize: "40px" }}>KB Junk Removal</h1>
      <h2 style={{ marginBottom: "10px" }}>
        <span style={{ color: "#facc15" }}>Reliable Junk Removal Services</span>{" "}
        <span style={{ color: "white" }}>You Can Trust</span>
      </h2>

      <p style={{ marginBottom: "20px" }}>
        Serving Washington County — Fast, affordable, and reliable junk removal.
      </p>

      <h3>Services</h3>
      <ul>
        <li>Yard Waste</li>
        <li>Furniture</li>
        <li>Hoarder Cleanup</li>
        <li>Large Item Removal</li>
      </ul>

      <h3 style={{ marginTop: "30px" }}>Request a Quote</h3>

      {submitted ? (
        <p style={{ color: "#22c55e", fontWeight: "bold" }}>
          Thank you for your request! We appreciate your business and will be in touch with you shortly.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}
        >
          <input placeholder="Name" required style={{ padding: "10px" }} />
          <input placeholder="Phone" required style={{ padding: "10px" }} />

          <label><input type="checkbox" /> Furniture Cleanup</label>
          <label><input type="checkbox" /> General Trash Removal</label>
          <label><input type="checkbox" /> Yard Waste</label>
          <label><input type="checkbox" /> Large Items</label>
          <label><input type="checkbox" /> Hoarder Cleanup</label>

          <textarea placeholder="Details" style={{ padding: "10px" }} />

          <button
            type="submit"
            style={{
              background: "#facc15",
              color: "black",
              padding: "12px",
              fontWeight: "bold",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit Quote Request
          </button>
        </form>
      )}

      <div style={{ marginTop: "30px" }}>
        <a
          href="tel:6183675815"
          style={{ color: "#facc15", fontWeight: "bold" }}
        >
          Call (618) 367-5815
        </a>
        <br />
        <a
          href="https://www.facebook.com/share/1ArxuPRrLf/?mibextid=wwXIfr"
          target="_blank"
          style={{ color: "#3b82f6" }}
        >
          Visit our Facebook
        </a>
      </div>
    </div>
  );
}
