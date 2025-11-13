import React, { useState, useEffect, useRef } from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { TrustedCompanies } from '../sections/TrustedCompanies';
import { Testimonials } from '../sections/Testimonials';
import { useCountUp } from '../hooks/useCountUp';
import { MagneticCard3D } from '../components/MagneticCard3D';
import '../styles/managed-services.css';

const STATS_DATA = [
  { value: '500+', label: 'Businesses Managed' },
  { value: '40%', label: 'Reduction in IT Overhead' },
  { value: '10,000+', label: 'Cloud & Infrastructure Assets Managed' },
  { value: '24/7/365', label: 'Managed Operations' },
  { value: '98%', label: 'Customer Retention Rate' },
];

const UNIFIED_FRAMEWORK_PILLARS = [
  {
    title: 'Cyber - Confidence Through Protection',
    description: 'We secure your digital ecosystem end-to-end with proactive monitoring, incident response, and zero trust governance, keeping your business safe, compliant, and always operational.',
    keyPoints: ['Fewer incidents', 'Stronger compliance', 'Always-on protection']
  },
  {
    title: 'Data - Insights for Best Decisions',
    description: 'From governance to analytics, we turn raw data into real-time intelligence you can trust. Skysecure ensures visibility, accuracy, and compliance, so every decision is informed, not assumed.',
    keyPoints: ['Unified visibility', 'Smarter decisions', 'Automated compliance']
  },
  {
    title: 'Infra Built to Scale',
    description: 'We design, deploy, and manage cloud-ready infrastructure that grows with your business. Reliable, resilient, and predictable, giving you the power to innovate without worrying about uptime or performance.',
    keyPoints: ['Predictable costs', 'Seamless scalability', 'Reliable performance']
  },
  {
    title: 'AI Intelligence That Works for You',
    description: 'Our custom AI agents automate routine tasks, streamline workflows, and boost team productivity. Each agent adapts to your business context, learning, improving, and freeing your teams to focus on what truly matters.',
    keyPoints: ['Lower costs', 'Faster execution', 'Higher productivity']
  }
];

