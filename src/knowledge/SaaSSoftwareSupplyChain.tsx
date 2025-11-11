import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import '../styles/knowledge/saas-software-supply-chain.css';

const CHALLENGES = [
  {
    icon: 'icon-warning-triangle',
    title: 'Unverified Dependencies',
    description: 'Unverified open-source libraries and dependencies creating security gaps',
    color: '#EF4444'
  },
  {
    icon: 'icon-eye',
    title: 'Limited Visibility',
    description: 'Lack of end-to-end visibility across development pipelines',
    color: '#F59E0B'
  },
  {
    icon: 'icon-puzzle',
    title: 'Integration Risks',
    description: 'Limited controls around third-party integrations',
    color: '#EAB308'
  },
  {
    icon: 'icon-shield-check',
    title: 'Compliance Gaps',
    description: 'Absence of automated compliance validation',
    color: '#8B5CF6'
  }
];

const APPROACH_STEPS = [
  {
    number: '1',
    title: 'Assessment & Threat Modeling',
    description: 'Identify vulnerabilities in build pipelines and repositories through comprehensive security auditing.'
  },
  {
    number: '2',
    title: 'Security Integration',
    description: 'Embed automated scanning and policy enforcement within CI/CD workflows seamlessly.'
  },
  {
    number: '3',
    title: 'Automation & Monitoring',
    description: 'Deploy AI-based monitoring for dependencies and builds with real-time threat detection.'
  },
  {
    number: '4',
    title: 'Governance & Compliance',
    description: 'Map processes to ISO 27001, SOC 2, and customer SLAs for complete regulatory alignment.'
  }
];

const SOLUTIONS = [
  {
    icon: 'icon-code',
    title: 'End-to-End Pipeline Visibility',
    description: 'Unified all build environments under centralized security dashboards for continuous tracking.',
  },
  {
    icon: 'icon-search',
    title: 'Dependency Risk Scanning',
    description: 'Automated vulnerability detection in open-source packages and third-party APIs.',
    color: 'rgba(16, 185, 129, 1)'
  },
  {
    icon: 'icon-star',
    title: 'Continuous Compliance',
    description: 'Integrated compliance workflows aligned with SOC 2 and ISO standards.',
    color: 'rgba(168, 85, 247, 1)'
  },
  {
    icon: 'icon-brain',
    title: 'Threat Intelligence Automation',
    description: 'Leveraged AI to predict and block supply-chain attack vectors.',
    color: 'rgba(249, 115, 22, 1)'
  }
];

const RESULTS = [
  {
    percentage: '80%',
    description: 'reduction in dependency-related vulnerabilities',
    icon: 'icon-blue-shield'
  },
  {
    percentage: '60%',
    description: 'faster incident response in development environments',
    icon: 'icon-blue-clock'
  },
  {
    percentage: '100%',
    description: 'compliance readiness for SOC 2 and ISO 27001',
    icon: 'icon-tick-blue'
  },
  {
    percentage: '35%',
    description: 'improvement in developer productivity post-automation',
    icon: 'icon-blue-rocket'
  }
];

const RELATED_CASE_STUDIES = [
  {
    image: 'healthcare-cloud-security-overhaul',
    title: 'Healthcare Cloud Security Overhaul',
    description: 'Transforming healthcare data protection through comprehensive cloud security modernization and Zero Trust implementation.',
    link: '#'
  },
  {
    image: 'fortune-500-zero-trust',
    title: 'Fortune 500 Zero Trust Implementation',
    description: 'Comprehensive Zero Trust architecture deployment for a global enterprise, achieving 70% reduction in security incidents.',
    link: '#'
  },
  {
    image: 'ai-threat-detection-financial',
    title: 'AI-Powered Threat Detection in Financial Services',
    description: 'Machine learning-based threat detection system reducing false positives by 85% for a major financial institution.',
    link: '#'
  }
];

