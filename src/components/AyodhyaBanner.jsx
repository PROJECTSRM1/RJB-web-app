import React from "react";
import "./AyodhyaBanner.css"; 

const AyodhyaBanner = () => (
  <div className="ayodhya-banner">
    <img
      src="/images/OIP.webp" 
      alt="Ayodhya Sri Ram Mandir"
      className="banner-img"
    />
    <div className="banner-content">
      <h1 className="banner-title">श्री राम जनमभूमि मंदिर</h1>
      <h2 className="banner-subtitle">Ayodhya Dham | Jai Shri Ram</h2>
      <p className="banner-capt">
        Where devotion meets history — Experience the divinity of Ayodhya and Lord Ram.
      </p>
    </div>
  </div>
);

export default AyodhyaBanner;
