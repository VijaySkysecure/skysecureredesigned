import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import '../styles/about-page.css';

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
    description: 'Technology solutions available across multiple categories'
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
    description: 'In December 2021, Skysecure was established by cybersecurity experts focusing on specialist consulting for BFSI and infrastructure clients. Simultaneously, it completed incorporation and launched full-time operations in India, setting up compliance and local teams to drive growth.',
    side: 'left',
    icon: 'about/icon-timeline-2021.png'
  },
  {
    year: '2022 (Jul-Nov)',
    title: 'Formal Incorporation & Enterprise Delivery',
    description: 'Skysecure formally incorporated, delivering comprehensive cybersecurity programs for major Indian enterprises.we earned Microsoft Security Specialization and Gold Partner status, conducted the SMC Custom Security Assessment Workshop, and expanded operations to Singapore, marking significant growth and technical excellence.',
    side: 'right',
    icon: 'about/icon-timeline-2022.png'
  },
  {
    year: '2023 (Jul)',
    title: 'Strategic Partnerships & Marketplace Expansion',
    description: 'Skysecure earned Microsoft\'s Managed Partner designation and CSI (Cloud Solution Implementer) status, accelerating joint security sales. At the same time, we launched an AI-powered solution-matching engine and expanded our B2B marketplace, driving $14M in Microsoft security revenue across 19 CSI engagements.',
    side: 'left',
    icon: 'about/icon-timeline-2023.png'
  },
  {
    year: '2024 (Jan)',
    title: 'Scaling Across Cloud, AI, and Global Markets',
    description: 'Skysecure achieved Fast Track Ready partner status, positioning us for accelerated growth. With this strong foundation, we are now aspiring to expand our footprint into the Middle East. This strategic move aims to broaden our market reach and deliver advanced cybersecurity solutions across the region.',
    side: 'right',
    icon: 'about/icon-timeline-2024.png'
  },
  {
    year: '2025 (Mar)',
    title: 'Skysecure\'s Fast-Track Journey to $100M',
    description: 'Now a Fast-Track Ready partner, Skysecure is expanding across Cloud, Infrastructure, AI, and Data verticals, with a focus on scaling Mid-Market and SMC accounts to achieve a billed revenue target of $100M. Our roadmap includes launching operations in the Middle East and broadening our global marketplace ecosystem with verified vendors.',
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
    title: 'President & CBO',
    image: 'about/agniputhran-nm.JPG'
  },
  {
    name: 'Arvind Yadav',
    title: 'Cloud Business Lead',
    image: 'about/arvind.jpg'
  },
  {
    name: 'Rajat Tiwari',
    title: 'Head - Presales',
    image: 'about/rajat.jpeg'
  },
  {
    name: 'Vishal Thali',
    title: 'Head of Sales',
    image: 'about/vishal.jfif'
  },
  {
    name: 'Mona Kumari',
    title: 'Chief of Staff',
    image: 'about/mona.jfif'
  },
  {
    name: 'Swathi Manikandan',
    title: 'Engineering Specialist - Lead',
    image: 'about/swathi.jfif'
  },
  {
    name: 'Meenu PS',
    title: 'Business Analyst',
    image: 'about/meenu.jpg'
  }
];

const GLOBAL_OFFICES = [
  {
    location: 'Bangalore(HQ), India',
    color: '#3B82F6'
  },
  {
    location: 'Deira, UAE',
    color: '#10B981'
  },
  {
    location: 'Cecil Street, Singapore',
    color: '#EF4444'
  }
];

