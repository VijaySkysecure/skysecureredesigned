import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const POSITIONS = [
  {
    title: 'Senior Security Engineer',
    type: 'Remote • Full-time',
    description: 'Lead the development of our next-generation security platform using cutting-edge AI and machine learning technologies.',
    tags: ['Python', 'Machine Learning', 'Security']
  },
  {
    title: 'SOC Analyst L2',
    type: 'Hybrid • Full-time',
    description: 'Monitor and analyze security events, investigate incidents, and coordinate response activities across global infrastructure.',
    tags: ['SIEM', 'Incident Response', 'Threat Hunting']
  },
  {
    title: 'AI Research Scientist',
    type: 'Remote • Full-time',
    description: 'Research and develop cutting-edge AI algorithms for autonomous threat detection and response systems.',
    tags: ['Deep Learning', 'TensorFlow', 'Research']
  }
];

const BENEFITS = [
  {
    title: 'Cutting-Edge Technology',
    description: 'Work with the latest AI and machine learning technologies to solve complex cybersecurity challenges.',
    imageName: 'homepage/icon-rocket.png'
  },
  {
    title: 'Continuous Learning',
    description: '$5,000 annual learning budget, conference attendance, and access to industry certifications.',
    imageName: 'homepage/icon-graduation.png'
  },
  {
    title: 'Comprehensive Benefits',
    description: 'Premium healthcare, unlimited PTO, equity participation, and flexible remote work options.',
    imageName: 'homepage/icon-heart.png'
  },
  {
    title: 'Global Impact',
    description: 'Protect organizations worldwide and contribute to making the internet a safer place for everyone.',
    imageName: 'homepage/icon-globe.png'
  }
];

export function Careers(): React.ReactElement {
  return (
    <section className="section--light" id="careers">
      <div className="container">
        <div className="join-mission-header">
          <h2 className="join-mission-title">Join Our Mission</h2>
          <p className="join-mission-description">
            Build the future of cybersecurity with a team of world-class experts and cutting-edge technology
          </p>
        </div>

        <div className="mission-cta-panel">
          <div className="mission-cta-content">
            <h3 className="mission-cta-title">Ready to Create Real Impact?</h3>
            <p className="mission-cta-description">
            Join Skysecure’s global team to design solutions that protect data, build trust, and transform businesses.
            </p>
            <div className="mission-cta-buttons">
              <button 
                className="mission-button mission-button--primary"
                onClick={() => window.open('https://desk.zoho.in/', '_blank')}
              >
                Explore Career Opportunities
              </button>
              {/* <button className="mission-button mission-button--secondary">Build an AI Agent with Us</button> */}
            </div>
          </div>
          <div className="mission-metrics">
            <div className="mission-metric">
              <div className="mission-metric-value">50+</div>
              <div className="mission-metric-label">Team Members</div>
            </div>
            <div className="mission-metric">
              <div className="mission-metric-value">3</div>
              <div className="mission-metric-label">Countries</div>
            </div>
            <div className="mission-metric">
              <div className="mission-metric-value">5+</div>
              <div className="mission-metric-label">Industry experience</div>
            </div>
            <div className="mission-metric">
              <div className="mission-metric-value">99%</div>
              <div className="mission-metric-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="careers-content">
          <div className="careers-left">
            <h3 className="careers-section-title">Open Positions</h3>
            <div className="positions-list">
              {POSITIONS.map((position, index) => (
                <div key={index} className="position-card">
                  <h4 className="position-title">{position.title}</h4>
                  <p className="position-type">{position.type}</p>
                  <p className="position-description">{position.description}</p>
                  <div className="position-tags">
                    {position.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="position-tag">{tag}</span>
                    ))}
                  </div>
                  <a href="#apply" className="position-apply">Apply Now →</a>
                </div>
              ))}
            </div>
          </div>

          <div className="careers-right">
            <h3 className="careers-section-title">Why Join Skysecure.ai?</h3>
            <div className="benefits-list">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <ImagePlaceholder
                    label={benefit.title}
                    imageName={benefit.imageName}
                    width={34}
                    height={34}
                    borderRadius={0}
                    className="benefit-icon"
                  />
                  <div className="benefit-content">
                    <h4 className="benefit-title">{benefit.title}</h4>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="skill-challenge-card">
              <h4 className="challenge-title">Cyber Skill Challenge</h4>
              <p className="challenge-description">
                Test your cybersecurity knowledge with our interactive challenge. Top performers get fast-tracked interviews!
              </p>
              <div className="challenge-actions">
                <button className="challenge-button">Start Challenge</button>
                <div className="challenge-details">
                  <span className="challenge-time">15 minutes</span>
                  <span className="challenge-levels">3 difficulty levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}