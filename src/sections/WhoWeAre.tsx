import React from 'react';

export function WhoWeAre(): React.ReactElement {
  return (
    <section className="section--light" id="about">
      <div className="container">
        <div className="who-we-are__content">
          <h2 className="who-we-are__title">Who We Are</h2>
          <p className="who-we-are__intro">
            <strong style={{ color: 'var(--color-blue)' }}>5+ years</strong> committed to enhancing the <strong style={{ color: 'var(--color-blue)' }}>digital security & resilience</strong> for clients worldwide
          </p>
          <p className="who-we-are__quote">
            "Our expertise spans a broad spectrum of industries, providing specialized solutions that transcends beyond mere protection; it is about building a resilient digital ecosystem where businesses can thrive securely and sustainably."
          </p>
          <p className="who-we-are__philosophy">
            In the heart of our business philosophy lies a timeless principle derived from the <span style={{ color: 'var(--color-blue)' }}>Bhagavad Gita: the pursuit of excellence in service and an unwavering dedication to quality</span>. This ethos guides us to focus deeply on the work at hand, prioritizing integrity and commitment without being solely driven by the anticipation of rewards or outcomes. It's a belief that by diligently performing our duties and by consistently delivering exceptional services, the fruits of our labor will naturally emerge. This approach not only fosters a culture of excellence and reliability within our team but also assures our clients that their trust is well-placed. By centering our actions around the value we provide, we create enduring relationships and build a foundation for mutual success. This philosophy is embedded in every project we undertake, ensuring that we deliver not just services, but solutions that stand the test of time, reflecting our dedication to excellence and the trust our clients place in us.
          </p>
          <p className="who-we-are__signature">
            <strong style={{ color: 'var(--color-blue)' }}>- Suresh & Nithin (founders)</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
