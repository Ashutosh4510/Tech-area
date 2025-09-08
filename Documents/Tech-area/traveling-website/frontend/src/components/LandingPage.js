import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo">TravoGenie</div>
        <nav className="nav-buttons">
          <a href="/home" className="nav-link">Home</a>
          <a href="/login" className="nav-link">Login</a>
          <a href="/register" className="nav-link signup-link">Register</a>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Explore the world with confidence</h1>
          <p>Your journey starts here. Discover, plan, and book your perfect trip.</p>
          <button className="btn primary-cta">Get Started</button>
        </div>
      </section>

      <section className="features-section">
        <h2>Our Services</h2>
        <div className="features">
          <div className="feature-card">
            <div className="feature-icon">🚗</div>
            <h3>Book a Ride</h3>
            <p>Convenient and affordable rides to your destination.</p>
            <button className="btn feature-btn">Book Now</button>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Plan a Trip</h3>
            <p>Personalized itineraries tailored to your preferences.</p>
            <button className="btn feature-btn">Plan Now</button>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏨</div>
            <h3>Find Hotels</h3>
            <p>Comfortable stays at the best prices.</p>
            <button className="btn feature-btn">Find Now</button>
          </div>
        </div>
      </section>

      <section className="account-info-section">
        <h2>Manage Your Trips</h2>
        <p>
          Log in to view your bookings, past trips, and personalized recommendations.
          {showMore && (
            <span> Access exclusive deals, travel tips, and more by creating an account with us.</span>
          )}
        </p>
        <button className="btn toggle-btn" onClick={toggleMore}>
          {showMore ? 'Show Less' : 'Learn More'}
        </button>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#contact">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
