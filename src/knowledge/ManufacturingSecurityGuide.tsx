import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const MANUFACTURING_RISE = [
  {
    icon: 'icon-arrow-up',
    title: 'Make in India',
    description: ''
  },
  {
    icon: 'icon-gear',
    title: 'Automation',
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
                <a href="/" className="breadcrumb-link">Home</a>
                <span className="breadcrumb-separator">&gt;</span>
                <a href="#knowledge-resources" className="breadcrumb-link">Knowledge & Resources</a>
                <span className="breadcrumb-separator">&gt;</span>
                <a href="#blog" className="breadcrumb-link">Blog</a>
                <span className="breadcrumb-separator">&gt;</span>
                <span className="breadcrumb-current">A Guide to IT Security Transformation in Manufacturing</span>
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
                  width={16}
                  height={16}
                  borderRadius={0}
                />
                <span>July 08, 2023</span>
              </div>
              <div className="blog-meta-item">
                <ImagePlaceholder
                  label="Author"
                  imageName="knowledge/icon-person.png"
                  width={16}
                  height={16}
                  borderRadius={0}
                />
                <span>Suresh Kumar</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Visual */}
        <section className="blog-hero">
          <div className="container">
            <ImagePlaceholder
              label="Manufacturing Security Hero Visual"
              imageName="knowledge/manufacturing-hero-visual.png"
              width={1200}
              height={400}
              borderRadius={0}
            />
          </div>
        </section>

        {/* Introduction */}
        <section className="blog-content">
          <div className="container">
            <div className="blog-intro">
              <p>
                India's manufacturing industry is undergoing a significant transformation, driven by technology adoption, government initiatives like "Make in India," and increasing global investments. As the sector embraces digitalization and integrates advanced systems like Industrial Internet of Things (IIoT), artificial intelligence (AI), and automation, the risk of cyberattacks has escalated dramatically. This comprehensive guide explores IT security transformation strategies specifically tailored for manufacturing organizations, focusing on protecting critical operations, sensitive data, and innovative processes.
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
                        width={60}
                        height={60}
                        borderRadius={0}
                      />
                    </div>
                    <h3 className="manufacturing-card__title">{item.title}</h3>
                  </div>
                ))}
              </div>
              <p className="blog-section-text">
                The "Make in India" initiative has positioned India as a global manufacturing hub, attracting significant foreign direct investment and fostering innovation. The adoption of advanced technologies such as robotics, artificial intelligence, and IoT has led to increased efficiency, job creation, and substantial investment in the sector.
              </p>
            </section>

            {/* The Cybersecurity Challenge */}
            <section className="blog-section">
              <h2 className="blog-section-title">The Cybersecurity Challenge</h2>
              <ul className="challenge-list">
                {CYBERSECURITY_CHALLENGES.map((challenge, index) => (
                  <li key={index} className="challenge-item">
                    <div className="challenge-icon">
                      <ImagePlaceholder
                        label="Question"
                        imageName="knowledge/icon-question-red.png"
                        width={20}
                        height={20}
                        borderRadius={0}
                      />
                    </div>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
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
                        width={50}
                        height={50}
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
              <ul className="consideration-list">
                {INVESTMENT_CONSIDERATIONS.map((consideration, index) => (
                  <li key={index} className="consideration-item">
                    <div className="consideration-icon">
                      <ImagePlaceholder
                        label={consideration.title}
                        imageName={`knowledge/${consideration.icon}.png`}
                        width={20}
                        height={20}
                        borderRadius={0}
                      />
                    </div>
                    <div className="consideration-content">
                      <strong>{consideration.title}</strong> - {consideration.description}
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
                        width={50}
                        height={50}
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
            <section className="blog-section">
              <h2 className="blog-section-title">A Trusted Partner for IT Security Transformation</h2>
              <div className="partner-content">
                <p>
                  Skysecure stands as a trusted partner in your IT security transformation journey. With our comprehensive cybersecurity frameworks, deep industry expertise, and proven track record in manufacturing environments, we help organizations build resilient security postures that support innovation and growth. Our holistic approach combines advanced technology solutions with strategic guidance, ensuring that your manufacturing operations remain secure, compliant, and future-ready.
                </p>
                <button className="cta-button">Contact Skysecure Today</button>
              </div>
            </section>

            {/* Author Bio */}
            <section className="author-bio">
              <div className="author-bio__image">
                <ImagePlaceholder
                  label="Suresh Kumar"
                  imageName="knowledge/suresh-kumar-profile.png"
                  width={80}
                  height={80}
                  borderRadius={40}
                />
              </div>
              <div className="author-bio__content">
                <h3 className="author-name">Suresh Kumar</h3>
                <p className="author-title">Co-Founder & Chief Executive Officer, Skysecure</p>
                <p className="author-description">
                  Suresh Kumar is a seasoned cybersecurity expert with over 15 years of experience in industrial cybersecurity and risk management. He specializes in helping manufacturing organizations implement comprehensive security frameworks that protect critical infrastructure while enabling digital transformation.
                </p>
              </div>
            </section>

            {/* You May Also Like */}
            <section className="related-articles">
              <h2 className="related-articles__title">You May Also Like</h2>
              <div className="related-articles__grid">
                {RELATED_ARTICLES.map((article, index) => (
                  <div key={index} className="related-article">
                    <div className="related-article__image">
                      <ImagePlaceholder
                        label={article.title}
                        imageName={`knowledge/${article.image}.png`}
                        width={300}
                        height={200}
                        borderRadius={8}
                      />
                    </div>
                    <div className="related-article__content">
                      <span className="related-article__tag">{article.tag}</span>
                      <h3 className="related-article__title">{article.title}</h3>
                      <p className="related-article__description">{article.description}</p>
                      <div className="related-article__meta">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
