import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export function Hero(): React.ReactElement {
  return (
    <section className="hero" id="home">
      <div className="container hero__content">
        <div>
          <h1>
            Comprehensive<br />
            Managed Solutions for<br />
            <span style={{ color: 'rgba(75, 85, 99, 1)' }}>Business Excellence</span><br />
          </h1>
          <p className="hero__description">
          Delivering end-to-end solutions that optimize business operations and drive sustained growth. Ensuring robust data governance and seamless compliance with India’s Digital Personal Data Protection (DPDP) Act, 2023.
          </p>
          <div className="hero__cta">
            <button 
              type="button" 
              className="button"
              style={{ 
                width: '163px', 
                height: '52px', 
                borderRadius: '8px' 
              }}
            >
              Learn More
            </button>
          </div>
        </div>
        <div>
          <ImagePlaceholder
            label="Hero illustration"
            imageName="hero-visual.png"
            width={450}
            height={450}
            shape="circle"
          />
          <div className="hero__stats-box">
            <div className="stat-item">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">&lt;5min</div>
              <div className="stat-label">MTTD</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <div className="stat-label">SOC Coverage</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">500+</div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
