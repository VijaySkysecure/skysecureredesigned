import React, { useEffect } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { WhoWeAre } from './sections/WhoWeAre';
import { StrategicVision } from './sections/StrategicVision';
import { WhatWeDo } from './sections/WhatWeDo';
// import { SecuritySolutions } from './sections/SecuritySolutions';
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
import { AzureSentinelGuide } from './knowledge/AzureSentinelGuide';
import { CloudSecurityGuide } from './knowledge/CloudSecurityGuide';
import { HealthcareCloudSecurityOverhaul } from './knowledge/HealthcareCloudSecurityOverhaul';
import { SaaSSoftwareSupplyChain } from './knowledge/SaaSSoftwareSupplyChain';
import { AIThreatDetectionReport } from './knowledge/AIThreatDetectionReport';
import { ZeroTrustHybridCloud } from './knowledge/ZeroTrustHybridCloud';
import { DPDPAct2023 } from './pages/DPDPAct2023';
import { About } from './pages/About';
import { RansomwareEvolution } from './knowledge/RansomwareEvolution';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { TermsOfService } from './pages/TermsOfService';
import { WeeklyCyber } from './knowledge/WeeklyCyber';
import { ContactPage } from './pages/ContactPage';
import { ProfessionalServices } from './pages/ProfessionalServices';
import { ManagedServices } from './pages/ManagedServices';

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
  const isAzureSentinelGuide = window.location.pathname === '/azure-sentinel-guide';
  const isCloudSecurityGuide = window.location.pathname === '/cloud-security-guide';
  const isHealthcareCloudSecurityOverhaul = window.location.pathname === '/healthcare-cloud-security-overhaul';
  const isSaaSSoftwareSupplyChain = window.location.pathname === '/saas-software-supply-chain';
  const isAIThreatDetectionReport = window.location.pathname === '/ai-threat-detection-report';
  const isZeroTrustHybridCloud = window.location.pathname === '/zero-trust-hybrid-cloud';
  const isDPDPAct2023 = window.location.pathname === '/dpdp-act-2023';
  const isAbout = window.location.pathname === '/about';
  const isRansomwareEvolution = window.location.pathname === '/ransomware-evolution';
  const isPrivacyPolicy = window.location.pathname === '/privacy-policy';
  const isCookiePolicy = window.location.pathname === '/cookie-policy';
  const isTermsOfService = window.location.pathname === '/terms-of-service';
  const isWeeklyCyber = window.location.pathname === '/weekly-cyber';
  const isContactPage = window.location.pathname === '/contact';
  const isProfessionalServices = window.location.pathname === '/professional-services';
  const isManagedServices = window.location.pathname === '/managed-services';
  
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
  
  if (isAzureSentinelGuide) {
    return <AzureSentinelGuide />;
  }
  
  if (isCloudSecurityGuide) {
    return <CloudSecurityGuide />;
  }
  
  if (isHealthcareCloudSecurityOverhaul) {
    return <HealthcareCloudSecurityOverhaul />;
  }
  
  if (isSaaSSoftwareSupplyChain) {
    return <SaaSSoftwareSupplyChain />;
  }
  
  if (isAIThreatDetectionReport) {
    return <AIThreatDetectionReport />;
  }
  
  if (isZeroTrustHybridCloud) {
    return <ZeroTrustHybridCloud />;
  }
  
  if (isDPDPAct2023) {
    return <DPDPAct2023 />;
  }
  
  if (isAbout) {
    return <About />;
  }
  
  if (isRansomwareEvolution) {
    return <RansomwareEvolution />;
  }
  
  if (isPrivacyPolicy) {
    return <PrivacyPolicy />;
  }
  
  if (isCookiePolicy) {
    return <CookiePolicy />;
  }
  
  if (isTermsOfService) {
    return <TermsOfService />;
  }
  
  if (isWeeklyCyber) {
    return <WeeklyCyber />;
  }
  
  if (isContactPage) {
    return <ContactPage />;
  }
  
  if (isProfessionalServices) {
    return <ProfessionalServices />;
  }
  
  if (isManagedServices) {
    return <ManagedServices />;
  }
  
  // Handle hash navigation for homepage
  useEffect(() => {
    if (window.location.pathname === '/' && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(hash);
      if (element) {
        // Small delay to ensure page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  // Default homepage (original structure)
  return (
    <div className="main-page">
      <Header />
      <main>
        <Hero />
        <WhoWeAre />
        <StrategicVision />
        <WhatWeDo />
        {/* <SecuritySolutions /> */}
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
