import React from "react";
import "./AyodhyaFooter.css";

const AyodhyaFooter = () => (
  <footer className="ayodhya-footer" id="contact">
    <div className="footer-content">
      <div className="footer-section">
        <h3 className="footer-title">श्री राम मंदिर, अयोध्या</h3>
        <p>Jai Shri Ram | Ayodhya Dham | Uttar Pradesh, India</p>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: info@ayodhyamandir.com</p>
        <p>Phone: +91 98765 -----</p>
      </div>
      <div className="footer-section">
        <h4>Follow</h4>
        <p>
          <a href="#" className="footer-link">Instagram</a> •
          <a href="#" className="footer-link">Facebook</a>
        </p>
      </div>
    </div>
    <hr className="footer-divider" />
    <div className="footer-bottom">
      <span>© 2025 Shri Ram Mandir, Ayodhya | जय श्रीराम</span>
    </div>
  </footer>
);

export default AyodhyaFooter;
