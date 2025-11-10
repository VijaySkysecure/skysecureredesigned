import React, { useState, useEffect, useRef } from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';
import { useCountUp } from '../hooks/useCountUp';

export function GlobalImpact(): React.ReactElement {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animatedCount312 = useCountUp(312, isVisible, 2000);
  const animatedCount204 = useCountUp(204, isVisible, 2000);
  const animatedCount176 = useCountUp(176, isVisible, 2000);
  const animatedCount50 = useCountUp(50, isVisible, 2500);
  
  return (
    <section ref={sectionRef} className="section--light" id="impact">
      <div className="container">
        {/* Section Header */}
        <div className="global-impact-header">
          <h2 className="global-impact-title">
            Global Security Impact
          </h2>
          <p className="global-impact-description">
            Real-time intelligence and performance metrics from Skysecure's AI-driven managed operations across Security, Data, and Infrastructure delivering measurable business resilience every day.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="global-impact-dashboard">
          {/* Top Row */}
          <div className="global-impact-top-row">
            {/* Live Operations Dashboard */}
            <div className="global-impact-operations">
              <h3 className="global-impact-operations-title">
                Live Operations Dashboard
              </h3>
              <div className="global-impact-operations-value">
                <span className="global-impact-operations-number">742</span>
                <span className="global-impact-operations-label">Events Automated</span>
              </div>
              <div className="global-impact-operations-time">
                Last 24 Hours
              </div>
            </div>

            {/* Status Indicators */}
            <div className="global-impact-status">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: '#10B981' 
                }}></div>
                <span style={{ 
                  fontSize: '14px', 
                  color: '#1F2937',
                  fontWeight: '500'
                }}>
                  All Systems Operational
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '-4px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_2_942)">
                    <path d="M11 8C11 8.69375 10.9625 9.3625 10.8969 10H5.10313C5.03438 9.3625 5 8.69375 5 8C5 7.30625 5.0375 6.6375 5.10313 6H10.8969C10.9656 6.6375 11 7.30625 11 8ZM11.9 6H15.7469C15.9125 6.64062 16 7.30937 16 8C16 8.69063 15.9125 9.35938 15.7469 10H11.9C11.9656 9.35625 12 8.6875 12 8C12 7.3125 11.9656 6.64375 11.9 6ZM15.4187 5H11.7719C11.4594 3.00312 10.8406 1.33125 10.0437 0.2625C12.4906 0.909375 14.4812 2.68438 15.4156 5H15.4187ZM10.7594 5H5.24062C5.43125 3.8625 5.725 2.85625 6.08437 2.04063C6.4125 1.30313 6.77812 0.76875 7.13125 0.43125C7.48125 0.1 7.77187 0 8 0C8.22812 0 8.51875 0.1 8.86875 0.43125C9.22187 0.76875 9.5875 1.30313 9.91562 2.04063C10.2781 2.85313 10.5687 3.85938 10.7594 5ZM4.22813 5H0.58125C1.51875 2.68438 3.50625 0.909375 5.95625 0.2625C5.15938 1.33125 4.54063 3.00312 4.22813 5ZM0.253125 6H4.1C4.03437 6.64375 4 7.3125 4 8C4 8.6875 4.03437 9.35625 4.1 10H0.253125C0.0875 9.35938 0 8.69063 0 8C0 7.30937 0.0875 6.64062 0.253125 6ZM6.08437 13.9563C5.72187 13.1438 5.43125 12.1375 5.24062 11H10.7594C10.5687 12.1375 10.275 13.1438 9.91562 13.9563C9.5875 14.6938 9.22187 15.2281 8.86875 15.5656C8.51875 15.9 8.22812 16 8 16C7.77187 16 7.48125 15.9 7.13125 15.5688C6.77812 15.2313 6.4125 14.6969 6.08437 13.9594V13.9563ZM4.22813 11C4.54063 12.9969 5.15938 14.6687 5.95625 15.7375C3.50625 15.0906 1.51875 13.3156 0.58125 11H4.22813ZM15.4187 11C14.4812 13.3156 12.4937 15.0906 10.0469 15.7375C10.8438 14.6687 11.4594 12.9969 11.775 11H15.4187Z" fill="#0A4EFF"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_2_942">
                      <path d="M0 0H16V16H0V0Z" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                <span style={{ 
                  fontSize: '14px', 
                  color: '#1F2937',
                  fontWeight: '500'
                }}>
                  Global Coverage Active
                </span>
              </div>
            </div>
          </div>


          {/* Central Hub with Intersecting Lines */}
          <div className="global-impact-hub">
            {/* Intersecting Lines */}
            <div className="global-impact-connection-lines" style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1
            }}>
              {/* Horizontal Line */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '20%',
                width: '60%',
                height: '2px',
                background: 'repeating-linear-gradient(to right, #DBEAFE 0px, #DBEAFE 8px, transparent 8px, transparent 16px)',
                transform: 'translateY(-50%)'
              }}></div>
              
              {/* Vertical Line */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '27%',
                width: '2px',
                height: '45%',
                background: 'repeating-linear-gradient(to bottom, #DBEAFE 0px, #DBEAFE 8px, transparent 8px, transparent 16px)',
                transform: 'translateX(-50%)'
              }}></div>
            </div>

            {/* Central Blue Circle */}
            <div className="global-impact-center-circle">
              <ImagePlaceholder
                label="Shield Icon"
                imageName="homepage/icon-automate.png"
                width={64}
                height={64}
                borderRadius={0}
              />
              <div className="global-impact-center-title">
                24/7 Operations
              </div>
              <div className="global-impact-center-subtitle">
                Global Coverage
              </div>
            </div>

            {/* Security Operations - Left */}
            <div className="global-impact-node global-impact-node-left">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: '#EF4444',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ImagePlaceholder
                  label="Security Operations Icon"
                  imageName="knowledge/icon-lockbit.png"
                  width={36}
                  height={48}
                  borderRadius={0}
                />
              </div>
              <div>
                <h4 className="global-impact-node-title">
                  Security detection
                </h4>
                <div className="global-impact-node-value">
                  {Math.floor(animatedCount312)}
                </div>
                <p className="global-impact-node-description">
                  Incidents contained under 5 minutes
                </p>
              </div>
            </div>

            {/* AI Agents - Right */}
            <div className="global-impact-node global-impact-node-right">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                backgroundColor: 'rgba(10, 78, 255, 0.1)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ImagePlaceholder
                  label="AI Agents Icon"
                  imageName="knowledge/icon-rocket-circle.png"
                  width={58}
                  height={58}
                  borderRadius={100}
                />
              </div>
              <div>
                <h4 className="global-impact-node-title">
                  AI Agents Actions
                </h4>
                <div className="global-impact-node-value">
                  {Math.floor(animatedCount204)}
                </div>
                <p className="global-impact-node-description">
                  Tasks automated across customer environments
                </p>
              </div>
            </div>

            {/* Data Governance - Top */}
            <div className="global-impact-node global-impact-node-top">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: 'rgba(168, 85, 247, 1)',
                borderRadius: '50%',
                flexShrink: 0
              }}>
                <ImagePlaceholder
                  label="Data Governance Icon"
                  imageName="knowledge/icon-eye-purple.png"
                  width={58}
                  height={58}
                  borderRadius={100}
                />
              </div>
              <div>
                <h4 className="global-impact-node-title">
                  Data Governance Job
                </h4>
                <div className="global-impact-node-value">
                  {Math.floor(animatedCount176)}
                </div>
                <p className="global-impact-node-description">
                  Compliance and classification tasks executed
                </p>
              </div>
            </div>

            {/* Infrastructure - Bottom */}
            <div className="global-impact-node global-impact-node-bottom">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ImagePlaceholder
                  label="Infrastructure Icon"
                  imageName="securitysolutions/icon-cloud.png"
                  width={60}
                  height={60}
                  borderRadius={0}
                />
              </div>
              <div>
                <h4 className="global-impact-node-title">
                  Infraoptimization
                </h4>
                <div className="global-impact-node-value">
                  {Math.floor(animatedCount50)}
                </div>
                <p className="global-impact-node-description">
                  Resource scaling or recovery actions
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Metrics */}
          <div className="global-impact-bottom-metrics">
            <div className="global-impact-metric">
              <span className="global-impact-metric-value">2.4M+</span>
              <span className="global-impact-metric-label">Events Processed</span>
            </div>
            <div className="global-impact-metric">
              <span className="global-impact-metric-value">150+</span>
              <span className="global-impact-metric-label">Clients Protected</span>
            </div>
            <div className="global-impact-metric">
              <span className="global-impact-metric-value">45</span>
              <span className="global-impact-metric-label">Countries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}