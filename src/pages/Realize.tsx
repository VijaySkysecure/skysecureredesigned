import React from 'react';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

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
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <ImagePlaceholder
                  label="Realize logo"
                  imageName="realize/logo.png"
                  width={60}
                  height={60}
                  borderRadius={0}
                />
                <h1 style={{ 
                  fontSize: '48px', 
                  fontWeight: '700', 
                  color: '#1F2937', 
                  margin: 0
                }}>
                  Realize
                </h1>
              </div>
              <p className="realize-coming-soon" style={{ 
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

