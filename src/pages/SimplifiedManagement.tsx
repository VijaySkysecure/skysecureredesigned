import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const SimplifiedManagement: React.FC = () => {
  const CORE_VALUES = [
    {
      icon: 'icon-pie-chart',
      title: 'Centralized Control',
      description: 'Access all key data in one place through a unified, easy-to-use dashboard.'
    },
    {
      icon: 'icon-tailored',
      title: 'Automated Workflows',
      description: 'Reduce the burden of manual tasks with automated systems tailored to your needs.'
    },
    {
      icon: 'icon-question-mark',
      title: 'Real-Time Insights',
      description: 'Stay ahead with continuous monitoring and actionable insights to guide decision-making.'
    }
  ];

  const FEATURE_HIGHLIGHTS = [
    {
      icon: 'icon-dashboard',
      title: 'Centralized IT & Security Dashboard',
      description: 'Unified view of all systems and security metrics'
    },
    {
      icon: 'icon-task-list',
      title: 'Automated Task Management',
      description: 'Streamline workflows with intelligent automation'
    },
    {
      icon: 'icon-eye',
      title: 'Real-Time Operational Monitoring',
      description: 'Continuous oversight of system performance'
    },
    {
      icon: 'icon-bell',
      title: 'Proactive Alerting & Issue Resolution',
      description: 'Early detection and automated response systems'
    },
    {
      icon: 'icon-rocket',
      title: 'Workflow Optimization',
      description: 'Continuous improvement of operational processes'
    },
    {
      icon: 'icon-growth',
      title: 'Data-Driven Decision Making',
      description: 'Actionable insights from comprehensive analytics'
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
              <span>Simplified</span>{' '}
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Management</span>
            </h1>
            <p className="page-hero__description">
              Streamlined management approach simplifies complex tasks, providing you with a centralized dashboard, automated workflows, and real-time insights, enabling you to effortlessly steer your organization towards growth.
            </p>
          </div>
        </div>
      </section>

      {/* Introductory Text Section */}
      <section className="page-intro">
        <div className="container">
          <p className="page-intro__text">
            In the fast-paced world of IT and security, managing an organization's technological infrastructure can quickly become a complex and daunting task. That's why we've developed our Simplified Management approach—designed to cut through the complexity and streamline your management processes. From a centralized dashboard to automated workflows and real-time insights, we empower your team with the tools needed to drive efficiency and growth.
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
              <h2 className="page-innovation__title">Centralized Dashboard Excellence</h2>
              <p className="page-innovation__description">
                At the heart of our Simplified Management service is a centralized dashboard designed to provide you with a comprehensive view of your IT and security landscape. This intuitive dashboard gives you quick access to critical data, from system performance to security alerts. By consolidating everything in one place, you can eliminate the need to juggle multiple systems, saving time and reducing errors.
              </p>
              <ul className="page-innovation__bullet-points">
                <li className="page-innovation__bullet-point">
                  <span className="page-innovation__bullet-icon">✓</span>
                  <span>Unified data visualization</span>
                </li>
              </ul>
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
            <h2 className="page-cta__title">Simplify Your Management, Accelerate Your Growth</h2>
            <p className="page-cta__description">
              Effortlessly navigate the complexities of IT management with a streamlined approach that empowers your organization to grow efficiently and securely.
            </p>
            <button className="page-cta__button">Get Started</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SimplifiedManagement;
