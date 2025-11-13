import React, { useState, useEffect } from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { getAllCustomerImages } from '../services/productService';
import '../styles/professional-services.css';
import '../styles/trusted-companies.css';

interface Company {
  _id?: string;
  id?: number;
  name?: string;
  clientLogo?: string;
}

const fallbackCompanies: Company[] = [
  { id: 1, name: 'Indegene' },
  { id: 2, name: 'MTR' },
  { id: 3, name: 'N' },
  { id: 4, name: 'Protiviti' },
  { id: 5, name: 'TMF Group' },
];

const STRATEGIC_APPROACH = [
  {
    icon: 'icon-shield',
    title: 'Cybersecurity',
    subtitle: 'Stay Ahead of Evolving Risks.',
    description: 'Defend your entire infrastructure with enterprise-grade threat intelligence, managed detection, and continuous compliance.  ',
    benefits: [
      'Managed Detection & Response (MDR)',
      'Endpoint & Network Security' ,
      'Vulnerability Assessment & Penetration Testing (VAPT)'
    ]
  },
  {
    icon: 'homepage/icon-assess.png',
    title: 'Data',
    subtitle: 'From Data to Revenue',
    description: 'From Microsoft Fabric and Power BI to governed data lakes and ETL pipelines, we help businesses transform information into intelligent decisions that drive measurable results. ',
    benefits: [
      'Microsoft Fabric & Power BI Deployment',
      'Data Lake Setup & Governance',
      'ETL Pipeline Implementation',
    ]
  },
  {
    icon: 'icon-person',
    title: 'Infra ',
    subtitle: 'Build for What’s Next',
    description: 'From cloud migration and network design to Microsoft 365 and Azure workspace deployment, we help you scale operations securely, seamlessly, and without downtime. ',
    benefits: [
      'Cloud Migration & Virtualization ',
      'Microsoft 365 & Azure Workspace Deployment',
      ' Network Design & VPN Configuration'
    ]
  },
  {
    icon: 'knowledge/icon-aiagent.png',
    title: 'AI Agents',
    subtitle: 'Intelligence, Designed for You. ',
    description: 'We design and deploy AI agents tailored to your business needs, from co-pilots that streamline daily operations. ',
    benefits: [
      'Custom AI Agent Development ',
      'Workflow & Co-Pilot Automation', 
      'Predictive and Generative AI ModelsPredictable costs'
    ]
  }
];

const TRUST_METRICS = [
  {
    number: '500 +',
    description: 'successful deployments delivered worldwide'
  },
  {
    number: '50 000 +',
    description: 'licenses implemented and optimized'
  },
  {
    number: '98 %',
    description: 'client retention rate'
  },
  {
    number: '10 +',
    description: 'Trusted across industries including finance, manufacturing, healthcare & retail'
  }
];

const COMPREHENSIVE_SOLUTIONS = [
  {
    icon: 'icon-crosshair',
    title: 'Cyber Defense & Threat Protection',
    description: 'Advanced endpoint, network, and cloud defense powered by AI and human expertise.'
  },
  {
    icon: 'icon-growth',
    title: 'Managed Security Operations',
    description: 'Continuous monitoring, detection, and response by certified cybersecurity specialists.'
  },
  {
    icon: 'icon-waves',
    title: 'Software Licensing Solutions',
    description: 'Authorized reseller of Microsoft, Adobe, Autodesk, and other major brands with flexible enterprise licensing options.'
  },
  {
    icon: 'icon-chainlink',
    title: 'Risk & Vulnerability Assessment',
    description: 'In-depth penetration testing and audit reports to uncover and mitigate potential risks.'
  },
  {
    icon: 'icon-search',
    title: 'Incident Response & Recovery',
    description: 'Rapid breach response and remediation services that minimize downtime and data loss.'
  },
  {
    icon: 'icon-refresh',
    title: 'Training & Awareness Programs',
    description: 'Empower your workforce to recognize and respond to cyber threats effectively.'
  }
];

