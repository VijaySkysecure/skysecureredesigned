import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CORE_VALUES = [
  {
    icon: 'icon-shield',
    title: 'Trust & Security',
    description: 'We prioritize trust in every interaction and ensure the highest standards of security in our marketplace.'
  },
  {
    icon: 'icon-integrity',
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty in all our business practices and relationships.'
  },
  {
    icon: 'icon-innovation',
    title: 'Innovation',
    description: 'We continuously seek new ways to improve our platform and the procurement experience.'
  },
  {
    icon: 'icon-customer',
    title: 'Customer Focus',
    description: 'We put our customers at the center of everything we do, ensuring their needs drive our decisions.'
  }
];

const STATS = [
  {
    number: '500+',
    title: 'Verified Vendors',
    description: 'Thoroughly vetted solution providers on our platform'
  },
  {
    number: '10,000+',
    title: 'Products',
    description: 'technology solutions available across multiple categories'
  },
  {
    number: '5,000+',
    title: 'Enterprise Clients',
    description: 'Organizations that trust Skysecure for technology procurement'
  },
  {
    number: '98%',
    title: 'Satisfaction Rate',
    description: 'Customer satisfaction based on post- purchase surveys'
  }
];

const JOURNEY_TIMELINE = [
  {
    year: '2021 (Dec)',
    title: 'Established with a clear mission',
    description: 'In December 2021, SkySecure was established by cybersecurity experts focusing on specialist consulting for BFSI and infrastructure clients. Simultaneously, it completed incorporation and launched full-time operations in India, setting up compliance and local teams to drive growth.',
    side: 'left',
    icon: 'about/icon-timeline-2021.png'
  },
  {
    year: '2022 (Jul-Nov)',
    title: 'Formal Incorporation & Enterprise Delivery',
    description: 'SkySecure formally incorporated, delivering comprehensive cybersecurity programs for major Indian enterprises.we earned Microsoft Security Specialization and Gold Partner status, conducted the SMC Custom Security Assessment Workshop, and expanded operations to Singapore, marking significant growth and technical excellence.',
    side: 'right',
    icon: 'about/icon-timeline-2022.png'
  },
  {
    year: '2023 (Jul)',
    title: 'Strategic Partnerships & Marketplace Expansion',
    description: 'SkySecure earned Microsoft\'s Managed Partner designation and CSI (Cloud Solution Implementer) status, accelerating joint security sales. At the same time, we launched an AI-powered solution-matching engine and expanded our B2B marketplace, driving $14M in Microsoft security revenue across 19 CSI engagements.',
    side: 'left',
    icon: 'about/icon-timeline-2023.png'
  },
  {
    year: '2024 (Jan)',
    title: 'Scaling Across Cloud, AI, and Global Markets',
    description: 'SkySecure achieved Fast Track Ready partner status, positioning us for accelerated growth. With this strong foundation, we are now aspiring to expand our footprint into the Middle East. This strategic move aims to broaden our market reach and deliver advanced cybersecurity solutions across the region.',
    side: 'right',
    icon: 'about/icon-timeline-2024.png'
  },
  {
    year: '2025 (Mar)',
    title: 'SkySecure\'s Fast-Track Journey to $100M',
    description: 'Now a Fast-Track Ready partner, SkySecure is expanding across Cloud, Infrastructure, AI, and Data verticals, with a focus on scaling Mid-Market and SMC accounts to achieve a billed revenue target of $100M. Our roadmap includes launching operations in the Middle East and broadening our global marketplace ecosystem with verified vendors.',
    side: 'left',
    icon: 'about/icon-timeline-2025.png'
  }
];

const LEADERSHIP_TEAM = [
  {
    name: 'Suresh Kumar',
    title: 'Co-Founder & Chief Executive Officer',
    company: 'EX-MICROSOFT',
    image: 'about/suresh-kumar.png'
  },
  {
    name: 'Nithin Ramegowda',
    title: 'Co-Founder & Chief of Business Strategy',
    company: 'EX-MICROSOFT',
    image: 'about/nithin-ramegowda.png'
  }
];

const TEAM_MEMBERS = [
  {
    name: 'Agniputhran N M',
    title: 'President & Chief Business Officer',
    company: 'EX-MICROSOFT',
    image: 'about/agniputhran-nm.png'
  },
  {
    name: 'Suresh Kumar',
    title: 'Co-Founder & Chief Executive Officer',
    company: 'EX-MICROSOFT',
    image: 'about/suresh-kumar.png'
  },
  {
    name: 'Nithin Ramegowda',
    title: 'Co-Founder & Chief of Business Strategy',
    company: 'EX-MICROSOFT',
    image: 'about/nithin-ramegowda.png'
  }
];

