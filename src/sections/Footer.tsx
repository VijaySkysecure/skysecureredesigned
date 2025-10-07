import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const FOOTER_LINKS = {
  Company: ['About', 'Leadership', 'Careers', 'Partners'],
  Solutions: ['Risk Management', 'Compliance Automation', 'Managed Detection', 'Zero Trust'],
  Resources: ['Insights', 'Events', 'Security Reports', 'Contact'],
};

export function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__column">
            <ImagePlaceholder label="SkySecure logo" imageName="logo-footer.png" width={160} height={56} borderRadius={12} />
            <p>
              SkySecure advances cyber resilience and compliance maturity for organizations operating in regulated and
              mission-critical environments worldwide.
            </p>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="footer__column">
              <h3>{title}</h3>
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} SkySecure. All rights reserved.</span>
          <div className="footer__social">
            <ImagePlaceholder label="LinkedIn" imageName="icon-linkedin.png" width={40} height={40} borderRadius={12} />
            <ImagePlaceholder label="Twitter" imageName="icon-twitter.png" width={40} height={40} borderRadius={12} />
            <ImagePlaceholder label="YouTube" imageName="icon-youtube.png" width={40} height={40} borderRadius={12} />
            <ImagePlaceholder label="GitHub" imageName="icon-github.png" width={40} height={40} borderRadius={12} />
          </div>
        </div>
      </div>
    </footer>
  );
}
