import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import "./HomePage.css";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/Logo.png" alt="SHESYNC Logo" className="logo" />
          <h2 className="app-name">SHESYNC</h2>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/shopping">Shopping</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li className="logout-item">
            <button className="logout-button">Logout</button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Empowering Women’s Health & Wellness</h1>
        <p>Track your cycle, shop for essentials, and stay informed with SHESYNC.</p>
      </header>

      {/* About Section */}
      <section className="about">
        <h2>Why SHESYNC?</h2>
        <p>
          SHESYNC is a dedicated platform to help women track their menstrual health, 
          shop for wellness products, and access expert advice. Stay in sync with your body!
        </p>
      </section>

      {/* Contact Us Form */}
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Have questions or feedback? We’d love to hear from you!</p>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
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

