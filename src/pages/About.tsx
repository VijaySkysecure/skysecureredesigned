import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { WhoWeAre } from '../sections/WhoWeAre';
import { TrustedCompanies } from '../sections/TrustedCompanies';
import '../styles/about-page.css';

const CORE_VALUES = [
  {
    icon: 'icon-shield',
    title: 'Trust at the Core',
    description: 'Trust is our most valuable currency. We earn it by being transparent, accountable, and relentless in delivering on our promise in ensuring every system we manage is secure, compliant, and dependable.'
  },
  {
    icon: 'icon-integrity',
    title: 'Partnership in Progress',
    description: 'We see ourselves as an extension of every client we serve. Collaboration, empathy, and shared success drive how we operate, turning managed services into meaningful partnerships that last.'
  },
  {
    icon: 'icon-customer',
    title: 'Customer First Approach',
    description: 'Every decision we make starts with "Whom". We listen, adapt, and build solutions around their goals, not just their challenges. Our success is defined by the trust we earn and the impact we create together.'
  },
  {
    icon: 'icon-innovation',
    title: 'Excellence Through Integrity',
    description: 'We believe excellence isn\'t just about results, it\'s about how those results are achieved. Integrity, discipline, and accountability guide our teams to uphold the highest standards in every vertical.'
  }
];

const STATS = [
  {
    number: '500+',
    title: 'Enterprises Secured',
    description: 'Organizations that rely on Skysecure to protect, scale, and automate their operations.'
  },
  {
    number: '2.4M+',
    title: 'AI-Processed Security Events Daily',
    description: 'Real-time monitoring and automation powering smarter, faster threat response.'
  },
  {
    number: '99.9%',
    title: 'Uptime SLA',
    description: 'Delivering continuous reliability across global cloud and infrastructure environments.'
  },
  {
    number: '45+',
    title: 'Countries Served',
    description: 'Supporting businesses worldwide with 24/7 managed operations and compliance.'
  },
  {
    number: '98%',
    title: 'Client Satisfaction Rate',
    description: 'Customer satisfaction based on post-purchase surveys and ongoing partnerships.'
  }
];

