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

export function App(): React.ReactElement {
  // Check if we're on the marketplace route
  const isMarketplace = window.location.pathname === '/marketplace';
  
  if (isMarketplace) {
    return <Marketplace />;
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
