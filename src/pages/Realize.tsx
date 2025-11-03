import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';

export function Realize(): React.ReactElement {
  return (
    <div className="main-page">
      <Header />
      <main>
        <section className="section--light" style={{ 
          minHeight: '60vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          padding: '120px 0'
        }}>
          <div className="container">
            <div style={{ 
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <h1 style={{ 
                fontSize: '48px', 
                fontWeight: '700', 
                color: '#1F2937', 
                marginBottom: '24px' 
              }}>
                Realize
              </h1>
              <p style={{ 
                fontSize: '24px', 
                color: '#64748B',
                margin: 0
              }}>
                Coming Soon
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

