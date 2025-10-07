import React from 'react';

const CTA_STATS = [
  { label: 'Mission-Ready Professionals', value: '850+' },
  { label: 'Global Delivery Centers', value: '12' },
  { label: 'Security Certifications', value: '300+' },
];

export function MissionCTA(): React.ReactElement {
  return (
    <section className="section--light" id="mission">
      <div className="container">
        <div className="cta-panel">
          <div>
            <p className="section-header__eyebrow">Join Our Mission</p>
            <h2 className="cta-panel__title">Building a safer digital future through trusted automation.</h2>
            <p>
              Partner with SkySecure to modernize governance and resilience. Together, we empower organizations to move
              faster while staying compliant and secure.
            </p>
            <div className="hero__cta">
              <button type="button" className="button">
                Book a Consultation
              </button>
              <button type="button" className="button button--ghost">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="cta-panel__stats">
            {CTA_STATS.map((stat) => (
              <div key={stat.label} className="cta-panel__stat">
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
