import { useState, useEffect, useRef } from 'react';
import './BankLoan.css';
import { useNavigate } from 'react-router-dom';

function BankLoan() {
  const [isVisible, setIsVisible] = useState({});
  const [selectedLoanType, setSelectedLoanType] = useState(0);
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn("Mount video play failed:", err);
      });
    }
  }, []);

  const [loanCalculator, setLoanCalculator] = useState({
    amount: 100000,
    rate: 5.5,
    term: 10
  });

  const loanTypes = [
    {
      title: "Business Term Loans",
      icon: <img src="/images/bank-loan/business.jpg" alt="Business Term Loans" />,
      description: "Traditional term loans for business expansion, equipment purchase, and working capital needs.",
      features: ["Fixed or Variable Rates", "Flexible Terms", "Quick Approval", "Competitive Rates"],
      benefits: ["Predictable Payments", "Build Credit History", "Tax Benefits", "Retain Ownership"],
      loanRange: "₹10K - ₹5M",
      termRange: "1-10 years",
      rateRange: "4.5% - 12%",
      requirements: ["2+ years in business", "Good credit score", "Financial statements", "Business plan"]
    },
    {
      title: "SBA Loans",
      icon: <img src="/images/bank-loan/us.jpg" alt="us" />,
      description: "Government-backed loans offering favorable terms and lower down payments for qualified businesses.",
      features: ["Government Guarantee", "Lower Down Payments", "Longer Terms", "Competitive Rates"],
      benefits: ["Lower Risk for Lenders", "Favorable Terms", "Various Programs", "Support for Minorities"],
      loanRange: "₹500 - ₹5.5M",
      termRange: "5-25 years",
      rateRange: "3.5% - 9%",
      requirements: ["SBA eligibility", "Personal guarantee", "Collateral", "Detailed business plan"]
    },
    {
      title: "Equipment Financing",
      icon: <img src="/images/bank-loan/settings.jpg" alt="Equipment Financing" />,
      description: "Specialized financing for purchasing business equipment, machinery, and technology.",
      features: ["Equipment as Collateral", "100% Financing", "Tax Advantages", "Fast Processing"],
      benefits: ["Preserve Cash Flow", "Equipment Ownership", "Tax Deductions", "Build Credit"],
      loanRange: "₹5K - ₹2M",
      termRange: "2-7 years",
      rateRange: "5% - 15%",
      requirements: ["Equipment quotes", "Financial statements", "Down payment", "Credit check"]
    },
    {
      title: "Commercial Real Estate",
      icon: <img src="/images/bank-loan/Land.jpg" alt="Commercial Real Estate" />,
      description: "Financing for purchasing, refinancing, or developing commercial real estate properties.",
      features: ["Long-term Financing", "Competitive Rates", "Various Property Types", "Refinancing Options"],
      benefits: ["Property Ownership", "Equity Building", "Tax Benefits", "Stable Payments"],
      loanRange: "₹100K - ₹50M",
      termRange: "5-30 years",
      rateRange: "4% - 8%",
      requirements: ["Property appraisal", "20-30% down payment", "Income verification", "Property insurance"]
    },
    {
      title: "Working Capital Loans",
      icon: <img src="/images/bank-loan/investment.jpg" alt="investment" />,
      description: "Short-term financing to cover operational expenses, inventory, and seasonal cash flow needs.",
      features: ["Quick Access", "Flexible Use", "Revolving Credit", "Seasonal Options"],
      benefits: ["Cash Flow Management", "Operational Flexibility", "Growth Support", "Emergency Funding"],
      loanRange: "₹5K - ₹1M",
      termRange: "3-24 months",
      rateRange: "6% - 20%",
      requirements: ["Bank statements", "Revenue history", "Credit score", "Business registration"]
    },
    {
      title: "Invoice Financing",
      icon: <img src="/images/bank-loan/application.jpg" alt="Invoice Financing" />,
      description: "Convert outstanding invoices into immediate cash flow to support business operations.",
      features: ["Immediate Cash", "No Collateral", "Flexible Terms", "Credit Protection"],
      benefits: ["Improved Cash Flow", "No Debt Creation", "Customer Credit Protection", "Quick Processing"],
      loanRange: "₹1K - ₹10M",
      termRange: "30-90 days",
      rateRange: "1% - 5% per month",
      requirements: ["Outstanding invoices", "Customer creditworthiness", "Invoice verification", "Business history"]
    }
  ];

  const loanProcess = [
    {
      stepImage: "/images/pin.jpg",
      title: "Initial Consultation",
      description: "Free consultation to understand your financing needs and recommend the best loan options.",
      duration: "30 minutes",
      activities: ["Needs Assessment", "Loan Options Review", "Preliminary Qualification", "Documentation Checklist"],
      icon: "/images/bank-loan/livechat.jpg"
    },
    {
      stepImage: "/images/pin.jpg",
      title: "Application Preparation",
      description: "Comprehensive support in preparing and submitting your loan application with all required documents.",
      duration: "1-2 weeks",
      activities: ["Document Collection", "Application Completion", "Financial Analysis", "Submission to Lenders"],
      icon: "/images/bank-loan/application.jpg"
    },
    {
      stepImage: "/images/pin.jpg",
      title: "Underwriting Process",
      description: "Work with lenders during the underwriting process to address questions and provide additional information.",
      duration: "2-6 weeks",
      activities: ["Credit Review", "Financial Verification", "Collateral Evaluation", "Risk Assessment"],
      icon: "/images/bank-loan/search.jpg"
    },
    {
      stepImage: "/images/pin.jpg",
      title: "Approval & Closing",
      description: "Final approval, loan documentation review, and closing process to secure your funding.",
      duration: "1-2 weeks",
      activities: ["Final Approval", "Loan Documentation", "Closing Coordination", "Fund Disbursement"],
      icon: "/images/bank-loan/Right.jpg"
    }
  ];

  const lenderPartners = [
    {
      name: "First National Bank",
      type: "Traditional Bank",
      specialties: ["Business Term Loans", "SBA Loans", "Commercial Real Estate"],
      minLoan: "₹25,000",
      maxLoan: "₹10,000,000",
      avgRate: "5.5%",
      avgTime: "30-45 days",
      image: "https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Capital Growth Partners",
      type: "Alternative Lender",
      specialties: ["Working Capital", "Equipment Financing", "Invoice Factoring"],
      minLoan: "₹5,000",
      maxLoan: "₹2,000,000",
      avgRate: "8.5%",
      avgTime: "5-10 days",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "SBA Preferred Lender",
      type: "SBA Specialist",
      specialties: ["SBA 7(a) Loans", "SBA 504 Loans", "SBA Microloans"],
      minLoan: "₹500",
      maxLoan: "₹5,500,000",
      avgRate: "6.0%",
      avgTime: "45-90 days",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const successMetrics = [
    {
      value: "₹2.5B+",
      icon: "/images/bank-loan/investment.jpg",
      description: "Total funding secured"
    },
    {
      value: "94%",
      icon: "/images/bank-loan/Right.jpg",
      description: "Application approval rate"
    },
    {
      value: "21 days",
      icon: "/images/bank-loan/alarm.jpg",
      description: "From application to funding"
    },
    {
      value: "4.9/5",
      icon: "/images/bank-loan/star.jpg",
      description: "Average client rating"
    }
  ];

  const calculateLoan = () => {
    const principal = loanCalculator.amount;
    const monthlyRate = loanCalculator.rate / 100 / 12;
    const numberOfPayments = loanCalculator.term * 12;

    const monthlyPayment =
      principal *
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const yearlyPayment = monthlyPayment * 12;
    const weeklyPayment = monthlyPayment / 4.345;

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    return {
      weeklyPayment: weeklyPayment.toFixed(2),
      monthlyPayment: monthlyPayment.toFixed(2),
      yearlyPayment: yearlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    };
  };

  const financialExperts = [
    {
      name: "Megananthan",
      role: "Account Manager",
      expertise: "Strategic Planning & Market Analysis",
      experience: "5+ years",
      credentials: ["CFA", "MBA Finance", "CFP"],
      achievements: ["M.Com MBA", "Former Partner", "200+ successful projects"],
      image: "/images/bank-loan/coat.jpg"
    },
    {
      name: "Amul Raj",
      role: " Pvt.Finance Senior Manager",
      expertise: "High Net Worth Financial Planning",
      experience: "15+ years",
      credentials: ["CIMA", "CPA", "CHFC"],
      achievements: ["M.Com", "500+ Clients", "Pvt Finance with 15 years Experience"],
      image: "/images/bank-loan/coat.jpg"
    },
    {
      name: "Selvam",
      role: "Legal Advisor",
      expertise: "Madras High Court",
      experience: "18+ years",
      credentials: ["CFA", "MBA", "CIRA"],
      achievements: ["BA.BL", "High Court", "300+ process improvements"],
      image: "/images/bank-loan/coat.jpg"
    }
  ];

  const handleCalculatorChange = (field, value) => {
    setLoanCalculator((prev) => ({
      ...prev,
      [field]: parseFloat(value)
    }));
  };

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

  const loan = calculateLoan();
 return (
    <div className="bank-loan">
      {/* Hero Section */}
<section className="loan-hero">
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
        className={`hero-content ${
          isVisible['animate-hero-content'] ? 'animate-fade-up' : ''
        }`}
      >
        <div className="flip-container">
          <h1 className="bank-hero-title">Business Bank Loans</h1>
        </div>

        <p className="hero-subtitle">
          Secure the funding your business needs with our comprehensive loan
          services. From traditional bank loans to specialized financing, we
          help you find the perfect solution.
        </p>

        <div className="hero-features">
          <div className="feature-highlight">
            <img
              src="/images/bank-loan/Agility.jpg"
              alt="Fast Approval"
              className="feature-icon"
            />

            <div className="feature-content">
              <span className="feature-title">Fast Approval</span>
              <span className="feature-desc">
                Get approved in as little as 24 hours
              </span>
            </div>
          </div>

          <div className="feature-highlight">
            <img
              src="/images/bank-loan/Diamond.jpg"
              alt="Best Rates"
              className="feature-icon"
            />

            <div className="feature-content">
              <span className="feature-title">Best Rates</span>
              <span className="feature-desc">
                Competitive rates from top lenders
              </span>
            </div>
          </div>

          <div className="feature-highlight">
            <img
              src="/images/bank-loan/expert.jpg"
              alt="Expert Guidance"
              className="feature-icon"
            />

            <div className="feature-content">
              <span className="feature-title">Expert Guidance</span>
              <span className="feature-desc">
                Professional support throughout
              </span>
            </div>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="btn1-primary">Apply for Loan</button>
          <button className="btn2-secondary">Check Eligibility</button>
        </div>
      </div>
    </div>
  </div>
</section>
<section
  id="loan-calculator-section"
  className={`loan-calculator-section ${
    isVisible['animate-hero-visual'] ? 'animate-fade-right' : ''
  }`}
>
  <div className="container calculator-layout-wrapper">
    {/* LEFT SIDE - VIDEO */}
    <div className="calculator-left-video">
      <div className="video-container">
        <video
          ref={videoRef}
          src="/videos/Bankloan_animation.webm"
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

    <div className="loan-calculator-widget">

    <div className="calculator-header">
      <div className="calculator-title-wrapper">

        {/* <img
          src="/images/bank-loan/Calculator.jpg"
          alt="Calculator"
          className="calculator-header-icon"
        /> */}

        <div>
          <h3 className="calculator-title">Loan Calculator</h3>
          <span className="calculator-subtitle">
            Estimate your payments
          </span>
        </div>

      </div>
    </div>

    <div className="calculator-horizontal">

      {/* Inputs on left */}
      <div className="calculator-inputs">

        <div className="input-group">
          <label className="input-label">Loan Amount</label>

          <div className="input-wrapper">
            <span className="input-prefix">₹</span>

            <input
              type="number"
              value={loanCalculator.amount}
              onChange={(e) =>
                handleCalculatorChange('amount', e.target.value)
              }
              className="calculator-input"
            />
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Interest Rate</label>

          <div className="input-wrapper">
            <input
              type="number"
              step="0.1"
              value={loanCalculator.rate}
              onChange={(e) =>
                handleCalculatorChange('rate', e.target.value)
              }
              className="calculator-input"
            />

            <span className="input-suffix">%</span>
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Loan Term</label>

          <div className="input-wrapper">
            <input
              type="number"
              value={loanCalculator.term}
              onChange={(e) =>
                handleCalculatorChange('term', e.target.value)
              }
              className="calculator-input"
            />

            <span className="input-suffix">years</span>
          </div>
        </div>

      </div>

      {/* Results on right */}
      <div className="calculator-results">

        <div className="result-item">
          <span className="result-label">Weekly Payment</span>
          <span className="result-value">
            ₹{loan.weeklyPayment}
          </span>
        </div>

        <div className="result-item">
          <span className="result-label">Monthly Payment</span>
          <span className="result-value">
            ₹{loan.monthlyPayment}
          </span>
        </div>

        <div className="result-item">
          <span className="result-label">Yearly Payment</span>
          <span className="result-value">
            ₹{loan.yearlyPayment}
          </span>
        </div>

        <div className="result-item">
          <span className="result-label">Total Interest</span>
          <span className="result-value">
            ₹{loan.totalInterest}
          </span>
        </div>

        <div className="result-item">
          <span className="result-label">Total Payment</span>
          <span className="result-value">
            ₹{loan.totalPayment}
          </span>
        </div>

      </div>

    </div>
  </div>
  </div>
</section>
{/* Success Metrics */}
<section className="success-metrics">
  <div className="container">

    <div className="metrics-grid">
      {successMetrics.map((metric, index) => {
        const isAnimated = isVisible[`animate-metric-${index}`];

        return (
          <div
            key={index}
            id={`animate-metric-${index}`}
            className={`metric-card ${
              isAnimated ? 'animate-fade-up' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >

            {/* Metric Icon */}
            <div className="metric-icon">
              <img
                src={metric.icon}
                alt={metric.value}
              />
            </div>

            {/* Metric Content */}
            <div className="metric-content">

              <span className="metric-value">
                {metric.value}
              </span>

              <span className="metric-label">
                {metric.label}
              </span>

              <span className="metric-description">
                {metric.description}
              </span>

            </div>

          </div>
        );
      })}
    </div>

  </div>
</section>
{/* Loan Types */}
<section className="loan-types">
  <div className="container">

    <div
      id="animate-types-header"
      className={`section-header ${
        isVisible['animate-types-header']
          ? 'animate-fade-up'
          : ''
      }`}
    >
      <h2 className="section-title">
        Business Loan Options
      </h2>

      <p className="section-description">
        Explore our comprehensive range of business financing
        solutions tailored to your specific needs
      </p>
    </div>

    <div className="loan-types-container">

      {/* Loan Tabs */}
      <div className="loan-tabs">
        {loanTypes.map((loan, index) => (
          <button
            key={index}
            className={`loan-tab ${
              selectedLoanType === index ? 'active' : ''
            }`}
            onClick={() => setSelectedLoanType(index)}
          >

            <span className="tab-icon">
              {loan.icon}
            </span>

            <span className="tab-title">
              {loan.title}
            </span>

          </button>
        ))}
      </div>

      {/* Loan Details */}
      <div
        id="animate-loan-details"
        className={`loan-details ${
          isVisible['animate-loan-details']
            ? 'animate-fade-up'
            : ''
        }`}
      >

        <div className="loan-main">

          {/* Header */}
          <div className="loan-header">

            <span className="loan-icon">
              {loanTypes[selectedLoanType].icon}
            </span>

            <div className="loan-title-section">

              <h3 className="loan-title">
                {loanTypes[selectedLoanType].title}
              </h3>

              <p className="loan-description">
                {loanTypes[selectedLoanType].description}
              </p>

            </div>

          </div>

          {/* Specifications */}
          <div className="loan-specs">

            <div className="spec-item">
              <span className="spec-label">
                Loan Range
              </span>

              <span className="spec-value">
                {loanTypes[selectedLoanType].loanRange}
              </span>
            </div>

            <div className="spec-item">
              <span className="spec-label">
                Term Range
              </span>

              <span className="spec-value">
                {loanTypes[selectedLoanType].termRange}
              </span>
            </div>

            <div className="spec-item">
              <span className="spec-label">
                Rate Range
              </span>

              <span className="spec-value">
                {loanTypes[selectedLoanType].rateRange}
              </span>
            </div>

          </div>

          {/* Content Grid */}
          <div className="loan-content-grid">

            {/* Features */}
            <div className="content-section">

              <h4 className="content-title">
                Key Features
              </h4>

              <ul className="content-list">
                {loanTypes[selectedLoanType].features.map(
                  (feature, idx) => (
                    <li
                      key={idx}
                      className="content-item"
                    >

                      <span className="content-bullet">
                        <img
                          src="/images/bank-loan/points.jpg"
                          alt="points"
                        />
                      </span>

                      {feature}

                    </li>
                  )
                )}
              </ul>

            </div>

            {/* Benefits */}
            <div className="content-section">

              <h4 className="content-title">
                Benefits
              </h4>

              <ul className="content-list">
                {loanTypes[selectedLoanType].benefits.map(
                  (benefit, idx) => (
                    <li
                      key={idx}
                      className="content-item"
                    >

                      <span className="content-bullet">
                        <img
                          src="/images/bank-loan/points.jpg"
                          alt="points"
                        />
                      </span>

                      {benefit}

                    </li>
                  )
                )}
              </ul>

            </div>

            {/* Requirements */}
            <div className="content-section full-width">

              <h4 className="content-title">
                Requirements
              </h4>

              <ul className="content-list horizontal">
                {loanTypes[selectedLoanType].requirements.map(
                  (requirement, idx) => (
                    <li
                      key={idx}
                      className="content-item"
                    >

                      <span className="content-bullet">
                        <img
                          src="/images/bank-loan/points.jpg"
                          alt="points"
                        />
                      </span>

                      {requirement}

                    </li>
                  )
                )}
              </ul>

            </div>

          </div>

          {/* CTA Button */}
          <button className="loan-cta-btn">
            Apply for This Loan
          </button>

        </div>
      </div>

    </div>
  </div>
</section>
{/* Loan Process Section */}
<section className="loan-process">
  <div className="container">

    {/* Section Header */}
    <div
      id="animate-process-header"
      className={`section-header ${
        isVisible['animate-process-header']
          ? 'animate-fade-up'
          : ''
      }`}
    >

      <h2 className="section-title">
        Our Loan Process
      </h2>

      <p className="section-description">
        A streamlined process designed to get you the
        funding you need quickly and efficiently
      </p>

    </div>

    {/* Process Grid */}
    <div className="process-grid">

      {loanProcess.map((step, index) => {
        const isAnimated =
          isVisible[`animate-process-${index}`];

        return (
          <div
            key={index}
            id={`animate-process-${index}`}
            className={`process-card ${
              isAnimated ? 'animate-fade-up' : ''
            }`}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >

            {/* Pin Image */}
            <div className="process-number">

              <img
                src={step.stepImage}
                alt="Step Pin"
                className="step-img"
              />

            </div>

            {/* Process Header */}
            <div className="process-header">

              <div className="process-icon">

                <img
                  src={step.icon}
                  alt={step.title}
                />

              </div>

            </div>

            {/* Content */}
            <div className="process-content">

              <h3 className="process-title">
                {step.title}
              </h3>

              <p className="process-description">
                {step.description}
              </p>

              {/* Duration */}
              <div className="process-duration">

                <span className="duration-icon">
                  <img
                    src="/images/bank-loan/alarm.jpg"
                    alt="alarm"
                  />
                </span>

                <span className="duration-text">
                  {step.duration}
                </span>

              </div>

              {/* Activities */}
              <div className="process-activities">

                <h4 className="activities-title">
                  Key Activities
                </h4>

                <ul className="activities-list">

                  {step.activities.map(
                    (activity, idx) => (
                      <li
                        key={idx}
                        className="activity-item"
                      >

                        <span className="activity-bullet">

                          <img
                            src="/images/bank-loan/points.jpg"
                            alt="points"
                          />

                        </span>

                        <span>
                          {activity}
                        </span>

                      </li>
                    )
                  )}

                </ul>

              </div>

            </div>

          </div>
        );
      })}

    </div>
  </div>
</section>
   {/* Lender Partners */}
<section className="lender-partners">

  <div className="container">

    <div
      id="animate-partners-header"
      className={`section-header ${
        isVisible['animate-partners-header']
          ? 'animate-fade-up'
          : ''
      }`}
    >

      <h2 className="section-title">
        Our Lending Partners
      </h2>

      <p className="section-description">
        We work with a network of trusted lenders
        to find you the best rates and terms
      </p>

    </div>

    {/* Image below Lender Partners */}
    <div className="partners-bottom-image-container">

      <img
        src="/images/bank-loan/partners.jpg"
        alt="Lending Partners"
        className="partners-bottom-image"
      />

    </div>

  </div>

</section>
{/* Expert Team */}
<section className="financial-experts">

  <div className="container">

    <div
      id="animate-experts-header"
      className={`section-header ${
        isVisible['animate-experts-header']
          ? 'animate-fade-up'
          : ''
      }`}
    >

      <h2 className="section-title">
        Our Loan Experts
      </h2>

      <p className="section-description">
        Meet our team of certified financial
        professionals dedicated to your success
      </p>

    </div>

    <div className="experts-grid">

      {financialExperts.map((expert, index) => (

        <div
          key={index}
          id={`animate-expert-${index}`}
          className={`expert-card ${
            isVisible[`animate-expert-${index}`]
              ? 'animate-fade-up'
              : ''
          }`}
          style={{
            animationDelay: `${index * 0.1}s`
          }}
        >

          {/* Expert Image */}
          <div className="expert-image">

            <img
              src={expert.image}
              alt={expert.name}
            />

            <div className="experience-badge">
              {expert.experience}
            </div>

          </div>

          {/* Expert Info */}
          <div className="expert-info">

            <h3 className="expert-name">
              {expert.name}
            </h3>

            <p className="expert-role">
              {expert.role}
            </p>

            <p className="expert-expertise">
              {expert.expertise}
            </p>

            {/* Credentials */}
            <div className="expert-credentials">

              <h4 className="credentials-title">
                Credentials
              </h4>

              <div className="credentials-list">

                {expert.credentials.map(
                  (credential, idx) => (
                    <span
                      key={idx}
                      className="credential-badge"
                    >
                      {credential}
                    </span>
                  )
                )}

              </div>

            </div>

            {/* Achievements */}
            <div className="expert-achievements">

              <h4 className="achievements-title">
                Key Achievements
              </h4>

              <ul className="achievements-list">

                {expert.achievements.map(
                  (achievement, idx) => (
                    <li
                      key={idx}
                      className="achievement-item"
                    >

                      <span className="achievement-bullet">

                        <img
                          src="/images/medal.jpg"
                          alt="medal"
                        />

                      </span>

                      {achievement}

                    </li>
                  )
                )}

              </ul>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
   {/* CTA Section */}
<section className="loan-cta">

  <div className="container">

    <div
      id="animate-cta"
      className={`cta-content ${
        isVisible['animate-cta']
          ? 'animate-fade-up'
          : ''
      }`}
    >

      <h2 className="cta-title">
        Ready to Secure Your Business Loan?
      </h2>

      <p className="cta-description">
        Take the next step towards growing your
        business with the right financing solution.
        Our experts are ready to help you navigate
        the loan process and secure the best terms.
      </p>

      {/* Highlights */}
      <div className="cta-highlights">

        <div className="highlight-row">

          {/* Highlight Item */}
          <div className="highlight-item">

            <span className="highlight-icon">
              <img
                src="/images/bank-loan/Innovation.jpg"
                alt="Free Consultation"
              />
            </span>

            <span className="highlight-text">
              Free Consultation
            </span>

          </div>

          {/* Highlight Item */}
          <div className="highlight-item">

            <span className="highlight-icon">
              <img
                src="/images/bank-loan/Agility.jpg"
                alt="Fast Processing"
              />
            </span>

            <span className="highlight-text">
              Fast Processing
            </span>

          </div>

          {/* Highlight Item */}
          <div className="highlight-item">

            <span className="highlight-icon">
              <img
                src="/images/bank-loan/expert.jpg"
                alt="Best Rates"
              />
            </span>

            <span className="highlight-text">
              Best Rates
            </span>

          </div>

          {/* Highlight Item */}
          <div className="highlight-item">

            <span className="highlight-icon">
              <img
                src="/images/bank-loan/hands.jpg"
                alt="Expert Support"
              />
            </span>

            <span className="highlight-text">
              Expert Support
            </span>

          </div>

        </div>

      </div>

      {/* Buttons */}
      <div className="cta-buttons">
      <button
        className="btn1-primary"
        onClick={() => navigate('/contact#contact-form')}
      >
        Start Application

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

export default BankLoan;