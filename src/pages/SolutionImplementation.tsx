import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const SolutionImplementation: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-integration',
      title: 'Seamless Integration',
      description: 'Leverage a solution designed to integrate seamlessly into your existing systems and processes.'
    },
    {
      icon: 'icon-tailored',
      title: 'Tailored Approach',
      description: 'Benefit from a bespoke implementation strategy that aligns with your unique needs and goals.'
    },
    {
      icon: 'icon-support',
      title: 'Expert Guidance',
      description: 'Work alongside a team of professionals committed to ensuring the successful deployment of your solution.'
    }
  ];

  const IMPLEMENTATION_FEATURES = [
    {
      icon: 'icon-shield',
      title: 'Custom Security Solutions',
      description: 'Tailored security frameworks designed specifically for your organization\'s needs.'
    },
    {
      icon: 'icon-system-integration',
      title: 'System Integration',
      description: 'Seamless integration with your existing infrastructure and workflows.'
    },
    {
      icon: 'icon-compliance',
      title: 'Planning & Testing',
      description: 'Comprehensive planning and rigorous testing before deployment.'
    },
    {
      icon: 'icon-staff-training',
      title: 'Staff Training',
      description: 'Complete training programs to ensure your team is ready for success.'
    },
    {
      icon: 'icon-growth',
      title: 'Continuous Monitoring',
      description: 'Ongoing monitoring and optimization for peak performance.'
    },
    {
      icon: 'icon-pdsupport',
      title: 'Post-Deployment Support',
      description: 'Dedicated consultation and support after implementation.'
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
              <span>Solution</span>{' '}
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Implementation</span>
            </h1>
            <p className="page-hero__description">
              Experience a seamless transition, guided by our expert team, as we collaborate closely with you to deliver a customized solution that maximizes efficiency, drives tangible results, and accelerates your path to success.
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="page-intro">
        <div className="container">
          <p className="page-intro__text">
            Navigating the complexities of implementing security solutions can be a daunting task for any organization. That's where our Solution Implementation service steps in, offering a seamless and guided transition towards a more secure operational framework. Our expert team works closely with you, ensuring that every aspect of the solution deployment is tailored to fit your specific needs and operational context. With a focus on minimizing disruption and maximizing effectiveness, we transform your security challenges into strengths, setting you on the path to success.
          </p>
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
              <h2 className="page-innovation__title">Our Implementation Approach</h2>
              <p className="page-innovation__description">
                At the core of our Solution Implementation service is our commitment to working hand-in-hand with your team. From understanding your unique challenges to designing a tailored strategy, we ensure that every phase of the deployment process is meticulously planned and executed. Our approach balances precision and flexibility, making sure that we're aligned with your security goals while enhancing operational efficiency.
              </p>
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
            <h2 className="page-cta__title">Transform Your Security with Confidence</h2>
            <p className="page-cta__description">
              From seamless integration to continuous support, let us guide your organization to a more secure future.
            </p>
            <button className="page-cta__button">Get Started</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SolutionImplementation;
