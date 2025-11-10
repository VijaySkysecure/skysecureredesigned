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
          <a href="/">Home</a>
          <span className="breadcrumb-separator">›</span>
          <a href="/#insights">Knowledge & Resources</a>
          <span className="breadcrumb-separator">›</span>
          <a href="/#insights">Skysecure Decode</a>
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
                  <span className="hero-date">📅 July 15, 2024</span>
                  <span className="hero-author">👤 Skysecure Threat Intelligence Team</span>
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
            <h2 className="section-title">Key Threat Intelligence Highlights</h2>
            
            <div className="highlights-grid">
              <div className="highlight-card highlight-red">
                <div className="highlight-header">
                  <div className="highlight-icon">⚠️</div>
                  <h3 className="highlight-title">Critical Vulnerabilities</h3>
                </div>
                <p className="highlight-description">
                  Zero-day vulnerabilities reported in enterprise VPNs and browser extensions affecting millions of users globally.
                </p>
              </div>

              <div className="highlight-card highlight-orange">
                <div className="highlight-header">
                  <div className="highlight-icon">🦠</div>
                  <h3 className="highlight-title">New Malware Strains</h3>
                </div>
                <p className="highlight-description">
                  A new banking trojan variant 'FINRAT' observed in multiple geographies with advanced evasion techniques.
                </p>
              </div>

              <div className="highlight-card highlight-blue">
                <div className="highlight-header">
                  <div className="highlight-icon">☁️</div>
                  <h3 className="highlight-title">Cloud Exploits</h3>
                </div>
                <p className="highlight-description">
                  Attackers exploiting misconfigured Kubernetes clusters for cryptojacking operations across cloud providers.
                </p>
              </div>

              <div className="highlight-card highlight-purple">
                <div className="highlight-header">
                  <div className="highlight-icon">👍</div>
                  <h3 className="highlight-title">Data Breaches</h3>
                </div>
                <p className="highlight-description">
                  Notable breach reported in a global e-commerce firm affecting 2.3M users with exposed payment data.
                </p>
              </div>

              <div className="highlight-card highlight-dark">
                <div className="highlight-header">
                  <div className="highlight-icon">☠️</div>
                  <h3 className="highlight-title">Emerging Ransomware</h3>
                </div>
                <p className="highlight-description">
                  LockBit and BlackCat groups targeting hybrid infrastructure with double extortion tactics.
                </p>
              </div>

              <div className="highlight-card highlight-teal">
                <div className="highlight-header">
                  <div className="highlight-icon">💼</div>
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
                <div className="advisory-icon advisory-icon-blue">🛡️</div>
                <div className="advisory-content">
                  <h3 className="advisory-title">Immediate Patching Required</h3>
                  <p className="advisory-description">
                    Patch high-severity vulnerabilities immediately, particularly in VPN and web application layers.
                  </p>
                </div>
              </div>

              <div className="advisory-item">
                <div className="advisory-icon advisory-icon-blue">📧</div>
                <div className="advisory-content">
                  <h3 className="advisory-title">Phishing Detection Update</h3>
                  <p className="advisory-description">
                    Update phishing detection policies and train employees to identify AI-generated phishing attempts.
                  </p>
                </div>
              </div>

              <div className="advisory-item">
                <div className="advisory-icon advisory-icon-blue">🔑</div>
                <div className="advisory-content">
                  <h3 className="advisory-title">Access Control Review</h3>
                  <p className="advisory-description">
                    Review IAM and MFA configurations to prevent unauthorized lateral movement.
                  </p>
                </div>
              </div>

              <div className="advisory-item">
                <div className="advisory-icon advisory-icon-blue">👥</div>
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
            <div className="quote-icon">💬</div>
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
            <button className="contact-btn">Contact Skysecure Threat Intelligence Team</button>
          </div>
        </section>

        {/* More from Skysecure Decode */}
        <section className="more-content">
          <div className="container-narrow">
            <h2 className="section-title section-title-left">More from Skysecure Decode</h2>
            
            <div className="more-grid">
              <div className="more-card">
                <img src="/assets/img/knowledge/weekly_cyber_3.png" alt="Weekly Cyber 3" className="more-image" />
                <div className="more-content-inner">
                  <div className="more-badge">Daily Brief</div>
                  <h3 className="more-title">Daily Threat Brief: Ransomware Evolution</h3>
                  <p className="more-description">
                    Comprehensive analysis of emerging ransomware tactics and defense strategies.
                  </p>
                  <a href="#" className="more-link">Read More →</a>
                </div>
              </div>

              <div className="more-card">
                <img src="/assets/img/knowledge/weekly_cyber_4.png" alt="Weekly Cyber 4" className="more-image" />
                <div className="more-content-inner">
                  <div className="more-badge">Annual Report</div>
                  <h3 className="more-title">AI-Driven Threat Detection: 2024 Report</h3>
                  <p className="more-description">
                    How artificial intelligence is revolutionizing cybersecurity defense mechanisms.
                  </p>
                  <a href="#" className="more-link">Read More →</a>
                </div>
              </div>

              <div className="more-card">
                <img src="/assets/img/knowledge/weekly_cyber_5.png" alt="Weekly Cyber 5" className="more-image" />
                <div className="more-content-inner">
                  <div className="more-badge">Best Practices</div>
                  <h3 className="more-title">Zero Trust in Hybrid Cloud Environments</h3>
                  <p className="more-description">
                    Implementation guide for zero trust architecture in modern cloud infrastructure.
                  </p>
                  <a href="#" className="more-link">Read More →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
