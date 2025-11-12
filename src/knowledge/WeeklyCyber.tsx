import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import '../styles/weekly-cyber.css';

export function WeeklyCyber(): React.ReactElement {
  return (
    <div className="weekly-cyber-page">
      <Header />
      
      <main className="weekly-cyber-main">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <a href="/" onClick={(e) => { e.preventDefault(); sessionStorage.removeItem('restoreScrollTo'); sessionStorage.removeItem('restoreFilter'); sessionStorage.removeItem('activateTab'); window.location.href = '/'; }}>Home</a>
          <span className="breadcrumb-separator">›</span>
          <a href="/#insights" onClick={(e) => { e.preventDefault(); window.location.href = '/#insights'; }}>Intelligence Hub</a>
          <span className="breadcrumb-separator">›</span>
          <a href="/#insights-skysecure-decode" onClick={(e) => { e.preventDefault(); if (window.location.pathname !== '/') { sessionStorage.setItem('activateTab', 'skysecure-decode'); window.location.href = '/'; } else { const resourcesSection = document.getElementById('insights'); if (resourcesSection) { resourcesSection.scrollIntoView({ behavior: 'smooth' }); setTimeout(() => { const tabButton = document.querySelector('[data-tab="skysecure-decode"]') as HTMLElement; if (tabButton) { tabButton.click(); } }, 500); } } }}>Skysecure Decode</a>
          <span className="breadcrumb-separator">›</span>
          <span><b>Weekly Cyber Intelligence Update</b></span>
        </nav>

        {/* Hero Section */}
        <section className="weekly-hero">
          <div className="weekly-hero-content">

            <div className="hero-inner">
              <div className="hero-text">
                <div className="hero-badge">Skysecure Decode</div>
                <h1 className="hero-title">Weekly Cyber Intelligence Update</h1>
                <div className="hero-meta">
                  <span className="hero-date">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-icon">
                      <rect x="2" y="4" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <rect x="4" y="1" width="2" height="3" rx="0.5" fill="currentColor"/>
                      <rect x="10" y="1" width="2" height="3" rx="0.5" fill="currentColor"/>
                    </svg>
                    <span>July 15, 2024</span>
                  </span>
                  <span className="hero-author">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-icon">
                      <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M3 14C3 11 5.5 9 8 9C10.5 9 13 11 13 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span>Skysecure Threat Intelligence Team</span>
                  </span>
                </div>
              </div>
              <div className="hero-image">
                <img src="/assets/img/knowledge/weekly_cyber_1.png" alt="Cyber Intelligence Dashboard" />
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="weekly-intro">
          <div className="container-narrow">
            <p className="intro-text">
              Welcome to this week's edition of Skysecure Decode: Weekly Cyber Intelligence Update. Our 
              analysts have compiled the latest developments in cyber threats, emerging vulnerabilities, and 
              global attack trends. This report highlights critical incidents, ongoing threat campaigns, and tactical 
              recommendations to help organizations stay secure in an ever-evolving digital landscape.
            </p>
          </div>
        </section>

        {/* Global Threat Landscape */}
        <section className="threat-landscape">
          <div className="container-narrow">
            <h2 className="section-title">Global Threat Landscape Overview</h2>
            <p className="section-description">
              This week saw a surge in phishing campaigns leveraging AI-generated content, targeting financial institutions and SaaS platforms. 
              Simultaneously, several ransomware groups continued exploiting vulnerabilities in cloud file-sharing systems. Notably, nation-state actors 
              increased reconnaissance activities across energy and defense sectors.
            </p>

            <div className="threat-content">
              <div className="threat-landscape-image">
                <h3 className="heatmap-title">Global Threat Heatmap</h3>
                <img 
                  src="/assets/img/knowledge/weekly_cyber_2.png" 
                  alt="Global Threat Landscape Overview"
                  className="section-image"
                />
              </div>

              <div className="threat-insights">
                <div className="insight-card insight-red">
                  <div className="insight-icon">⚠️</div>
                  <h4 className="insight-title">High Alert Regions</h4>
                  <p className="insight-text">North America and Europe experiencing 40% increase in targeted attacks</p>
                </div>

                <div className="insight-card insight-yellow">
                  <div className="insight-icon">📈</div>
                  <h4 className="insight-title">Trending Threats</h4>
                  <p className="insight-text">AI-powered phishing campaigns up 65% compared to last week</p>
                </div>

                <div className="insight-card insight-blue">
                  <div className="insight-icon">🌐</div>
                  <h4 className="insight-title">Global Impact</h4>
                  <p className="insight-text">2.3M users affected across 47 countries in major data breaches</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Threat Intelligence Highlights */}
        <section className="threat-highlights">
          <div className="container-narrow">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Key Threat Intelligence Highlights</h2>
            
            <div className="highlights-grid">
              <div className="highlight-card highlight-red">
                <div className="highlight-header">
                  <h3 className="highlight-title">Critical Vulnerabilities</h3>
                </div>
                <p className="highlight-description">
                  Zero-day vulnerabilities reported in enterprise VPNs and browser extensions affecting millions of users globally.
                </p>
              </div>

              <div className="highlight-card highlight-orange">
                <div className="highlight-header">
                  <h3 className="highlight-title">New Malware Strains</h3>
                </div>
                <p className="highlight-description">
                  A new banking trojan variant 'FINRAT' observed in multiple geographies with advanced evasion techniques.
                </p>
              </div>

              <div className="highlight-card highlight-blue">
                <div className="highlight-header">
                  <h3 className="highlight-title">Cloud Exploits</h3>
                </div>
                <p className="highlight-description">
                  Attackers exploiting misconfigured Kubernetes clusters for cryptojacking operations across cloud providers.
                </p>
              </div>

              <div className="highlight-card highlight-purple">
                <div className="highlight-header">
                  <h3 className="highlight-title">Data Breaches</h3>
                </div>
                <p className="highlight-description">
                  Notable breach reported in a global e-commerce firm affecting 2.3M users with exposed payment data.
                </p>
              </div>

              <div className="highlight-card highlight-dark">
                <div className="highlight-header">
                  <h3 className="highlight-title">Emerging Ransomware</h3>
                </div>
                <p className="highlight-description">
                  LockBit and BlackCat groups targeting hybrid infrastructure with double extortion tactics.
                </p>
              </div>

              <div className="highlight-card highlight-teal">
                <div className="highlight-header">
                  <h3 className="highlight-title">AI-Powered Attacks</h3>
                </div>
                <p className="highlight-description">
                  Sophisticated AI-generated phishing campaigns targeting C-suite executives with deepfake voice technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sector-Specific Analysis */}
        <section className="sector-analysis">
          <div className="container-narrow">
            <h2 className="section-title">Sector-Specific Analysis</h2>
            
            <div className="sector-grid">
              <div className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon sector-icon-green">🏦</div>
                  <h3 className="sector-title">Financial Services</h3>
                </div>
                <p className="sector-description">
                  Spear-phishing emails impersonating fintech support channels increased by 30% this week.
                </p>
                <div className="sector-badge sector-badge-green">↑ 30% Increase</div>
              </div>

              <div className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon sector-icon-blue">💙</div>
                  <h3 className="sector-title">Healthcare</h3>
                </div>
                <p className="sector-description">
                  Ongoing campaigns targeting patient management portals with ransomware payloads.
                </p>
                <div className="sector-badge sector-badge-red">🔴 High Risk</div>
              </div>

              <div className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon sector-icon-orange">🏭</div>
                  <h3 className="sector-title">Manufacturing</h3>
                </div>
                <p className="sector-description">
                  Multiple supply chain intrusion attempts traced back to state-backed actors.
                </p>
                <div className="sector-badge sector-badge-orange">🚩 Nation-State</div>
              </div>

              <div className="sector-card">
                <div className="sector-header">
                  <div className="sector-icon sector-icon-purple">🏛️</div>
                  <h3 className="sector-title">Public Sector</h3>
                </div>
                <p className="sector-description">
                  Government portals experiencing credential-stuffing attacks via botnets.
                </p>
                <div className="sector-badge sector-badge-purple">🤖 Botnet Activity</div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Exploited Vulnerabilities */}
        <section className="vulnerabilities">
          <div className="container-narrow">
            <h2 className="section-title">Top Exploited Vulnerabilities (Week 28, 2024)</h2>
            
            <div className="vuln-table">
              <div className="vuln-row vuln-header">
                <div className="vuln-cell">CVE ID</div>
                <div className="vuln-cell">Description</div>
                <div className="vuln-cell">Severity</div>
                <div className="vuln-cell">Exploited In Wild</div>
              </div>

              <div className="vuln-row">
                <div className="vuln-cell">
                  <a href="#" className="cve-link">CVE-2024-33245</a>
                </div>
                <div className="vuln-cell">Fortinet SSL VPN Remote Code Execution</div>
                <div className="vuln-cell">
                  <span className="severity-badge severity-critical">
                    <span className="icon-circle critical-circle">⚠</span>
                    Critical
                  </span>
                </div>
                <div className="vuln-cell">
                  <span className="exploited-badge exploited-yes">
                    <span className="icon-circle yes-circle">✓</span>
                    Yes
                  </span>
                </div>
              </div>

              <div className="vuln-row">
                <div className="vuln-cell">
                  <a href="#" className="cve-link">CVE-2024-28489</a>
                </div>
                <div className="vuln-cell">Apache ActiveMQ Arbitrary Deserialization</div>
                <div className="vuln-cell">
                  <span className="severity-badge severity-high">
                    <span className="icon-circle high-circle">!</span>
                    High
                  </span>
                </div>
                <div className="vuln-cell">
                  <span className="exploited-badge exploited-yes">
                    <span className="icon-circle yes-circle">✓</span>
                    Yes
                  </span>
                </div>
              </div>

              <div className="vuln-row">
                <div className="vuln-cell">
                  <a href="#" className="cve-link">CVE-2023-4911</a>
                </div>
                <div className="vuln-cell">GLIBC ld.so Local Privilege Escalation</div>
                <div className="vuln-cell">
                  <span className="severity-badge severity-medium">
                    <span className="icon-circle medium-circle">-</span>
                    Medium
                  </span>
                </div>
                <div className="vuln-cell">
                  <span className="exploited-badge exploited-no">
                    <span className="icon-circle no-circle">✕</span>
                    No
                  </span>
                </div>
              </div>

              <div className="vuln-row">
                <div className="vuln-cell">
                  <a href="#" className="cve-link">CVE-2024-11907</a>
                </div>
                <div className="vuln-cell">VMware Cloud Director Access Control Bypass</div>
                <div className="vuln-cell">
                  <span className="severity-badge severity-high">
                    <span className="icon-circle high-circle">!</span>
                    High
                  </span>
                </div>
                <div className="vuln-cell">
                  <span className="exploited-badge exploited-yes">
                    <span className="icon-circle yes-circle">✓</span>
                    Yes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Actor Activity */}
        <section className="threat-actor">
          <div className="container-narrow">
            <div className="threat-actor-content">
              <div className="threat-actor-text">
                <h2 className="section-title section-title-left">Threat Actor Activity</h2>
                <p>
                  Our intelligence detected increased chatter among ransomware groups on dark web forums, 
                  specifically around new data extortion tactics. APT groups linked to Eastern Europe are 
                  focusing on targeting defense contractors and government entities through supply chain 
                  infiltration.
                </p>
              </div>

              <div className="dark-web-card">
                <div className="dark-web-header">
                  <span className="dark-web-icon">🕵️</span>
                  <h3 className="dark-web-title">Dark Web Monitoring</h3>
                </div>
                <div className="dark-web-metrics">
                  <div className="metric-row">
                    <span className="metric-label">Ransom Keywords</span>
                    <span className="metric-value metric-increase">+45%</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Zero-day Mentions</span>
                    <span className="metric-value metric-increase ">+23%</span>
                  </div>
                  <div className="metric-row">
                    <span className="metric-label">Proxy Services</span>
                    <span className="metric-value metric-increase">+12%</span>
                  </div>
                </div>
                <div className="dark-web-footer">Last updated: 2 hours ago</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skysecure's Advisory */}
        <section className="advisory">
          <div className="container-narrow">
            <h2 className="section-title">Skysecure's Advisory for This Week</h2>
            
            <div className="advisory-grid">
              <div className="advisory-item">
                <div className="advisory-icon advisory-icon-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="advisory-icon-svg">
                    <path d="M12 2L4 6V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="advisory-content">
                  <h3 className="advisory-title">Immediate Patching Required</h3>
                  <p className="advisory-description">
                    Patch high-severity vulnerabilities immediately, particularly in VPN and web application layers.
                  </p>
                </div>
              </div>

              <div className="advisory-item">
                <div className="advisory-icon advisory-icon-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="advisory-icon-svg">
                    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="advisory-content">
                  <h3 className="advisory-title">Phishing Detection Update</h3>
                  <p className="advisory-description">
                    Update phishing detection policies and train employees to identify AI-generated phishing attempts.
                  </p>
                </div>
              </div>

              <div className="advisory-item">
                <div className="advisory-icon advisory-icon-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="advisory-icon-svg">
                    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M12 11V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M10 18V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
                <div className="advisory-content">
                  <h3 className="advisory-title">Access Control Review</h3>
                  <p className="advisory-description">
                    Review IAM and MFA configurations to prevent unauthorized lateral movement.
                  </p>
                </div>
              </div>

              <div className="advisory-item">
                <div className="advisory-icon advisory-icon-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="advisory-icon-svg">
                    <circle cx="12" cy="5" r="2.5" fill="currentColor"/>
                    <path d="M10 7.5C10 7.22386 10.2239 7 10.5 7H13.5C13.7761 7 14 7.22386 14 7.5V8.5C14 8.77614 13.7761 9 13.5 9H12.5C12.2239 9 12 9.22386 12 9.5V18C12 18.5523 11.5523 19 11 19C10.4477 19 10 18.5523 10 18V7.5Z" fill="currentColor"/>
                    <circle cx="7.5" cy="6" r="2" fill="currentColor"/>
                    <path d="M6 8C6 7.44772 6.44772 7 7 7H8C8.55228 7 9 7.44772 9 8V8.5C9 9.05228 8.55228 9.5 8 9.5H7.5C6.94772 9.5 6.5 9.94772 6.5 10.5V17C6.5 17.5523 6.05228 18 5.5 18C4.94772 18 4.5 17.5523 4.5 17V8Z" fill="currentColor"/>
                    <circle cx="16.5" cy="6" r="2" fill="currentColor"/>
                    <path d="M15 8C15 7.44772 15.4477 7 16 7H17C17.5523 7 18 7.44772 18 8V8.5C18 9.05228 17.5523 9.5 17 9.5H16.5C15.9477 9.5 15.5 9.94772 15.5 10.5V17C15.5 17.5523 15.0523 18 14.5 18C13.9477 18 13.5 17.5523 13.5 17V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="advisory-content">
                  <h3 className="advisory-title">Network Monitoring</h3>
                  <p className="advisory-description">
                    Monitor network traffic for anomalous encryption patterns and outbound connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="quote-section">
          <div className="container-narrow">
            <blockquote className="quote-text">
              "The evolution of AI-driven phishing and multi-vector ransomware attacks 
              highlights a shift from opportunistic to precision-targeted campaigns. 
              Visibility, automation, and proactive threat hunting are no longer optional—
              they're essential."
            </blockquote>
            <div className="quote-author">
              <div className="author-namee">Skysecure Threat Intelligence Division</div>
              <div className="author-titlee">Skysecure Team</div>
            </div>
          </div>
        </section>

        {/* Weekly Summary */}
        <section className="weekly-summary">
          <div className="container-narrow">
            <h2 className="section-title">Weekly Summary</h2>
            <p className="summary-text">
              This week's trends underline the growing sophistication of cyberattacks and the importance of 
              continuous monitoring. Skysecure's adaptive defense ecosystem enables businesses to predict, 
              prevent, and neutralize threats faster transforming data into decisive action.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