const JOURNEY_TIMELINE = [
  {
    year: '2021 (Dec)',
    title: 'Built with a Clear Purpose',
    description: 'Skysecure was born out of a shared vision among cybersecurity professionals to simplify security for complex industries like BFSI and infrastructure. By December 2021, we had completed incorporation, set up our India operations, and established the foundation for trust, compliance, and service excellence, the same principles that still drives our very core today.',
    side: 'left',
    icon: 'about/icon-timeline-2021.png'
  },
  {
    year: '2022 (Jul–Nov)',
    title: 'Formal Incorporation, Earning Trust',
    description: 'As we grew, so did our ambitions.In 2022, Skysecure formally incorporated as a global entity and began delivering large-scale cybersecurity programs for major Indian enterprises. That year, we earned Microsoft Security Specialization and Gold Partner status, conducted SMC Custom Security Workshops, and expanded to Singapore, marking our first major step beyond borders.',
    side: 'right',
    icon: 'about/icon-timeline-2022.png'
  },
  {
    year: '2023 (Jul)',
    title: 'A Defining Leap Forward 2023 marked a turning point.',
    description: 'Skysecure became a Microsoft Managed Partner and Cloud Solution Implementer (CSI), accelerating joint cloud and security programs. We launched an AI-powered solution-matching engine and expanded our B2B Marketplace, driving over $14M in Microsoft security revenue across 19 CSI engagements. It was the year our belief in intelligence and automation started shaping measurable business outcomes.',
    side: 'left',
    icon: 'about/icon-timeline-2023.png'
  },
  {
    year: '2024 (Jan)',
    title: 'Scaling with Confidence Across Cloud, AI, and More',
    description: 'With our Fast Track Ready Partner status, we entered an exciting new chapter, expanding into the Middle East with advanced cloud, AI, and cybersecurity services. It was more than growth; it was validation that our unified MSP model could scale globally, empowering enterprises to automate securely, perform smarter, and move forward with confidence.',
    side: 'right',
    icon: 'about/icon-timeline-2024.png'
  },

  {
    year: '2025 (Mar)',
    title: 'The Sprint to a 100$ Million',
    description: 'Now a Fast Track Ready Partner, Skysecure is scaling faster than ever across Cloud, Infrastructure, AI, and Data. We’re expanding into new markets, strengthening our marketplace ecosystem, and moving confidently toward our $100M milestone. It’s a rocky road, but we will get there.',
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
    name: 'Sneha Manjunath',
    title: 'Engineering Head',
    image: 'about/sneha.png'
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
    name: 'Ajay Gangadhar',
    title: 'Technical Architect',
    image: 'about/ajay.jpg'
  },
  {
    name: 'Meenu PS',
    title: 'Business Analyst',
    image: 'about/meenu.jpg'
  },
  {
    name: 'Swathi Manikandan',
    title: 'Engineering Specialist - Lead',
    image: 'about/swathi.jfif'
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
                What started in 2019 as a focused cybersecurity venture has evolved into one of India's most forward-thinking technology powerhouses. Today, Skysecure combines <strong>Cyber, Data, Infrastructure, and AI</strong> under one intelligent managed-services framework, simplifying how enterprises protect, scale, and automate their digital ecosystems.
                </p>
                <p className="about-hero-description-last">
                 As we look ahead, our vision is clear: to shape the world’s most intelligent and secure managed-services platform, where innovation, trust, and automation define how businesses thrive.
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
        
        {/* Who We Are Section */}
        <WhoWeAre />

        {/* Journey Timeline Section */}
        <section className="about-journey">
          <div className="about-journey-container">
            <div className="about-journey-header">
              <h2 className="about-journey-title">
                Since 2021, We’ve Come a Long Way.
              </h2>
              <p className="about-journey-subtitle">
               From Cybersecurity Specialists to Architects of Intelligent Managed Services.
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

        {/* Mission & Vision Section */}
        <section className="about-mission-vision">
          <div className="about-mission-vision-container">
            <div className="about-mission-vision-header">
              <h2 className="about-mission-vision-title">
                Our Mission & Vision
              </h2>
              <p className="about-mission-vision-subtitle">
               The principles that guide our journey toward intelligent, secure, and scalable managed services.
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
                  Our Mission is to simplify and secure how enterprises manage technology: combining Cyber, Data, Infrastructure, and AI into one intelligent managed services framework that empowers organizations to operate smarter, scale faster, and grow with confidence.
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
                 Our Vision is to build the world’s most intelligent and trusted managed services ecosystem, where AI, automation, and human expertise make technology simple, secure, and accessible, so every business can focus on growth, not complexity.
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

        {/* Leadership Section */}
        <section className="about-leadership">
          <div className="about-leadership-container">
            <div className="about-leadership-header">
              <h2 
                className="about-leadership-title"
                style={{ 
                  color: '#1F2937', 
                  fontSize: '36px',
                  fontWeight: 700
                }}
              >
                The Visionaries Behind Skysecure
              </h2>
              <p className="about-leadership-subtitle">
              Experienced leaders shaping the future of intelligent managed services.
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
              <h2 className="about-team-title"
              style={{ 
                color: '#1F2937', 
                fontSize: '36px',
                fontWeight: 700
              }}
              >
              Leadership That Inspires Intelligent Growth
              </h2>
              <p className="about-team-subtitle">
              From cybersecurity pioneers to technology visionaries, our leadership team drives Skysecure’s mission to simplify and secure the enterprise of tomorrow.
              </p>
            </div>
            
            <div className="about-team-grid">
              {/* All 5 members in a single row */}
              {TEAM_MEMBERS.slice(0, 5).map((member, index) => (
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
            
            {/* Second row - 4 members centered */}
            <div className="about-team-row-second">
              {TEAM_MEMBERS.slice(5, 9).map((member, index) => (
                <div key={index + 5} className="about-team-card">
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

        {/* Join our Mission Section */}
        <section className="about-join-mission">
          <div className="about-join-mission-container">
            <div className="about-join-mission-content">
              <h1 className="about-join-mission-h1">Build the Future with Us</h1>
              <h2 className="about-join-mission-h2">
                At Skysecure, we are creating technology that protects and empowers businesses, and it starts with people like you.
              </h2>
              <p className="about-join-mission-body">
                We believe great ideas can come from anywhere, and when passionate people work together, innovation follows. If you're driven by purpose, curiosity, and the desire to make an impact, you belong here.
              </p>
              <div className="about-join-mission-cta">
                <button 
                  className="about-join-mission-button"
                  onClick={() => {
                    window.location.href = 'https://skysecure.zohorecruit.in/jobs/Careers';
                  }}
                >
                  Find Your Next Role
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Companies Section */}
        <TrustedCompanies />

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
                At Skysecure, our presence spans Bengaluru, Singapore, and the UAE, each location built around the specific needs of the regions and industries we serve. Our teams combine local expertise with global intelligence to manage, automate, and secure operations for enterprises around the clock.
                  <br />
                  <br />
                  We see managed services as a partnership, one built on trust, adaptability, and measurable outcomes. By uniting people, intelligence, and automation, we help businesses simplify complexity, achieve agility, and grow with confidence.
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

        {/* Contact Us Section */}
        <section className="about-contact-us">
          <div className="about-contact-us-container">
            <div className="about-contact-us-content">
              <h1 className="about-contact-us-h1">Let's Build Something Intelligent Together</h1>
              <h2 className="about-contact-us-h2">
                Every transformation starts with a conversation.
              </h2>
              <p className="about-contact-us-body">
                From cybersecurity to AI, data, and infrastructure, we help enterprises build smarter, more resilient ecosystems. Let's explore how our unified MSP framework can simplify your operations and accelerate growth.
              </p>
              <div className="about-contact-us-cta">
                <button 
                  className="about-contact-us-button"
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                >
                  Request a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
