import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="intro-box fade-in">
        <h1 className="section-heading">About SheSync</h1>
        <p>
          SheSync is a digital initiative focused on transforming women's health and wellness, especially around menstruation and hormonal well-being.
        </p>
        <p>
          Our mission is to break societal taboos, raise awareness, and offer eco-friendly, science-backed products that promote self-care.
        </p>
        <p>
          By syncing technology with empathy, we strive to build a world where every woman feels heard, supported, and celebrated.
        </p>
      </div>

      <div className="mission-box fade-in">
        <h2 className="section-heading">Our Mission</h2>
        <p>
          We aim to empower women to take charge of their cycles through technology, education, and community. Whether it's our period tracking tools, health content, or sustainable product line, SheSync is here to support women at every step of their journey.
        </p>
      </div>

      <div className="team-box fade-in">
        <h2 className="section-heading">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <img src="/ishika.jpg" alt="Ishika" />
            <h3>Ishika</h3>
            <p>Passionate about tech and women's wellness. Leads SheSync's development and design efforts.</p>
          </div>
          <div className="team-card">
            <img src="/Harleen1.jpg" alt="Harleen Kaur" />
            <h3>Harleen Kaur</h3>
            <p>Drives content strategy, ensuring our message is inclusive, empowering, and scientifically accurate.</p>
          </div>
          <div className="team-card">
            <img src="/harleen2.jpg" alt="Harleen Kaur" />
            <h3>Harleen Kaur</h3>
            <p>Focuses on outreach and engagement, building the SheSync community one connection at a time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
