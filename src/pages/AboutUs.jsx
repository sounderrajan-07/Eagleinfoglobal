import { useState, useEffect } from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('mission');
  const navigate = useNavigate();

  const teamMember = [
    {
      name: "K. E. Seshadri MBA, MSc. DIBT",
      position: "Founder & Managing Director [MD]",
      image: "/images/sheshadri.jpg",
      bio: "Experienced business leader with extensive expertise in global consultancy, finance, and international trade development.",
      specialties: [
        "Business Strategy",
        "International Trade",
        "Financial Advisory"
      ]
    }
  ];

  const milestones = [
    { year: "2008", event: "Company Founded", description: "Eagle Info Global established with a vision to bridge global business opportunities" },
    { year: "2012", event: "International Expansion", description: "Extended services to 15+ countries across Asia and Europe" },
    { year: "2016", event: "Financial Services Launch", description: "Introduced comprehensive financial advisory and loan facilitation services" },
    { year: "2020", event: "Digital Transformation", description: "Pioneered digital solutions for remote business consulting" },
    { year: "2023", event: "500+ Clients Milestone", description: "Reached significant milestone of serving over 500 successful clients globally" }
  ];

  const values = [
    {
      icon: <img src="/images/about/expert.jpg" alt="Excellence" />,
      title: "Excellence",
      description: "We strive for excellence in every project, delivering results that exceed expectations."
    },
    {
      icon: <img src="/images/about/hands.jpg" alt="Integrity" />,
      title: "Integrity",
      description: "Built on trust and transparency, we maintain the highest ethical standards."
    },
    {
      icon: <img src="/images/about/globe.jpg" alt="Global Vision" />,
      title: "Global Vision",
      description: "Our worldwide perspective enables us to identify opportunities across borders."
    },
    {
      icon: <img src="/images/about/Innovation.jpg" alt="Innovation" />,
      title: "Innovation",
      description: "We embrace cutting-edge solutions to solve complex business challenges."
    },
    {
      icon: <img src="/images/about/Agility.jpg" alt="Agility" />,
      title: "Agility",
      description: "Quick adaptation to market changes ensures our clients stay ahead."
    },
    {
      icon: <img src="/images/about/expertise.jpg" alt="Expertise" />,
      title: "Expertise",
      description: "Deep industry knowledge and continuous learning drive our success."
    }
  ];

  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "To empower businesses worldwide by providing comprehensive, innovative solutions that drive sustainable growth and create lasting value. We bridge the gap between vision and reality, helping our clients navigate complex global markets with confidence and achieve extraordinary results."
    },
    vision: {
      title: "Our Vision",
      content: "To be the world's most trusted partner for business transformation and global expansion. We envision a future where geographical boundaries don't limit business potential, and every company has access to the expertise and resources needed to thrive in the global marketplace."
    },
    values: {
      title: "Our Values",
      content: "Our core values guide every decision we make and every relationship we build. These principles are the foundation of our culture and the driving force behind our commitment to excellence, integrity, and innovation in serving our clients worldwide and confidence extraordinary Results."
    }
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

  return (
    <div className="about-us">

{/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          
          {/* NEW: Full-screen faceted low-poly mesh */}
          <div className="low-poly-mesh-overlay"></div>

          <div className="floating-shapes">
            <div className="eagle-image">
              <img src="/images/eagle.png" alt="Eagle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div 
            id="animate-hero"
            className={`about-hero-content ${isVisible['animate-hero'] ? 'animate-fade-up' : ''}`}
          >
          <div className="flip-container">
            <h1 className="about-hero-title">About Eagle Info Global</h1>
          </div>
            <p className="about-hero-subtitle">
              Pioneering business excellence through innovative solutions and global expertise
            </p>
          </div>
        </div>
      </section>

      
      {/* Company Overview Section */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-grid">
            <div 
              id="animate-overview-content"
              className={`overview-content ${isVisible['animate-overview-content'] ? 'animate-fade-left' : ''}`}
            >
              <div className="tab-navigation">
                {Object.keys(tabContent).map((tab) => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tabContent[tab].title}
                  </button>
                ))}
              </div>
              
              <div className="tab-content">
                <h2 className="tab-title">{tabContent[activeTab].title}</h2>
                <p className="tab-text">{tabContent[activeTab].content}</p>
              </div>
            </div>

            <div 
              id="animate-overview-visual"
              className={`overview-visual ${isVisible['animate-overview-visual'] ? 'animate-fade-right' : ''}`}
            >
              <div className="visual-container">
                <div className="rotating-globe">
                  <div className="globe-inner">
                    <span className="globe-icon">
                      <img src="/images/about/globe.jpg" alt="globe" />
                    </span>
                  </div>
                  <div className="orbit orbit-1">
                    <div className="satellite">
                      <img src="/images/eagle.png" alt="eagle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div 
            id="animate-values-header"
            className={`section-header ${isVisible['animate-values-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-description">
              The principles that define who we are and guide everything we do
            </p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={index}
                id={`animate-value-${index}`}
                className={`value-card ${isVisible[`animate-value-${index}`] ? 'animate-fade-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div 
            id="animate-team-header"
            className={`section-header ${isVisible['animate-team-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-description">
              Experienced professionals dedicated to your success
            </p>
          </div>

          <div className="team-grid">
            {teamMember.map((member, index) => (
              <div
                key={index}
                id={`animate-team-${index}`}
                className={`team-card ${isVisible[`animate-team-${index}`] ? 'animate-fade-up' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="team-image-container">
                  <img src={member.image} alt={member.name} className="team-image" />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                  <div className="team-specialties">
                    {member.specialties.map((specialty, idx) => (
                    <span key={idx} className="specialty-tag">
                      <span>{specialty}</span>
                    </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div 
            id="animate-timeline-header"
            className={`section-header ${isVisible['animate-timeline-header'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-description">
              Key milestones that shaped our growth and success
            </p>
          </div>

          <div className="timeline">
            <img src="/images/about/line.jpg" className="timeline-line" alt="line" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                id={`animate-milestone-${index}`}
                className={`timeline-item ${isVisible[`animate-milestone-${index}`] ? 'animate-fade-up' : ''} ${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3 className="timeline-event">{milestone.event}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
                <div className="timeline-marker">
                    <img src="/images/about/point.jpg" alt="marker" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div 
            id="animate-about-cta"
            className={`cta-content ${isVisible['animate-about-cta'] ? 'animate-fade-up' : ''}`}
          >
            <h2 className="cta-title">Ready to Partner with Us?</h2>
            <p className="cta-description">
              Join the hundreds of businesses that trust Eagle Info Global for their growth journey.
            </p>
            <div className="cta-buttons">
  <button
    className="btn1-primary"
    onClick={() => navigate('/contact#contact-form')}
  >
    Start Your Journey
  </button>

  <button
    className="btn2-secondary"
    onClick={() => navigate('/contact#contact-form')}
  >
    Learn More
  </button>
</div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutUs;