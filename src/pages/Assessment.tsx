import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const Assessment: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-gap-analysis',
      title: '360° Analysis',
      description: 'Gain a complete view of your systems, processes, and operational performance.'
    },
    {
      icon: 'icon-best-practices',
      title: 'Actionable Recommendations',
      description: 'Receive practical, data-driven insights tailored to your unique organizational needs.'
    },
    {
      icon: 'icon-growth',
      title: 'Continuous Improvement',
      description: 'Leverage assessment results to drive ongoing efficiency, security, and performance enhancements.'
    }
  ];

  const ASSESSMENT_FEATURES = [
    {
      icon: 'icon-shield',
      title: 'Network Security & Risk Analysis',
      description: 'Comprehensive security assessment identifying vulnerabilities and threats.'
    },
    {
      icon: 'icon-tailored',
      title: 'Process Efficiency & Workflow Optimization',
      description: 'Streamline operations and eliminate bottlenecks for maximum efficiency.'
    },
    {
      icon: 'icon-compliance',
      title: 'Compliance & Regulatory Assessment',
      description: 'Ensure adherence to industry standards and regulatory requirements.'
    },
    {
      icon: 'icon-operations',
      title: 'Application & Infrastructure Review',
      description: 'Evaluate system performance and infrastructure capabilities.'
    },
    {
      icon: 'icon-data',
      title: 'Data Management & Protection Evaluation',
      description: 'Assess data integrity, backup systems, and protection protocols.'
    },
    {
      icon: 'icon-consulting',
      title: 'Custom Recommendations & Implementation Guidance',
      description: 'Tailored action plans with step-by-step implementation guidance.'
    }
  ];

  return (
    <div className="assessment-page">
      <Header />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Assessment</span>
            </h1>
            <p className="page-hero__description">
              Our comprehensive assessment services provide a thorough analysis of your systems, processes, and performance, enabling data-driven insights and actionable recommendations to enhance your operational efficiency and to drive continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="page-intro">
        <div className="container">
          <p className="page-intro__text">
            In the digital age, ensuring the security and efficiency of your systems and processes is not just a necessity—it's imperative for staying competitive and resilient. Our Comprehensive Assessment services offer a 360-degree view of your organizational operations, identifying vulnerabilities, inefficiencies, and areas for enhancement. With actionable insights and practical recommendations, we empower your organization to strengthen security, streamline workflows, and achieve operational excellence.
          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="page-values">
        <div className="container">
          <div className="page-values__header">
            <h2 className="page-values__title">Our Core Values</h2>
            <p className="page-values__subtitle">Driving excellence through comprehensive analysis</p>
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

      {/* Our Assessment Approach Section */}
      <section className="page-innovation">
        <div className="container">
          <div className="page-innovation__content">
            <div className="page-innovation__text">
              <h2 className="page-innovation__title">Our Assessment Approach</h2>
              <p className="page-innovation__description">
                Our assessment approach combines advanced analytical tools with industry best practices. We examine your IT infrastructure, software applications, and operational workflows, identifying risks and inefficiencies. The assessment also evaluates compliance with relevant industry standards, ensuring your organization meets regulatory requirements while optimizing performance. The outcome is a detailed report that highlights gaps and provides clear, actionable steps to strengthen your systems and processes.
              </p>
            </div>
            <div className="page-innovation__image">
              <ImagePlaceholder 
                label="Dashboard UI interface"
                imageName="marketplace/assessment-ui.png"
                width={570}
                height={340}
                borderRadius={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Features Section */}
      <section className="page-features">
        <div className="container">
          <div className="page-features__header">
            <h2 className="page-features__title">Assessment Features</h2>
            <p className="page-features__subtitle">Comprehensive evaluation across all critical areas</p>
          </div>
          <div className="page-features__grid">
            {ASSESSMENT_FEATURES.map((feature, index) => (
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
            <h2 className="page-cta__title">Unlock Insights. Drive Improvement.</h2>
            <p className="page-cta__description">
              Transform assessment insights into practical actions that enhance security, optimize operations, and foster continuous growth.
            </p>
            <button className="page-cta__button">Request Your Assessment</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Assessment;
