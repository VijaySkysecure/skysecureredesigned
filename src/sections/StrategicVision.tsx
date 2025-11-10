import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const VISION_CARDS = [
  {
    title: 'Data Intelligence',
    description: 'Because decisions are only as good as the data behind them. With Skysecure, businesses gain real-time visibility, predictive insight, and data they can trust, not just to react, but to act ahead of risk. Our intelligence layer turns every byte of information into foresight that drives confident, faster, and smarter business growth.',
    bulletPoints: [
      'Real-time threat intelligence',
      'Predictive analytics',
      'Behavioral analysis'
    ],
    imageName: 'homepage/icon-assess.png',
  },
  {
    title: 'Advanced Cybersecurity',
    description: 'Skysecure gives businesses the confidence to operate without disruption by detecting, learning, and responding before threats impact performance or reputation. Our zero-trust framework and AI-driven automation create continuous, adaptive protection that keeps you resilient in a world where risk never sleeps. Because true security isn’t about reacting — it’s about staying ahead.',
    bulletPoints: [
      'Zero-trust security model',
      'Automated incident response',
      'Continuous monitoring'
    ],
    imageName: 'homepage/icon-automate.png',
  },
  {
    title: 'AI Innovation',
    description: 'Skysecure builds and manages autonomous AI Agents that think, learn, and act across your operations, reducing human effort while accelerating precision, speed, and impact. Each agent evolves with your business, creating a self-optimizing ecosystem that keeps you ahead of change.',
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
