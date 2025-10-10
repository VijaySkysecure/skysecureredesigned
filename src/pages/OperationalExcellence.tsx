import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const OperationalExcellence: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-tailored',
      title: 'Process Optimization',
      description: 'Enhance efficiency through targeted strategies and tailored solutions.'
    },
    {
      icon: 'icon-growth',
      title: 'Continuous Improvement',
      description: 'Create a culture where ongoing refinement is embedded in every process.'
    },
    {
      icon: 'icon-best-practices',
      title: 'Best Practices & Innovation',
      description: 'Leverage industry-leading practices and cutting-edge technologies to maintain excellence.'
    }
  ];

  const FEATURE_HIGHLIGHTS = [
    {
      icon: 'icon-gap-analysis',
      title: 'Gap Analysis & Process Mapping',
      description: 'Identify inefficiencies and map current processes for optimization opportunities.'
    },
    {
      icon: 'icon-rocket',
      title: 'Lean & Agile Methodologies',
      description: 'Implement proven frameworks for streamlined and adaptive operations.'
    },
    {
      icon: 'icon-analytics',
      title: 'Quality Control & Performance Metrics',
      description: 'Establish robust monitoring systems and KPIs for continuous tracking.'
    },
    {
      icon: 'icon-automation',
      title: 'Workflow Automation & Optimization',
      description: 'Leverage technology to automate repetitive tasks and optimize workflows.'
    },
    {
      icon: 'icon-support',
      title: 'Employee Empowerment & Training',
      description: 'Build capabilities and foster a culture of continuous improvement.'
    },
    {
      icon: 'icon-industry-best-practices',
      title: 'Industry-Specific Best Practices',
      description: 'Apply tailored solutions based on industry standards and regulations.'
    }
  ];

  return (
    <div className="operational-excellence-page">
      <Header />
      
      {/* Hero Section */}
      <section className="operational-excellence-hero">
        <div className="container">
          <div className="operational-excellence-hero__content">
            <h1 className="operational-excellence-hero__title">
              <span className="operational-excellence-hero__title--black">Operational</span>{' '}
              <span className="operational-excellence-hero__title--blue">Excellence</span>
            </h1>
            <p className="operational-excellence-hero__description">
              We are committed to ensuring operational excellence by helping you identify gaps, deploying best practices & recommendations, optimizing processes, and fostering a culture of continuous improvement throughout your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="operational-excellence-intro">
        <div className="container">
          <p className="operational-excellence-intro__text">
            In the quest for competitive advantage, operational excellence stands out as a critical pillar for any organization. It's about more than just streamlining processes and reducing costs; it's about creating a sustainable system of continuous improvement that drives long-term success. Our Operational Excellence service is designed to transform your operations, ensuring they are as efficient, effective, and adaptable as possible. We partner with you to identify operational gaps and implement solutions that foster long-term growth and innovation.
          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="operational-excellence-values">
        <div className="container">
          <div className="operational-excellence-values__header">
            <h2 className="operational-excellence-values__title">Our Core Values</h2>
            <p className="operational-excellence-values__subtitle">Three pillars that drive operational excellence</p>
          </div>
          <div className="operational-excellence-values__grid">
            {CORE_VALUES.map((value, index) => (
              <div key={index} className="operational-excellence-value-card">
                <div className="operational-excellence-value-card__icon">
                  <ImagePlaceholder 
                    label={`${value.title} icon`}
                    imageName={`marketplace/${value.icon}.png`}
                    width={60}
                    height={60}
                    borderRadius={0}
                  />
                </div>
                <h3 className="operational-excellence-value-card__title">{value.title}</h3>
                <p className="operational-excellence-value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="operational-excellence-approach">
        <div className="container">
          <div className="operational-excellence-approach__content">
            <div className="operational-excellence-approach__text">
              <h2 className="operational-excellence-approach__title">Our Approach</h2>
              <p className="operational-excellence-approach__description">
                Our approach to operational excellence begins with a comprehensive analysis of your current operations. We identify inefficiencies, bottlenecks, and improvement opportunities to develop solutions tailored to your needs. By adopting best practices and refining workflows, we enable you to stay ahead of market dynamics and drive long-term success through continuous Improvement.
              </p>
            </div>
            <div className="operational-excellence-approach__image">
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
      <section className="operational-excellence-features">
        <div className="container">
          <div className="operational-excellence-features__header">
            <h2 className="operational-excellence-features__title">Feature Highlights</h2>
            <p className="operational-excellence-features__subtitle">Comprehensive solutions for operational transformation</p>
          </div>
          <div className="operational-excellence-features__grid">
            {FEATURE_HIGHLIGHTS.map((feature, index) => (
              <div key={index} className="operational-excellence-feature-card">
                <div className="operational-excellence-feature-card__icon">
                  <ImagePlaceholder 
                    label={`${feature.title} icon`}
                    imageName={`marketplace/${feature.icon}.png`}
                    width={50}
                    height={50}
                    borderRadius={0}
                  />
                </div>
                <h3 className="operational-excellence-feature-card__title">{feature.title}</h3>
                <p className="operational-excellence-feature-card__description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="operational-excellence-cta">
        <div className="container">
          <div className="operational-excellence-cta__content">
            <h2 className="operational-excellence-cta__title">Drive Excellence, Achieve Success</h2>
            <p className="operational-excellence-cta__description">
              Transform your operations and foster a culture of continuous improvement that drives long-term growth.
            </p>
            <button className="operational-excellence-cta__button">Learn More</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OperationalExcellence;
