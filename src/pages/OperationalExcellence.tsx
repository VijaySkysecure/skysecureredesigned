import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import '../styles/operational-excellence.css';

const OperationalExcellence: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-tailored',
      title: 'Data Protection',
      description: 'Safeguard your data with advanced security measures and compliance standards.'
    },
    {
      icon: 'icon-growth',
      title: 'Data Lineage & Analytics',
      description: 'Track data origins and ensure reliable insights.'
    },
    {
      icon: 'icon-best-practices',
      title: 'Data Discovery',
      description: 'Easily find and organize your business-critical data.'
    }
  ];

  const FEATURE_HIGHLIGHTS = [
    {
      icon: 'icon-gap-analysis',
      title: 'Data Lineage & Provenance',
      description: 'Full traceability of data from origin to utilization.'
    },
    {
      icon: 'icon-rocket',
      title: 'End-to-End Compliance',
      description: 'Automated compliance checks to meet industry and regulatory requirements.'
    },
    {
      icon: 'icon-analytics',
      title: 'Powerful Analytics',
      description: 'Gain actionable insights with advanced data analytics capabilities.'
    },
    {
      icon: 'icon-support',
      title: 'Comprehensive Data Protection',
      description: 'Safeguard your data at rest and in transit with cutting-edge encryption.'
    }
  ];

  return (
    <div className="operational-excellence-page">
      <Header />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span>Data</span>{' '}
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Operations</span>
            </h1>
            <p className="page-hero__description">
            Unlocking Business Intelligence with Governance
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="page-intro">
        <div className="container">
          <p className="page-intro__text">
          We design and manage governed data ecosystems that unlock the full potential of your business intelligence while ensuring compliance. Skysecure handles the entire data lifecycle from discovery and protection to lineage and analytics, ensuring that your data remains secure and valuable at every stage.          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="page-values">
        <div className="container">
          <div className="page-values__header">
            <h2 className="page-values__title">Our Core Values</h2>
            <p className="page-values__subtitle">Three pillars that drive operational excellence</p>
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

      {/* Our Approach Section */}
      <section className="page-innovation">
        <div className="container">
          <div className="page-innovation__content">
            <div className="page-innovation__text">
              <h2 className="page-innovation__title">Complete Data Ecosystem Management</h2>
              <p className="page-innovation__description">
              Skysecure ensures a seamless and secure flow of data across your organization. We handle every aspect of data governance, ensuring compliance with regulations and delivering business intelligence at scale.              </p>
            </div>
            <div className="page-innovation__image">
              <ImagePlaceholder 
                label="Team analyzing operations and data"
                imageName="marketplace/operational-analysis.png"
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
            <p className="page-features__subtitle">Comprehensive solutions for operational transformation</p>
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
            <h2 className="page-cta__title">Unlock Your Data’s Full Potential</h2>
            <p className="page-cta__description">
            Our data operations integrate with all major platforms, offering a consistent, scalable, and secure<br></br>data management solution that grows with your business.            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OperationalExcellence;
