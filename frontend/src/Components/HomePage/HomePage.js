/*import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./HomePage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";*/
/*
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./HomePage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);
    // Logout handler
    const handleLogout = () => {
      console.log("User logged out"); // Optional: You can clear session storage or tokens here.
      
      // Redirect to the login page
      navigate("/login");
    };
  return (
    <div>
     
    / <nav className="navbar">
        <div className="logo-container">
          <img src="/Logo.png" alt="SheSync Logo" className="logo" />
          <span className="app-name">SheSync</span>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><Link to="/products">Shopping</Link></li>
          <li><Link to="/cart">View cart</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><button className="logout-button">Logout</button></li> 
          <li><button className="logout-button" onClick={handleLogout}>Logouttt</button></li>
        </ul>
      </nav>

  
       <section className="image-slider">
        <div className={`slide ${currentSlide === 0 ? "active" : ""}`}>
          <img src="/img1.jpg" alt="Change the Psychle" />
          <div className="text-overlay pink">
            <h2>Change the <span className="highlight">Psychle</span></h2>
            <p>A social endeavour that shatters societal structures to uplift women.</p>
          </div>
        </div>
        <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
          <img src="/img2.webp" alt="Shattering Myths" />
          <div className="text-overlay purple">
            <h2>Shattering <span className="highlight">Myths</span></h2>
            <p>Redefining menstrual hygiene through awareness and education.</p>
          </div>
        </div>
        <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
          <img src="/img3.jpg" alt="Enlightening Young Minds" />
          <div className="text-overlay grey">
            <h2><span className="highlight">Enlightening</span> Young Minds</h2>
            <p>Enabling awareness, embracing change, and encouraging sustainability.</p>
          </div>
        </div>
      </section>



    
      <section className="vision-mission">
        <div className="vision">
          <img src="/vision.jpeg" alt="Vision" className="vision-mission-img" />
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

      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

     
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

*/

/*
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./HomePage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate(); // Initialize navigate here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Logout handler
  const handleLogout = () => {
    console.log("User logged out"); // Optional: You can clear session storage or tokens here.
    
    // Redirect to the login page
    navigate("/login"); // Use the navigate function for redirection
  };

  return (
    <div>
    
      <nav className="navbar">
        <div className="logo-container">
          <img src="/Logo.png" alt="SheSync Logo" className="logo" />
          <span className="app-name">SheSync</span>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><Link to="/products">Shopping</Link></li>
          <li><Link to="/cart">View cart</Link></li>
          <li><Link to="/login">Login</Link></li>
         
          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

     
      <section className="image-slider">
        <div className={`slide ${currentSlide === 0 ? "active" : ""}`}>
          <img src="/img1.jpg" alt="Change the Psychle" />
          <div className="text-overlay pink">
            <h2>Change the <span className="highlight">Psychle</span></h2>
            <p>A social endeavour that shatters societal structures to uplift women.</p>
          </div>
        </div>
        <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
          <img src="/img2.webp" alt="Shattering Myths" />
          <div className="text-overlay purple">
            <h2>Shattering <span className="highlight">Myths</span></h2>
            <p>Redefining menstrual hygiene through awareness and education.</p>
          </div>
        </div>
        <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
          <img src="/img3.jpg" alt="Enlightening Young Minds" />
          <div className="text-overlay grey">
            <h2><span className="highlight">Enlightening</span> Young Minds</h2>
            <p>Enabling awareness, embracing change, and encouraging sustainability.</p>
          </div>
        </div>
      </section>

 
      <section className="vision-mission">
        <div className="vision">
          <img src="/vision.jpeg" alt="Vision" className="vision-mission-img" />
          <h2>Our Vision</h2>
          <p>To be the leading digital destination for women’s wellness, offering innovative, eco-friendly, and personalized solutions for menstrual health. SheSync envisions a world where every woman has access to reliable products, expert guidance, and a safe space to embrace her natural cycles with confidence and care.</p>
        </div>
        <div className="divider"></div>
        <div className="mission">
          <img src="/mission.jpg" alt="Mission" className="vision-mission-img" />
          <h2>Our Mission</h2>
          <p>SheSync is dedicated to empowering women by providing a seamless e-commerce platform for menstrual and reproductive health. We offer high-quality, sustainable, and science-backed products for period care, PCOS/PCOD management, and overall hormonal balance. Our mission is to promote self-care, break taboos, and create a supportive community for women’s health.</p>
        </div>
      </section>

      
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

     
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
*/