export function ProfessionalServices(): React.ReactElement {
  const [companiesLogo, setCompaniesLogo] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllCustomerImages();
  }, []);

  const fetchAllCustomerImages = async () => {
    try {
      const response = await getAllCustomerImages();
      if (response.success && response.data?.docs) {
        setCompaniesLogo(response.data.docs);
      } else {
        console.warn("Failed to fetch customer images:", response.message);
      }
    } catch (error) {
      console.error("Error fetching all customer images", error);
    } finally {
      setLoading(false);
    }
  };

  const displayCompanies = companiesLogo.length > 0 ? companiesLogo : fallbackCompanies;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title" style={{ width: '850px' }}>
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>
                From Purchase to Performance,<br />
                End-to-End Deployment - Done Right
              </span>
            </h1>
            <p className="page-hero__description" style={{ marginLeft: '50px' }}>
            Our expert team ensures your technology environment is seamlessly connected and optimized for performance. From licensing to configuration, we deliver smooth rollouts powered by certified expertise and ongoing support..
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="page-intro">
          <div className="container">
            <div className="page-intro__text">
              <h2 className="page-values__title" style={{ textAlign: 'center' }}>
                When technology meets expertise, transformation happens.
              </h2>
              <p style={{ fontSize: '16px', textAlign: 'center', color: 'var(--color-grey)', lineHeight: '1.6', marginTop: '24px', maxWidth: '900px', margin: '24px auto 0 auto' }}>
                Deploying advanced tools is only half the journey. Making them work securely, efficiently, and at scale is where Skysecure's Professional Services make the difference. Our certified experts ensure every implementation drives faster adoption, lower risk, and higher ROI.
              </p>
            </div>
          </div>
        </section>

        {/* Our Strategic Approach Section */}
        <section className="page-values" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-values__header">
              <h2 className="page-values__title">Four Domains, One unified standard of precision, performance, and trust.</h2>
            </div>
            <div className="page-values__grid">
              {STRATEGIC_APPROACH.map((approach, index) => (
                <div key={index} className="page-value-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                    <div className="page-value-card__icon" style={{ marginBottom: 0, flexShrink: 0 }}>
                      <ImagePlaceholder
                        label={approach.title}
                        imageName={approach.icon.includes('/') ? approach.icon : `securitysolutions/${approach.icon}.png`}
                        width={50}
                        height={50}
                        borderRadius={0}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 className="page-value-card__title" style={{ marginBottom: '4px', minHeight: '0px' }}>{approach.title}</h3>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: 'rgba(37, 99, 235, 1)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                        {approach.subtitle}
                      </div>
                    </div>
                  </div>
                  <p className="page-value-card__description" style={{ marginBottom: '16px', flex: '1 1 auto', minHeight: '60px' }}>
                    {approach.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: 'auto' }}>
                    {approach.benefits.map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '14px', color: 'var(--color-grey)' }}>
                        <span style={{ color: 'rgba(37, 99, 235, 1)', fontWeight: 'bold' }}>✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted by Businesses Section */}
        <section className="page-innovation" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <h2 className="page-values__title" style={{ textAlign: 'center', marginBottom: '48px' }}>
              Trusted by Businesses That Demand Performance
            </h2>
            <div className="trust-metrics-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '24px', 
              maxWidth: '1000px', 
              margin: '0 auto' 
            }}>
              {TRUST_METRICS.map((metric, index) => (
                <div key={index} style={{ 
                  textAlign: 'center', 
                  padding: '32px 24px',
                  backgroundColor: 'var(--color-white)',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(17, 24, 39, 0.12)'
                }}>
                  <div style={{ 
                    fontSize: '36px', 
                    fontWeight: '700', 
                    color: 'rgba(37, 99, 235, 1)', 
                    marginBottom: '8px',
                    lineHeight: '1.2'
                  }}>
                    {metric.number}
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#64748b', 
                    lineHeight: '1.5' 
                  }}>
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Ecosystem Section */}
        <section className="trusted-companies-section professional-services-marquee">
          <div className="container">
            <h2 className="trusted-companies-title">Authorized and certified implementation partner for leading technology ecosystems:</h2>
            {loading ? (
              <div className="trusted-companies-skeleton">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="skeleton-logo"></div>
                ))}
              </div>
            ) : (
              <div className="trusted-companies-wrapper">
                <div className="trusted-companies-marquee">
                  {displayCompanies.map((company, index) => (
                    <div 
                      key={company._id || company.id || `company-${index}`} 
                      className="trusted-company-logo"
                    >
                      <img
                        src={company.clientLogo || "/icons/skysecure-logo.png"}
                        alt={company.name || `Company ${index + 1}`}
                        className="company-logo-img"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless looping */}
                  {displayCompanies.map((company, index) => (
                    <div 
                      key={`duplicate-${company._id || company.id || index}`} 
                      className="trusted-company-logo"
                    >
                      <img
                        src={company.clientLogo || "/icons/skysecure-logo.png"}
                        alt={company.name || `Company ${index + 1}`}
                        className="company-logo-img"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div style={{ 
              textAlign: 'center', 
              marginTop: '48px', 
              maxWidth: '900px', 
              marginLeft: 'auto', 
              marginRight: 'auto',
              padding: '32px',
              fontStyle: 'italic',
              fontSize: '18px',
              color: 'var(--color-grey)',
              lineHeight: '1.6'
            }}>
              "Skysecure's deployment expertise gave us instant visibility and control — our rollout was smooth, secure, and on schedule." — Head of IT
            </div>
          </div>
        </section>

        {/* Comprehensive Security Solutions Section */}
        <section className="page-features" style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}>
          <div className="container">
            <div className="page-features__header">
              <h2 className="page-features__title">Comprehensive Service Portfolio</h2>
            </div>
            <div className="page-features__grid">
              {COMPREHENSIVE_SOLUTIONS.map((solution, index) => (
                <div key={index} className="page-feature-card">
                  <div className="page-feature-card__icon">
                    <ImagePlaceholder
                      label={solution.title}
                      imageName={`securitysolutions/${solution.icon}.png`}
                      width={50}
                      height={50}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="page-feature-card__title">{solution.title}</h3>
                  <p className="page-feature-card__description">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Let's Build What's Next. </h2>
              <p className="page-cta__description">
              From deployment to optimization, Skysecure is your trusted partner for scalable, secure technology infrastructures. 
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
                <button 
                  className="mission-button mission-button--primary"
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                >
                  Request a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
