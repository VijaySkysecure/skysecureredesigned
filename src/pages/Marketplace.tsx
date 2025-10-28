import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const Marketplace: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-rocket',
      title: 'Diverse Solutions',
      description: 'Explore a curated collection of innovative technologies tailored to meet your business goals.'
    },
    {
      icon: 'icon-growth',
      title: 'Empowered Growth',
      description: 'Access tools that enhance efficiency, productivity, and long-term scalability.'
    },
    {
      icon: 'icon-support',
      title: 'Expert Support',
      description: 'Leverage guidance from leading IT and security professionals.'
    }
  ];

  const FEATURE_HIGHLIGHTS = [
    {
      icon: 'icon-shield',
      title: 'Cybersecurity Solutions',
      description: 'Advanced protection systems to safeguard your digital assets.'
    },
    {
      icon: 'icon-analytics',
      title: 'Data Analytics Platforms',
      description: 'Transform raw data into actionable business insights.'
    },
    {
      icon: 'icon-cloud',
      title: 'Cloud & Infrastructure',
      description: 'Scalable cloud solutions for modern business operations.'
    },
    {
      icon: 'icon-automation',
      title: 'Automation & AI Tools',
      description: 'Intelligent automation to streamline your workflows.'
    },
    {
      icon: 'icon-compliance',
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with automated systems.'
    },
    {
      icon: 'icon-consulting',
      title: 'IT Consulting & Integration',
      description: 'Expert guidance for seamless technology integration.'
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
              <span>Commercial</span>{' '}
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Marketplace</span>
            </h1>
            <p className="page-hero__description">
              Discover a world of possibilities, where innovative solutions, diverse offerings, and exceptional services converge to empower businesses and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="page-intro">
        <div className="container">
          <p className="page-intro__text">
            Step into our Commercial Marketplace and immerse yourself in a world brimming with endless possibilities. Designed with businesses in mind, our platform is a vibrant ecosystem where innovation meets necessity, offering a curated selection of cutting-edge solutions, diverse product offerings, and unparalleled services. This marketplace is your gateway to discovering tools and technologies that have the power to transform your operations, streamline your processes, and catapult your business into new realms of growth and efficiency.
          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="page-values">
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
      <section className="page-innovation">
        <div className="container">
          <div className="page-innovation__content">
            <div className="page-innovation__text">
              <h2 className="page-innovation__title">Innovation Meets Diversity</h2>
              <p className="page-innovation__description">
                At the heart of our marketplace lies a commitment to diversity and innovation. We understand that each business is unique, with its own set of challenges and opportunities. That's why we've painstakingly gathered an expansive array of offerings—from software solutions that optimize your workflows to hardware that enhances your operational capabilities—all designed to address the specific needs of businesses across various industries.
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
            <h2 className="page-cta__title">Explore. Compare. Transform.</h2>
            <p className="page-cta__description">
              Discover, grow, and lead with confidence the future of your business is just a few clicks away.
            </p>
            <button 
              className="page-cta__button"
              onClick={() => window.open('https://shop.skysecure.ai/', '_blank')}
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Marketplace;
