import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import '../styles/knowledge/healthcare-cloud-security-overhaul.css';

const CHALLENGES = [
  {
    text: 'Lack of centralized monitoring across AWS, Azure, and private cloud environments'
  },
  {
    text: 'Inconsistent access controls and identity management'
  },
  {
    text: 'Manual incident response processes causing delays'
  },
  {
    text: 'Compliance gaps rooted to patient data handling and storage'
  }
];

const APPROACH_STEPS = [
  {
    icon: 'icon-assessment',
    title: 'Assessment & Gap Analysis',
    description: 'Comprehensive security audit and vulnerability assessment',
    color: 'rgba(37, 99, 235, 1)'
  },
  {
    icon: 'icon-design',
    title: 'Design & Implementation',
    description: 'Zero Trust architecture design and deployment',
    color: 'rgba(34, 197, 94, 1)'
  },
  {
    icon: 'icon-automation',
    title: 'Automation & Integration',
    description: 'Security automation and SIEM integration',
    color: 'rgba(168, 85, 247, 1)'
  },
  {
    icon: 'icon-testing',
    title: 'Testing & Optimization',
    description: 'Penetration testing and performance optimization',
    color: 'rgba(249, 115, 22, 1)'
  }
];

const SOLUTIONS = [
  {
    icon: 'icon-shield-lightning',
    title: 'Unified Cloud Security Monitoring',
    description: 'Integrated all environments under a single Azure Sentinel dashboard for real- time threat analytics and alerts.',
    color: 'rgba(37, 99, 235, 1)'
  },
  {
    icon: 'icon-zero-trust',
    title: 'Zero Trust Implementation',
    description: 'Enforced identity-based access control across users, devices, and workloads with continuous verification.',
    color: 'rgba(34, 197, 94, 1)'
  },
  {
    icon: 'icon-compliance',
    title: 'Automated Compliance Management',
    description: 'Deployed continuous compliance policies mapped to HIPAA, NIST, and ISO frameworks for seamless auditing.',
    color: 'rgba(168, 85, 247, 1)'
  },
  {
    icon: 'icon-threat-response',
    title: 'Threat Response Automation',
    description: 'Configured AI-powered playbooks to detect, contain, and remediate incidents automatically with minimal human intervention.',
    color: 'rgba(249, 115, 22, 1)'
  }
];

const METRICS = [
  {
    percentage: '60%',
    icon: 'icon-shield',
    label: 'reduction in cloud vulnerabilities',
    color: 'rgba(17, 24, 39, 1)'
  },
  {
    percentage: '45%',
    icon: 'icon-speedometer',
    label: 'faster incident response',
    color: 'rgba(17, 24, 39, 1)'
  },
  {
    percentage: '100%',
    icon: 'icon-document',
    label: 'HIPAA compliance achieved',
    color: 'rgba(17, 24, 39, 1)'
  },
  {
    percentage: '99.9%',
    icon: 'icon-uptime',
    label: 'system uptime post-deployment',
    color: 'rgba(17, 24, 39, 1)'
  }
];

const BENEFITS = [
  'Streamlined audit processes',
  'Enhanced patient data protection',
  'Improved operational efficiency',
  'Reduced security management overhead'
];

