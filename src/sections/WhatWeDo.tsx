import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CAPABILITIES = [
  {
    title: 'Commercial Marketplace',
    subtitle: 'STREAMLINED IT PROCUREMENT',
    description: 'Discover a world of possibilities, where innovative solutions, diverse offerings, and exceptional services converge to empower businesses...',
    bulletPoints: [
      'Wide range of IT solutions',
      'Simplified purchasing process',
      'Tailored to organizational needs'
    ],
    imageName: 'icon-risk.png',
  },
  {
    title: 'Solution Implementation',
    subtitle: 'TAILORED SECURITY STRATEGIES',
    description: 'Experience a seamless transition, guided by our expert team, as we collaborate closely with you to deliver a customized solution that maximizes efficiency...',
    bulletPoints: [
      'Customized security measures',
      'Expert guidance during implementation',
      'Maximized efficiency'
    ],
    imageName: 'icon-compliance.png',
  },
  {
    title: 'Operational Excellence',
    subtitle: 'OPTIMIZED BUSINESS OPERATIONS',
    description: 'We are committed to ensuring operational excellence by helping you identifying gaps, deploying best practices & recommendation...',
    bulletPoints: [
      'Enhanced operational efficiency',
      'Best practices for improvement',
      'Adaptable strategies'
    ],
    imageName: 'icon-cloud.png',
  },
  {
    title: 'Simplified Management',
    subtitle: 'CENTRALIZED CONTROL DASHBOARD',
    description: 'Streamlined management approach simplifies complex tasks, providing you with a centralized dashboard, automated workflows, and real-time...',
    bulletPoints: [
      'User-friendly interface',
      'Real-time alerts',
      'Efficient IT resource management'
    ],
    imageName: 'icon-intelligence.png',
  },
  {
    title: 'Security & Compliance Metrics',
    subtitle: 'PROACTIVE RISK MANAGEMENT',
    description: 'Our solution platform offer a clear picture of your organization\'s security performance, enabling you to assess risk levels, identify areas for improvement...',
    bulletPoints: [
      'Regular vulnerability assessments',
      'Compliance with industry standards',
      'Continuous monitoring'
    ],
    imageName: 'icon-operations.png',
  },
  {
    title: 'Assessment',
    subtitle: 'COMPREHENSIVE EVALUATION SERVICES',
    description: 'Our comprehensive assessment services provide a thorough analysis of your systems, processes, and performance, enabling data-driven insights...',
    bulletPoints: [
      'In-depth analysis of organizational systems',
      'Identification of areas for improvement',
      'Clear, actionable recommendations for optimization'
    ],
    imageName: 'icon-assess.png',
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
        <div className="what-we-do-grid">
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
                  href={item.title === 'Commercial Marketplace' ? '/marketplace' : 
                        item.title === 'Solution Implementation' ? '/solution-implementation' :
                        item.title === 'Operational Excellence' ? '/operational-excellence' :
                        item.title === 'Simplified Management' ? '/simplified-management' :
                        item.title === 'Security & Compliance Metrics' ? '/security-compliance-metrics' :
                        item.title === 'Assessment' ? '/assessment' : '#contact'}
                  onClick={(e) => {
                    if (item.title === 'Commercial Marketplace') {
                      e.preventDefault();
                      window.location.href = '/marketplace';
                    } else if (item.title === 'Solution Implementation') {
                      e.preventDefault();
                      window.location.href = '/solution-implementation';
                    } else if (item.title === 'Operational Excellence') {
                      e.preventDefault();
                      window.location.href = '/operational-excellence';
                    } else if (item.title === 'Simplified Management') {
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
