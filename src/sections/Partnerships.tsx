import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const MICROSOFT_INTEGRATIONS = [
  'Azure Security Center and Sentinel SIEM/SOAR Integration',
  'Microsoft 365 Defender and Identity Governance',
  'Purview Info Protection & DPDP Compliance Frameworks',
  'End-to-end Security & Cloud Operations Management'
];

const PALO_ALTO_INTEGRATIONS = [
  'Cortex XDR & XSIAM integration for proactive detection',
  'Automated incident response and orchestration',
  'MDR lab deployments for SMB to enterprise scale'
];

const COMMVAULT_INTEGRATIONS = [
  'Backup-as-a-Service and Disaster Recovery-as-a-Service',
  'Cloud workload protection and air-gapped recovery',
  'Policy-driven data lifecycle governance'
];

  const IBM_INTEGRATIONS = [
    'Network and Zero-Trust Security solutions',
    'Endpoint Protection and Threat Intelligence',
    'AI-driven orchestration and automation'
];


export function Partnerships(): React.ReactElement {
  return (
    <section className="section--muted" id="partners">
      <div className="container">
        <div className="partnerships-header">
          <h2 className="partnerships-title">Strategic Partnerships</h2>
          <p className="partnerships-description">
          Empowering enterprises through trusted alliances with global technology leaders. 
          </p>
        </div>

        <div className="partnerships-content">
          <div className="partnerships-grid">
            {/* Microsoft Partner Column */}
            <div className="partner-column">
              <div className="microsoft-partner-content">
                <h3 className="microsoft-partner-title">Microsoft Solutions Partner</h3>
                <p className="microsoft-partner-description">
                As a certified Microsoft Solutions Partner, Skysecure delivers end-to-end managed services powered by Azure, Sentinel, Defender, and Purview.
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
            </div>

            {/* Palo Alto Networks Column */}
            <div className="partner-column">
              <div className="microsoft-partner-content">
                <h3 className="microsoft-partner-title">Palo Alto Networks</h3>
                <p className="microsoft-partner-description">
                Skysecure partners with Palo Alto Networks to deliver XDR and XSIAM-based multi-tenant SOC solutions that combine AI automation with 24×7 human expertise.
                </p>
                <ul className="microsoft-integrations">
                  {PALO_ALTO_INTEGRATIONS.map((integration, index) => (
                    <li key={index} className="integration-item">
                      <div className="integration-checkmark">✓</div>
                      <span>{integration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Commvault Column */}
            <div className="partner-column">
              <div className="microsoft-partner-content">
                <h3 className="microsoft-partner-title">Commvault</h3>
                <p className="microsoft-partner-description">
                With Commvault's enterprise backup and disaster recovery solutions, Skysecure ensures complete data availability, retention, and compliance.
                </p>
                <ul className="microsoft-integrations">
                  {COMMVAULT_INTEGRATIONS.map((integration, index) => (
                    <li key={index} className="integration-item">
                      <div className="integration-checkmark">✓</div>
                      <span>{integration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Broader Ecosystem Column */}
            <div className="partner-column">
              <div className="microsoft-partner-content">
                <h3 className="microsoft-partner-title">Fortinet, CrowdStrike, IBM & Beyond</h3>
                <p className="microsoft-partner-description">
                Skysecure's broader ecosystem includes Fortinet, CrowdStrike and IBM unified under a single managed operations framework for maximum protection and efficiency.
                </p>
                <ul className="microsoft-integrations">
                  {IBM_INTEGRATIONS.map((integration, index) => (
                    <li key={index} className="integration-item">
                      <div className="integration-checkmark">✓</div>
                      <span>{integration}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Our Specializations Section */}
          <div className="specializations-section">
            <h3 className="specializations-title">Our Specializations</h3>
            <div className="specializations-grid">
              <div className="specialization-card">
                <h4 className="specialization-card-title">AI-Driven Managed Security (SOC & XDR)</h4>
              </div>
              <div className="specialization-card">
                <h4 className="specialization-card-title">Data Protection and Compliance Automation (DPDP, ISO 27001)</h4>
              </div>
              <div className="specialization-card">
                <h4 className="specialization-card-title">Cloud Infrastructure Optimization and Resilience</h4>
              </div>
              <div className="specialization-card">
                <h4 className="specialization-card-title">AI Agent Development & Managed Automation</h4>
              </div>
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