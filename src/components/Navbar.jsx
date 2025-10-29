// Navbar.jsx
import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">🚩 AYODHYA DHAM | राम लला</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#livedarshan">Live Darshan</a></li>
        <li><a href="#donation">Donate</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
