import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const SimplifiedManagement: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-pie-chart',
      title: 'Cost Control',
      description: 'Stay within budget with intelligent, automated cost management strategies.'
    },
    {
      icon: 'icon-tailored',
      title: 'Performance Optimization',
      description: 'Ensure consistent performance with continuous monitoring and adjustments.'
    },
    {
      icon: 'icon-question-mark',
      title: 'Cloud-Ready Infrastructure',
      description: 'Built to support and scale with your cloud-first strategies.'
    }
  ];

  const FEATURE_HIGHLIGHTS = [
    {
      icon: 'icon-dashboard',
      title: 'Scalable Architecture',
      description: 'Build infrastructure that grows with your business.'
    },
    {
      icon: 'icon-eye',
      title: 'Continuous Monitoring',
      description: 'Proactive performance monitoring to prevent downtime and disruptions.'
    },
    {
      icon: 'icon-rocket',
      title: 'Seamless Deployment',
      description: 'Simplify your infrastructure deployment with robust, reliable solutions.'
    },
    {
      icon: 'icon-growth',
      title: 'Cost Optimization',
      description: 'Automated tools to track and reduce cloud costs.'
    }
  ];

  return (
    <div className="simplified-management-page">
      <Header />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span>Infrastructure</span>{' '}
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Operations</span>
            </h1>
            <p className="page-hero__description">
            Building Reliable and Scalable Cloud Infrastructure
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="page-intro">
        <div className="container">
          <p className="page-intro__text">
          We architect, license, and manage cloud-ready infrastructure designed for reliability and scalability. From deployment to ongoing optimization, Skysecure ensures seamless performance and cost control across all your environments.
          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="page-values">
        <div className="container">
          <div className="page-values__header">
            <h2 className="page-values__title">Core Values</h2>
            <p className="page-values__subtitle">The foundation of our simplified management approach</p>
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

      {/* Centralized Dashboard Excellence Section */}
      <section className="page-innovation">
        <div className="container">
          <div className="page-innovation__content">
            <div className="page-innovation__text">
              <h2 className="page-innovation__title">Complete Infrastructure Management</h2>
              <p className="page-innovation__description">
              Skysecure provides end-to-end management of your infrastructure, from initial setup to ongoing optimization. We ensure your systems remain agile, reliable, and secure, adapting to your business's changing needs.              </p>
            </div>
            <div className="page-innovation__image">
              <ImagePlaceholder 
                label="Dashboard UI interface"
                imageName="marketplace/dashboard-ui.png"
                width={570}
                height={350}
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
            <p className="page-features__subtitle">Comprehensive tools for streamlined management</p>
          </div>
          <div 
            className="page-features__grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px'
            }}
          >
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
            <h2 className="page-cta__title">Simplify Your Cloud Management.</h2>
            <p className="page-cta__description">
            Our infrastructure solutions integrate smoothly with major cloud platforms, ensuring reliability, security, and cost-effectiveness across AWS, Azure, and Google Cloud environments.            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SimplifiedManagement;