export function SaaSSoftwareSupplyChain(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <section className="blog-breadcrumbs">
          <div className="container">
              <nav className="breadcrumbs saas-breadcrumb">
                <a href="/" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <a href="/#knowledge-resources" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => { const element = document.getElementById('knowledge-resources'); if (element) element.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Knowledge & Resources</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <a href="/#knowledge-resources" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => { const element = document.getElementById('knowledge-resources'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { const caseStudyTab = element.querySelector('[data-tab="case-studies"]') as HTMLElement; if (caseStudyTab) caseStudyTab.click(); }, 500); } }, 100); }}>Case Studies</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <span className="breadcrumb-current" style={{ color: '#000000' }}>Securing the Software Supply Chain for a B2B SaaS</span>
              </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="blog-hero" style={{ padding: '80px 0', marginBottom: '0px', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="saas-hero-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '60px', justifyContent: 'center' }}>
              {/* Left Content */}
              <div className="saas-hero-left" style={{ flex: 1, maxWidth: '500px' }}>
                <div className="saas-hero-badges" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ backgroundColor: '#3B82F6', color: '#FFFFFF', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>Case Study</span>
                  <span style={{ backgroundColor: '#D1FAE5', color: '#065F46', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '500' }}>SaaS / Software Development</span>
                  <span style={{ color: '#6B7280', fontSize: '14px' }}>July 2023</span>
                </div>
                <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#1F2937', margin: '0 0 24px 0', lineHeight: '1.2' }}>
                  Securing the Software Supply Chain for a B2B SaaS
                </h1>
              </div>
              {/* Right Visual */}
              <div className="saas-hero-right" style={{ flex: 1, textAlign: 'center', maxWidth: '580px' }}>
                <ImagePlaceholder
                  label="Software Supply Chain Network"
                  imageName="knowledge/software-supply-chain-network.png"
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

            {/* Executive Summary */}
            <section className="blog-section saas-executive-summary" style={{ width: '100vw', marginLeft: '150px', marginTop: '-60px' }}>
              <h2 className="blog-section-title">Executive Summary</h2>
              <p className="blog-section-text">
              In today's rapidly evolving software landscape, securing the entire development lifecycle has become critical for B2B SaaS companies. Skysecure partnered with a leading SaaS provider to implement comprehensive software supply chain security, protecting against vulnerabilities, ensuring compliance, and enabling secure innovation across distributed development teams.
              </p>
            </section>

            {/* The Challenge */}
            <section className="blog-section saas-challenge-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', backgroundColor: 'rgba(247, 248, 250, 1)' }}>
              <div className="saas-challenge-content" style={{ maxWidth: '1200px', margin: '0 auto', marginLeft: '300px' }}>
                <h2 className="blog-section-title" style={{ marginBottom: '30px' }}>1. The Challenge</h2>
                <p className="blog-section-text" style={{ marginBottom: '40px' }}>
                The client's distributed development model, while enabling rapid innovation, introduced significant security risks across their software supply chain. With multiple development teams, third-party integrations, and continuous deployment pipelines, maintaining security visibility and compliance became increasingly complex.
                </p>
                <div className="saas-challenges-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '1000px' }}>
                {CHALLENGES.map((challenge, index) => (
                  <div key={index} style={{ 
                    backgroundColor: '#F8FAFC', 
                    padding: '24px', 
                    borderRadius: '12px', 
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #E2E8F0'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                      <div style={{ width: '36px', height: '48px', backgroundColor: challenge.color, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ImagePlaceholder
                          label={challenge.title}
                          imageName={`knowledge/${challenge.icon}.png`}
                          width={36}
                          height={48}
                          borderRadius={0}
                        />
                      </div>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', margin: 0 }}>{challenge.title}</h3>
                    </div>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>{challenge.description}</p>
                  </div>
                ))}
                </div>
              </div>
            </section>

            {/* The Approach */}
            <section className="blog-section saas-approach-section" style={{ marginLeft: '180px' }}>
              <h2 className="blog-section-title">2. The Approach</h2>
              <p className="blog-section-text" style={{ marginBottom: '40px' }}>
              Skysecure implemented a strategic, step-by-step approach to modernize the client's software supply chain security. The project began with a full pipeline audit, followed by automation of dependency scanning, risk scoring, and compliance mapping. Each improvement was designed to be developer- friendly, scalable, and fully integrated with their existing CI/CD stack.
              </p>
              <div className="saas-approach-steps" style={{ maxWidth: '800px', margin: '0 auto' }}>
                {APPROACH_STEPS.map((step, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '32px' }}>
                    <div style={{ width: '40px', height: '40px', backgroundColor: '#3B82F6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '600' }}>{step.number}</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1F2937', margin: '0 0 8px 0' }}>{step.title}</h3>
                      <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.5', margin: 0 }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* The Solution */}
            <section className="blog-section saas-solution-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', backgroundColor: '#F9FAFB' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>3. The Solution</h2>
              <p className="blog-section-text" style={{ textAlign: 'center', marginBottom: '40px', marginTop: '-30px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
              Comprehensive security integration across the entire development lifecycle
              </p>
              <div className="saas-solutions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '1200px', margin: '0 auto' }}>
                {SOLUTIONS.map((solution, index) => (
                  <div key={index} style={{ 
                    backgroundColor: '#FFFFFF', 
                    padding: '24px', 
                    borderRadius: '12px', 
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #E2E8F0'
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', marginBottom: '12px' }}>
                      <div className='saas-solution-icon-wrapper' style={{ width: '56px', height: '56px', backgroundColor: solution.color, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                        <ImagePlaceholder
                          label={solution.title}
                          imageName={`knowledge/${solution.icon}.png`}
                          width={60}
                          height={60}
                          borderRadius={0}
                        />
                      </div>
                      <h3 className='saas-solution-title' style={{ fontSize: '18px', fontWeight: '600', color: 'rgba(17, 24, 39, 1)', margin: 0 }}>{solution.title}</h3>
                    </div>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.5', margin: 0, textAlign: 'left' }}>{solution.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* The Results */}
            <section className="blog-section saas-results-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto', marginTop: '80px' }}>
                <h2 className="blog-section-title" style={{ textAlign: 'center' }}>4. The Results</h2>
              <h3 className="saas-results-subtitle" style={{ fontSize: '20px', fontWeight: '600', color: '#64748B', textAlign: 'center', marginBottom: '40px', marginTop: '-30px' }}>Quantifiable Security and Operational Gains</h3>
              <div className="saas-results-wrapper" style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', marginBottom: '40px', maxWidth: '1000px', margin: '0 auto 40px auto' }}>
                <div className="saas-results-left" style={{ width: '500px' }}>
                  {RESULTS.map((result, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                      <div style={{ width: '40px', height: '40px', backgroundColor: '#3B82F6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <ImagePlaceholder
                          label={result.description}
                          imageName={`knowledge/${result.icon}.png`}
                          width={40}
                          height={40}
                          borderRadius={0}
                        />
                      </div>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#1F2937', marginBottom: '4px' }}>{result.percentage}</div>
                        <div style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.4' }}>{result.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="saas-results-right" style={{ width: '500px', marginTop: '40px' }}>
                  <div style={{ backgroundColor: 'rgba(247, 248, 250, 1)', padding: '24px', borderRadius: '12px', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'}}>
                    <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                    The client's engineering and security teams now have complete visibility across their CI/CD pipelines, ensuring secure code delivery. Automated controls minimized manual checks and accelerated development cycles, helping them meet enterprise security and compliance expectations with ease.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </section>

            {/* The Outcome */}
            <section className="blog-section saas-outcome-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0', backgroundColor: '#F9FAFB' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 className="blog-section-title" style={{ textAlign: 'center' }}>5. The Outcome</h2>
                <p className="blog-section-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                The engagement resulted in a secure, transparent, and automated software supply chain that scales with business growth. The client's enhanced security posture not only mitigated risk but also increased customer trust, enabling them to pursue enterprise deals with higher compliance confidence.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <section className="saas-cta-section" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '60px 0 0 0', marginTop: '-60px' }}>
              <div className="saas-cta-content" style={{ backgroundColor: 'rgba(10, 78, 255, 1)', padding: '60px 40px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '32px', fontWeight: '700', color: '#FFFFFF', margin: '0 0 16px 0' }}>Strengthen Your Software Supply Chain with Confidence</h3>
                <p style={{ fontSize: '18px', color: '#FFFFFF', margin: '0 auto 0px auto', opacity: 0.9, maxWidth: '600px' }}>
                Partner with Skysecure to embed security across your entire development lifecycle, from code to cloud.
                </p>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
