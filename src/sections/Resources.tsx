import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const RESOURCES = [
  {
    title: 'CISO Guide to Adaptive Compliance',
    description: 'Blueprint strategies for harmonizing multi-framework obligations with automation.',
    imageName: 'cover-adaptive-compliance.png',
  },
  {
    title: 'Zero Trust for Critical Infrastructure',
    description: 'A deep dive into segmenting industrial control networks without operational disruption.',
    imageName: 'cover-zero-trust.png',
  },
  {
    title: 'AI-Driven Threat Hunting Playbook',
    description: 'Step-by-step playbook for integrating ML detections into daily SOC workflows.',
    imageName: 'cover-threat-hunting.png',
  },
];

export function Resources(): React.ReactElement {
  return (
    <section className="section--muted" id="insights">
      <div className="container">
        <SectionHeader
          title="Knowledge & Resources"
          description="Insights, playbooks, and research tailored for security and compliance leaders."
        />
        <div className="resource-grid">
          {RESOURCES.map((resource) => (
            <article key={resource.title} className="resource-card">
              <ImagePlaceholder
                label={`${resource.title} cover`}
                imageName={resource.imageName}
                height={200}
                className="resource-card__media"
                borderRadius={0}
              />
              <div className="resource-card__content">
                <h3 className="card__title">{resource.title}</h3>
                <p className="card__description">{resource.description}</p>
                <a className="card__link" href="#insights">
                  Download resource
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
