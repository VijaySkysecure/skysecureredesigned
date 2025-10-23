import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import '../styles/cookie-policy.css';

export function CookiePolicy(): React.ReactElement {
  return (
    <div className="cookie-policy-page">
      <Header />
      <main className="cookie-policy-main">
        <div className="container">
          <div className="cookie-policy-content">
            <h1 className="cookie-policy-title">Cookie Policy</h1>
            <p className="cookie-policy-updated">Last updated: April 21, 2025</p>
            <hr className="cookie-policy-divider" />
            
            <section className="cookie-section">
              <h2>Introduction</h2>
              <p>
                At Skysecure Technologies, we use cookies and similar tracking technologies to enhance your 
                experience on our website, analyze site usage, and deliver personalized content and advertising. This 
                Cookie Policy explains what cookies are, how we use them, and your choices regarding their use. 
                By using our website, you consent to the use of cookies as described in this policy.
              </p>
            </section>

            <section className="cookie-section">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a 
                website. They help the website recognize your device, remember your preferences, and improve your 
                browsing experience.
              </p>
              <p>Cookies can be:</p>
              <ul>
                <li><strong>Session cookies:</strong> Temporary cookies that expire once you close your browser.</li>
                <li><strong>Persistent cookies:</strong> Cookies that remain on your device for a set period or until you delete them.</li>
                <li><strong>First-party cookies:</strong> Set directly by our website.</li>
                <li><strong>Third-party cookies:</strong> Set by third-party services we use, such as analytics or advertising partners.</li>
              </ul>
            </section>

            <section className="cookie-section">
              <h2>Types of Cookies We Use</h2>
              <div className="cookie-table-wrapper">
                <table className="cookie-table">
                  <thead>
                    <tr>
                      <th>Cookie Type</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Essential Cookies</strong></td>
                      <td>Required for website functionality, such as logging in and security. Without these, the site may not work properly.</td>
                    </tr>
                    <tr>
                      <td><strong>Performance Cookies</strong></td>
                      <td>Collect information on how visitors use our site to help us improve the user experience.</td>
                    </tr>
                    <tr>
                      <td><strong>Functionality Cookies</strong></td>
                      <td>Remember your preferences and settings (e.g., language or region).</td>
                    </tr>
                    <tr>
                      <td><strong>Advertising Cookies</strong></td>
                      <td>Share offers, newsletters, and promotional content (with your consent).</td>
                    </tr>
                    <tr>
                      <td><strong>Compliance and Security</strong></td>
                      <td>Used to deliver personalized ads and track ad performance across websites.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="cookie-section">
              <h2>How We Use Cookies</h2>
              <p>We use cookies to:</p>
              <ul>
                <li>Ensure the proper functioning of the website.</li>
                <li>Analyze site traffic and usage patterns.</li>
                <li>Personalize your experience and remember your preferences.</li>
                <li>Serve targeted advertisements relevant to your interests.</li>
                <li>Enhance security and prevent fraudulent activity.</li>
              </ul>
            </section>

            <section className="cookie-section">
              <h2>Third-Party Cookies</h2>
              <p>We may allow third-party service providers to place cookies on your device, including:</p>
              <ul>
                <li>Analytics providers (e.g., Google Analytics)</li>
                <li>Advertising networks (e.g., Google Ads, Facebook Pixel)</li>
                <li>Social media platforms</li>
              </ul>
              <p>These third parties collect information according to their own privacy policies.</p>
            </section>

            <section className="cookie-section">
              <h2>Your Cookie Choices</h2>
              <p>You can manage or disable cookies through your browser settings. Most browsers allow you to:</p>
              <ul>
                <li>Block or delete cookies.</li>
                <li>Receive a warning before a cookie is stored.</li>
                <li>Clear cookies when you close your browser.</li>
              </ul>
              <p>
                Disabling cookies may affect the functionality of our website and limit your user experience.
              </p>
            </section>

            <section className="cookie-section">
              <h2>More Information and Contact</h2>
              <p>
                For more details about cookies, you can visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="cookie-link">www.allaboutcookies.org</a>.
              </p>
              <p>If you have questions or concerns about our use of cookies, please contact us at:</p>
              
              <div className="cookie-contact-box">
                <h3>Have Questions About Our Privacy Practices?</h3>
                <p>
                  We're committed to transparency and are happy to answer any questions you may have about our 
                  Privacy Policy or data practices.
                </p>
                <a href="/contact" className="cookie-contact-btn">Contact Us</a>
              </div>
            </section>

            <section className="cookie-section">
              <h2>Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              
              <div className="cookie-company-info">
                <p><strong>Skysecure Technologies, Inc.</strong></p>
                <p>AGR Plaza, 6/1, Bellandur, Bengaluru,</p>
                <p>Karnataka-560103</p>
                <p>Email: sales@skysecure.ai</p>
                <p>Phone: (+91) 73533 55526</p>
              </div>
            </section>

            <hr className="cookie-copyright-divider" />
            
            <div className="cookie-copyright">
              <p>© 2025 SkySecure Technologies, Inc.</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
          
          <section className="related-resources">
            <h2>Related Legal Resources</h2>
            <div className="resource-cards">
              <div className="resource-card">
                <div className="resource-icon privacy-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3>Privacy Policy</h3>
                <p>Learn how we collect, use, and protect your personal information when you use our Platform.</p>
              </div>
              
              <div className="resource-card">
                <div className="resource-icon cookie-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="8" cy="8" r="1"></circle>
                    <circle cx="16" cy="9" r="1"></circle>
                    <circle cx="9" cy="16" r="1"></circle>
                    <circle cx="15" cy="15" r="1"></circle>
                  </svg>
                </div>
                <h3>Cookie Policy</h3>
                <p>Understand how we use cookies and similar technologies to enhance your experience on our Platform.</p>
              </div>
              
              <div className="resource-card">
                <div className="resource-icon dispute-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="12" y1="18" x2="12" y2="12"></line>
                    <line x1="9" y1="15" x2="15" y2="15"></line>
                  </svg>
                </div>
                <h3>Dispute Resolution</h3>
                <p>Review our processes for handling disputes between buyers and sellers on the SkySecure Platform.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

