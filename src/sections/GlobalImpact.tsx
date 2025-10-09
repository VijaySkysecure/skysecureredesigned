import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

const SUCCESS_STORIES = [
  {
    title: 'Enterprise Financial Services',
    description: 'Reduced security incidents by 94% and achieved SOC 2 compliance in 6 months for a Fortune 500 financial institution.',
    metric: '94%',
    metricLabel: 'Incident Reduction',
    imageName: 'icon-client.png',
  },
  {
    title: 'Healthcare Network',
    description: 'Protected patient data across 15 hospitals while maintaining HIPAA compliance and zero downtime during implementation.',
    metric: '100%',
    metricLabel: 'Uptime Maintained',
    imageName: 'icon-client.png',
  },
  {
    title: 'E-commerce Platform',
    description: 'Prevented $2.4M in potential losses from cyber attacks during peak shopping season with real-time threat detection.',
    metric: '$2.4M',
    metricLabel: 'Losses Prevented',
    imageName: 'icon-client.png',
  },
];

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

        {/* Success Stories Section */}
        <div className="success-stories">
          {SUCCESS_STORIES.map((story) => (
            <div key={story.title} className="success-story-card">
              <ImagePlaceholder
                className="success-story-card__icon"
                label={`${story.title} icon`}
                imageName={story.imageName}
                width={45}
                height={45}
                borderRadius={0}
              />
              <h3 className="success-story-card__title">{story.title}</h3>
              <p className="success-story-card__description">{story.description}</p>
              <div className="success-story-card__metric">
                <div className="success-story-card__metric-value">{story.metric}</div>
                <div className="success-story-card__metric-label">{story.metricLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