const GLOBAL_OFFICES = [
  {
    location: 'Bangalore(HQ), India'
  },
  {
    location: 'Deira, UAE'
  },
  {
    location: 'Cecil Street, Singapore'
  }
];

export function About(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
              {/* Left Content */}
              <div style={{ flex: 1, maxWidth: '720px' }}>
                <h1 style={{ 
                  fontSize: '44px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: '0 0 24px 0',
                  lineHeight: '1.2'
                }}>
                  About Skysecure
                </h1>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#64748B', 
                  lineHeight: '1.6', 
                  margin: '0 0 24px 0'
                }}>
                  Founded in 2019 as a specialist cyber-security solutions partner, Skysecure has evolved into a full-stack technology powerhouse. Today we combine deep expertise across cyber, Cloud & Infrastructure, AI, and Data with a curated marketplace that connects enterprise buyers to rigorously vetted vendors.
                </p>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#64748B', 
                  lineHeight: '1.6', 
                  margin: '0'
                }}>
                  Our mission is simple: remove complexity from IT procurement and deployment. From risk assessments to AI-driven analytics and seamless infrastructure roll-outs, we give organizations a single, trusted platform to discover, compare, and acquire the right solutions, fast and with total confidence.
                </p>
              </div>
              {/* Right Visual */}
              <div style={{ flex: 1, textAlign: 'center', maxWidth: '480px' }}>
                <ImagePlaceholder
                  label="About Skysecure Visual"
                  imageName="about/about-hero-visual.png"
                  width={480}
                  height={480}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#F9FAFB' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '44px', 
                fontWeight: '700', 
                color: '#1F2937', 
                margin: '0 0 16px 0'
              }}>
                Our Mission & Vision
              </h2>
              <p style={{ 
                fontSize: '20px', 
                color: '#64748B', 
                margin: '0'
              }}>
                Guiding principles that drive everything we do at SkySecure
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
              {/* Mission */}
              <div style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '40px', 
                borderRadius: '12px', 
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '24px'
                }}>
                  <ImagePlaceholder
                    label="Mission Icon"
                    imageName="about/icon-mission.png"
                    width={64}
                    height={64}
                    borderRadius={0}
                  />
                </div>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: '600', 
                  color: '#1F2937', 
                  margin: '0 0 16px 0'
                }}>
                  Our Mission
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#64748B', 
                  lineHeight: '1.6', 
                  margin: '0 0 24px 0'
                }}>
                  To create a secure and transparent marketplace that simplifies the procurement of technology solutions for businesses of all sizes. We aim to bridge the gap between technology vendors and enterprise buyers by providing a platform that offers verified products, competitive pricing, and expert guidance.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ 
                      width: '14px', 
                      height: '14px', 
                      backgroundColor: '#10B981', 
                      borderRadius: '50%',
                      flexShrink: 0
                    }}></div>
                    <span style={{ fontSize: '16px', color: '#64748B' }}>Simplify procurement for enterprises</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ 
                      width: '14px', 
                      height: '14px', 
                      backgroundColor: '#10B981', 
                      borderRadius: '50%',
                      flexShrink: 0
                    }}></div>
                    <span style={{ fontSize: '16px', color: '#64748B' }}>Ensure product authenticity and quality</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '14px', 
                      height: '14px', 
                      backgroundColor: '#10B981', 
                      borderRadius: '50%',
                      flexShrink: 0
                    }}></div>
                    <span style={{ fontSize: '16px', color: '#64748B' }}>Connect buyers with trusted technology vendors</span>
                  </li>
                </ul>
              </div>

              {/* Vision */}
              <div style={{ 
                backgroundColor: '#FFFFFF', 
                padding: '40px', 
                borderRadius: '12px', 
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '24px'
                }}>
                  <ImagePlaceholder
                    label="Vision Icon"
                    imageName="about/icon-vision.png"
                    width={64}
                    height={64}
                    borderRadius={0}
                  />
                </div>
                <h3 style={{ 
                  fontSize: '24px', 
                  fontWeight: '600', 
                  color: '#1F2937', 
                  margin: '0 0 16px 0'
                }}>
                  Our Vision
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#64748B', 
                  lineHeight: '1.6', 
                  margin: '0 0 24px 0'
                }}>
                  To become the world's leading marketplace for technology solutions, where every business can find the perfect technology stack for business needs. We envision a future where technology procurement is streamlined, transparent, and accessible, enabling organizations to stay ahead of evolving threats.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ 
                      width: '14px', 
                      height: '14px', 
                      backgroundColor: '#10B981', 
                      borderRadius: '50%',
                      flexShrink: 0
                    }}></div>
                    <span style={{ fontSize: '16px', color: '#64748B' }}>Global leader in technology distribution</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ 
                      width: '14px', 
                      height: '14px', 
                      backgroundColor: '#10B981', 
                      borderRadius: '50%',
                      flexShrink: 0
                    }}></div>
                    <span style={{ fontSize: '16px', color: '#64748B' }}>Democratize access to enterprise-grade solutions</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '14px', 
                      height: '14px', 
                      backgroundColor: '#10B981', 
                      borderRadius: '50%',
                      flexShrink: 0
                    }}></div>
                    <span style={{ fontSize: '16px', color: '#64748B' }}>Foster innovation in the technology industry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '44px', 
                fontWeight: '700', 
                color: '#1F2937', 
                margin: '0 0 16px 0'
              }}>
                Our Core Values
              </h2>
              <p style={{ 
                fontSize: '20px', 
                color: '#64748B', 
                margin: '0'
              }}>
                The principles that guide our decisions and define our company culture
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {CORE_VALUES.map((value, index) => (
                <div key={index} style={{ 
                  backgroundColor: '#F9FAFB', 
                  padding: '32px', 
                  borderRadius: '12px', 
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px',  
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 24px auto'
                  }}>
                    <ImagePlaceholder
                      label={value.title}
                      imageName={`about/${value.icon}.png`}
                      width={48}
                      height={48}
                      borderRadius={0}
                    />
                  </div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#1F2937', 
                    margin: '0 0 12px 0'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#64748B', 
                    lineHeight: '1.5', 
                    margin: '0'
                  }}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '80px 0', backgroundColor: 'rgba(14, 81, 253, 1)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '44px', 
                fontWeight: '700', 
                color: '#FFFFFF', 
                margin: '0 0 16px 0'
              }}>
                Skysecure by the Numbers
              </h2>
              <p style={{ 
                fontSize: '20px', 
                color: '#E5E7EB', 
                margin: '0'
              }}>
                Our impact on the technology marketplace since our founding
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
              {STATS.map((stat, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: '48px', 
                    fontWeight: '700', 
                    color: '#FFFFFF', 
                    margin: '0 0 8px 0'
                  }}>
                    {stat.number}
                  </div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#FFFFFF', 
                    margin: '0 0 8px 0'
                  }}>
                    {stat.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#E5E7EB', 
                    lineHeight: '1.5', 
                    margin: '0'
                  }}>
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '44px', 
                fontWeight: '700', 
                color: '#1F2937', 
                margin: '0 0 16px 0'
              }}>
                Our Journey
              </h2>
              <p style={{ 
                fontSize: '20px', 
                color: '#64748B', 
                margin: '0'
              }}>
                From Cybersecurity Founders to Full-Stack Technology Scale
              </p>
            </div>
            
            <div style={{ position: 'relative' }}>
              {/* Timeline Line */}
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                top: '0', 
                bottom: '0', 
                width: '2px', 
                backgroundColor: '#E5E7EB',
                transform: 'translateX(-50%)'
              }}></div>
              
              {JOURNEY_TIMELINE.map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '60px',
                  flexDirection: item.side === 'left' ? 'row' : 'row-reverse'
                }}>
                  <div style={{ 
                    flex: 1, 
                    maxWidth: '500px',
                    marginRight: item.side === 'left' ? '40px' : '0',
                    marginLeft: item.side === 'right' ? '40px' : '0'
                  }}>
                    <div style={{ 
                      backgroundColor: 'rgba(239, 246, 255, 1)', 
                      padding: '32px', 
                      borderRadius: '12px', 
                      boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(229, 231, 235, 1)'
                    }}>
                      <h3 style={{ 
                        fontSize: '20px', 
                        fontWeight: '600', 
                        color: '#1F2937', 
                        margin: '0 0 12px 0'
                      }}>
                        {item.year} — {item.title}
                      </h3>
                      <p style={{ 
                        fontSize: '16px', 
                        color: '#64748B', 
                        lineHeight: '1.6', 
                        margin: '0'
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 1,
                    position: 'relative'
                  }}>
                    <ImagePlaceholder
                      label={`Timeline Icon ${item.year}`}
                      imageName={item.icon}
                      width={40}
                      height={40}
                      borderRadius={0}
                    />
                  </div>
                  
                  <div style={{ flex: 1, maxWidth: '500px' }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#F9FAFB' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '44px', 
                fontWeight: '700', 
                color: '#1F2937', 
                margin: '0 0 16px 0'
              }}>
                The Visionaries Behind Our Brand
              </h2>
              <p style={{ 
                fontSize: '20px', 
                color: '#64748B', 
                margin: '0'
              }}>
                Meet the experienced professionals guiding SkySecure's mission
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
              {LEADERSHIP_TEAM.map((leader, index) => (
                <div key={index} style={{ 
                  backgroundColor: '#FFFFFF', 
                  padding: '32px', 
                  borderRadius: '12px', 
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  maxWidth: '300px'
                }}>
                  <div style={{ 
                    width: '128px', 
                    height: '128px', 
                    borderRadius: '50%', 
                    margin: '0 auto 24px auto',
                    overflow: 'hidden'
                  }}>
                    <ImagePlaceholder
                      label={leader.name}
                      imageName={leader.image}
                      width={128}
                      height={128}
                      borderRadius={0}
                    />
                  </div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#1F2937', 
                    margin: '0 0 8px 0'
                  }}>
                    {leader.name}
                  </h3>
                  <p style={{ 
                    fontSize: '16px', 
                    color: '#64748B', 
                    margin: '0 0 4px 0'
                  }}>
                    {leader.title}
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#3B82F6', 
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    {leader.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '44px', 
                fontWeight: '700', 
                color: '#1F2937', 
                margin: '0 0 16px 0'
              }}>
                Our Team
              </h2>
              <p style={{ 
                fontSize: '20px', 
                color: '#64748B', 
                margin: '0'
              }}>
                Dedicated professionals working together to secure your digital future.
              </p>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
              {TEAM_MEMBERS.map((member, index) => (
                <div key={index} style={{ 
                  backgroundColor: '#F9FAFB', 
                  padding: '32px', 
                  borderRadius: '12px', 
                  textAlign: 'center',
                  maxWidth: '300px'
                }}>
                  <div style={{ 
                    width: '128px', 
                    height: '128px', 
                    borderRadius: '50%', 
                    margin: '0 auto 24px auto',
                    overflow: 'hidden'
                  }}>
                    <ImagePlaceholder
                      label={member.name}
                      imageName={member.image}
                      width={128}
                      height={128}
                      borderRadius={0}
                    />
                  </div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#1F2937', 
                    margin: '0 0 8px 0'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{ 
                    fontSize: '16px', 
                    color: '#64748B', 
                    margin: '0 0 4px 0'
                  }}>
                    {member.title}
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#3B82F6', 
                    fontWeight: '500',
                    margin: '0'
                  }}>
                    {member.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#F9FAFB' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
              {/* Left Content */}
              <div style={{ flex: 1, maxWidth: '624px' }}>
                <h2 style={{ 
                  fontSize: '44px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: '0 0 24px 0'
                }}>
                  Global Presence
                </h2>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#64748B', 
                  lineHeight: '1.6', 
                  margin: '0 0 32px 0'
                }}>
                  Global Cybersecurity Expertise SkySecure operates across Bangalore, Coimbatore, Singapore, and the UAE—each office specializing in regional needs, from innovation and industrial security to finance and government protection, ensuring 24/7 monitoring and rapid response. Tailored, Trusted Solutions: Combining local insight with global intelligence, we deliver customized cybersecurity backed by continuous training, strong partnerships, and a commitment to sustainability and client trust worldwide.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {GLOBAL_OFFICES.map((office, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ 
                        width: '12px', 
                        height: '12px', 
                        backgroundColor: '#10B981', 
                        borderRadius: '50%',
                        flexShrink: 0
                      }}></div>
                      <span style={{ fontSize: '16px', color: '#64748B' }}>{office.location}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right Visual */}
              <div style={{ flex: 1, textAlign: 'center' }}>
                <ImagePlaceholder
                  label="Global Map"
                  imageName="about/global-map.png"
                  width={580}
                  height={400}
                  borderRadius={12}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
