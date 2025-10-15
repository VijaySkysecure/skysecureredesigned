import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const GLOBAL_OFFICES = [
  {
    city: 'Bengaluru (HQ), India',
    address: 'G/M-06 & 07, Sakti Statesman, Green Glen Layout, Bellandur, Bengaluru, Karnataka - 560103'
  },
  {
    city: 'Cecil Street, Singapore',
    address: '30 Cecil Street, # 19-08, Prudential Tower, Singapore - 049712'
  },
  {
    city: 'Deira, UAE',
    address: 'Office No. 110, Sheikh Rashid Rd - Al Garhoud, Deira, Dubai, United Arab Emirates'
  }
];

const SERVICES_OF_INTEREST = [
  '24/7 SOC Monitoring',
  'Threat Hunting',
  'Zero Trust Implementation',
  'Security Assessment'
];

export function Contact(): React.ReactElement {
  return (
    <section className="section--light" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Ready to transform your cybersecurity posture? Let's discuss how we can protect your organization.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <div className="contact-info-section">
              <h3 className="contact-section-title">Contact Information</h3>
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <ImagePlaceholder
                      label="Phone icon"
                      imageName="homepage/icon-phone.png"
                      width={28}
                      height={28}
                      borderRadius={0}
                    />
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-title">Phone</span>
                    <span className="contact-text">+(91) 73533 55526</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <ImagePlaceholder
                      label="Email icon"
                      imageName="homepage/icon-email.png"
                      width={28}
                      height={28}
                      borderRadius={0}
                    />
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-title">Email</span>
                    <span className="contact-text">sales@skysecure.ai</span>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <ImagePlaceholder
                      label="Clock icon"
                      imageName="homepage/icon-clock.png"
                      width={28}
                      height={28}
                      borderRadius={0}
                    />
                  </div>
                  <div className="contact-info-content">
                    <span className="contact-info-title">Support Hours</span>
                    <span className="contact-text">9:30 AM - 6:30 PM Business</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="global-offices-section">
              <h3 className="contact-section-title">Global Offices</h3>
              <div className="offices-list">
                {GLOBAL_OFFICES.map((office, index) => (
                  <div key={index} className="office-card">
                    <div className="office-header">
                      <div className="office-icon">
                        <ImagePlaceholder
                          label="Location icon"
                          imageName="homepage/icon-location.png"
                          width={10}
                          height={17}
                          borderRadius={0}
                        />
                      </div>
                      <span className="office-city">{office.city}</span>
                    </div>
                    <p className="office-address">{office.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="consultation-form-card">
              <h3 className="form-title">Request a Consultation</h3>
              <form className="consultation-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Michael"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Scott"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Business Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="scott@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="company">Company</label>
                    <input 
                      id="company" 
                      name="company" 
                      placeholder="Company Inc."
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input 
                      id="jobTitle" 
                      name="jobTitle" 
                      placeholder="CISO"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="companySize">Company Size</label>
                  <select id="companySize" name="companySize" className="form-select">
                    <option value="" disabled>Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="services-label">Services of Interest</label>
                  <div className="services-checkboxes">
                    {SERVICES_OF_INTEREST.map((service, index) => (
                      <label key={index} className="checkbox-label">
                        <input 
                          type="checkbox" 
                          name="services" 
                          value={service}
                          className="checkbox-input"
                        />
                        <span className="checkbox-custom"></span>
                        <span className="checkbox-text">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your cybersecurity needs..."
                    className="form-textarea"
                    rows={4}
                  />
                </div>

                <div className="form-field">
                  <label className="consent-label">
                    <input 
                      type="checkbox" 
                      name="consent"
                      className="checkbox-input"
                    />
                    <span className="checkbox-custom"></span>
                    <span className="consent-text">
                      I agree to receive communications from Skysecure.ai and understand I can unsubscribe at any time.
                    </span>
                  </label>
                </div>

                <button type="submit" className="submit-button">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}