import './Footer.css';
import logo from "../assets/eaglecard-removebg-preview.png";
import { useNavigate, Link } from 'react-router-dom';

import facebook from "../images/facebook.jpg";
import instagram from "../images/instagram.jpg";
import twitter from "../images/twitter.jpg";
import LinkedIn from "../images/linkedin.png";
import youtube from "../images/youtube.jpg";
import Phone from "../images/phone.jpg";
import location from "../images/location.jpg";

function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const contactItems = [
    {
      icon: <img src={Phone} alt="Phone" />,
      content: (
        <>
          <a href="tel:+919087772227">+91 9087772227</a>
          <a href="tel:+919840334320">+91 9840334320</a>
        </>
      )
    },
    {
      icon: <img src={location} alt="Location" />,
      content: (
        <a
          href="https://www.google.com/maps/place/85,+Velachery+-+Tambaram+Main+Rd,+Sabai+Colony,+Selaiyur,+Rajakilpakkam,+Chennai,+Tamil+Nadu+600073"
          target="_blank"
          rel="noopener noreferrer"
        >
          No.1, Venkatraman Street, First Floor Velachery Main Road,
          Rajakilpakkam, Chennai-600073.
        </a>
      )
    }
  ];

  const services = [
    { name: 'Consultancy Services', href: "/consultancy" },
    { name: 'Land Development', href: "/land" },
    { name: 'Financial Solutions', href: "/finance" },
    { name: 'Export Services', href: "/export" },
    { name: 'Bank Loans', href: "/bank-loan" }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* Logo & About */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src={logo}
                alt="Eagle Info Global Logo"
                className="footer-logo-img"
              />
              <p className="footer-tagline">
                Your trusted partner for global business solutions and consulting services.
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Our Services</h4>
            <ul className="footer-list">
              {services.map((service, index) => (
                <li key={index} className="footer-list-item">
                  <Link to={service.href} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-grid">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="contact-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="contact-icon">{item.icon}</span>
                  <span className="contact-text">{item.content}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4 className="footer-title">Newsletter</h4>
            <p className="newsletter-text">
              Stay updated with our latest news and services.
            </p>

            <div className="newsletter-form">
              <input
                type="email"
                placeholder="eagleinfoglobal@gmail.com"
                className="newsletter-input"
              />
              <button className="newsletter-btn" onClick={() => navigate('/contact#contact-form')}>
                Subscribe
              </button>
            </div>

            {/* Social Media */}
            <div className="social-links-container">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={facebook} alt="Facebook" className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={instagram} alt="Instagram" className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={twitter} alt="Twitter" className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img src={youtube} alt="YouTube" className="social-icon-yt" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Eagle Info Global. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Sitemap</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;