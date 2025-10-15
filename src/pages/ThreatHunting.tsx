import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const STRATEGIC_APPROACH = [
  {
    icon: 'icon-shield',
    title: 'Proactive Defense',
    description: 'Anticipate and eliminate hidden threats before they disrupt your systems or data.'
  },
  {
    icon: 'icon-brain',
    title: 'AI-Driven Detection',
    description: 'Utilize advanced behavioral analytics and machine learning to uncover anomalies invisible to conventional tools.'
  },
  {
    icon: 'icon-person',
    title: 'Expert Analysis',
    description: 'Leverage elite cybersecurity analysts who validate alerts, investigate incidents, and provide strategic threat insights.'
  }
];

const COMPREHENSIVE_SOLUTIONS = [
  {
    icon: 'icon-crosshair',
    title: 'Advanced Persistent Threat Detection',
    description: 'Identify sophisticated, long-term attacks that traditional tools miss.'
  },
  {
    icon: 'icon-growth',
    title: 'Behavioral & Anomaly Analytics',
    description: 'Machine learning models detect unusual patterns and behaviors.'
  },
  {
    icon: 'icon-waves',
    title: 'Custom Threat Intelligence Feeds',
    description: 'Real-time threat data tailored to your industry and environment.'
  },
  {
    icon: 'icon-chainlink',
    title: 'Automated Alert Correlation',
    description: 'Connect disparate security events to reveal attack campaigns.'
  },
  {
    icon: 'icon-search',
    title: 'Forensic Investigation',
    description: 'Deep-dive analysis to understand attack vectors and impact.'
  },
  {
    icon: 'icon-refresh',
    title: 'Continuous Threat Updates',
    description: 'Stay ahead with the latest threat landscape intelligence.'
  }
];

export function ThreatHunting(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Threat</span> Hunting
            </h1>
            <p className="page-hero__description">
              Proactive threat hunting using advanced AI algorithms to identify and neutralize sophisticated attacks before they impact your business.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <p style={{ fontSize: '16px' }}>
                Modern cyber threats evolve at lightning speed, often bypassing traditional security defenses. Skysecure's Threat Hunting service empowers organizations with proactive, intelligence-driven protection. Our team combines AI-powered analytics with expert human investigation to detect, analyze, and neutralize potential threats before they cause harm. By continuously scanning your environment for suspicious behavior, we ensure your organization stays several steps ahead of attackers.
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
                }}>Continuous Intelligence</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'var(--color-grey)', 
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Our Threat Hunting service combines automation with deep security expertise to deliver actionable intelligence in real time. By correlating data from multiple sources endpoint, network, and cloud we identify indicators of compromise that evade standard security tools. Our hunters perform continuous analysis, validate each alert, and initiate swift remediation steps, dramatically reducing Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Security Solutions Section */}
        <section className="page-features" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Comprehensive Security Solutions</h2>
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
                Our hybrid model blends machine learning with human intuition. AI sifts through massive data volumes to flag anomalies, while our analysts interpret the signals, eliminating false positives and surfacing genuine risks. Each investigation is enriched by global threat intelligence and Skysecure's proprietary detection frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Don't Wait for an Attack Hunt Before It Happens.</h2>
              <p className="page-cta__description">
                Uncover hidden threats, strengthen your defenses, and safeguard your business<br></br>from evolving cyber risks.
              </p>
              <button className="page-cta__button">Start Threat Hunting</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
