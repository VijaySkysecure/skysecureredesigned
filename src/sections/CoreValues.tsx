import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const VALUES = [
  {
    title: 'Innovation First',
    text: 'We continuously push the boundaries of what\'s possible in cybersecurity through cutting-edge AI and machine learning technologies',
    imageName: 'icon-client.png',
  },
  {
    title: 'Trust & Transparency',
    text: 'Building lasting partnerships through honest communication, reliable service delivery, and unwavering commitment to our clients\' success.',
    imageName: 'icon-integrity.png',
  },
  {
    title: 'Global Impact',
    text: 'Dedicated to making the digital world safer for everyone through scalable security solutions and knowledge sharing.',
    imageName: 'icon-innovation.png',
  },
];

export function CoreValues(): React.ReactElement {
  return (
    <section className="section--muted" id="values">
      <div className="container">
        <SectionHeader
          title="Our Core Values"
          description="The principles that guide our mission to protect organizations worldwide"
        />
        <div className="values-grid">
          {VALUES.map((value) => (
            <div key={value.title} className="value-card">
              <ImagePlaceholder
                className="card__icon"
                label={`${value.title} icon`}
                imageName={value.imageName}
                width={64}
                height={64}
                borderRadius={16}
              />
              <h3 className="value-card__title">{value.title}</h3>
              <p className="value-card__text">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
