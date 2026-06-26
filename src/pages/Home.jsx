import { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

  // ✅ Services (using public paths)
  const services = [
    {
      icon: <img src="/images/Home/Business.jpg" alt="Business Consultancy" />,
      title: "Business Consultancy",
      description: "Strategic guidance for sustainable growth and market expansion.",
      features: ["Market Analysis", "Strategic Planning", "Risk Assessment"],
    },
    {
      icon: <img src="/images/Home/Land.jpg" alt="Land Development" />,
      title: "Land Development",
      description: "Comprehensive land development and investment opportunities.",
      features: ["Site Analysis", "Development Planning", "Investment Advisory"]
    },
    {
      icon: <img src="/images/Home/finance.jpg" alt="Financial Services" />,
      title: "Financial Services",
      description: "Tailored financial solutions for your business needs.",
      features: ["Investment Planning", "Financial Advisory", "Risk Management"]
    },
    {
      icon: <img src="/images/Home/globe.jpg" alt="Export Services" />,
      title: "Export Services",
      description: "Facilitating global trade and international market access.",
      features: ["Trade Documentation", "Market Entry", "Logistics Support"]
    },
    {
      icon: <img src="/images/Home/bank.jpg" alt="Bank Loans" />,
      title: "Bank Loans",
      description: "Securing optimal financing solutions for your projects.",
      features: ["Loan Processing", "Credit Assessment", "Financial Structuring"]
    },
    {
      icon: <img src="/images/Home/Investment.jpg" alt="Investment Advisory" />,
      title: "Investment Advisory",
      description: "Expert guidance for smart investment decisions.",
      features: ["Portfolio Management", "Market Research", "Investment Strategy"]
    }
  ];

  // ✅ Stats (using public paths)
  const stats = [
    { number: "500+", label: "Happy Clients", icon: "/images/Home/people.jpg" },
    { number: "50+", label: "Countries Served", icon: "/images/Home/countries.jpg" },
    { number: "15+", label: "Years Experience", icon: "/images/Home/star.jpg" },
    { number: "98%", label: "Success Rate", icon: "/images/Home/calendar.jpg" }
  ];

  // ✅ Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">

      {/* 🔥 Video Hero Section */}
      <section className="video-hero">
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/vedio2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* 📊 Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div
                key={index}
                id={`animate-stat-${index}`}
                className={`stat-card ${
                  isVisible[`animate-stat-${index}`] ? 'animate-fade-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-icon">
                  <img src={stat.icon} alt={stat.label} />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💡 Innovation/Bulb Section */}
      <section className="bulb-section">
        <div className="container">
          <div
            id="animate-bulb-section"
            className={`bulb-container ${
              isVisible['animate-bulb-section'] ? 'animate-fade-up' : ''
            }`}
          >
            <div className="bulb-image-wrapper">
              <img src="/images/about/bulb-transparent1.png" alt="Innovation and Ideas" className="bulb-image" />
            </div>
            <div className="bulb-text-wrapper">
              <h2 className="bulb-title">Lighting the Path to Success</h2>
              <p className="bulb-description">
                We bring bright ideas and innovative strategies to illuminate your business potential. Let our expert guidance be the catalyst for your next big breakthrough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🧩 Services Section */}
      <section className="services-section">
        <div className="container">
          <div
            id="animate-services-header"
            className={`section-header ${
              isVisible['animate-services-header'] ? 'animate-fade-up' : ''
            }`}
          >
            <h2 className="section-title">Our Premium Services</h2>
            <p className="section-description">
              Comprehensive solutions tailored to elevate your business to new heights
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                key={index}
                id={`animate-service-${index}`}
                className={`service-card ${
                  isVisible[`animate-service-${index}`] ? 'animate-fade-up' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service1-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <span className="feature-bullet">
                        <img src="/images/Home/points.jpg" alt="points" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div
            id="animate-cta"
            className={`cta-content ${
              isVisible['animate-cta'] ? 'animate-fade-up' : ''
            }`}
          >
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Join hundreds of successful companies that trust Eagle Info Global for their growth journey.
            </p>

            <div className="cta-buttons">
      <button
        className="btn1-primary"
        onClick={() => navigate('/contact#contact-form')}
      >
        Get Started Today

      </button>

      <button
        className="btn2-secondary"
        onClick={() => navigate('/contact#contact-form')}
      >
        Schedule Consultation
      </button>
    </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
