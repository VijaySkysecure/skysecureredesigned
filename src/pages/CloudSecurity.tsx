import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CORE_VALUE_PROPOSITION = [
  {
    icon: 'icon-cloud-shield',
    title: 'Multi-Cloud Protection',
    description: 'Achieve consistent security across AWS, Azure, and GCP with unified controls and visibility.'
  },
  {
    icon: 'icon-green-gears',
    title: 'Configuration Management',
    description: 'Identify and remediate misconfigurations automatically to maintain compliance and minimize risk.'
  },
  {
    icon: 'icon-automation',
    title: 'Automated Remediation',
    description: 'Respond to threats and policy violations in real time through intelligent automation and alerting.'
  }
];

const FEATURE_HIGHLIGHTS = [
  {
    icon: 'icon-search',
    title: 'Multi-Cloud Threat Detection',
    description: 'Advanced AI-powered threat detection across all cloud platforms.'
  },
  {
    icon: 'icon-compliance',
    title: 'Compliance & Governance',
    description: 'Automated compliance reporting and governance frameworks.'
  },
  {
    icon: 'icon-growth',
    title: 'Configuration Drift Monitoring',
    description: 'Real-time monitoring of configuration changes and drift detection.'
  },
  {
    icon: 'icon-operations',
    title: 'Workload Protection',
    description: 'Comprehensive workload isolation and protection mechanisms.'
  },
  {
    icon: 'icon-key',
    title: 'Data Encryption & Key Management',
    description: 'End-to-end encryption with centralized key management.'
  },
  {
    icon: 'icon-beetle',
    title: 'Vulnerability Scanning',
    description: 'Continuous vulnerability assessment and remediation.'
  }
];

export function CloudSecurity(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Cloud</span> Security
            </h1>
            <p className="page-hero__description">
              Secure your cloud infrastructure across AWS, Azure, and GCP with automated compliance monitoring, continuous protection, and unified visibility.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <p style={{ fontSize: '16px' }}>
                As organizations embrace cloud transformation, protecting multi-cloud environments becomes a mission-critical priority. Skysecure's Cloud Security service safeguards your cloud infrastructure across AWS, Azure, and Google Cloud. By combining intelligent automation, continuous compliance monitoring, and threat detection, we deliver a unified security layer that ensures your data, applications, and workloads remain secure no matter where they run.
              </p>
            </div>
          </div>
        </section>

        {/* Core Value Proposition Section */}
        <section className="page-values" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-values__header">
              <h2 className="page-values__title">Core Value Proposition</h2>
              <p className="page-values__subtitle">Comprehensive protection across all your cloud environments</p>
            </div>
            <div className="page-values__grid">
              {CORE_VALUE_PROPOSITION.map((value, index) => (
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

        {/* Complete Cloud Protection Section */}
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
                <h2 style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: 'var(--color-black)', 
                  marginBottom: '24px',
                  lineHeight: '1.2'
                }}>Complete Cloud Protection</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'var(--color-grey)', 
                  lineHeight: '30px',
                  margin: '0'
                }}>
                  Our cloud security service provides full-spectrum protection for modern, distributed environments. We continuously monitor your infrastructure for vulnerabilities, unauthorized access, and compliance deviations. Our automation-first approach ensures issues are detected, prioritized, and resolved instantly without disrupting operations. From identity management and data encryption to workload isolation, every component is built to strengthen your cloud posture.
                </p>
              </div>
              <div style={{ flex: '1' }}>
                <ImagePlaceholder
                  label="Cloud Security Dashboard"
                  imageName="securitysolutions/cloud-security-dashboard.png"
                  width={560}
                  height={360}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights Section */}
        <section className="page-features" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Feature Highlights</h2>
              <p className="page-features__subtitle">Advanced capabilities for comprehensive cloud security</p>
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

        {/* Seamless Integration Across Every Cloud Section */}
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
              }}>Seamless Integration Across Every Cloud</h2>
              <p style={{ fontSize: '16px', textAlign: 'center', marginBottom: '40px' }}>
                Skysecure's cloud-native security framework integrates directly with major cloud platforms and DevOps pipelines. Our solution aligns with your existing infrastructure to provide centralized monitoring, streamlined incident management, and full compliance visibility empowering your teams to innovate securely.
              </p>
               <div style={{ 
                 display: 'flex', 
                 justifyContent: 'center', 
                 alignItems: 'center', 
                 gap: '80px',
                 marginTop: '40px'
               }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <ImagePlaceholder
                     label="AWS Logo"
                     imageName="securitysolutions/logo-aws.png"
                     width={45}
                     height={40}
                     borderRadius={0}
                   />
                   <p style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-black)', margin: '0' }}>AWS</p>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <ImagePlaceholder
                     label="Azure Logo"
                     imageName="securitysolutions/logo-azure.png"
                     width={32}
                     height={40}
                     borderRadius={0}
                   />
                   <p style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-black)', margin: '0' }}>Azure</p>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <ImagePlaceholder
                     label="GCP Logo"
                     imageName="securitysolutions/logo-gcp.png"
                     width={34}
                     height={40}
                     borderRadius={0}
                   />
                   <p style={{ fontSize: '16px', fontWeight: '500', color: 'var(--color-black)', margin: '0' }}>GCP</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Secure Your Cloud. Simplify Your Compliance.</h2>
              <p className="page-cta__description">
                Protect every workload and environment with Skysecure's unified, automated cloud security solution.
              </p>
              {/* <button className="page-cta__button">Schedule a Cloud Security Assessment</button> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
