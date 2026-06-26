import { useState, useEffect } from 'react';
import './Land.css';
import { useNavigate } from 'react-router-dom';
function Land() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedProject, setSelectedProject] = useState(0);
  const navigate = useNavigate();
  const landServices = [
    {
      icon: <img src="/images/Land/land.jpg" alt="Land Development" />,
      title: "Land Development",
      description: "land development services from planning to execution",
      features: ["Site Planning", "Infrastructure Development", "Zoning Compliance", "Environmental Assessment"]
    },
    {
      icon: <img src="/images/Land/investment.jpg" alt="Investment Analysis" />,
      title: "Investment Analysis",
      description: "Expert analysis to maximize your land investment potential",
      features: ["Market Research", "ROI Analysis", "Risk Assessment", "Investment Strategy"]
    },
    {
      icon: <img src="/images/Land/property.jpg" alt="Property Acquisition" />,
      title: "Property Acquisition",
      description: "Strategic property acquisition services for investment outcomes",
      features: ["Property Sourcing", "Due Diligence", "Negotiation", "Legal Support"]
    },
    {
      icon: <img src="/images/Land/sustainable.jpg" alt="Sustainable Development" />,
      title: "Sustainable Development",
      description: "Eco-friendly development solutions for long-term value creation",
      features: ["Green Building", "Sustainability Planning", "Energy Efficiency", "Environmental Impact"]
    }
  ];

  const developmentProjects = [
    {
      name: "Building Promoters",
      location: "Chennai",
      size: "250 acres",
      status: "Completed",
      investment: "₹120M",
      roi: "35%",
      image: "/images/building.jpg",
      description: "A state-of-the-art business park featuring modern office spaces, retail outlets, and recreational facilities.",
      highlights: ["LEED Certified Buildings", "Smart Infrastructure", "25% Green Space", "Mixed-Use Development"]
    },
  ];

  const investmentOpportunities = [
    {
      title: "Prime Commercial Land",
      location: "Chengalpattu,Tamilnadu",
      size: "50 acres",
      price: "₹25M",
      potential: "High Growth Area",
      zoning: "Mixed-Use Commercial",
      highlights: ["Downtown Location", "Transportation Hub", "High Foot Traffic", "Development Ready"]
    },
    {
      title: "Residential Development Site",
      location: "Chengalpattu,Tamilnadu",
      size: "75 acres",
      price: "₹18M",
      potential: "Residential Expansion",
      zoning: "High-Density Residential",
      highlights: ["Growing Market", "School District", "Infrastructure Ready", "Environmental Cleared"]
    },
    {
      title: "Industrial Land Parcel",
      location: "Chengalpattu,Tamilnadu",
      size: "12 acres",
      price: "₹30M",
      potential: "Industrial Growth",
      zoning: "Heavy Industrial",
      highlights: ["Port Access", "Rail Connectivity", "Utilities Available", "Tax Incentives"]
    },
  ];

  const developmentProcess = [
    {
      stepImage: "/images/pin.jpg",
      title: "Site Analysis & Planning",
      description: "Comprehensive site evaluation including environmental, geological, and market analysis.",
      duration: "2-4 months",
      deliverables: ["Site Survey", "Environmental Assessment", "Market Analysis", "Preliminary Design"]
    },
    {
      stepImage: "/images/pin.jpg",
      title: "Regulatory Approval",
      description: "Navigate zoning, permits, and regulatory requirements for smooth project approval.",
      duration: "3-6 months",
      deliverables: ["Zoning Approval", "Building Permits", "Environmental Clearance", "Utility Connections"]
    },
    {
      stepImage: "/images/pin.jpg",
      title: "Infrastructure Development",
      description: "Build essential infrastructure including roads, utilities, and site preparation.",
      duration: "6-12 months",
      deliverables: ["Site Preparation", "Utility Installation", "Road Construction", "Landscaping"]
    },
    {
      stepImage: "/images/pin.jpg",
      title: "Construction & Delivery",
      description: "Execute construction plans with quality control and timely project delivery.",
      duration: "12-24 months",
      deliverables: ["Building Construction", "Quality Assurance", "Final Inspections", "Project Handover"]
    }
  ];

  const financialExperts = [
    {
      name: "Megananthan",
      role: "Account Manager",
      expertise: "Strategic Planning & Market Analysis",
      experience: "5+ years",
      credentials: ["CFA", "MBA Finance", "CFP"],
      achievements: ["M.Com MBA", "Former Partner", "200+ successful projects"],
      image: "/images/Land/coat.jpg"
    },
    {
      name: "K E Hari Narayanan",
      role: "Land Advisory Manager",
      expertise: "17 years of Experience",
      experience: "15+ years",
      credentials: ["CIMA", "CPA", "CHFC"],
      achievements: ["1500 Clients", "Excellence Awards", "Layout Specilist"],
      image: "/images/Land/coat.jpg"
    },
    {
      name: "Siva kumar",
      role: "Legal Advisor",
      expertise: "Madras High Court",
      experience: "18+ years",
      credentials: ["CFA", "MBA", "CIRA"],
      achievements: ["BA.BL", "High Court", "300+ process improvements"],
      image: "/images/Land/coat.jpg"
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
    <div className="land">
{/* Hero Section */}
      <section className="land-hero">
        <div className="land-hero-background">
          
          {/* Same perfect full-screen low-poly mesh overlay */}
          <div className="low-poly-mesh-overlay"></div>

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
              className={`hero-content ${isVisible['animate-hero-content'] ? 'animate-fade-up' : ''}`}
            >
              <div className="flip-container">
                <h1 className="land-hero-title">Land Development & Investment</h1>
              </div>

              <p className="hero-subtitle">
                Transform raw land into valuable assets with our comprehensive <br />
                development and investment services.
              </p>

              <div className="hero-features">
                <div className="feature-item">
                  <span className="feature-icon">
                    <img src="/images/Land/expert.jpg" alt="Strategic Planning" />
                  </span>
                  <span className="feature-text">Strategic Planning</span>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">
                    <img src="/images/Land/investment.jpg" alt="Investment Analysis" />
                  </span>
                  <span className="feature-text">Investment Analysis</span>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">
                    <img src="/images/Land/land.jpg" alt="Full Development" />
                  </span>
                  <span className="feature-text">Full Development</span>
                </div>

                <div className="feature-item">
                  <span className="feature-icon">
                    <img src="/images/Land/value.jpg" alt="Value Maximization" />
                  </span>
                  <span className="feature-text">Value Maximization</span>
                </div>
              </div>

              <div className="hero-buttons">
                <button className="btn1-primary">Explore Opportunities</button>
                <button className="btn2-secondary">Download Portfolio</button>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section id="another-section">
  <h2>City Development Overview</h2>
  <p>
    The city is rapidly evolving through smart planning, modern infrastructure,
    and sustainable development to create a future-ready urban environment.
  </p>

  <div 
    id="animate-hero-visual"
    className={`hero-visual ${isVisible['animate-hero-visual'] ? 'animate-fade-right' : ''}`}
  >
    <div className="development-visualization">

      {/* Commercial Zone */}
      <div className="land-plot plot-1">
        <div className="plot-label">Commercial Zone</div>
        {/* <div className="plot-buildings">
          <img src="/images/Land/commercial1.jpg" alt="building" className="building tall" />
          <img src="/images/Land/commercial2.jpg" alt="building" className="building medium" />
          <img src="/images/Land/commercial3.jpg" alt="building" className="building short" />
        </div> */}
      </div>

      {/* Residential Area */}
      <div className="land-plot plot-2">
        <div className="plot-label">Residential Area</div>
        {/* <div className="plot-houses">
          <img src="/images/Land/house1.jpg" alt="house" className="house" />
          <img src="/images/Land/house2.jpg" alt="house" className="house" />
          <img src="/images/Land/house3.jpg" alt="house" className="house" />
        </div> */}
      </div>

      {/* Green Space */}
      <div className="land-plot plot-3">
        <div className="plot-label">Green Space</div>
        {/* <div className="plot-landscape">
          <img src="/images/Land/tree.png" alt="tree" className="tree" />
          <img src="/images/Land/tree.png" alt="tree" className="tree" />
          <img src="/images/Land/park.jpg" alt="park" className="park" />
        </div> */}
      </div>

    </div>
  </div>
</section>
     {/* Services Section */}
<section className="land-services">
  <div className="container">
    <div 
      id="animate-services-header"
      className={`section-header ${isVisible['animate-services-header'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="section-title">Our Land Development Services</h2>
      <p className="section-description">
        Comprehensive solutions for every stage of land development and investment
      </p>
    </div>

    <div className="services-grid">
      {landServices.map((service, index) => (
        <div
          key={index}
          id={`animate-service-${index}`}
          className={`service-card ${isVisible[`animate-service-${index}`] ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="service-icon-container">
            <span className="service1-icon">{service.icon}</span>
          </div>

          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>

          <ul className="service-features">
            {service.features.map((feature, idx) => (
              <li key={idx} className="feature-item-list">
                <span className="feature-bullet">
                  <img src="/images/Land/points.jpg" alt="points" />
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <button className="service-btn">Learn More</button>
        </div>
      ))}
    </div>
  </div>
</section>
     {/* Development Projects Showcase */}
<section className="projects-showcase">
  <div className="container">
    <div 
      id="animate-projects-header"
      className={`section-header ${isVisible['animate-projects-header'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="section-title">Featured Development Projects</h2>
      <p className="section-description">
        Successful land development projects showcasing our expertise and results
      </p>
    </div>

    <div className="projects-container">
      <div className="project-tabs">
        {developmentProjects.map((project, index) => (
          <button
            key={index}
            className={`project-tab ${selectedProject === index ? 'active' : ''}`}
            onClick={() => setSelectedProject(index)}
          >
            <div className="tab-info">
              <span className="tab-name">{project.name}</span>
              <span className="tab-location">{project.location}</span>
            </div>
          </button>
        ))}
      </div>

      <div 
        id="animate-project-details"
        className={`project-details ${isVisible['animate-project-details'] ? 'animate-fade-up' : ''}`}
      >
        <div className="project-main">
          
          <div className="project-image">
            <img 
              src={developmentProjects[selectedProject].image} 
              alt={developmentProjects[selectedProject].name} 
            />
            <div className="project-overlay">
              <span className="project-type">
                {developmentProjects[selectedProject].type}
              </span>
            </div>
          </div>

          <div className="project-info">
            <h3 className="project-name">
              {developmentProjects[selectedProject].name}
            </h3>

            <p className="project-location">
              <img src="/images/Land/location.jpg" alt="location" />
              {developmentProjects[selectedProject].location}
            </p>

            <p className="project-description">
              {developmentProjects[selectedProject].description}
            </p>
            
            <div className="project-stats">
              <div className="stat-item">
                <span className="stat-label">Size</span>
                <span className="stat-value">
                  {developmentProjects[selectedProject].size}
                </span>
              </div>

              <div className="stat-item">
                <span className="stat-label">Investment</span>
                <span className="stat-value">
                  {developmentProjects[selectedProject].investment}
                </span>
              </div>

              <div className="stat-item">
                <span className="stat-label">ROI</span>
                <span className="stat-value">
                  {developmentProjects[selectedProject].roi}
                </span>
              </div>
            </div>

            <div className="project-highlights">
              <h4 className="highlights-title">Key Highlights</h4>
              
              <div className="highlights-grid">
                {developmentProjects[selectedProject].highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-bullet">
                      <img src="/images/Land/points.jpg" alt="points" />
                    </span>
                    {highlight}
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
{/* Investment Opportunities */}
<section className="investment-opportunities">
  <div className="container">
    <div 
      id="animate-opportunities-header"
      className={`section-header ${isVisible['animate-opportunities-header'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="section-title">Current Investment Opportunities</h2>
      <p className="section-description">
        Premium land investment opportunities with high growth potential
      </p>
    </div>

    <div className="opportunities-grid">
      {investmentOpportunities.map((opportunity, index) => (
        <div
          key={index}
          id={`animate-opportunity-${index}`}
          className={`opportunity-card ${isVisible[`animate-opportunity-${index}`] ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >

          <div className="product-image">
            <img src="/images/pin.jpg" alt="pin" />
          </div>

          <div className="opportunity-header">
            <h3 className="opportunity-title">{opportunity.title}</h3>
            <span className="opportunity-price">{opportunity.price}</span>
          </div>

          <div className="opportunity-details">

            <div className="detail-row">
              <span className="detail-label">
                <img src="/images/Land/location.jpg" alt="location" />
                Location
              </span>
              <span className="detail-value">{opportunity.location}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">
                <img src="/images/Land/scale.jpg" alt="size" />
                Size
              </span>
              <span className="detail-value">{opportunity.size}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">
                <img src="/images/Land/land.jpg" alt="zone" />
                Zoning
              </span>
              <span className="detail-value">{opportunity.zoning}</span>
            </div>

            <div className="detail-row">
              <span className="detail-label">
                <img src="/images/Land/growth.jpg" alt="potential" />
                Potential
              </span>
              <span className="detail-value">{opportunity.potential}</span>
            </div>

          </div>

          <div className="opportunity-highlights">
            <h4 className="highlights-title">Key Features</h4>
            <ul className="highlights-list">
              {opportunity.highlights.map((highlight, idx) => (
                <li key={idx} className="highlight-item-list">
                  <span className="highlight-check">
                    <img src="/images/Land/points.jpg" alt="points" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <button className="opportunity-btn">Request Information</button>

        </div>
      ))}
    </div>
  </div>
</section>

      {/* Development Process */}
<section className="development-process">
  <div className="container">
    <div 
      id="animate-process-header"
      className={`section-header ${isVisible['animate-process-header'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="section-title">Our Development Process</h2>
      <p className="section-description">
        A proven methodology that ensures successful project delivery from concept to completion
      </p>
    </div>

    <div className="process-grid">
      {developmentProcess.map((phase, index) => (
        <div
          key={index}
          id={`animate-phase-${index}`}
          className={`process-phase ${isVisible[`animate-phase-${index}`] ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          
          <div className="phase-number">
            {phase.phase}
            <img src={phase.stepImage} alt="step" className="step-img" />
          </div>

          <div className="phase-content">
            <h3 className="phase-title">{phase.title}</h3>
            <p className="phase-description">{phase.description}</p>

            <div className="phase-duration">
              <span className="duration-icon">
                <img src="/images/Land/alarm.jpg" alt="clock" />
              </span>
              <span className="duration-text">{phase.duration}</span>
            </div>

            <div className="phase-deliverables">
              <h4 className="deliverables-title">Deliverables</h4>
              
              <ul className="deliverables-list">
                {phase.deliverables.map((deliverable, idx) => (
                  <li key={idx} className="deliverable-item">
                    <span className="deliverable-check">
                      <img src="/images/Land/points.jpg" alt="points" />
                    </span>
                    {deliverable}
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
    {/* Expert Team */}
<section className="financial-experts">
  <div className="container">
    <div 
      id="animate-experts-header"
      className={`section-header ${isVisible['animate-experts-header'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="section-title">Our Lands Experts</h2>
      <p className="section-description">
        Meet our team of certified financial professionals dedicated to your success
      </p>
    </div>

    <div className="experts-grid">
      {financialExperts.map((expert, index) => (
        <div
          key={index}
          id={`animate-expert-${index}`}
          className={`expert-card ${isVisible[`animate-expert-${index}`] ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          
          <div className="expert-image">
            <img src={expert.image} alt={expert.name} />
            <div className="experience-badge">{expert.experience}</div>
          </div>
          
          <div className="expert-info">
            <h3 className="expert-name">{expert.name}</h3>
            <p className="expert-role">{expert.role}</p>
            <p className="expert-expertise">{expert.expertise}</p>
            
            <div className="expert-credentials">
              <h4 className="credentials-title">Credentials</h4>
              <div className="credentials-list">
                {expert.credentials.map((credential, idx) => (
                  <span key={idx} className="credential-badge">
                    {credential}
                  </span>
                ))}
              </div>
            </div>

            <div className="expert-achievements">
              <h4 className="achievements-title">Key Achievements</h4>
              
              <ul className="achievements-list">
                {expert.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">
                    <span className="achievement-bullet">
                      <img src="/images/medal.jpg" alt="medal" />
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
      {/* CTA Section */}
<section className="land-cta">
  <div className="container">
    <div 
      id="animate-cta"
      className={`cta-content ${isVisible['animate-cta'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="cta-title">Ready to Develop Your Land Investment?</h2>

      <p className="cta-description">
        Partner with us to unlock the full potential of your land assets through strategic development and expert guidance.
      </p>

      <div className="cta-features">

        <div className="cta-feature">
          <span className="cta-icon">
            <img src="/images/Land/expert.jpg" alt="Strategic Planning" />
          </span>
          <span className="cta-text">Strategic Planning</span>
        </div>

        <div className="cta-feature">
          <span className="cta-icon">
            <img src="/images/Land/wealth.jpg" alt="Expert Guidance" />
          </span>
          <span className="cta-text">Expert Guidance</span>
        </div>

        <div className="cta-feature">
          <span className="cta-icon">
            <img src="/images/Land/growth.jpg" alt="Maximum ROI" />
          </span>
          <span className="cta-text">Maximum ROI</span>
        </div>

      </div>

       <div className="cta-buttons">
      <button
        className="btn1-primary"
        onClick={() => navigate('/contact#contact-form')}
      >
        Start Your Project

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

export default Land;
