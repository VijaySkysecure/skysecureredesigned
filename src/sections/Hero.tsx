import React, { useState, useEffect, useRef } from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { useCountUp } from '../hooks/useCountUp';

export function Hero(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animated99 = useCountUp(99.9, isVisible, 1500);
  const animated5 = useCountUp(5, isVisible, 1500);
  const animated24 = useCountUp(24, isVisible, 1500);
  const animated500 = useCountUp(500, isVisible, 1500);

  return (
    <section ref={sectionRef} className="hero" id="home">
      <div className="container hero__content">
        <div>
          <h1>
            Comprehensive<br />
            Managed Solutions for<br />
            <span style={{ color: 'rgba(75, 85, 99, 1)' }}>Business Excellence</span><br />
          </h1>
          <p className="hero__description">
          Simplify your IT and focus on growth. Skysecure unifies Cyber, Data, Infrastructure, and AI into one intelligent Managed Services framework that protects, automates, and scales your business with lasting resilience. 
          <br />
         
          </p>
          <div className="hero__cta">
            <button 
              type="button" 
              className="button"
              style={{ 
                width: '325px', 
                height: '52px', 
                borderRadius: '8px' 
              }}
              onClick={() => {
                window.location.href = '/managed-services';
              }}
            >
              Explore Our Unified MSP Solutions
            </button>
          </div>
        </div>
        <div>
          <ImagePlaceholder
            label="Hero illustration"
            imageName="homepage/hero-visual.png"
            width={450}
            height={450}
            shape="circle"
          />
          <div className="hero__stats-box">
            <div className="stat-item">
              <div className="stat-value">{animated99.toFixed(1)}%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">&lt;{Math.floor(animated5)}min</div>
              <div className="stat-label">MTTD</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{Math.floor(animated24)}/7</div>
              <div className="stat-label">SOC Coverage</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{Math.floor(animated500)}+</div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
          </div>
          <div className="hero__certifications-box">
            <div className="cert-item">Microsoft Partner</div>
            <div className="cert-item">ISO 27001 Certified</div>
            <div className="cert-item">DPDP Compliant</div>
          </div>
        </div>
      </div>
    </section>
  );
}
