import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/Logo.png" alt="SheSync Logo" className="logo" />
          <span className="app-name">SheSync</span>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Shopping</a></li>
          <li><a href="#">Login</a></li>
          <li><button className="logout-button">Logout</button></li>
        </ul>
      </nav>

      {/* Vision & Mission Section */}
      <section className="vision-mission">
        <div className="vision">
          <img src="/vision.jpg" alt="Vision" className="vision-mission-img" />
          <h2>Our Vision</h2>
          <p>To be the leading digital destination for women’s wellness, offering innovative, eco-friendly, and personalized solutions for menstrual health. SheSync envisions a world where every woman has access to reliable products, expert guidance, and a safe space to embrace her natural cycles with confidence and care.</p>
        </div>
        <div className="divider"></div>
        <div className="mission">
          <img src="/mission.jpg" alt="Mission" className="vision-mission-img" />
          <h2>Our Mission</h2>
          <p>SheSync is dedicated to empowering women by providing a seamless e-commerce platform for menstrual and reproductive health. We offer high-quality, sustainable, and science-backed products for period care, PCOS/PCOD management, and overall hormonal balance. Our mission is to promote self-care, break taboos, and create a supportive community for women’s health.  
          </p>
        </div>
      </section>

      {/* Contact Us Form */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 SHESYNC | All Rights Reserved</p>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

