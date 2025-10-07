import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const POSITIONS = [
  { role: 'Senior Compliance Architect', location: 'Remote � North America' },
  { role: 'Threat Intelligence Lead', location: 'London, UK' },
  { role: 'Platform Automation Engineer', location: 'Singapore' },
];

const BENEFITS = [
  {
    copy: 'Hybrid-first culture with collaboration hubs across three continents.',
    imageName: 'icon-benefit-hybrid.png',
  },
  {
    copy: 'Dedicated research time to explore emerging security and compliance tech.',
    imageName: 'icon-benefit-research.png',
  },
  {
    copy: 'Expanded professional development budgets and certification support.',
    imageName: 'icon-benefit-learning.png',
  },
  {
    copy: 'Inclusive teams focused on mentorship, impact, and continuous learning.',
    imageName: 'icon-benefit-inclusion.png',
  },
];

export function Careers(): React.ReactElement {
  return (
    <section className="section--muted" id="careers">
      <div className="container">
        <div className="section-header section-header--left">
          <p className="section-header__eyebrow">Careers @ SkySecure</p>
          <h2 className="section-header__title">Open Positions</h2>
          <p className="section-header__description">
            Be part of a mission-driven team advancing adaptive security and compliance worldwide.
          </p>
        </div>
        <div className="careers">
          <div className="positions-list">
            {POSITIONS.map((position) => (
              <div key={position.role} className="positions-list__item">
                <strong>{position.role}</strong>
                <span>{position.location}</span>
                <div className="hero__cta" style={{ marginTop: '24px' }}>
                  <button type="button" className="button button--ghost">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="careers__sidebar">
            <h3 className="card__title">Why Join Skysecure.ai?</h3>
            <div className="benefits-list">
              {BENEFITS.map((benefit) => (
                <div key={benefit.copy} className="benefits-list__item">
                  <ImagePlaceholder
                    label="Benefit icon"
                    imageName={benefit.imageName}
                    width={48}
                    height={48}
                    borderRadius={12}
                  />
                  <p>{benefit.copy}</p>
                </div>
              ))}
            </div>
            <div className="badge-row" style={{ marginTop: '32px' }}>
              <span className="badge">Diversity First</span>
              <span className="badge">Flexible Schedules</span>
              <span className="badge">Global Teams</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
