import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CORE_VALUES = [
  {
    icon: 'icon-question-mark',
    title: 'Proactive Threat Detection',
    description: 'Identify and neutralize threats before they impact your operations through AI-powered monitoring and predictive analytics.'
  },
  {
    icon: 'icon-lightning',
    title: 'Instant Response Automation',
    description: 'Accelerate containment and remediation using automated incident workflows that minimize downtime and damage.'
  },
  {
    icon: 'icon-eye',
    title: 'Continuous Oversight',
    description: 'Rely on our expert SOC analysts who monitor, triage, and respond to security events around the clock.'
  }
];

const ADVANCED_CAPABILITIES = [
  {
    icon: 'icon-growth',
    title: 'Real-Time Threat Monitoring',
    description: 'Continuous surveillance of your entire infrastructure with AI-driven threat detection and immediate alerting.'
  },
  {
    icon: 'icon-automation',
    title: 'Incident Response Automation',
    description: 'Automated workflows that respond to threats faster than humanly possible.'
  },
  {
    icon: 'icon-pdsupport',
    title: '24/7 Analyst Support',
    description: 'Expert security analysts available around the clock for critical incidents.'
  },
  {
    icon: 'icon-brain',
    title: 'Anomaly & Behavior Analytics',
    description: 'AI-powered behavioral analysis to detect unusual patterns and insider threats.'
  },
  {
    icon: 'icon-document',
    title: 'Custom Alert Rules & Playbooks',
    description: 'Tailored response procedures designed specifically for your environment.'
  },
  {
    icon: 'icon-compliance',
    title: 'Compliance Reporting Dashboard',
    description: 'Automated compliance reports and audit trails for regulatory requirements.'
  }
];

const INTEGRATION_FEATURES = [
  {
    icon: 'icon-detection',
    title: 'AI-Powered Detection',
    description: 'Machine learning algorithms for threat prediction'
  },
  {
    icon: 'icon-squares',
    title: 'SIEM Integration',
    description: 'Seamless connection with existing security tools'
  },
  {
    icon: 'icon-cloud',
    title: 'Cloud Native',
    description: 'Built for modern cloud infrastructure'
  },
  {
    icon: 'icon-plug',
    title: 'API Integration',
    description: 'Connect with any security ecosystem'
  }
];

export function SOCMonitoring(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>24/7</span> SOC Monitoring
            </h1>
            <p className="page-hero__description">
              Round-the-clock security operations center monitoring with AI-powered threat detection and immediate response capabilities.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#10B981', borderRadius: '50%', animation: 'blink 3s infinite' }}></div>
              <span style={{ color: '#10B981', fontWeight: '600', animation: 'blink 3s infinite' }}>Live Monitoring Active</span>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <p style={{ fontSize: '17px' }}>
              In today's threat landscape, cybersecurity doesn't sleep and neither do we. Our 24/7 Security Operations Center (SOC) Monitoring service ensures your digital infrastructure is continuously protected against emerging threats. Leveraging AI-driven analytics, automated incident response, and expert human oversight, Skysecure delivers real-time visibility, detection, and defense that keeps your organization one step ahead of attackers.
              </p>
            </div>
          </div>
        </section>

        {/* Core Security Values Section */}
        <section className="page-values" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-values__header">
              <h2 className="page-values__title">Core Security Values</h2>
              <p className="page-values__subtitle">Three pillars of our comprehensive SOC monitoring approach</p>
            </div>
            <div className="page-values__grid">
              {CORE_VALUES.map((value, index) => (
                <div key={index} className="page-value-card">
                  <div className="page-value-card__icon">
                    <ImagePlaceholder
                      label={value.title}
                      imageName={`securitysolutions/${value.icon}.png`}
                      width={50}
                      height={50}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="page-value-card__title">{value.title}</h3>
                  <p className="page-value-card__description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Complete Visibility & Control Section */}
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
                  label="SOC Dashboard"
                  imageName="securitysolutions/soc-dashboard.png"
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
                }}>Complete Visibility & Control</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'var(--color-grey)', 
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Our SOC monitoring framework is designed to give you peace of mind and total transparency. Through centralized dashboards and advanced AI models, we analyze billions of logs in real time to detect anomalies, malicious patterns, and insider threats.<br/><br/>Each incident is handled with precision. Automated tools trigger immediate alerts while our analysts validate and respond to critical events, ensuring zero missed detections and minimal false positives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced SOC Capabilities Section */}
        <section className="page-features" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Advanced SOC Capabilities</h2>
              <p className="page-features__subtitle">Comprehensive security features powered by cutting-edge technology</p>
            </div>
            <div className="page-features__grid">
              {ADVANCED_CAPABILITIES.map((feature, index) => (
                <div key={index} className="page-feature-card">
                  <div className="page-feature-card__icon">
                    <ImagePlaceholder
                      label={feature.title}
                      imageName={`securitysolutions/${feature.icon}.png`}
                      width={50}
                      height={50}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="page-feature-card__title">{feature.title}</h3>
                  <p className="page-feature-card__description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Powered by Advanced AI and Seamless Integration Section */}
        <section className="page-features">
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Powered by Advanced AI and Seamless Integration</h2>
              <p className="page-features__subtitle">
              Our 24/7 SOC Monitoring integrates effortlessly with your existing infrastructure, including SIEM, EDR, cloud services, and compliance systems. Using adaptive AI models and tailored Kusto queries, we deliver faster detection and smarter responses, all within a unified security ecosystem that evolves with your business.
              </p>
            </div>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start', 
              maxWidth: '1200px', 
              margin: '0 auto',
              gap: '40px'
            }}>
              {INTEGRATION_FEATURES.map((feature, index) => (
                <div key={index} style={{ 
                  flex: '1', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <div style={{ 
                    width: '70px', 
                    height: '70px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <ImagePlaceholder
                      label={feature.title}
                      imageName={`securitysolutions/${feature.icon}.png`}
                      width={50}
                      height={50}
                      borderRadius={0}
                    />
                  </div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: 'var(--color-black)', 
                    margin: '0',
                    lineHeight: '1.3'
                  }}>{feature.title}</h3>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'var(--color-grey)', 
                    margin: '0',
                    lineHeight: '1.5',
                    width: '50%'
                  }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Stay Protected. Stay Ahead.</h2>
              <p className="page-cta__description">
                Gain continuous visibility, instant response, and expert oversight every second of every day.
              </p>
              <button className="page-cta__button">Schedule a Free SOC Consultation</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
