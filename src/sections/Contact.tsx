import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const CONTACT_POINTS = [
  {
    title: 'Headquarters',
    description: '1200 SkySecure Plaza, Suite 400, San Francisco, CA 94105',
  },
  {
    title: 'Support',
    description: 'support@skysecure.com • +1 (800) 555-4172',
  },
  {
    title: 'Media & Press',
    description: 'press@skysecure.com',
  },
];

export function Contact(): React.ReactElement {
  return (
    <section className="section--muted" id="contact">
      <div className="container">
        <SectionHeader
          title="Get In Touch"
          description="Transform your compliance and security programs with SkySecure experts."
        />
        <div className="contact-grid">
          <div className="contact-info">
            {CONTACT_POINTS.map((point) => (
              <div key={point.title} className="contact-info__item">
                <h3 className="card__title">{point.title}</h3>
                <p className="card__description">{point.description}</p>
              </div>
            ))}
            <div className="contact-info__item">
              <h3 className="card__title">Follow Us</h3>
              <div className="footer__social">
                <ImagePlaceholder label="LinkedIn" imageName="icon-linkedin.png" width={40} height={40} borderRadius={12} />
                <ImagePlaceholder label="Twitter" imageName="icon-twitter.png" width={40} height={40} borderRadius={12} />
                <ImagePlaceholder label="YouTube" imageName="icon-youtube.png" width={40} height={40} borderRadius={12} />
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" placeholder="Enter your name" />
            </div>
            <div>
              <label htmlFor="email">Work Email</label>
              <input id="email" type="email" name="email" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" placeholder="Company name" />
            </div>
            <div>
              <label htmlFor="service">Service Interest</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Select an option
                </option>
                <option value="compliance">Compliance Automation</option>
                <option value="soc">Managed SOC</option>
                <option value="cloud">Cloud Security</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" placeholder="Tell us about your goals" />
            </div>
            <button type="submit" className="button">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
