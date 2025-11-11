import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const MANUFACTURING_RISE = [
  {
    icon: 'icon-factory',
    title: 'Make in India',
    description: ''
  },
  {
    icon: 'icon-gear',
    title: 'Automation',
    description: ''
  },
  {
    icon: 'icon-map-pin',
    title: 'India Growth',
    description: ''
  },
  {
    icon: 'icon-line-graph',
    title: 'Investment',
    description: ''
  }
];

const CYBERSECURITY_CHALLENGES = [
  'Rising Digital Risks',
  'Data breaches, ransomware, and intellectual property theft',
  'Rising exposure due to connected machines and industrial IoT',
  'Vulnerability of OT and IT networks'
];

const CYBERSECURITY_MEASURES = [
  {
    icon: 'icon-network',
    title: 'Network Security',
    description: 'Firewalls, IDS/IPS, and network segmentation'
  },
  {
    icon: 'icon-desktop',
    title: 'Endpoint Security',
    description: 'EDR, antivirus, and patch management'
  },
  {
    icon: 'icon-database',
    title: 'Information Protection',
    description: 'Data discovery, classification, and access control'
  },
  {
    icon: 'icon-people-gear',
    title: 'Employee Training',
    description: 'Awareness programs and phishing simulations'
  },
  {
    icon: 'icon-target',
    title: 'Threat Detection',
    description: 'Real-time monitoring and threat mitigation'
  },
  {
    icon: 'icon-links',
    title: 'Supply Chain Security',
    description: 'Vetting and monitoring vendor cybersecurity'
  }
];

const INVESTMENT_CONSIDERATIONS = [
  {
    icon: 'icon-cloud',
    title: 'Cloud Security',
    description: 'SIEM tools, anomaly detection, and threat intelligence'
  },
  {
    icon: 'icon-brain',
    title: 'AI & ML Security',
    description: 'Data validation and algorithm monitoring'
  },
  {
    icon: 'icon-vr',
    title: 'AR/VR Security',
    description: 'Secure connections and privacy controls'
  },
  {
    icon: 'icon-server',
    title: 'Edge Computing',
    description: 'Authentication and device patching'
  }
];

const TRANSFORMATION_OUTCOMES = [
  {
    icon: 'icon-two-gears',
    title: 'Process Optimization',
    description: 'Automation and cost reduction'
  },
  {
    icon: 'icon-lightbulb',
    title: 'Innovation',
    description: '3D printing, robotics, AI, and IoT advancements'
  },
  {
    icon: 'icon-shield-question',
    title: 'Secure Enterprise',
    description: 'Agility and resilience with security at scale'
  },
  {
    icon: 'icon-three-people',
    title: 'Employee Collaboration',
    description: 'Secure digital platforms and productivity'
  },
  {
    icon: 'icon-speech-bubble',
    title: 'Customer Engagement',
    description: 'Personalized experiences and trust'
  },
  {
    icon: 'icon-leaf',
    title: 'Sustainability',
    description: 'Smart IoT analytics for resource efficiency'
  }
];

const RELATED_ARTICLES = [
  {
    image: 'cloud-security-cover',
    tag: 'Blog',
    title: 'The Future of Cloud Security',
    description: 'Exploring emerging trends and technologies in cloud security',
    date: 'June 15, 2023',
    readTime: '5 min read'
  },
  {
    image: 'circuit-board-cover',
    tag: 'Report',
    title: 'AI-Driven Threat Detection: 2024 Report',
    description: 'Comprehensive analysis of AI-powered security solutions',
    date: 'May 22, 2023',
    readTime: '8 min read'
  },
  {
    image: 'server-racks-cover',
    tag: 'Guide',
    title: 'Zero Trust in Industrial Environments',
    description: 'Implementing zero trust architecture for industrial systems',
    date: 'April 10, 2023',
    readTime: '6 min read'
  }
];

