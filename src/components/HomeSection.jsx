import React from "react";
import "./HomeSection.css";

export default function HeroSection() {
  const heroImg = "https://triptovaranasi.in/wp-content/uploads/2024/01/Ayodhya-Tour-Package.png"; 

  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>RAM LALLA</h1>
          <div className="hero-buttons">
            <a href="#live" className="btn btn-primary">WATCH LIVE DARSHAN</a>
            <a href="#events" className="btn btn-secondary">BOOK PUJA</a>
          </div>
        </div>
      </div>
    </section>
  );
}
