import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const RANSOMWARE_VARIANTS = [
  {
    icon: 'knowledge/icon-lockbit.png',
    title: 'LockBit 3.0',
    description: 'Continues to dominate with double extortion tactics and data-leak threats.',
    risk: 'High Risk',
    riskColor: '#EF4444',
    dots: '#EF4444'
  },
  {
    icon: 'knowledge/icon-blackcat.png',
    title: 'BlackCat (ALPHV)',
    description: 'Written in Rust, enabling cross-platform attacks with improved evasion.',
    risk: 'Critical',
    riskColor: '#3B82F6',
    dots: '#3B82F6'
  },
  {
    icon: 'knowledge/icon-clop.png',
    title: 'Clop',
    description: 'Exploits file transfer vulnerabilities for mass exploitation and data theft.',
    risk: 'Medium',
    riskColor: '#F59E0B',
    dots: '#F59E0B'
  },
  {
    icon: 'knowledge/icon-akira.png',
    title: 'Akira',
    description: 'Targets SMBs and educational institutions with low detection footprints.',
    risk: 'Emerging',
    riskColor: '#A855F7',
    dots: '#A855F7'
  },
  {
    icon: 'knowledge/icon-revil.png',
    title: 'REvil/Sodinokibi',
    description: 'Resurging variant focusing on supply chain attacks and MSP infiltration.',
    risk: 'High Risk',
    riskColor: '#F97316',
    dots: '#F97316'
  },
  {
    icon: 'knowledge/icon-new-entrants.png',
    title: 'New Entrants',
    description: 'Emerging ransomware groups are now leveraging AI-assisted payload delivery.',
    risk: 'Watch List',
    riskColor: '#22C55E',
    dots: '#22C55E'
  }
];

const ATTACK_VECTORS = [
  {
    icon: 'knowledge/icon-phishing.png',
    title: 'Phishing Campaigns',
    description: 'Sophisticated spear-phishing attacks targeting executives and IT administrators with malicious attachments and credential harvesting.',
    color: '#EF4444'
  },
  {
    icon: 'knowledge/icon-zero-day.png',
    title: 'Zero-Day Exploits',
    description: 'Exploitation of previously unknown vulnerabilities in popular software and operating systems before patches are available.',
    color: '#3B82F6'
  },
  {
    icon: 'knowledge/icon-rdp.png',
    title: 'RDP Compromise',
    description: 'Brute force attacks and credential stuffing against exposed Remote Desktop Protocol services with weak authentication.',
    color: '#F59E0B'
  },
  {
    icon: 'knowledge/icon-lateral-movement.png',
    title: 'Lateral Movement',
    description: 'Advanced techniques for moving through networks undetected, exploiting Active Directory vulnerabilities and trust relationships.',
    color: '#8B5CF6'
  },
  {
    icon: 'knowledge/icon-cloud-sync.png',
    title: 'Cloud Synchronization',
    description: 'Leveraging cloud storage synchronization to spread encryption across multiple devices and backup systems simultaneously.',
    color: '#10B981'
  },
  {
    icon: 'knowledge/icon-supply-chain.png',
    title: 'Supply Chain Attacks',
    description: 'Compromising trusted software vendors and service providers to infiltrate multiple organizations through legitimate update mechanisms.',
    color: '#F97316'
  }
];

const DEFENSE_STRATEGIES = [
  {
    icon: 'knowledge/icon-zero-trust.png',
    title: 'Zero Trust Architecture',
    description: 'Implement Zero Trust principles to limit lateral movement and verify every access request.'
  },
  {
    icon: 'knowledge/icon-monitoring.png',
    title: 'Continuous Monitoring',
    description: 'Deploy AI-powered SIEM solutions like Microsoft Sentinel for real-time threat detection.'
  },
  {
    icon: 'knowledge/icon-access-controls.png',
    title: 'Access Controls',
    description: 'Enforce least privilege access and multi-factor authentication across all endpoints.'
  },
  {
    icon: 'knowledge/icon-backup.png',
    title: 'Backup Strategy',
    description: 'Maintain immutable backups and conduct regular ransomware simulation exercises.'
  }
];

