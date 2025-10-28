import React from "react";
import "./EventsSection.css";

const events = [
  {
    title: "Deepotsav Festival",
    date: "Nov 11, 2025",
    description: "Join Ayodhya in celebrating millions of diyas on the ghats of Saryu—spectacular lighting, bhajans, and cultural events.",
    // icon: "🪔"
  },
  {
    title: "Ram Navami Mahotsav",
    date: "Apr 7, 2026",
    description: "Annual celebration of Maryada Purushottam Shri Ram's birth—grand pujas, aarti, and katha sessions in the temple complex.",
    // icon: "🌞"
  },
  
  {
    title: "Daily Maha Aarti",
    date: "6:30 AM & 7:00 PM",
    description: "Start and close the day with community aartis—open for all devotees at Ram Mandir.",
    // icon: "🙏"
  }
];

export default function EventsSection() {
  return (
    <section className="events-section" id="events">
      <h2 className="events-title">Upcoming Events at Ram Mandir, Ayodhya</h2>
      <div className="events-list">
        {events.map((event, idx) => (
          <div className="event-card" key={idx}>
            <div className="event-icon">{event.icon}</div>
            <div className="event-details">
              <div className="event-name">{event.title}</div>
              <div className="event-date">{event.date}</div>
              <div className="event-desc">{event.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