export function ManufacturingSecurityGuide(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <section className="blog-breadcrumbs">
          <div className="container">
              <nav className="breadcrumbs">
                <a href="/" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <a href="/#knowledge-resources" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => { const element = document.getElementById('knowledge-resources'); if (element) element.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Knowledge & Resources</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <a href="/#knowledge-resources" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => { const element = document.getElementById('knowledge-resources'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { const blogTab = element.querySelector('[data-tab="blog"]') as HTMLElement; if (blogTab) blogTab.click(); }, 500); } }, 100); }}>Blog</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <span className="breadcrumb-current" style={{ color: '#000000' }}>A Guide to IT Security Transformation in Manufacturing</span>
              </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="blog-header">
          <div className="container">
            <h1 className="blog-title">A Guide to IT Security Transformation in Manufacturing</h1>
            <div className="blog-meta">
              <div className="blog-meta-item">
                <ImagePlaceholder
                  label="Calendar"
                  imageName="knowledge/icon-calendar.png"
                  width={14}
                  height={24}
                  borderRadius={0}
                />
                <span>July 08, 2023</span>
              </div>
              <div className="blog-meta-item">
                <ImagePlaceholder
                  label="Suresh Kumar"
                  imageName="homepage/portrait1.png"
                  width={24}
                  height={24}
                  borderRadius={12}
                />
                <span>Suresh Kumar</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Visual */}
        <section className="blog-hero">
          <div className="container" style={{ textAlign: 'center' }}>
            <ImagePlaceholder
              label="Manufacturing Security Hero Visual"
              imageName="knowledge/manufacturing-hero-visual.png"
              width={800}
              height={330}
              borderRadius={0}
            />
          </div>
        </section>

        {/* Introduction */}
        <section className="blog-content">
          <div className="container">
            <div className="blog-intro">
              <p>
              The manufacturing industry in India is undergoing a massive transformation fueled by technology, government initiatives, and global investments. However, as the sector digitizes and integrates advanced systems, the risks of cyberattacks grow significantly. This guide explores how IT security transformation is essential for protecting operations, data, and innovation in the manufacturing sector.
              </p>
            </div>

            {/* The Rise of Manufacturing in India */}
            <section className="blog-section">
              <h2 className="blog-section-title">The Rise of Manufacturing in India</h2>
              <div className="manufacturing-cards">
                {MANUFACTURING_RISE.map((item, index) => (
                  <div key={index} className="manufacturing-card">
                    <div className="manufacturing-card__icon">
                      <ImagePlaceholder
                        label={item.title}
                        imageName={`knowledge/${item.icon}.png`}
                        width={33}
                        height={38}
                        borderRadius={0}
                      />
                    </div>
                    <h3 className="manufacturing-card__title">{item.title}</h3>
                  </div>
                ))}
              </div>
              <p className="blog-section-text">
              Growth driven by 'Make in India' initiative has accelerated the adoption of advanced technologies across manufacturing facilities. The integration of automation, robotics, AI, and IoT systems has brought unprecedented benefits including increased efficiency, job creation, and significant investment inflow.
              </p>
            </section>

            {/* The Cybersecurity Challenge */}
            <section className="blog-section">
              <h2 className="blog-section-title">The Cybersecurity Challenge</h2>
              <div style={{ background: 'linear-gradient(90deg, #FEF2F2 0%, #FEFCE8 100%)', padding: '32px', borderRadius: '12px', width: '1000px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ width: '30px', height: '30px', backgroundColor: '#FEF2F2', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
                    <ImagePlaceholder
                      label="Question"
                      imageName="knowledge/icon-question-mark.png"
                      width={30}
                      height={36}
                      borderRadius={0}
                    />
                  </div>
                  <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold', color: '#000000' }}>Rising Digital Risks</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {CYBERSECURITY_CHALLENGES.slice(1).map((challenge, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '8px' }}>
                      <div style={{ width: '8px', height: '8px', backgroundColor: '#DC2626', borderRadius: '50%', marginTop: '6px', marginRight: '12px', flexShrink: 0 }}></div>
                      <span style={{ color: 'rgba(55, 65, 81, 1)' }}>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Essential Cybersecurity Measures */}
            <section className="blog-section">
              <h2 className="blog-section-title">Essential Cybersecurity Measures</h2>
              <div className="measures-grid">
                {CYBERSECURITY_MEASURES.map((measure, index) => (
                  <div key={index} className="measure-card">
                    <div className="measure-card__icon">
                      <ImagePlaceholder
                        label={measure.title}
                        imageName={`knowledge/${measure.icon}.png`}
                        width={measure.icon === 'icon-database' ? 22 : index === 2 ? 20 : index === 3 ? 30 : 40}
                        height={measure.icon === 'icon-database' ? 30 : index === 2 ? 20 : index === 3 ? 30 : 40}
                        borderRadius={0}
                      />
                    </div>
                    <h3 className="measure-card__title">{measure.title}</h3>
                    <p className="measure-card__description">{measure.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Considerations for Cybersecurity Investment */}
            <section className="blog-section">
              <h2 className="blog-section-title">Key Considerations for Cybersecurity Investment</h2>
              <ul className="consideration-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {INVESTMENT_CONSIDERATIONS.map((consideration, index) => (
                  <li key={index} className="consideration-item" style={{ 
                    backgroundColor: '#F3F4F6', 
                    padding: '20px', 
                    borderRadius: '8px', 
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    width: '850px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div className="consideration-icon" style={{ flexShrink: 0, marginTop: '2px' }}>
                      <ImagePlaceholder
                        label={consideration.title}
                        imageName={`knowledge/${consideration.icon}.png`}
                        width={24}
                        height={24}
                        borderRadius={0}
                      />
                    </div>
                    <div className="consideration-content" style={{ flex: 1 }}>
                      <h3 style={{ 
                        margin: '0 0 8px 0', 
                        fontSize: '16px', 
                        fontWeight: 'bold', 
                        color: '#000000',
                        lineHeight: '1.2'
                      }}>
                        {consideration.title}
                      </h3>
                      <p style={{ 
                        margin: 0, 
                        fontSize: '14px', 
                        color: '#374151',
                        lineHeight: '1.4'
                      }}>
                        {consideration.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Outcomes of IT Security Transformation */}
            <section className="blog-section">
              <h2 className="blog-section-title">Key Outcomes of IT Security Transformation</h2>
              <div className="outcomes-grid">
                {TRANSFORMATION_OUTCOMES.map((outcome, index) => (
                  <div key={index} className="outcome-card">
                    <div className="outcome-card__icon">
                      <ImagePlaceholder
                        label={outcome.title}
                        imageName={`knowledge/${outcome.icon}.png`}
                        width={['icon-lightbulb', 'icon-speech-bubble', 'icon-shield-question'].includes(outcome.icon) ? 36 : 50}
                        height={['icon-lightbulb', 'icon-speech-bubble', 'icon-shield-question'].includes(outcome.icon) ? 44 : 50}
                        borderRadius={0}
                      />
                    </div>
                    <h3 className="outcome-card__title">{outcome.title}</h3>
                    <p className="outcome-card__description">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* A Trusted Partner for IT Security Transformation */}
            <section className="blog-section" style={{ background: 'linear-gradient(90deg, #EFF6FF 0%, rgba(10, 78, 255, 0.05) 100%)', padding: '32px', borderRadius: '12px', textAlign: 'center' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center', marginBottom: '24px' }}>A Trusted Partner for IT Security Transformation</h2>
              <div className="partner-content" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ marginBottom: '16px', fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
                  Skysecure has been at the forefront of cybersecurity innovation, helping manufacturing organizations strengthen their IT security frameworks. Our proven approach combines strategy, technology, and expertise to secure your digital assets and operations.
                </p>
                <p style={{ marginBottom: '0px', fontSize: '16px', lineHeight: '1.6', color: '#374151' }}>
                  Partner with us to accelerate your IT security transformation journey and achieve sustainable growth.
                </p>
                <div style={{ textAlign: 'center' }}>
                </div>
              </div>
            </section>

            {/* Author Bio */}
            <section className="author-bio" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginTop: '100px', width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '50px 50px' }}>
              <div className="author-bio__image" style={{ flexShrink: 0 }}>
                <ImagePlaceholder
                  label="Suresh Kumar"
                  imageName="homepage/portrait1.png"
                  width={80}
                  height={80}
                  borderRadius={40}
                />
              </div>
              <div className="author-bio__content" style={{ flex: 1 }}>
                <h3 className="author-name" style={{ fontSize: '18px', fontWeight: 'bold', color: '#000000', margin: '0 0 4px 0' }}>Suresh Kumar</h3>
                <p className="author-title" style={{ fontSize: '14px', color: '#0066CC', margin: '0 0 8px 0' }}>Co-Founder & Chief Executive Officer, Skysecure</p>
                <p className="author-description" style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5', margin: 0 }}>
                Expert in industrial cybersecurity with over 10 years of experience helping manufacturing organizations secure their digital transformation initiatives.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