const RELATED_ARTICLES = [
  {
    image: 'knowledge/ai-threat-detection-dashboard.png',
    tag: 'AI SECURITY',
    tagColor: '#007BFF',
    title: 'AI-Powered Threat Detection: 2024 Report',
    date: 'June 28, 2024',
    description: 'Comprehensive analysis of machine learning applications in modern cybersecurity operations.'
  },
  {
    image: 'knowledge/zero-trust-cloud.png',
    tag: 'CLOUD SECURITY',
    tagColor: '#28A745',
    title: 'Zero Trust in Hybrid Cloud Environments',
    date: 'June 15, 2024',
    description: 'Best practices for implementing Zero Trust security models in hybrid cloud infrastructures.'
  },
  {
    image: 'knowledge/future-cloud-security.png',
    tag: 'FUTURE TECH',
    tagColor: '#6F42C1',
    title: 'The Future of Cloud Security',
    date: 'May 30, 2024',
    description: 'Exploring emerging technologies and trends shaping the next generation of cloud security.'
  }
];

export function RansomwareEvolution(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb Navigation */}
        <section style={{ 
          backgroundColor: '#FFFFFF',
          padding: '20px 0',
          borderBottom: '1px solid #E5E7EB'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748B' }}>
              <a href="/" style={{ color: '#1F2937', textDecoration: 'none' }}>Home</a>
              <span>›</span>
              <a href="/#insights" style={{ color: '#1F2937', textDecoration: 'none' }}>Knowledge & Resources</a>
              <span>›</span>
              <a href="/#insights" style={{ color: '#1F2937', textDecoration: 'none' }}>Skysecure Decode</a>
              <span>›</span>
              <span style={{ color: '#1F2937' }}>Daily Threat Brief: Ransomware Evolution</span>
            </nav>
          </div>
        </section>

        {/* Blog Hero Section */}
        <section className="blog-hero" style={{ 
          background: 'linear-gradient(135deg, #111827 0%, #1E3A8A 35.36%, #1F2937 70.71%)',
          padding: '120px 0',
          color: '#FFFFFF',
          textAlign: 'center',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
              {/* Left Content */}
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ 
                  display: 'inline-block',
                  backgroundColor: 'rgba(10, 78, 255, 1)',
                  color: '#FFFFFF',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '24px'
                }}>
                  Skysecure Decode
                </div>
                <h1 style={{ 
                  fontSize: '48px', 
                  fontWeight: '700', 
                  margin: '0 0 24px 0',
                  lineHeight: '1.2',
                  color: 'rgba(255, 255, 255, 1)'
                }}>
                  Daily Threat Brief:<br />Ransomware Evolution
                </h1>
                <div style={{ 
                  fontSize: '16px', 
                  marginBottom: '32px',
                  opacity: 0.9,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span>📅</span>
                  <span>July 10, 2024</span>
                  <span>•</span>
                  <span>👤</span>
                  <span>Skysecure Threat Intelligence Team</span>
                </div>
                <button style={{
                  backgroundColor: '#FFFFFF',
                  color: 'rgba(27, 27, 47, 1)',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'Inter'
                }}>
                  <ImagePlaceholder
                    label="Download Icon"
                    imageName="knowledge/icon-download-black.png"
                    width={16}
                    height={16}
                    borderRadius={0}
                  />
                  <span>Download Report</span>
                </button>
              </div>
              {/* Right Visual */}
              <div style={{ flex: 1, textAlign: 'center' }}>
                <ImagePlaceholder
                  label="Ransomware Skull Hero"
                  imageName="knowledge/ransomware-skull-hero.png"
                  width={584}
                  height={320}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Executive Summary Section */}
        <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ marginLeft: '0px' }}>
            <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Executive Summary</h2>
            <p className="blog-section-text" style={{ textAlign: 'left', marginBottom: '42px', marginLeft: '130px' }}>
              Ransomware continues to evolve as one of the most significant cyber threats facing organizations worldwide. 
              The landscape has shifted dramatically in 2024, with new variants emerging, attack vectors diversifying, 
              and artificial intelligence playing an increasingly prominent role in both offensive and defensive strategies. 
              Skysecure Decode analyzes recent trends, attack methodologies, and adaptive techniques, highlighting new variants, 
              targets, and defensive strategies through our threat intelligence team.
            </p>
            <div style={{
              backgroundColor: '#F8F9FB',
              borderLeft: '4px solid #EF4444',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#EF4444',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '16px' }}>!</span>
              </div>
              <div>
                <div style={{ 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  color: '#1F2937',
                  marginBottom: '8px'
                }}>
                  Critical Alert
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#374151',
                  lineHeight: '1.5'
                }}>
                  Ransomware attacks have increased by 41% in Q2 2024, with critical infrastructure being the primary target.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Evolving Ransomware Landscape Section */}
        <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            {/* Left Content */}
            <div style={{ flex: 1 }}>
              <h2 className="blog-section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
                The Evolving Ransomware Landscape
              </h2>
              <p className="blog-section-text" style={{ textAlign: 'left', marginBottom: '32px' }}>
              The ransomware ecosystem has matured significantly over the past year. Attackers are shifting from broad, opportunistic campaigns to highly targeted strikes against critical infrastructure, healthcare, manufacturing, and financial sectors. Ransomware-as-a-Service (RaaS) has made sophisticated attack tools accessible to even low- skilled threat actors, expanding the reach and impact of these operations.
              </p>
              <div style={{ display: 'flex', gap: '90px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '30px', 
                    fontWeight: '700', 
                    color: 'rgba(231, 76, 60, 1)',
                    marginBottom: '8px'
                  }}>
                    $30B
                  </div>
                  <div style={{ fontSize: '14px', color: '#64748B' }}>
                    Estimated Global Damages 2024
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '30px', 
                    fontWeight: '700', 
                    color: 'rgba(231, 76, 60, 1)',
                    marginBottom: '8px'
                  }}>
                    41%
                  </div>
                  <div style={{ fontSize: '14px', color: '#64748B' }}>
                    Increase in Q2 2024
                  </div>
                </div>
              </div>
            </div>
            {/* Right Visual */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <ImagePlaceholder
                label="Ransomware Timeline"
                imageName="knowledge/ransomware-timeline.png"
                width={580}
                height={320}
                borderRadius={0}
              />
            </div>
          </div>
        </section>

        {/* Notable Ransomware Variants Section */}
        <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
          <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Notable Ransomware Variants in 2024</h2>
          <p className="blog-section-text" style={{ textAlign: 'center', marginBottom: '48px', marginLeft: '120px', marginTop: '-20px' }}>
            Our intelligence team has identified several prominent ransomware families that pose significant threats to organizations worldwide.
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {RANSOMWARE_VARIANTS.map((variant, index) => (
              <div key={index} style={{
                backgroundColor: '#1F2937',
                padding: '24px',
                borderRadius: '12px',
                color: '#FFFFFF',
                position: 'relative',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '16px', 
                  right: '16px',
                  width: '30px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <ImagePlaceholder
                    label={variant.title}
                    imageName={variant.icon}
                    width={28}
                    height={38}
                    borderRadius={0}
                  />
                </div>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: '600', 
                  margin: '0 0 24px 0',
                  color: 'rgba(255, 255, 255, 1)'
                }}>
                  {variant.title}
                </h3>
                <p style={{ 
                  fontSize: '14px', 
                  opacity: 0.9, 
                  marginBottom: '0px',
                  lineHeight: '1.5',
                  color: 'rgba(255, 255, 255, 1)'
                }}>
                  {variant.description}
                </p>
                <div style={{
                  color: variant.riskColor,
                  padding: '4px 12px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '-10px',
                  marginLeft: '-10px',
                  marginTop: '30px'
                }}>
                  {variant.risk}
                </div>
                <div style={{ 
                  position: 'absolute', 
                  bottom: '24px', 
                  right: '16px',
                  display: 'flex',
                  gap: '4px'
                }}>
                  {[1, 2, 3].map((dot) => (
                    <div key={dot} style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: variant.dots,
                      borderRadius: '50%'
                    }}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Attack Vectors and Tactics Section */}
        <section className="blog-section" style={{ 
          backgroundColor: '#F9FAFB',
          padding: '80px 0',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Attack Vectors and Tactics</h2>
            <p className="blog-section-text" style={{ textAlign: 'center', marginBottom: '48px', marginLeft: '120px', marginTop: '-20px' }}>
              Modern ransomware campaigns increasingly exploit trusted channels and legitimate tools to evade detection. Attackers are combining social engineering, supply chain infiltration, and credential theft to gain access to systems undetected.
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '24px',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {ATTACK_VECTORS.map((vector, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  padding: '24px',
                  borderRadius: '12px',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #E5E7EB'
                }}>
                  <div style={{ 
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <ImagePlaceholder
                      label={vector.title}
                      imageName={vector.icon}
                      width={48}
                      height={48}
                      borderRadius={0}
                    />
                  </div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: '#1F2937',
                    marginBottom: '8px'
                  }}>
                    {vector.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#64748B',
                    lineHeight: '1.5'
                  }}>
                    {vector.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Role of AI Section */}
        <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            {/* Left Content */}
            <div style={{ flex: 1 }}>
              <h2 className="blog-section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
                The Role of AI in Ransomware Evolution
              </h2>
              <p className="blog-section-text" style={{ textAlign: 'left', marginBottom: '32px' }}>
              AI is transforming both sides of cybersecurity. Threat actors are deploying AI-based automation to scale operations, creating polymorphic malware that adapts in real time to bypass defenses. Conversely, defenders are leveraging AI for early anomaly detection and automated response. This arms race underscores the growing importance of adaptive, machine-learning-driven SOCs.
              </p>
              <div style={{
                backgroundColor: 'rgba(27, 27, 47, 1)',
                padding: '24px',
                borderRadius: '12px',
                color: '#FFFFFF'
              }}>
                <p style={{ 
                  fontSize: '18px', 
                  fontStyle: 'normal',
                  marginBottom: '16px',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 1)'
                }}>
                  AI is no longer just a defensive tool, it's becoming part of the attacker's playbook.
                </p>
                <div style={{ fontSize: '14px', opacity: 0.8 }}>
                  - Skysecure Threat Research Team
                </div>
              </div>
            </div>
            {/* Right Visual */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <ImagePlaceholder
                label="AI Figures Graphic"
                imageName="knowledge/ai-figures-graphic.png"
                width={580}
                height={320}
                borderRadius={0}
              />
            </div>
          </div>
        </section>

        {/* Defense Strategies Section */}
        <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
          <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Defense Strategies and Mitigation</h2>
          <p className="blog-section-text" style={{ textAlign: 'center', marginBottom: '48px', marginLeft: '120px', marginTop: '-20px' }}>
            Effective ransomware defense requires more than tools, it demands continuous visibility, rapid response automation, and an educated workforce aware of evolving tactics.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
            {/* Left Content */}
            <div style={{ flex: 1 }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '24px'
              }}>
                {DEFENSE_STRATEGIES.map((strategy, index) => (
                  <div key={index} style={{
                    backgroundColor: '#FFFFFF',
                    padding: '24px',
                    borderRadius: '12px',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #E5E7EB',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{ 
                      width: '45px',
                      height: '58px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <ImagePlaceholder
                        label={strategy.title}
                        imageName={strategy.icon}
                        width={45}
                        height={58}
                        borderRadius={0}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#1F2937',
                        marginBottom: '8px',
                        marginTop: '0'
                      }}>
                        {strategy.title}
                      </h3>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#64748B',
                        lineHeight: '1.5',
                        marginBottom: '0'
                      }}>
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right Visual */}
            <div style={{ flex: 1, textAlign: 'center' }}>
              <ImagePlaceholder
                label="Cybersecurity Shield"
                imageName="knowledge/cybersecurity-shield.png"
                width={580}
                height={580}
                borderRadius={0}
              />
            </div>
          </div>
        </section>

        {/* Global Impact Section */}
        <section className="blog-section" style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
          <h2 className="blog-section-title" style={{ textAlign: 'center' }}>Global Impact and Forecast</h2>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '180px',
            marginBottom: '48px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#EF4444',
                marginBottom: '8px'
              }}>
                $30B
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '4px' }}>
                Global Damages 2024
              </div>
              <div style={{ fontSize: '14px', color: '#64748B' }}>
              Estimated financial impact across all industries
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#3B82F6',
                marginBottom: '8px'
              }}>
                2025+
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '4px' }}>
                Continued Threat
              </div>
              <div style={{ fontSize: '14px', color: '#64748B' }}>
              Rise in ransomware incidents globally
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#10B981',
                marginBottom: '8px'
              }}>
                41%
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', marginBottom: '4px' }}>
                Q2 2024 Increase
              </div>
              <div style={{ fontSize: '14px', color: '#64748B' }}>
              Rise in ransomware incidents globally
              </div>
            </div>
          </div>
          <p className="blog-section-text" style={{ textAlign: 'center', marginLeft: '120px' }}>
            The financial and operational impact of ransomware continues to escalate, with organizations 
            facing not only direct ransom payments but also recovery costs, regulatory fines, and reputational damage. 
            The threat landscape shows no signs of slowing down, requiring continuous adaptation of defense strategies.
          </p>
        </section>

        {/* Skysecure's Perspective Section */}
        <section className="blog-section" style={{ 
          backgroundColor: 'rgba(27, 27, 47, 1)',
          color: '#FFFFFF',
          padding: '80px 0',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
              {/* Left Content */}
              <div style={{ flex: 1 }}>
                <h2 className="blog-section-title" style={{ 
                  textAlign: 'left', 
                  color: '#FFFFFF',
                  marginBottom: '24px'
                }}>
                  Skysecure's Perspective
                </h2>
                <p className="blog-section-text" style={{ 
                  textAlign: 'left', 
                  color: '#FFFFFF',
                  marginBottom: '32px',
                  opacity: 0.9
                }}>
                  Skysecure's continuous intelligence network monitors ransomware campaigns in real time across industries. By integrating threat data into automated SOC workflows, we provide customers with actionable insights to prevent, detect, and recover from ransomware attacks faster. Our adaptive response frameworks empower organizations to outpace attackers, transforming threat intelligence into strategic resilience.
                </p>
                <button style={{
                  backgroundColor: 'rgba(10, 78, 255, 1)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: 'Inter',
                }}>
                  Contact Threat Intelligence Team
                </button>
              </div>
              {/* Right Visual */}
              <div style={{ flex: 1, textAlign: 'center' }}>
                <ImagePlaceholder
                  label="SOC Operations"
                  imageName="knowledge/soc-operations.png"
                  width={580}
                  height={320}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* More from Skysecure Decode Section */}
        <section className="blog-section" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '80px 20px', 
          marginTop: '60px',
          marginLeft: '160px'
        }}>
          <h2 className="blog-section-title" style={{ 
            textAlign: 'center', 
            color: 'rgba(17, 24, 39, 1)',
            marginBottom: '16px'
          }}>
            More from Skysecure Decode
          </h2>
          <p style={{ 
            textAlign: 'center', 
            color: 'rgba(75, 85, 99, 1)',
            fontSize: '16px',
            marginBottom: '48px'
          }}>
            Stay informed with our latest threat intelligence and security insights
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '44px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
              {RELATED_ARTICLES.map((article, index) => (
                <div key={index} style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #E5E7EB',
                  overflow: 'hidden'
                }}>
                  <ImagePlaceholder
                    label={article.title}
                    imageName={article.image}
                    width={350}
                    height={200}
                    borderRadius={0}
                  />
                  <div style={{ padding: '20px' }}>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <div style={{
                        backgroundColor: article.tagColor,
                        color: '#FFFFFF',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '12px',
                        fontWeight: '600',
                        display: 'inline-block'
                      }}>
                        {article.tag}
                      </div>
                      <div style={{ 
                        fontSize: '14px', 
                        color: '#64748B'
                      }}>
                        {article.date}
                      </div>
                    </div>
                    <h3 style={{ 
                      fontSize: '18px', 
                      fontWeight: '600', 
                      color: '#1F2937',
                      marginBottom: '8px',
                      lineHeight: '1.4'
                    }}>
                      {article.title}
                    </h3>
                    <p style={{ 
                      fontSize: '14px', 
                      color: '#64748B',
                      lineHeight: '1.5',
                      marginBottom: '16px'
                    }}>
                      {article.description}
                    </p>
                    <a href="#" style={{
                      color: '#007BFF',
                      fontSize: '14px',
                      fontWeight: '600',
                      textDecoration: 'none'
                    }}>
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
