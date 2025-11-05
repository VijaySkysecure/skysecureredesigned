import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import '../styles/marketplace.css';

const Marketplace: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-rocket',
      title: 'Continuous Monitoring',
      description: 'Real-time detection and response across your entire infrastructure.'
    },
    {
      icon: 'icon-growth',
      title: 'Zero-Trust Enforcement',
      description: 'Ensuring strict access control policies with AI-driven security.'
    },
    {
      icon: 'icon-support',
      title: 'Data Privacy Compliance',
      description: 'Adhering to DPDP regulations to maintain data security and privacy.'
    }
  ];

  const FEATURE_HIGHLIGHTS = [
    {
      icon: 'icon-automation',
      title: 'AI-Powered Threat Detection',
      description: 'Real-time alerts and automatic responses to security incidents.'
    },
    {
      icon: 'icon-compliance',
      title: 'Regulatory Compliance Reporting',
      description: 'Always up-to-date with DPDP standards and industry regulations.'
    },
    {
      icon: 'icon-consulting',
      title: 'Zero-Trust Access Control',
      description: 'Prevent unauthorized access to your sensitive data.'
    }
  ];

  return (
    <div className="marketplace-page">
      <Header />
      
      {/* Hero Section */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #007FFF1A 10%, #00000000 0%, #0066CC1A 10%)' }}>
        <div className="container">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span>Security</span>{' '}
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Operations</span>
            </h1>
            <p className="page-hero__description">
            Comprehensive Protection, Powered by AI
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="page-intro" style={{ paddingBottom: '16px' }}>
        <div className="container">
          <p className="page-intro__text">
          We manage your entire security lifecycle, from licensing to continuous protection. Our AI-powered Security Operations Center (SOC) provides real-time detection, response, and governance to enforce zero-trust policies and ensure compliance with Data Protection and Privacy (DPDP) standards.
          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="page-values" style={{ paddingBottom: '16px' }}>
        <div className="container">
          <div className="page-values__header">
            <h2 className="page-values__title">Our Core Values</h2>
            <p className="page-values__subtitle">Empowering businesses through innovation and excellence</p>
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

      {/* Innovation Meets Diversity Section */}
      <section className="page-innovation" style={{ paddingBottom: '16px' }}>
        <div className="container">
          <div className="page-innovation__content">
            <div className="page-innovation__text">
              <h2 className="page-innovation__title">Complete Cloud Protection</h2>
              <p className="page-innovation__description">
              Our AI-enabled SOC is equipped to manage and protect all your cloud-based assets. From detecting threats to providing continuous compliance reporting, we ensure that your cloud environments remain safe and compliant with global regulations.
              </p>
            </div>
            <div className="page-innovation__image">
              <ImagePlaceholder 
                label="Innovation meets diversity illustration"
                imageName="marketplace/innovation-diversity.png"
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
            <p className="page-features__subtitle">Comprehensive solutions for modern businesses</p>
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
            <h2 className="page-cta__title">Seamless Integration Across Every Cloud</h2>
            <p className="page-cta__description">
            Integrates effortlessly with leading cloud providers, offering you a unified security<br></br>solution across AWS, Azure, and Google Cloud.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
