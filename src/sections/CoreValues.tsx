import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const VALUES = [
  {
    title: 'Innovation First',
    text: 'We revolutionize cybersecurity and cloud management with AI-driven automation, delivering predictive defense, zero-trust resilience, and compliance-ready ecosystems.',
    imageName: 'homepage/icon-client.png',
  },
  {
    title: 'Trust & Transparency',
    text: 'Our partnerships focus on accountability, clarity, and measurable outcomes. We manage every environment we build, ensuring customers are always informed about their security, data, and infrastructure.',
    imageName: 'homepage/icon-integrity.png',
  },
  {
    title: 'Global Impact',
    text: 'Skysecure’s mission is to make the digital world safer and smarter for organizations of all sizes. With AI-powered services in 47+ countries, we help businesses automate securely, stay compliant, and grow confidently.',
    imageName: 'homepage/icon-innovation.png',
  },
];

export function CoreValues(): React.ReactElement {
  return (
    <section className="section--muted" id="values">
      <div className="container">
        <div className="core-values-card">
          <SectionHeader
            title="Our Core Values"
            description="Guided by purpose. Driven by innovation. Committed to protecting the digital future."
          />
          <div className="values-grid">
            {VALUES.map((value) => (
              <div 
                key={value.title} 
                className="value-card"
                style={{ 
                  transform: 'none !important',
                  transition: 'none !important'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'none';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <ImagePlaceholder
                  className="card__icon"
                  label={`${value.title} icon`}
                  imageName={value.imageName}
                  width={45}
                  height={45}
                  borderRadius={0}
                />
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
