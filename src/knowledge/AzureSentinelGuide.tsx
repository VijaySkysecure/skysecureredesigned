import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

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

const RELATED_ARTICLES = [
  {
    image: 'cloud-security-cover',
    tag: 'Blog',
    title: 'The Future of Cloud Security',
    description: 'Exploring emerging trends and technologies in cloud security',
    date: 'June 15, 2023',
    readTime: '5 min read'
  },
  {
    image: 'circuit-board-cover',
    tag: 'Report',
    title: 'AI-Driven Threat Detection: 2024 Report',
    description: 'Comprehensive analysis of AI-powered security solutions',
    date: 'May 22, 2023',
    readTime: '8 min read'
  },
  {
    image: 'server-racks-cover',
    tag: 'Guide',
    title: 'Zero Trust in Industrial Environments',
    description: 'Implementing zero trust architecture for industrial systems',
    date: 'April 10, 2023',
    readTime: '8 min read'
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
                <a href="/" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; }}>Home</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <a href="/#knowledge-resources" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => { const element = document.getElementById('knowledge-resources'); if (element) element.scrollIntoView({ behavior: 'smooth' }); }, 100); }}>Knowledge & Resources</a>
                <span className="breadcrumb-separator" style={{ color: '#000000' }}>&gt;</span>
                <a href="/#knowledge-resources" className="breadcrumb-link" style={{ color: '#000000' }} onClick={(e) => { e.preventDefault(); window.location.href = '/'; setTimeout(() => { const element = document.getElementById('knowledge-resources'); if (element) { element.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { const blogTab = element.querySelector('[data-tab="blog"]') as HTMLElement; if (blogTab) blogTab.click(); }, 500); } }, 100); }}>Blog</a>
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
                  label="Author"
                  imageName="knowledge/icon-person.png"
                  width={14}
                  height={24}
                  borderRadius={0}
                />
                <span>Nithin Ramegowda</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Visual */}
        <section className="blog-hero">
          <div className="container" style={{ textAlign: 'center' }}>
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
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '32px', maxWidth: '900px', margin: '0 auto 32px auto' }}>
                <div style={{ width: '500px' }}>
                  <h2 className="blog-section-title" style={{ marginTop: '-30px', marginBottom: '20px' }}>Overview</h2>
                  <p className="blog-section-text">
                  Azure Sentinel is Microsoft's cloud-native Security Information and Event Management (SIEM) system, designed to provide end-to-end visibility and threat detection across your enterprise. By collecting data from servers, endpoints, applications, and cloud platforms, it delivers a centralized and intelligent view of your security posture, helping teams identify and respond to incidents faster.
                  </p>
                </div>
                <div style={{ flexShrink: 0 }}>
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
            <section className="blog-section" style={{ marginLeft: '0', margin: '0 auto 30px auto', maxWidth: '1000px' }}>
              <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Key Features</h2>
              <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'nowrap' }}>
                {KEY_FEATURES.map((feature, index) => (
                  <div key={index} className="measure-card" style={{ width: '240px', height: '270px', flexShrink: 0, alignItems: 'flex-start', textAlign: 'left' }}>
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
              <div style={{ backgroundColor: '#F8FAFC', padding: '40px', marginTop: '-50px', width: '100vw', marginLeft: 'calc(-53vw + 50%)' }}>
                <h2 className="blog-section-title" style={{ marginTop: 0, marginBottom: '42px', marginLeft: '220px' }}>Benefits</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '62px', maxWidth: '1000px', margin: '0 auto' }}>
                  {BENEFITS.map((benefit, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ flexShrink: 0, width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <ImagePlaceholder
                          label={benefit.title}
                          imageName={`knowledge/${benefit.icon}.png`}
                          width={50}
                          height={50}
                          borderRadius={0}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: '0 0 8px 0', textAlign: 'left' }}>{benefit.title}</h3>
                        <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5', margin: 0, textAlign: 'left' }}>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', padding: '20px', borderRadius: '8px', marginTop: '32px', maxWidth: '1000px', margin: '32px auto 0 auto' }}>
                  <p className="blog-section-text" style={{ margin: 0 }}>
                  Azure Sentinel removes the complexity of traditional security operations by consolidating data, automating responses, and enabling your teams to work smarter, not harder.
                  </p>
                </div>
              </div>
            </section>

            {/* Why Azure Sentinel? */}
            <section className="blog-section">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', marginBottom: '32px', maxWidth: '900px', margin: '0 auto 32px auto' }}>
                <div style={{ width: '500px' }}>
                  <h2 className="blog-section-title" style={{ marginBottom: '16px' }}>Why Azure Sentinel?</h2>
                  <p className="blog-section-text">
                  Azure Sentinel stands apart by combining automation, scalability, and intelligence within a single platform. It empowers organizations to protect hybrid and multi-cloud environments while reducing operational burden. Whether you're an SMB or a large enterprise, Sentinel scales with your needs and integrates seamlessly with your existing Microsoft ecosystem.
                  </p>
                </div>
                <div style={{ flexShrink: 0 }}>
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
              <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 className="blog-section-title" style={{ marginBottom: '24px' }}>Conclusion</h2>
                <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
                <p className="blog-section-text" style={{ marginBottom: '0px', textAlign: 'left' }}>
                Microsoft Azure Sentinel is a next-generation SIEM solution that enables proactive, intelligent, and scalable threat protection. Its real-time analytics, deep integrations, and automation capabilities make it an ideal choice for organizations seeking to enhance their cybersecurity posture and mitigate risks effectively. With Skysecure's expertise in Azure deployment and monitoring, your security transformation can be seamless, cost-efficient, and future-ready.
                </p>
                <div style={{ textAlign: 'center' }}>
                </div>
                </div>
              </div>
            </section>

            {/* Author Bio */}
            <section className="author-bio" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginTop: '100px', width: '100vw', marginLeft: 'calc(-50vw + 50%)', padding: '50px 50px' }}>
              <div className="author-bio__image" style={{ flexShrink: 0 }}>
                <ImagePlaceholder
                  label="Nithin Ramegowda"
                  imageName="homepage/portrait2.png"
                  width={80}
                  height={80}
                  borderRadius={40}
                />
              </div>
              <div className="author-bio__content" style={{ flex: 1 }}>
                <h3 className="author-name" style={{ fontSize: '18px', fontWeight: 'bold', color: '#000000', margin: '0 0 4px 0' }}>Nithin Ramegowda</h3>
                <p className="author-title" style={{ fontSize: '14px', color: '#0066CC', margin: '0 0 8px 0' }}>Co-Founder & Chief Of Business Strategy, Skysecure</p>
                <p className="author-description" style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5', margin: 0 }}>
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
