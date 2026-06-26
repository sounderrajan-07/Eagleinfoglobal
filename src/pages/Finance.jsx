import { useState, useEffect, useRef } from 'react';
import './Finance.css';
import { useNavigate } from 'react-router-dom';

function Finance() {
  const [isVisible, setIsVisible] = useState({});
  const [activeCalculator, setActiveCalculator] = useState('loan');
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn("Mount video play failed:", err);
      });
    }
  }, []);

  const [calculatorValues, setCalculatorValues] = useState({
    loanAmount: 100000,
    interestRate: 5.5,
    loanTerm: 10,
    investmentAmount: 50000,
    investmentTerm: 5,
    expectedReturn: 8
  });

  const financialServices = [
    {
      icon: <img src="/images/Finance/investment.jpg" alt="Investment Advisory" />,
      title: "Investment Advisory",
      description: "Expert guidance to maximize your investment portfolio returns with strategic asset allocation.",
      features: ["Portfolio Analysis", "Risk Assessment", "Asset Allocation", "Performance Monitoring"],
      benefits: ["Higher Returns", "Risk Mitigation", "Diversification", "Professional Management"]
    },
    {
      icon: <img src="/images/Finance/Corporate.jpg" alt="Corporate Finance" />,
      title: "Corporate Finance",
      description: "Comprehensive corporate financial services to support your business growth and expansion.",
      features: ["Capital Structure", "Financial Planning", "Cash Flow Management", "Merger & Acquisition"],
      benefits: ["Optimized Capital", "Growth Financing", "Strategic Planning", "Expert Advisory"]
    },
    {
      icon: <img src="/images/Finance/planning.jpg" alt="Financial Planning" />,
      title: "Financial Planning",
      description: "Personalized financial planning services to secure your financial future and achieve your goals.",
      features: ["Retirement Planning", "Tax Optimization", "Estate Planning", "Insurance Analysis"],
      benefits: ["Financial Security", "Tax Savings", "Goal Achievement", "Peace of Mind"]
    },
    {
      icon: <img src="/images/Finance/wealth.jpg" alt="Wealth Management" />,
      title: "Wealth Management",
      description: "High-net-worth wealth management services with personalized strategies and premium support.",
      features: ["Private Banking", "Investment Management", "Trust Services", "Family Office"],
      benefits: ["Personalized Service", "Exclusive Access", "Wealth Preservation", "Legacy Planning"]
    },
    {
      icon: <img src="/images/Finance/risk.jpg" alt="Risk Management" />,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies to protect your financial interests.",
      features: ["Risk Analysis", "Insurance Solutions", "Hedging Strategies", "Crisis Management"],
      benefits: ["Financial Protection", "Risk Mitigation", "Business Continuity", "Peace of Mind"]
    },
    {
      icon: <img src="/images/Finance/analysis.jpg" alt="Market Analysis" />,
      title: "Market Analysis",
      description: "In-depth market research and analysis to inform your investment and business decisions.",
      features: ["Market Research", "Trend Analysis", "Economic Forecasting", "Industry Reports"],
      benefits: ["Informed Decisions", "Market Insights", "Competitive Advantage", "Strategic Planning"]
    }
  ];

  const investmentProducts = [
    {
      name: "Growth Equity Fund",
      type: "Equity Investment",
      minInvestment: "₹50,000",
      expectedReturn: "12-15%",
      riskLevel: "High",
      duration: "5-7 years",
      features: ["High Growth Potential", "Diversified Portfolio", "Professional Management", "Quarterly Reports"],
      description: "Aggressive growth strategy targeting high-potential companies in emerging markets."
    },
    {
      name: "Balanced Portfolio",
      type: "Mixed Investment",
      minInvestment: "₹25,000",
      expectedReturn: "8-10%",
      riskLevel: "Medium",
      duration: "3-5 years",
      features: ["Balanced Risk/Return", "Asset Diversification", "Regular Income", "Flexible Terms"],
      description: "Balanced approach combining stocks, bonds, and alternative investments."
    },
    {
      name: "Fixed Income Securities",
      type: "Bond Investment",
      minInvestment: "₹10,000",
      expectedReturn: "5-7%",
      riskLevel: "Low",
      duration: "2-3 years",
      features: ["Stable Returns", "Capital Protection", "Regular Income", "Low Volatility"],
      description: "Conservative investment focusing on government and corporate bonds."
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
      image: "/images/Finance/coat.jpg"
    },
    {
      name: "Ramesh",
      role: "Senior Wealth Manager",
      expertise: "High Net Worth Financial Planning",
      experience: "15+ years",
      credentials: ["CIMA", "CPA", "CHFC"],
      achievements: ["500+ HNW Clients", "Excellence Awards", "25 yrs Experience"],
      image: "/images/Finance/coat.jpg"
    },
    {
      name: "Siva kumar",
      role: "Legal Advisor",
      expertise: "Madras High Court",
      experience: "18+ years",
      credentials: ["CFA", "MBA", "CIRA"],
      achievements: ["BA.BL", "High Court", "300+ process improvements"],
      image: "/images/Finance/coat.jpg"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[id^="animate-"]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const calculateLoanPayment = () => {
    const p = calculatorValues.loanAmount;
    const r = calculatorValues.interestRate / 100 / 12;
    const n = calculatorValues.loanTerm * 12;

    const m = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    return {
      monthlyPayment: m.toFixed(2),
      totalPayment: (m * n).toFixed(2),
      totalInterest: (m * n - p).toFixed(2)
    };
  };

  const calculateInvestment = () => {
    const p = calculatorValues.investmentAmount;
    const r = calculatorValues.expectedReturn / 100;
    const t = calculatorValues.investmentTerm;

    const fv = p * Math.pow(1 + r, t);

    return {
      futureValue: fv.toFixed(2),
      totalReturn: (fv - p).toFixed(2),
      annualizedReturn: ((fv / p - 1) * 100 / t).toFixed(2)
    };
  };

  const handleCalculatorChange = (field, value) => {
    setCalculatorValues(prev => ({
      ...prev,
      [field]: parseFloat(value)
    }));
  };


return (
    <div className="finance">
{/* Hero Section */}
<section className="finance-hero">
  <div className="finance-hero-background">
    
    {/* Exact full-screen low-poly mesh overlay from image_bb97be.png */}
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
          <h1 className="finance-hero-title">Financial Services & Solutions</h1>
        </div>

        <p className="hero-subtitle">
          Comprehensive financial services to help you build, grow, and protect your wealth with expert guidance and innovative solutions.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">₹10B+</span>
            <span className="stat-label">Assets Under Management</span>
          </div>

          <div className="stat-item">
            <span className="stat-number">15,000+</span>
            <span className="stat-label">Satisfied Clients</span>
          </div>

          <div className="stat-item">
            <span className="stat-number">25+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn1-primary">Get Financial Advisory</button>
          <button className="btn2-secondary">Investment Calculator</button>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="portfolio-dashboard">
  <div className="container portfolio-layout-wrapper">
    {/* LEFT SIDE - VIDEO */}
    <div className="portfolio-left-video">
      <div className="video-container">
        <video
          ref={videoRef}
          src="/videos/Finance_animation.webm"
          autoPlay
          muted
          loop
          playsInline
          onLoadedMetadata={() => {
            if (videoRef.current) {
              videoRef.current.play().catch(err => console.warn("Video play failed:", err));
            }
          }}
          onEnded={(e) => {
            e.target.currentTime = 0;
            e.target.play().catch(() => {});
          }}
        />
      </div>
    </div>

    <div 
      id="animate-dashboard"
      className={`financial-dashboard ${isVisible['animate-dashboard'] ? 'animate-fade-up' : ''}`}
    >

    <div className="dashboard-header">
      <h3 className="dashboard-title">Portfolio Performance</h3>
      <span className="dashboard-period">YTD</span>
    </div>

    <div className="performance-chart">
      <div className="chart-line">
        <svg viewBox="0 0 300 150" className="performance-svg">
          <polyline
            fill="none"
            stroke="url(#portfolioGradient)"
            strokeWidth="3"
            points="20,130 60,100 100,80 140,60 180,70 220,40 260,30"
            className="chart-path"
          />
          <defs>
            <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFA500" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>

    <div className="dashboard-metrics">

      <div className="metric-card">
        <span className="metric-label">Total Value</span>
        <span className="metric-value">$1,245,678</span>
        <span className="metric-change positive">+12.5%</span>
      </div>

      <div className="metric-card">
        <span className="metric-label">Monthly Return</span>
        <span className="metric-value">$15,432</span>
        <span className="metric-change positive">+2.3%</span>
      </div>

      <div className="metric-card">
        <span className="metric-label">Risk Score</span>
        <span className="metric-value">Moderate</span>
        <span className="metric-change neutral">Balanced</span>
      </div>

    </div>

  </div>
  </div>
</section>
      {/* Financial Calculator Section */}
<section className="financial-calculator">
  <div className="container">

    <div 
      id="animate-calculator-header"
      className={`section-header ${isVisible['animate-calculator-header'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="section-title">Financial Calculators</h2>
      <p className="section-description">
        Plan your financial future with our interactive calculators
      </p>
    </div>

    <div className="calculator-container">

      <div className="calculator-tabs">
        <button
          className={`calculator-tab ${activeCalculator === 'loan' ? 'active' : ''}`}
          onClick={() => setActiveCalculator('loan')}
        >
          <span className="tab-icon">
            <img src="/images/Finance/Calculator.jpg" alt="Loan Calculator" />
          </span>
          <span className="tab-label">Loan Calculator</span>
        </button>

        <button
          className={`calculator-tab ${activeCalculator === 'investment' ? 'active' : ''}`}
          onClick={() => setActiveCalculator('investment')}
        >
          <span className="tab-icon">
            <img src="/images/Finance/analysis.jpg" alt="Investment Calculator" />
          </span>
          <span className="tab-label">Investment Calculator</span>
        </button>
      </div>

      <div 
        id="animate-calculator-content"
        className={`calculator-content ${isVisible['animate-calculator-content'] ? 'animate-fade-up' : ''}`}
      >

        {activeCalculator === 'loan' ? (
          <div className="calculator-section">

            <div className="calculator-inputs">
              <h3 className="calculator-title">Loan Payment Calculator</h3>

              <div className="input-group">
                <label className="input-label">Loan Amount (₹)</label>
                <input
                  type="number"
                  value={calculatorValues.loanAmount}
                  onChange={(e) => handleCalculatorChange('loanAmount', e.target.value)}
                  className="calculator-input"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Interest Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={calculatorValues.interestRate}
                  onChange={(e) => handleCalculatorChange('interestRate', e.target.value)}
                  className="calculator-input"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Loan Term (years)</label>
                <input
                  type="number"
                  value={calculatorValues.loanTerm}
                  onChange={(e) => handleCalculatorChange('loanTerm', e.target.value)}
                  className="calculator-input"
                />
              </div>
            </div>

            <div className="calculator-results">
              <h3 className="results-title">Loan Payment Results</h3>

              <div className="results-grid">
                <div className="result-item">
                  <span className="result-label">Monthly Payment</span>
                  <span className="result-value">₹{calculateLoanPayment().monthlyPayment}</span>
                </div>

                <div className="result-item">
                  <span className="result-label">Total Payment</span>
                  <span className="result-value">₹{calculateLoanPayment().totalPayment}</span>
                </div>

                <div className="result-item">
                  <span className="result-label">Total Interest</span>
                  <span className="result-value">₹{calculateLoanPayment().totalInterest}</span>
                </div>
              </div>
            </div>

          </div>
        ) : (

          <div className="calculator-section">

            <div className="calculator-inputs">
              <h3 className="calculator-title">Investment Growth Calculator</h3>

              <div className="input-group">
                <label className="input-label">Investment Amount (₹)</label>
                <input
                  type="number"
                  value={calculatorValues.investmentAmount}
                  onChange={(e) => handleCalculatorChange('investmentAmount', e.target.value)}
                  className="calculator-input"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Expected Return (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={calculatorValues.expectedReturn}
                  onChange={(e) => handleCalculatorChange('expectedReturn', e.target.value)}
                  className="calculator-input"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Investment Term (years)</label>
                <input
                  type="number"
                  value={calculatorValues.investmentTerm}
                  onChange={(e) => handleCalculatorChange('investmentTerm', e.target.value)}
                  className="calculator-input"
                />
              </div>
            </div>

            <div className="calculator-results">
              <h3 className="results-title">Investment Growth Results</h3>

              <div className="results-grid">
                <div className="result-item">
                  <span className="result-label">Future Value</span>
                  <span className="result-value">₹{calculateInvestment().futureValue}</span>
                </div>

                <div className="result-item">
                  <span className="result-label">Total Return</span>
                  <span className="result-value">₹{calculateInvestment().totalReturn}</span>
                </div>

                <div className="result-item">
                  <span className="result-label">Annualized Return</span>
                  <span className="result-value">{calculateInvestment().annualizedReturn}%</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  </div>
</section>
{/* Services Section */}
<section className="financial-services">
  <div className="container">

    <div 
      id="animate-services-header"
      className={`section-header ${isVisible['animate-services-header'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="section-title">Our Financial Services</h2>
      <p className="section-description">
        Comprehensive financial solutions tailored to your unique needs and goals
      </p>
    </div>

    <div className="services-grid">
      {financialServices.map((service, index) => (
        <div
          key={index}
          id={`animate-service-${index}`}
          className={`service-card ${isVisible[`animate-service-${index}`] ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >

          <div className="service-icon-wrapper">
            <span className="service1-icon">{service.icon}</span>
          </div>

          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          
          <div className="service-details">

            <div className="detail-column">
              <h4 className="detail-title">Features</h4>
              <ul className="detail-list">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="detail-item">
                    <span className="detail-bullet">
                      <img src="/images/Finance/points.jpg" alt="points" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-column">
              <h4 className="detail-title">Benefits</h4>
              <ul className="detail-list">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="detail-item">
                    <span className="detail-bullet">
                      <img src="/images/Finance/points.jpg" alt="points" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
          <button className="service-cta-btn">Learn More</button>
        </div>
      ))}
    </div>

  </div>
</section>
     {/* Investment Products */}
<section className="investment-products">
  <div className="container">
    
    {/* Section Header */}
    <div 
      id="animate-products-header"
      className={`section-header ${isVisible['animate-products-header'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="section-title">Investment Products</h2>
      <p className="section-description">
        Diversified investment options tailored to your financial goals and risk appetite.
      </p>
    </div>

    {/* Products Grid */}
    <div className="products-grid">
      {investmentProducts.map((product, index) => (
        <div
          key={index}
          id={`animate-product-${index}`}
          className={`product-card ${isVisible[`animate-product-${index}`] ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: `${index * 0.12}s` }}
        >

          {/* Product Image */}
          <div className="product-image">
            <img src="/images/Finance/pin.jpg" alt="product location" />
          </div>

          {/* Header */}
          <div className="product-header">
            <h3 className="product-name">{product.name}</h3>
            <span className="product-type">{product.type}</span>
          </div>

          {/* Metrics */}
          <div className="product-metrics">
            <div className="metric-row">
              <span className="metric-label">Min Investment</span>
              <span className="metric-value">{product.minInvestment}</span>
            </div>

            <div className="metric-row">
              <span className="metric-label">Expected Return</span>
              <span className="metric-value expected-return">
                {product.expectedReturn}
              </span>
            </div>

            <div className="metric-row">
              <span className="metric-label">Risk Level</span>
              <span className={`metric-value risk-${product.riskLevel.toLowerCase().replace(/\s+/g, '')}`}>
                {product.riskLevel}
              </span>
            </div>

            <div className="metric-row">
              <span className="metric-label">Duration</span>
              <span className="metric-value">{product.duration}</span>
            </div>
          </div>

          {/* Description */}
          <p className="product-description">
            {product.description}
          </p>

          {/* Features */}
          <div className="product-features">
            <h4 className="features-title">Key Features</h4>
            <ul className="features-list">
              {product.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <span className="feature-check">
                    <img src="/images/Finance/points.jpg" alt="check" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <button className="product-cta-btn">
            Invest Now
          </button>

        </div>
      ))}
    </div>

  </div>
</section>

     {/* Expert Team */}
<section className="financial-experts">
  <div className="container">

    {/* Header */}
    <div 
      id="animate-experts-header"
      className={`section-header ${isVisible['animate-experts-header'] ? 'animate-fade-up' : ''}`}
    >
      <h2 className="section-title">Our Financial Experts</h2>
      <p className="section-description">
        Meet our team of certified professionals committed to your financial growth and success.
      </p>
    </div>

    {/* Experts Grid */}
    <div className="experts-grid">
      {financialExperts.map((expert, index) => (
        <div
          key={index}
          id={`animate-expert-${index}`}
          className={`expert-card ${isVisible[`animate-expert-${index}`] ? 'animate-fade-up' : ''}`}
          style={{ animationDelay: `${index * 0.12}s` }}
        >

          {/* Image */}
          <div className="expert-image">
            <img src={expert.image || "/images/Finance/coat.jpg"} alt={expert.name} />
            <div className="experience-badge">{expert.experience}</div>
          </div>

          {/* Info */}
          <div className="expert-info">
            <h3 className="expert-name">{expert.name}</h3>
            <p className="expert-role">{expert.role}</p>
            <p className="expert-expertise">{expert.expertise}</p>

            {/* Credentials */}
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

            {/* Achievements */}
            <div className="expert-achievements">
              <h4 className="achievements-title">Key Achievements</h4>
              <ul className="achievements-list">
                {expert.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">
                    <span className="achievement-bullet">
                      <img src="/images/medal.jpg" alt="achievement" />
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
<section className="finance-cta">
  <div className="container">

    <div 
      id="animate-cta"
      className={`cta-content ${isVisible['animate-cta'] ? 'animate-fade-up' : ''}`}
    >

      {/* Title */}
      <h2 className="cta-title">
        Start Your Financial Journey Today
      </h2>

      {/* Description */}
      <p className="cta-description">
        Take control of your financial future with expert guidance, personalized strategies, 
        and secure investment solutions designed for long-term success.
      </p>

      {/* Highlights */}
      <div className="cta-highlights">

        <div className="highlight-item">
          <span className="highlight-icon">
            <img src="/images/Finance/Innovation.jpg" alt="consultation" />
          </span>
          <span className="highlight-text">Free Initial Consultation</span>
        </div>

        <div className="highlight-item">
          <span className="highlight-icon">
            <img src="/images/Finance/analysis.jpg" alt="strategy" />
          </span>
          <span className="highlight-text">Personalized Strategy</span>
        </div>

        <div className="highlight-item">
          <span className="highlight-icon">
            <img src="/images/Finance/risk.jpg" alt="planning" />
          </span>
          <span className="highlight-text">Goal-Oriented Planning</span>
        </div>

        <div className="highlight-item">
          <span className="highlight-icon">
            <img src="/images/Finance/secure.jpg" alt="secure" />
          </span>
          <span className="highlight-text">Secure & Confidential</span>
        </div>

      </div>

      {/* Buttons */}
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
        Download Investment Guide
      </button>
    </div>

    </div>

  </div>
</section>
    </div>
  );
}

export default Finance;