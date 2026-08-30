import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  ChevronLeft, 
  Users, 
  Droplet, 
  UserPlus, 
  Search, 
  ShieldCheck, 
  Heart, 
  Activity, 
  Award,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';
import './Home.css';
import logo from "../assets/logo.png.jpeg";
import { getSession } from './session';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const userName = getSession()?.name || 'User';

  const handleLogout = () => {
    localStorage.removeItem('hemolink_session');
    window.location.href = '/login';
  };

  return (
    <div className="home-wrapper">
      <header className="home-header">
        <Link to="/" className="home-logo-container">
          <img src={logo} alt="Hemolink Logo" />
          Hemolink
        </Link>
        <button className="home-menu-btn" onClick={() => setMenuOpen(true)}>
          <Menu />
        </button>
      </header>

      {/* Sidebar Overlay */}
      <div className={`home-sidebar-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        <div className={`home-sidebar ${menuOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
          <div className="home-sidebar-header">
            <div className="home-logo-container">
              <img src={logo} alt="Hemolink Logo" />
              Hemolink
            </div>
            <button className="home-close-btn" onClick={() => setMenuOpen(false)}>
              &times;
            </button>
          </div>
          <div className="home-sidebar-links">
            <Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/select-role" onClick={() => setMenuOpen(false)}>Choose Role</Link>
            <button className="home-logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>

      <section className="home-hero">
        <Link to="/select-role" className="home-back-btn">
          <ChevronLeft size={16} /> Back
        </Link>
        
        <div className="home-welcome">
          Welcome to <span className="red-text">Hemolink,</span> {userName}! 👋
        </div>
        
        <h1>A Bridge<br/>Between Heroes<br/>and Hope</h1>
        
        <p>Your single drop can save someone's life.<br/>Join the community today and be a hero.</p>
        
        <Link to="/select-role" className="home-select-role-btn">
          Choose Your Role
        </Link>
      </section>

      <section className="home-stats-container">
        <div className="home-stat-item">
          <Users className="home-stat-icon" size={24} />
          <div className="home-stat-number">2,845+</div>
          <div className="home-stat-label">Registered Donors</div>
        </div>
        
        <div className="home-stat-item">
          <Droplet className="home-stat-icon" size={24} />
          <div className="home-stat-number">1,560+</div>
          <div className="home-stat-label">Blood Requests</div>
        </div>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">How HemoLink Works</h2>
        <div className="home-list">
          <div className="home-list-item">
            <div className="home-icon-circle">
              <UserPlus size={24} />
            </div>
            <h3>Create Account</h3>
            <p>Register as a donor or recipient by filling a simple form and join the community.</p>
          </div>
          
          <div className="home-list-item">
            <div className="home-icon-circle">
              <Droplet size={24} />
            </div>
            <h3>Donate Blood</h3>
            <p>Find nearby blood banks or requests and choose to donate your blood.</p>
          </div>
          
          <div className="home-list-item">
            <div className="home-icon-circle">
              <Search size={24} />
            </div>
            <h3>Find Donors</h3>
            <p>Search for donors based on blood type and location in emergency.</p>
          </div>
          
          <div className="home-list-item">
            <div className="home-icon-circle">
              <ShieldCheck size={24} />
            </div>
            <h3>Secure Platform</h3>
            <p>Your information is safe and secure with our robust privacy system.</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2 className="home-section-title">Why Donate Blood?</h2>
        <div className="home-list">
          <div className="home-list-item">
            <div className="home-icon-circle">
              <Droplet size={24} />
            </div>
            <h3>Save Lives</h3>
            <p>Your single donation can save up to 3 lives.</p>
          </div>
          
          <div className="home-list-item">
            <div className="home-icon-circle">
              <Activity size={24} />
            </div>
            <h3>Health Benefits</h3>
            <p>Regular donation can reduce the risk of heart disease and improve overall health.</p>
          </div>
          
          <div className="home-list-item">
            <div className="home-icon-circle">
              <Users size={24} />
            </div>
            <h3>Community Support</h3>
            <p>Be a part of a supportive community that helps each other in times of need.</p>
          </div>
          
          <div className="home-list-item">
            <div className="home-icon-circle">
              <Award size={24} />
            </div>
            <h3>Free Health Checkup</h3>
            <p>Get a free mini-health checkup before your donation.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <div className="home-footer-logo">
          <img src={logo} alt="Hemolink Logo" />
          Hemolink
        </div>
        
        <p className="home-footer-text">
          Hemolink is a platform connecting blood donors, recipients and blood banks to make the process of blood donation easier and more efficient.
        </p>
        
        <div className="home-footer-section">
          <div className="home-footer-title">
            <Users className="icon" size={18} /> ABOUT US
          </div>
          <p className="home-footer-text">
            Hemolink is a non-profit organization dedicated to creating a comprehensive blood donation management system that seamlessly connects donors and recipients.
          </p>
        </div>
        
        <div className="home-footer-section">
          <div className="home-footer-title">
            <Phone className="icon" size={18} /> CONTACT US
          </div>
          <div className="home-footer-contact">
            <div className="home-footer-contact-item">
              <Mail className="icon" size={16} /> support@hemolink.com
            </div>
            <div className="home-footer-contact-item">
              <Phone className="icon" size={16} /> +91 9876543210
            </div>
            <div className="home-footer-contact-item">
              <MapPin className="icon" size={16} /> Andhra Pradesh, India
            </div>
          </div>
        </div>
        
        <div className="home-footer-section">
          <div className="home-footer-title">
            <Heart className="icon" size={18} /> HELP
          </div>
          <div className="home-footer-links">
            <Link to="#" className="home-footer-link">
              <ChevronRight className="icon" size={16} /> How to request blood?
            </Link>
            <Link to="#" className="home-footer-link">
              <ChevronRight className="icon" size={16} /> How to donate blood?
            </Link>
            <Link to="#" className="home-footer-link">
              <ChevronRight className="icon" size={16} /> Eligibility Guidelines
            </Link>
            <Link to="#" className="home-footer-link">
              <ChevronRight className="icon" size={16} /> FAQs
            </Link>
          </div>
        </div>
        
        <div className="home-footer-bottom">
          <div className="home-footer-heart">
            Made with <Heart className="icon" size={14} fill="currentColor" /> by HemoLink
          </div>
          <div>© 2026 Hemolink. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}