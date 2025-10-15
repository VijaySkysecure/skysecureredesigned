import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const MICROSOFT_INTEGRATIONS = [
  'Azure Security Center Integration',
  'Microsoft Sentinel SIEM/SOAR',
  'Microsoft 365 Defender Suite',
  'Azure AD Identity Protection'
];


export function Partnerships(): React.ReactElement {
  return (
    <section className="section--muted" id="partners">
      <div className="container">
        <div className="partnerships-header">
          <h2 className="partnerships-title">Strategic Partnerships</h2>
          <p className="partnerships-description">
            Collaborating with industry leaders to deliver comprehensive cybersecurity solutions
          </p>
        </div>

        <div className="partnerships-content">
          <div className="microsoft-partner-section">
            <div className="microsoft-partner-content">
              <h3 className="microsoft-partner-title">Microsoft Security Partner</h3>
              <p className="microsoft-partner-description">
                As a Microsoft Gold Partner, we integrate seamlessly with Azure Security Center, Microsoft Sentinel, and Microsoft 365 Defender to provide unified security management across your entire digital estate.
              </p>
              <ul className="microsoft-integrations">
                {MICROSOFT_INTEGRATIONS.map((integration, index) => (
                  <li key={index} className="integration-item">
                    <div className="integration-checkmark">✓</div>
                    <span>{integration}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="microsoft-partner-card">
              <ImagePlaceholder
                label="Microsoft logo"
                imageName="homepage/logo-microsoft.png"
                width={370}
                height={90}
                borderRadius={0}
              />
              <div className="partner-badge-text">Solutions Partner</div>
              <div className="partner-specialization">Security Specialization</div>
            </div>
          </div>

          <div className="tech-ecosystem-card">
            <h3 className="tech-ecosystem-title">Technology Ecosystem</h3>
            <div className="tech-ecosystem-carousel">
              <div className="carousel-track">
                <div className="carousel-item">
                  <ImagePlaceholder
                    label="Technology ecosystem logos"
                    imageName="homepage/tech-eco.png"
                    width={800}
                    height={120}
                    borderRadius={0}
                  />
                </div>
                <div className="carousel-item">
                  <ImagePlaceholder
                    label="Technology ecosystem logos"
                    imageName="homepage/tech-eco.png"
                    width={800}
                    height={120}
                    borderRadius={0}
                  />
                </div>
                <div className="carousel-item">
                  <ImagePlaceholder
                    label="Technology ecosystem logos"
                    imageName="homepage/tech-eco.png"
                    width={800}
                    height={120}
                    borderRadius={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}