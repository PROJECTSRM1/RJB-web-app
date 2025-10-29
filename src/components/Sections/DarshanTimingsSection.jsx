import React from "react";
import "./DarshanTimingsSection.css";

export default function DarshanTimingsSection() {
  return (
    <section className="darshan-section" id="darshan">
      <div className="darshan-overlay">
        <div className="darshan-content">
          <h2 className="darshan-main-title">Temple Free Darshan Timings</h2>
          <ul className="darshan-times">
            <li>07.00 AM to 09.00 AM</li>
            <li>09.00 AM to 11.00 AM</li>
            <li>11.00 AM to 12.00 PM</li>
            <li>01.00 PM to 03.00 PM</li>
            <li>03.00 PM to 05.00 PM</li>
            <li>05.00 PM to 07.00 PM</li>
            <li>07.00 PM to 09.00 PM</li>
          </ul>
          <h3 className="darshan-section-title">Free Aarti Darshan Timings</h3>
          <ul className="aarti-times">
            <li><span>Mangal Aarti :</span> 04:30 AM</li>
            <li><span>Shringar Aarti :</span> 06:30 AM</li>
            <li><span>Shayan Aarti :</span> 09:30 PM</li>
          </ul>
          {/* <div className="darshan-notification">
            <strong>Important Notification:</strong> The above timings will be shown on your booking receipt from <strong>23 October, 2025</strong>.<br />
            <strong>IMPORTANT REMINDER:</strong> Please carefully follow the instructions provided on your pass to ensure a smooth experience and avoid any inconvenience.
          </div> */}
        </div>
      </div>
    </section>
  );
}
