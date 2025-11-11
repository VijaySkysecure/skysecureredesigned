import React from 'react';

export function WhoWeAre(): React.ReactElement {
  return (
    <section className="section--light" id="about" style={{ paddingTop: '80px', paddingBottom: '80px'}}>
      <div className="container">
        <div className="who-we-are__content">
          <h2 className="who-we-are__title" style={{ marginTop: '0', marginBottom: '24px' }}>Built on Trust. Evolving with Intelligence.</h2>
          <p className="who-we-are__intro">
            <strong style={{ color: 'var(--color-blue)' }}>5+ years</strong> and counting, empowering enterprises worldwide to stay secure, scale faster, and thrive through our unified, AI-powered managed services.
          </p>
          <p className="who-we-are__quote">
            "Our expertise spans a broad spectrum of industries, providing specialized solutions that transcends beyond mere protection; it is about building a resilient digital ecosystem where businesses can thrive securely and sustainably."
          </p>
          <p className="who-we-are__philosophy" style={{ fontStyle: 'italic' }}>
          Skysecure was founded with one purpose — to simplify how businesses stay secure, agile, and data-driven in a connected world.
          Over the past five years, we've evolved into an AI-powered Managed Services Provider, combining deep expertise across Cybersecurity, Data, Infrastructure, and AI Automation. Our unified framework helps enterprises protect, scale, and automate their operations with confidence.
          At the heart of our culture lies a timeless principle from the Bhagavad Gita — excellence in service without attachment to reward. This belief inspires us to work with integrity, focus on value, and build relationships grounded in trust and results.
          </p>
          <p className="who-we-are__signature">
            <strong style={{ color: 'var(--color-blue)' }}>- Suresh & Nithin (Founders)</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
