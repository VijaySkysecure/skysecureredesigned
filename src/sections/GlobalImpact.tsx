import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';


export function GlobalImpact(): React.ReactElement {
  return (
    <section className="section--light" id="impact">
      <div className="container">
        <SectionHeader
          title="Global Security Impact"
          description="Real-time metrics and success stories from our worldwide operations"
        />
        
        {/* Metrics Section */}
        <div className="global-impact-metrics">
          {/* Live Threat Radar */}
          <div className="live-threat-radar">
            <div className="live-threat-radar__header">
              <h3 className="live-threat-radar__title">Live Threat Radar</h3>
              <div className="live-indicator">
                <span className="live-dot"></span>
                <span className="live-text">Live</span>
              </div>
            </div>
            <div className="radar-container">
              <div className="radar-circle">
                <div className="radar-ring radar-ring--1"></div>
                <div className="radar-ring radar-ring--2"></div>
                <div className="radar-ring radar-ring--3"></div>
                <div className="radar-sweep"></div>
                <div className="radar-center">
                  <div className="radar-number">247</div>
                  <div className="radar-label">Threats Blocked</div>
                  <div className="radar-time">Last 24h</div>
                </div>
              </div>
              <div className="threat-legend">
                <div className="threat-row">
                  <div className="threat-label">Malware</div>
                  <div className="threat-label">Phishing</div>
                  <div className="threat-label">Ransomware</div>
                </div>
                <div className="threat-row">
                  <div className="threat-count">87 blocked</div>
                  <div className="threat-count">134 blocked</div>
                  <div className="threat-count">26 blocked</div>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="metrics-cards">
            <div className="metric-card">
              <div className="metric-card__icon">🕐</div>
              <h4 className="metric-card__title">Response Time</h4>
              <div className="metric-card__value">2.3 min</div>
              <div className="metric-card__description">Average incident response</div>
              <div className="metric-card__progress">
                <div className="metric-card__progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-card__icon">🛡️</div>
              <h4 className="metric-card__title">Threat Prevention</h4>
              <div className="metric-card__value">99.7%</div>
              <div className="metric-card__description">Success rate</div>
              <div className="metric-card__progress">
                <div className="metric-card__progress-bar" style={{ width: '99.7%' }}></div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-card__icon">🌍</div>
              <h4 className="metric-card__title">Global Coverage</h4>
              <div className="metric-card__value">47</div>
              <div className="metric-card__description">Countries protected</div>
              <div className="metric-card__progress">
                <div className="metric-card__progress-bar" style={{ width: '67%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
