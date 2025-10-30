import React, { useState } from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import Flag from 'country-flag-icons/react/3x2/IN';
import FlagSG from 'country-flag-icons/react/3x2/SG';
import FlagAE from 'country-flag-icons/react/3x2/AE';
// @ts-ignore
import { contactApi } from '../services/api.js';
import toast, { Toaster } from 'react-hot-toast';
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
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
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
    } else if (name === 'firstName' || name === 'lastName') {
      // Only allow letters, spaces, hyphens, and apostrophes for names
      const nameValue = value.replace(/[^a-zA-Z\s\-']/g, '');
      
      setFormData(prev => ({
        ...prev,
        [name]: nameValue
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!formData.marketing) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Prepare data for API call
      const apiData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phone,
        companyName: formData.company,
        message: formData.message,
      };
      
      const response = await contactApi.submitContactForm(apiData);
      
      if (response.success) {
        toast.success(response.message || 'Form submitted successfully!');
        // Reset form instantly after successful submission
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
      } else {
        toast.error(response.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      // Check if it's an API error with a message
      if (error instanceof Error && error.message.includes('HTTP error')) {
        toast.error('Server error. Please try again later.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
      console.error('Form submission error:', error);
    } finally {
      setIsLoading(false);
    }
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
        <div className="container">
          <div className="map-card">
            <section className="map-area">
              <div id="contact-map" className="contact-page-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.074318926514!2d77.6684169!3d12.9225901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13c9ced19e87%3A0x9eb3e6bc94ecf51f!2sSkysecure%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1716799110896!5m2!1sen!2sin" 
                  width="100%" 
                  height="500" 
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>
            
            <div className="map-info">
              <p className="map-address">Our headquarters are located at Sakti Statesman, Unit # G/M-06 & 07, Marathahalli - Sarjapur Outer Ring Rd, 7th Cross, Green Glen Layout, Ibbaluru, Bengaluru, Karnataka 560103.</p>
              <div className="directions-container">
                <a
                  href="https://maps.google.com/?q=Sakti+Statesman+Unit+G+M+06+07+Marathahalli+Sarjapur+Outer+Ring+Rd+7th+Cross+Green+Glen+Layout+Ibbaluru+Bengaluru+Karnataka+560103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-link"
                >
                  <svg className="location-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
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
                  disabled={!formData.marketing || isLoading}
                  style={{
                    opacity: (formData.marketing && !isLoading) ? 1 : 0.6,
                    cursor: (formData.marketing && !isLoading) ? 'pointer' : 'not-allowed'
                  }}
                >
                  {isLoading ? 'Submitting...' : 'Submit Inquiry'}
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
      
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 4000,
            iconTheme: {
              primary: '#10B981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#EF4444',
              secondary: '#fff',
            },
          },
        }}
      />
    </div>
  );
}

