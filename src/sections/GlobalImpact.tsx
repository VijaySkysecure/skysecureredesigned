import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const IMPACT_METRICS = [
  { label: 'Mean Time to Detect', value: '12 min' },
  { label: 'Critical Incidents Resolved', value: '1,240+' },
  { label: 'Automated Control Coverage', value: '92.7%' },
  { label: 'Platform Availability', value: '99.97%' },
];

const IMPACT_CARDS = [
  {
    title: 'Threat Response Centers',
    description: 'Five follow-the-sun response centers analyzing billions of events every 24 hours.',
    imageName: 'icon-response.png',
  },
  {
    title: 'Regulatory Intelligence',
    description: 'Automated monitoring of 60+ global regulators with mapped updates to your control framework.',
    imageName: 'icon-regulatory.png',
  },
  {
    title: 'Customer Trust Outcomes',
    description: 'Joint playbooks raised customer trust scores by an average of 32% year-over-year.',
    imageName: 'icon-trust.png',
  },
];

export function GlobalImpact(): React.ReactElement {
  return (
    <section className="section--light" id="impact">
      <div className="container">
        <SectionHeader
          title="Global Security Impact"
          description="Delivering measurable resilience across highly regulated industries."
        />
        <div className="stat-board">
          <div className="stat-board__panel">
            <ImagePlaceholder
              label="Global impact visualization"
              imageName="graphic-global-map.png"
              width={640}
              height={380}
              borderRadius={24}
            />
          </div>
          <div className="stat-board__panel stat-board__metrics">
            {IMPACT_METRICS.map((metric) => (
              <div key={metric.label} className="stat-board__metric">
                <span>{metric.label}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="card-grid impact-card-grid">
          {IMPACT_CARDS.map((card) => (
            <div key={card.title} className="card">
              <ImagePlaceholder
                className="card__icon"
                label={`${card.title} icon`}
                imageName={card.imageName}
                width={64}
                height={64}
                borderRadius={16}
              />
              <h3 className="card__title">{card.title}</h3>
              <p className="card__description">{card.description}</p>
              <a className="card__link" href="#insights">
                Read the report
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
