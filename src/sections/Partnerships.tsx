import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const PARTNER_POINTS = [
  'Unified partner ecosystem across cloud, automation, and intelligence platforms.',
  'Co-innovation workshops to accelerate integrations and value delivery.',
  'Joint go-to-market programs spanning regulated industries worldwide.',
];

const ALLIANCE_BADGES = ['AWS', 'Microsoft', 'ServiceNow', 'CrowdStrike'];

const CERTIFICATIONS = ['SOC 2 Type II', 'ISO 27001', 'FedRAMP Ready'];

export function Partnerships(): React.ReactElement {
  return (
    <section className="section--light" id="partners">
      <div className="container">
        <SectionHeader
          title="Strategic Partnerships"
          description="Aligned with industry-leading partners to deliver end-to-end security outcomes."
        />
        <div className="partnerships-grid">
          <div className="partnership-card">
            <h3 className="card__title">Our Alliance Network</h3>
            <ul className="partnership-card__list">
              {PARTNER_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="logos-grid">
              {ALLIANCE_BADGES.map((badge) => (
                <span key={badge} className="badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="partnership-card">
            <h3 className="card__title">Verified Compliance</h3>
            <div className="partnership-card__logos">
              <ImagePlaceholder
                label="Featured partner logo"
                imageName="logo-partner-highlight.png"
                width={180}
                height={120}
                borderRadius={16}
              />
            </div>
            <div className="partnership-card__certifications">
              {CERTIFICATIONS.map((cert) => (
                <span key={cert} className="badge">
                  {cert}
                </span>
              ))}
            </div>
            <button type="button" className="button">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
