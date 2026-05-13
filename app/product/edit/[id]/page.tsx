"use client"; // Required for client-side interactivity

import { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("Both fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format.");
      return;
    }

    setError("");
    setSubmitted(formData);
    setFormData({ name: "", email: "" }); // Reset form
  };

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Simple Next.js Form</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ display: "block", marginBottom: "10px", width: "100%" }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ display: "block", marginBottom: "10px", width: "100%" }}
          />
        </label>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submitted.name}</p>
          <p><strong>Email:</strong> {submitted.email}</p>
        </div>
      )}
    </main>
  );
}
