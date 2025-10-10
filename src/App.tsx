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

export function App(): React.ReactElement {
  // Check if we're on the marketplace route
  const isMarketplace = window.location.pathname === '/marketplace';
  const isSolutionImplementation = window.location.pathname === '/solution-implementation';
  const isOperationalExcellence = window.location.pathname === '/operational-excellence';
  
  if (isMarketplace) {
    return <Marketplace />;
  }
  
  if (isSolutionImplementation) {
    return <SolutionImplementation />;
  }
  
  if (isOperationalExcellence) {
    return <OperationalExcellence />;
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
