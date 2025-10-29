import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CORE_PRINCIPLES = [
  {
    icon: 'icon-two-people',
    title: 'Identity Verification',
    description: 'Ensure that every access request is verified through multi-factor authentication and continuous identity validation.'
  },
  {
    icon: 'icon-sq',
    title: 'Network Segmentation',
    description: 'Limit lateral movement within the network by isolating workloads and enforcing strict micro-segmentation policies.'
  },
  {
    icon: 'icon-hammer',
    title: 'Policy Enforcement',
    description: 'Automate and enforce context-aware security policies across your environment for consistent protection.'
  }
];

const FEATURE_HIGHLIGHTS = [
  {
    icon: 'icon-key',
    title: 'Multi-Factor Authentication',
    description: 'Advanced MFA with biometric and token-based verification.'
  },
  {
    icon: 'icon-network-person',
    title: 'Identity & Access Management',
    description: 'Centralized identity governance and access control.'
  },
  {
    icon: 'icon-network-isolation',
    title: 'Micro-Segmentation',
    description: 'Granular network isolation and workload protection.'
  },
  {
    icon: 'icon-question-mark',
    title: 'Continuous Monitoring',
    description: 'Real-time threat detection and behavioral analysis.'
  },
  {
    icon: 'icon-filter',
    title: 'Adaptive Policy Controls',
    description: 'Dynamic policy enforcement based on context.'
  },
  {
    icon: 'icon-cloud-server',
    title: 'Cloud & Hybrid Integration',
    description: 'Seamless integration across all environments.'
  }
];

export function ZeroTrustArchitecture(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Zero Trust</span> Architecture
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
                In an era where digital boundaries no longer exist, the traditional perimeter-based security model is obsolete. Skysecure's Zero Trust Architecture redefines security by adopting a 'never trust, always verify' approach ensuring that every user, device, and application is continuously authenticated, authorized, and validated before access is granted. This architecture minimizes attack surfaces, reduces insider threats, and strengthens your overall security posture.
              </p>
            </div>
          </div>
        </section>

        {/* Core Zero Trust Principles Section */}
        <section className="page-values" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-values__header">
              <h2 className="page-values__title">Core Zero Trust Principles</h2>
              <p className="page-values__subtitle">Three foundational pillars that strengthen your security posture</p>
            </div>
            <div className="page-values__grid">
              {CORE_PRINCIPLES.map((principle, index) => (
                <div key={index} className="page-value-card">
                  <div className="page-value-card__icon">
                    <ImagePlaceholder
                      label={principle.title}
                      imageName={`securitysolutions/${principle.icon}.png`}
                      width={50}
                      height={50}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="page-value-card__title">{principle.title}</h3>
                  <p className="page-value-card__description">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built on Three Foundational Principles Section */}
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
                  label="Zero Trust Network"
                  imageName="securitysolutions/zero-trust-network.png"
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
                }}>Built on Three Foundational Principles</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'var(--color-grey)', 
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Our Zero Trust Architecture is built on three foundational principles: verify explicitly, use least-privilege access, and assume breach. We integrate identity and access management, device health monitoring, and continuous authentication to protect assets in real time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="page-features" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Feature Highlights</h2>
              <p className="page-features__subtitle">Comprehensive security capabilities for modern enterprises</p>
            </div>
            <div className="page-features__grid">
              {FEATURE_HIGHLIGHTS.map((feature, index) => (
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

        {/* Transform Your Security Framework Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <h2 style={{ 
                fontSize: '34px', 
                fontWeight: '700', 
                color: 'var(--color-black)', 
                marginBottom: '24px',
                textAlign: 'center',
                lineHeight: '1.2'
              }}>Transform Your Security Framework From Reactive to Resilient</h2>
              <p style={{ fontSize: '16px', textAlign: 'center' }}>
                Skysecure's Zero Trust deployment framework starts with a thorough assessment of your current architecture, followed by a phased rollout that integrates seamlessly with your existing systems. Our implementation roadmap includes identity mapping, access control policies, monitoring integration, and compliance alignment, ensuring your Zero Trust journey is strategic, scalable, and sustainable.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Redefine Trust. Strengthen Security.</h2>
              <p className="page-cta__description">
                Empower your organization with Zero Trust, where every access point is verified, every connection is secure, and every threat is contained.
              </p>
              {/* <button className="page-cta__button">Get a Consultation</button> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
