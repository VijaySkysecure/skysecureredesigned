import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const VISION_CARDS = [
  {
    title: 'Data Intelligence',
    description: 'Make smarter moves with data you can trust.',
    description2: 'Skysecure gives you real-time visibility and predictive intelligence so you can act faster, reduce risk, and grow with confidence.',
    bulletPoints: [
      'Real-time threat intelligence',
      'Predictive analytics',
      'Behavioral analysis'
    ],
    imageName: 'homepage/icon-assess.png',
  },
  {
    title: 'Advanced Cybersecurity',
    description: 'Protect your business before risks become reality.',
    description2: "Skysecure's zero-trust architecture and AI automation ensure continuous defence, so you stay secure, compliant, and always in control.",
    bulletPoints: [
      'Zero-trust security model',
      'Automated incident response',
      'Continuous monitoring'
    ],
    imageName: 'homepage/icon-automate.png',
  },
  {
    title: 'AI Innovation',
    description: 'Work smarter, not harder.',
    description2: "Skysecure's AI Agents automate what slows you down — learning, adapting, and acting across your operations to boost precision, speed, and performance.",
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
          title="Why Leading Businesses Choose Skysecure — and You Should Too"
          description="For one reason: we deliver measurable, transformative impact.
          By combining Cybersecurity, Data, Infrastructure, and AI, we help organizations reduce costs, predict risks, accelerate performance, and scale with confidence. It’s the smarter, more secure way to grow."
        />
        <div className="card-grid">
          {VISION_CARDS.map((card, index) => (
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
              {card.description2 ? (
                <>
                  <p className="card__description" style={{ marginBottom: '0px' }}>{card.description}</p>
                  <p className="card__description" style={{ marginTop: index === 0 ? '-56px' : '-12px' }}>{card.description2}</p>
                </>
              ) : (
                <p className="card__description">{card.description}</p>
              )}
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
