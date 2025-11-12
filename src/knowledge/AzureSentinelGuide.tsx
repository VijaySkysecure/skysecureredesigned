import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import '../styles/knowledge/azure-sentinel-guide.css';

const KEY_FEATURES = [
  {
    icon: 'icon-blue-brain',
    title: 'Intelligent Security Analytics',
    description: 'Leverage AI and machine learning to detect anomalies and emerging threats in real time.'
  },
  {
    icon: 'icon-blue-graph',
    title: 'Customizable Dashboards',
    description: 'Build tailored monitoring views for threat investigation and operational insights.'
  },
  {
    icon: 'icon-windows',
    title: 'Microsoft Services Integration',
    description: 'Connect seamlessly with Office 365, Azure AD, Microsoft Cloud App Security for unified protection.'
  },
  {
    icon: 'icon-blue-plug',
    title: 'Open Integration',
    description: 'Extend capabilities through third-party integrations and APIs for complete enterprise coverage.'
  }
];

const BENEFITS = [
  {
    icon: 'icon-shield-lightning',
    title: 'Improved Threat Detection',
    description: 'Harness AI-driven analytics to identify threats before they cause damage.'
  },
  {
    icon: 'icon-shield-eye',
    title: 'Centralized Security Management',
    description: 'Get a unified view of your environment to simplify monitoring and response.'
  },
  {
    icon: 'icon-dollar-circle',
    title: 'Cost-Effective',
    description: 'Reduce infrastructure expenses with a scalable, cloud-native SIEM, pay only for what you use.'
  },
  {
    icon: 'icon-rocket-circle',
    title: 'Easy Deployment',
    description: 'Deploy in minutes, without heavy setup or infrastructure overhead.'
  }
];


