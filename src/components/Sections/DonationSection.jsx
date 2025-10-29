// DonationSection.jsx
import React from "react";
import "./DonationSection.css";
export default function DonationSection() {
  return (
    <section className="donation-section" id="donation">
      <h2>Support Ram Mandir</h2>
      <p className="donation-desc">
        Help us maintain the temple and serve devotees. Your generosity brings blessings to you and your family.
      </p>
      <a href="#" className="don-button">Donate Now</a>
    </section>
  );
}
