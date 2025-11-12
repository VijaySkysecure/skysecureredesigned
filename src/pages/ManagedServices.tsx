import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { TrustedCompanies } from '../sections/TrustedCompanies';
import { Testimonials } from '../sections/Testimonials';
import '../styles/managed-services.css';

const STRATEGIC_APPROACH = [
  {
    icon: 'icon-shield',
    h2: 'Where Cyber, Data, Infrastructure, and AI work together, so your business runs smarter, safer, and faster.',
    body: 'With Skysecure\'s Unified MSP Framework, you gain complete visibility, control, and confidence across your technology ecosystem. We streamline management, automate routine operations, and turn data into decisions, so your teams can focus what really matters.'
  },
  {
    icon: 'icon-brain',
    h2: 'The New Standard in Managed Services.',
    body: 'We are redefining how businesses think about IT management. By combining automation, accountability, and AI-powered insights, Skysecure delivers measurable outcomes, not just maintenance. With us, managed services become a foundation for innovation, efficiency, and consistent growth.'
  }
];

const CASE_STUDIES_TABLE = [
  {
    client: 'Fintech Enterprise',
    challenge: 'Fragmented vendors, slow incident response',
    solution: 'Unified MSP with AI-driven SOC and automated patching',
    outcome: '60% faster detection, 35% lower costs'
  },
  {
    client: 'Manufacturing Firm',
    challenge: 'Unreliable infrastructure & downtime',
    solution: 'End-to-end Cloud & Infra management',
    outcome: '99.9% uptime, smoother scalability'
  },
  {
    client: 'Healthcare Network',
    challenge: 'Data compliance and DPDP readiness',
    solution: 'Data governance & protection under one platform',
    outcome: '100% compliance, improved trust scores'
  }
];

const COMPREHENSIVE_SOLUTIONS = [
  {
    icon: 'icon-growth',
    title: 'Network & Infrastructure Management',
    description: 'Comprehensive oversight of your networks and IT infrastructure to ensure uptime, security, and scalability.'
  },
  {
    icon: 'icon-waves',
    title: 'Cloud Solutions',
    description: 'Flexible, secure cloud services that scale with your business needs. From private to hybrid and public cloud, we provide a complete range of cloud management services.'
  },
  {
    icon: 'icon-chainlink',
    title: 'Data Security & Backup',
    description: 'Advanced security measures to protect your data, combined with efficient backup solutions to ensure business continuity.'
  },
  {
    icon: 'icon-refresh',
    title: 'Remote & On-Site Support',
    description: 'Providing efficient troubleshooting, maintenance, and repair services either remotely or on-site, ensuring minimal disruption to your operations.'
  }
];

const STATS_DATA = [
  { value: '500+', label: 'Businesses Managed' },
  { value: '40%', label: 'Reduction in IT Overhead' },
  { value: '10,000+', label: 'Cloud & Infrastructure Assets Managed' },
  { value: '24/7/365', label: 'Managed Operations' },
  { value: '99%', label: 'Customer Retention Rate' },
];

