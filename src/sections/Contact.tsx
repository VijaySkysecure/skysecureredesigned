import React, { useState } from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
// @ts-ignore
import { contactApi } from '../services/api.js';
import toast, { Toaster } from 'react-hot-toast';

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

export function Contact(): React.ReactElement {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    message: '',
    consent: false
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

  const isFormValid = () => {
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.phone.trim() !== '' &&
      formData.jobTitle.trim() !== '' &&
      formData.message.trim() !== '' &&
      formData.consent === true &&
      phoneError === ''
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Prepare data for API call - mapping jobTitle to companyName
      const apiData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phone,
        companyName: formData.jobTitle,
        message: formData.message,
      };
      
      const response = await contactApi.submitContactForm(apiData);
      
      if (response.success) {
        toast.success(response.message || 'Consultation request submitted successfully!');
        // Reset form instantly after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          jobTitle: '',
          message: '',
          consent: false
        });
        setPhoneError('');
      } else {
        toast.error(response.message || 'Failed to submit consultation request. Please try again.');
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
              <form className="consultation-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">First Name *</label>
                    <input 
                      id="firstName" 
                      name="firstName" 
                      placeholder="Michael"
                      className="form-input"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName">Last Name *</label>
                    <input 
                      id="lastName" 
                      name="lastName" 
                      placeholder="Scott"
                      className="form-input"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="scott@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone *</label>
                    <input 
                      id="phone" 
                      type="tel" 
                      name="phone" 
                      placeholder="1234567890"
                      className="form-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    {phoneError && (
                      <p style={{ color: '#EF4444', fontSize: '12px', margin: '4px 0 0 0' }}>
                        {phoneError}
                      </p>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="jobTitle">Company *</label>
                    <input 
                      id="jobTitle" 
                      name="jobTitle" 
                      placeholder="Company Inc."
                      className="form-input"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your cybersecurity needs..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    style={{
                      resize: 'none',
                      height: '116px'
                    }}
                  />
                </div>

                <div className="form-field">
                  <label className="consent-label">
                    <input 
                      type="checkbox" 
                      name="consent"
                      className="checkbox-input"
                      checked={formData.consent}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="consent-text">
                      I agree to receive communications from Skysecure.ai and understand I can unsubscribe at any time. *
                    </span>
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={!isFormValid() || isLoading}
                  style={{
                    opacity: (isFormValid() && !isLoading) ? 1 : 0.6,
                    cursor: (isFormValid() && !isLoading) ? 'pointer' : 'not-allowed'
                  }}
                >
                  {isLoading ? 'Submitting...' : 'Request Consultation'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
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
    </section>
  );
}