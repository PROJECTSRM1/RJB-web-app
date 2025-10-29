import React from "react";
import "./LiveDarshanSection.css";

// Replace VIDEO_ID with the actual YouTube video ID for Ram Mandir LIVE darshan
const youtubeId = "'https://www.youtube.com/watch?v=fKJFzC25MXo'";

export default function LiveDarshanSection() {
  return (
    <section className="live-section" id="live">
      <div className="live-header"> Ram Mandir Live Darshan</div>
      <p className="live-desc">
        Experience the divinity of Ram Lalla directly from Ayodhya! Watch the live darshan and immerse in the sacred atmosphere of the temple.
      </p>
      <div className="youtube-video-container">
        <iframe
          width="100%"
          height="410"
          src={'https://www.youtube.com/watch?v=fKJFzC25MXo'}
          title="Ayodhya Ram Mandir Live Darshan"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
