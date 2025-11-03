import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CHALLENGES = [
  'Increased attack surfaces across multi-cloud platforms',
  'Inconsistent identity and access management',
  'Compliance challenges with cross-border data flows',
  'Shadow IT and unmanaged IoT endpoints'
];

const CORE_PRINCIPLES = [
  {
    icon: 'icon-shield-person',
    title: 'Never Trust, Always Verify',
    description: 'Every user, device, and network connection must be authenticated and authorized before accessing resources.'
  },
  {
    icon: 'icon-access-key',
    title: 'Least Privilege Access',
    description: 'Users and systems receive only the minimum access necessary to perform their functions.'
  },
  {
    icon: 'icon-beetle',
    title: 'Assume Breach',
    description: 'Design security controls with the assumption that threats exist both inside and outside the network.'
  }
];

const IMPLEMENTATION_COMPONENTS = [
  {
    icon: 'icon-person-check',
    title: 'Identity & Access Management (IAM)',
    description: 'Unified authentication via Azure AD, Okta, or other federated systems.'
  },
  {
    icon: 'icon-network-modules',
    title: 'Network Segmentation',
    description: 'Enforce micro-segmentation to limit lateral movement.'
  },
  {
    icon: 'icon-eye-monitor',
    title: 'Continuous Monitoring',
    description: 'Use SIEM and UEBA tools for behavioral analytics.'
  },
  {
    icon: 'icon-padlock',
    title: 'Data Protection',
    description: 'Encrypt data in transit and at rest, apply adaptive DLP policies.'
  },
  {
    icon: 'icon-gear-brain',
    title: 'Automation & AI Integration',
    description: 'Automate policy enforcement and anomaly detection with machine learning.'
  }
];

const ROADMAP_STEPS = [
  {
    number: '1',
    title: 'Assessment',
    description: 'Identify current hybrid architecture and risks.'
  },
  {
    number: '2',
    title: 'Strategy',
    description: 'Define Zero Trust objectives and success metrics.'
  },
  {
    number: '3',
    title: 'Implementation',
    description: 'Deploy identity-first controls and automation.'
  },
  {
    number: '4',
    title: 'Optimization',
    description: 'Continuously test, tune, and monitor for evolving threats.'
  }
];

const BENEFITS_METRICS = [
  {
    percentage: '68%',
    description: 'reduction in unauthorized access attempts'
  },
  {
    percentage: '55%',
    description: 'faster detection-to-response cycles'
  },
  {
    percentage: '40%',
    description: 'improvement in compliance readiness'
  },
  {
    percentage: '99.9%',
    description: 'uptime maintained during implementation'
  }
];

const CASE_STUDY_METRICS = [
  {
    percentage: '60%',
    description: 'MTTD Reduction'
  },
  {
    percentage: '24/7',
    description: 'Operations Support'
  },
  {
    percentage: '100%',
    description: 'Compliance Automation'
  }
];

const RELATED_ARTICLES = [
  {
    image: 'ai-threat-detection-report.png',
    tag: 'White Paper',
    tagColor: '#3B82F6',
    tagBgColor: '#EFF6FF',
    title: 'AI-Driven Threat Detection: 2024 Report',
    description: 'Comprehensive analysis of machine learning applications in cybersecurity and their effectiveness against modern threats.',
    link: '/ai-threat-detection-report'
  },
  {
    image: 'cloud-security-guide.png',
    tag: 'White Paper',
    tagColor: '#3B82F6',
    tagBgColor: '#EFF6FF',
    title: 'The Future of Cloud Security',
    description: 'Exploring emerging technologies and strategies for securing cloud environments in the digital age.',
    link: '/cloud-security-guide'
  },
  {
    image: 'healthcare-cloud-security.png',
    tag: 'Case Study',
    tagColor: '#10B981',
    tagBgColor: '#D1FAE5',
    title: 'Healthcare Cloud Security Overhaul',
    description: 'How a leading healthcare provider transformed their cloud security posture with Zero Trust architecture.',
    link: '/healthcare-cloud-security-overhaul'
  }
];

