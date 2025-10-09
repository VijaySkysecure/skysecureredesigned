import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const FOOTER_LINKS = {
  Solutions: [
    '24/7 SOC Monitoring',
    'Threat Hunting', 
    'Zero Trust Architecture',
    'Cloud Security',
    'Security Training',
    'Risk Assessment'
  ],
  Company: [
    'About Us',
    'Leadership',
    'Careers',
    'Partners',
    'Contact'
  ],
  Resources: [
    'Blog',
    'Whitepapers',
    'Case Studies',
    'Skysecure Decode',
    'Documentation',
    'Support'
  ]
};

const CERTIFICATIONS = [
  { name: 'SOC 2 Type II', imageName: 'cert-soc2.png' },
  { name: 'ISO 27001', imageName: 'cert-iso27001.png' },
  { name: 'GDPR Compliant', imageName: 'cert-gdpr.png' },
  { name: 'Microsoft Partner', imageName: 'cert-microsoft.png' }
];

export function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <ImagePlaceholder label="SkySecure logo" imageName="logo-footer.png" width={180} height={56} borderRadius={0} />
            <p className="footer__description">
              Leading the future of cybersecurity through AI innovation and global MSSP services.
            </p>
            <div className="footer__social">
              <ImagePlaceholder label="LinkedIn" imageName="icon-linkedin.png" width={28} height={28} borderRadius={0} />
              <ImagePlaceholder label="Twitter" imageName="icon-twitter.png" width={28} height={28} borderRadius={0} />
              <ImagePlaceholder label="YouTube" imageName="icon-youtube.png" width={28} height={28} borderRadius={0} />
              <ImagePlaceholder label="GitHub" imageName="icon-github.png" width={28} height={28} borderRadius={0} />
            </div>
          </div>
          
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="footer__column">
              <h3 className="footer__column-title">{title}</h3>
              <ul className="footer__links">
                {links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="footer__link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer__divider"></div>
        
        <div className="footer__bottom">
          <span className="footer__copyright">© 2025 Skysecure. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#privacy-policy" className="footer__legal-link">Privacy Policy</a>
            <a href="#terms-of-service" className="footer__legal-link">Terms of Service</a>
            <a href="#cookie-policy" className="footer__legal-link">Cookie Policy</a>
          </div>
        </div>
        
        <div className="footer__divider"></div>
        
        <div className="footer__certifications">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="footer__cert">
              <ImagePlaceholder 
                label={cert.name} 
                imageName={cert.imageName} 
                width={42}
                height={42}
                borderRadius={0} 
              />
              <span className="footer__cert-label">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}