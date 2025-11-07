import React, { useState } from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import '../styles/dpdp-act-2023.css';

const PROVISIONS = [
  {
    icon: 'icon-globe',
    title: 'Applicability & Scope',
    description: 'Covers all organizations processing personal data of individuals in India, including cross-border data transfers and digital activities.'
  },
  {
    icon: 'icon-leaf',
    title: 'Consent & Lawful Processing',
    description: 'Establishes clear consent mechanisms and lawful bases for processing personal data with transparency requirements.'
  },
  {
    icon: 'icon-person',
    title: 'Rights of Data Principals',
    description: 'Guarantees individual rights including access, correction, erasure, and portability of personal data.'
  },
  {
    icon: 'icon-building',
    title: 'Duties of Data Fiduciaries',
    description: 'Defines obligations for organizations including data protection measures, breach notifications, and governance frameworks.'
  },
  {
    icon: 'icon-warning-triangle',
    title: 'Penalties & Enforcement',
    description: 'Outlines monetary penalties up to ₹250 crores and enforcement mechanisms through the Data Protection Board.'
  },
  {
    icon: 'icon-arrows',
    title: 'Cross-border Transfers',
    description: 'Regulates international data transfers with specific requirements for certain countries and adequate protection measures.'
  }
];

const COMPLIANCE_STEPS = [
  {
    number: '1',
    title: 'Assessment & Gap Analysis',
    description: 'Comprehensive audit of current data practices and identification of compliance gaps against DPDP requirements.'
  },
  {
    number: '2',
    title: 'Policy & Process Alignment',
    description: 'Development of tailored policies, procedures, and governance frameworks aligned with DPDP obligations.'
  },
  {
    number: '3',
    title: 'Implementation & Monitoring',
    description: 'Systematic implementation of compliance measures with continuous monitoring and performance tracking.'
  },
  {
    number: '4',
    title: 'Audit & Improvement',
    description: 'Regular compliance audits and continuous improvement programs to maintain and enhance data protection standards.'
  }
];