export function ManagedServices(): React.ReactElement {
  const statsSectionRef = useRef<HTMLElement>(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const strategicApproachRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStatsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const checkVisibility = () => {
      if (!strategicApproachRef.current) return;

      const rect = strategicApproachRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is visible
      if (rect.top < windowHeight + 200 && rect.bottom > -200) {
        setIsSectionVisible(true);
        return true;
      }
      return false;
    };

    // Initial check after a small delay to ensure DOM is rendered
    timeoutId = setTimeout(() => {
      if (checkVisibility()) {
        return; // Already visible, no need for observer
      }

      // Use IntersectionObserver for visibility detection
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsSectionVisible(true);
              if (observer) {
                observer.disconnect();
              }
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: '200px',
        }
      );

      if (strategicApproachRef.current) {
        observer.observe(strategicApproachRef.current);
      }

      // Fallback: make visible after 1 second if observer hasn't triggered
      setTimeout(() => {
        setIsSectionVisible(true);
      }, 1000);
    }, 100);

    // Scroll handler for gradient animation
    const handleScroll = () => {
      if (!strategicApproachRef.current) return;

      const rect = strategicApproachRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1)
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const progress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Parse stat values for animation
  const parseStatValue = (value: string): { number: number; suffix: string; isText: boolean } => {
    // Check if it's text (like "24/7/365")
    if (value.includes('/')) {
      return { number: 0, suffix: value, isText: true };
    }
    
    // Extract number and suffix
    const match = value.match(/^([\d,]+)(.*)$/);
    if (match) {
      const numberStr = match[1].replace(/,/g, '');
      const suffix = match[2] || '';
      return { number: parseFloat(numberStr), suffix, isText: false };
    }
    
    return { number: 0, suffix: value, isText: true };
  };

  // Format animated value
  const formatAnimatedValue = (value: number, originalValue: string): string => {
    const parsed = parseStatValue(originalValue);
    if (parsed.isText) {
      return parsed.suffix;
    }
    
    if (parsed.suffix === '%') {
      return `${Math.floor(value)}%`;
    } else if (parsed.suffix === '+') {
      // Format with commas if >= 1000
      if (value >= 1000) {
        return `${Math.floor(value).toLocaleString()}+`;
      }
      return `${Math.floor(value)}+`;
    }
    
    return `${Math.floor(value)}${parsed.suffix}`;
  };

  // Animated values
  const animated500 = useCountUp(500, isStatsVisible, 1500);
  const animated40 = useCountUp(40, isStatsVisible, 1500);
  const animated10000 = useCountUp(10000, isStatsVisible, 1500);
  const animated98 = useCountUp(98, isStatsVisible, 1500);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="page-hero">
          <div className="page-hero__content">
            <h1 className="page-hero__title">
              <span style={{ color: 'rgba(37, 99, 235, 1)' }}>Too Many Vendors. Too Many Tools. Not Enough Time.</span>
            </h1>
            <p className="page-hero__description">
            We've Been Expecting You. 
            </p>
            <p style={{ fontSize: '16px', marginTop: '24px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}>
              Here at Skysecure, we simplify it all with a unified managed services framework built on Cyber, Data, Infrastructure, and AI. One partner to protect, automate, and scale your technology ecosystem intelligently. 
            </p>
          </div>
        </section>
        <TrustedCompanies />
        
        {/* Stats Section */}
        <section ref={statsSectionRef} className="managed-services-stats-section">
          <div className="container">
            <div className="managed-services-stats-box">
              {STATS_DATA.map((stat, index) => {
                let animatedValue: string;
                if (index === 0) {
                  animatedValue = formatAnimatedValue(animated500, stat.value);
                } else if (index === 1) {
                  animatedValue = formatAnimatedValue(animated40, stat.value);
                } else if (index === 2) {
                  animatedValue = formatAnimatedValue(animated10000, stat.value);
                } else if (index === 4) {
                  animatedValue = formatAnimatedValue(animated98, stat.value);
                } else {
                  // For "24/7/365", keep as is
                  animatedValue = stat.value;
                }

                return (
                  <div 
                    key={index} 
                    className={`managed-services-stat-item ${index === STATS_DATA.length - 1 ? 'stat-item-last' : ''}`}
                  >
                    <div className="managed-services-stat-value">
                      {animatedValue}
                    </div>
                    <div className="managed-services-stat-label">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Complexity Section */}
        <section className="managed-services-complexity-section">
          <div className="container">
            <div className="managed-services-complexity-content">
              <h1 className="managed-services-complexity-title">
                Technology Is Complex. Managing It Should Not Be.
              </h1>
              <h2 className="managed-services-complexity-subtitle">
                The More Tools You Add, the Harder It Gets.
              </h2>
              <p className="managed-services-complexity-body">
                You're not alone. Growing businesses often juggle too many tools, vendors, and systems that were meant to help but only added complexity. Teams end up managing integrations and fixing issues instead of driving innovation.
              </p>
              <p className="managed-services-complexity-body">
                It's time to take back control with a unified, intelligent way to manage your entire IT ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Our Strategic Approach Section */}
        <section 
          ref={strategicApproachRef}
          className={`page-values ${isSectionVisible ? 'page-values--visible' : ''}`}
          style={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}
        >
          <div className="container">
            <div className="page-values__header">
              <h2 
                className="page-values__title page-values__title--gradient"
                style={{
                  '--scroll-progress': scrollProgress,
                } as React.CSSProperties}
              >
                A Unified MSP Framework Built for the Modern Businesses
              </h2>
              <h3 className={`page-values__subheading ${isSectionVisible ? 'page-values__subheading--reveal' : ''}`}>
                Where Cyber, Data, Infrastructure, and AI work together, so your business runs smarter, safer, and faster.
              </h3>
              <p className={`page-values__description ${isSectionVisible ? 'page-values__description--reveal' : ''}`}>
                Skysecure streamlines management, automates the routine, and turns data into decisions, so your team can focus on what matters.
              </p>
            </div>
          </div>
        </section>

        {/* The New Standard in Managed Services Section */}
        <section className="managed-services-unified-framework-section">
          <div className="container">
            <div className="managed-services-unified-framework-content">
              <h1 className="managed-services-unified-framework-title">
                The New Standard in Managed Services.
              </h1>
              <h2 className="managed-services-unified-framework-subtitle">
                Here's how Skysecure brings your technology together under one unified managed framework, delivering performance, visibility, and resilience across every layer of your business.
              </h2>
              <div className="magnetic-cards-3d-container">
                {UNIFIED_FRAMEWORK_PILLARS.map((pillar, index) => (
                  <MagneticCard3D
                    key={index}
                    title={pillar.title}
                    description={pillar.description}
                    keyPoints={pillar.keyPoints}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
        
        {/* Continuous Intelligence Section */}
        <section className="page-innovation">
          <div className="container">
            <div className="page-innovation__content-wrapper" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '80px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              <div style={{ flex: '1' }}>
                <ImagePlaceholder
                  label="Threat Hunting Network"
                  imageName="securitysolutions/threat-hunting-network.png"
                  width={560}
                  height={360}
                  borderRadius={0}
                />
              </div>
              <div style={{ flex: '1' }}>
                <h2 style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: 'var(--color-black)', 
                  marginBottom: '24px',
                  lineHeight: '1.2'
                }}>Continuous Monitoring</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: 'var(--color-grey)', 
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  We offer 24/7 monitoring to ensure your IT infrastructure remains secure, optimized, and fully operational at all times. Our proactive alerts and real-time response capabilities keep potential issues in check before they disrupt your workflow.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="page-cta">
          <div className="container">
            <div className="page-cta__content">
              <h2 className="page-cta__title">Let's Redefine How Your Business Manages Technology</h2>
              <p className="page-cta__description">
              Partner with Skysecure and experience the power of unified managed services that protect, automate, and scale your business.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
