import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const SOLUTIONS = [
  {
    title: '24/7 SOC Monitoring',
    description: 'Implement least-privilege across hybrid ecosystems with adaptive policy enforcement.',
    imageName: 'icon-identity.png',
  },
  {
    title: 'Data Protection & Privacy',
    description: 'Encrypt sensitive assets, automate data discovery, and fulfill privacy obligations globally.',
    imageName: 'icon-data.png',
  },
  {
    title: 'Application Security Fabric',
    description: 'Integrate secure SDLC guardrails and runtime defenses for cloud-native workloads.',
    imageName: 'icon-application.png',
  },
  {
    title: 'Operational Technology Security',
    description: 'Safeguard industrial assets with segmentation, monitoring, and incident response programs.',
    imageName: 'icon-ot.png',
  },
  {
    title: 'Managed Detection & Response',
    description: 'Leverage 24/7 analyst coverage and AI to detect, triage, and eradicate threats.',
    imageName: 'icon-mdr.png',
  },
  {
    title: 'Business Continuity Orchestration',
    description: 'Coordinate resilience plans, tabletop exercises, and crisis communications end-to-end.',
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
        <div className="card-grid">
          {SOLUTIONS.map((solution) => (
            <div key={solution.title} className="card">
              <ImagePlaceholder
                className="card__icon"
                label={`${solution.title} icon`}
                imageName={solution.imageName}
                width={64}
                height={64}
                borderRadius={16}
              />
              <h3 className="card__title">{solution.title}</h3>
              <p className="card__description">{solution.description}</p>
              <a className="card__link" href="#contact">
                Request details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