export function DPDPAct2023(): React.ReactElement {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    companyName: '',
    role: ''
  });

  const [validationErrors, setValidationErrors] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {
      fullName: '',
      email: '',
      phoneNumber: ''
    };

    // Validate Full Name
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Full Name must be at least 2 characters';
    }

    // Validate Email
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errors.email = 'Please enter a valid email address';
      }
    }

    // Validate Phone Number
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone Number is required';
    } else {
      const phoneRegex = /^[0-9]{10,15}$/;
      if (!phoneRegex.test(formData.phoneNumber.trim())) {
        errors.phoneNumber = 'Please enter a valid phone number (10-15 digits)';
      } else if (formData.phoneNumber.trim()[0] === '0') {
        errors.phoneNumber = 'Phone number cannot start with 0';
      }
    }

    setValidationErrors(errors);
    return !errors.fullName && !errors.email && !errors.phoneNumber;
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/assets/Skysecure Microsoft DPDP eBook.pdf';
    link.download = 'Skysecure Microsoft DPDP eBook.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phoneNumber') {
      // Remove any non-numeric characters
      const numericValue = value.replace(/\D/g, '');
      
      // Check if first digit is 0
      if (numericValue.length > 0 && numericValue[0] === '0') {
        setValidationErrors(prev => ({
          ...prev,
          phoneNumber: 'Phone number cannot start with 0'
        }));
        return;
      } else {
        setValidationErrors(prev => ({
          ...prev,
          phoneNumber: ''
        }));
      }
      
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));

      // Clear validation error when user starts typing
      if (validationErrors[name as keyof typeof validationErrors]) {
        setValidationErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate a brief delay for better UX
      setTimeout(() => {
        downloadPDF();
        setIsSubmitting(false);
        
        // Optional: Reset form after successful download
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          country: '',
          companyName: '',
          role: ''
        });
      }, 500);
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="dpdp-hero">
          <div className="dpdp-hero__container">
            <div className="dpdp-hero__content-wrapper">
              {/* Left Content */}
              <div className="dpdp-hero__text">
                <h1 className="dpdp-hero__title">
                  Digital Personal Data Protection<br />
                  <span className="dpdp-hero__title-span">(DPDP) Act 2023</span>
                </h1>
                <p className="dpdp-hero__description">
                  Understanding India's landmark data protection legislation and how your organisation can achieve compliance with confidence.
                </p>
              </div>
              {/* Right Visual */}
              <div className="dpdp-hero__visual">
                <ImagePlaceholder
                  label="India Map with Security Locks"
                  imageName="dpdp-act/india-map-lock.png"
                  width={400}
                  height={400}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is the DPDP Act? */}
        <section className="dpdp-about">
          <div className="dpdp-about__container">
            <div className="dpdp-about__content-wrapper">
              {/* Left Content */}
              <div className="dpdp-about__text">
                <h2 className="dpdp-about__title">
                  What is the DPDP Act?
                </h2>
                <p className="dpdp-about__paragraph">
                  The Digital Personal Data Protection Act 2023 is India's comprehensive data protection law that establishes a framework for processing personal data while ensuring individual privacy rights. This landmark legislation aims to balance the need for data- driven innovation with robust protection of citizens' personal information.
                </p>
                <p className="dpdp-about__paragraph">
                  The Act applies to all organizations processing personal data of individuals within India, regardless of where the processing occurs, making compliance essential for businesses operating in the Indian market.
                </p>
                <div className="dpdp-about__info">
                  <div className="dpdp-about__info-icon">
                    <ImagePlaceholder
                      label="Gavel Icon"
                      imageName="dpdp-act/icon-gavel.png"
                      width={44}
                      height={52}
                      borderRadius={0}
                    />
                  </div>
                  <div>
                    <div className="dpdp-about__info-text">Enacted: August 2023</div>
                    <div className="dpdp-about__info-subtext">Applicable to all Indian businesses</div>
                  </div>
                </div>
              </div>
              {/* Right Visual */}
              <div className="dpdp-about__visual">
                <ImagePlaceholder
                  label="E-Book Preview"
                  imageName="dpdp-act/ebook-preview.png"
                  width={450}
                  height={450}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Download E-Book Section */}
        <section className="dpdp-download">
          <div className="dpdp-download__container">
            <div className="dpdp-download__icon-wrapper">
              <ImagePlaceholder
                label="PDF Icon"
                imageName="dpdp-act/pdf-icon.png"
                width={60}
                height={72}
                borderRadius={0}
              />
            </div>
            <h2 className="dpdp-download__title">
              Download Our Free E-Book on the DPDP Act
            </h2>
            <p className="dpdp-download__description">
              Get detailed guidance, checklists and implementation roadmap for Indian organisations navigating the DPDP Act compliance requirements.
            </p>
            <form onSubmit={handleSubmit} className="dpdp-download__form">
              <div className="dpdp-download__form-group">
                <div>
                  <label className="dpdp-download__form-label">
                    Full Name <span className="dpdp-download__form-label-required">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`dpdp-download__form-input ${validationErrors.fullName ? 'dpdp-download__form-input--error' : ''}`}
                    required
                  />
                  {validationErrors.fullName && (
                    <p className="dpdp-download__form-error">
                      {validationErrors.fullName}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="dpdp-download__form-group">
                <label className="dpdp-download__form-label">
                  Email Address <span className="dpdp-download__form-label-required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`dpdp-download__form-input ${validationErrors.email ? 'dpdp-download__form-input--error' : ''}`}
                  required
                />
                {validationErrors.email && (
                  <p className="dpdp-download__form-error">
                    {validationErrors.email}
                  </p>
                )}
              </div>
              
              <div className="dpdp-download__form-grid">
                <div>
                  <label className="dpdp-download__form-label">
                    Phone Number <span className="dpdp-download__form-label-required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`dpdp-download__form-input ${validationErrors.phoneNumber ? 'dpdp-download__form-input--error' : ''}`}
                    required
                  />
                  {validationErrors.phoneNumber && (
                    <p className="dpdp-download__form-error">
                      {validationErrors.phoneNumber}
                    </p>
                  )}
                </div>
                <div>
                  <label className="dpdp-download__form-label">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="dpdp-download__form-select"
                  >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="Singapore">Singapore</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="dpdp-download__form-grid">
                <div>
                  <label className="dpdp-download__form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="dpdp-download__form-input"
                  />
                </div>
                <div>
                  <label className="dpdp-download__form-label">
                    Select Your Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="dpdp-download__form-select"
                  >
                    <option value="">Select Role</option>
                    <option value="CISO">CISO</option>
                    <option value="Data Protection Officer">Data Protection Officer</option>
                    <option value="Legal Counsel">Legal Counsel</option>
                    <option value="Compliance Manager">Compliance Manager</option>
                    <option value="IT Director">IT Director</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="dpdp-download__form-button"
              >
                <span className="dpdp-download__form-button-icon">
                  <ImagePlaceholder
                    label="Download Icon"
                    imageName="knowledge/icon-download.png"
                    width={16}
                    height={16}
                    borderRadius={0}
                  />
                </span>
                {isSubmitting ? 'Downloading...' : 'Download PDF'}
              </button>
            </form>
          </div>
        </section>

        {/* Key Provisions & Obligations */}
        <section className="dpdp-provisions">
          <div className="dpdp-provisions__container">
            <div className="dpdp-provisions__header">
              <h2 className="dpdp-provisions__title">
                Key Provisions & Obligations
              </h2>
              <p className="dpdp-provisions__description">
                Understanding the core requirements and obligations under the DPDP Act for effective compliance
              </p>
            </div>
            <div className="dpdp-provisions__grid">
              {PROVISIONS.map((provision, index) => (
                <div key={index} className="dpdp-provisions__card">
                  <div className="dpdp-provisions__card-icon">
                    <ImagePlaceholder
                      label={provision.title}
                      imageName={`dpdp-act/${provision.icon}.png`}
                      width={60}
                      height={60}
                      borderRadius={0}
                    />
                  </div>
                  <h3 className="dpdp-provisions__card-title">
                    {provision.title}
                  </h3>
                  <p className="dpdp-provisions__card-description">
                    {provision.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Your Organisation Should Care */}
        <section className="dpdp-why-care">
          <div className="dpdp-why-care__container">
            <div className="dpdp-why-care__content-wrapper">
              {/* Left Visual */}
              <div className="dpdp-why-care__text">
                <h2 className="dpdp-why-care__title">
                  Why Your Organisation Should Care
                </h2>
                <div className="dpdp-why-care__list">
                  <div className="dpdp-why-care__item">
                    <div className="dpdp-why-care__item-icon">
                      <ImagePlaceholder
                        label="Risk Icon"
                        imageName="dpdp-act/icon-red-dot.png"
                        width={40}
                        height={48}
                        borderRadius={0}
                      />
                    </div>
                    <div className="dpdp-why-care__item-content">
                      <h3 className="dpdp-why-care__item-title">
                        Risk of Non-Compliance
                      </h3>
                      <p className="dpdp-why-care__item-description">
                        Heavy monetary penalties, legal consequences, and severe reputational damage that can impact business operations and customer trust.
                      </p>
                    </div>
                  </div>
                  <div className="dpdp-why-care__item">
                    <div className="dpdp-why-care__item-icon">
                      <ImagePlaceholder
                        label="Cross-border Icon"
                        imageName="dpdp-act/icon-blue-dot.png"
                        width={40}
                        height={48}
                        borderRadius={0}
                      />
                    </div>
                    <div className="dpdp-why-care__item-content">
                      <h3 className="dpdp-why-care__item-title">
                        Cross-border Data Impact
                      </h3>
                      <p className="dpdp-why-care__item-description">
                        Restrictions on international data transfers affect global operations, partnerships, and technology implementations.
                      </p>
                    </div>
                  </div>
                  <div className="dpdp-why-care__item">
                    <div className="dpdp-why-care__item-icon dpdp-why-care__item-icon--large">
                      <ImagePlaceholder
                        label="Competitive Advantage Icon"
                        imageName="dpdp-act/icon-green-dot.png"
                        width={42}
                        height={48}
                        borderRadius={0}
                      />
                    </div>
                    <div className="dpdp-why-care__item-content">
                      <h3 className="dpdp-why-care__item-title">
                        Competitive Advantage
                      </h3>
                      <p className="dpdp-why-care__item-description">
                        Build customer trust, enhance brand reputation, and gain competitive edge through robust data governance and privacy practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Visual */}
              <div className="dpdp-why-care__visual">
                <ImagePlaceholder
                  label="Compliance Benefits Visual"
                  imageName="dpdp-act/compliance-benefits-visual.png"
                  width={530}
                  height={550}
                  borderRadius={0}
                />
              </div>
            </div>
          </div>
        </section>

        {/* How Skysecure Helps You Comply */}
        <section className="dpdp-help">
          <div className="dpdp-help__container">
            <h2 className="dpdp-help__title">
              How Skysecure Helps You Comply
            </h2>
            <p className="dpdp-help__description">
              Our comprehensive 4-step compliance framework ensures your organization meets all DPDP Act requirements
            </p>
            <div className="dpdp-help__grid">
              {COMPLIANCE_STEPS.map((step, index) => (
                <div key={index} className="dpdp-help__step">
                  <div className="dpdp-help__step-number">
                    {step.number}
                  </div>
                  <h3 className="dpdp-help__step-title">
                    {step.title}
                  </h3>
                  <p className="dpdp-help__step-description">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
