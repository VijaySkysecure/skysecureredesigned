import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

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
    'Careers',
    'Contact'
  ],
  Resources: [
    'Blog',
    'Whitepapers',
    'Case Studies',
    'Skysecure Decode'
  ]
};

const CERTIFICATIONS = [
  { name: 'SOC 2 Type II', imageName: 'footer/cert-soc2.png' },
  { name: 'ISO 27001', imageName: 'footer/cert-iso27001.png' },
  { name: 'GDPR Compliant', imageName: 'footer/cert-gdpr.png' },
  { name: 'Microsoft Partner', imageName: 'footer/cert-microsoft.png' }
];

export function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <ImagePlaceholder label="Skysecure logo" imageName="footer/logo-footer.png" width={180} height={56} borderRadius={0} />
            <p className="footer__description">
              Leading the future of cybersecurity through AI innovation and global MSSP services.
            </p>
            <div className="footer__social">
              <a 
                href="https://www.linkedin.com/company/skysecure-technologies/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(31, 41, 55, 1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <FaLinkedin size={18} />
                </div>
              </a>
              <a 
                href="https://x.com/SkysecureT?t=eIQh6SBZr52JEPj57ntPWw&s=09/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(31, 41, 55, 1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <FaXTwitter size={16} />
                </div>
              </a>
              <a 
                href="https://www.instagram.com/skysecuretech/?igsh=ZmgxdjIzZ2JjcGhw#" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div 
                  style={{
                    width: '32px',
                    height: '32px',
                    backgroundColor: 'rgba(31, 41, 55, 1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}
                >
                  <FaInstagram size={18} />
                </div>
              </a>
            </div>
          </div>
          
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title} className="footer__column">
              <h3 className="footer__column-title">{title}</h3>
              <ul className="footer__links">
                {links.map((link, index) => {
                  // Link the first 6 Solutions items to their respective pages
                  const isSolutionLink = title === 'Solutions' && index < 6;
                  const isAboutLink = title === 'Company' && link === 'About Us';
                  const isContactLink = title === 'Company' && link === 'Contact';
                  const isCareersLink = title === 'Company' && link === 'Careers';
                  const isResourceLink = title === 'Resources';
                  const getSolutionHref = (linkName: string) => {
                    switch (linkName) {
                      case '24/7 SOC Monitoring': return '/soc-monitoring';
                      case 'Threat Hunting': return '/threat-hunting';
                      case 'Zero Trust Architecture': return '/zero-trust-architecture';
                      case 'Cloud Security': return '/cloud-security';
                      case 'Security Training': return '/security-training';
                      case 'Risk Assessment': return '/risk-assessment';
                      default: return `#${linkName.toLowerCase().replace(/\s+/g, '-')}`;
                    }
                  };
                  
                  return (
                    <li key={link}>
                      <a 
                        href={isSolutionLink ? getSolutionHref(link) : isAboutLink ? '/about' : isContactLink ? '/contact' : isCareersLink ? '#careers' : isResourceLink ? '#resources' : `#${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className="footer__link"
                        onClick={isSolutionLink ? (e) => {
                          e.preventDefault();
                          window.location.href = getSolutionHref(link);
                        } : isAboutLink ? (e) => {
                          e.preventDefault();
                          window.location.href = '/about';
                        } : isContactLink ? (e) => {
                          e.preventDefault();
                          window.location.href = '/contact';
                        } : isCareersLink ? (e) => {
                          e.preventDefault();
                          window.open('https://skysecure.zohorecruit.in/jobs/Careers', '_blank');
                        } : isResourceLink ? (e) => {
                          e.preventDefault();
                          // Map resource names to their corresponding tab IDs
                          const getResourceTabId = (resourceName: string) => {
                            switch (resourceName) {
                              case 'Blog': return 'blog';
                              case 'Whitepapers': return 'whitepaper';
                              case 'Case Studies': return 'case-study';
                              case 'Skysecure Decode': return 'skysecure-decode';
                              default: return 'all';
                            }
                          };
                          
                          const tabId = getResourceTabId(link);
                          
                          if (window.location.pathname !== '/') {
                            // Navigate to homepage with hash to trigger scroll and tab selection after page load
                            window.location.href = `/#insights-${tabId}`;
                          } else {
                            // Already on homepage, scroll to section and activate specific tab
                            const resourcesSection = document.getElementById('insights');
                            if (resourcesSection) {
                              resourcesSection.scrollIntoView({ behavior: 'smooth' });
                              // Wait for scroll to complete, then activate the specific tab
                              setTimeout(() => {
                                const tabButton = document.querySelector(`[data-tab="${tabId}"]`) as HTMLElement;
                                if (tabButton) {
                                  tabButton.click();
                                }
                              }, 500);
                            }
                          }
                        } : undefined}
                      >
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="footer__divider"></div>
        
        <div className="footer__bottom">
          <span className="footer__copyright">© 2025 Skysecure. All rights reserved.</span>
          <div className="footer__legal">
            <a 
              href="/privacy-policy" 
              className="footer__legal-link"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/privacy-policy';
              }}
            >
              Privacy Policy
            </a>
            <a 
              href="/terms-of-service" 
              className="footer__legal-link"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/terms-of-service';
              }}
            >
              Terms of Service
            </a>
            <a 
              href="/cookie-policy" 
              className="footer__legal-link"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/cookie-policy';
              }}
            >
              Cookie Policy
            </a>
          </div>
        </div>
        
        <div className="footer__divider"></div>
        
        <div className="footer__certifications">
          {CERTIFICATIONS.map((cert, index) => (
            <div key={index} className="footer__cert">
              <div style={{ filter: 'grayscale(100%)' }}>
                <ImagePlaceholder 
                  label={cert.name} 
                  imageName={cert.imageName} 
                  width={42}
                  height={42}
                  borderRadius={0} 
                />
              </div>
              <span className="footer__cert-label">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}