export function ZeroTrustHybridCloud(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <section className="blog-breadcrumbs">
          <div className="container">
            <nav className="breadcrumbs">
              <a href="/" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</a>
              <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
              <a href="/#knowledge-resources" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => { const element = document.getElementById('knowledge-resources'); if (element) element.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Knowledge & Resources</a>
              <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
              <a href="/#knowledge-resources" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => { const element = document.getElementById('knowledge-resources'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { const whitepaperTab = element.querySelector('[data-tab="whitepapers"]') as HTMLElement; if (whitepaperTab) whitepaperTab.click(); }, 500); } }, 100); }}>White Papers</a>
              <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
              <span className="breadcrumb-current" style={{ color: '#000000' }}>Zero Trust in Hybrid Cloud Environments</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="blog-hero" style={{ padding: '80px 0', marginBottom: '0px', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '60px', justifyContent: 'center' }}>
              {/* Left Content */}
              <div style={{ flex: 1, maxWidth: '720px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ backgroundColor: 'rgba(10, 78, 255, 1)', color: '#FFFFFF', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>White Paper</span>
                  <span style={{ color: '#6B7280', fontSize: '14px' }}>• July 2024 • Skysecure Research Team</span>
                </div>
                <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1F2937', margin: '0 0 24px 0', lineHeight: '1.2' }}>
                  Zero Trust in Hybrid <span style={{ color: 'rgba(10, 78, 255, 1)' }}>Cloud Environments</span>
                </h1>
              </div>
              {/* Right Visual */}
              <div style={{ flex: 1, textAlign: 'center', maxWidth: '580px' }}>
                <ImagePlaceholder
                  label="Zero Trust Hero Visual"
                  imageName="knowledge/zero-trust-visual.png"
                  width={580}
                  height={320}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary */}
        <section className="blog-content">
          <div className="container">
            <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Executive Summary</h2>
              <p className="blog-section-text" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto 40px auto' }}>
                As organizations increasingly adopt hybrid cloud architectures, traditional perimeter-based security models prove insufficient. Zero Trust provides a unified, adaptive framework that safeguards identities, data, and diverse ecosystems across on-premises and cloud environments.
              </p>
            </section>

            {/* Understanding Hybrid Cloud Challenges */}
            <section className="blog-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', backgroundColor: '#F9FAFB' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
                {/* Left Content */}
                <div style={{ flex: 1 }}>
                  <h2 className="blog-section-title" style={{ textAlign: 'left' }}>Understanding Hybrid Cloud Challenges</h2>
                  <p className="blog-section-text" style={{ textAlign: 'left', marginBottom: '32px' }}>
                    Hybrid cloud environments blend private and public cloud infrastructures, offering agility but also introducing complexity. Disparate systems, inconsistent access controls, and varied compliance standards create blind spots for security teams. A Zero Trust approach eliminates implicit trust,ensuring that every user, device, and workload is verified continuously.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {CHALLENGES.map((challenge, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div style={{ 
                          width: '12px', 
                          height: '12px', 
                          backgroundColor: '#EF4444', 
                          borderRadius: '50%', 
                          marginTop: '6px', 
                          flexShrink: 0 
                        }}></div>
                        <p style={{ fontSize: '16px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>{challenge}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Right Visual */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <ImagePlaceholder
                    label="Hybrid Cloud Challenges Visual"
                    imageName="knowledge/hybrid-cloud-challenges.png"
                    width={580}
                    height={380}
                    borderRadius={0}
                  />
                </div>
              </div>
            </div>
            </section>

            {/* Core Principles of Zero Trust in Hybrid Cloud */}
            <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', marginTop: '60px' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Core Principles of Zero Trust in Hybrid Cloud</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }}>
                {CORE_PRINCIPLES.map((principle, index) => (
                  <div key={index} style={{ 
                    backgroundColor: 'rgba(230, 238, 255, 1)', 
                    padding: '24px', 
                    borderRadius: '12px', 
                    border: '1px solid #E2E8F0',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      margin: '0 auto 16px auto'
                    }}>
                      <ImagePlaceholder
                        label={principle.title}
                        imageName={`knowledge/${principle.icon}.png`}
                        width={60}
                        height={60}
                        borderRadius={0}
                      />
                    </div>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: '600', 
                      color: '#1F2937', 
                      margin: '0 0 12px 0' 
                    }}>
                      {principle.title}
                    </h3>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#64748B', 
                      lineHeight: '1.5', 
                      margin: 0 
                    }}>
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Components of Zero Trust Implementation */}
            <section className="blog-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', backgroundColor: '#F9FAFB' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Key Components of Zero Trust Implementation</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 590px)', gap: '24px', marginTop: '40px', justifyContent: 'center' }}>
                {IMPLEMENTATION_COMPONENTS.map((component, index) => (
                  <div key={index} style={{ 
                    backgroundColor: '#FFFFFF', 
                    padding: '24px', 
                    borderRadius: '12px', 
                    border: '1px solid #E2E8F0',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    textAlign: 'left',
                    width: index === 4 ? '1200px' : '590px',
                    height: '130px',
                    gridColumn: index === 4 ? '1 / -1' : 'auto',
                    justifySelf: index === 4 ? 'center' : 'auto'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                      <div style={{ 
                        width: '48px', 
                        height: '48px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <ImagePlaceholder
                          label={component.title}
                          imageName={`knowledge/${component.icon}.png`}
                          width={48}
                          height={48}
                          borderRadius={0}
                        />
                      </div>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: '600', 
                        color: '#1F2937', 
                        margin: 0 
                      }}>
                        {component.title}
                      </h3>
                    </div>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#64748B', 
                      lineHeight: '1.5', 
                      margin: 0 
                    }}>
                      {component.description}
                    </p>
                  </div>
                ))}
                </div>
              </div>
            </section>

            {/* Zero Trust Adoption Roadmap */}
            <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Zero Trust Adoption Roadmap</h2>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
                {ROADMAP_STEPS.map((step, index) => (
                  <React.Fragment key={index}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ 
                        width: '60px', 
                        height: '60px', 
                        backgroundColor: 'rgba(10, 78, 255, 1)', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        margin: '0 auto 12px auto',
                        color: '#FFFFFF',
                        fontSize: '20px',
                        fontWeight: '700'
                      }}>
                        {step.number}
                      </div>
                      <h3 style={{ 
                        fontSize: '16px', 
                        fontWeight: '600', 
                        color: '#1F2937', 
                        margin: '0 0 8px 0' 
                      }}>
                        {step.title}
                      </h3>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#64748B', 
                        lineHeight: '1.4', 
                        margin: 0,
                        maxWidth: '200px'
                      }}>
                        {step.description}
                      </p>
                    </div>
                    {index < ROADMAP_STEPS.length - 1 && (
                      <div style={{ 
                        width: '20px', 
                        height: '20px', 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 10px'
                      }}>
                        <div style={{
                          width: 0,
                          height: 0,
                          borderLeft: '8px solid rgba(10, 78, 255, 1)',
                          borderTop: '6px solid transparent',
                          borderBottom: '6px solid transparent'
                        }}></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>

            {/* Benefits Observed in 2024 Deployments */}
            <section className="blog-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', backgroundColor: '#F9FAFB' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Benefits Observed in 2024 Deployments</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginTop: '40px' }}>
                {BENEFITS_METRICS.map((metric, index) => (
                  <div key={index} style={{ 
                    backgroundColor: '#FFFFFF', 
                    padding: '24px', 
                    borderRadius: '12px', 
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '32px', 
                      fontWeight: '700', 
                      color: 'rgba(10, 78, 255, 1)', 
                      margin: '0 0 8px 0' 
                    }}>
                      {metric.percentage}
                    </div>
                    <p style={{ 
                      fontSize: '14px', 
                      color: 'rgba(55, 65, 81, 1)', 
                      lineHeight: '1.4', 
                      margin: 0, 
                      fontWeight: '500'
                    }}>
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>
                <p className="blog-section-text" style={{ textAlign: 'center', marginTop: '32px', maxWidth: '800px', margin: '32px auto 0 auto' }}>
                Organizations adopting Zero Trust in hybrid environments report stronger security resilience, lower operational risks, and improved visibility across cloud workloads.
                </p>
              </div>
            </section>

            {/* Case Example: Multi-Cloud Enterprise */}
            <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Case Example: Multi-Cloud Enterprise</h2>
              <div style={{ 
                backgroundColor: 'rgba(230, 238, 255, 1)', 
                padding: '32px', 
                borderRadius: '12px', 
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                marginTop: '24px',
                maxWidth: '800px',
                margin: '24px auto 0 auto'
              }}>
                <p className="blog-section-text" style={{ textAlign: 'left', marginBottom: '32px' }}>
                  A multinational enterprise integrated Zero Trust across Azure and AWS environments using Skysecure's adaptive framework. The project unified IAM, automated compliance reporting, and reduced mean-time-to-detect (MTTD) by 60%. The result: a secure, scalable architecture supporting 24/7 operations with minimal disruption.
                </p>
                <div style={{ display: 'flex', gap: '100px', justifyContent: 'center' }}>
                  {CASE_STUDY_METRICS.map((metric, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                      <div style={{ 
                        fontSize: '32px', 
                        fontWeight: '700', 
                        color: 'rgba(10, 78, 255, 1)', 
                        margin: '0 0 8px 0' 
                      }}>
                        {metric.percentage}
                      </div>
                      <p style={{ 
                        fontSize: '14px', 
                        color: 'rgba(55, 65, 81, 1)', 
                        lineHeight: '1.4',
                        margin: 0,
                        fontWeight: '500'
                      }}>
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Future Outlook */}
            <section className="blog-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', backgroundColor: '#F9FAFB' }}>
              <div style={{ maxWidth: '950px', margin: '0 auto' }}>
                <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Future Outlook</h2>
                <p className="blog-section-text" style={{ textAlign: 'center', marginLeft: '60px' }}>
                  Zero Trust is evolving beyond architecture, it's becoming a foundational philosophy for secure digital transformation. As hybrid and edge computing expand, continuous verification and automation will define the next generation of enterprise security.
                </p>
              </div>
            </section>

            {/* Build a Secure Hybrid Cloud with Zero Trust (CTA) */}
            <section style={{ 
              padding: '80px 0', 
              backgroundColor: 'rgba(10, 78, 255, 1)',
              textAlign: 'center',
              width: '100vw',
              marginLeft: 'calc(-50vw + 50%)',
              marginTop: '60px'
            }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ 
                  fontSize: '36px', 
                  fontWeight: '700', 
                  color: '#FFFFFF', 
                  margin: '0 0 16px 0' 
                }}>
                  Build a Secure Hybrid Cloud with Zero Trust
                </h2>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#FFFFFF', 
                  lineHeight: '1.6',
                  opacity: 0.9,
                  maxWidth: '800px',
                  margin: '0 auto 40px auto'
                }}>
                  Partner with Skysecure to design, deploy, and manage a Zero Trust architecture tailored to your business.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                  <button 
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                    style={{ 
                      backgroundColor: 'rgba(10, 78, 255, 1)', 
                      color: '#FFFFFF', 
                      padding: '12px 24px', 
                      borderRadius: '8px', 
                      border: '2px solid #FFFFFF', 
                      fontSize: '16px', 
                      fontWeight: '500', 
                      cursor: 'pointer',
                      fontFamily: 'Inter'
                    }}
                  >
                    Contact Our Team
                  </button>
                </div>
              </div>
            </section>

            {/* Explore More Insights */}
            <section className="related-articles">
              <h2 className="related-articles__title">Explore More Insights</h2>
              <p style={{ fontSize: '16px', color: '#64748B', textAlign: 'center', marginBottom: '40px' }}>Discover more insights and research from Skysecure</p>
              <div className="related-articles__grid">
                {RELATED_ARTICLES.map((article, index) => (
                  <div key={index} className="related-article">
                    <div className="related-article__image">
                      <ImagePlaceholder
                        label={article.title}
                        imageName={`knowledge/${article.image}`}
                        width={400}
                        height={200}
                        borderRadius={8}
                      />
                    </div>
                    <div className="related-article__content">
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                        <span style={{ backgroundColor: article.tagBgColor, color: article.tagColor, padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>
                          {article.tag}
                        </span>
                      </div>
                      <h3 className="related-article__title">{article.title}</h3>
                      <p className="related-article__description">{article.description}</p>
                      <a href={article.link} style={{ color: '#3B82F6', textDecoration: 'none', fontSize: '14px', fontWeight: '500', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '20px' }}>
                        Read More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
