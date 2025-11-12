import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CAPABILITIES = [
  {
    title: 'Security Operations',
    subtitle: 'PROACTIVE RISK MANAGEMENT',
    description: 'Our AI-powered Security Operations Center (SOC) monitors, detects, and neutralizes threats before they can disrupt your business. From endpoint to cloud, we safeguard your entire security lifecycle.',
    bulletPoints: [
      'Reduced Incidents',
      'Rapid Containment',
      'Assured 24X7 Governance'
    ],
    imageName: 'homepage/icon-operations.png',
  },
  {
    title: 'AI Agents',
    subtitle: 'Intelligence That Works for You',
    description: 'We design and manage custom AI agents that automate repetitive tasks, enhance decision-making, and elevate team productivity, giving your business the agility to move faster and perform better.',
    bulletPoints: [
      'Cut operational costs and time',
      'Accelerate execution with real-time intelligence',
      'Empower teams with intelligent automation'
    ],
    imageName: 'homepage/icon-compliance.png',
  },
  {
    title: 'Data Operations',
    subtitle: 'Turn Data into Decisions',
    description: 'We design and manage intelligent, secure data ecosystems that turn complex data into clear, real-time insights. Our unified data operations framework brings together visibility, compliance, and accuracy to help you make smarter decisions, move faster, and achieve measurable growth.',
    bulletPoints: [
      'Real-time visibility',
      'End-to-end governance',
      'Accurate insights for every decision'
    ],
    imageName: 'homepage/icon-cloud.png',
  },
  {
    title: 'Infrastructure Operations',
    subtitle: 'Reliable, Scalable, and Cloud-Ready',
    description: 'We build and manage cloud infrastructure that keeps your business running smoothly, securely, and at scale. From planning and deployment to continuous optimization, we deliver performance, reliability, and efficiency that evolves with your needs.',
    bulletPoints: [
      'Always on and resilient',
      'Predictable and transparent costs',
      'Simple, secure, and scalable management'
    ],
    imageName: 'homepage/icon-risk.png',
  },
];

export function WhatWeDo(): React.ReactElement {
  return (
    <section className="section--light" id="services">
      <div className="container">
        <SectionHeader
          title="Your Entire IT, Managed Intelligently"
          description="Skysecure helps you do more with less, fewer vendors, fewer tools, more outcomes. Our unified MSP model automates operations, reduces downtime, and delivers measurable efficiency across your entire IT ecosystem."
        />
        <div 
          className="what-we-do-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            marginTop: '48px',
            justifyItems: 'center'
          }}
        >
          {CAPABILITIES.map((item) => (
            <div key={item.title} className="what-we-do-card">
              <div className="what-we-do-card__header">
                <ImagePlaceholder
                  className="what-we-do-card__icon"
                  label={`${item.title} icon`}
                  imageName={item.imageName}
                  width={49}
                  height={49}
                  borderRadius={0}
                />
                <div className="what-we-do-card__title-section">
                  <h3 className="what-we-do-card__title">{item.title}</h3>
                  <p className="what-we-do-card__subtitle">{item.subtitle}</p>
                </div>
              </div>
              <div className="what-we-do-card__content">
                <p className="what-we-do-card__description">{item.description}</p>
                <ul className="what-we-do-card__bullet-points">
                  {item.bulletPoints.map((point, index) => (
                    <li key={index} className="what-we-do-bullet-point">
                      <span className="what-we-do-bullet-icon">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a 
                  className="what-we-do-card__link" 
                  href={item.title === 'Security Operations' ? '/marketplace' : 
                        item.title === 'AI Agents' ? '/solution-implementation' :
                        item.title === 'Data Operations' ? '/operational-excellence' :
                        item.title === 'Infrastructure Operations' ? '/simplified-management' :
                        item.title === 'Security & Compliance Metrics' ? '/security-compliance-metrics' :
                        item.title === 'Assessment' ? '/assessment' : '#contact'}
                  onClick={(e) => {
                    // Save scroll position before navigation
                    sessionStorage.setItem('restoreScrollTo', 'services');
                    
                    if (item.title === 'Security Operations') {
                      e.preventDefault();
                      window.location.href = '/marketplace';
                    } else if (item.title === 'AI Agents') {
                      e.preventDefault();
                      window.location.href = '/solution-implementation';
                    } else if (item.title === 'Data Operations') {
                      e.preventDefault();
                      window.location.href = '/operational-excellence';
                    } else if (item.title === 'Infrastructure Operations') {
                      e.preventDefault();
                      window.location.href = '/simplified-management';
                    } else if (item.title === 'Security & Compliance Metrics') {
                      e.preventDefault();
                      window.location.href = '/security-compliance-metrics';
                    } else if (item.title === 'Assessment') {
                      e.preventDefault();
                      window.location.href = '/assessment';
                    }
                  }}
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
