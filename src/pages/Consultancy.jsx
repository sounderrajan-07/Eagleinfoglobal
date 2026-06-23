import { useState, useEffect } from 'react';
import './Consultancy.css';
import { useNavigate } from 'react-router-dom';

function Consultancy() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedService, setSelectedService] = useState(0);
  const navigate = useNavigate();

  const consultancyServices = [
    {
      title: "Consultancy Global Carees",
      icon: "/images/Consultancy/career.jpg",
      description: "We connect global talent with international opportunities through expert guidance, seamless placements, and complete career support.",
      features: ["Global Placements", "Expert Guidance", "Personalized Matching", "Hiring Network"],
      benefits: ["Career Growth", "Salary Boost", "Work Permit", "Global Exposure"],
      process: ["Profile Review", "Job Matching", "Permit Support", "Final Placement"],
      imageSection: { image: "/images/Consultancy/case-passport.png" }
    },

    {
      title: "Strategic Business Planning",
      icon: "/images/Consultancy/expert.jpg",
      description: "Comprehensive strategic planning to drive your business forward with clear objectives and actionable roadmaps.",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Strategy", "Risk Assessment"],
      benefits: ["Increased Revenue", "Market Leadership", "Operational Efficiency", "Sustainable Growth"],
      process: ["Discovery Phase", "Strategy Development", "Implementation Planning", "Performance Monitoring"],
      imageSection: { image: "/images/Consultancy/case-passport.png" }
    },
    {
      title: "Digital Transformation",
      icon: "/images/Consultancy/digital.jpg",
      description: "Transform your business operations with cutting-edge digital solutions and modern technology integration.",
      features: ["Technology Assessment", "Digital Strategy", "Process Automation", "Change Management"],
      benefits: ["Enhanced Productivity", "Cost Reduction", "Better Customer Experience", "Competitive Advantage"],
      process: ["Current State Analysis", "Digital Roadmap", "Technology Implementation", "Training & Support"],
      imageSection: { image: "/images/Consultancy/case-passport.png" }
    },
    {
      title: "Market Entry Strategy",
      icon: "/images/about/globe.jpg",
      description: "Expert guidance for entering new markets with minimal risk and maximum impact.",
      features: ["Market Research", "Entry Strategy", "Local Partnerships", "Regulatory Compliance"],
      benefits: ["Faster Market Entry", "Reduced Risk", "Local Market Knowledge", "Regulatory Compliance"],
      process: ["Market Assessment", "Entry Planning", "Partnership Development", "Launch Execution"],
      imageSection: { image: "/images/Consultancy/case-passport.png" }
    },
    {
      title: "Operational Excellence",
      icon: "/images/Consultancy/settings.jpg",
      description: "Optimize your operations for maximum efficiency, quality, and profitability.",
      features: ["Process Optimization", "Quality Management", "Supply Chain", "Performance Metrics"],
      benefits: ["Cost Savings", "Quality Improvement", "Faster Delivery", "Customer Satisfaction"],
      process: ["Process Mapping", "Gap Analysis", "Optimization Design", "Implementation Support"],
      imageSection: { image: "/images/Consultancy/case-passport.png" }
    }
  ];

  const successStories = [
    {
      id: "techcorp",
      company: "TechCorp Industries",
      industry: "Technology",
      challenge: "Digital transformation across 15 global offices",
      solution: "Implemented cloud-based infrastructure and automated workflows",
      results: ["40% increase in productivity", "60% reduction in operational costs", "95% employee satisfaction"],
      image: "/images/Consultancy/success.jpg"
    },
    {
      id: "global-mfg",
      company: "Global Manufacturing Ltd",
      industry: "Manufacturing",
      challenge: "Market expansion into Asian markets",
      solution: "Comprehensive market entry strategy with local partnerships",
      results: ["Successfully entered 5 new markets", "200% revenue growth", "Established 12 local partnerships"],
      image: "/images/Consultancy/technology.jpg"
    },
    {
      id: "healthcare-inc",
      company: "Healthcare Solutions Inc",
      industry: "Healthcare",
      challenge: "Operational efficiency and regulatory compliance",
      solution: "Process optimization and compliance framework implementation",
      results: ["50% faster processing times", "100% regulatory compliance", "30% cost reduction"],
      image: "/images/Consultancy/healthcare.jpg"
    }
  ];

  const expertTeam = [
    {
      name: "Megananthan",
      role: "Account Manager",
      expertise: "Strategic Planning & Market Analysis",
      experience: "15+ years",
      achievements: ["M.Com MBA", "Former Partner", "200+ successful projects"],
      image: "/images/Consultancy/coat.jpg"
    },
    {
      name: "Palanivel",
      role: "Consultancy Consultant Manager",
      expertise: "Technology Strategy & Innovation",
      experience: "12+ years",
      achievements: ["MIT Technology Graduate", "25 years of Experience", "Abroad Job Organizer"],
      image: "/images/Consultancy/coat.jpg"
    },
    {
      name: "Selvam",
      role: "Legal Advisor",
      expertise: "Madras High Court",
      experience: "18+ years",
      achievements: ["BA.BL", "High Court", "300+ process improvements"],
      image: "/images/Consultancy/coat.jpg"
    }
  ];

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
    <div className="consultancy">

      {/* Hero */}
      <section className="consultancy-hero">
        <div className="about-hero-background">
          <div className="floating-shapes">
            <div className="eagle-image">
              <img src="/images/eagle.png" alt="Eagle" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content-grid">
            <div
              id="animate-hero-content"
              className={`hero-content ${isVisible['animate-hero-content'] ? 'animate-fade-left' : ''}`}
            >
              <div className="flip-container">
                <h1 className="Consultancy-hero-title">Strategic Business Consultancy</h1>
              </div>
              <p className="hero-subtitle">
                Transform your business with expert consulting services that drive growth, <br /> efficiency and sustainable success.
              </p>
              <button className="btn1-primary hero-cta">Start Your Transformation</button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Analytics Section */}
      <section className="business-analytics-section">
        <div className="container">

          <div
            id="animate-analytics"
            className={`analytics-wrapper ${isVisible['animate-analytics'] ? 'animate-fade-up' : ''
              }`}
          >

            {/* LEFT SIDE - VIDEO */}
            <div className="analytics-left">
              <div className="video-container">
                <video
                  src="/videos/globe.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              </div>
            </div>

            {/* RIGHT SIDE - DASHBOARD */}
            <div className="analytics-right">
              <div className="floating-dashboard">

                <div className="dashboard-left">
                  <div className="dashboard-header">
                    <span className="dashboard-title">Business Analytics</span>
                    <span className="dashboard-status">🟢 Live</span>
                  </div>

                  <div className="dashboard-metrics">
                    <div className="metric">
                      <span className="metric-value">+45%</span>
                      <span className="metric-label">Rev.Growth</span>
                    </div>

                    <div className="metric">
                      <span className="metric-value">+32%</span>
                      <span className="metric-label">Efficiency</span>
                    </div>

                    <div className="metric">
                      <span className="metric-value">+28%</span>
                      <span className="metric-label">Market Share</span>
                    </div>
                  </div>
                </div>

                <div className="dashboard-right">
                  <div className="dashboard-chart">
                    <img src="/images/Consultancy/growth1.jpg" alt="Dashboard Chart" />
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="services-showcase">
        <div className="container">
          <div
            id="animate-services-header"
            className={`section-header ${isVisible['animate-services-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Our Consultancy Services</h2>
            <p className="section-description">
              Consulting solutions designed to address your business challenges
            </p>
          </div>

          <div className="services-container">
            <div className="services-tabs">
              {consultancyServices.map((service, index) => (
                <button
                  key={index}
                  className={`service-tab ${selectedService === index ? 'active' : ''}`}
                  onClick={() => setSelectedService(index)}
                >
                  <span className="tab-icon">
                    <img src={service.icon} alt={service.title} />
                  </span>
                  <span className="tab-title">{service.title}</span>
                </button>
              ))}
            </div>

            <div
              id="animate-service-content"
              className={`service-content ${isVisible['animate-service-content'] ? 'animate-fade-up' : ''}`}
            >
              <div className="service-main">
                <div className="service-header">
                  <span className="service-icon">
                    <img src={consultancyServices[selectedService].icon} alt="icon" />
                  </span>
                  <h3 className="service-title">
                    {consultancyServices[selectedService].title}
                  </h3>
                </div>

                <p className="service-description">
                  {consultancyServices[selectedService].description}
                </p>

                <div className="service-details">
                  <div className="detail-section">
                    <h4 className="detail-title">Key Features</h4>
                    <ul className="detail-list">
                      {consultancyServices[selectedService].features.map((feature, idx) => (
                        <li key={idx} className="detail-item">
                          <span className="item-bullet">
                            <img src="/images/Consultancy/points.jpg" alt="points" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4 className="detail-title">Benefits</h4>
                    <ul className="detail-list">
                      {consultancyServices[selectedService].benefits.map((benefit, idx) => (
                        <li key={idx} className="detail-item">
                          <span className="item-bullet">
                            <img src="/images/Consultancy/points.jpg" alt="points" />
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4 className="detail-title">Our Process</h4>
                    <ul className="detail-list">
                      {consultancyServices[selectedService].process.map((step, idx) => (
                        <li key={idx} className="detail-item">
                          <span className="item-bullet">
                            <img src="/images/Consultancy/points.jpg" alt="points" />
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Image Section */}
                  <div className="detail-image-section">
                    <img
                      src={consultancyServices[selectedService].imageSection.image}
                      alt={consultancyServices[selectedService].imageSection.title}
                      className="detail-image"
                    />
                  </div>
                </div>

                <button className="btn-primary service-cta">
                  Get Started with This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="success-stories">
        <div className="container">
          <div
            id="animate-stories-header"
            className={`section-header ${isVisible["animate-stories-header"] ? "animate-fade-up" : ""}`}
          >
            <h2 className="section-title">Success Stories</h2>
            <p className="section-description">
              Real results from our client partnerships across diverse industries
            </p>
          </div>

          <div className="stories-grid">
            {successStories.map((story, index) => (
              <div
                key={story.id}
                id={`animate-story-${index}`}
                className={`story-card ${isVisible[`animate-story-${index}`] ? "animate-fade-up" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="story-image">
                  <img src={story.image} alt={story.company} />
                  <div className="image-overlay">
                    <span className="industry-tag">{story.industry}</span>
                  </div>
                </div>

                <div className="story-content">
                  <h3 className="story-company">{story.company}</h3>

                  <div className="story-challenge">
                    <h4 className="challenge-title">Challenge</h4>
                    <p className="challenge-text">{story.challenge}</p>
                  </div>

                  <div className="story-solution">
                    <h4 className="solution-title">Solution</h4>
                    <p className="solution-text">{story.solution}</p>
                  </div>

                  <div className="story-results">
                    <h4 className="results-title">Results</h4>
                    <ul className="results-list">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="result-item">
                          <span className="result-bullet">
                            <img src="/images/Consultancy/points.jpg" alt="points" />
                          </span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Details */}
      <section className="client-details">
        <div className="container">
          <div
            id="animate-client-header"
            className={`section-header ${isVisible['animate-client-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Client Details</h2>
            <p className="section-description">
              Here you can view information about our valued clients and their engagement with our services.
            </p>
          </div>

          <div className="client-bottom-image-container">
            <img
              src="/images/Consultancy/client.jpg"
              alt="Client details illustration"
              className="client-bottom-image"
            />
          </div>
        </div>
      </section>

      {/* Expert Team */}
      <section className="expert-team">
        <div className="container">
          <div
            id="animate-team-header"
            className={`section-header ${isVisible['animate-team-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Meet Our Expert Consultants</h2>
            <p className="section-description">
              Industry leaders with proven track records in driving business transformation
            </p>
          </div>

          <div className="team-grid">
            {expertTeam.map((expert, index) => (
              <div
                key={index}
                id={`animate-expert-${index}`}
                className={`expert-card ${isVisible[`animate-expert-${index}`] ? 'animate-fade-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="expert-image">
                  <img src={expert.image} alt={expert.name} />
                  <div className="expertise-badge">{expert.experience}</div>
                </div>

                <div className="expert-info">
                  <h3 className="expert-name">{expert.name}</h3>
                  <p className="expert-role">{expert.role}</p>
                  <p className="expert-expertise">{expert.expertise}</p>

                  <div className="expert-achievements">
                    <h4 className="achievements-title">Key Achievements</h4>
                    <ul className="achievements-list">
                      {expert.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          <span className="achievement-bullet">
                            <img src="/images/Consultancy/medal.jpg" alt="medal" />
                          </span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="consultancy-cta">
        <div className="container">
          <div
            id="animate-cta"
            className={`cta-content ${isVisible['animate-cta'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Schedule a free consultation with our experts and discover how we can help you achieve your business goals.
            </p>

            <div className="cta-benefits">
              {["Free Initial Consultation", "Customized Solutions", "Proven Results"].map((text, i) => (
                <div className="benefit-item" key={i}>
                  <span className="benefit-icon">
                    <img src="/images/Consultancy/Right.jpg" alt="Right" />
                  </span>
                  <span className="benefit-text">{text}</span>
                </div>
              ))}
            </div>

            <div className="cta-buttons">
              <button
                className="btn1-primary"
                onClick={() => navigate('/contact#contact-form')}
              >
                Schedule Free Consultation

              </button>

              <button
                className="btn2-secondary"
                onClick={() => navigate('/contact#contact-form')}
              >
                Download Service Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Consultancy;