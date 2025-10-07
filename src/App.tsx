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
import { MissionCTA } from './sections/MissionCTA';
import { Careers } from './sections/Careers';
import { Partnerships } from './sections/Partnerships';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

export function App(): React.ReactElement {
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
        <MissionCTA />
        <Careers />
        <Partnerships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
