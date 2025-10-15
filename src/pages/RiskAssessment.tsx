import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const STRATEGIC_APPROACH = [
  {
    icon: 'icon-search',
    title: 'Comprehensive Analysis',
    description: 'Gain a clear understanding of your organization\'s risk landscape through detailed assessments and scenario modeling.'
  },
  {
    icon: 'icon-mitigation',
    title: 'Prioritized Mitigation',
    description: 'Focus on what matters most with risk scoring and prioritization based on potential business impact.'
  },
  {
    icon: 'icon-compass',
    title: 'Strategic Guidance',
    description: 'Receive expert recommendations and actionable insights to strengthen your defenses and reduce future exposure.'
  }
];

const COMPREHENSIVE_SOLUTIONS = [
  {
    icon: 'icon-beetle',
    title: 'Vulnerability Identification',
    description: 'Systematic discovery and cataloging of security weaknesses across your infrastructure.'
  },
  {
    icon: 'icon-star',
    title: 'Risk Scoring & Prioritization',
    description: 'Data-driven risk ratings to help you focus on the most critical threats first.'
  },
  {
    icon: 'icon-threat-purple',
    title: 'Threat Modeling & Analysis',
    description: 'Advanced modeling of potential attack vectors and threat scenarios.'
  },
  {
    icon: 'icon-compliance',
    title: 'Regulatory & Compliance Mapping',
    description: 'Alignment with industry standards and regulatory requirements.'
  },
  {
    icon: 'icon-wrench',
    title: 'Remediation Planning',
    description: 'Detailed action plans with timelines and resource requirements.'
  },
  {
    icon: 'icon-growth',
    title: 'Continuous Risk Monitoring',
    description: 'Ongoing assessment and real-time risk visibility for evolving threats.'
  }
];

const FRAMEWORK_FEATURES = [
  {
    icon: 'icon-shield-dark-blue',
    title: 'NIST Framework',
    description: 'Industry-standard risk management practices.'
  },
  {
    icon: 'icon-gear-light-blue',
    title: 'ISO 27001',
    description: 'International security management standards.'
  },
  {
    icon: 'icon-gear-dark-blue',
    title: 'CIS Controls',
    description: 'Critical security controls implementation.'
  },
  {
    icon: 'icon-robot-light-blue',
    title: 'AI Analytics',
    description: 'Advanced threat intelligence and automation.'
  }
];

export function RiskAssessment(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Risk</span> Assessment
            </h1>
            <p className="page-hero__description">
              Identify, evaluate, and mitigate potential risks before they impact your organization's operations or reputation.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <p style={{ fontSize: '16px' }}>
                In an increasingly complex digital environment, understanding and managing risk is essential for maintaining operational integrity and resilience. Skysecure's Risk Assessment service provides a structured and data-driven approach to identifying vulnerabilities, assessing their potential impact, and prioritizing mitigation strategies. By combining advanced analytics with deep industry expertise, we help organizations make informed decisions that strengthen their security posture and ensure regulatory compliance.
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

        {/* Comprehensive Risk Intelligence Section */}
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
                }}>Comprehensive Risk Intelligence</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'var(--color-grey)', 
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Our Risk Assessment process begins with a holistic review of your systems, processes, and data environments. We evaluate your current security controls, identify vulnerabilities, and analyze potential threat scenarios that could disrupt operations. Each assessment is tailored to your organization's size, industry, and compliance requirements. Our methodology provides both qualitative and quantitative insights, allowing leadership teams to make strategic, evidence-based decisions about risk mitigation and resource allocation.
                </p>
              </div>
              <div style={{ flex: '1' }}>
                <ImagePlaceholder
                  label="Risk Assessment Dashboard"
                  imageName="securitysolutions/soc-dashboard.png"
                  width={560}
                  height={360}
                  borderRadius={12}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Security Solutions Section */}
        <section className="page-features" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Comprehensive Security Solutions</h2>
              <p className="page-features__subtitle">Our risk assessment covers every aspect of your security landscape</p>
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

        {/* Turning Risk Data into Actionable Intelligence Section */}
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
              }}>Turning Risk Data into Actionable Intelligence</h2>
              <p style={{ fontSize: '16px', textAlign: 'center', marginBottom: '40px' }}>
                Using advanced analytics, automation, and industry frameworks such as NIST, ISO 27001, and CIS, Skysecure transforms complex risk data into actionable intelligence. Our reports not only highlight vulnerabilities but also deliver step-by-step recommendations for remediation and improvement. With ongoing assessments and automated reporting tools, your team can maintain full visibility into evolving risks and continuously strengthen your security posture.
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '40px',
                marginTop: '40px'
              }}>
                {FRAMEWORK_FEATURES.map((feature, index) => (
                  <div key={index} style={{ 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                  }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <ImagePlaceholder
                        label={feature.title}
                        imageName={`securitysolutions/${feature.icon}.png`}
                        width={60}
                        height={60}
                        borderRadius={0}
                      />
                    </div>
                    <h3 style={{ 
                      fontSize: '16px', 
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
                      width: '80%'
                    }}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Know Your Risks. Strengthen Your Defense.</h2>
              <p className="page-cta__description">
                Empower your organization with the clarity and confidence that comes from a comprehensive, data-driven risk assessment.
              </p>
              <button className="page-cta__button">Request a Risk Assessment</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