export function HealthcareCloudSecurityOverhaul(): React.ReactElement {
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
                <a href="/#knowledge-resources" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => { const element = document.getElementById('knowledge-resources'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { const caseStudyTab = element.querySelector('[data-tab="case-studies"]') as HTMLElement; if (caseStudyTab) caseStudyTab.click(); }, 500); } }, 100); }}>Case Studies</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <span className="breadcrumb-current" style={{ color: '#000000' }}>Healthcare Cloud Security Overhaul</span>
              </nav>
          </div>
        </section>


        {/* Hero Section */}
        <section className="blog-hero" style={{ padding: '80px 0', marginBottom: '0px', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="hero-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '60px', justifyContent: 'center' }}>
              {/* Left Content */}
              <div style={{ flex: 1, maxWidth: '500px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>Case Study</span>
                  <span style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>Healthcare</span>
                  <span style={{ color: '#6B7280', fontSize: '14px' }}>July 2023</span>
                </div>
                <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1F2937', margin: '0 0 24px 0', lineHeight: '1.2' }}>
                  Healthcare Cloud Security Overhaul
                </h1>
                <p style={{ fontSize: '18px', color: '#4B5563', marginBottom: '32px', lineHeight: '1.6' }}>
                  Transforming healthcare data protection through comprehensive cloud security modernization and Zero Trust implementation.
                </p>
              </div>
              {/* Right Visual */}
              <div style={{ flex: 1, textAlign: 'center', maxWidth: '580px' }}>
                <ImagePlaceholder
                  label="Healthcare Cloud Security Dashboard"
                  imageName="knowledge/healthcare-cloud-security-dashboard.png"
                  width={590}
                  height={300}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="blog-content">
          <div className="container">

            {/* Executive Summary and Project Overview */}
            <section className="blog-section">
              <div className="executive-wrapper" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '32px', maxWidth: '1200px', margin: '0 auto 32px auto' }}>
                {/* Executive Summary - Left Side */}
                <div className="executive-left" style={{ flex: 2}}>
                  <h2 className="blog-section-title" style={{ marginBottom: '20px', marginTop: '0' }}>Executive Summary</h2>
                  <p className="blog-section-text" style={{ marginBottom: '32px' }}>
                  In today's digital-first healthcare landscape, safeguarding sensitive patient data and maintaining operational continuity are non-negotiable. Skysecure partnered with a leading healthcare organization to overhaul their cloud security architecture—strengthening compliance, optimizing infrastructure, and enabling secure scalability across multiple cloud environments.
                  </p>
                  <div className="summary-cards-wrapper" style={{ display: 'flex', gap: '24px' }}>
                    <div style={{ backgroundColor: '#EFF6FF', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                      <ImagePlaceholder
                        label="Security Enhancement"
                        imageName="knowledge/icon-shield-check.png"
                        width={20}
                        height={28}
                        borderRadius={0}
                      />
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: '600', color: '#1E40AF', marginBottom: '4px' }}>Security Enhancement</div>
                        <div style={{ fontSize: '14px', color: '#1E40AF' }}>60% reduction in cloud vulnerabilities</div>
                      </div>
                    </div>
                    <div style={{ backgroundColor: '#F0FDF4', padding: '20px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px', flex: 1 }}>
                      <ImagePlaceholder
                        label="Response Time"
                        imageName="knowledge/icon-stopwatch.png"
                        width={20}
                        height={28}
                        borderRadius={0}
                      />
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: '600', color: '#166534', marginBottom: '4px' }}>Response Time</div>
                        <div style={{ fontSize: '14px', color: '#166534' }}>45% improvement in incident response</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Overview - Right Side */}
                <div className="project-overview-box" style={{ flex: 1, backgroundColor: '#F9FAFB', padding: '24px', borderRadius: '12px' }}>
                  <h2 className="blog-section-title" style={{ marginBottom: '20px', marginTop: '0', fontSize: '20px' }}>Project Overview</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <ImagePlaceholder
                        label="Client"
                        imageName="knowledge/icon-building.png"
                        width={12}
                        height={24}
                        borderRadius={0}
                      />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '2px' }}>Client</div>
                        <div style={{ fontSize: '14px', color: '#374151' }}>Confidential Healthcare Provider (India)</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <ImagePlaceholder
                        label="Services"
                        imageName="knowledge/icon-gearss.png"
                        width={20}
                        height={20}
                        borderRadius={0}
                      />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '2px' }}>Services</div>
                        <div style={{ fontSize: '14px', color: '#374151' }}>Cloud Security, Compliance, Threat Detection, Automation</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <ImagePlaceholder
                        label="Duration"
                        imageName="knowledge/icon-calendarr.png"
                        width={14}
                        height={24}
                        borderRadius={0}
                      />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '2px' }}>Duration</div>
                        <div style={{ fontSize: '14px', color: '#374151' }}>4 Months</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <ImagePlaceholder
                        label="Key Outcome"
                        imageName="knowledge/icon-trophy.png"
                        width={20}
                        height={20}
                        borderRadius={0}
                      />
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#374151', marginBottom: '2px' }}>Key Outcome</div>
                        <div style={{ fontSize: '14px', color: '#374151' }}>60% reduction in vulnerabilities, 45% faster response</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* The Challenge */}
            <section className="blog-section challenge-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', backgroundColor: '#F9FAFB' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>The Challenge</h2>
              <div className="challenge-wrapper" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', marginBottom: '30px', maxWidth: '1100px', margin: '0 auto 32px auto' }}>
                <div className="challenge-text-box" style={{ width: '600px' }}>
                  <p className="blog-section-text">
                  The healthcare organization faced rising security challenges due to outdated systems, siloed data environments, and limited visibility across multiple cloud platforms. Frequent compliance audits and expanding telehealth operations exposed gaps in their security posture, making it difficult to protect patient data while adhering to HIPAA and local privacy regulations.
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    {CHALLENGES.map((challenge, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                        <div style={{ width: '8px', height: '8px', backgroundColor: '#EF4444', borderRadius: '50%', marginTop: '6px', flexShrink: 0 }}></div>
                        <span style={{ fontSize: '16px', color: '#374151', lineHeight: '1.5' }}>{challenge.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="challenge-image-wrapper" style={{ flexShrink: 0 }}>
                  <ImagePlaceholder
                    label="Challenge Visual"
                    imageName="knowledge/challenge-visual.png"
                    width={540}
                    height={360}
                    borderRadius={0}
                  />
                </div>
              </div>
            </section>

            {/* The Approach */}
            <section className="blog-section approach-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0'}}>
              <h2 className="blog-section-title" style={{ textAlign: 'center', marginTop: '50px'}}>The Approach</h2>
              <p className="blog-section-text" style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px auto', marginTop: '-20px' }}>
              Skysecure developed a holistic strategy to transform the client's cloud security ecosystem. The project combined Microsoft Azure Sentinel, automated compliance frameworks, and Zero Trust architecture to achieve unified visibility, faster incident response, and regulatory alignment.
              </p>
              <div className="approach-steps-wrapper" style={{ display: 'flex', justifyContent: 'center', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
                {APPROACH_STEPS.map((step, index) => (
                  <div key={index} style={{ textAlign: 'center', position: 'relative' }}>
                    <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px auto' }}>
                      <ImagePlaceholder
                        label={step.title}
                        imageName={`knowledge/${step.icon}.png`}
                        width={60}
                        height={60}
                        borderRadius={0}
                      />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0' }}>{step.title}</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.4', margin: 0 }}>{step.description}</p>
                    <div style={{ width: '100%', height: '3px', backgroundColor: step.color, borderRadius: '2px', marginTop: '16px' }}></div>
                    {index < APPROACH_STEPS.length - 1 && (
                      <div style={{ position: 'absolute', top: '40px', right: '-12px', width: '24px', height: '2px', backgroundColor: '#E2E8F0' }}></div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* The Solution */}
            <section className="blog-section solution-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginTop: '80px', padding: '60px 0', backgroundColor: '#F9FAFB' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>The Solution</h2>
              <div className="solution-grid-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 280px)', gap: '24px', maxWidth: '1250px', margin: '0 auto', justifyContent: 'center' }}>
                {SOLUTIONS.map((solution, index) => (
                  <div key={index} style={{ 
                    backgroundColor: '#FFFFFF', 
                    padding: '24px', 
                    borderRadius: '12px', 
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
                    border: '1px solid #E2E8F0',
                    width: '280px',
                    height: '270px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }} 
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.transform = 'translateY(-4px)'; 
                    e.currentTarget.style.boxShadow = '0px 8px 24px rgba(0, 0, 0, 0.15)'; 
                  }} 
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.transform = 'translateY(0)'; 
                    e.currentTarget.style.boxShadow = '0px 4px 12px rgba(0, 0, 0, 0.1)'; 
                  }}>
                    <div style={{ width: '48px', height: '48px', backgroundColor: solution.color, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <ImagePlaceholder
                        label={solution.title}
                        imageName={`knowledge/${solution.icon}.png`}
                        width={48}
                        height={48}
                        borderRadius={0}
                      />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'rgba(17, 24, 39, 1)', margin: '0 0 12px 0' }}>{solution.title}</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>{solution.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Measurable Security and Performance Gains */}
            <section className="blog-section metrics-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', marginTop: '80px'}}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Measurable Security and Performance Gains</h2>
              <div className="metrics-wrapper" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', marginBottom: '32px', maxWidth: '1000px', margin: '0 auto 32px auto' }}>
                <div className="metrics-grid-container" style={{ width: '500px' }}>
                  <div className="metrics-grid-box" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                    {METRICS.map((metric, index) => (
                      <div key={index} style={{ textAlign: 'center', padding: '20px' }}>
                        <div style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                          <ImagePlaceholder
                            label={metric.label}
                            imageName={`knowledge/${metric.icon}.png`}
                            width={60}
                            height={60}
                            borderRadius={0}
                          />
                        </div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: metric.color, marginBottom: '4px' }}>{metric.percentage}</div>
                        <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.3' }}>{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="metrics-text-container" style={{ width: '500px' }}>
                  <p className="blog-section-text" style={{ marginBottom: '24px' }}>
                  Post-implementation, the organization achieved enhanced visibility and real-time security orchestration across all cloud platforms. Automated alerting and AI-driven incident workflows reduced human dependency and improved accuracy, while the new Zero Trust framework ensured granular access control for every user and device.
                  </p>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: '0 0 16px 0' }}>Additional Benefits:</h3>
                    {BENEFITS.map((benefit, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <div style={{ width: '20px', height: '20px', backgroundColor: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ color: '#FFFFFF', fontSize: '12px', fontWeight: 'bold' }}>✓</span>
                        </div>
                        <span style={{ fontSize: '16px', color: '#374151' }}>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* The Outcome */}
            <section className="blog-section outcome-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', marginTop: '-60px' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>The Outcome</h2>
              <p className="blog-section-text" style={{ textAlign: 'center', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px auto' }}>
              The healthcare organization now operates with a comprehensive, automated security infrastructure that protects patient data, ensures regulatory compliance, and provides real-time threat visibility. This transformation positions them as a cybersecurity leader in the healthcare sector.
              </p>
            </section>

            {/* Ready to Modernize Your Cloud Security? */}
            <section className="blog-section cta-section" style={{ width: '100%', padding: '60px 0', overflowX: 'hidden' }}>
              <div className="cta-box" style={{ backgroundColor: 'rgba(10, 78, 255, 1)', padding: '40px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0' }}>Ready to Modernize Your Cloud Security?</h3>
                <p style={{ fontSize: '16px', color: '#FFFFFF', margin: '0 0 32px 0', opacity: 0.9 }}>
                Partner with Skysecure to build a secure, compliant, and future-ready cloud ecosystem for your organization.
                </p>
                <div className="cta-buttons-wrapper" style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                  <button style={{ backgroundColor: '#FFFFFF', color: '#3B82F6', padding: '12px 24px', borderRadius: '8px', border: '1px solid #3B82F6', fontSize: '16px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter' }}>
                    Contact Us
                  </button>
                  <button style={{ backgroundColor: 'rgba(10, 78, 255, 1)', color: '#FFFFFF', padding: '12px 24px', borderRadius: '8px', border: '1px solid #FFFFFF', fontSize: '16px', fontWeight: '600', cursor: 'pointer', fontFamily: 'Inter' }}>
                    Download Case Study PDF
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
