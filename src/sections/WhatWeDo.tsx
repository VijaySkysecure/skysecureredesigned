import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CAPABILITIES = [
  {
    title: 'Security Operations',
    subtitle: 'PROACTIVE RISK MANAGEMENT',
    description: 'We manage your entire security lifecycle, from licensing to continuous protection. Our AI-powered SOC provides real-time detection...',
    bulletPoints: [
      'Fewer incidents',
      'Faster containment',
      'Assured governance 24/7'
    ],
    imageName: 'homepage/icon-operations.png',
  },
  {
    title: 'AI Agents',
    subtitle: 'TAILORED SOLUTIONS',
    description: 'We design, license, and manage custom AI agents specifically crafted to address your unique business challenges. From automating...',
    bulletPoints: [
      'Lower operational costs',
      'Faster execution',
      'Improved productivity across teams'
    ],
    imageName: 'homepage/icon-compliance.png',
  },
  {
    title: 'Data Operations',
    subtitle: 'Unlock Business Intelligence',
    description: 'We design and manage governed data ecosystems that unlock the full potential of your business intelligence while ensuring...',
    bulletPoints: [
      'Unified visibility',
      'Automated compliance',
      'Data you can trust'
    ],
    imageName: 'homepage/icon-cloud.png',
  },
  {
    title: 'Infrastructure Operations',
    subtitle: 'Scalable Cloud Infrastructure',
    description: 'We architect, license, and manage cloud-ready infrastructure designed for reliability and scalability. From deployment to ongoing...',
    bulletPoints: [
      'Always-on resilience',
      'Predictable costs',
      'Simplified cloud management'
    ],
    imageName: 'homepage/icon-risk.png',
  },
];

export function WhatWeDo(): React.ReactElement {
  return (
    <section className="section--light" id="services">
      <div className="container">
        <SectionHeader
          title="What We Do"
          description="We provide exclusive services for your business"
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
