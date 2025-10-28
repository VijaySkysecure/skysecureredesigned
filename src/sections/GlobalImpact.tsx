import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export function GlobalImpact(): React.ReactElement {
  return (
    <section className="section--light" id="impact">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ 
            fontSize: '48px', 
            fontWeight: '700', 
            color: '#1F2937', 
            margin: '0 0 16px 0' 
          }}>
            Global Security Impact
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: '#64748B', 
            margin: '0',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6'
          }}>
            Real-time intelligence and performance metrics from Skysecure's AI-driven managed operations across Security, Data, and Infrastructure delivering measurable business resilience every day.
          </p>
        </div>

        {/* Dashboard Container */}
        <div style={{ 
          maxWidth: '1050px', 
          margin: '0 auto',
          backgroundColor: '#F8FAFC',
          borderRadius: '16px',
          padding: '48px',
          position: 'relative'
        }}>
          {/* Top Row */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '40px'
          }}>
            {/* Live Operations Dashboard */}
            <div>
              <h3 style={{ 
                fontSize: '24px', 
                fontWeight: '700', 
                color: '#1F2937', 
                margin: '0 0 8px 0' 
              }}>
                Live Operations Dashboard
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: '#0A4EFF' 
                }}>
                  742
                </span>
                <span style={{ 
                  fontSize: '16px', 
                  color: '#64748B' 
                }}>
                  Events Automated
                </span>
              </div>
              <div style={{ 
                fontSize: '14px', 
                color: '#64748B',
                marginTop: '4px'
              }}>
                Last 24 Hours
              </div>
            </div>

            {/* Status Indicators */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: '#0A4EFF' 
                }}></div>
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
          <div style={{ 
            position: 'relative',
            height: '800px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Intersecting Lines */}
            <div style={{ 
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
                left: '0',
                width: '100%',
                height: '2px',
                background: 'repeating-linear-gradient(to right, #DBEAFE 0px, #DBEAFE 8px, transparent 8px, transparent 16px)',
                transform: 'translateY(-50%)'
              }}></div>
              
              {/* Vertical Line */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                width: '2px',
                height: '100%',
                background: 'repeating-linear-gradient(to bottom, #DBEAFE 0px, #DBEAFE 8px, transparent 8px, transparent 16px)',
                transform: 'translateX(-50%)'
              }}></div>
            </div>

            {/* Central Blue Circle */}
            <div style={{ 
              width: '200px', 
              height: '200px', 
              borderRadius: '50%', 
              background: 'linear-gradient(45deg, #007FFF 50%, #0066CC 120.71%)',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 0 40px rgba(10, 78, 255, 0.3)',
              zIndex: 2
            }}>
              <ImagePlaceholder
                label="Shield Icon"
                imageName="homepage/icon-automate.png"
                width={64}
                height={64}
                borderRadius={0}
              />
              <div style={{ 
                fontSize: '18px', 
                fontWeight: '700', 
                color: '#FFFFFF',
                marginTop: '8px'
              }}>
                24/7 Operations
              </div>
              <div style={{ 
                fontSize: '14px', 
                color: '#DBEAFE',
                fontWeight: '400'
              }}>
                Global Coverage
              </div>
            </div>

            {/* Security Operations - Left */}
            <div style={{ 
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              gap: '16px',
              maxWidth: '200px',
              textAlign: 'center'
            }}>
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
                <h4 style={{ 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: '0 0 4px 0' 
                }}>
                  Security Operations
                </h4>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: '#1F2937',
                  marginBottom: '4px'
                }}>
                  312
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#64748B', 
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  incidents contained under 5 minutes
                </p>
              </div>
            </div>

            {/* AI Agents - Right */}
            <div style={{ 
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              gap: '16px',
              maxWidth: '200px',
              textAlign: 'center'
            }}>
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
                  width={48}
                  height={48}
                  borderRadius={0}
                />
              </div>
              <div>
                <h4 style={{ 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: '0 0 4px 0' 
                }}>
                  AI Agents
                </h4>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: '#1F2937',
                  marginBottom: '4px'
                }}>
                  204
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#64748B', 
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  tasks automated across customer environments
                </p>
              </div>
            </div>

            {/* Data Governance - Top */}
            <div style={{ 
              position: 'absolute',
              left: '50%',
              top: '0',
              transform: 'translateX(-50%)',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              gap: '16px',
              maxWidth: '200px',
              textAlign: 'center'
            }}>
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
                  width={48}
                  height={48}
                  borderRadius={0}
                />
              </div>
              <div>
                <h4 style={{ 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: '0 0 4px 0' 
                }}>
                  Data Governance
                </h4>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: '#1F2937',
                  marginBottom: '4px'
                }}>
                  176
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#64748B', 
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  compliance and classification tasks executed
                </p>
              </div>
            </div>

            {/* Infrastructure - Bottom */}
            <div style={{ 
              position: 'absolute',
              left: '50%',
              bottom: '0',
              transform: 'translateX(-50%)',
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              gap: '16px',
              maxWidth: '200px',
              textAlign: 'center'
            }}>
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
                <h4 style={{ 
                  fontSize: '16px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: '0 0 4px 0' 
                }}>
                  Infrastructure
                </h4>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: '#1F2937',
                  marginBottom: '4px'
                }}>
                  50
                </div>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#64748B', 
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  resource scaling or recovery actions
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Metrics */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            gap: '48px',
            marginTop: '40px',
            paddingTop: '32px',
            borderTop: '1px solid #E5E7EB'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ 
                fontSize: '20px', 
                fontWeight: '700', 
                color: '#0A4EFF' 
              }}>
                2.4M+
              </span>
              <span style={{ 
                fontSize: '16px', 
                color: '#64748B' 
              }}>
                Events Processed
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ 
                fontSize: '20px', 
                fontWeight: '700', 
                color: '#0A4EFF' 
              }}>
                150+
              </span>
              <span style={{ 
                fontSize: '16px', 
                color: '#64748B' 
              }}>
                Clients Protected
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ 
                fontSize: '20px', 
                fontWeight: '700', 
                color: '#0A4EFF' 
              }}>
                45
              </span>
              <span style={{ 
                fontSize: '16px', 
                color: '#64748B' 
              }}>
                Countries
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}