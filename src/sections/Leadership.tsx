import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const LEADERS = [
  {
    name: 'Suresh Kumar',
    role: (<>Co-Founder & Chief Executive Officer<br />EX-MICROSOFT</>),
    imageName: 'homepage/portrait1.png',
  },
  {
    name: 'Nithin Ramegowda',
    role: (<>Co-Founder & Chief Of Business Strategy<br />EX-MICROSOFT</>),
    imageName: 'homepage/portrait2.png',
  },
];

export function Leadership(): React.ReactElement {
  return (
    <section className="section--muted" id="leadership">
      <div className="container">
        <SectionHeader
          title="The Visionaries Behind Skysecure"
          description="Guided by a shared mission to simplify the complex, Skysecure’s founders are redefining how businesses secure, scale, and thrive. With deep expertise across Cybersecurity, Data, Infrastructure, and AI, they’re making technology feel effortless."
        />
        <div className="profile-grid">
          {LEADERS.map((leader) => (
            <div key={leader.name} className="profile-card">
              <ImagePlaceholder
                className="profile-card__avatar"
                label={`${leader.name} headshot`}
                imageName={leader.imageName}
                width={150}
                height={150}
                shape="rect"
                borderRadius={0}
              />
              <div>
                <p className="profile-card__name">{leader.name}</p>
                <p className="profile-card__role">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
