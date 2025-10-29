import React, { useState } from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import Flag from 'country-flag-icons/react/3x2/IN';
import FlagSG from 'country-flag-icons/react/3x2/SG';
import FlagAE from 'country-flag-icons/react/3x2/AE';
import '../styles/contact-page.css';

export function ContactPage(): React.ReactElement {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    marketing: false
  });

  const [phoneError, setPhoneError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    // Reset submitted state when user types in any field
    if (isSubmitted) {
      setIsSubmitted(false);
    }
    
    if (name === 'phone') {
      // Remove any non-numeric characters
      const numericValue = value.replace(/\D/g, '');
      
      // Check if first digit is 0
      if (numericValue.length > 0 && numericValue[0] === '0') {
        setPhoneError('Phone number cannot start with 0');
        return;
      } else {
        setPhoneError('');
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!formData.marketing) {
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        marketing: false
      });
      setPhoneError('');
      setIsSubmitted(false);
    }, 1000); // Show "Submitted" message for 1 second before clearing
  };
  return (
    <div className="contact-page">
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <div className="contact-hero-left">
              <h2 className="contact-hero-title">
                Get in Touch With <span className="text-primary">Skysecure.</span>
              </h2>
              <p className="contact-hero-subtitle">
                We're here to help whether you need product information, support, or partnership opportunities.
              </p>
              {/* <button className="contact-hero-button">Send Us a Message</button> */}
            </div>
            <div className="contact-hero-right">
              <ImagePlaceholder
                label="Contact illustration"
                imageName="contact/contact_image.png"
                width={450}
                height={350}
                borderRadius={0}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards">
            {/* Call Us Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <ImagePlaceholder
                  label="Call Us"
                  imageName="contact/call-us.png"
                  width={48}
                  height={48}
                  borderRadius={0}
                />
              </div>
              <h3 className="contact-card-title">Call Us</h3>
              <p className="contact-card-description">
                Our support team is available Monday through Friday, 9am–6pm ET.
              </p>
              <a href="tel:+919173533555526" className="contact-card-link">+ (91) 73533 55526</a>
            </div>

            {/* Email Us Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <ImagePlaceholder
                  label="Email Us"
                  imageName="contact/email-us.png"
                  width={48}
                  height={48}
                  borderRadius={0}
                />
              </div>
              <h3 className="contact-card-title">Email Us</h3>
              <p className="contact-card-description">
                Send us an email and we'll respond as soon as possible.
              </p>
              <a href="mailto:sales@skysecure.ai" className="contact-card-link">sales@skysecure.ai</a>
            </div>

            {/* Visit Us Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <ImagePlaceholder
                  label="Visit Us"
                  imageName="contact/visit-us.png"
                  width={48}
                  height={48}
                  borderRadius={0}
                />
              </div>
              <h3 className="contact-card-title">Visit Us</h3>
              <p className="contact-card-description">
                Sakti Statesman, Unit #G/M-06 & 07, Marathahalli - Sarjapur Outer Ring Rd, 7th Cross, Green Glen Layout, Ibbaluru, Bengaluru, Karnataka 560103
              </p>
              <a href="#map" className="contact-card-link">Get Directions →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section" id="map">
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <ImagePlaceholder
            label="Map"
            imageName="contact/contact_map.png"
            width={990}
            height={320}
            borderRadius={8}
          />
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="global-presence-section">
        <div className="container">
          <h2 className="global-presence-title">Our Global Presence</h2>
          <p className="global-presence-subtitle">
            Reach out to our regional teams for local support.
          </p>

          <div className="global-offices">
            {/* India Office */}
            <div className="office-card">
              <div className="office-flag">
                <Flag className="flag-icon" />
                <h3 className="office-location">India, Bangalore(HQ)</h3>
              </div>
              <p className="office-addres">
              Sakti Statesman, #G/M-06 & 07, Outer Ring Rd, Green Glen Layout, Ibbaluru,<br />
                Bengaluru, Karnataka-560103
              </p>
            </div>

            {/* Singapore Office */}
            <div className="office-card">
              <div className="office-flag">
                <FlagSG className="flag-icon" />
                <h3 className="office-location">Singapore, Cecil Street</h3>
              </div>
              <p className="office-addres">
                30 Cecil Street, #19-08,<br />
                Prudential Tower, Singapore-049712
              </p>
            </div>

            {/* UAE Office */}
            <div className="office-card">
              <div className="office-flag">
                <FlagAE className="flag-icon" />
                <h3 className="office-location">UAE, Deira</h3>
              </div>
              <p className="office-addres">
                Office No. 110, Sheikh Rashid Rd<br />
                Al Garhoud – Deira, Dubai
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section" id="contact-form">
        <div className="container">
          <h2 className="contact-form-title">Send Us a Message</h2>
          <p className="contact-form-subtitle">
            Fill out the form below and our team will reach out to you shortly.
          </p>

          <form className="contact-formm" onSubmit={handleSubmit} style={{ backgroundColor: '#F8F9FB' }}>
            {/* Left Column - All Input Fields */}
            <div className="form-left-column">
              {/* First Name */}
              <div className="form-group">
                <label htmlFor="firstName" className="form-label">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Last Name */}
              <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-input"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Email Address */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {phoneError && (
                  <p style={{ color: '#EF4444', fontSize: '12px', margin: '4px 0 0 0' }}>
                    {phoneError}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div className="form-group">
                <label htmlFor="company" className="form-label">Company Name*</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="form-input"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Right Column - Message, Checkbox, Submit */}
            <div className="form-right-column">
              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="form-group">
                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    id="marketing"
                    name="marketing"
                    className="form-checkbox-input"
                    checked={formData.marketing}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="marketing" className="form-checkbox-label" style={{ fontSize: '14px' }}>
                    I agree to receive marketing communications from Skysecure.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-group">
                <button 
                  type="submit" 
                  className="form-submit-button"
                  disabled={!formData.marketing}
                  style={{
                    opacity: formData.marketing ? 1 : 0.6,
                    cursor: formData.marketing ? 'pointer' : 'not-allowed'
                  }}
                >
                  {isSubmitted ? 'Submitted' : 'Submit Inquiry'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta-content">
            <h2 className="contact-cta-title">
              We're Here to Support Your Cybersecurity Journey
            </h2>
            <p className="contact-cta-subtitle">
              Whether you're exploring solutions, need technical support, or want to partner with us<br />
              Skysecure is just a message away.
            </p>
            <div className="contact-cta-buttons">
              <button 
                className="cta-button cta-button-primary"
                onClick={() => {
                  const element = document.getElementById('contact-form');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

