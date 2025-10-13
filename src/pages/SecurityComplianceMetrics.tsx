import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const SecurityComplianceMetrics: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-growth',
      title: 'Comprehensive Risk Assessment',
      description: 'Track real-time security performance and identify potential vulnerabilities before they become risks.'
    },
    {
      icon: 'icon-compliance',
      title: 'Regulatory Compliance Monitoring',
      description: 'Stay ahead of regulatory requirements with continuous compliance tracking against industry standards such as GDPR, HIPAA, PCI-DSS, and more.'
    },
    {
      icon: 'icon-best-practices',
      title: 'Actionable Insights',
      description: 'Gain clear, data-driven insights that guide security decisions and operational improvements.'
    }
  ];

  const FEATURE_HIGHLIGHTS = [
    {
      icon: 'icon-eye',
      title: 'Real-Time Security Threat Monitoring',
      description: 'Continuous monitoring of security threats with instant alerts and automated response capabilities.'
    },
    {
      icon: 'icon-reporting',
      title: 'Risk Assessments & Reports',
      description: 'Comprehensive risk assessment tools with detailed reporting and recommendations.'
    },
    {
      icon: 'icon-question-mark',
      title: 'Continuous Compliance Tracking',
      description: 'GDPR, HIPAA, PCI-DSS compliance monitoring with automated compliance scoring.'
    },
    {
      icon: 'icon-analytics',
      title: 'Incident & Breach Analytics',
      description: 'Historical analysis of security incidents with trend identification and prevention strategies.'
    },
    {
      icon: 'icon-operations',
      title: 'Customizable Dashboards',
      description: 'Personalized security dashboards with role-based access and custom metrics.'
    },
    {
      icon: 'icon-pie-chart',
      title: 'Performance Reporting',
      description: 'Detailed performance and compliance reports with executive summaries and KPIs.'
    }
  ];

  return (
    <div className="security-compliance-metrics-page">
      <Header />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span>Security &</span>{' '}
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Compliance Metrics</span>
            </h1>
            <p className="page-hero__description">
              Our solution platform offers a clear picture of your organization's security performance, enabling you to assess risk levels, identify areas for improvement, and measure the effectiveness of your security controls and compliance initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="page-intro">
        <div className="container">
          <p className="page-intro__text">
            In today's digital landscape, maintaining robust security and ensuring compliance with relevant regulations are paramount for organizations across all industries. Our Security & Compliance metrics are designed to offer a comprehensive, clear, and continuous assessment of your security stance and compliance posture. With our advanced solution platform, we provide actionable insights that enable you to safeguard your data, protect assets, and meet regulatory obligations confidently.
          </p>
        </div>
      </section>

      {/* Our Core Value Proposition Section */}
      <section className="page-values">
        <div className="container">
          <div className="page-values__header">
            <h2 className="page-values__title">Core Value Proposition</h2>
            <p className="page-values__subtitle">Empowering organizations with comprehensive security insights</p>
          </div>
          <div className="page-values__grid">
            {CORE_VALUES.map((value, index) => (
              <div key={index} className="page-value-card">
                <div className="page-value-card__icon">
                  <ImagePlaceholder 
                    label={`${value.title} icon`}
                    imageName={`marketplace/${value.icon}.png`}
                    width={60}
                    height={60}
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

      {/* Holistic Security Platform Section */}
      <section className="page-innovation">
        <div className="container">
          <div className="page-innovation__content">
            <div className="page-innovation__text">
              <h2 className="page-innovation__title">Holistic Security Platform</h2>
              <p className="page-innovation__description">
                Our platform provides a holistic view of your organization's security posture by meticulously tracking and analyzing a wide range of security and compliance metrics. From real-time threat monitoring to historical security incident analysis, we give you the tools to understand your risk landscape thoroughly. Our service also helps you maintain regulatory compliance, ensuring your organization meets legal and industry standards, mitigating risk, and preventing potential penalties.
              </p>
            </div>
            <div className="page-innovation__image">
              <ImagePlaceholder 
                label="Dashboard UI interface"
                imageName="marketplace/dashboard-ui.png"
                width={570}
                height={300}
                borderRadius={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="page-features">
        <div className="container">
          <div className="page-features__header">
            <h2 className="page-features__title">Feature Highlights</h2>
            <p className="page-features__subtitle">Comprehensive security and compliance capabilities</p>
          </div>
          <div className="page-features__grid">
            {FEATURE_HIGHLIGHTS.map((feature, index) => (
              <div key={index} className="page-feature-card">
                <div className="page-feature-card__icon">
                  <ImagePlaceholder 
                    label={`${feature.title} icon`}
                    imageName={`marketplace/${feature.icon}.png`}
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

      {/* Call to Action Section */}
      <section className="page-cta">
        <div className="container">
          <div className="page-cta__content">
            <h2 className="page-cta__title">Measure. Improve. Stay Compliant.</h2>
            <p className="page-cta__description">
              Empower your organization to stay secure and compliant with the insights you need to take proactive action.
            </p>
            <button className="page-cta__button">Request a Demo</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityComplianceMetrics;
