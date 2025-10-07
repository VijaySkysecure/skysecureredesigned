import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const LEADERS = [
  {
    name: 'Suresh Kumar',
    role: (<>Co-Founder & Chief Executive Officer<br />EX-MICROSOFT</>),
    imageName: 'headshot-alicia.png',
  },
  {
    name: 'Nithin Ramegowda',
    role: (<>Co-Founder & Chief Of Business Strategy<br />EX-MICROSOFT</>),
    imageName: 'headshot-ravi.png',
  },
];

export function Leadership(): React.ReactElement {
  return (
    <section className="section--light" id="leadership">
      <div className="container">
        <SectionHeader
          title="Leadership Team"
          description="World-class cybersecurity experts leading the charge in AI-driven security innovation"
        />
        <div className="profile-grid">
          {LEADERS.map((leader) => (
            <div key={leader.name} className="profile-card">
              <ImagePlaceholder
                className="profile-card__avatar"
                label={`${leader.name} headshot`}
                imageName={leader.imageName}
                width={160}
                height={160}
                shape="circle"
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
