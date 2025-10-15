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
    imageName: 'homepage/icon-identity.png',
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
    imageName: 'homepage/icon-data.png',
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
    imageName: 'homepage/icon-application.png',
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
    imageName: 'homepage/icon-ot.png',
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
    imageName: 'homepage/icon-graduation.png',
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
    imageName: 'homepage/icon-continuity.png',
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
                <a 
                  className="what-we-do-card__link" 
                  href={solution.title === '24/7 SOC Monitoring' ? '/soc-monitoring' : solution.title === 'Threat Hunting' ? '/threat-hunting' : solution.title === 'Zero Trust Architecture' ? '/zero-trust-architecture' : solution.title === 'Cloud Security' ? '/cloud-security' : solution.title === 'Security Training' ? '/security-training' : solution.title === 'Risk Assessment' ? '/risk-assessment' : '#contact'}
                  onClick={solution.title === '24/7 SOC Monitoring' ? () => { window.location.href = '/soc-monitoring'; } : solution.title === 'Threat Hunting' ? () => { window.location.href = '/threat-hunting'; } : solution.title === 'Zero Trust Architecture' ? () => { window.location.href = '/zero-trust-architecture'; } : solution.title === 'Cloud Security' ? () => { window.location.href = '/cloud-security'; } : solution.title === 'Security Training' ? () => { window.location.href = '/security-training'; } : solution.title === 'Risk Assessment' ? () => { window.location.href = '/risk-assessment'; } : undefined}
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
