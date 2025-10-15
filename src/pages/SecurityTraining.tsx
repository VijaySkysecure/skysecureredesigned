import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CORE_TRAINING_COMPONENTS = [
  {
    icon: 'icon-blue-phish',
    title: 'Phishing Simulation',
    description: 'Train employees to recognize and respond to phishing attempts through realistic simulation exercises.'
  },
  {
    icon: 'icon-joystick',
    title: 'Interactive Learning',
    description: 'Engage your workforce with gamified modules, quizzes, and scenario-based learning to reinforce best practices.'
  },
  {
    icon: 'icon-growth',
    title: 'Progress Tracking',
    description: 'Monitor employee performance and improvement over time with detailed analytics and reporting dashboards.'
  }
];

const TRAINING_FEATURES = [
  {
    icon: 'icon-red-envelope',
    title: 'Phishing Attack Simulations',
    description: 'Realistic email simulations to test and improve threat recognition.'
  },
  {
    icon: 'icon-network-person',
    title: 'Social Engineering Awareness',
    description: 'Training on manipulation tactics and psychological attack vectors.'
  },
  {
    icon: 'icon-compliance',
    title: 'Compliance & Policy Training',
    description: 'Industry-specific compliance requirements and security policies.'
  },
  {
    icon: 'icon-green-trophy',
    title: 'Gamified Learning Modules',
    description: 'Interactive challenges, badges, and leaderboards for engagement.'
  },
  {
    icon: 'icon-consulting',
    title: 'Custom Training Paths by Role',
    description: 'Tailored learning experiences based on job functions and risk levels.'
  },
  {
    icon: 'icon-badge',
    title: 'Analytics & Certification Tracking',
    description: 'Detailed progress reports and automated certification management.'
  }
];

export function SecurityTraining(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Security</span> Training
            </h1>
            <p className="page-hero__description">
              Comprehensive cybersecurity awareness training programs designed to transform your employees into your first line of defense.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <p style={{ fontSize: '16px' }}>
                In today's evolving threat landscape, human error remains one of the leading causes of security breaches. Skysecure's Security Training service is designed to empower your workforce with the knowledge, awareness, and best practices needed to identify and respond to cyber threats effectively. Through interactive modules, simulated scenarios, and real-world exercises, we help organizations cultivate a strong security culture that minimizes risk and strengthens resilience.
              </p>
            </div>
          </div>
        </section>

        {/* Core Training Components Section */}
        <section className="page-values" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-values__header">
              <h2 className="page-values__title">Core Training Components</h2>
            </div>
            <div className="page-values__grid">
              {CORE_TRAINING_COMPONENTS.map((component, index) => (
                <div key={index} className="page-value-card">
                  <div className="page-value-card__icon">
                    <ImagePlaceholder
                      label={component.title}
                      imageName={`securitysolutions/${component.icon}.png`}
                      width={50}
                      height={50}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="page-value-card__title">{component.title}</h3>
                  <p className="page-value-card__description">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Training for Every Role Section */}
        <section className="page-innovation">
          <div className="container">
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '80px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{ flex: '1' }}>
                <h2 style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: 'var(--color-black)', 
                  marginBottom: '24px',
                  lineHeight: '1.2'
                }}>Comprehensive Training for<br></br>Every Role</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'var(--color-grey)', 
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  Our Security Training programs are designed for all levels of your organization, from executives to front-line staff. Each module covers critical areas such as social engineering, password hygiene, data handling, and remote work security. With our adaptive learning platform, training is customized to match your industry, risk profile, and compliance requirements, ensuring maximum engagement and measurable results.
                </p>
              </div>
              <div style={{ flex: '1' }}>
                <ImagePlaceholder
                  label="Security Training Dashboard"
                  imageName="securitysolutions/security-training-dashboard.png"
                  width={560}
                  height={360}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Training Features Section */}
        <section className="page-features" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Training Features</h2>
            </div>
            <div className="page-features__grid">
              {TRAINING_FEATURES.map((feature, index) => (
                <div key={index} className="page-feature-card">
                  <div className="page-feature-card__icon">
                    <ImagePlaceholder
                      label={feature.title}
                      imageName={`securitysolutions/${feature.icon}.png`}
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

        {/* Modern Training for the Modern Workforce Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <h2 style={{ 
                fontSize: '32px', 
                fontWeight: '700', 
                color: 'var(--color-black)', 
                marginBottom: '24px',
                textAlign: 'center',
                lineHeight: '1.2'
              }}>Modern Training for the Modern Workforce</h2>
              <p style={{ fontSize: '16px', textAlign: 'center' }}>
                Delivered through a cloud-based learning platform, Skysecure's Security Training offers on-demand access, real-time analytics, and customizable content. We integrate with existing LMS systems, ensuring a seamless rollout and easy tracking of participation and progress. Continuous content updates keep your teams informed about the latest threats and evolving attack methods.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Empower Your Team to Defend with Confidence</h2>
              <p className="page-cta__description">
                Transform your employees into your strongest defense line with engaging, data-driven cybersecurity training.
              </p>
              <button className="page-cta__button">Start a Training Program</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
