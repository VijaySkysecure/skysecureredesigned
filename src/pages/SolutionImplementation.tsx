import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import '../styles/solution-implementation.css';

const SolutionImplementation: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-integration',
      title: 'Data-Driven Decision Making',
      description: 'Empower teams with insights to make faster and more informed decisions.'
    },
    {
      icon: 'icon-tailored',
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks and improve efficiency.'
    },
    {
      icon: 'icon-support',
      title: 'Custom AI Solutions',
      description: 'Tailored to your specific business challenges, ensuring maximum impact.'
    }
  ];

  const IMPLEMENTATION_FEATURES = [
    {
      icon: 'icon-shield',
      title: 'Tailored AI Solutions',
      description: 'Designed to solve your most pressing business problems.'
    },
    {
      icon: 'icon-system-integration',
      title: 'End-to-End Management',
      description: 'Full lifecycle management from creation to deployment, ensuring optimal performance.'
    },
    {
      icon: 'icon-compliance',
      title: 'Automated Workflows',
      description: 'Reduce human intervention and improve process efficiency.'
    }
  ];

  return (
    <div className="solution-implementation-page">
      <Header />
      
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span>AI</span>{' '}
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Agents</span>
            </h1>
            <p className="page-hero__description">
            Tailored Solutions for Your Business Needs
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="page-intro">
        <div className="container">
          <p className="page-intro__text">
          We design, license, and manage custom AI agents specifically crafted to address your unique business challenges. From automating workflows to enhancing decision-making, each AI agent is purpose-built, deployed, and managed by Skysecure to optimize your operations.          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="page-values">
        <div className="container">
          <div className="page-values__header">
            <h2 className="page-values__title">Our Core Values</h2>
            <p className="page-values__subtitle">Delivering excellence through proven methodologies</p>
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

      {/* Our Implementation Approach Section */}
      <section className="page-innovation">
        <div className="container">
          <div className="page-innovation__content">
            <div className="page-innovation__text">
              <h2 className="page-innovation__title">Complete AI Agent Management</h2>
              <p className="page-innovation__description">
              From the initial design phase to full deployment and continuous management, our team ensures your AI agents work seamlessly with your existing infrastructure, delivering measurable outcomes without the hassle of maintaining them.              </p>
            </div>
            <div className="page-innovation__image">
              <ImagePlaceholder 
                label="Team collaboration during implementation"
                imageName="marketplace/implementation-team.png"
                width={570}
                height={300}
                borderRadius={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Features Section */}
      <section className="page-features">
        <div className="container">
          <div className="page-features__header">
            <h2 className="page-features__title">Implementation Features</h2>
            <p className="page-features__subtitle">Comprehensive support throughout your journey</p>
          </div>
          <div className="page-features__grid">
            {IMPLEMENTATION_FEATURES.map((feature, index) => (
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
            <h2 className="page-cta__title">Accelerate with AI. Simplify Your Operations.</h2>
            <p className="page-cta__description">
            Our AI agents are built to integrate effortlessly across different platforms and systems, providing<br></br>you with a consistent and unified solution for your business.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionImplementation;
