import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

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
                onClick={() => window.open('https://skysecure.zohorecruit.in/jobs/Careers', '_blank')}
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
          <div className="why-join-section">
            <h3 className="why-join-title">Why Join Skysecure.ai?</h3>
            <div className="benefits-grid">
              {BENEFITS.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-card-icon">
                    <ImagePlaceholder
                      label={benefit.title}
                      imageName={benefit.imageName}
                      width={48}
                      height={48}
                      borderRadius={0}
                    />
                  </div>
                  <div className="benefit-card-content">
                    <h4 className="benefit-card-title">{benefit.title}</h4>
                    <p className="benefit-card-description">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}