export function AzureSentinelGuide(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumbs */}
        <section className="blog-breadcrumbs">
          <div className="container">
              <nav className="breadcrumbs">
                <a href="/" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); sessionStorage.removeItem('restoreScrollTo'); sessionStorage.removeItem('restoreFilter'); sessionStorage.removeItem('activateTab'); window.location.href = '/'; }}>Home</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <a href="/#insights" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/#insights'; }}>Intelligence Hub</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <a href="/#insights-blog" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); if (window.location.pathname !== '/') { sessionStorage.setItem('activateTab', 'blog'); window.location.href = '/'; } else { const resourcesSection = document.getElementById('insights'); if (resourcesSection) { resourcesSection.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { const tabButton = document.querySelector('[data-tab="blog"]') as HTMLElement; if (tabButton) { tabButton.click(); } }, 500); } } }}>Blog</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <span className="breadcrumb-current" style={{ color: '#000000' }}>Threat Protection with Microsoft Azure Sentinel</span>
              </nav>
          </div>
        </section>

        {/* Article Header */}
        <section className="blog-header">
          <div className="container">
            <h1 className="blog-title">Threat Protection with Microsoft Azure Sentinel</h1>
            <div className="blog-meta">
              <div className="blog-meta-item">
                <ImagePlaceholder
                  label="Calendar"
                  imageName="knowledge/icon-calendar.png"
                  width={14}
                  height={24}
                  borderRadius={0}
                />
                <span>July 08, 2023</span>
              </div>
              <div className="blog-meta-item">
                <ImagePlaceholder
                  label="Nithin Ramegowda"
                  imageName="homepage/portrait2.png"
                  width={24}
                  height={24}
                  borderRadius={12}
                />
                <span>Nithin Ramegowda</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Visual */}
        <section className="blog-hero">
          <div className="container azure-sentinel-hero-container">
            <ImagePlaceholder
              label="Azure Sentinel Hero Visual"
              imageName="knowledge/azure-sentinel-hero.png"
              width={800}
              height={330}
              borderRadius={0}
            />
          </div>
        </section>

        {/* Introduction */}
        <section className="blog-content">
          <div className="container">
            <div className="blog-intro">
              <p>
              With the rise of cybersecurity threats, organizations need reliable and scalable solutions to detect and respond to attacks. Microsoft Azure Sentinel is a cloud-native SIEM platform that leverages intelligent analytics, machine learning, and deep integrations to provide advanced threat protection. This article explores how Azure Sentinel empowers security teams with greater visibility, faster detection, and automated response capabilities.
              </p>
            </div>

            {/* Overview */}
            <section className="blog-section">
              <div className="azure-sentinel-overview-wrapper">
                <div className="azure-sentinel-overview-content">
                  <h2 className="blog-section-title azure-sentinel-overview-title">Overview</h2>
                  <p className="blog-section-text">
                  Azure Sentinel is Microsoft's cloud-native Security Information and Event Management (SIEM) system, designed to provide end-to-end visibility and threat detection across your enterprise. By collecting data from servers, endpoints, applications, and cloud platforms, it delivers a centralized and intelligent view of your security posture, helping teams identify and respond to incidents faster.
                  </p>
                </div>
                <div className="azure-sentinel-overview-image">
                  <ImagePlaceholder
                    label="Network Diagram"
                    imageName="knowledge/azure-network-diagram.png"
                    width={380}
                    height={240}
                    borderRadius={12}
                  />
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section className="blog-section azure-sentinel-features-section">
              <h2 className="blog-section-title azure-sentinel-features-title">Key Features</h2>
              <div className="azure-sentinel-features-grid">
                {KEY_FEATURES.map((feature, index) => (
                  <div key={index} className="measure-card azure-sentinel-feature-card">
                    <div className="measure-card__icon" style={{ alignSelf: 'flex-start' }}>
                      <ImagePlaceholder
                        label={feature.title}
                        imageName={`knowledge/${feature.icon}.png`}
                        width={50}
                        height={50}
                        borderRadius={0}
                      />
                    </div>
                    <h3 className="measure-card__title" style={{ textAlign: 'left' }}>{feature.title}</h3>
                    <p className="measure-card__description" style={{ textAlign: 'left' }}>{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="blog-section">
              <div className="azure-sentinel-benefits-wrapper">
                <h2 className="blog-section-title azure-sentinel-benefits-title">Benefits</h2>
                <div className="azure-sentinel-benefits-grid">
                  {BENEFITS.map((benefit, index) => (
                    <div key={index} className="azure-sentinel-benefit-item">
                      <div className="azure-sentinel-benefit-icon">
                        <ImagePlaceholder
                          label={benefit.title}
                          imageName={`knowledge/${benefit.icon}.png`}
                          width={50}
                          height={50}
                          borderRadius={0}
                        />
                      </div>
                      <div className="azure-sentinel-benefit-content">
                        <h3 className="azure-sentinel-benefit-title">{benefit.title}</h3>
                        <p className="azure-sentinel-benefit-description">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="azure-sentinel-benefits-note">
                  <p className="blog-section-text" style={{ margin: 0 }}>
                  Azure Sentinel removes the complexity of traditional security operations by consolidating data, automating responses, and enabling your teams to work smarter, not harder.
                  </p>
                </div>
              </div>
            </section>

            {/* Mobile Benefits Cards - Only visible on mobile */}
            <section className="blog-section azure-sentinel-mobile-benefits-section">
              <div className="azure-sentinel-mobile-benefits-wrapper">
                <h2 className="blog-section-title azure-sentinel-mobile-benefits-title">Benefits</h2>
                <div className="azure-sentinel-mobile-benefits-grid">
                  {BENEFITS.map((benefit, index) => (
                    <div key={index} className="azure-sentinel-mobile-benefit-card">
                      <div className="azure-sentinel-mobile-benefit-icon">
                        <ImagePlaceholder
                          label={benefit.title}
                          imageName={`knowledge/${benefit.icon}.png`}
                          width={50}
                          height={50}
                          borderRadius={0}
                        />
                      </div>
                      <h3 className="azure-sentinel-mobile-benefit-title">{benefit.title}</h3>
                      <p className="azure-sentinel-mobile-benefit-description">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Azure Sentinel? */}
            <section className="blog-section">
              <div className="azure-sentinel-why-wrapper">
                <div className="azure-sentinel-why-content">
                  <h2 className="blog-section-title" style={{ marginBottom: '16px' }}>Why Azure Sentinel?</h2>
                  <p className="blog-section-text">
                  Azure Sentinel stands apart by combining automation, scalability, and intelligence within a single platform. It empowers organizations to protect hybrid and multi-cloud environments while reducing operational burden. Whether you're an SMB or a large enterprise, Sentinel scales with your needs and integrates seamlessly with your existing Microsoft ecosystem.
                  </p>
                </div>
                <div className="azure-sentinel-why-image">
                  <ImagePlaceholder
                    label="Cloud Security"
                    imageName="knowledge/azure-cloud-security.png"
                    width={400}
                    height={250}
                    borderRadius={0}
                  />
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="blog-section">
              <div className="azure-sentinel-conclusion-wrapper">
                <h2 className="blog-section-title" style={{ marginBottom: '24px' }}>Conclusion</h2>
                <div className="azure-sentinel-conclusion-box">
                <p className="blog-section-text" style={{ marginBottom: '0px', textAlign: 'left' }}>
                Microsoft Azure Sentinel is a next-generation SIEM solution that enables proactive, intelligent, and scalable threat protection. Its real-time analytics, deep integrations, and automation capabilities make it an ideal choice for organizations seeking to enhance their cybersecurity posture and mitigate risks effectively. With Skysecure's expertise in Azure deployment and monitoring, your security transformation can be seamless, cost-efficient, and future-ready.
                </p>
                <div style={{ textAlign: 'center' }}>
                </div>
                </div>
              </div>
            </section>

            {/* Author Bio */}
            <section className="author-bio azure-sentinel-author-bio">
              <div className="author-bio__image azure-sentinel-author-image">
                <ImagePlaceholder
                  label="Nithin Ramegowda"
                  imageName="homepage/portrait2.png"
                  width={80}
                  height={80}
                  borderRadius={40}
                />
              </div>
              <div className="author-bio__content azure-sentinel-author-content">
                <h3 className="author-name azure-sentinel-author-name">Nithin Ramegowda</h3>
                <p className="author-title azure-sentinel-author-title">Co-Founder & Chief Of Business Strategy, Skysecure</p>
                <p className="author-description azure-sentinel-author-description">
                Nithin specializes in Microsoft security solutions and helps enterprises design and implement scalable cloud-native protection frameworks.
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
