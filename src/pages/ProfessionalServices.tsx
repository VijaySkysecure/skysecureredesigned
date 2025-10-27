import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const STRATEGIC_APPROACH = [
  {
    icon: 'icon-shield',
    title: 'Protect by Design',
    description: 'We build security into your systems from the ground up, ensuring that your digital infrastructure is proactive, compliant, and resilient against modern cyber threats.'
  },
  {
    icon: 'icon-brain',
    title: 'AI-Driven Defense',
    description: 'Using intelligent analytics, automated detection, and behavior-based monitoring, we identify and neutralize threats before they disrupt your operations.'
  },
  {
    icon: 'icon-person',
    title: 'Expert Intelligence',
    description: 'Our seasoned cybersecurity experts combine real-world experience and advanced tools to offer continuous, actionable intelligence.'
  }
];

const COMPREHENSIVE_SOLUTIONS = [
  {
    icon: 'icon-crosshair',
    title: 'Cyber Defense & Threat Protection',
    description: 'Advanced endpoint, network, and cloud defense powered by AI and human expertise.'
  },
  {
    icon: 'icon-growth',
    title: 'Managed Security Operations',
    description: 'Continuous monitoring, detection, and response by certified cybersecurity specialists.'
  },
  {
    icon: 'icon-waves',
    title: 'Software Licensing Solutions',
    description: 'Authorized reseller of Microsoft, Adobe, Autodesk, and other major brands with flexible enterprise licensing options.'
  },
  {
    icon: 'icon-chainlink',
    title: 'Risk & Vulnerability Assessment',
    description: 'In-depth penetration testing and audit reports to uncover and mitigate potential risks.'
  },
  {
    icon: 'icon-search',
    title: 'Incident Response & Recovery',
    description: 'Rapid breach response and remediation services that minimize downtime and data loss.'
  },
  {
    icon: 'icon-refresh',
    title: 'Training & Awareness Programs',
    description: 'Empower your workforce to recognize and respond to cyber threats effectively.'
  }
];

export function ProfessionalServices(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title" style={{ width: '850px' }}>
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Cybersecurity</span> & Licensing Services
            </h1>
            <p className="page-hero__description" style={{ marginLeft: '50px' }}>
            Precision Security. Smarter Licensing. Complete Confidence.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <p style={{ fontSize: '16px', marginLeft: '50px' }}>
              Protect your business with end-to-end cybersecurity services and authorized software licensing solutions designed to keep your operations secure, compliant, and optimized. Our mission is to empower organizations with cutting-edge threat defense and reliable software asset management, ensuring digital safety, operational efficiency, and cost transparency.
              </p>
            </div>
          </div>
        </section>

        {/* Our Strategic Approach Section */}
        <section className="page-values" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-values__header">
              <h2 className="page-values__title">Our Strategic Approach</h2>
            </div>
            <div className="page-values__grid">
              {STRATEGIC_APPROACH.map((approach, index) => (
                <div key={index} className="page-value-card">
                  <div className="page-value-card__icon">
                    <ImagePlaceholder
                      label={approach.title}
                      imageName={`securitysolutions/${approach.icon}.png`}
                      width={50}
                      height={50}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="page-value-card__title">{approach.title}</h3>
                  <p className="page-value-card__description">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Continuous Intelligence Section */}
        <section className="page-innovation">
          <div className="container">
            <div style={{ 
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
                }}>Continuous Security & Compliance</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'var(--color-grey)', 
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Our dedicated Security Operations Center (SOC) provides 24/7 monitoring, vulnerability assessments, and compliance audits. We ensure you remain aligned with ISO, GDPR, HIPAA, and industry standards while maintaining real-time visibility into your digital ecosystem. Stay ahead of attackers and compliance risks with continuous intelligence.
                  </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Security Solutions Section */}
        <section className="page-features" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Comprehensive Service Portfolio</h2>
            </div>
            <div className="page-features__grid">
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

        {/* AI Precision Meets Human Expertise Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <h2 style={{ 
                fontSize: '32px', 
                fontWeight: '700', 
                color: 'var(--color-black)', 
                marginBottom: '24px',
                textAlign: 'center',
                lineHeight: '1.2'
              }}>AI Precision Meets Human Expertise</h2>
              <p style={{ fontSize: '16px', textAlign: 'center' }}>
              Our blend of automation, AI analytics, and expert human insight ensures you get the most accurate and actionable security and licensing intelligence possible. From predictive threat detection to optimized license management, we secure every aspect of your digital journey.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Don’t Wait for a Breach - Secure It Before It Happens</h2>
              <p className="page-cta__description">
              Partner with us to fortify your business with the right balance of technology, expertise, and trust.<br></br>We deliver solutions tailored for organizations that take cybersecurity seriously.
              </p>
              <button className="page-cta__button">Start Your Protection</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