export function ManagedServices(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Too Many Vendors. Too Many Tools. Not Enough Time.</span>
            </h1>
            <p className="page-hero__description">
            We've Been Expecting You. 
            </p>
            <p style={{ fontSize: '16px', marginTop: '24px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              Here at Skysecure, we simplify it all with a unified managed services framework built on Cyber, Data, Infrastructure, and AI. One partner to protect, automate, and scale your technology ecosystem intelligently. 
            </p>
          </div>
        </section>
        <TrustedCompanies />
        
        {/* Stats Section */}
        <section className="managed-services-stats-section">
          <div className="container">
            <div className="managed-services-stats-box">
              {STATS_DATA.map((stat, index) => (
                <div 
                  key={index} 
                  className={`managed-services-stat-item ${index === STATS_DATA.length - 1 ? 'stat-item-last' : ''}`}
                >
                  <div className="managed-services-stat-value">
                    {stat.value}
                  </div>
                  <div className="managed-services-stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Complexity Section */}
        <section className="managed-services-complexity-section">
          <div className="container">
            <div className="managed-services-complexity-content">
              <h1 className="managed-services-complexity-title">
                Technology Is Complex. Managing It Should Not Be.
              </h1>
              <h2 className="managed-services-complexity-subtitle">
                The More Tools You Add, the Harder It Gets.
              </h2>
              <p className="managed-services-complexity-body">
                You're not alone. Every growing business is juggling too many tools, vendors, and systems that were meant to simplify but only added complexity. Instead of driving innovation, your teams are stuck managing integrations, fixing issues, and firefighting downtime. If this feels familiar, it's time for a smarter, unified way to manage it all.
              </p>
              <p className="managed-services-complexity-body">
                Many businesses struggle with too many tools and vendors that add complexity instead of clarity. Your teams spend more time managing systems than driving innovation. It's time to take back control with a unified, intelligent approach to your IT ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Our Strategic Approach Section */}
        <section className="page-values" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-values__header">
              <h2 className="page-values__title">A Unified MSP Framework Built for the Modern Businesses</h2>
            </div>
            <div className="page-values__grid">
              {STRATEGIC_APPROACH.map((approach, index) => (
                <div key={index} className="page-value-card">
                  <h2 className="page-value-card__title">{approach.h2}</h2>
                  <p className="page-value-card__description">{approach.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        
        {/* Case Studies Table Section */}
        <section className="managed-services-table-section">
          <div className="container">
            <div className="managed-services-table-wrapper">
              <table className="managed-services-table">
                <thead>
                  <tr>
                    <th className="managed-services-table-header">Client</th>
                    <th className="managed-services-table-header">Challenge</th>
                    <th className="managed-services-table-header">Skysecure Solution</th>
                    <th className="managed-services-table-header">Outcome</th>
                  </tr>
                </thead>
                <tbody>
                  {CASE_STUDIES_TABLE.map((row, index) => (
                    <tr key={index} className="managed-services-table-row">
                      <td className="managed-services-table-cell managed-services-table-cell--client">
                        {row.client}
                      </td>
                      <td className="managed-services-table-cell">
                        {row.challenge}
                      </td>
                      <td className="managed-services-table-cell">
                        {row.solution}
                      </td>
                      <td className="managed-services-table-cell managed-services-table-cell--outcome">
                        {row.outcome}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* Continuous Intelligence Section */}
        <section className="page-innovation">
          <div className="container">
            <div className="page-innovation__content-wrapper" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '80px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{ flex: '1' }}>
                <ImagePlaceholder
                  label="Threat Hunting Network"
                  imageName="securitysolutions/threat-hunting-network.png"
                  width={560}
                  height={360}
                  borderRadius={0}
                />
              </div>
              <div style={{ flex: '1' }}>
                <h2 style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: 'var(--color-black)', 
                  marginBottom: '24px',
                  lineHeight: '1.2'
                }}>Continuous Monitoring</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'var(--color-grey)', 
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  We offer 24/7 monitoring to ensure your IT infrastructure remains secure, optimized, and fully operational at all times. Our proactive alerts and real-time response capabilities keep potential issues in check before they disrupt your workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Security Solutions Section */}
        <section className="page-features" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Comprehensive Managed IT Services</h2>
            </div>
            <div className="page-features__grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {COMPREHENSIVE_SOLUTIONS.map((solution, index) => (
                <div key={index} className="page-feature-card">
                  <div className="page-feature-card__icon">
                    <ImagePlaceholder
                      label={solution.title}
                      imageName={`securitysolutions/${solution.icon}.png`}
                      width={50}
                      height={50}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="page-feature-card__title">{solution.title}</h3>
                  <p className="page-feature-card__description">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Let's Redefine How Your Business Manages Technology</h2>
              <p className="page-cta__description">
              Partner with Skysecure and experience the power of unified managed services that protect, automate, and scale your business.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
