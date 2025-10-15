import React from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { WhoWeAre } from './sections/WhoWeAre';
import { StrategicVision } from './sections/StrategicVision';
import { WhatWeDo } from './sections/WhatWeDo';
import { SecuritySolutions } from './sections/SecuritySolutions';
import { GlobalImpact } from './sections/GlobalImpact';
import { Resources } from './sections/Resources';
import { Leadership } from './sections/Leadership';
import { CoreValues } from './sections/CoreValues';
import { Careers } from './sections/Careers';
import { Partnerships } from './sections/Partnerships';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import Marketplace from './pages/Marketplace';
import SolutionImplementation from './pages/SolutionImplementation';
import OperationalExcellence from './pages/OperationalExcellence';
import SimplifiedManagement from './pages/SimplifiedManagement';
import SecurityComplianceMetrics from './pages/SecurityComplianceMetrics';
import Assessment from './pages/Assessment';
import { SOCMonitoring } from './pages/SOCMonitoring';
import { ThreatHunting } from './pages/ThreatHunting';
import { ZeroTrustArchitecture } from './pages/ZeroTrustArchitecture';
import { CloudSecurity } from './pages/CloudSecurity';
import { SecurityTraining } from './pages/SecurityTraining';
import { RiskAssessment } from './pages/RiskAssessment';
import { ManufacturingSecurityGuide } from './knowledge/ManufacturingSecurityGuide';

export function App(): React.ReactElement {
  // Check if we're on the marketplace route
  const isMarketplace = window.location.pathname === '/marketplace';
  const isSolutionImplementation = window.location.pathname === '/solution-implementation';
  const isOperationalExcellence = window.location.pathname === '/operational-excellence';
  const isSimplifiedManagement = window.location.pathname === '/simplified-management';
  const isSecurityComplianceMetrics = window.location.pathname === '/security-compliance-metrics';
  const isAssessment = window.location.pathname === '/assessment';
  const isSOCMonitoring = window.location.pathname === '/soc-monitoring';
  const isThreatHunting = window.location.pathname === '/threat-hunting';
  const isZeroTrustArchitecture = window.location.pathname === '/zero-trust-architecture';
  const isCloudSecurity = window.location.pathname === '/cloud-security';
  const isSecurityTraining = window.location.pathname === '/security-training';
  const isRiskAssessment = window.location.pathname === '/risk-assessment';
  const isManufacturingSecurityGuide = window.location.pathname === '/manufacturing-security-guide';
  
  if (isMarketplace) {
    return <Marketplace />;
  }
  
  if (isSolutionImplementation) {
    return <SolutionImplementation />;
  }
  
  if (isOperationalExcellence) {
    return <OperationalExcellence />;
  }
  
  if (isSimplifiedManagement) {
    return <SimplifiedManagement />;
  }
  
  if (isSecurityComplianceMetrics) {
    return <SecurityComplianceMetrics />;
  }
  
  if (isAssessment) {
    return <Assessment />;
  }
  
  if (isSOCMonitoring) {
    return <SOCMonitoring />;
  }
  
  if (isThreatHunting) {
    return <ThreatHunting />;
  }
  
  if (isZeroTrustArchitecture) {
    return <ZeroTrustArchitecture />;
  }
  
  if (isCloudSecurity) {
    return <CloudSecurity />;
  }
  
  if (isSecurityTraining) {
    return <SecurityTraining />;
  }
  
  if (isRiskAssessment) {
    return <RiskAssessment />;
  }
  
  if (isManufacturingSecurityGuide) {
    return <ManufacturingSecurityGuide />;
  }
  
  // Default homepage (original structure)
  return (
    <div className="main-page">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <StrategicVision />
        <WhatWeDo />
        <SecuritySolutions />
        <GlobalImpact />
        <Resources />
        <Leadership />
        <CoreValues />
        <Careers />
        <Partnerships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
