import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import '../styles/realize-page.css';

export function Realize(): React.ReactElement {
  return (
    <div className="realize-page">
      <Header />
      <main className="realize-main">
        {/* Animated Background Elements */}
        <div className="realize-background">
          <div className="realize-gradient-orb realize-orb-1"></div>
          <div className="realize-gradient-orb realize-orb-2"></div>
          <div className="realize-gradient-orb realize-orb-3"></div>
          <div className="realize-grid-pattern"></div>
        </div>

        {/* Main Content */}
        <section className="realize-hero">
          <div className="realize-container">
            <div className="realize-content">
              {/* Question Section */}
              <div className="realize-text-wrapper">
                <div className="realize-standout-question">
                  <p className="realize-question-text">
                    Ever spent hours deploying licenses or setting up agents one by one?
                  </p>
                </div>
              </div>

              {/* Response Section */}
              <div className="realize-text-wrapper">
                <div className="realize-standout-response">
                  <p className="realize-response-text">
                    Yeah… we hated that too.
                  </p>
                </div>
              </div>

              {/* Announcement Section */}
              <div className="realize-text-wrapper">
                <div className="realize-standout-announcement">
                  <p className="realize-announcement-text">
                    <span className="realize-stay-tuned">Stay tuned</span>
                    <span className="realize-separator"> — </span>
                    <span className="realize-changing">Realize is changing everything.</span>
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="realize-floating-elements">
                <div className="realize-floating-circle realize-circle-1"></div>
                <div className="realize-floating-circle realize-circle-2"></div>
                <div className="realize-floating-circle realize-circle-3"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
