import React, { useState } from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

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
        <section style={{ 
          padding: '80px 0', 
          backgroundColor: '#FFFFFF',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)'
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
              {/* Left Content */}
              <div style={{ width: '800px' }}>
                <h1 style={{ 
                  fontSize: '48px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: '0 0 24px 0', 
                  lineHeight: '1.2' 
                }}>
                  Digital Personal Data Protection<br />
                  <span style={{ color: 'rgba(10, 78, 255, 1)' }}>(DPDP) Act 2023</span>
                </h1>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#64748B', 
                  margin: '0 0 32px 0', 
                  lineHeight: '1.6' 
                }}>
                  Understanding India's landmark data protection legislation and how your organisation can achieve compliance with confidence.
                </p>
              </div>
              {/* Right Visual */}
              <div style={{ flex: 1, textAlign: 'center' }}>
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
        <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', justifyContent: 'center' }}>
              {/* Left Content */}
              <div style={{ flex: 1, maxWidth: '500px' }}>
                <h2 style={{ 
                  fontSize: '36px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: '0 0 24px 0' 
                }}>
                  What is the DPDP Act?
                </h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#64748B', 
                  margin: '0 0 20px 0', 
                  lineHeight: '1.6' 
                }}>
                  The Digital Personal Data Protection Act 2023 is India's comprehensive data protection law that establishes a framework for processing personal data while ensuring individual privacy rights. This landmark legislation aims to balance the need for data- driven innovation with robust protection of citizens' personal information.
                </p>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#64748B', 
                  margin: '0 0 24px 0', 
                  lineHeight: '1.6' 
                }}>
                  The Act applies to all organizations processing personal data of individuals within India, regardless of where the processing occurs, making compliance essential for businesses operating in the Indian market.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '52px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    <ImagePlaceholder
                      label="Gavel Icon"
                      imageName="dpdp-act/icon-gavel.png"
                      width={44}
                      height={52}
                      borderRadius={0}
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', color: '#1F2937', fontWeight: '600', marginBottom: '4px' }}>Enacted: August 2023</div>
                    <div style={{ fontSize: '14px', color: '#64748B' }}>Applicable to all Indian businesses</div>
                  </div>
                </div>
              </div>
              {/* Right Visual */}
              <div style={{ flex: 1, textAlign: 'center', maxWidth: '450px' }}>
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
        <section style={{ 
          padding: '80px 0', 
          backgroundColor: 'rgba(10, 78, 255, 1)',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ margin: '0 auto 24px auto', display: 'flex', justifyContent: 'center' }}>
              <ImagePlaceholder
                label="PDF Icon"
                imageName="dpdp-act/pdf-icon.png"
                width={60}
                height={72}
                borderRadius={0}
              />
            </div>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: '700', 
              color: '#FFFFFF', 
              margin: '0 0 16px 0' 
            }}>
              Download Our Free E-Book on the DPDP Act
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#FFFFFF', 
              margin: '0 0 40px 0', 
              lineHeight: '1.6',
              opacity: 0.9
            }}>
              Get detailed guidance, checklists and implementation roadmap for Indian organisations navigating the DPDP Act compliance requirements.
            </p>
            <form onSubmit={handleSubmit} style={{ 
              backgroundColor: '#FFFFFF', 
              padding: '40px', 
              borderRadius: '12px',
              textAlign: 'left',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Full Name <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: validationErrors.fullName ? '1px solid #EF4444' : '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'Inter'
                    }}
                    required
                  />
                  {validationErrors.fullName && (
                    <p style={{ color: '#EF4444', fontSize: '12px', margin: '4px 0 0 0' }}>
                      {validationErrors.fullName}
                    </p>
                  )}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Email Address <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: validationErrors.email ? '1px solid #EF4444' : '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'Inter'
                    }}
                    required
                  />
                  {validationErrors.email && (
                    <p style={{ color: '#EF4444', fontSize: '12px', margin: '4px 0 0 0' }}>
                      {validationErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Phone Number <span style={{ color: '#EF4444' }}>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: validationErrors.phoneNumber ? '1px solid #EF4444' : '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'Inter'
                    }}
                    required
                  />
                  {validationErrors.phoneNumber && (
                    <p style={{ color: '#EF4444', fontSize: '12px', margin: '4px 0 0 0' }}>
                      {validationErrors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '32px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'Inter'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                    Select Your Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontFamily: 'Inter',
                      backgroundColor: '#FFFFFF'
                    }}
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
                style={{
                  backgroundColor: isSubmitting ? '#9CA3AF' : 'rgba(10, 78, 255, 1)',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'Inter',
                  margin: '0 auto',
                  opacity: isSubmitting ? 0.7 : 1
                }}
              >
                <ImagePlaceholder
                  label="Download Icon"
                  imageName="knowledge/icon-download.png"
                  width={16}
                  height={16}
                  borderRadius={0}
                />
                {isSubmitting ? 'Downloading...' : 'Download PDF'}
              </button>
            </form>
          </div>
        </section>

        {/* Key Provisions & Obligations */}
        <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ 
                fontSize: '36px', 
                fontWeight: '700', 
                color: '#1F2937', 
                margin: '0 0 16px 0' 
              }}>
                Key Provisions & Obligations
              </h2>
              <p style={{ 
                fontSize: '18px', 
                color: '#64748B', 
                maxWidth: '800px', 
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Understanding the core requirements and obligations under the DPDP Act for effective compliance
              </p>
            </div>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '24px' 
            }}>
              {PROVISIONS.map((provision, index) => (
                <div key={index} style={{ 
                  backgroundColor: '#FFFFFF', 
                  padding: '24px', 
                  borderRadius: '12px', 
                  border: '1px solid #E2E8F0',
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0px 8px 25px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0px 1px 3px rgba(0, 0, 0, 0.1)';
                }}>
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: '16px' 
                  }}>
                    <ImagePlaceholder
                      label={provision.title}
                      imageName={`dpdp-act/${provision.icon}.png`}
                      width={60}
                      height={60}
                      borderRadius={0}
                    />
                  </div>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    color: '#1F2937', 
                    margin: '0 0 12px 0' 
                  }}>
                    {provision.title}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    color: '#64748B', 
                    lineHeight: '1.5', 
                    margin: 0 
                  }}>
                    {provision.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Your Organisation Should Care */}
        <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF', width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '70px', justifyContent: 'center' }}>
              {/* Left Visual */}
              <div style={{ flex: 1, maxWidth: '530px' }}>
                <ImagePlaceholder
                  label="Compliance Benefits Visual"
                  imageName="dpdp-act/compliance-benefits-visual.png"
                  width={530}
                  height={550}
                  borderRadius={0}
                />
              </div>
              {/* Right Content */}
              <div style={{ flex: 1, maxWidth: '600px' }}>
                <h2 style={{ 
                  fontSize: '36px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: '0 0 40px 0' 
                }}>
                  Why Your Organisation Should Care
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '48px', 
                      marginTop: '2px', 
                      flexShrink: 0 
                    }}>
                      <ImagePlaceholder
                        label="Risk Icon"
                        imageName="dpdp-act/icon-red-dot.png"
                        width={40}
                        height={48}
                        borderRadius={0}
                      />
                    </div>
                    <div>
                      <h3 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#1F2937', 
                        margin: '0 0 8px 0' 
                      }}>
                        Risk of Non-Compliance
                      </h3>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#64748B', 
                        lineHeight: '1.5', 
                        margin: 0 
                      }}>
                        Heavy monetary penalties, legal consequences, and severe reputational damage that can impact business operations and customer trust.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '48px', 
                      marginTop: '2px', 
                      flexShrink: 0 
                    }}>
                      <ImagePlaceholder
                        label="Cross-border Icon"
                        imageName="dpdp-act/icon-blue-dot.png"
                        width={40}
                        height={48}
                        borderRadius={0}
                      />
                    </div>
                    <div>
                      <h3 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#1F2937', 
                        margin: '0 0 8px 0' 
                      }}>
                        Cross-border Data Impact
                      </h3>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#64748B', 
                        lineHeight: '1.5', 
                        margin: 0 
                      }}>
                        Restrictions on international data transfers affect global operations, partnerships, and technology implementations.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ 
                      width: '42px', 
                      height: '48px', 
                      marginTop: '2px', 
                      flexShrink: 0 
                    }}>
                      <ImagePlaceholder
                        label="Competitive Advantage Icon"
                        imageName="dpdp-act/icon-green-dot.png"
                        width={42}
                        height={48}
                        borderRadius={0}
                      />
                    </div>
                    <div>
                      <h3 style={{ 
                        fontSize: '18px', 
                        fontWeight: '600', 
                        color: '#1F2937', 
                        margin: '0 0 8px 0' 
                      }}>
                        Competitive Advantage
                      </h3>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#64748B', 
                        lineHeight: '1.5', 
                        margin: 0 
                      }}>
                        Build customer trust, enhance brand reputation, and gain competitive edge through robust data governance and privacy practices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Skysecure Helps You Comply */}
        <section style={{ 
          padding: '80px 0', 
          backgroundColor: 'rgba(10, 78, 255, 1)',
          textAlign: 'center',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: '700', 
              color: '#FFFFFF', 
              margin: '0 0 16px 0' 
            }}>
              How Skysecure Helps You Comply
            </h2>
            <p style={{ 
              fontSize: '18px', 
              color: '#FFFFFF', 
              margin: '0 auto 60px auto', 
              lineHeight: '1.6',
              opacity: 0.9,
              maxWidth: '800px'
            }}>
              Our comprehensive 4-step compliance framework ensures your organization meets all DPDP Act requirements
            </p>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '50px',
              marginBottom: '40px',
            }}>
              {COMPLIANCE_STEPS.map((step, index) => (
                <div key={index} style={{ textAlign: 'center' }}>
                  <div style={{ 
                    width: '60px', 
                    height: '60px', 
                    backgroundColor: '#DBEAFE', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 20px auto',
                    color: 'rgba(10, 78, 255, 1)',
                    fontSize: '24px',
                    fontWeight: '700'
                  }}>
                    {step.number}
                  </div>
                  <h3 style={{ 
                    fontSize: '20px', 
                    fontWeight: '600', 
                    color: '#FFFFFF', 
                    margin: '0 0 12px 0' 
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ 
                    fontSize: '16px', 
                    color: '#FFFFFF', 
                    lineHeight: '1.5', 
                    margin: 0,
                    opacity: 0.9
                  }}>
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
