import { useState, useEffect } from 'react';
import './Export.css';
import { useNavigate } from 'react-router-dom';

function Export() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(0);
  const navigate = useNavigate();
  // Products with paths as strings
  const exportProducts = [
    { title: "ghee", image: "/images/export/ghee.jpg", full: true },
    { title: "fruits", image: "/images/export/fruits.jpg" },
    { title: "apple", image: "/images/export/apple.jpg" },
    { title: "gloves", image: "/images/export/gloves.jpg" },
    { title: "onion", image: "/images/export/onion.jpg" },
    { title: "paper", image: "/images/export/paper.jpg" },
    { title: "Red", image: "/images/export/red.jpg" }
  ];

  const exportServices = [
    {
      icon: <img src="/images/about/globe.jpg" alt="Global Market Entry" />,
      title: "Global Market Entry",
      description: "Strategic guidance for entering international markets with comprehensive market analysis and entry strategies.",
      features: ["Market Research", "Regulatory Analysis", "Entry Strategy", "Risk Assessment"],
      benefits: ["Market Access", "Reduced Risk", "Local Expertise", "Faster Entry"]
    },
    {
      icon: <img src="/images/export/application.jpg" alt="Documentation Services" />,
      title: "Documentation Services",
      description: "Complete export documentation support ensuring compliance with international trade regulations.",
      features: ["Export Licenses", "Customs Documentation", "Certificates of Origin", "Shipping Documents"],
      benefits: ["Compliance Assurance", "Time Savings", "Error Reduction", "Expert Support"]
    },
    {
      icon: <img src="/images/export/ship.jpg" alt="Logistics & Shipping" />,
      title: "Logistics & Shipping",
      description: "End-to-end logistics solutions for efficient and cost-effective international shipping.",
      features: ["Freight Forwarding", "Customs Clearance", "Insurance", "Tracking Systems"],
      benefits: ["Cost Optimization", "Reliable Delivery", "Full Visibility", "Risk Coverage"]
    },
    {
      icon: <img src="/images/export/trade.jpg" alt="Trade Finance" />,
      title: "Trade Finance",
      description: "Comprehensive trade finance solutions to support your international business transactions.",
      features: ["Letters of Credit", "Trade Financing", "Currency Hedging", "Payment Solutions"],
      benefits: ["Cash Flow Support", "Risk Mitigation", "Flexible Terms", "Global Banking"]
    },
    {
      icon: <img src="/images/export/legal.jpg" alt="Compliance & Legal" />,
      title: "Compliance & Legal",
      description: "Expert legal support ensuring full compliance with international trade laws and regulations.",
      features: ["Legal Advisory", "Contract Review", "Dispute Resolution", "Regulatory Updates"],
      benefits: ["Legal Protection", "Risk Mitigation", "Expert Guidance", "Peace of Mind"]
    },
    {
      icon: <img src="/images/export/Market.jpg" alt="Market Intelligence" />,
      title: "Market Intelligence",
      description: "In-depth market research and intelligence to inform your export strategy and decisions.",
      features: ["Market Analysis", "Competitor Research", "Trend Analysis", "Opportunity Identification"],
      benefits: ["Informed Decisions", "Competitive Advantage", "Market Insights", "Strategic Planning"]
    }
  ];

  const exportDestinations = [
    {
      country: "United States",
      flag: "🇺🇸",
      marketSize: "$21.4T",
      growthRate: "0.3%",
      keyIndustries: ["Technology", "Healthcare", "Manufacturing", "Agriculture"],
      tradeVolume: "$4.2T",
      opportunities: ["E-commerce Growth", "Infrastructure Investment", "Green Technology", "Healthcare Innovation"],
      requirements: ["FDA Approval", "FCC Certification", "EPA Compliance", "State Regulations"],
      image: "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      country: "European Union",
      flag: "🇪🇺",
      marketSize: "€18.8T",
      growthRate: "0.8%",
      keyIndustries: ["Automotive", "Pharmaceuticals", "Renewable Energy", "Fashion"],
      tradeVolume: "€3.8T",
      opportunities: ["Digital Transformation", "Sustainability Focus", "Aging Population", "Luxury Goods"],
      requirements: ["CE Marking", "GDPR Compliance", "REACH Regulation", "VAT Registration"],
      image: "https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      country: "China",
      flag: "🇨🇳",
      marketSize: "¥14.7T",
      growthRate: "0.1%",
      keyIndustries: ["Electronics", "Textiles", "Machinery", "Chemicals"],
      tradeVolume: "¥4.6T",
      opportunities: ["Middle Class Growth", "Urbanization", "Technology Adoption", "Premium Products"],
      requirements: ["CCC Certification", "Import Licenses", "Quality Standards", "Local Partnerships"],
      image: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      country: "Japan",
      flag: "🇯🇵",
      marketSize: "¥4.9T",
      growthRate: "0.7%",
      keyIndustries: ["Automotive", "Electronics", "Robotics", "Precision Instruments"],
      tradeVolume: "¥1.4T",
      opportunities: ["Aging Society Solutions", "Automation", "Quality Products", "Innovation"],
      requirements: ["JIS Standards", "PSE Certification", "Import Notifications", "Distribution Agreements"],
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      marketSize: "A$2.4T",
      growthRate: "0.2%",
      keyIndustries: ["Mining", "Agriculture", "Education", "Tourism", "Renewable Energy"],
      tradeVolume: "A$850B",
      opportunities: ["Clean Energy", "Agricultural Exports", "Technology Services", "Infrastructure Development"],
      requirements: ["Australian Standards (AS)", "Import Permits", "Biosecurity Clearance", "Product Safety Regulations"],
      image: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const exportProcess = [
    {
      step: "01",
      title: "Market Research & Analysis",
      description: "Comprehensive analysis of target markets, competition, and opportunities to develop your export strategy.",
      duration: "2-4 weeks",
      deliverables: ["Market Analysis Report", "Competitive Landscape", "Opportunity Assessment", "Entry Strategy"],
      icon: <img src="/images/export/Find.jpg" alt="Market Research & Analysis" />
    },
    {
      step: "02",
      title: "Regulatory Compliance",
      description: "Ensure full compliance with export regulations, obtain necessary licenses and certifications.",
      duration: "3-6 weeks",
      deliverables: ["Export Licenses", "Product Certifications", "Compliance Documentation", "Regulatory Guidance"],
      icon: <img src="/images/export/application.jpg" alt="Regulatory Compliance" />
    },
    {
      step: "03",
      title: "Partner & Distribution Setup",
      description: "Identify and establish relationships with local partners, distributors, and service providers.",
      duration: "4-8 weeks",
      deliverables: ["Partner Identification", "Due Diligence", "Agreement Negotiation", "Relationship Setup"],
      icon: <img src="/images/export/hands.jpg" alt="Partner & Distribution Setup" />
    },
    {
      step: "04",
      title: "Logistics & Execution",
      description: "Execute your export plan with full logistics support, documentation, and ongoing management.",
      duration: "Ongoing",
      deliverables: ["Shipping Coordination", "Documentation Support", "Customs Clearance", "Performance Monitoring"],
      icon: <img src="/images/export/ship.jpg" alt="Logistics & Execution" />
    }
  ];

  const successStories = [
    {
      company: "TechStart Solutions",
      industry: "Software Technology",
      challenge: "Expanding SaaS platform to European markets",
      solution: "GDPR compliance, localization, and partner network establishment",
      results: ["300% revenue increase", "12 EU countries entered", "50,000+ new users"],
      timeline: "8 months",
      image: "/images/export/image1.jpg"
    },
    {
      company: "GreenTech Manufacturing",
      industry: "Renewable Energy",
      challenge: "Importiong & Exporting solar panels to Asian markets",
      solution: "Certification support, logistics optimization, and local partnerships",
      results: ["₹50M import & export revenue", "5 countries expansion", "200% growth in 2 years"],
      timeline: "12 months",
      image: "/images/export/image2.jpg"
    },
    {
      company: "Artisan Foods Co.",
      industry: "Food & Beverage",
      challenge: "Premium food products to North American markets",
      solution: "FDA compliance, distribution network, and marketing strategy",
      results: ["₹25M annual import &  exports", "500+ retail locations", "Premium brand positioning"],
      timeline: "10 months",
      image: "/images/export/image3.jpg"
    }
  ];

  const tradeStatistics = [
    { label: "Global Trade Volume", value: "$28.5T", icon: <img src="../images/about/globe.jpg" alt="Global Trade Volume" />, growth: "+5.2%" },
    { label: "Countries Served", value: "150+", icon: <img src="../images/export/Flag.jpg" alt="Countries Served" />, growth: "+12%" },
    { label: "Export Transactions", value: "25,000+", icon: <img src="../images/export/box.jpg" alt="Export Transactions" />, growth: "+18%" },
    { label: "Client Success Rate", value: "96%", icon: <img src="../images/export/Right.jpg" alt="Client Success Rate" />, growth: "+2%" }
  ];

  const financialExperts = [
    {
      name: "Megananthan",
      role: "Account Manager",
      expertise: "Strategic Planning & Market Analysis",
      experience: "5+ years",
      credentials: ["CFA", "MBA Finance", "CFP"],
      achievements: ["M.Com MBA", "Former Partner", "200+ successful projects"],
      image: "/images/export/coat.jpg"
    },
    {
      name: "Rajesh Kumar",
      role: "Senior I&E Manager",
      expertise: "High Net Worth Financial Planning",
      experience: "15+ years",
      credentials: ["CIMA", "CPA", "CHFC"],
      achievements: ["M.Com", "Excellence Awards", "14 years of Experience"],
      image: "/images/export/coat.jpg"
    },
    {
      name: "Selvam",
      role: "Legal Advisor",
      expertise: "Madras High Court",
      experience: "18+ years",
      credentials: ["CFA", "MBA", "CIRA"],
      achievements: ["BA.BL", "High Court", "300+ process improvements"],
      image: "/images/export/coat.jpg"
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
    <div className="export">
     {/* Hero Section */}
      <section className="export-hero">
        <div className="export-hero-background">
          
          {/* Exact full-screen low-poly mesh overlay from image_bb97be.png */}
          <div className="low-poly-mesh-overlay"></div>

          <div className="floating-shapes">
            <div className="eagle-image">
              <img src="../images/eagle.png" alt="Eagle" />
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
                <h1 className="export-hero-title">Global Import & Export Services</h1>
              </div>
              <p className="hero-subtitle">
                Expand your business globally with our comprehensive export services. From market entry to logistics, we handle every aspect of international trade.
              </p>
              <div className="hero-highlights">
                <div className="highlight-card">
                  <span className="highlight-icon">
                    <img src="/images/export/Marketentry.jpg" alt="Market Entry" />
                  </span>
                  <div className="highlight-content">
                    <span className="highlight-title">Market Entry</span>
                    <span className="highlight-desc">Strategic market analysis</span>
                  </div>
                </div>
                <div className="highlight-card">
                  <span className="highlight-icon">
                    <img src="/images/export/application.jpg" alt="Documentation" />
                  </span>
                  <div className="highlight-content">
                    <span className="highlight-title">Documentation</span>
                    <span className="highlight-desc">Complete compliance support</span>
                  </div>
                </div>
                <div className="highlight-card">
                  <span className="highlight-icon">
                    <img src="/images/export/ship.jpg" alt="Logistics" />
                  </span>
                  <div className="highlight-content">
                    <span className="highlight-title">Logistics</span>
                    <span className="highlight-desc">End-to-end shipping solutions</span>
                  </div>
                </div>
              </div>
              <div className="hero-buttons">
                <button className="btn1-primary">Start Exporting</button>
                <button className="btn2-secondary">Market Analysis</button>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section 
        id="global-trade-monitor"
        className="trade-section"
      >
        <div className="container">
          <div 
            id="animate-trade-monitor"
            className={`trade-grid ${isVisible['animate-trade-monitor'] ? 'animate-fade-up' : ''}`}
          >
            <div className="trade-visual-wrapper">
              <div className="trade-animation-container">
                <div className="glow-effect"></div>
                <img 
                  src="/images/animation.png" 
                  alt="Global Trade Animation" 
                  className="trade-animation-img" 
                />
                <div className="orbiting-particles">
                  <div className="particle p1"></div>
                  <div className="particle p2"></div>
                  <div className="particle p3"></div>
                </div>
              </div>
            </div>

            <div className="trade-dashboard">
              <header className="dashboard-header">
                <h3 className="dashboard-title">Global Trade Monitor</h3>
                <span className="dashboard-status">🟢 Live</span>
              </header>

              <div className="world-map">
                <div className="trade-route route-1">
                  <div className="route-dot start"></div>
                  <div className="route-line"></div>
                  <div className="route-dot end"></div>
                </div>
                <div className="trade-route route-2">
                  <div className="route-dot start"></div>
                  <div className="route-line"></div>
                  <div className="route-dot end"></div>
                </div>
                <div className="trade-route route-3">
                  <div className="route-dot start"></div>
                  <div className="route-line"></div>
                  <div className="route-dot end"></div>
                </div>
              </div>

              <div className="trade-stats">
                {tradeStatistics.map((stat, index) => (
                  <div key={index} className="trade-stat">
                    <span className="stat-icon">{stat.icon}</span>
                    <div className="stat-info">
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                      <span className="stat-growth">{stat.growth}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Image Gallery */}
      <section className="export-products">
        <div className="container">
          <div 
            id="animate-products-header"
            className={`section-header ${isVisible['animate-products-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Our Import & Export Products</h2>
            <p className="section-description">
              A visual overview of the diverse high-quality commodities we manage globally.
            </p>
          </div>

          <div className="products-image-grid">
            {exportProducts.map((product, index) => (
              <div 
                key={index}
                id={`animate-product-${index}`}
                className={`product-image-card 
                  ${product.full ? 'full-width' : ''} 
                  ${isVisible[`animate-product-${index}`] ? 'animate-fade-up' : ''}`
                }
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={product.image} alt={product.title} loading="lazy" />
                <div className="image-simple-overlay">
                  <span className="image-caption"></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section className="export-services">
        <div className="container">
          <div 
            id="animate-services-header"
            className={`section-header ${isVisible['animate-services-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Comprehensive Import & Export Services</h2>
            <p className="section-description">
              End-to-end export solutions to help you succeed in global markets
            </p>
          </div>

          <div className="services-grid">
            {exportServices.map((service, index) => (
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
                
                <div className="service-details">
                  <div className="details-section">
                    <h4 className="details-title">Features</h4>
                    <ul className="details-list">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="details-item">
                          <span className="details-bullet">
                            <img src="/images/export/points.jpg" alt="points" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="details-section">
                    <h4 className="details-title">Benefits</h4>
                    <ul className="details-list">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="details-item">
                          <span className="details-bullet">
                            <img src="/images/export/points.jpg" alt="points" />
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button className="service-btn">Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Destinations */}
      <section className="export-destinations">
        <div className="container">
          <div 
            id="animate-destinations-header"
            className={`section-header ${isVisible['animate-destinations-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Key Import & Export Destinations</h2>
            <p className="section-description">
              Explore major global markets and their opportunities for your business
            </p>
          </div>

          <div className="destinations-container">
            <div className="destination-tabs">
              {exportDestinations.map((destination, index) => (
                <button
                  key={index}
                  className={`destination-tab ${selectedCountry === index ? 'active' : ''}`}
                  onClick={() => setSelectedCountry(index)}
                >
                  <span className="tab-flag">{destination.flag}</span>
                  <div className="tab-info">
                    <span className="tab-country">{destination.country}</span>
                    <span className="tab-market">{destination.marketSize}</span>
                  </div>
                  <span className="tab-growth">{destination.growthRate}</span>
                </button>
              ))}
            </div>

            <div 
              id="animate-destination-details"
              className={`destination-details ${isVisible['animate-destination-details'] ? 'animate-fade-up' : ''}`}
            >
              <div className="destination-main">
                <div className="destination-image">
                  <img src={exportDestinations[selectedCountry].image} alt={exportDestinations[selectedCountry].country} />
                  <div className="image-overlay">
                    <span className="country-flag">{exportDestinations[selectedCountry].flag}</span>
                    <span className="country-name">{exportDestinations[selectedCountry].country}</span>
                  </div>
                </div>
                
                <div className="destination-info">
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="info-label">Market Size</span>
                      <span className="info-value">{exportDestinations[selectedCountry].marketSize}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Growth Rate</span>
                      <span className="info-value growth">{exportDestinations[selectedCountry].growthRate}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Trade Volume</span>
                      <span className="info-value">{exportDestinations[selectedCountry].tradeVolume}</span>
                    </div>
                  </div>

                  <div className="destination-sections">
                    <div className="section">
                      <h4 className="section1-title">Market Opportunities</h4>
                      <ul className="opportunity-list">
                        {exportDestinations[selectedCountry].opportunities.map((opportunity, idx) => (
                          <li key={idx} className="opportunity-item">
                            <span className="opportunity-bullet">
                              <img src="/images/export/points.jpg" alt="points" />
                            </span>
                            {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="section">
                      <h4 className="section1-title">Key Requirements</h4>
                      <ul className="requirement-list">
                        {exportDestinations[selectedCountry].requirements.map((requirement, idx) => (
                          <li key={idx} className="requirement-item">
                            <span className="requirement-bullet">
                              <img src="/images/export/points.jpg" alt="points" />
                            </span>
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="destination-cta">Explore This Market</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="timeline-section export-process">
        <div className="container">
          <div 
            id="animate-process-header"
            className={`section-header ${isVisible['animate-process-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Our Import & Export Process</h2>
            <p className="section-description">
              A methodology that ensures successful international market entry
            </p>
          </div>

          <div className="timeline">
            <img src="/images/about/line.jpg" className="timeline-line" alt="line" />

            {exportProcess.map((step, index) => (
              <div
                key={index}
                id={`animate-step-${index}`}
                className={`timeline-item ${isVisible[`animate-step-${index}`] ? 'animate-fade-up' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">Step {step.step}</div>
                  <div className="timeline-header" style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div className="timeline-icon-container">
                      {step.icon}
                    </div>
                    <h3 className="timeline-event" style={{ margin: 0 }}>{step.title}</h3>
                  </div>
                  <p className="timeline-description">{step.description}</p>
                  <div className="step-meta" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', margin: '15px 0', padding: '4px 10px', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--premium-gold)', fontWeight: '600' }}>
                    <img src="/images/export/alarm.jpg" alt="duration" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
                    <span>{step.duration}</span>
                  </div>
                  <div className="step-deliverables" style={{ marginTop: '15px' }}>
                    <h4 className="deliverables-title" style={{ fontSize: '1rem', color: 'var(--dark-navy)', fontWeight: '600', marginBottom: '10px' }}>Key Deliverables</h4>
                    <ul className="deliverables-list" style={{ listStyle: 'none', padding: 0 }}>
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="deliverable-item" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--premium-dark-blue)' }}>
                          <span className="deliverable-check" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/images/export/points.jpg" alt="points" style={{ width: '12px', height: '12px', objectFit: 'contain' }} />
                          </span>
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="timeline-marker">
                  <img src="/images/about/point.jpg" alt="marker" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="export-success">
        <div className="container">
          <div 
            id="animate-success-header"
            className={`section-header ${isVisible['animate-success-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Import & Export Success Stories</h2>
            <p className="section-description">
              Real results from companies that have successfully expanded globally with our support
            </p>
          </div>

          <div className="success-grid">
            {successStories.map((story, index) => (
              <div
                key={index}
                id={`animate-success-${index}`}
                className={`success-card ${isVisible[`animate-success-${index}`] ? 'animate-fade-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="success-image">
                  <img src={story.image} alt={story.company} />
                  <div className="timeline-badge">{story.timeline}</div>
                </div>
                
                <div className="success-content">
                  <div className="success-header">
                    <h3 className="success-company">{story.company}</h3>
                    <span className="success-industry">{story.industry}</span>
                  </div>

                  <div className="success-challenge">
                    <h4 className="challenge-title">Challenge</h4>
                    <p className="challenge-text">{story.challenge}</p>
                  </div>

                  <div className="success-solution">
                    <h4 className="solution-title">Our Solution</h4>
                    <p className="solution-text">{story.solution}</p>
                  </div>

                  <div className="success-results">
                    <h4 className="results-title">Results Achieved</h4>
                    <ul className="results-list">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="result-item">
                          <span className="result-bullet">
                              <img src="/images/export/points.jpg" alt="points" />
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

      {/* Expert Team */}
      <section className="financial-experts">
        <div className="container">
          <div 
            id="animate-experts-header"
            className={`section-header ${isVisible['animate-experts-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Our Exports & Imports Experts</h2>
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
                        <span key={idx} className="credential-badge">{credential}</span>
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
      <section className="export-cta">
        <div className="container">
          <div 
            id="animate-cta"
            className={`cta-content ${isVisible['animate-cta'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="cta-title">Ready to Go Global?</h2>
            <p className="cta-description">
              Take your business to international markets with our comprehensive export services. 
              From market research to logistics, we handle every aspect of your global expansion.
            </p>
            <div className="cta-benefits">
              <div className="benefit-grid">
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <img src="/images/export/Marketentry.jpg" alt="Market Entry Strategy" />
                  </span>
                  <span className="benefit-text">Market Entry Strategy</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <img src="/images/export/application.jpg" alt="Complete Documentation" />
                  </span>
                  <span className="benefit-text">Complete Documentation</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <img src="/images/export/ship.jpg" alt="Logistics Support" />
                  </span>
                  <span className="benefit-text">Logistics Support</span>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <img src="/images/export/hands.jpg" alt="Local Partnerships" />
                  </span>
                  <span className="benefit-text">Local Partnerships</span>
                </div>
              </div>
            </div>
           <div className="cta-buttons">
      <button
        className="btn1-primary"
        onClick={() => navigate('/contact#contact-form')}
      >
        Start Your Import & Export Journey

      </button>

      <button
        className="btn2-secondary"
        onClick={() => navigate('/contact#contact-form')}
      >
        Request Market Analysis
      </button>
    </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Export;