import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./HomePage.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <div>
     
      <nav className="navbar">
        <div className="logo-container">
          <img src="/Logo.png" alt="SheSync Logo" className="logo" />
          <span className="app-name">SheSync</span>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/products">Shopping</Link></li>
          {/* <li><Link to="/cart">View Cart</Link></li> */}
          <li><Link to="/login">Login</Link></li>
          <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
        </ul>
      </nav>

    
      <section className="image-slider">
        {[
          {
            img: "/Slide1.gif",
           /* alt: "Change the Psychle",
            text: (
              <>
                Change the <span className="highlight">Psychle</span>
              </>
            ),
            desc: "A social endeavour that shatters societal structures to uplift women.",
            color: "pink"*/
          },
          {
            img: "/giphy5.gif",
           /* alt: "Shattering Myths",
            text: (
              <>
                Shattering <span className="highlight">Myths</span>
              </>
            ),
            desc: "Redefining menstrual hygiene through awareness and education.",
            color: "purple"*/
          },
          {
            img: "/emp.webp",
           /* alt: "Enlightening Young Minds",
            text: (
              <>
                <span className="highlight">Enlightening</span> Young Minds
              </>
            ),
            desc: "Enabling awareness, embracing change, and encouraging sustainability.",
            color: "grey"*/
          }
        ].map((slide, index) => (
          <div key={index} className={`slide ${currentSlide === index ? "active" : ""}`}>
            <img src={slide.img} alt={slide.alt} />
            <div className={`text-overlay ${slide.color}`}>
              <h2>{slide.text}</h2>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </section>

      
      <section className="vision-mission">
        <div className="vision">
          <img src="/vision.jpeg" alt="Vision" className="vision-mission-img" />
          <h2>Our Vision</h2>
          <p>
            To be the leading digital destination for women’s wellness, offering innovative, eco-friendly, and personalized solutions for menstrual health. SheSync envisions a world where every woman has access to reliable products, expert guidance, and a safe space to embrace her natural cycles with confidence and care.
          </p>
        </div>
        <div className="divider"></div>
        <div className="mission">
          <img src="/mission.jpg" alt="Mission" className="vision-mission-img" />
          <h2>Our Mission</h2>
          <p>
            SheSync is dedicated to empowering women by providing a seamless e-commerce platform for menstrual and reproductive health. We offer high-quality, sustainable, and science-backed products for period care, PCOS/PCOD management, and overall hormonal balance. Our mission is to promote self-care, break taboos, and create a supportive community for women’s health.
          </p>
        </div>
      </section>


      <section className="tracker-section">
        <h2 className="tracker-heading">Let’s Track Our Period</h2>
        <p className="tracker-intro">
          Knowing your cycle helps you plan better, stay healthier, and understand your body’s natural rhythm.
        </p>
        <div className="tracker-benefits">
          <div className="benefit-card">
            <i className="fas fa-heartbeat benefit-icon"></i>
            <h4>Better Health Monitoring</h4>
            <p>Track symptoms and get insights into hormonal balance and fertility.</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-calendar-check benefit-icon"></i>
            <h4>Plan Your Schedule</h4>
            <p>Never be surprised by your periods again. Track and prepare ahead.</p>
          </div>
          <div className="benefit-card">
            <i className="fas fa-brain benefit-icon"></i>
            <h4>Understand Mood Swings</h4>
            <p>Correlate your mood and energy changes with your cycle phases.</p>
          </div>
        </div>
        <button className="tracker-button" onClick={() => navigate("/tracker")}>
          Go to Tracker
        </button>
      </section>


   
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      
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


