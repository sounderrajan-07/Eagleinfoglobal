import { useState, useEffect } from 'react';
import './Contact.css';
import { useLocation } from 'react-router-dom';

function Contact() {
  
  const location = useLocation();
   useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }, 100);
      }
    }
  }, [location]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isVisible, setIsVisible] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Updated with direct paths
  const contactInfo = [
    {
      image: "../images/location.jpg",
      title: "Visit Our Office",
      details: ["No.1, Venkatraman Street, First Floor Velachery Main Road, Rajakilpakkam, Chennai-600073."],
      action: "Get Directions",
      href: "https://www.google.com/maps/place/85,+Velachery+-+Tambaram+Main+Rd,+Sabai+Colony,+Selaiyur,+Rajakilpakkam,+Chennai,+Tamil+Nadu+600073"
    },
    {
      image: "../images/call.jpg",
      title: "Call Us",
      type: "call",
      details: ["+91 98403 34320", "+91 90877 72227", "Available 24/7"],
      phones: ["+919840334320", "+919087772227"],
      action: "Call Now",
      href: "tel:+919840334320"
    },
    {
      image: "../images/email.jpg",
      title: "Email Us",
      type: "email",
      details: ["info@eagleinfoglobal.com", "eagleinfoglobal@gmail.com", "Quick Response"],
      emails: ["info@eagleinfoglobal.com", "eagleinfoglobal@gmail.com"],
      action: "Send Email",
      href: "mailto:info@eagleinfoglobal.com"
    },
    {
      image: "../images/livechat.jpg",
      title: "Live Chat",
      details: ["Instant Support", "Monday - Sunday", "9 AM - 6 PM EST"],
      action: "Start Chat",
      href: "https://wa.me/919840334320?text=Hello%20I%20need%20support"
    }
  ];

  const services = [
    "Business Consultancy", "Land Development", "Financial Services",
    "Export Services", "Bank Loans", "Investment Advisory", "Other"
  ];

  const officeLocations = [
    {
      city: "Chennai",
      country: "India",
      address: "No.1, Venkatraman Street, First Floor Velachery Main Road, Rajakilpakkam, Chennai-600073.",
      phone: "+91 90877 72227 / +91 98403 34320",
      coordinates: { lat: 12.9230, lng: 80.15106 },
      mapUrl: "https://www.google.com/maps/place/85,+Velachery+-+Tambaram+Main+Rd,+Sabai+Colony,+Selaiyur,+Rajakilpakkam,+Chennai,+Tamil+Nadu+600073"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(''); // Reset status

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitStatus('success');
      // Reset form on success
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error("Submission failed:", error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

 const validateForm = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return formData.name && 
         emailRegex.test(formData.email) && 
         formData.message;
};

  return (
    <div className="contact">
{/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          
          {/* Smooth Geometric Wave Overlay Mask */}
          <div className="low-poly-mesh-overlay"></div>

          <div className="floating-shapes">
            <div className="eagle-image">
              <img src="/images/eagle.png" alt="Eagle" />
            </div>
          </div>
        </div>
        <div className="container">
          <div id="animate-hero" className={`contact-hero-content ${isVisible['animate-hero'] ? 'animate-fade-up' : ''}`}>
            <div className="flip-container">
              <h1 className="contact-hero-title">Get In Touch</h1>
            </div>
            <p className="contact-hero-subtitle">
              Ready to transform your business?<br />
              Let's start the conversation today.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="contact-info-section">
        <div className="container">
          <div id="animate-info-header" className={`section-header ${isVisible['animate-info-header'] ? 'animate-fade-up' : ''}`}>
            <h2 className="section-title">How Can We Help You?</h2>
            <p className="section-description">Multiple ways to connect with our expert team</p>
          </div>

          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                id={`animate-info-${index}`}
                className={`contact-info-card ${isVisible[`animate-info-${index}`] ? 'animate-fade-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="info-icon">
                  <img src={info.image} alt={info.title} />
                </div>
                <h3 className="info-title">{info.title}</h3>
                <div className="info-details">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="info-detail">
                      {info.type === "call" && info.phones && info.phones[idx] ? (
                        <a href={`tel:${info.phones[idx]}`} className="phone-link">{detail}</a>
                      ) : info.type === "email" && info.emails && info.emails[idx] ? (
                        <a href={`mailto:${info.emails[idx]}`} className="email-link">{detail}</a>
                      ) : (detail)}
                    </p>
                  ))}
                </div>
                {info.href && (
                  <a href={info.href} className="info-action-btn" target={info.title === "Live Chat" ? "_self" : "_blank"} rel="noopener noreferrer">
                    {info.action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="contact-form-section" >
        <div className="container">
          <div className="form-container-grid">
            <div id="animate-form" className={`form-container ${isVisible['animate-form'] ? 'animate-fade-left' : ''}`}>
              <h2 className="form-title">Send Us a Message</h2>
              <p className="form-description">Fill out the form below and we'll get back to you within 24 hours.</p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="form-input" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Interest</label>
                  <select id="service" name="service" value={formData.service} onChange={handleInputChange} className="form-select">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows="5" className="form-textarea" placeholder="Tell us about your project or requirements..." required></textarea>
                </div>

                <button type="submit" disabled={!validateForm() || isSubmitting} className={`form-submit-btn ${!validateForm() ? 'disabled' : ''}`}>
                  {isSubmitting ? <span className="loading-spinner">⏳ Sending...</span> : 'Send Message'}
                </button>

                {submitStatus === 'success' && <div className="form-message success">✅ Thank you! Message sent.</div>}
                {submitStatus === 'error' && <div className="form-message error">❌ Error sending message.</div>}
              </form>
            </div>

            <div id="animate-form-visual" className={`form-visual ${isVisible['animate-form-visual'] ? 'animate-fade-right' : ''}`}>
              <div className="visual-content">
                <div className="floating-form-elements">
                  <div className="form-element element-1">
                    <img src="../images/verified.jpg" alt="verified" />
                  </div>
                  <div className="form-element element-2">
                    <img src="../images/certify.jpg" alt="certified" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="office-locations">
        <div className="container">
          <div id="animate-locations-header" className={`section-header ${isVisible['animate-locations-header'] ? 'animate-fade-up' : ''}`}>
            <h2 className="section-title">Our Global Offices</h2>
            <p className="section-description">Find us in major business hubs around the world</p>
          </div>
          <div className="locations-grid">
            {officeLocations.map((location, index) => (
              <div key={index} id={`animate-location-${index}`} className={`location-card ${isVisible[`animate-location-${index}`] ? 'animate-fade-up' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="location-header">
                  <h3 className="location-city">{location.city}</h3>
                  <span className="location-country">{location.country}</span>
                </div>
                <div className="location-details">
                  <div className="location-item">
                    <span className="location-icon"><img src="../images/location.jpg" alt="location" /></span>
                    <span className="location-text">{location.address}</span>
                  </div>
                  <div className="location-item">
                    <span className="location-icon"><img src="../images/call.jpg" alt="Phone" /></span>
                    <span className="location-text">{location.phone}</span>
                  </div>
                </div>
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="location-btn">View on Map</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div id="animate-faq-header" className={`section-header ${isVisible['animate-faq-header'] ? 'animate-fade-up' : ''}`}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">Quick answers to common questions about our services</p>
          </div>
          <div id="animate-faq-content" className={`faq-content ${isVisible['animate-faq-content'] ? 'animate-fade-up' : ''}`}>
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">How quickly can you respond?</h3>
                <p className="faq-answer">Within 24 hours during business days.</p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Do you offer free consultations?</h3>
                <p className="faq-answer">Yes, we provide complimentary 30-minute consultations.</p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Which industries do you specialize in?</h3>
                <p className="faq-answer">Manufacturing, technology, healthcare, and international trade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="thank-you-section">
        <h2 className="section-title">Thank You !</h2>
      </section>
    </div>
  );
}

export default Contact;
