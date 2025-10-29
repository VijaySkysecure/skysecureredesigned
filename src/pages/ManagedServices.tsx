import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const STRATEGIC_APPROACH = [
  {
    icon: 'icon-shield',
    title: 'Proactive Support',
    description: 'Predictive solutions to prevent issues before they arise. We monitor, manage, and maintain your IT systems to avoid downtime and ensure your business stays operational.'
  },
  {
    icon: 'icon-brain',
    title: 'Tailored Solutions',
    description: 'Custom-designed solutions that meet your business’s unique IT needs. Our team works closely with yours to craft the perfect technology strategy.'
  },
  {
    icon: 'icon-person',
    title: 'Expert Consultation',
    description: 'Strategic advisory and technical support from certified experts who understand both technology and business to drive efficiency and growth.'
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

export function ManagedServices(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Managed</span> Services
            </h1>
            <p className="page-hero__description">
            Empower Your Business with Proactive, Scalable, and Cost-Effective IT Solutions
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <p style={{ fontSize: '16px', marginLeft: '50px' }}>
              Our managed services are designed to ensure seamless IT operations, reduce operational costs, and enable your business to focus on its core activities while we handle the complexities of IT infrastructure. With 24/7 support, monitoring, and maintenance, we provide peace of mind knowing your systems are in safe hands.
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
              }}>AI-Powered Insights with Human Expertise</h2>
              <p style={{ fontSize: '16px', textAlign: 'center' }}>
              Our managed services leverage cutting-edge AI tools to streamline workflows and provide actionable insights. Paired with the deep expertise of our professionals, we ensure that your IT environment is optimized for maximum performance, security, and cost-efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Don’t Let IT Challenges Hold You Back</h2>
              <p className="page-cta__description">
              Let us handle your IT so you can focus on growing your business. Our expert-managed services are designed to protect, optimize, and scale your IT infrastructure keeping you ahead of the competition.
              </p>
              <button className="page-cta__button">Contact Us</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
