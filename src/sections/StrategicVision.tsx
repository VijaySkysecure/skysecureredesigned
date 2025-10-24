import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const VISION_CARDS = [
  {
    title: 'Data Intelligence',
    description: 'Harness the power of big data analytics and machine learning to identify patterns, predict threats, and optimize security operations.',
    bulletPoints: [
      'Real-time threat intelligence',
      'Predictive analytics',
      'Behavioral analysis'
    ],
    imageName: 'homepage/icon-assess.png',
  },
  {
    title: 'Advanced Cybersecurity',
    description: 'Next-generation security frameworks combining zero-trust architecture with AI-powered threat detection and response.',
    bulletPoints: [
      'Zero-trust security model',
      'Automated incident response',
      'Continuous monitoring'
    ],
    imageName: 'homepage/icon-automate.png',
  },
  {
    title: 'AI Innovation',
    description: 'Cutting-edge artificial intelligence and machine learning technologies that evolve and adapt to emerging cyber threats.',
    bulletPoints: [
      'Machine learning algorithms',
      'Natural language processing',
      'Autonomous threat hunting'
    ],
    imageName: 'homepage/icon-assure.png',
  },
];

export function StrategicVision(): React.ReactElement {
  return (
    <section className="section--muted" id="vision">
      <div className="container">
        <SectionHeader
          title="Our Strategic Vision"
          description="To build the world’s most intelligent and secure managed services ecosystem, where AI, data, and automation work together to protect, govern, and scale every enterprise with trust and precision."
        />
        <div className="card-grid">
          {VISION_CARDS.map((card) => (
            <div key={card.title} className="card">
              <ImagePlaceholder
                className="card__icon"
                label={`${card.title} icon`}
                imageName={card.imageName}
                width={49}
                height={49}
                borderRadius={0}
              />
              <h3 className="card__title">{card.title}</h3>
              <p className="card__description">{card.description}</p>
              <ul className="card__bullet-points">
                {card.bulletPoints.map((point, index) => (
                  <li key={index} className="bullet-point">
                    <span className="bullet-icon">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
