import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const SOLUTIONS = [
  {
    title: '24/7 SOC Monitoring',
    subtitle: 'MANAGED SERVICE',
    description: 'Round-the-clock security operations center monitoring with AI-powered threat detection and immediate response capabilities.',
    bulletPoints: [
      'Real-time threat monitoring',
      'Incident response automation',
      'Compliance reporting'
    ],
    imageName: 'icon-identity.png',
  },
  {
    title: 'Threat Hunting',
    subtitle: 'AI-POWERED',
    description: 'Proactive threat hunting using advanced AI algorithms to identify and neutralize sophisticated attacks before they impact your business.',
    bulletPoints: [
      'Advanced persistent threat detection',
      'Behavioral analytics',
      'Custom threat intelligence'
    ],
    imageName: 'icon-data.png',
  },
  {
    title: 'Zero Trust Architecture',
    subtitle: 'CONSULTING',
    description: 'Implement comprehensive zero trust security frameworks that verify every user and device before granting access to your systems.',
    bulletPoints: [
      'Identity verification',
      'Network segmentation',
      'Policy enforcement'
    ],
    imageName: 'icon-application.png',
  },
  {
    title: 'Cloud Security',
    subtitle: 'MANAGED SERVICE',
    description: 'Secure your cloud infrastructure across AWS, Azure, and GCP with automated compliance monitoring and threat protection.',
    bulletPoints: [
      'Multi-cloud protection',
      'Configuration management',
      'Automated remediation'
    ],
    imageName: 'icon-ot.png',
  },
  {
    title: 'Security Training',
    subtitle: 'EDUCATION',
    description: 'Comprehensive cybersecurity awareness training programs designed to transform your employees into your first line of defense.',
    bulletPoints: [
      'Phishing simulation',
      'Interactive modules',
      'Progress tracking'
    ],
    imageName: 'icon-graduation.png',
  },
  {
    title: 'Risk Assessment',
    subtitle: 'CONSULTING',
    description: 'Comprehensive security assessments to identify vulnerabilities, assess risk levels, and develop strategic mitigation plans.',
    bulletPoints: [
      'Vulnerability scanning',
      'Penetration testing',
      'Risk prioritization'
    ],
    imageName: 'icon-continuity.png',
  },
];

export function SecuritySolutions(): React.ReactElement {
  return (
    <section className="section--muted" id="solutions">
      <div className="container">
        <SectionHeader
          title="Comprehensive Security Solutions"
          description="End-to-end cybersecurity services tailored for enterprise needs"
        />
        <div className="what-we-do-grid">
          {SOLUTIONS.map((solution) => (
            <div key={solution.title} className="what-we-do-card">
              <div className="what-we-do-card__header">
                <ImagePlaceholder
                  className="what-we-do-card__icon"
                  label={`${solution.title} icon`}
                  imageName={solution.imageName}
                  width={49}
                  height={49}
                  borderRadius={0}
                />
                <div className="what-we-do-card__title-section">
                  <h3 className="what-we-do-card__title">{solution.title}</h3>
                  <p className="what-we-do-card__subtitle">{solution.subtitle}</p>
                </div>
              </div>
              <div className="what-we-do-card__content">
                <p className="what-we-do-card__description">{solution.description}</p>
                <ul className="what-we-do-card__bullet-points">
                  {solution.bulletPoints.map((point, index) => (
                    <li key={index} className="what-we-do-bullet-point">
                      <span className="what-we-do-bullet-icon">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                <a className="what-we-do-card__link" href="#contact">
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