export function About(): React.ReactElement {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-container">
            <div className="about-hero-content">
              {/* Left Content */}
              <div className="about-hero-left">
                <h1 className="about-hero-title">
                  About Skysecure
                </h1>
                <p className="about-hero-description">
                  Founded in 2019 as a specialist cyber-security solutions partner, Skysecure has evolved into a full-stack technology powerhouse. Today we combine deep expertise across cyber, Cloud & Infrastructure, AI, and Data with a curated marketplace that connects enterprise buyers to rigorously vetted vendors.
                </p>
                <p className="about-hero-description-last">
                  Our mission is simple: remove complexity from IT procurement and deployment. From risk assessments to AI-driven analytics and seamless infrastructure roll-outs, we give organizations a single, trusted platform to discover, compare, and acquire the right solutions, fast and with total confidence.
                </p>
              </div>
              {/* Right Visual */}
              <div className="about-hero-right">
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
        <section className="about-mission-vision">
          <div className="about-mission-vision-container">
            <div className="about-mission-vision-header">
              <h2 className="about-mission-vision-title">
                Our Mission & Vision
              </h2>
              <p className="about-mission-vision-subtitle">
                Guiding principles that drive everything we do at Skysecure
              </p>
            </div>
            
            <div className="about-mission-vision-grid">
              {/* Mission */}
              <div className="about-mission-vision-card">
                <div className="about-mission-vision-icon">
                  <ImagePlaceholder
                    label="Mission Icon"
                    imageName="about/icon-mission.png"
                    width={64}
                    height={64}
                    borderRadius={0}
                  />
                </div>
                <h3 className="about-mission-vision-card-title">
                  Our Mission
                </h3>
                <p className="about-mission-vision-card-description">
                  To create a secure and transparent marketplace that simplifies the procurement of technology solutions for businesses of all sizes. We aim to bridge the gap between technology vendors and enterprise buyers by providing a platform that offers verified products, competitive pricing, and expert guidance.
                </p>
                <ul className="about-mission-vision-list">
                  <li className="about-mission-vision-list-item">
                    <span className="about-mission-vision-checkmark">✓</span>
                    <span className="about-mission-vision-list-text">Simplify procurement for enterprises</span>
                  </li>
                  <li className="about-mission-vision-list-item">
                    <span className="about-mission-vision-checkmark">✓</span>
                    <span className="about-mission-vision-list-text">Ensure product authenticity and quality</span>
                  </li>
                  <li className="about-mission-vision-list-item">
                    <span className="about-mission-vision-checkmark">✓</span>
                    <span className="about-mission-vision-list-text">Connect buyers with trusted technology vendors</span>
                  </li>
                </ul>
              </div>

              {/* Vision */}
              <div className="about-mission-vision-card">
                <div className="about-mission-vision-icon">
                  <ImagePlaceholder
                    label="Vision Icon"
                    imageName="about/icon-vision.png"
                    width={64}
                    height={64}
                    borderRadius={0}
                  />
                </div>
                <h3 className="about-mission-vision-card-title">
                  Our Vision
                </h3>
                <p className="about-mission-vision-card-description">
                  To become the world's leading marketplace for technology solutions, where every business can find the perfect technology stack for business needs. We envision a future where technology procurement is streamlined, transparent, and accessible, enabling organizations to stay ahead of evolving threats.
                </p>
                <ul className="about-mission-vision-list">
                  <li className="about-mission-vision-list-item">
                    <span className="about-mission-vision-checkmark">✓</span>
                    <span className="about-mission-vision-list-text">Global leader in technology distribution</span>
                  </li>
                  <li className="about-mission-vision-list-item">
                    <span className="about-mission-vision-checkmark">✓</span>
                    <span className="about-mission-vision-list-text">Democratize access to enterprise-grade solutions</span>
                  </li>
                  <li className="about-mission-vision-list-item">
                    <span className="about-mission-vision-checkmark">✓</span>
                    <span className="about-mission-vision-list-text">Foster innovation in the technology industry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="about-core-values">
          <div className="about-core-values-container">
            <div className="about-core-values-header">
              <h2 className="about-core-values-title">
                Our Core Values
              </h2>
              <p className="about-core-values-subtitle">
                The principles that guide our decisions and define our company culture
              </p>
            </div>
            
            <div className="about-core-values-grid">
              {CORE_VALUES.map((value, index) => (
                <div key={index} className="about-core-value-card">
                  <div className="about-core-value-icon">
                    <ImagePlaceholder
                      label={value.title}
                      imageName={`about/${value.icon}.png`}
                      width={48}
                      height={48}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="about-core-value-title">
                    {value.title}
                  </h3>
                  <p className="about-core-value-description">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="about-stats-container">
            <div className="about-stats-header">
              <h2 className="about-stats-title">
                Skysecure by the Numbers
              </h2>
              <p className="about-stats-subtitle">
                Our impact on the technology marketplace since our founding
              </p>
            </div>
            
            <div className="about-stats-grid">
              {STATS.map((stat, index) => (
                <div key={index} className="about-stat-item">
                  <div className="about-stat-number">
                    {stat.number}
                  </div>
                  <h3 className="about-stat-title">
                    {stat.title}
                  </h3>
                  <p className="about-stat-description">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section className="about-journey">
          <div className="about-journey-container">
            <div className="about-journey-header">
              <h2 className="about-journey-title">
                Our Journey
              </h2>
              <p className="about-journey-subtitle">
                From Cybersecurity Founders to Full-Stack Technology Scale
              </p>
            </div>
            
            <div className="about-timeline-wrapper">
              {/* Timeline Line */}
              <div className="about-timeline-line"></div>
              
              {JOURNEY_TIMELINE.map((item, index) => (
                <div key={index} className={`about-timeline-item about-timeline-item--${item.side}`}>
                  <div className={`about-timeline-content-wrapper about-timeline-content-wrapper--${item.side}`}>
                    <div className="about-timeline-card">
                      <h3 className="about-timeline-card-title">
                        {item.year} — {item.title}
                      </h3>
                      <p className="about-timeline-card-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot - Always centered */}
                  <div className="about-timeline-dot">
                    <ImagePlaceholder
                      label={`Timeline Icon ${item.year}`}
                      imageName={item.icon}
                      width={48}
                      height={48}
                      borderRadius={0}
                    />
                  </div>
                  
                  <div className="about-timeline-spacer"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="about-leadership">
          <div className="about-leadership-container">
            <div className="about-leadership-header">
              <h2 className="about-leadership-title">
                The Visionaries Behind Skysecure
              </h2>
              <p className="about-leadership-subtitle">
                Meet the experienced professionals guiding Skysecure's mission
              </p>
            </div>
            
            <div className="about-leadership-grid">
              {LEADERSHIP_TEAM.map((leader, index) => (
                <div key={index} className="about-leadership-card">
                  <div className="about-leadership-image">
                    <ImagePlaceholder
                      label={leader.name}
                      imageName={leader.image}
                      width={128}
                      height={128}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="about-leadership-name">
                    {leader.name}
                  </h3>
                  <p className="about-leadership-title">
                    {leader.title}
                  </p>
                  <p className="about-leadership-company">
                    {leader.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <div className="about-team-container">
            <div className="about-team-header">
              <h2 className="about-team-title">
                Our Leadership Team
              </h2>
              <p className="about-team-subtitle">
                Dedicated professionals working together to secure your digital future.
              </p>
            </div>
            
            <div className="about-team-grid">
              {/* First row - 4 members */}
              {TEAM_MEMBERS.slice(0, 4).map((member, index) => (
                <div key={index} className="about-team-card">
                  <div className="about-team-image">
                    <ImagePlaceholder
                      label={member.name}
                      imageName={member.image}
                      width={128}
                      height={128}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="about-team-name">
                    {member.name}
                  </h3>
                  <p className="about-team-title">
                    {member.title}
                  </p>
                  <p className="about-team-company">
                  </p>
                </div>
              ))}
            </div>
            
            {/* Second row - 3 members centered */}
            <div className="about-team-row-second">
              {TEAM_MEMBERS.slice(4, 7).map((member, index) => (
                <div key={index + 4} className="about-team-card">
                  <div className="about-team-image">
                    <ImagePlaceholder
                      label={member.name}
                      imageName={member.image}
                      width={128}
                      height={128}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="about-team-name">
                    {member.name}
                  </h3>
                  <p className="about-team-title">
                    {member.title}
                  </p>
                  <p className="about-team-company">
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="about-global">
          <div className="about-global-container">
            <div className="about-global-content">
              {/* Left Content */}
              <div className="about-global-left">
                <h2 className="about-global-title">
                  Global Presence
                </h2>
                <p className="about-global-description">
                  Global Cybersecurity Expertise Skysecure operates across Bangalore, Coimbatore, Singapore, and the UAE—each office specializing in regional needs, from innovation and industrial security to finance and government protection, ensuring 24/7 monitoring and rapid response.
                  <br />
                  <br />
                  Tailored, Trusted Solutions: Combining local insight with global intelligence, we deliver customized cybersecurity backed by continuous training, strong partnerships, and a commitment to sustainability and client trust worldwide.
                </p>
                <div className="about-global-offices">
                  {GLOBAL_OFFICES.map((office, index) => (
                    <div key={index} className="about-global-office-item">
                      <div 
                        className="about-global-office-dot"
                        style={{ backgroundColor: office.color }}
                      ></div>
                      <span className="about-global-office-location">{office.location}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right Visual */}
              <div className="about-global-right">
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
